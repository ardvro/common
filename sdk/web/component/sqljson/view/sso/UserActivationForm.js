var UserActivationForm = function userActivationForm(props)
{
    let frm = {};
    let txtCode;
    let chkRemember;
    let btnSubmit;
    let divrowcaptcha;
    let captchaWidgetId;

    construct();

    function construct()
    {
        props.FormColumns = 1;

        frm = new FormModal(props);

        txtCode = Inputs.CreateFormInput({ Id: "txtCode", Name: "Code", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Code", MinimumValue: 36, MaximumValue: 36, Note: "The code we sent to your email", TabIndex: 1 });
        frm.Body.Panel.Add(txtCode);

        chkRemember = Inputs.CreateFormInput({ Id: "chkRemember", Name: "Remember", InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Remember", Note: "Remember Me On Next Login", TabIndex: 2 });
        frm.Body.Panel.Add(chkRemember);

        frm.Body.Panel.Load();

        divrowcaptcha = Inputs.CreateInput({ Id: "captcha", Name:"captcha", InputType: InputType.Captcha, Label: "", Note: "", TabIndex: 3 });
        frm.Body.appendChild(divrowcaptcha);

        btnSubmit = Inputs.CreateButton({
            Id: "btnSubmit", Name: " Activate", ButtonType: ButtonType.Submit, Class: props.Theme.ButtonClass, TabIndex: 4,
            Icon: "fas fa-user-check", Label : "Submit",
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
        if (!Utils.IsEmailValid(txtCode.Input.value))
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

        props.Authenticator.ActivateUser(txtCode.Input.value, chkRemember.Input.checked, function (data)
        {
            if (data == null)
            {
                MsgBox.Show("User Activation Failed");
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
                    MsgBox.Show("User Activation Failed, please try again later");
                }

                return;
            }

            if (props.OnLogin != null)
            {
                frm.Close();
                props.OnLogin(usr);
            }
            else
            {
                document.location.reload();
            }
        });
    }

    return frm;
};