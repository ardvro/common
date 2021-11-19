var DecisionSupportSystemController = function DecisionSupportSystemController(cfg)
{
    let ctrl = {};

    ctrl.Submit = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/DecisionSupportSystemWorkflow/Submit", function (box)
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
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/DecisionSupportSystemWorkflow/Import", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetById = function (id, callback)
    {
        cfg.Connector.Submit(id, "ardvro/wf/kenviro/DecisionSupportSystemWorkflow/GetById", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Delete = function (data, callback)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/DecisionSupportSystemWorkflow/Delete", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};