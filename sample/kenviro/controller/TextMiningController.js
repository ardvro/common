var TextMiningController = function TextMiningController(cfg)
{
    let ctrl = {};

    ctrl.Find = function (id, onResponse)
    {
        let args = [id];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/Find", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetSubjects = function (onResponse)
    {
        let args = [];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/GetSubjects", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetTopics = function (subjectId, onResponse)
    {
        let args = [subjectId];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/GetTopics", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetSentences = function (topicId, onResponse)
    {
        let args = [topicId];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/GetSentences", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetDocuments = function (subjectId, onResponse)
    {
        let args = [subjectId];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/GetDocuments", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Generate = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/wf/kenviro/TextMiningWorkflow/Generate", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.InformationRetrieval = function (subject, documents, rejectedWords, filterPosTags, onResponse)
    {
        let args = {
            Subject: subject,
            Documents: documents,
            RejectedWords: rejectedWords,
            FilterPosTags: filterPosTags
        };
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/InformationRetrieval", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.InformationExtraction = function (topic, text, onResponse)
    {
        let args = [topic, text];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/TextSummarization", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.TextSummarization = function (subject, documents, onResponse)
    {
        let args = {
            Subject: subject,
            Documents: documents,
        };
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/TextSummarization", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.PosTagging = function (text, onResponse)
    {
        let args = [text];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/PosTagging", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SplitSentences = function (text, onResponse)
    {
        let args = [text];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/SplitSentences", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.RestructureTopics = function (aisTmId, onResponse)
    {
        let args = [aisTmId];
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/TextMiningWorkflow/RestructureTopics", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};