var ChangePasswordForm = function formChangePassword(props)
{
    let frm = {};

    let btnSubmit;
    let captchaWidgetId;
    let divrowcaptcha;

    let txtUsername;
    let txtPassword;
    let txtNewPassword;
    let txtRePassword;

    construct();

    function construct()
    {
        props.FormColumns = 2;

        frm = new FormModal(props);

        txtUsername = Inputs.CreateFormInput({ Id: "txtUsername", Name: "Name", InputType: InputType.AlphaNumeric, Required: true, StatusType: StatusType.Edit, Label: "Username", MinimumValue: 1, MaximumValue: 8, Note: "Username max length 8 to login to our system", TabIndex: 1 });
        frm.Body.Panel.Add(txtUsername);

        txtPassword = Inputs.CreateFormInput({ Id: "txtPassword", Name: "Password", InputType: InputType.Password, Required: true, StatusType: StatusType.Edit, Label: "Password", MinimumValue: 8, MaximumValue: 128, Note: "Password", TabIndex: 2 });
        frm.Body.Panel.Add(txtPassword);

        txtNewPassword = Inputs.CreateFormInput({ Id: "txtNewPassword", Name: "NewPassword", InputType: InputType.Password, Required: true, StatusType: StatusType.Edit, Label: "Password", MinimumValue: 8, MaximumValue: 128, Note: "New Password", TabIndex: 3 });
        frm.Body.Panel.Add(txtNewPassword);

        txtRePassword = Inputs.CreateFormInput({ Id: "txtRePassword", Name: "RePassword", InputType: InputType.Password, Required: true, StatusType: StatusType.Edit, Label: "Retype New Password", MinimumValue: 8, MaximumValue: 128, Note: "New Password", TabIndex: 4 });
        frm.Body.Panel.Add(txtRePassword);

        frm.Body.Panel.Load();

        divrowcaptcha = Inputs.CreateInput({ Id: "captcha", Name: "captcha", InputType: InputType.Captcha, Label: "", Note: "", TabIndex: 5 });
        frm.Body.appendChild(divrowcaptcha);

        btnSubmit = Inputs.CreateButton({
            Id: "btnSubmit", Name: " Submit", ButtonType: ButtonType.Submit, Class: props.Theme.ButtonClass, TabIndex: 6,
            Icon: "fas fa-paper-plane",
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

        captchaWidgetId = Inputs.RenderCapcha("captcha");

        txtUsername.Input.focus();
    }

    function validate()
    {
        if (txtUsername.Input.value == "")
        {
            return -1;
        }
        if (txtUsername.Input.value.length < 3)
        {
            MsgBox.Show("Required Usename length 8 characters");
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

        if (txtNewPassword.Input.value == "")
        {
            return -1;
        }

        if (txtRePassword.Input.value != txtNewPassword.Input.value)
        {
            MsgBox.Show("Password and Re-password is not same");
            return -1;
        }

        return 1;
    }

    function submit()
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

        props.Authenticator.ChangePassword(txtUsername.Input.value, txtPassword.Input.value, txtNewPassword.Input.value, txtRePassword.Input.value, function (data)
        {
            if (data == null)
            {
                MsgBox.Show("Change Password Failed");
                return;
            }

            if (data == null || data <= 0)
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
                    MsgBox.Show("Change password failed, please try again later");
                }

                return;
            }

            let msg = "Your Password Have Been Changed";
            let msgOk = new MsgOkCancel({
                Id: "MsgOkCancel",
                Label: "Change Password Succeed",
                Text: msg,
                OnOkClick: function (e)
                {
                    msgOk.Close();
                    frm.Close();
                }
            });
        });

    }

    return frm;
};