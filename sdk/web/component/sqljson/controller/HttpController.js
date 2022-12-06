var HttpController = function HttpController(cfg)
{
    let ctrl = {};

    ctrl.Get = function (url, authorization, onResponse)
    {
        let args = [url, authorization];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Http/Get", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Post = function (url, data, authorization, onResponse)
    {
        let arg = {
            Url: url,
            Data: data,
            Authorization: authorization
        };
        cfg.Connector.Submit(arg, "ardvro/component/sqljson/Http/Post", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };
    
    ctrl.GetStream = function (url, authorization, onResponse)
    {
        let args = [url, authorization];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Http/GetStream", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.PostStream = function (url, data, authorization, onResponse)
    {
        let arg = {
            Url: url,
            Data: data,
            Authorization: authorization
        };
        cfg.Connector.Submit(arg, "ardvro/component/sqljson/Http/PostStream", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Upload = function (url, data, bytes, authorization, onResponse)
    {
        let arg = {
            Url: url,
            Data: data,
            Bytes: bytes,
            Authorization: authorization
        };
        cfg.Connector.Submit(arg, "ardvro/component/sqljson/Http/Upload", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    return ctrl;
};