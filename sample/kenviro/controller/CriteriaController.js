var CriteriaController = function CriteriaController(cfg)
{
    let ctrl = {};

    ctrl.GetCriteriasRecursive = function (onResponse)
    {
        let args = [];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/CriteriaWorkflow/GetCriteriasRecursive", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetCriterias = function (parentCriteriaId, criteriaType, onResponse)
    {
        let args = [parentCriteriaId, criteriaType];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/CriteriaWorkflow/GetCriterias", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetCriteriasAll = function (onResponse)
    {
        let args = [];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/CriteriaWorkflow/GetCriteriasAll", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SearchCriterias = function (criteriaParentId, keywords, criteriaType, onResponse)
    {
        let args = [criteriaParentId, keywords, criteriaType];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/CriteriaWorkflow/SearchCriterias", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Save = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/CriteriaWorkflow/Save", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Find = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/wf/kenviro/CriteriaWorkflow/Find", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Delete = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/CriteriaWorkflow/Delete", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    return ctrl;
};