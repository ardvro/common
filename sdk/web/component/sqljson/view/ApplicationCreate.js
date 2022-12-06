var ApplicationCreate = function ApplicationCreate(cfg)
{
    let frm;

    let adminCtrl = new AdminController({
        Connector: cfg.Connector
    });
    
    let txtName;
    let txtUrl;
    let txtDbScript;
    let btnCreate;

    construct();

    function construct()
    {
        frm = new FormModal({ Id: cfg.Id, Theme: cfg.Theme, Label: "Create Application" });

        let tabindex = 0;
        txtName = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtName"), Name: "txtName", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit,
                Label: "Application Name", Note: "Application Name", Theme: cfg.Theme, MaximumValue: 255
            }
        );
        frm.Body.Panel.Add(txtName);
        tabindex++;

        txtUrl = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtUrl"), Name: "txtUrl", InputType: InputType.Url, Required: true, StatusType: StatusType.Edit,
                Label: "Url", Note: "Base App/Api URL", Theme: cfg.Theme, MaximumValue: 255
            }
        );
        frm.Body.Panel.Add(txtUrl);
        tabindex++;

        txtDbScript = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtDbScript"), Name: "txtDbScript", InputType: InputType.TextArea, Required: false, StatusType: StatusType.Edit,
                Label: "Database Script", Note: "Paste Database Creation Script", Theme: cfg.Theme, MaximumValue: 8192
            }
        );
        frm.Body.Panel.Add(txtDbScript);
        tabindex++;

        frm.Body.Panel.Load();

        btnCreate = Inputs.CreateButton({
            Id: cfg.Id.concat("btnCreate"), Name: " Create", ButtonType: ButtonType.Submit, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-paper-plane", Label: "Create",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                submit();
            }
        });

        frm.Panel.AddButton(btnCreate);
    }

    function submit()
    {
        MsgLoading.Show(true);
        adminCtrl.CreateApplication(txtName.Input.value, txtUrl.Input.value, txtDbScript.Input.value,
            function (result)
            {
                MsgLoading.Close();
                if (result == null)
                {
                    MsgBox.Show('Created Failed');
                    return;
                }
                if (txtDbScript.Input.value == "")
                {
                    MsgBox.Show("Application Created");
                    frm.Close();
                }
                else
                {
                    let msgokcancel = new MsgOkCancel({
                        Label: "Setup Application",
                        Text: "Application Created Successfull! Do you want to perform database objects permission registration to default authorization ?",
                        OnOkClick: function ()
                        {
                            msgokcancel.Close();
                            registerDbaObjectAccess();
                        }
                    });
                }

            }
        );
    }

    function registerDbaObjectAccess()
    {
        MsgLoading.Show(true);
        cfg.Authenticator.RegisterDbaObjectAccessAllWorkgroups(function (box)
        {
            MsgLoading.Close();
            MsgBox.Show("Authorization Registration for All Workgroups Succeed");
            frm.Close();
        });
    }

    return frm;
};