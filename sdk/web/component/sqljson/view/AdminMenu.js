var AdminMenu = function AdminMenu(cfg)
{
    const adminCtrl = new AdminController({ Connector: cfg.Connector });
    const authenticationCtrl = new AuthenticationController({ Connector: cfg.Connector });

    const _list = [
        { Name: "ssoObject", SchemaName: "ssoObject", Label: "Database Objects", Detail: "Database Objects", Icon: "fas fa-database" },
        { Name: "ssoObjectWorkgroup", SchemaName: "ssoObjectWorkgroup", Label: "Database Object Workgroups", Detail: "Database Object Workgroups", Icon: "fas fa-tape" },
        { Name: "ssoApplication", SchemaName: "ssoApplication", Label: "Applications", Detail: "Application", Icon: "fas fa-window-maximize" },
        { Name: "ssoSetting", SchemaName: "ssoSetting", Label: "Settings", Detail: "Settings", Icon: "fas fa-cogs" },
        { Name: "ssoMenu", SchemaName: "ssoMenu", Label: "Menu", Detail: "Menu", Icon: "fab fa-elementor" },
        { Name: "ssoOtp", SchemaName: "ssoOtp", Label: "One Time Password", Detail: "One Time Password", Icon: "fas fa-lock-open" },
        { Name: "ssoRegUser", SchemaName: "ssoRegUser", Label: "User Registrations", Detail: "User Registration", Icon: "fas fa-user-clock" },
        { Name: "ssoRole", SchemaName: "ssoRole", Label: "Roles", Detail: "Role", Icon: "fas fa-user-tag" },
        { Name: "ssoSession", SchemaName: "ssoSession", Label: "Active Sessions", Detail: "Active Sessions", Icon: "fas fa-sign-in-alt" },
        { Name: "ssoSessionLog", SchemaName: "ssoSessionLog", Label: "Session Logs", Detail: "Session Logs", Icon: "fas fa-history" },
        { Name: "ssoUser", SchemaName: "ssoUser", Label: "Users", Detail: "User", Icon: "fas fa-id-card " },
        { Name: "ssoWorkgroup", SchemaName: "ssoWorkgroup", Label: "Workgroups", Detail: "Workgroup", Icon: "fas fa-city" },
        { Name: "ssoUserWorkgroup", SchemaName: "ssoUserWorkgroup", Label: "Users Workgroups", Detail: "User Workgroup", Icon: "fas fa-suitcase-rolling" }
    ];

    const frm = new DeskMenu({
        Id: cfg.Id,
        Code: cfg.Code,
        Label: cfg.Label,
        SchemaSuffix: cfg.SchemaSuffix,
        Connector: cfg.Connector,
        Theme: cfg.Theme,
        Desktop: cfg.Desktop,
        User: cfg.User,
        CdnUrl: cfg.CdnUrl,
        ShowLabel: cfg.ShowLabel,
        Authenticator: cfg.Authenticator,
        GetServerTime: cfg.GetServerTime,
        OnItemRowClick: function (e, tr, td, item, schitem)
        {
            onItemRowClick(tr.id, item.Name);
        },
        Data: _list
    });
    if (cfg.Desktop != null)
    {
        let tabform = cfg.Desktop.Add("", cfg.Code, frm);
    }

    initButtons(frm);


    function initButtons(pnl)
    {
        pnl.Footer.setAttribute("class", "container");

        let divRows = document.createElement("div");
        divRows.setAttribute("class", "row justify-content-center");
        pnl.Footer.appendChild(document.createElement("hr"));
        pnl.Footer.appendChild(divRows);

        let divButtons = document.createElement("div");
        divRows.appendChild(divButtons);

        divButtons.setAttribute("class", "col-auto");
        divButtons.setAttribute("style", "padding: 2px;");

        let btnClearCache = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnClearCache"), Name: " Clear Cache", ButtonType: ButtonType.Button, Class: "btn btn-info", TabIndex: 0,
            Icon: "fas fa-broom", Label: "Clear Cache",
            OnClick: function (e)
            {
                clearCache(adminCtrl);
            }
        });
        btnClearCache.setAttribute("style", "min-width: 135px");
        divButtons.appendChild(btnClearCache);

        let btnRegisterDbaObjects = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnRegisterDbaObjects"), Name: " Register DB Objects Authorization", ButtonType: ButtonType.Button, Class: "btn btn-warning", TabIndex: 0,
            Icon: "fas fa-shield-alt", Label: "Register DB Objects Authorization",
            OnClick: function (e)
            {
                registerdbObjects(authenticationCtrl);
            }
        });
        btnRegisterDbaObjects.setAttribute("style", "min-width: 135px");
        divButtons.appendChild(btnRegisterDbaObjects);

        let btnBackupDatabases = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnBackupDatabases"), Name: " Backup Databases", ButtonType: ButtonType.Button, Class: "btn btn-primary", TabIndex: 0,
            Icon: "fas fa-hdd", Label: "Backup Databases",
            OnClick: function (e)
            {
                backupDatabases(adminCtrl);
            }
        });
        btnBackupDatabases.setAttribute("style", "min-width: 135px");
        divButtons.appendChild(btnBackupDatabases);

        let btnRestartService = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnRestartService"), Name: " Restart Service", ButtonType: ButtonType.Button, Class: "btn btn-danger", TabIndex: 0,
            Icon: "fas fa-sync-alt", Label: "Restart Service",
            OnClick: function (e)
            {
                restartService(adminCtrl);
            }
        });
        btnBackupDatabases.setAttribute("style", "min-width: 135px");
        divButtons.appendChild(btnRestartService);

        let btnImportUser = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnImportUser"), Name: " Import Users", ButtonType: ButtonType.Button, Class: "btn btn-success", TabIndex: 0,
            Icon: "fas fa-users-cog", Label: "Import Users",
            OnClick: function (e)
            {
                importUser();
            }
        });
        btnBackupDatabases.setAttribute("style", "min-width: 135px");
        divButtons.appendChild(btnImportUser);

        pnl.Footer.appendChild(document.createElement("hr"));
        let lblNote = document.createElement("label");
        lblNote.innerHTML = "Please Clear Cache If you Modified: Settings";
        pnl.Footer.appendChild(lblNote);
    }

    function onItemRowClick(elementId, name)
    {
        let menu = _list.find(x => x.Name == name);
        let schema = new window[name];
        let frm = new DataTableForm(
            {
                Id: cfg.Id.concat("_", name),
                Code: menu.Label.replace(/\s/g, ""),
                Label: schema.Label,
                Theme: cfg.Theme,
                Schema: schema,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                ShowLabel: false,
                GetServerTime: cfg.GetServerTime
            }
        );
    }

    function clearCache(ctrl)
    {
        ctrl.ClearCache(function (box)
        {
            MsgBox.Show("Cache Cleared");
        });
    }

    function registerdbObjects(ctrl)
    {
        MsgLoading.Show();
        ctrl.RegisterDbaObjectAccessAllWorkgroups(function (box)
        {
            MsgLoading.Close();
            MsgBox.Show("Authorization Registration for All Workgroups Succeed");
        });
    }

    function backupDatabases(ctrl)
    {
        MsgLoading.Show();
        ctrl.BackupDatabases(
            function (result)
            {
                MsgLoading.Close();
                MsgBox.Show("Backup Finished");
            }
        );
    }

    function restartService(ctrl)
    {
        let msgokcancel = new MsgOkCancel({
            Label: "RESTART WARNING",
            Text: "Restarting the service will make the whole application cannot be accessed. Confirm restart service, and you need to refresh this WebApp ??",
            OnOkClick: function ()
            {
                ctrl.Restart(
                    function (result)
                    {
                        MsgBox.Show("Looks like restart failed, please check your system or restart manually from your server OS!");
                    }
                );
            }
        });
    }

    function importUser(ctrl)
    {
        const frm = new ImportUserForm(
            {
                Id: "importuserform",
                Code: "importuserform",
                Connector: cfg.Connector,
                Theme: cfg.Theme,
                Desktop: cfg.Desktop,
                User: cfg.User,
                Data: null,
                CdnUrl: cfg.CdnUrl,
                WebBaseUrl: cfg.WebBaseUrl,
                GetServerTime: cfg.GetServerTime
            }
        );
    }


    return frm;
};