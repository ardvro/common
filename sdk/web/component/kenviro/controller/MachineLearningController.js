var MachineLearningController = function MachineLearningController(cfg)
{
    let ctrl = {};

    ctrl.Save = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/MachineLearning/Save", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Find = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/component/kenviro/MachineLearning/Find", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Delete = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/MachineLearning/Delete", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetDatasets = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/component/kenviro/MachineLearning/GetDatasets", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetLogs = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/component/kenviro/MachineLearning/GetLogs", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SaveDatasets = function (list, onResponse)
    {
        let data = [list];
        cfg.Connector.Submit(data, "ardvro/component/kenviro/MachineLearning/SaveDatasets", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SaveLog = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/MachineLearning/SaveLog", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Import = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/MachineLearning/Import", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Learning = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/component/kenviro/MachineLearning/Learning", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Compute = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/MachineLearning/Compute", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};