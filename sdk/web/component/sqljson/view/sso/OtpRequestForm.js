var OtpRequestForm = function otpRequestForm(props)
{
    let frm = {};
    let txtEmail;
    let btnSubmit;
    let divrowcaptcha;
    let captchaWidgetId;

    construct();

    function construct()
    {
        props.FormColumns = 1;

        frm = new FormModal(props);

        txtEmail = Inputs.CreateFormInput({ Id: "txtEmail", Name: "Email", InputType: InputType.Email, Required: true, StatusType: StatusType.Edit, Label: "Email", MinimumValue: 8, MaximumValue: 255, Note: "Email", TabIndex: 1 });
        frm.Body.Panel.Add(txtEmail);

        frm.Body.Panel.Load();

        divrowcaptcha = Inputs.CreateInput({ Id: "requestotpcaptcha", Name:"captcha", InputType: InputType.Captcha, Label: "", Note: "", TabIndex: 2 });
        frm.Body.appendChild(divrowcaptcha);

        btnSubmit = Inputs.CreateButton({
            Id: "btnSubmit", Name: " Submit", ButtonType: ButtonType.Submit, Class: props.Theme.ButtonClass, TabIndex: 3,
            Icon: "fas fa-paper-plane", Label:"Submit",
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

        captchaWidgetId = Inputs.RenderCapcha("requestotpcaptcha");

        txtEmail.Input.focus();
    }

    function validate()
    {
        if (txtEmail.Input.value === "")
        {
            return -1;
        }
        if (!Utils.IsEmailValid(txtEmail.Input.value))
        {
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

        props.Authenticator.RequestOtp(txtEmail.Input.value, "Email", function (data)
        {
            if (data == null)
            {
                MsgBox.Show("Request Failed");
                return;
            }

            if (data == "")
            {
                MsgBox.Show("Email not found");
                return;
            }

            let msg = "Please Check Your Email To Get Your Code";
            let msgOk = new MsgOkCancel({
                Id: "MsgOkCancel",
                Label: "Check Your Email", Text: msg,
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
