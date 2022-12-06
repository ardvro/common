var FileController = function FileController(cfg)
{
    let ctrl = {};

    ctrl.Get = function (id, onResponse)
    {
        let args = [id];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/File/Get", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    

    return ctrl;
};