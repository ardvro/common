var DssItemCriteriaUsageTable = function DssItemCriteriaUsageTable(cfg)
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
                Name: "DSSCriteriaUsageCount",
                Label: "DSS Criteria Usage Proportion",
                Columns: [
                    {
                        StatusType: StatusType.Hidden,
                        Name: "MatterId",
                        InputType: InputType.Number,
                        Label: "MatterId",
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "Matter",
                        InputType: InputType.Text,
                        Label: "Matter",
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "UsageCount",
                        InputType: InputType.Number,
                        Label: "Usage Count",
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