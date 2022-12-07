var CriteriaController = function CriteriaController(cfg)
{
    let ctrl = {};

    ctrl.GetCriteriasRecursive = function (onResponse)
    {
        let args = [];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/Criteria/GetCriteriasRecursive", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetCriterias = function (parentCriteriaId, criteriaType, onResponse)
    {
        let args = [parentCriteriaId, criteriaType];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/Criteria/GetCriterias", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetCriteriasAll = function (onResponse)
    {
        let args = [];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/Criteria/GetCriteriasAll", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SearchCriterias = function (criteriaParentId, keywords, criteriaType, onResponse)
    {
        let args = [criteriaParentId, keywords, criteriaType];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/Criteria/SearchCriterias", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Save = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/Criteria/Save", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Find = function (id, onResponse)
    {
        cfg.Connector.Submit(id, "ardvro/component/kenviro/Criteria/Find", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Delete = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/Criteria/Delete", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    return ctrl;
};