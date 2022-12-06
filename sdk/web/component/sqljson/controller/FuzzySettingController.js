var FuzzySettingController = function FuzzySettingController(cfg)
{
    let ctrl = {};

    ctrl.Save = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/sqljson/FuzzySetting/Save", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Delete = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/sqljson/FuzzySetting/Delete", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetAll = function (onResponse)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/FuzzySetting/GetAll", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetById = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/component/sqljson/FuzzySetting/GetById", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    return ctrl;
};