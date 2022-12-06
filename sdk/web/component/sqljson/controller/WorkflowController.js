var WorkflowController = function WorkflowController(cfg)
{
    let ctrl = {};

    ctrl.GetItems = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/workflow/getitems", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Find = function (id, callback)
    {
        cfg.Connector.Submit(id, "ardvro/component/sqljson/workflow/find", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetByName = function (name, callback)
    {
        cfg.Connector.Submit(name, "ardvro/component/sqljson/workflow/getbyname", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetByWorkgroup = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/workflow/getbyworkgroup", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Save = function (ent, callback)
    {
        cfg.Connector.Submit(ent, "ardvro/component/sqljson/workflow/save", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Delete = function (ent, callback)
    {
        cfg.Connector.Submit(ent, "ardvro/component/sqljson/workflow/delete", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Run = function (data, callback)
    {
        cfg.Connector.Submit(data, "ardvro/component/sqljson/workflow/run", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetInputs = function (id, callback)
    {
        cfg.Connector.Submit(id, "ardvro/component/sqljson/workflow/getinputs", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};