var ExpertSystemController = function ExpertSystemController(cfg)
{
    let ctrl = {};

    ctrl.Find = function (id)
    {
        let args = [id];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/ExpertSystemWorkflow/Find", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SearchExpertSystems = function (text, onResponse)
    {
        let args = [text];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/ExpertSystemWorkflow/SearchExpertSystems", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SearchMatters = function (expertSystemId, text, onResponse)
    {
        let args = [expertSystemId, text];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/ExpertSystemWorkflow/SearchMatters", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Compute = function (list, profileId, onResponse)
    {
        let args = {
            Criterias: list,
            pfeProfileId: profileId
        };
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/ExpertSystemWorkflow/Compute", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetNextCriteria = function (inferenceData, onResponse)
    {
        cfg.Connector.Submit(inferenceData, "ardvro/wf/kenviro/ExpertSystemWorkflow/GetNextCriteria", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Generate = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/ExpertSystemWorkflow/Generate", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.sp_EsLogAnswerCount = function (datefrom, dateto, offset, pagesize, callback)
    {
        let args = [datefrom, dateto, (offset * pagesize), pagesize];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/ExpertSystemWorkflow/sp_EsLogAnswerCount", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.sp_DssItemCriteriaUsageCount = function (datefrom, dateto, offset, pagesize, callback)
    {
        let args = [datefrom, dateto, (offset * pagesize), pagesize];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/ExpertSystemWorkflow/sp_DssItemCriteriaUsageCount", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.sp_EsLogAnswerCountSolutions = function (datefrom, dateto, offset, pagesize, callback)
    {
        let args = [datefrom, dateto, (offset * pagesize), pagesize];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/ExpertSystemWorkflow/sp_EsLogAnswerCountSolutions", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};
