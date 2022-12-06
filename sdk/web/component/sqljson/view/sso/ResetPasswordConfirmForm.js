var ResetPasswordConfirmForm = function resetPasswordConfirmForm(props)
{
    let frm = {};
    let txtCode;
    let txtPassword;
    let txtRePassword;

    let btnSubmit;
    let divrowcaptcha;
    let captchaWidgetId;

    construct();

    function construct()
    {
        props.FormColumns = 1;

        frm = new FormModal(props);

        txtCode = Inputs.CreateFormInput({ Id: "txtCode", Name: "Code", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Confirmation Code", MinimumValue: 4, MaximumValue: 36, Note: "A code we sent to your email", TabIndex: 1 });
        frm.Body.Panel.Add(txtCode);

        txtPassword = Inputs.CreateFormInput({ Id: "txtPassword", Name: "Password", InputType: InputType.Password, Required: true, StatusType: StatusType.Edit, Label: "Password", MinimumValue: 4, MaximumValue: 128, Note: "Password", TabIndex: 2 });
        frm.Body.Panel.Add(txtPassword);

        txtRePassword = Inputs.CreateFormInput({ Id: "txtRePassword", Name: "RePassword", InputType: InputType.Password, Required: true, StatusType: StatusType.Edit, Label: "Retype Password", MinimumValue: 8, MaximumValue: 128, Note: "Retype Password", TabIndex: 3 });
        frm.Body.Panel.Add(txtRePassword);

        frm.Body.Panel.Load();

        divrowcaptcha = Inputs.CreateInput({ Id: "captcha", Name:"captcha", InputType: InputType.Captcha, Label: "", Note: "", TabIndex: 4 });
        frm.Body.appendChild(divrowcaptcha);

        btnSubmit = Inputs.CreateButton({
            Id: "btnSubmit", Name: " Reset", Type: ButtonType.Submit, Class: props.Theme.ButtonClass, TabIndex: 5,
            Icon: "fas fa-lock-open", Label:"Reset",
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

        txtCode.Input.focus();
    }

    function validate()
    {
        if (txtCode.Input.value == "")
        {
            return -1;
        }
        if (txtCode.Input.value.length < 4)
        {
            MsgBox.Show("Minimum code length is 4 characters");
            return -1;
        }
        if (!Utils.ValidateString(txtCode.Input.value))
        {
            MsgBox.Show("Code can only contains letter and number.");
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

        props.Authenticator.ResetPasswordConfirmation(txtCode.Input.value, txtPassword.Input.value, txtRePassword.Input.value, function (data)
        {
            if (data == null)
            {
                MsgBox.Show("Reset Password Confirmation failed");
                return;
            }

            if (data <= 0)
            {
                if (data == -1)
                {
                    MsgBox.Show("Email Not Found");
                }
                else
                {
                    MsgBox.Show("Reset Password Failed, please try again later");
                }

                return;
            }

            let msg = "Your password have been changed succesfully, please go to login form to sign in";
            let msgOk = new MsgOkCancel({
                Id: "MsgOkCancel",
                Label: "Reset Password Succeed", Text: msg,
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