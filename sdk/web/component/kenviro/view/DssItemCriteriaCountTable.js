var DssItemCriteriaCountTable = function DssItemCriteriaCountTable(cfg)
{
    let _schema = {
        Name: "DssMatrixViewReport",
        Label: "DSS Matrix View Report",
        Columns: [
            {
                StatusType: StatusType.View,
                Name: "Name",
                InputType: InputType.Text,
                Label: "Alternative",
            },
            {
                StatusType: StatusType.View,
                Name: "Output",
                InputType: InputType.Number,
                Label: "Output",
            },
            {
                StatusType: StatusType.View,
                Name: "Weight",
                InputType: InputType.Number,
                Label: "Index",
            },
        ]
    }

    let _list = [];

    cfg.Data.aisDssItems.forEach(
        function (projectItem, i)
        {
            let item = {};
            item.Name = projectItem.Name;
            item.Weight = projectItem.Weight;
            item.Output = projectItem.Output;
            projectItem.aisDssItemCriterias.forEach(
                function (criteria, j)
                {
                    let column = _schema.Columns.find(x => x.Name == criteria.Name);
                    if (column == null)
                    {
                        _schema.Columns.push(
                            {
                                StatusType: StatusType.View,
                                Name: criteria.Name,
                                InputType: InputType.Number,
                                Label: criteria.Name,
                            }
                        );
                    }

                    item[criteria.Name] = criteria.Value;
                }
            );
            _list.push(item);
        }
    );


    const frm = new FrameTable(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: cfg.Label + " " + cfg.Data.Name,
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: true,
            AddDefaultOption: false,
            AllowSelectParent: false,
            AllowSort: false,
            Schema: _schema,
            PageSize: 1000,
            FrameType: FrameType.Bordered,
            ReferenceType: ReferenceType.Flat,
            Connector: cfg.Connector,
            Desktop: cfg.Desktop,
            User: cfg.User,
            GetServerTime: cfg.GetServerTime,
            EnableSearch: false,
            GetDataFunction: function (ctrlArg, onLoaded)
            {
                onLoaded(_list);
            }
        }
    );

    frm.Load();

    window.scrollTo(0, 0);

    return frm;
};