var SqlJsonListeners = [
    { Name: "Notificator", Id: "notificationtray", Function: "Notification" }
];

var SqlJsonRoute = function SqlJsonRoute(cfg)
{
    this.Items = [
        //{
        //    Code: "home", Name: "Dashboard", Icon: "fas fa-home", Note: "",
        //    Path: "home", Closable: false, Id: 0, ssoMenuId: null,
        //    Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR],
        //    Load: function ()
        //    {
        //        let frm = new AdminHomePage({
        //            Id: "home",
        //            Code: "home",
        //            Connector: cfg.Connector,
        //            Theme: cfg.Theme,
        //            Desktop: cfg.Desktop,
        //            User: cfg.User,
        //            CdnUrl: cfg.CdnUrl,
        //            WebBaseUrl: cfg.WebBaseUrl,
        //            Authenticator: cfg.Authenticator,
        //            GetServerTime: cfg.GetServerTime
        //        });
        //        if (cfg.Desktop != null)
        //        {
        //            let tabform = cfg.Desktop.Add("", "home", frm);
        //        }
        //    }
        //},

        {
            Code: "administration", Name: "Administration", Icon: "fas fa-door-open", Note: "",
            Path: "administration", Closable: true, Id: 1, ssoMenuId: null,
            Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR],
            Load: function ()
            {
                let frm = new AdminMenu({
                    Id: "administration",
                    Code: "administration",
                    Label: "Administartor",
                    SchemaSuffix: "",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    CdnUrl: cfg.CdnUrl,
                    Authenticator: cfg.Authenticator,
                    GetServerTime: cfg.GetServerTime
                });
            }
        },

        {
            Code: "database", Name: "Database", Icon: "fas fa-database", Note: "",
            Path: "database", Closable: true, Id: null, ssoMenuId: null,
            Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER],
            Load: function ()
            {
                const frm = new SchemaTreeview(
                    {
                        Id: "database",
                        Code: "database",
                        Connector: cfg.Connector,
                        Theme: cfg.Theme,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        CdnUrl: cfg.CdnUrl,
                        WebBaseUrl: cfg.WebBaseUrl,
                        GetServerTime: cfg.GetServerTime
                    }
                );
                if (cfg.Desktop != null)
                {
                    let tabform = cfg.Desktop.Add("", "database", frm);
                }
            }
        },
        {
            Code: "files", Name: "Files", Icon: "fas fa-folder-open", Note: "",
            Path: "files/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                const frm = new FileTable({
                    Id: "files",
                    Code: "files",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    CdnUrl: cfg.CdnUrl,
                    WebsiteSetting: cfg.WebsiteSetting,
                    GetServerTime: cfg.GetServerTime
                });
            }
        },
        {
            Code: "assemblies", Name: "Assemblies", Icon: "fas fa-code", Note: "",
            Path: "assemblies/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                const frm = new FileAssemblyTable({
                    Id: "assemblies",
                    Code: "assemblies",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    CdnUrl: cfg.CdnUrl,
                    WebsiteSetting: cfg.WebsiteSetting,
                    GetServerTime: cfg.GetServerTime
                });
            }
        },
        {
            Code: "webapis", Name: "Web Api", Icon: "fas fa-file-code", Note: "",
            Path: "webapis/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                const frm = new WebApiTable({
                    Id: "webapis",
                    Code: "webapis",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    CdnUrl: cfg.CdnUrl,
                    WebsiteSetting: cfg.WebsiteSetting,
                    GetServerTime: cfg.GetServerTime
                });
            }
        },
        {
            Code: "apigateways", Name: "Api Gateway", Icon: "fas fa-map-signs", Note: "",
            Path: "apigateways/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                const frm = new ApiGatewayTable({
                    Id: "apigateways",
                    Code: "apigateways",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    CdnUrl: cfg.CdnUrl,
                    WebsiteSetting: cfg.WebsiteSetting,
                    GetServerTime: cfg.GetServerTime
                });
            }
        },

        {
            Code: "clusterconfigs", Name: "Cluster Configs", Icon: "fas fa-server", Note: "",
            Path: "clusterconfigs/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                const frm = new ClusterConfigTable({
                    Id: "clusterconfigs",
                    Code: "clusterconfigs",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    CdnUrl: cfg.CdnUrl,
                    WebsiteSetting: cfg.WebsiteSetting,
                    GetServerTime: cfg.GetServerTime
                });
            }
        },

        {
            Code: "workflows", Name: "Workflows", Icon: "fas fa-project-diagram", Note: "",
            Path: "workflows/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                let frm = new WorkflowTable(
                    {
                        Id: cfg.Id + "workflows",
                        Code: "workflows",
                        Label: "Workflows",
                        Theme: cfg.Theme,
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        ShowLabel: true,
                        WebBaseUrl: cfg.WebBaseUrl,
                        CdnUrl: cfg.CdnUrl,
                        GetServerTime: cfg.GetServerTime
                    }
                );
            }
        },

        {
            Code: "dbsyncs", Name: "DB Syncs", Icon: "fas fa-refresh", Note: "",
            Path: "dbsyncs/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                let frm = new DataTableForm(
                    {
                        Id: cfg.Id + "dbsync",
                        Code: "dbsyncs",
                        Label: "DbSync",
                        Theme: cfg.Theme,
                        Schema: new genDb(),
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        ShowLabel: true,
                        WebBaseUrl: cfg.WebBaseUrl,
                        CdnUrl: cfg.CdnUrl,
                        GetServerTime: cfg.GetServerTime
                    }
                );
            }
        },

        {
            Code: "emails", Name: "Email Syncs", Icon: "fas fa-inbox", Note: "",
            Path: "emails/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                let frm = new DataTableForm(
                    {
                        Id: cfg.Id + "email",
                        Code: "emails",
                        Label: "Email",
                        Theme: cfg.Theme,
                        Schema: new genEmail(),
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        ShowLabel: true,
                        WebBaseUrl: cfg.WebBaseUrl,
                        CdnUrl: cfg.CdnUrl,
                        GetServerTime: cfg.GetServerTime
                    }
                );
            }
        },

        {
            Code: "transactions", Name: "Transactions", Icon: "fas fa-money-bill-wave", Note: "",
            Path: "transactions/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                let frm = new WorkflowLogTable(
                    {
                        Id: cfg.Id + "workflowlogs",
                        Code: "transactions",
                        Label: "Transactions",
                        Theme: cfg.Theme,
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        ShowLabel: true,
                        WebBaseUrl: cfg.WebBaseUrl,
                        CdnUrl: cfg.CdnUrl,
                        GetServerTime: cfg.GetServerTime
                    }
                );
            }
        },

        {
            Code: "notes", Name: "Notes", Icon: "fas fa-sticky-note", Note: "",
            Path: "notes/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                const frm = new NoteTableForm({
                    Id: "notes",
                    Code: "notes",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    WebsiteSetting: cfg.WebsiteSetting,
                    CdnUrl: cfg.CdnUrl,
                    GetServerTime: cfg.GetServerTime
                });
            }
        },
        {
            Code: "integrations", Name: "Integration", Icon: "fas fa-project-diagram", Note: "",
            Path: "integrations/", Closable: true, Id: null, ssoMenuId: null,
            Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR],
            Load: function ()
            {
                const dataform = new IntegrationTable({
                    Id: "integrations",
                    Code: "integrations",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    Routes: cfg.Routes,
                    GetServerTime: cfg.GetServerTime,
                    WebBaseUrl: cfg.WebBaseUrl,
                    NotificationListeners: cfg.NotificationListeners
                });
            }
        },
        {
            Code: "notifications", Name: "Notifications", Icon: "fas fa-bell", Note: "",
            Path: "notifications/", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles: [],
            Load: function ()
            {
                const dataform = new NotificationTable({
                    Id: "notifications",
                    Code: "notifications",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    Routes: cfg.Routes,
                    GetServerTime: cfg.GetServerTime,
                    WebBaseUrl: cfg.WebBaseUrl,
                    NotificationListeners: cfg.NotificationListeners
                });
            }
        },

        {
            Code: "file", Name: "File download", Icon: "fas fa-folder-open", Note: "",
            Path: "file/[Id]", Closable: true, Id: null, ssoMenuId: null,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR, RoleType.MEMBER],
            Roles: [],
            Load: function ()
            {
                const item = Utils.GetRouteData("file/[Id]");
                const url = "https://" + cfg.WebSocketUrl + "/webapi/file/" + item.Id;
                Ajax.Get(url, cfg.User.Token, function (response)
                {
                    if (response != null)
                    {
                        Utils.DownloadFromBase64(response, item.Name);
                    }
                });
            }
        },
        {
            Code: "contactus", Name: "Contact Us", Icon: "fas fa-envelope", Note: "",
            Path: "contactus/", Closable: true, Id: null,
            //Roles: [],
            Load: function ()
            {
                let pnl = new ContactUsForm({
                    Id: "contactus",
                    Code: "contactus",
                    Label: "Contact Us",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    WebBaseUrl: cfg.WebBaseUrl,
                    WebsiteSetting: cfg.WebsiteSetting,
                    CdnUrl: cfg.CdnUrl,
                    ContentUrl: "../res/contactus.html",
                    GetServerTime: cfg.GetServerTime,
                    AppName: cfg.AppName
                });

            }
        },

    ];
};