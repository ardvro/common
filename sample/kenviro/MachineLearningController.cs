var MachineLearningController = function MachineLearningController(cfg)
{
    let ctrl = {};

    ctrl.Save = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/MachineLearningWorkflow/Save", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Find = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/wf/kenviro/MachineLearningWorkflow/Find", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Delete = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/MachineLearningWorkflow/Delete", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetDatasets = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/wf/kenviro/MachineLearningWorkflow/GetDatasets", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetLogs = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/wf/kenviro/MachineLearningWorkflow/GetLogs", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SaveDatasets = function (list, onResponse)
    {
        let data = [list];
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/MachineLearningWorkflow/Save", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SaveLog = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/MachineLearningWorkflow/Save", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Import = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/MachineLearningWorkflow/Import", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Learning = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/wf/kenviro/MachineLearningWorkflow/Learning", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Compute = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/MachineLearningWorkflow/Compute", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};
