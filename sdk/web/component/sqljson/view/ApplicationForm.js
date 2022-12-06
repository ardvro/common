var ApplicationForm = function ApplicationForm(cfg)
{
    let panel;

    let frm;

    let adminCtrl = new AdminController({
        Connector: cfg.Connector
    });

    let tabHeader;
    let tabInfoHeader;
    let tabKeysHeader;
    let tabApiHeader;

    let tabContent;
    let tabInfoContent;
    let tabKeysContent;
    let tabApiContent;

    let txtServerPublicKey;
    let txtClientPrivateKey;
    let txtServerPrivateKey;
    let txtClientPublicKey;

    let txtJavascriptCode;
    let txtAndroidCode;

    let iframeApiTester;

    construct();


    function construct()
    {
        panel = new Panel({ Id: cfg.Id });
        //panel.style = "padding-top:2px; padding-left:2px;";

        initMainTabs();
        initInputs();

        frm = new DataForm(
            {
                Id: cfg.Id.concat("form"),
                Code: cfg.Code,
                Label: "Application",
                Theme: cfg.Theme,
                StatusType: StatusType.Edit,
                ShowLabel: false,
                AddDefaultOption: true,
                AllowSelectParent: false,
                EnableAssociation: true,
                Schema: new ssoApplication(),
                PageSize: 15,
                FrameType: FrameType.Bordered,
                ReferenceType: ReferenceType.Struct,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                DesktopItemType: DesktopItemType.None,
                Data: cfg.Data,
                User: cfg.User,
                QueryMode: QueryMode.Json,
                QueryFunction: null,
                WebsiteSetting: cfg.WebsiteSetting,
                FormColumns: 2,
                GetServerTime: cfg.GetServerTime,
                OnSave: function (data)
                {
                    MsgBox.Show("You cannot update existing application");
                },
                OnDelete: function (data, onloaded)
                {
                    if (data.Id == 0 || data.Id == 1 || data.Id == 2)
                    {
                        MsgBox.Show("You cannot delete main and secondary application");
                        return;
                    }

                    let msgokcancel = new MsgOkCancel({
                        Label: "WARNING",
                        Text: "Deleting the application will also DROP DATABASE, and all it's configruations. Confirm Delete ??",
                        OnOkClick: function ()
                        {
                            msgokcancel.Close();

                            MsgLoading.Show(true);
                            adminCtrl.DeleteApplication(data.Id, function (result)
                            {
                                MsgLoading.Close();
                                if (result == null || result == 0)
                                {
                                    MsgBox.Show("Delete Failed");
                                    return;
                                }

                                MsgBox.Show("Deleted");

                                onloaded(data);

                                cfg.Desktop.Remove(cfg.Data.Id, cfg.Code);
                            });
                        }
                    });
                },
                OnLoad: function (frm, schema, data, ctrl)
                {
                    generateKeyScript(data);

                    if (document.getElementById(cfg.Id.concat("_btnBackupDatabases")) == null)
                    {
                        let btnBackupDatabases = Inputs.CreateButton({
                            Id: cfg.Id.concat("_btnBackupDatabases"), Name: " Backup Database", ButtonType: ButtonType.Button, Class: "btn btn-primary", TabIndex: 0,
                            Icon: "fas fa-hdd", Label: "Backup Database",
                            OnClick: function (e)
                            {
                                backupDatabase(data.Id, adminCtrl);
                            }
                        });
                        btnBackupDatabases.setAttribute("style", "min-width: 135px");
                        frm.Footer.appendChild(btnBackupDatabases);
                    }

                    iframeApiTester = createIframeApiTester(data.Url, cfg.Id);
                    tabApiContent.appendChild(iframeApiTester);
                },
                OnAssociationSchemaLoad: function (schema)
                {

                }
            }
        );
        tabInfoContent.appendChild(frm);

        panel.Body.appendChild(tabHeader);
        panel.Body.appendChild(tabContent);

        let tabScripts = createScriptTabs(txtJavascriptCode, txtAndroidCode);
        tabKeysContent.appendChild(tabScripts);
        tabKeysContent.appendChild(document.createElement("br"));

        if (cfg.User.IsInRoles([RoleType.ROOT, RoleType.ADMINISTRATOR]))
        {
            let tabKeysChild = createKeyTabs(txtServerPublicKey, txtClientPrivateKey, txtServerPrivateKey, txtClientPublicKey);
            tabKeysContent.appendChild(tabKeysChild);
        }

        cfg.Desktop.Add(cfg.Data.Id, cfg.Code, panel);
    }


    function initMainTabs()
    {
        tabHeader = TabPanel.CreateTabHeader();
        //tabHeader.setAttribute("id", cfg.Id + "_tabHeader");

        tabInfoHeader = TabPanel.CreateTabHeaderItem("fas fa-info-circle", "#Info", true, "Info");
        //tabInfoHeader.setAttribute("id", cfg.Id + "_tabInfoHeader");
        tabHeader.appendChild(tabInfoHeader);

        tabKeysHeader = TabPanel.CreateTabHeaderItem("fas fa-key", "#Keys", false, "Keys");
        //tabKeysHeader.setAttribute("id", cfg.Id + "_tabKeysHeader");
        tabHeader.appendChild(tabKeysHeader);

        tabApiHeader = TabPanel.CreateTabHeaderItem("fas fa-code", "#Api", false, "API Test");
        //tabApiHeader.setAttribute("id", cfg.Id + "_tabApiHeader");
        tabHeader.appendChild(tabApiHeader);


        tabContent = TabPanel.CreateTabContent();
        //tabContent.setAttribute("id", cfg.Id + "_tabContent");

        tabInfoContent = TabPanel.CreateTabContentItem("Info", true);
        //tabInfoContent.setAttribute("id", cfg.Id + "_tabInfoContent");
        tabContent.appendChild(tabInfoContent);

        tabKeysContent = TabPanel.CreateTabContentItem("Keys", false);
        //tabKeysContent.setAttribute("id", cfg.Id + "_tabKeysContent");
        tabContent.appendChild(tabKeysContent);

        tabApiContent = TabPanel.CreateTabContentItem("Api", false);
        //tabApiContent.setAttribute("id", cfg.Id + "_tabApiContent");
        tabContent.appendChild(tabApiContent);
    }

    function initInputs()
    {
        txtServerPublicKey = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtServerPublicKey"), Name: "txtServerPublicKey", InputType: InputType.TextArea, Required: false, StatusType: StatusType.View,
                Label: "Server Public Key on Client", Note: "RSA Public Key used by client to encrypt data to be sent to server. It's pairing with Server Private Key. This is a global key used by all applications.", Theme: cfg.Theme, MaximumValue: 1024
            }
        );
        let btnCopy1 = Inputs.CreateCopyButton(cfg.Id.concat('1'), txtServerPublicKey.Input, cfg.Theme.ButtonClass);
        txtServerPublicKey.appendChild(btnCopy1);

        txtClientPrivateKey = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtClientPrivateKey"), Name: "txtClientPrivateKey", InputType: InputType.TextArea, Required: false, StatusType: StatusType.View,
                Label: "Client Private Key on Client", Note: "RSA Private Key used by client to decrypt data received from server. It's pairing with The Client Public Key. Each client will have it's own key.", Theme: cfg.Theme, MaximumValue: 1024
            }
        );
        let btnCopy2 = Inputs.CreateCopyButton(cfg.Id.concat('2'), txtClientPrivateKey.Input, cfg.Theme.ButtonClass);
        txtClientPrivateKey.appendChild(btnCopy2);

        txtServerPrivateKey = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtServerPrivateKey"), Name: "txtServerPrivateKey", InputType: InputType.TextArea, Required: false, StatusType: StatusType.View,
                Label: "Server Private Key on Server", Note: "RSA Private key used by server to decrypt data from client. It's pairing with the Server Public Key.  This is a global key used by all applications.", Theme: cfg.Theme, MaximumValue: 1024
            }
        );
        let btnCopy3 = Inputs.CreateCopyButton(cfg.Id.concat('3'), txtServerPrivateKey.Input, cfg.Theme.ButtonClass);
        txtServerPrivateKey.appendChild(btnCopy3);

        txtClientPublicKey = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtClientPublicKey"), Name: "txtClientPublicKey", InputType: InputType.TextArea, Required: false, StatusType: StatusType.View,
                Label: "Client Public Key on Server", Note: "RSA Public Key used by Server encrypt data to be sent to client. It's pairing with The Client Private Key. Each client will have it's own key.", Theme: cfg.Theme, MaximumValue: 1024
            }
        );
        let btnCopy4 = Inputs.CreateCopyButton(cfg.Id.concat('4'), txtClientPublicKey.Input, cfg.Theme.ButtonClass);
        txtClientPublicKey.appendChild(btnCopy4);

        txtJavascriptCode = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtJavascriptCode"), Name: "txtJavascriptCode", InputType: InputType.TextArea, Required: false, StatusType: StatusType.View,
                Label: "Javascript Code", Note: "Put this code to your website in any js file.", Theme: cfg.Theme, MaximumValue: 1024
            }
        );
        let btnCopy5 = Inputs.CreateCopyButton(cfg.Id.concat('5'), txtJavascriptCode.Input, cfg.Theme.ButtonClass);
        txtJavascriptCode.appendChild(btnCopy5);

        txtAndroidCode = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtAndroidCode"), Name: "txtAndroidCode", InputType: InputType.TextArea, Required: false, StatusType: StatusType.View,
                Label: "Android Code", Note: "Put this code to your android project.", Theme: cfg.Theme, MaximumValue: 1024
            }
        );
        let btnCopy6 = Inputs.CreateCopyButton(cfg.Id.concat('6'), txtAndroidCode.Input, cfg.Theme.ButtonClass);
        txtAndroidCode.appendChild(btnCopy6);

    }


    function createKeyTabs(txtServerPublicKey, txtClientPrivateKey, txtServerPrivateKey, txtClientPublicKey)
    {
        let divKeys = document.createElement("div");
        //divKeys.style = "padding-top:2px;";

        let tabHeader = TabPanel.CreateTabHeader();
        //tabHeader.setAttribute("id", cfg.Id + "_tabHeaderKeys");

        let tabClient = TabPanel.CreateTabHeaderItem("fas fa-mobile-alt", "#Client", true, "Client Keys");
        //tabClient.setAttribute("id", cfg.Id + "_tabClientKeys");
        tabHeader.appendChild(tabClient);

        let tabServer = TabPanel.CreateTabHeaderItem("fas fa-server", "#Server", false, "Server Keys");
        //tabServer.setAttribute("id", cfg.Id + "_tabServerKeys");
        tabHeader.appendChild(tabServer);

        let tabContent = TabPanel.CreateTabContent();
        //tabContent.setAttribute("id", cfg.Id + "_tabContentKeys");

        let tabClientContent = TabPanel.CreateTabContentItem("Client", true);
        //tabClientContent.setAttribute("id", cfg.Id + "_tabClientContentKeys");
        tabContent.appendChild(tabClientContent);

        let tabServerContent = TabPanel.CreateTabContentItem("Server", false);
        //tabServerContent.setAttribute("id", cfg.Id + "_tabServerContentKeys");
        tabContent.appendChild(tabServerContent);

        divKeys.appendChild(tabHeader);
        divKeys.appendChild(tabContent);

        tabClientContent.appendChild(txtServerPublicKey);
        tabClientContent.appendChild(txtClientPrivateKey);

        tabServerContent.appendChild(txtServerPrivateKey);
        tabServerContent.appendChild(txtClientPublicKey);

        return divKeys;
    }

    function createScriptTabs(txtJavascriptCode, txtAndroidCode)
    {
        let div = document.createElement("div");
        //div.style = "padding-top:2px;";

        let tabHeader = TabPanel.CreateTabHeader();

        let tabJavascript = TabPanel.CreateTabHeaderItem("fas fa-atlas", "#JavaScript", true, "JavaScript");
        tabHeader.appendChild(tabJavascript);

        let tabAndroid = TabPanel.CreateTabHeaderItem("fab fa-android", "#Android", false, "Android");
        tabHeader.appendChild(tabAndroid);

        let tabContent = TabPanel.CreateTabContent();

        let tabJavascriptContent = TabPanel.CreateTabContentItem("JavaScript", true);
        tabContent.appendChild(tabJavascriptContent);

        let tabAndroidContent = TabPanel.CreateTabContentItem("Android", false);
        tabContent.appendChild(tabAndroidContent);

        div.appendChild(tabHeader);
        div.appendChild(tabContent);

        tabJavascriptContent.appendChild(txtJavascriptCode);

        tabAndroidContent.appendChild(txtAndroidCode);

        return div;
    }

    function generateKeyScript(entApp)
    {
        if (entApp.ClientRsaKey == null || entApp.ServerRsaKey == null || entApp.ClientRsaKey == "" || entApp.ServerRsaKey == "")
        {
            return;
        }

        let clientRsaKey = JSON.parse(entApp.ClientRsaKey);

        let clientPrivateKey = {};
        clientPrivateKey.n = clientRsaKey.Modulus;
        clientPrivateKey.d = clientRsaKey.D;
        clientPrivateKey.p = clientRsaKey.P;
        clientPrivateKey.q = clientRsaKey.Q;
        clientPrivateKey.dmp1 = clientRsaKey.DP;
        clientPrivateKey.dmq1 = clientRsaKey.DQ;
        clientPrivateKey.coeff = clientRsaKey.InverseQ;
        clientPrivateKey.e = clientRsaKey.Exponent;
        let jsonclientPrivateKey = JSON.stringify(clientPrivateKey);

        if (txtClientPrivateKey != null)
        {
            txtClientPrivateKey.Input.value = jsonclientPrivateKey;
        }

        //stored on server side at applications.json
        let clientPublicKey = {
            Modulus : clientRsaKey.Modulus,
            D: clientRsaKey.D,
            P: null,
            Q: null,
            DP: null,
            DQ: null,
            InverseQ : null,
            Exponent : clientRsaKey.Exponent
        };

        let appjson = {};
        appjson[entApp.Code] = {
            Code : entApp.Code,
            Key : entApp.BaseKey,
            Name: entApp.Name,
            ClientRsaKey: clientPublicKey
        };

        let jsonclientPublicKey = JSON.stringify(appjson, null, 4);

        let serverPublicKey = JSON.parse(entApp.ServerRsaKey);

        if (txtClientPublicKey != null)
        {
            txtClientPublicKey.Input.value = jsonclientPublicKey;
        }

        if (txtServerPublicKey != null)
        {
            txtServerPublicKey.Input.value = entApp.ServerRsaKey;
        }

        let jsCode =
            'var WebsiteConfig = function () {' + '\n' +
            '   this.WebApps = [' + '\n' +
            '       {' + '\n' +
            '           AppName: "' + entApp.Name + '", \n' +
            '           WebSocketUrl: WEBSOCKETURL, \n' +
            '           WebBaseUrl: WEBBASEURL, \n' +
            '           CdnUrl: CDNURL, \n' +
            '           AppCode: \'' + entApp.Code + '\', \n' +
            '           AesSecretKey: \'' + entApp.AesSecretKey + '\', \n' +
            '           AesInitVector: \'' + entApp.AesInitVector + '\', \n' +
            '           ClientRsaKey: \'' + jsonclientPrivateKey + '\', \n' +
            '           ServerRsaKey: \'{"n":"' + serverPublicKey.Modulus + '","e":"' + serverPublicKey.Exponent + '"\}\', \n' +
            '           SingleSubDomain: \'' + 'false' + '\', \n' +
            '       }' + '\n' +
            '   ];' + '\n' +
            '}' + '\n';
        txtJavascriptCode.Input.value = jsCode;

        let javaCode =
            '#create a file under assets folder named ardvro.properties, then paste the code below: \n' +
            'CLIENT_PRIVATE_KEY_MOD = ' + clientRsaKey.Modulus + '\n' +
            'CLIENT_PRIVATE_KEY_EXP = ' + clientRsaKey.Exponent + '\n' +
            'SERVER_PUBLIC_KEY_MOD = ' + serverPublicKey.Modulus + '\n' +
            'SERVER_PUBLIC_KEY_EXP = ' + serverPublicKey.Exponent + '\n' +
            'String APPLICATION_CODE = ' + entApp.Code + '\n' +
            '#You can create your own for AES keys below: \n' +
            'AES_SECRET_KEY = ' + entApp.AesSecretKey + '\n' +
            'AES_INIT_VECTOR = ' + entApp.AesInitVector + '\n' +
            '' + '\n';
        txtAndroidCode.Input.value = javaCode;
    }

    function backupDatabase(id, ctrl)
    {
        MsgLoading.Show();
        ctrl.BackupDatabase(id,
            function (result)
            {
                MsgLoading.Close();
                MsgBox.Show("Backup Finished");
            }
        );
    }

    function createIframeApiTester(url, id)
    {
        let div = document.createElement("div");
        if (url == null || url == "")
        {
            return div;
        }
        
        MsgLoading.LockPanel(div, "Loading");
        let iframeApiTester = document.createElement("iframe");
        iframeApiTester.setAttribute("id", id.concat("_applicationform_iframe_apitest"));
        iframeApiTester.setAttribute("style", "width:99vw; height: 85vh;");
        //iframesrc.setAttribute("src", cfg.CdnUrl.concat("/ardvro/component/sqljson/view/SqlJsonEditor.js.html"));
        //iframeApiTester.setAttribute("src", cfg.DebuggerHtml);
        //iframeApiTester.setAttribute("src", "https://localhost:44307/www/apitest.html");
        iframeApiTester.setAttribute("src", url.concat("/SqlJsonTester.html"));
        iframeApiTester.onload = function (e)
        {
            MsgLoading.UnlockPanel(div);
        };

        div.appendChild(iframeApiTester);

        return div;
    }


    return panel;
};