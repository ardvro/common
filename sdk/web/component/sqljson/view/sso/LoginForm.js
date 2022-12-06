var LoginForm = function formLogin(props)
{
    let frm = {};

    let btnSubmit;
    let btnForgot;
    let btnRegister;
    let btnRequestCode;

    let divrowcaptcha;
    let captchaWidgetId;

    let txtUsername;
    let txtPassword;
    let txtCode;
    let chkRemember;

    construct();

    function construct()
    {
        props.FormColumns = 1;
        let tabIndex = 1;

        frm = new FormModal(props);

        txtUsername = Inputs.CreateFormInput({ Id: "txtUsername", Name: "Name", InputType: InputType.AlphaNumeric, Required: true, StatusType: StatusType.Edit, Label: "Username", MinimumValue: 1, MaximumValue: 85, Note: "Username max length 32 to login to our system", TabIndex: tabIndex });
        frm.Body.Panel.Add(txtUsername);
        tabIndex++;

        txtPassword = Inputs.CreateFormInput({ Id: "txtPassword", Name: "Password", InputType: InputType.Password, Required: true, StatusType: StatusType.Edit, Label: "Password", MinimumValue: 8, MaximumValue: 128, Note: "Password", TabIndex: tabIndex });
        frm.Body.Panel.Add(txtPassword);
        tabIndex++;

        txtCode = Inputs.CreateFormInput({ Id: "txtCode", Name: "OTP Code", InputType: InputType.Text, Required: false, StatusType: StatusType.Edit, Label: "OTP Code", MinimumValue: 0, MaximumValue: 32, Note: "If you set login type to TwoFactorsLogin, then you need to request OTP Code first then enter the OTP Code here", TabIndex: tabIndex });
        frm.Body.Panel.Add(txtCode);
        txtCode.setAttribute("hidden", "");
        tabIndex++;

        //chkRemember = Inputs.CreateFormInput({ Id: "chkRemember", Name: "Remember", InputType: InputType.CheckBox, Status: StatusType.Edit, Label: "Remember", Note: "Remember Me On Next Login", TabIndex: 3 });
        //frm.Body.Panel.Add(chkRemember);

        frm.Body.Panel.Load();

        divrowcaptcha = Inputs.CreateInput({ Id: "loginformcaptcha", Name: "captcha", InputType: InputType.Captcha, Label: "", Note: "", TabIndex: tabIndex });
        frm.Body.appendChild(divrowcaptcha);
        tabIndex++;

        btnSubmit = Inputs.CreateButton({
            Id: "btnSubmit", Name: " Login", ButtonType: ButtonType.Submit, Class: props.Theme.ButtonClass, TabIndex: tabIndex,
            Icon: "fas fa-unlock-alt", Label:"Login",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                submit();
            }
        });
        frm.Panel.AddButton(btnSubmit);
        tabIndex++;

        btnRegister = Inputs.CreateButton({
            Id: "btnRegister", Name: " Register", ButtonType: ButtonType.Button, Class: props.Theme.ButtonClass, TabIndex: tabIndex,
            Icon: "fas fa-user-plus", Label: "If you don't have account, Register here",
            OnClick: function (e)
            {
                frm.Close();
                let frmReg = new UserRegisterForm({
                    Id: "register", Label: "Register", ParentHtmlId: "modal", Theme: props.Theme,
                    Authenticator: props.Authenticator,
                    RedirectUrl: props.RedirectUrl
                });
            }
        });
        frm.Panel.AddButton(btnRegister);
        tabIndex++;

        btnForgot = Inputs.CreateButton({
            Id: "btnForgot", Name: " Reset Password", ButtonType: ButtonType.Button, Class: props.Theme.ButtonClass, TabIndex: tabIndex,
            Icon: "fas fa-user-lock", Label: "If you forgot your password, Reset Password here",
            OnClick: function (e)
            {
                frm.Close();
                let frmResetPassword = new ResetPasswordForm({
                    Id: "resetpassword", Label: "Reset Password", Theme: props.Theme,
                    Authenticator: props.Authenticator
                });
            }
        });
        frm.Panel.AddButton(btnForgot);
        tabIndex++;

        btnRequestCode = Inputs.CreateButton({
            Id: "btnRequestCode", Name: " Request OTP", ButtonType: ButtonType.Button, Class: props.Theme.ButtonClass, TabIndex: tabIndex,
            Icon: "fas fa-key", Label: "Request OTP",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                requestOtpCode();
            }
        });
        frm.Panel.AddButton(btnRequestCode);
        tabIndex++;

        captchaWidgetId = Inputs.RenderCapcha("loginformcaptcha");

        txtUsername.Input.focus();
    }

    function validate()
    {
        if (txtUsername.Input.value === "")
        {
            return -1;
        }
        if (!Utils.ValidateString(txtUsername.Input.value))
        {
            MsgBox.Show("Username can only contains letter and number.");
            return -1;
        }

        if (txtPassword.Input.value == "")
        {
            return -1;
        }

        let captcharesponse = grecaptcha.getResponse(captchaWidgetId);
        if (captcharesponse == null || !captcharesponse)
        {
            MsgBox.Show("Invalid Captcha");
            return -1;
        }

        return 1;
    }

    function requestOtpCode()
    {
        let frm = new OtpRequestForm({
            Id: "otprequestform", Label: "Request OTP Code", Theme: props.Theme,
            Authenticator: props.Authenticator
        });
        txtCode.removeAttribute("hidden");
    }

    function submit()
    {
        if (validate() < 1)
        {
            return;
        }

        MsgLoading.Show();
        if (txtCode.Input.value != "")
        {
            props.Authenticator.TwoFactorsLogin(txtUsername.Input.value, txtPassword.Input.value, txtCode.Input.value, true, function (user)
            {
                MsgLoading.Close();
                if (user == null)
                {
                    MsgBox.Show("Login Failed");
                    return;
                }

                if (props.OnLogin != null)
                {
                    frm.Close();
                    props.OnLogin(user);
                }
            });
        }
        else
        {
            props.Authenticator.Login(txtUsername.Input.value, txtPassword.Input.value, true, function (user)
            {
                MsgLoading.Close();
                if (user == null)
                {
                    MsgBox.Show("Login Failed");
                    return;
                }

                if (props.OnLogin != null)
                {
                    frm.Close();
                    props.OnLogin(user);
                }
            });
        }

        
    }

    return frm;
};