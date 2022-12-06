var NoteController = function NoteController(cfg)
{
    let ctrl = {};

    ctrl.Delete = function (name, callback)
    {
        let args = [name];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Note/Delete", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Get = function (name, callback)
    {
        let args = [name];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Note/Get", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetByUsername = function (callback)
    {
        let args = [];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Note/GetByUsername", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Save = function (name, note, callback)
    {
        let data = {
            Name: name,
            Content: note,
        };
        cfg.Connector.Submit(data, "ardvro/component/sqljson/Note/Save", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};