var Notificator = function Notificator(cfg)
{
    const frm = new IconTray({
        Id: cfg.Id,
        Theme: cfg.Theme,
        IconClass: "fas fa-bell",
        Label: "Notifications",
        OnClick: function (e, number)
        {
            let dataform = new NotificationTable({
                Id: "Notifications",
                Code: "notifications",
                Connector: cfg.Connector,
                Theme: cfg.Theme,
                Desktop: cfg.Desktop,
                User: cfg.User,
                CdnUrl: cfg.CdnUrl,
                WebBaseUrl: cfg.WebBaseUrl,
                Routes: cfg.Routes,
                GetServerTime: cfg.GetServerTime,
                WebBaseUrl: cfg.WebBaseUrl,
                Notificator: frm
            });
        },
    });

    const notificationCtrl = new NotificationController({ Connector: cfg.Connector });

    notificationCtrl.CountUserNotification(function (data)
    {
        frm.SetNumber(data);
    });


    frm.Notify = function (data)
    {
        frm.AddNumber(1);
        
        let msg = "";

        if (data != null && data.Data != null)
        {
            if (typeof data.Data === 'string' || data.Data instanceof String)
            {
                msg = data.Data;
            }
        }
        Utils.NotifyBrowser(cfg.AppName, msg, cfg.Icon);
        Toast.Show(msg);
    };

    return frm;
};