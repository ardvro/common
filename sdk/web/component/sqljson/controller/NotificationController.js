var NotificationController = function NotificationController(cfg)
{
    let ctrl = {};

    /*ctrl.Send = function (receiver, message, url, note, type, onResponse)
    {
        let args = [receiver, message, type, url, note];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Notification/Send", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };*/

    ctrl.UpdateStatus = function (id, status, onResponse)
    {
        let args = [id, status];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Notification/UpdateStatus", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.CountUserNotification = function (onResponse)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Notification/CountUserNotification", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetUserNotifications = function (pageIndex, pageSize, onResponse)
    {
        cfg.Connector.Submit([pageIndex, pageSize], "ardvro/component/sqljson/Notification/GetUserNotifications", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Broadcast = function (flex, onResponse)
    {
        cfg.Connector.Submit(flex, "ardvro/component/sqljson/Notification/Broadcast", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.IsOnline = function (username, callback)
    {
        cfg.Connector.Submit(username, "ardvro/component/sqljson/Notification/IsOnline", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};