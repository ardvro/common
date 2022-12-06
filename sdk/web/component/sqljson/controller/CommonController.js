var CommonController = function CommonController(cfg)
{
    let ctrl = {};

    ctrl.GenerateRsaKey = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Common/GenerateRsaKey", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GenerateRsaServerKey = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Common/GenerateRsaServerKey", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GenerateRsaClientKey = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Common/GenerateRsaClientKey", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};