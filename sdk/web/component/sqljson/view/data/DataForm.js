var DataForm = function DataForm(cfg)
{
    let frm;

    let _sqlCtrl;

    let _schema = {};

    construct();

    function construct()
    {
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

        frm = new FrameForm(
            {
                Id: cfg.Id,
                Code: cfg.Code,
                Label: cfg.Label,
                Theme: cfg.Theme,
                StatusType: cfg.StatusType,
                ShowLabel: cfg.ShowLabel,
                AddDefaultOption: cfg.AddDefaultOption,
                AllowSelectParent: cfg.AllowSelectParent,
                EnableAssociation: cfg.EnableAssociation,
                Schema: _schema,
                PageSize: cfg.PageSize,
                FrameType: cfg.FrameType,
                ReferenceType: cfg.ReferenceType,
                Connector: cfg.Connector,
                Data: cfg.Data,
                User: cfg.User,
                Desktop: cfg.Desktop,
                WebsiteSetting: cfg.WebsiteSetting,
                GetServerTime: cfg.GetServerTime,
                FormColumns: cfg.FormColumns,
                PrintUrl: cfg.PrintUrl,
                ContentUrl: cfg.ContentUrl,
                QueryMode: cfg.QueryMode,
                QueryFunction: cfg.QueryFunction,
                DesktopItemType: cfg.DesktopItemType,
                OnAssociationSchemaLoad: cfg.OnAssociationSchemaLoad,
                OnSchemaLoad: function (schema)
                {
                    setSchemaDefaultValue(schema, cfg.User, cfg.GetServerTime);
                    if (cfg.OnSchemaLoad != null)
                    {
                        cfg.OnSchemaLoad(schema);
                    }
                },
                GetLookupDataFunction: function (dbtable, grid, lookupInput)
                {
                    getLookupData(dbtable, grid, _sqlCtrl, cfg.ReferenceType, cfg.QueryMode, lookupInput);
                },
                OnLookupSaveFunction: function (formdiv)
                {
                    let dataToSave = formdiv.GetData();
                    let lookupSchema = formdiv.GetSchema();
                    saveData(lookupSchema.Name, dataToSave, lookupSchema, cfg.User, cfg.GetServerTime, _sqlCtrl, function (saveResult)
                    {
                        getData(saveResult, _sqlCtrl, cfg.Schema, cfg.ReferenceType, cfg.QueryMode, cfg.DeepJoin, cfg.EnableAssociation,
                            (cfg.QueryFunction != null ? cfg.QueryFunction : createDefaultQuery),
                            function ()
                            {
                                return setDefaultValue(cfg.Schema, saveResult, cfg.User, cfg.GetServerTime);
                            },
                            function (dataResult)
                            {

                            }
                        );
                    });
                },
                GetDataFunction: function (ctrlArg, onLoaded)
                {
                    //defaultData, ctrl, schema, referenceType, queryMode, isDeepJoin, enabledAssociation, queryFunction, getDefaultData, onResponse
                    let ctrl = (ctrlArg != null ? ctrlArg : _sqlCtrl);
                    let data = isNewData(cfg.Schema, cfg.Data) ? {} : cfg.Data;
                    getData(data, ctrl, cfg.Schema, cfg.ReferenceType, cfg.QueryMode, cfg.DeepJoin, cfg.EnableAssociation,
                        (cfg.QueryFunction != null ? cfg.QueryFunction : createDefaultQuery), 
                        function ()
                        {
                            return setDefaultValue(cfg.Schema, cfg.Data, cfg.User, cfg.GetServerTime);
                        },
                        function (data)
                        {
                            if (onLoaded != null)
                            {
                                onLoaded(data);
                            }

                            Prints.FormatNumber(frm.Body, cfg.User.CountryLanguage, cfg.User.PrimaryWorkgroupCurrencyDecimalDigits, "label");

                            if (cfg.OnLoad != null)
                            {
                                cfg.OnLoad(frm, cfg.Schema, data, ctrl);
                            }
                        });
                },
                SaveDataFunction: function (data, onLoaded)
                {
                    let dataToSave;
                    if (cfg.OnSave != null)
                    {
                        dataToSave = cfg.OnSave(data, _sqlCtrl);
                        if (dataToSave == null)
                        {
                            if (onLoaded != null)
                            {
                                onLoaded(data);
                            }
                            return;
                        }
                    }
                    else
                    {
                        dataToSave = data;
                    }

                    saveData(cfg.Schema.Name, dataToSave, cfg.Schema, cfg.User, cfg.GetServerTime, _sqlCtrl, function (saveResult)
                    {
                        getData(saveResult, _sqlCtrl, cfg.Schema, cfg.ReferenceType, cfg.QueryMode, cfg.DeepJoin, cfg.EnableAssociation,
                            (cfg.QueryFunction != null ? cfg.QueryFunction : createDefaultQuery),
                            function ()
                            {
                                return setDefaultValue(cfg.Schema, saveResult, cfg.User, cfg.GetServerTime);
                            },
                            function (dataResult)
                            {
                                if (onLoaded != null)
                                {
                                    onLoaded(dataResult);
                                }
                                Prints.FormatNumber(frm.Body, cfg.User.CountryLanguage, cfg.User.PrimaryWorkgroupCurrencyDecimalDigits, "label");
                            });
                    });
                },
                DeleteDataFunction: function (data, onLoaded)
                {
                    if (cfg.OnDelete != null)
                    {
                        let dataToDelete = cfg.OnDelete(data, onLoaded, _sqlCtrl);
                        if (dataToDelete != null)
                        {
                            deleteData(cfg.Schema, cfg.Schema.Name, data, _sqlCtrl,
                                function (dataResult)
                                {
                                    if (onLoaded != null)
                                    {
                                        onLoaded(dataResult);
                                    }
                                }
                            );
                        }
                    }
                    else
                    {
                        deleteData(cfg.Schema, cfg.Schema.Name, data, _sqlCtrl,
                            function (dataResult)
                            {
                                if (onLoaded != null)
                                {
                                    onLoaded(dataResult);
                                }
                            }
                        );
                    }
                }
            }
        );

        _sqlCtrl = new SqlController({
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
    }


    function createJoinRecursive(schema, referenceType,  parent)
    {
        let isDoRecursiveUp = true;
        if (parent != null && parent.Associations != null)
        {
            for (let index = 0; index < parent.Associations.length; index++)
            {
                let associationSchema = parent.Associations[index];
                if (associationSchema == null)
                {
                    continue;
                }

                if (associationSchema.Schema === (schema.Name))
                {
                    isDoRecursiveUp = false;
                }
            }
        }

        if (schema == null || schema.Columns == null)
        {
            return "";
        }

        let szSqlJoin = "";
        for (let index = 0; index < schema.Columns.length; index++)
        {
            let schitem = schema.Columns[index];

            if (schitem.ReferenceSchema != null)
            {
                if (szSqlJoin.includes(schitem.ReferenceSchema.Name) || schitem.ReferenceSchema.Name === schema.Name)
                {
                    continue;
                }

                if (schitem.ReferenceSchema.Name === cfg.Schema.Name)
                {
                    continue;
                }

                if (referenceType == ReferenceType.Flat)
                {
                    szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name);
                }
                else if (referenceType == ReferenceType.Struct)
                {
                    szSqlJoin = szSqlJoin.concat(", INNER JOIN ", schitem.ReferenceSchema.Name, " ", schema.Name, "_", schitem.ReferenceSchema.Name);
                }

                if (isDoRecursiveUp)
                {
                    szSqlJoin += createJoinRecursive(schitem.ReferenceSchema, referenceType, schema);
                }

            }
        }

        if (schema.Associations == null)
        {
            return szSqlJoin;
        }

        for (let index = 0; index < schema.Associations.length; index++)
        {
            let associationSchema = schema.Associations[index];
            if (associationSchema == null)
            {
                continue;
            }

            let table = new window[associationSchema.Schema]();
            if (table == null)
            {
                continue;
            }

            if (szSqlJoin.includes(table.Name) || table.Name === schema.Name)
            {
                continue;
            }

            if (table.Name === cfg.Schema.Name)
            {
                continue;
            }

            szSqlJoin = szSqlJoin.concat(", LEFT JOIN ", table.Name, " ", table.Name, "_", schema.Name);

            szSqlJoin += createJoinRecursive(table, schema);
        }

        return szSqlJoin;
    }

    function createJoin3LevelLinear(schema, referenceType, enabledAssociation)
    {
        let szSqlJoin = "";

        for (let index = 0; index < schema.Columns.length; index++)
        {
            let schitem = schema.Columns[index];

            if (schitem.ReferenceSchema != null)
            {
                //if (szSqlJoin.includes(schitem.ReferenceSchema.Name) || schitem.ReferenceSchema.Name === schema.Name)
                //{
                    //continue;
                //}

                if (referenceType == ReferenceType.Flat)
                {
                    szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name);
                }
                else if (referenceType == ReferenceType.Struct)
                {
                    szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name);
                }
            }
        }

        let associationCount = schema.Associations != null ? schema.Associations.length : 0;

        for (let index = 0; index < associationCount; index++)
        {
            let associationSchema = schema.Associations[index];
            if (associationSchema == null)
            {
                continue;
            }

            let table;
            if (enabledAssociation)
            {
                if (associationSchema.Schema instanceof Object && associationSchema.Schema.Columns != null && associationSchema.Schema.Columns.length > 0)
                {
                    table = associationSchema.Schema;
                }
                else
                {
                    try
                    {
                        table = new window[associationSchema.Schema]();
                    }
                    catch {continue;}
                }
            }
            if (table == null)
            {
                continue;
            }

            let joinsPart = szSqlJoin.split(/,/g);
            //if (szSqlJoin.includes(table.Name) || table.Name === cfg.Schema.Name)
            if (joinsPart.indexOf(table.Name) > -1 || table.Name === cfg.Schema.Name)
            {
                continue;
            }

            szSqlJoin = szSqlJoin.concat(", ", table.Name);

            for (let j = 0; j < table.Columns.length; j++)
            {
                let schitem = table.Columns[j];
                if (schitem.ReferenceSchema != null)
                {
                    if (szSqlJoin.includes(schitem.ReferenceSchema.Name) || schitem.ReferenceSchema.Name === schema.Name)
                    {
                        continue;
                    }

                    if (referenceType === ReferenceType.Flat)
                    {
                        szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name, " ", schitem.ReferenceSchema.Name, "_", schitem.Name);
                    }
                    else if (referenceType === ReferenceType.Struct)
                    {
                        szSqlJoin = szSqlJoin.concat(", ", schitem.ReferenceSchema.Name);
                    }
                }
            }

            if (table.Associations !== null && table.Associations !== undefined)
            {
                for (let j = 0; j < table.Associations.length; j++)
                {
                    let schema2 = table.Associations[j];

                    let table2;
                    if (schema2.Schema instanceof Object && schema2.Schema != null && schema2.Schema.Columns.length > 0)
                    {
                        table2 = schema2.Schema;
                    }
                    else
                    {
                        table2 = new window[schema2.Schema]();
                    }
                    if (table2 != null)
                    {
                        table2 = table2.Name;
                    }
                    else
                    {
                        continue;
                    }

                    if (szSqlJoin.includes(table2) || table2 === schema.Name)
                    {
                        continue;
                    }

                    if (referenceType === ReferenceType.Flat)
                    {
                        szSqlJoin = szSqlJoin.concat(", ", table2, " ", table2, "_", schema2.ReferenceColumn);
                    }
                    else if (referenceType === ReferenceType.Struct)
                    {
                        szSqlJoin = szSqlJoin.concat(", ", table2);
                    }
                }
            }
        }

        return szSqlJoin;
    }

    function onlyUnique(value, index, self)
    {
        return self.indexOf(value) === index;
    }

    function createDefaultQuery(data, ctrl, schema, referenceType, queryMode, isDeepJoin, enabledAssociation)
    {
        let szSqlJoin = "";
        let szSqlSelect = "*";

        if (isDeepJoin)
        {
            szSqlJoin = createJoinRecursive(schema, referenceType);
        }
        else
        {
            szSqlJoin = createJoin3LevelLinear(schema, referenceType, enabledAssociation);
        }

        if (szSqlJoin.startsWith(", "))
        {
            szSqlJoin = szSqlJoin.substring(1, szSqlJoin.length);
        }

        let joinstrings = szSqlJoin.split(",");
        let joinsfilter = joinstrings.filter(onlyUnique);
        joinsfilter = joinsfilter.filter(x => x != schema.Name);
        szSqlJoin = joinsfilter.join(",");

        let pkname = schema.Columns.find(x => x.KeyType == KeyType.Primary);
        if (pkname == null)
        {
            return;
        }

        if (data == null || data === {} || data[pkname.Name] == null || data[pkname.Name] == 0 || data[pkname.Name] == "")
        {
            return;
        }

        let ppkval = data[pkname.Name];

        let szSqlWhere = schema.Name.concat(".", pkname.Name, "=?");

        let joins = { JoinType: "LeftJoin", Joins: szSqlJoin };
        if (/\S/.test(szSqlJoin))
        {
            if (isDeepJoin)
            {
                joins = { JoinType: "Join", Joins: szSqlJoin };
            }
            else
            {
                joins = { JoinType: "LeftJoin", Joins: szSqlJoin };
            }
        }

        let wheres;
        if (/\S/.test(szSqlWhere))
        {
            wheres = { Where: szSqlWhere, Parameters: [ ppkval ] };
        }

        let query = ctrl.Query(schema.Name, joins, wheres, "", "");

        if (queryMode == QueryMode.Struct)
        {
            query = query.First(szSqlSelect);
        }
        else
        {
            query = query.Json(szSqlSelect);
        }

        return query;
    }

    function setDefaultValue(schema, dataSrc, user, getServerTime)
    {
        let data = Object.assign({}, dataSrc);

        schema.Columns.forEach(function (item, index)
        {
            if (item.Name === DefaultColumnType.Updater && (data[item.Name] == null || data[item.Name] == ""))
            {
                data[item.Name] = user.Name;
            }
            else if (item.Name === DefaultColumnType.Workgroup && (data[item.Name] == null || data[item.Name] == 0 || data[item.Name] == "0" || data[item.Name] == ""))
            {
                data[item.Name] = user.PrimaryWorkgroupId;
            }
            else if (item.Name === DefaultColumnType.Note && (data[item.Name] == null || data[item.Name] == ""))
            {
                data[item.Name] = "";
            }
            else if (item.Name === DefaultColumnType.Updated)
            {
                data[item.Name] = getServerTime().Format("yyyy-MM-dd HH:mm:ss");
            }
            else if (item.Name === DefaultColumnType.Status && (data[item.Name] == null || data[item.Name] == ""))
            {
                data[item.Name] = 1;
            }
            else if (item.InputType === InputType.CheckBox && data[item.Name] == null)
            {
                data[item.Name] = false;
            }
        });

        setDefaultAssociation(schema, data, user, getServerTime);

        return data;
    }

    function setDefaultAssociation(schema, data, user, getServerTime)
    {
        if (schema.Associations == null)
        {
            return;
        }

        schema.Associations.forEach(function (schemaAssociation, index)
        {
            let schemaItem = createOrGetAssociationSchema(schemaAssociation);

            if (schemaItem == null || schemaItem.Columns == null || schemaItem.Columns.length <= 0)
            {
                return;
            }

            if (data[schemaAssociation.Name] == null || data[schemaAssociation.Name].length <= 0)
            {
                return;
            }

            data[schemaAssociation.Name].forEach(function (dataSchema, j)
            {
                schemaItem.Columns.forEach(function (item, index)
                {
                    if (item.Name === DefaultColumnType.Updater && (dataSchema[item.Name] == null || dataSchema[item.Name] == ""))
                    {
                        dataSchema[item.Name] = user.Username;
                    }
                    else if (item.Name === DefaultColumnType.Workgroup && (dataSchema[item.Name] == null || dataSchema[item.Name] == "" || dataSchema[item.Name] == 0))
                    {
                        dataSchema[item.Name] = user.PrimaryWorkgroupId;
                    }
                    else if (item.Name === DefaultColumnType.Note && (dataSchema[item.Name] == null || dataSchema[item.Name] == ""))
                    {
                        dataSchema[item.Name] = "";
                    }
                    else if (item.Name === DefaultColumnType.Updated)
                    {
                        dataSchema[item.Name] = getServerTime().Format("yyyy-MM-dd HH:mm:ss");
                    }
                    else if (item.Name === DefaultColumnType.Status && (dataSchema[item.Name] == null || dataSchema[item.Name] == ""))
                    {
                        dataSchema[item.Name] = 1;
                    }
                    else if (item.InputType === InputType.CheckBox && dataSchema[item.Name] == null)
                    {
                        dataSchema[item.Name] = false;
                    }
                });
            });
        });
    }

    function setSchemaDefaultValue(schema, user, getServerTime)
    {
        schema.Columns.forEach(function (item, index)
        {
            if (item.Name === DefaultColumnType.Updater)
            {
                item.DefaultValue = user.Name;
            }
            else if (item.Name === DefaultColumnType.Workgroup)
            {
                item.DefaultValue = user.PrimaryWorkgroupId;
                item.Options = user.PrimaryWorkgroupOption;
            }
            else if (item.Name === DefaultColumnType.Note)
            {
                item.DefaultValue = "";
            }
            else if (item.Name === DefaultColumnType.Updated)
            {
                item.DefaultValue = getServerTime().Format("yyyy-MM-dd HH:mm:ss");
            }
            else if (item.Name === DefaultColumnType.Status)
            {
                item.DefaultValue = 1;
            }
            else if (item.InputType === InputType.CheckBox)
            {
                item.DefaultValue = false;
            }
        });

        setSchemaAssociationDefaultValue(schema, user, getServerTime)
    }

    function setSchemaAssociationDefaultValue(schema, user, getServerTime)
    {
        if (schema.Associations == null)
        {
            return;
        }

        schema.Associations.forEach(function (schemaAssociation, index)
        {
            let schemaItem = createOrGetAssociationSchema(schemaAssociation);

            if (schemaItem == null || schemaItem.Columns == null || schemaItem.Columns.length <= 0)
            {
                return;
            }

            schemaItem.Columns.forEach(function (item, index)
            {
                if (item.Name === DefaultColumnType.Updater)
                {
                    item.DefaultValue = user.Name;
                }
                else if (item.Name === DefaultColumnType.Workgroup)
                {
                    item.DefaultValue = user.PrimaryWorkgroupId;
                    item.Options = user.PrimaryWorkgroupOption;
                }
                else if (item.Name === DefaultColumnType.Note)
                {
                    item.DefaultValue = "";
                }
                else if (item.Name === DefaultColumnType.Updated)
                {
                    item.DefaultValue = getServerTime().Format("yyyy-MM-dd HH:mm:ss");
                }
                else if (item.Name === DefaultColumnType.Status)
                {
                    item.DefaultValue = 1;
                }
                else if (item.InputType === InputType.CheckBox)
                {
                    item.DefaultValue = false;
                }
            });
        });
    }

    function getData(defaultData, ctrl, schema, referenceType, queryMode, isDeepJoin, enabledAssociation, queryFunction, getDefaultData, onResponse)
    {
        let query = queryFunction(defaultData, ctrl, schema, referenceType, queryMode, isDeepJoin, enabledAssociation);

        if (query == null)
        {
            if (onResponse != null)
            {
                onResponse(getDefaultData());
            }
            return;
        }

        ctrl.Send(query, function (data)
        {
            if (data != null && data != "" && schema.Associations != null)
            {
                schema.Associations.forEach(function (associationSchema, index)
                {
                    if (data[associationSchema.Name] != null)
                    {
                        data[associationSchema.Name].forEach(function (child, j)
                        {
                            //to avoid recursive endless loop
                            child[schema.Name] = null;
                            //child[schema.Name] = new { Name: child.Name };
                        });
                    }
                });
            }
            
            if (onResponse != null)
            {
                onResponse(data);
            }
        });
    }

    function saveData(table, dataSrc, schema, user, serverTime, ctrl, onResponse)
    {
        let data = setDefaultValue(schema, dataSrc, user, serverTime);
        ctrl.Save(table, data, function (result)
        {
            if (onResponse != null)
            {
                onResponse(result);
            }
        });
    }

    function deleteData(schema, table, data, ctrl, onResponse)
    {
        delete data.Updated;

        let pkname = schema.Columns.find(x => x.KeyType == KeyType.Primary);
        if (pkname == null)
        {
            return;
        }

        if (pkname == null || data[pkname.Name] == null || data[pkname.Name] == 0 || data[pkname.Name] === "")
        {
            schema.Columns.forEach(function (x, index)
            {
                if (x.InputType == InputType.TextArea
                    || x.InputType == InputType.File
                    || x.InputType == InputType.Password
                    || x.InputType == InputType.WebEditor
                    || x.InputType == InputType.HtmlEditor
                    || x.InputType == InputType.SqlEditor
                    || (x.InputType == InputType.Text && x.MaxValue > 255)
                )
                {
                    delete data[x.Name];
                }
                else if (x.InputType == InputType.DateTime && data[x.Name] != null)
                {
                    data[x.Name] = data[x.Name].Format("yyyy-MM-dd HH:mm:ss");
                }
                else if (x.InputType == InputType.Date && data[x.Name] != null)
                {
                    data[x.Name] = data[x.Name].Format("yyyy-MM-dd");
                }
                else if (x.InputType == InputType.Time && data[x.Name] != null)
                {
                    data[x.Name] = data[x.Name].Format("HH:mm:ss");
                }
                else if (x.InputType == InputType.Number && x.DecimalPoint > 0)
                {
                    data[x.Name] = Number(data[x.Name]).toFixed(x.DecimalPoint);
                }
            });
            ctrl.Delete(table, data, function (result)
            {
                if (onResponse != null)
                {
                    onResponse(result);
                }
            });
        }
        else
        {
            let obj = {};
            obj[pkname.Name] = data[pkname.Name];
            ctrl.Delete(table, obj, function (result)
            {
                if (onResponse != null)
                {
                    onResponse(result);
                }
            });
        }
    }

    function getLookupData(dbtable, grid, ctrl, referenceType, queryMode, lookupInput)
    {
        let filters = grid.GetSearchFilter();
        let currentSorted = grid.GetSorting();
        let pageIndex = grid.GetPageIndex();
        let pageSize = grid.GetPageSize();

        let szSqlJoin = "";
        let szSqlSelect = "";

        grid.GetSchema().Columns.forEach(function (schitem, index)
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
                    if (schitem.ReferenceSchema.Name == grid.GetSchema().Name)
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

            let list = data.List;
            let colRecursive = grid.GetSchema().Columns.find(x => x.ReferenceSchema != null && x.ReferenceSchema.Name == grid.GetSchema().Name);
            if (colRecursive != null)
            {
                list = Utils.ArrangeRecursiveList(data.List, colRecursive.Name, colRecursive.ReferenceColumn, colRecursive.ReferenceName, null, 0);
                if (list != null && list.length > 0)
                {
                    data.List - list;
                }
            }

            grid.LoadData(data);

            if (lookupInput != null)
            {
                lookupInput.SetSelectedItems();
            }
            
        });
    }

    function createOrGetAssociationSchema(schemaAssociation)
    {
        let schemaItem;
        if (schemaAssociation.Schema instanceof Object && schemaAssociation.Schema.Columns != null && schemaAssociation.Schema.Columns.length > 0)
        {
            schemaItem = associationSchema.Schema;
        }
        else
        {
            try
            {
                schemaItem = new window[schemaAssociation.Schema]();
            }
            catch { }
        }
        return schemaItem;
    }

    function isNewData(schema, orgData)
    {
        if (orgData == null)
        {
            return true;
        }

        let dataId;
        let pkcol = schema.Columns.find(x => x.KeyType == KeyType.Primary);
        if (pkcol != null)
        {
            dataId = orgData[pkcol.Name];
        }
        return !(dataId != null && dataId != "" && dataId != "0" && dataId != 0);
    }


    return frm;
};
