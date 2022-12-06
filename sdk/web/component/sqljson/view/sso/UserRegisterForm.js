var UserRegisterForm = function userRegisterForm(props)
{
    const MINLENGTH = 8;

    let frm = {};
    let txtUsername;
    let txtEmail;
    let txtPassword;
    let txtRePassword;
    let btnSubmit;
    let divrowcaptcha;
    let captchaWidgetId;

    construct();

    function construct()
    {
        props.FormColumns = 2;

        frm = new FormModal(props);

        txtUsername = Inputs.CreateFormInput({ Id: "txtUsername", Name: "Name", InputType: InputType.AlphaNumeric, Required: true, StatusType: StatusType.Edit, Label: "Username (min 8 chars)", MinimumValue: MINLENGTH, MaximumValue: 85, Note: "Username max length 32 to login to our system", TabIndex: 1 });
        frm.Body.Panel.Add(txtUsername);

        txtEmail = Inputs.CreateFormInput({ Id: "txtEmail", Name: "Email", InputType: InputType.Email, Required: true, StatusType: StatusType.Edit, Label: "Email", MinimumValue: MINLENGTH, MaximumValue: 85, Note: "Email", TabIndex: 2 });
        frm.Body.Panel.Add(txtEmail);

        txtPassword = Inputs.CreateFormInput({ Id: "txtPassword", Name: "Password", InputType: InputType.Password, Required: true, StatusType: StatusType.Edit, Label: "Password", MinimumValue: MINLENGTH, MaximumValue: 128, Note: "Password", TabIndex: 3 });
        frm.Body.Panel.Add(txtPassword);

        txtRePassword = Inputs.CreateFormInput({ Id: "txtRePassword", Name: "RePassword", InputType: InputType.Password, Required: true, StatusType: StatusType.Edit, Label: "Retype Password", MinimumValue: MINLENGTH, MaximumValue: 128, Note: "Retype Password", TabIndex: 4 });
        frm.Body.Panel.Add(txtRePassword);

        frm.Body.Panel.Load();

        divrowcaptcha = Inputs.CreateInput({ Id: "captcha", Name: "captcha", InputType: InputType.Captcha, Label: "", Note: "", TabIndex: 5 });
        frm.Body.appendChild(divrowcaptcha);

        btnSubmit = Inputs.CreateButton({
            Id: "btnSubmit", Name: " Register", ButtonType: ButtonType.Submit, Class: props.Theme.ButtonClass, TabIndex: 6,
            Icon: "fas fa-user-plus", Label: "Register",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }

                //2022-03-17
                //directly register activate and login due to a lot of case on which user register but not activate and never come back
                registerActivateLogin();
            }
        });

        frm.Panel.AddButton(btnSubmit);

        captchaWidgetId = Inputs.RenderCapcha("captcha");

        txtUsername.Input.focus();
    }

    function validate()
    {   
        if (txtUsername.Input.value == "")
        {
            return -1;
        }
        if (txtUsername.Input.value.length < MINLENGTH)
        {
            MsgBox.Show("Required Usename at least " + MINLENGTH.toString() + " characters");
            return -1;
        }
        if (!Utils.ValidateString(txtUsername.Input.value))
        {
            MsgBox.Show("Username can only contains letter and number.");
            return -1;
        }

        if (txtEmail.Input.value == "")
        {
            return -1;
        }
        if (!Utils.IsEmailValid(txtEmail.Input.value))
        {
            return -1;
        }

        if (txtPassword.Input.value == "")
        {
            return -1;
        }

        if (txtRePassword.Input.value != txtPassword.Input.value)
        {
            MsgBox.Show("Password and Re-password is not same");
            return -1;
        }

        return 1;
    }

    function registerActivateLogin()
    {
        let captcharesponse = grecaptcha.getResponse(captchaWidgetId);
        if (captcharesponse == null || !captcharesponse)
        {
            MsgBox.Show("Invalid Captcha");
            return;
        }

        if (validate() < 1)
        {
            return;
        }

        MsgLoading.Show(true, "<br/>Please wait 1-2 minutes, after that you can use our application solutions for free, setup it first in the next screen, select the application types you want, click the box. <ul>We provides: <li>1) Cloud Backend (SQL Cloud, Middleware, etc...).</li> <li>2) Intelligent Apps (Chatbot, Decision Support System, etc...).</li> <li>3) Web Builder to create company website, CMS, Customer Service Live Chat, etc...).</li> <li>4) Web Hosting. </li> Please remind that you need to update your Workgroup Data to order a domain name. </ul>If you need help, please <a href='https://wa.me/6285711269999' target='_blank'>WhatsApp 6285711269999</a> us or <a href='https://t.me/ardvro' target='_blank'>Telegram 6285711269999</a> us.");

        props.Authenticator.RegisterActivateLogin(txtUsername.Input.value.trim().toLowerCase(), txtPassword.Input.value, txtRePassword.Input.value, txtEmail.Input.value, function (data)
        {
            MsgLoading.Close();

            if (data == null)
            {
                MsgBox.Show("Register failed");
                return;
            }
            else
            {
                if (data == "0")
                {
                    MsgBox.Show("Activation failed, please try again later");
                    return;
                }
                else if (data == "-1")
                {
                    MsgBox.Show("Username cannot contain special characters");
                    return;
                }
                else if (data == "-2")
                {
                    MsgBox.Show("Password and confirm password is not same");
                    return;
                }
                else if (data == "-3")
                {
                    MsgBox.Show("Password and confirm password is not same");
                    return;
                }
                else if (data == "-4")
                {
                    MsgBox.Show("Invalid email format");
                    return;
                }
                else if (data == "-5")
                {
                    MsgBox.Show("The username is in registration process");
                    return;
                }
                else if (data == "-6")
                {
                    MsgBox.Show("The username already being use");
                    return;
                }
                else if (data == "-7")
                {
                    MsgBox.Show("The email already being use");
                    return;
                }
            }

            if (props.DashboardUrl != null && props.DashboardUrl != "")
            {
                props.Authenticator.SaveLoginData(data);
                frm.Close();
                window.location.href = props.DashboardUrl;
                return;
            }
            else
            {
                let msg = "Registration successfull, you need to activate your account first, we will send the activation code to your email shortly. If you did not receive any email, check it in Spam Folder and mark it as not spam, or contact us on https://www.ardvro.com/contactus";
                let msgOk = new MsgOkCancel({
                    Id: "MsgOkCancel",
                    Label: "Check Your Email", Text: msg,
                    OnOkClick: function (e)
                    {
                        if (props.OnRegistered != null)
                        {
                            props.OnRegistered(e);
                        }

                        msgOk.Close();
                        frm.Close();

                        let frmReg = new UserWorkgroupActivationForm({
                            Id: "UserWorkgroupActivationForm", Label: "User Workgroup Activation", Theme: props.Theme,
                            Authenticator: props.Authenticator,
                            RedirectUrl: props.RedirectUrl
                        });
                    }
                });
            }

        });

    }

    function register()
    {
        let captcharesponse = grecaptcha.getResponse(captchaWidgetId);
        if (captcharesponse == null || !captcharesponse)
        {
            MsgBox.Show("Invalid Captcha");
            return;
        }

        if (validate() < 1)
        {
            return;
        }

        MsgLoading.Show(true);
        props.Authenticator.Register(txtUsername.Input.value.trim().toLowerCase(), txtPassword.Input.value, txtRePassword.Input.value, txtEmail.Input.value, function (data)
        {
            if (data == null)
            {
                MsgBox.Show("Register failed");
                return;
            }

            if (data <= 0)
            {
                if (data == -1)
                {
                    MsgBox.Show("Username cannot contain special characters");
                }
                else if (data == -2)
                {
                    MsgBox.Show("Password and confirm password is not same");
                }
                else if (data == -3)
                {
                    MsgBox.Show("Password and confirm password is not same");
                }
                else if (data == -4)
                {
                    MsgBox.Show("Invalid email format");
                }
                else if (data == -5)
                {
                    MsgBox.Show("The username is in registration process");
                }
                else if (data == -6)
                {
                    MsgBox.Show("The username already being use");
                }
                else if (data == -7)
                {
                    MsgBox.Show("The email already being use");
                }
                else
                {
                    MsgBox.Show("Registration failed, please try again later");
                }

                return;
            }

            let msg = "Registration successfull, you need to activate your account first, we will send the activation code to your email shortly. If you did not receive any email, check it in Spam Folder and mark it as not spam, or contact us on https://www.ardvro.com/contactus";
            let msgOk = new MsgOkCancel({ Id : "MsgOkCancel",
                Label: "Check Your Email", Text: msg,
                OnOkClick: function (e)
                {
                    if (props.OnRegistered != null)
                    {
                        props.OnRegistered(e);
                    }

                    msgOk.Close();
                    frm.Close();

                    let frmReg = new UserWorkgroupActivationForm({
                        Id: "UserWorkgroupActivationForm", Label: "User Workgroup Activation", Theme: props.Theme,
                        Authenticator: props.Authenticator,
                        RedirectUrl: props.RedirectUrl
                    });
                }
            });

        });

    }

    return frm;
};