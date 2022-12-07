var DecisionSupportSystemController = function DecisionSupportSystemController(cfg)
{
    let ctrl = {};

    ctrl.Submit = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/DecisionSupportSystem/Submit", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Import = function (aknSubjectId, name, decisionMethodType, list, pfeProfileId, onResponse)
    {
        let args = {
            aisCriteriaId: aknSubjectId,
            pfeProfileId: pfeProfileId,
            Name: name,
            DecisionType: decisionMethodType,
            List: list
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/DecisionSupportSystem/Import", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetById = function (id, callback)
    {
        cfg.Connector.Submit(id, "ardvro/component/kenviro/DecisionSupportSystem/GetById", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Delete = function (data, callback)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/DecisionSupportSystem/Delete", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};