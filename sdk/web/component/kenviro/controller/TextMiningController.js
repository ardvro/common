var TextMiningController = function TextMiningController(cfg)
{
    let ctrl = {};

    ctrl.Find = function (id, onResponse)
    {
        let args = [id];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/Find", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetSubjects = function (onResponse)
    {
        let args = [];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/GetSubjects", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetTopics = function (subjectId, onResponse)
    {
        let args = [subjectId];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/GetTopics", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetSentences = function (topicId, onResponse)
    {
        let args = [topicId];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/GetSentences", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetDocuments = function (subjectId, onResponse)
    {
        let args = [subjectId];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/GetDocuments", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Generate = function (data, onResponse)
    {
        cfg.Connector.Submit(data, "ardvro/component/kenviro/TextMining/Generate", function (box)
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
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/InformationRetrieval", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.InformationExtraction = function (topic, text, onResponse)
    {
        let args = [topic, text];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/TextSummarization", function (box)
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
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/TextSummarization", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.PosTagging = function (text, onResponse)
    {
        let args = [text];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/PosTagging", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SplitSentences = function (text, onResponse)
    {
        let args = [text];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/SplitSentences", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.RestructureTopics = function (aisTmId, onResponse)
    {
        let args = [aisTmId];
        cfg.Connector.Submit(args, "ardvro/component/kenviro/TextMining/RestructureTopics", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};