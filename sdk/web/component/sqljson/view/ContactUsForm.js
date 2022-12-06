var ContactUsForm = function ContactUsForm(props)
{
    let ctrl = new EmailController({ Connector: props.Connector });

    let frm = {};

    let btnSubmit;
    let btnForgot;
    let btnRegister;

    let divrowcaptcha;
    let captchaWidgetId;

    let txtName;
    let txtEmail;
    let txtSubject;
    let txtContent;

    construct();

    function construct()
    {
        props.FormColumns = 1;

        //frm = new FormModal(props);
        frm = new FormPanel({ Id: props.Id });

        //if (props.Desktop != null && props.Desktop.GetTypeName() === DesktopType.WebUrl)
        //{
        //    let btnBack = Inputs.CreateBackButton(props.Id.concat("_btnBack"), props.Theme.ButtonClass);
        //    frm.Body.appendChild(btnBack);

        //    let btnLink = Inputs.CreateLinkButton(props.Id.concat("_btnLink"), props.Theme.ButtonClass);
        //    frm.Body.appendChild(btnLink);
        //}
        
        if (props.ContentUrl != null)
        {
            let panel = new PanelUrl(
                {
                    Id: props.Id.concat("urlcontact"),
                    ContentUrl: props.ContentUrl,
                    OnLoad: function (div, body)
                    {
                          panel.appendChild(body);
                    //    let social = initSocialMediaPanel();
                    //    panel.appendChild(social);
                    //    panel.appendChild(document.createElement("br"));
                    //    panel.appendChild(document.createElement("br"));
                    }
                }
            );
            frm.Body.appendChild(panel);
        }

        txtName = Inputs.CreateFormInput({ Id: "txtName", Name: "Name", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Your Name", MinimumValue: 3, MaximumValue: 32, Note: "Your Name", TabIndex: 1 });
        //frm.Body.Panel.Add(txtName);
        frm.Body.Add(txtName);

        txtEmail = Inputs.CreateFormInput({ Id: "txtEmail", Name: "Email", InputType: InputType.Email, Required: true, StatusType: StatusType.Edit, Label: "Email", MinimumValue: 3, MaximumValue: 32, Note: "Email", TabIndex: 2 });
        //frm.Body.Panel.Add(txtEmail);
        frm.Body.Add(txtEmail);

        txtSubject = Inputs.CreateFormInput({ Id: "txtSubject", Name: "Subject", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Subject", MinimumValue: 3, MaximumValue: 255, Note: "Subject", TabIndex: 3 });
        //frm.Body.Panel.Add(txtSubject);
        frm.Body.Add(txtSubject);

        txtContent = Inputs.CreateFormInput({ Id: "txtContent", Name: "Message", InputType: InputType.TextArea, Required: true, StatusType: StatusType.Edit, Label: "Message", MinimumValue: 3, MaximumValue: 1024, Note: "Message", TabIndex: 4 });
        txtContent.Input.setAttribute("rows", "5");
        //frm.Body.Panel.Add(txtContent);
        frm.Body.Add(txtContent);


        //frm.Body.Panel.Load();
        frm.Body.Load();

        divrowcaptcha = Inputs.CreateInput({ Id: "captcha", Name:"captcha", InputType: InputType.Captcha, Label: "", Note: "", TabIndex: 5 });
        frm.Body.appendChild(divrowcaptcha);

        btnSubmit = Inputs.CreateButton({
            Id: "btnSubmit", Name: " Submit", ButtonType: ButtonType.Submit, Class: props.Theme.ButtonClass, TabIndex: 6,
            Icon: "fas fa-unlock-alt", Label:"Submit",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                submit();
            }
        });
        //frm.Panel.AddButton(btnSubmit);

        frm.AddButton(btnSubmit);
        props.Desktop.Add("", "contactus", frm);
        captchaWidgetId = Inputs.RenderCapcha("captcha");

        let social = initSocialMediaPanel();
        frm.Footer.appendChild(document.createElement("br"));
        frm.Footer.appendChild(document.createElement("br"));
        frm.Footer.appendChild(document.createElement("br"));
        frm.Footer.appendChild(social);
        frm.Footer.appendChild(document.createElement("br"));

        txtName.Input.focus();
		
		if (props.Name != null && props.Name != "")
		{
			txtName.Input.value = props.Name;
		}
		if (props.Email != null && props.Email != "")
		{
			txtEmail.Input.value = props.Email;
		}
		if (props.Subject != null && props.Subject != "")
		{
			txtSubject.Input.value = props.Subject;
		}
		if (props.Content != null && props.Content != "")
		{
			txtContent.Input.value = props.Content;
		}
		
    }

    function initSocialMediaPanel()
    {
        let social = new SocialMediaLinks({ CdnUrl: props.CdnUrl });
        let websiteSetting = props.WebsiteSetting;
        Object.keys(SocialMediaType).forEach(function (item, index)
        {
            if (websiteSetting[item] != null && websiteSetting[item] != "")
            {
                social.Set(item, websiteSetting[item]);
            }
        });
        social.Load();
        return social;
    }

    function validate()
    {
        if (txtName.Input.value === "")
        {
            return -1;
        }
        if (!Utils.ValidateString(txtName.Input.value))
        {
            MsgBox.Show("Username can only contains letter and number.");
            return -1;
        }

        if (txtEmail.Input.value == "")
        {
            return -1;
        }

        if (txtSubject.Input.value == "")
        {
            return -1;
        }

        if (txtContent.Input.value == "")
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

    function submit()
    {
        if (validate() < 1)
        {
            return;
        }

        MsgLoading.Show();
        ctrl.ContactUs(txtEmail.Input.value, txtName.Input.value, txtSubject.Input.value, txtContent.Input.value, function (result)
        {
            MsgLoading.Close();
            if (result == null)
            {
                MsgBox.Show("Send Failed");
                return;
            }

            let msgOk = new MsgOkCancel({
                Id: "MsgOkCancel",
                Label: "Thank you",
                Text: "Thank you for contacting us, we will contact you soon",
                Theme: props.Theme,
                OnOkClick: function (e)
                {
                    document.location.href = ARDVRO_URL;
                }
            });
        });
    }

    return frm;
};