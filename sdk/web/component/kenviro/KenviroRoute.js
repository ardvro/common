var KenviroRoute = function KenviroRoute(cfg)
{
    this.Items = [
        {
            Code: "kenviro", Name: "Kenviro", Icon: cfg.CdnUrl + "/res/image/kenviro_logo_blue_128.png", Note: "",
            Path: "kenviro/", Closable: true,
            Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Load: function ()
            {
                const frm = new KenviroDashboard({
                    Id: "kenviro",
                    Code: "kenviro",
                    Label: "Kenviro Intelligent Apps",
                    SchemaSuffix: "",
                    Connector: cfg.Connector,
                    Theme: cfg.Theme,
                    Desktop: cfg.Desktop,
                    User: cfg.User,
                    WebBaseUrl: cfg.WebBaseUrl,
                    WebSocketUrl: cfg.WebSocketUrl,
                    CdnUrl: cfg.CdnUrl,
                    Authenticator: cfg.Authenticator,
                    GetServerTime: cfg.GetServerTime
                });
            }
        },
        {
            Code: "kenviroadminmenu", Name: "Administration", Icon: "fas fa-door-open", Note: "",
            Path: "kenviroadminmenu/", Closable: true,
            Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Load: function ()
            {
                let frm = new KenviroMenu({
                    Id: "kenviroadminmenu",
                    Code: "kenviroadminmenu",
                    Label: "Administration",
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
            Code: "expertsystems", Name: "Expert Systems", Icon: "fas fa-diagnoses", Note: "",
            Path: "expertsystems/", Closable: true,
            //Roles: [],
            Load: function ()
            {
                let frm = new EsTable(
                    {
                        Id: "expertsystems",
                        Code: "expertsystems",
                        Label: "Expert Systems",
                        Theme: cfg.Theme,
                        ShowLabel: cfg.ShowLabel,
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        GetServerTime: cfg.GetServerTime,
                        WebsiteSetting: cfg.WebsiteSetting,
                        WebBaseUrl: cfg.WebBaseUrl,
                        CdnUrl: cfg.CdnUrl,
                    }
                );
            }
        },
        {
            Code: "decisionsupportsystems", Name: "Decision Support Systems", Icon: "fas fa-chart-pie", Note: "",
            Path: "decisionsupportsystems/", Closable: true,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles:[],
            Load: function ()
            {
                let frm = new DssTable(
                    {
                        Id: "decisionsupportsystems",
                        Code: "decisionsupportsystems",
                        Label: "Decision Support Systems",
                        Theme: cfg.Theme,
                        ShowLabel: cfg.ShowLabel,
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        GetServerTime: cfg.GetServerTime,
                        WebsiteSetting: cfg.WebsiteSetting,
                        WebBaseUrl: cfg.WebBaseUrl,
                        CdnUrl: cfg.CdnUrl,
                    }
                );
            }
        },
        {
            Code: "textmining", Name: "Text Mining", Icon: "fas fa-magic", Note: "",
            Path: "textmining/", Closable: true,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles:[],
            Load: function ()
            {
                let frm = new TmTable(
                    {
                        Id: "textmining",
                        Code: "textmining",
                        Label: "Text Mining",
                        Theme: cfg.Theme,
                        ShowLabel: cfg.ShowLabel,
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        GetServerTime: cfg.GetServerTime,
                        WebsiteSetting: cfg.WebsiteSetting,
                        WebBaseUrl: cfg.WebBaseUrl,
                        CdnUrl: cfg.CdnUrl,
                    }
                );
            }
        },
        {
            Code: "machinelearning", Name: "Machine Learning", Icon: "fas fa-drafting-compass", Note: "",
            Path: "machinelearning/", Closable: true,
            //Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Roles:[],
            Load: function ()
            {
                let frm = new MlTable(
                    {
                        Id: "machinelearning",
                        Code: "machinelearning",
                        Label: "Machine Learning",
                        Theme: cfg.Theme,
                        ShowLabel: cfg.ShowLabel,
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        GetServerTime: cfg.GetServerTime,
                        WebsiteSetting: cfg.WebsiteSetting,
                        WebBaseUrl: cfg.WebBaseUrl,
                        CdnUrl: cfg.CdnUrl,
                    }
                );
            }
        },
        {
            Code: "knowledgebase", Name: "Knowledge Base", Icon: "fas fa-project-diagram", Note: "",
            Path: "knowledgebase/", Closable: true,
            Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR, RoleType.OPERATOR],
            Load: function ()
            {
                const frm = new CriteriaTreeview(
                    {
                        Id: "knowledgebase",
                        Code: "knowledgebase",
                        Connector: cfg.Connector,
                        Theme: cfg.Theme,
                        Desktop: cfg.Desktop,
                        DesktopItemType: DesktopItemType.Desktop,
                        User: cfg.User,
                        CdnUrl: cfg.CdnUrl,
                        WebBaseUrl: cfg.WebBaseUrl,
                        GetServerTime: cfg.GetServerTime
                    }
                );
                let tabform = cfg.Desktop.Add("", "knowledgebase", frm);
            }
        }

    ];
};