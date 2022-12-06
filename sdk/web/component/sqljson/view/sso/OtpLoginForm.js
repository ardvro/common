var OtpLoginForm = function otpLoginForm(props)
{
    let frm = {};

    let txtCode;

    let btnSubmit;
    let captchaWidgetId;
    let divrowcaptcha;

    construct();

    function construct()
    {
        props.FormColumns = 1;

        frm = new FormModal(props);

        txtCode = Inputs.CreateFormInput({ Id: "txtCode", Name: "code", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Code", MinimumValue: 8, MaximumValue: 85, Note: "The code we sent to your email", TabIndex: 1 });
        frm.Body.Panel.Add(txtCode);

        chkRemember = Inputs.CreateFormInput({ Id: "chkRemember", Name: "Remember", InputType: InputType.CheckBox, StatusType: StatusType.View, Label: "Remember", Note: "Remember Me On Next Login", TabIndex: 2 });
        frm.Body.Panel.Add(chkRemember);
        chkRemember.Input.checked = true;

        frm.Body.Panel.Load();

        divrowcaptcha = Inputs.CreateInput({ Id: "captcha", Name: "captcha", InputType: InputType.Captcha, Label: "", Note: "", TabIndex: 3 });
        frm.Body.appendChild(divrowcaptcha);

        btnSubmit = Inputs.CreateButton({
            Id: "btnSubmit", Name: " Login", ButtonType: ButtonType.Submit, Class: props.Theme.ButtonClass, TabIndex: 4,
            Icon: "fas fa-unlock-alt", Label: "Login",
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

        let captcharesponse = grecaptcha.getResponse(captchaWidgetId);
        if (captcharesponse == null || !captcharesponse)
        {
            MsgBox.Show("Invalid Captcha");
            return;
        }

        return 1;
    }

    function submit()
    {
        if (validate() < 1)
        {
            return;
        }

        props.Authenticator.OtpLogin(txtCode.Input.value, chkRemember.Input.checked, function (data)
        {
            if (data == null)
            {
                MsgBox.Show("OTP Login Failed");
                return;
            }

            if (data <= 0)
            {
                if (data == -1)
                {
                    MsgBox.Show("Code Not Found");
                }
                else
                {
                    MsgBox.Show("OTP Login Failed, please try again later");
                }

                return;
            }

            if (props.OnLogin != null)
            {
                frm.Close();
                props.OnLogin(data);
            }
            else
            {
                document.location.href = props.WebBaseUrl;
            }
        });

    }

    return frm;
};