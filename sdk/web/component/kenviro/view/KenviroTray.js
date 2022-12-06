var KenviroTray = function KenviroTray(cfg)
{
    let frm = new IconTray({
        Id: cfg.Id,
        Theme: cfg.Theme,
        IconClass: cfg.CdnUrl + "/res/image/kenviro_robot_circle_blue_128.png",
        Label: "Manage Kenviro",
        User: cfg.User,
        Roles: [RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR],
        OnClick: function (e, number)
        {
            if (cfg.User.IsInRoles([RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR]))
            {
                let frm = new KenviroDashboard({
                    Id: "kenviro",
                    Code: "kenviro",
                    Label: "kenviro",
                    SchemaSuffix: "Schema",
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
    });

    frm.Notify = function (data)
    {
    //    frm.AddNumber(1);

    //    let msg = (data.Message == null ? (data.Data != null ? (data.Data.Message != null ? data.Data.Message : "") : data.Message) : "");

    //    Utils.NotifyBrowser(cfg.AppName, msg, cfg.Icon);
    //    Toast.Show(data.Message);
    };

    return frm;
};