var UserSecurityForm = function userSecurityForm(props)
{
    let frm = {};

    let btnSubmit;

    let ddlSecurityType;
    let txtValue;

    construct();

    function construct()
    {
        props.FormColumns = 1;

        frm = new FormModal(props);

        ddlSecurityType = Inputs.CreateFormInput(
                {
                    Id: "ddlSecurityType",
                    Name:"SecurityType",
                    Required: true,
                    StatusType: StatusType.Edit,
                    InputType: InputType.Select,
                    Label: "Security Type",
                    TabIndex: 1,
                    Recursive: false,
                    ReferenceColumn: "Id",
                    ReferenceName: "Name",
                    AllowSelectParent: true,
                    AddDefaultOption: false,
                    Options: [{ Id: "Email", Name: "Email" }, { Id: "Phone", Name: "Phone" }],
                    Note: "Security Type"
                });

        frm.Body.Panel.Add(ddlSecurityType);

        txtValue = Inputs.CreateFormInput({ Id: "txtValue", Name: "Name", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Security Type", MinimumValue: 0, MaximumValue: 255, Note: "Security Type Value", TabIndex: 2 });
        frm.Body.Panel.Add(txtValue);

        frm.Body.Panel.Load();

        btnSubmit = Inputs.CreateButton({
            Id: "btnSubmit", Name: " Save", ButtonType: ButtonType.Submit, Class: props.Theme.ButtonClass, TabIndex: 6,
            Icon: "fas fa-save", Label : "Save",
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

        ddlSecurityType.Input.focus();

        dataToUi();
    }

    function dataToUi()
    {
        if (props.Data == null)
        {
            return;
        }

        ddlSecurityType.Input.value = props.Data.SecurityType;
        txtValue.Input.value = props.Data.Value;
    }

    function validate()
    {
        if (ddlSecurityType.Input.value == "")
        {
            return -1;
        }

        if (txtValue.Input.value == "")
        {
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

        props.Authenticator.SaveUserSecurity(ddlSecurityType.Input.value, txtValue.Input.value, function (data)
        {
            if (data == null || data <= 0)
            {
                MsgBox.Show("Save failed");
                return;
            }

            frm.Close();
        });
    }

    return frm;
};