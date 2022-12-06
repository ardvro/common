var ImportUserForm = function ImportUserForm(cfg)
{
    let panel;
    let txtData;

    let authctrl = new AuthenticationController({ Connector: cfg.Connector });

    construct();

    function construct()
    {
        panel = new Panel({ Id: cfg.Id });

        let msginfo = "Create user with format: username;password;email;workgroup;roles <br >Example:<br >myusername01;password01;email01@mydomain.com;myworkgroup01;administrator,director,manager <br >myusername02;password02;email02@mydomain.com;myworkgroup01;supervisor,operator";
        let label = Inputs.CreateFormGroup(cfg.Id.concat('ImportUser'), "Import User", msginfo, msginfo, false);
        panel.Body.appendChild(label);

        txtData = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtData"), Name: "txtData", InputType: InputType.TextArea, Required: true, StatusType: StatusType.Edit,
                Label: "User data", Note: "username;password;email;workgroup;roles", Theme: cfg.Theme, Rows: 10
            }
        );
        panel.Body.appendChild(txtData);

        let btnClear = Inputs.CreateButton({
            Id: cfg.Id.concat("btnClear"), Name: " Clear", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass,
            Icon: "fas fa-backspace", Label: "Clear",
            OnClick: function (e)
            {
                txtData.value = "";
            }
        });
        panel.Body.appendChild(btnClear);

        let btnImport = Inputs.CreateButton({
            Id: cfg.Id.concat("btnImport"), Name: " Import", ButtonType: ButtonType.Submit, Class: cfg.Theme.ButtonClass,
            Icon: "fas fa-rocket", Label: "Import",
            OnClick: function (e)
            {
                importUsers();
            }
        });
        panel.Body.appendChild(btnImport);

        cfg.Desktop.Add("", "importusers", panel);
    }

    function importUsers()
    {
        if (txtData.Input.value == "")
        {
            return;
        }

        let data = "username;password;email;workgroup;roles\n" + txtData.Input.value;

        let schema = DataUtils.CreateCsvPivotSchema("Users", data, 0, 5);

        let list = DataUtils.CsvToData(data, schema, 1, 0);

        if (list == null)
        {
            MsgBox.Show("Error When Transforming Data.");
            return;
        }

        authctrl.ImportUsers(list, function (results)
        {
            if (results == null)
            {
                MsgBox.Show("Import Failed");
                return;
            }

            MsgBox.Show("Import Succeed");
            txtData.Input.value = "";
        });
    }

    return panel;
}