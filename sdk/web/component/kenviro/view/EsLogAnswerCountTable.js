var EsLogAnswerCountTable = function EsLogAnswerCountTable(cfg)
{
    const frm = new FrameTable(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: cfg.Label,
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: true,
            AddDefaultOption: true,
            AllowSelectParent: true,
            AllowSort: false,
            Schema: {
                Name: "ExpertSystemAnswerCount",
                Label: "ExpertSystemAnswerCount",
                Columns: [
                    {
                        StatusType: StatusType.Hidden,
                        Name: "Id",
                        InputType: InputType.Number,
                        Label: "CriteriaId",
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "Criteria",
                        InputType: InputType.Text,
                        Label: "Criteria",
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "TrueAnswerCount",
                        InputType: InputType.Number,
                        Label: "True Answer Count",
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "FalseAnswerCount",
                        InputType: InputType.Number,
                        Label: "False Answer Count",
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "Matter",
                        InputType: InputType.Text,
                        Label: "Matter",
                    },
                    {
                        StatusType: StatusType.Hidden,
                        Name: "MatterId",
                        InputType: InputType.Text,
                        Label: "MatterId",
                    },
                ]
            },
            PageSize: 200,
            FrameType: FrameType.Bordered,
            ReferenceType: ReferenceType.Flat,
            Connector: cfg.Connector,
            Desktop: cfg.Desktop,
            User: cfg.User,
            GetServerTime: cfg.GetServerTime,
            EnableSearch: false,
            GetDataFunction: cfg.GetDataFunction
        }
    );

    frm.Load();

    return frm;
};