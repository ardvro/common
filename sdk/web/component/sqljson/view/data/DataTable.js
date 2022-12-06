var DataTable = function DataTable(cfg)
{
    if (cfg.ContentUrl == null)
    {
        let showCounts = 0;
        cfg.Schema.Columns.forEach(function (x, index)
        {
            if (x.KeyType == KeyType.Primary || x.StatusType == StatusType.View
                || x.InputType == InputType.TextArea
                || x.InputType == InputType.CheckBox
                || x.InputType == InputType.Radio
                || x.InputType == InputType.DateTime
                || x.InputType == InputType.File
                || x.InputType == InputType.Password
                || x.InputType == InputType.WebEditor
                || x.InputType == InputType.HtmlEditor
                || x.InputType == InputType.SqlEditor
                || x.InputType == InputType.Javascript
                || (x.InputType == InputType.Select && (x.Options == null || x.Options.length == 0))
                || showCounts > 12
            )
            {
                if (x.Name != "Name")
                {
                    x.StatusType = StatusType.Hidden;
                }
            }
            else
            {
                showCounts++;
            }
        });
    }

    let _schema = {};
    Object.assign(_schema, cfg.Schema);
    let colWorkgroup = _schema.Columns.find(x => x.Name == DefaultColumnType.Workgroup);
    if (colWorkgroup != null)
    {
        colWorkgroup.InputType = InputType.Select;
        colWorkgroup.ReferenceColumn = "Id";
        colWorkgroup.ReferenceName = "Name";
        if (cfg.User != null)
        {
            let options = [];
            options.push({ Id: cfg.User.PrimaryWorkgroupId, Name: cfg.User.PrimaryWorkgroupName });
            colWorkgroup.Options = options;
        }
    }

    const frm = new FrameTable(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: cfg.Label,
            Theme: cfg.Theme,
            StatusType: cfg.StatusType,
            ShowLabel: cfg.ShowLabel,
            AddDefaultOption: cfg.AddDefaultOption,
            AllowSelectParent: cfg.AllowSelectParent,
            AllowSort: cfg.AllowSort,
            Schema: _schema,
            PageSize: cfg.PageSize,
            FrameType: cfg.FrameType,
            ReferenceType: cfg.ReferenceType,
            Connector: cfg.Connector,
            Desktop: cfg.Desktop,
            DesktopItemType: cfg.DesktopItemType,
            User: cfg.User,
            GetServerTime: cfg.GetServerTime,
            EnableSearch: cfg.EnableSearch,
            //WebsiteSetting: cfg.WebsiteSetting,
            ContentUrl: cfg.ContentUrl,
            PrintUrl: cfg.PrintUrl,
            //QueryMode: cfg.QueryMode,
            //ProjectSettings: cfg.ProjectSettings,
            //QueryFunction: cfg.QueryFunction,
            GetDataFunction: function (ctrlArg, onLoaded)
            {
                let ctrl = (ctrlArg != null ? ctrlArg : _sqlCtrl);
                getData(cfg.Schema, cfg.Schema.Name, frm, ctrl, cfg.ReferenceType, cfg.QueryMode, cfg.DefaultSort, cfg.QueryFunction,
                    function (data)
                    {
                        if (onLoaded != null)
                        {
                            onLoaded(data);
                        }

                        if (cfg.User != null)
                        {
                            Prints.FormatNumber(frm.Body, cfg.User.CountryLanguage, cfg.User.PrimaryWorkgroupCurrencyDecimalDigits, "label");
                        }

                        if (cfg.OnLoad != null)
                        {
                            cfg.OnLoad(frm, cfg.Schema, data, ctrl);
                        }
                    }
                );
            },
            GetLookupDataFunction: function (dbtable, grid, onResponse, lookupInput)
            {
                getLookupData(grid.GetSchema(), dbtable, grid, _sqlCtrl, cfg.ReferenceType, cfg.QueryMode, lookupInput);
            },
            OnItemRowClick: cfg.OnItemRowClick
        }
    );

    const _sqlCtrl = new SqlController({
        Connector: cfg.Connector,
        OnLoad: function (ctrl)
        {
            frm.Load(ctrl);
        }
    });

    if (cfg.DesktopItemType != DesktopItemType.Modal)
    {
        window.scrollTo(0, 0);
    }


    function getData(schema, tableName, grid, ctrl, referenceType, queryMode, defaultSort, queryFunction, onResponse)
    {
        let query;

        if (queryFunction != null)
        {
            let table = tableName == null ? schema.Name : tableName;
            query = queryFunction(ctrl, table, grid);
        }
        else
        {
            query = createDefaultQuery(schema, tableName, grid, ctrl, referenceType, queryMode, defaultSort);
        }

        ctrl.Send(query, function (data)
        {
            if (data != null && data != "")
            {
                let colRecursive = schema.Columns.find(x => x.ReferenceSchema != null && x.ReferenceSchema.Name == schema.Name);
                if (colRecursive != null)
                {
                    let list = Utils.ArrangeRecursiveList(data.List, colRecursive.Name, colRecursive.ReferenceColumn, colRecursive.ReferenceName, null, 0);
                    if (list != null && list.length > 0)
                    {
                        data.List = list;
                    }
                }
            }

            if (onResponse != null)
            {
                onResponse(data);
            }
        });
    }

    function isSkipColumn(x)
    {
        return (
            x.InputType == InputType.TextArea
            || x.InputType == InputType.File
            || x.InputType == InputType.Password
            || x.InputType == InputType.WebEditor
            || x.InputType == InputType.HtmlEditor
            || x.InputType == InputType.SqlEditor
            || (x.InputType == InputType.Select && (x.Options == null || x.Options.length == 0)));
    }

    function createDefaultQuery(schema, dbtable, grid, ctrl, referenceType, queryMode, defaultSort)
    {
        let filters = grid.GetSearchFilter();
        let currentSorted = grid.GetSorting();
        let pageIndex = grid.GetPageIndex();
        let pageSize = grid.GetPageSize();

        let szSqlJoin = "";
        let szSqlSelect = "";

        schema.Columns.forEach(function (schitem, index)
        {
            if (schitem.ReferenceSchema != null && schitem.ReferenceSchema.Recursive && schitem.ReferenceSchema.Columns == null)
            {
                schitem.ReferenceSchema = new window[schitem.ReferenceSchema.Name]();
            }

            if (schitem.ReferenceSchema != null && schitem.ReferenceSchema.Columns != null)
            {
                if (referenceType === ReferenceType.Flat)
                {
                    szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name);
                    schitem.ReferenceSchema.Columns.forEach(function (schitem2, index)
                    {
                        if (!isSkipColumn(schitem2))
                        {
                            szSqlSelect = szSqlSelect.concat(", ", schitem.ReferenceSchema.Name, "_", schitem.Name, ".", schitem2.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name, "_", schitem2.Name);
                        }
                    });
                }
                else if (referenceType === ReferenceType.Struct)
                {
                    if (schitem.ReferenceSchema.Name == cfg.Schema.Name)
                    {
                        szSqlJoin = szSqlJoin.concat(", LEFT JOIN ", schitem.ReferenceSchema.Name);
                    }
                    else
                    {
                        szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name);
                    }
                    szSqlSelect = "*";
                }
                else
                {
                    szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name);
                    schitem.ReferenceSchema.Columns.forEach(function (schitem2, index)
                    {
                        szSqlSelect = szSqlSelect.concat(", ", schitem.ReferenceSchema.Name, "_", schitem.Name, ".", schitem2.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name, "_", schitem2.Name);
                    });
                }
            }

            if (!isSkipColumn(schitem))
            {
                szSqlSelect = szSqlSelect.concat(", ", schitem.Name, " ");
            }
            
        });

        if (szSqlJoin.startsWith(", "))
        {
            szSqlJoin = szSqlJoin.substring(1, szSqlJoin.length);
        }

        if (referenceType == ReferenceType.Flat && szSqlSelect.startsWith(", "))
        {
            szSqlSelect = szSqlSelect.substring(1, szSqlSelect.length);
        }
        else
        {
            szSqlSelect = "*";
        }

        let szSqlWhere = "";
        let params = [];
        if (filters != null)
        {
            for (let index = 0; index < filters.length; index++)
            {
                let item = filters[index];
                if (item.Value != null && item.Value !== "")
                {
                    if (typeof item.Value === 'string' || item.Value instanceof String)
                    {
                        szSqlWhere = szSqlWhere.concat("and ", item.Name, " like ? ");
                        params.push(item.Value);
                    }
                    else
                    {
                        szSqlWhere = szSqlWhere.concat("and ", item.Name, "=? ");
                        params.push(item.Value);
                    }
                }
            }
        }
        if (szSqlWhere.startsWith("and "))
        {
            szSqlWhere = szSqlWhere.substring(3, szSqlWhere.length);
        }

        let szSqlOrder = "";
        if (currentSorted != null)
        {
            szSqlOrder = currentSorted.Column.Name.concat(" ", currentSorted.Sort == null ? "" : currentSorted.Sort);
        }
        else if (defaultSort != null && defaultSort != "")
        {
            szSqlOrder = defaultSort;
        }

        let joins = { JoinType: "LeftJoin", Joins: szSqlJoin };
        let wheres = { Where: szSqlWhere, Parameters: params };

        let query = ctrl.Query(dbtable, joins, wheres, "", szSqlOrder, pageSize, pageIndex);

        if (queryMode == QueryMode.Struct)
        {
            query = query.Paging(szSqlSelect);
        }
        else
        {
            query = query.PagingJsons(szSqlSelect);
        }

        return query;
    }

    function getLookupData(schema, dbtable, grid, ctrl, referenceType, queryMode, lookupInput)
    {
        let filters = grid.GetSearchFilter();
        let currentSorted = grid.GetSorting();
        let pageIndex = grid.GetPageIndex();
        let pageSize = grid.GetPageSize();

        let szSqlJoin = "";
        let szSqlSelect = "";

        schema.Columns.forEach(function (schitem, index)
        {
            if (schitem.ReferenceSchema != null && schitem.ReferenceSchema.Recursive && schitem.ReferenceSchema.Columns == null)
            {
                schitem.ReferenceSchema = new window[schitem.ReferenceSchema.Name]();
            }

            if (schitem.ReferenceSchema != null && schitem.ReferenceSchema.Columns != null)
            {
                if (referenceType === ReferenceType.Flat)
                {
                    szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name);
                    schitem.ReferenceSchema.Columns.forEach(function (schitem2, index)
                    {
                        szSqlSelect = szSqlSelect.concat(", ", schitem.ReferenceSchema.Name, "_", schitem.Name, ".", schitem2.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name, "_", schitem2.Name);
                    });
                }
                else if (referenceType === ReferenceType.Struct)
                {
                    if (schitem.ReferenceSchema.Name == grid.Schema.Name)
                    {
                        szSqlJoin = szSqlJoin.concat(", LEFT JOIN ", schitem.ReferenceSchema.Name);
                    }
                    else
                    {
                        szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name);
                    }
                    szSqlSelect = "*";
                }
                else
                {
                    szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name);
                    schitem.ReferenceSchema.Columns.forEach(function (schitem2, index)
                    {
                        szSqlSelect = szSqlSelect.concat(", ", schitem.ReferenceSchema.Name, "_", schitem.Name, ".", schitem2.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name, "_", schitem2.Name);
                    });
                }
            }

            szSqlSelect = szSqlSelect.concat(", ", schitem.Name, " ");
        });

        if (szSqlJoin.startsWith(", "))
        {
            szSqlJoin = szSqlJoin.substring(1, szSqlJoin.length);
        }

        if (szSqlSelect.startsWith(", "))
        {
            szSqlSelect = szSqlSelect.substring(1, szSqlSelect.length);
        }
        else
        {
            szSqlSelect = "*";
        }

        let szSqlWhere = "";
        let params = [];
        if (filters != null)
        {
            filters.forEach(function (item, index)
            {
                if (item.Value != null && item.Value != "")
                {
                    if (typeof item.Value === 'string' || item.Value instanceof String)
                    {
                        szSqlWhere = szSqlWhere.concat("and ", item.Name, " like ? ");
                        params.push(item.Value);
                    }
                    else
                    {
                        szSqlWhere = szSqlWhere.concat("and ", item.Name, "=? ");
                        params.push(item.Value);
                    }
                }
            });
        }
        if (szSqlWhere.startsWith("and "))
        {
            szSqlWhere = szSqlWhere.substring(3, szSqlWhere.length);
        }

        let szSqlOrder = "";
        if (currentSorted != null)
        {
            szSqlOrder = currentSorted.Column.Name.concat(" ", currentSorted.Sort == null ? "" : currentSorted.Sort);
        }

        let joins = { JoinType: "LeftJoin", Joins: szSqlJoin };
        let wheres = { Where: szSqlWhere, Parameters: params };

        ctrl.Paging(dbtable, joins, wheres, "", szSqlOrder, pageSize, pageIndex, szSqlSelect, queryMode, function (data)
        {
            if (data == null)
            {
                return;
            }

            let colRecursive = grid.GetSchema().Columns.find(x => x.ReferenceSchema != null && x.ReferenceSchema.Name == grid.GetSchema().Name);
            if (colRecursive != null)
            {
                let list = Utils.ArrangeRecursiveList(data.List, colRecursive.Name, colRecursive.ReferenceColumn, colRecursive.ReferenceName, null, 0);
                if (list.length > 0)
                {
                    data.List = list;
                }
            }

            grid.LoadData(data);

            if (lookupInput != null)
            {
                lookupInput.SetSelectedItems();
            }
            
        });
    }

    return frm;
};