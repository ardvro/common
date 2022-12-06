var IntegrationController = function IntegrationController(cfg)
{
    let ctrl = {};

    ctrl.Execute = function (integrationName, data, authentication, onResponse)
    {
        let args = {
            Name: integrationName,
            Data: data,
            Authentication: authentication
        };
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Integration/Execute", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Send = function (receiver, data, onResponse)
    {
        let arg = {
            Receiver: receiver,
            Data: data,
        };
        cfg.Connector.Submit(arg, "ardvro/component/sqljson/Integration/Send", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };
    
    ctrl.Broadcast = function (receivers, data, onResponse)
    {
        let arg = {
            Receivers: receivers,
            Data: data,
        };
        cfg.Connector.Submit(arg, "ardvro/component/sqljson/Integration/Stream", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Get = function (integrationId, data, authentication, onResponse)
    {
        let args = {
            Id: integrationId,
            Data: data,
            Authentication: authentication
        };
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Integration/Get", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Post = function (integrationId, data, authentication, onResponse)
    {
        let args = {
            Id: integrationId,
            Data: data,
            Authentication: authentication
        };
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Integration/Post", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    return ctrl;
};