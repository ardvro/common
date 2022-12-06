var FuzzyCriteriaForm = function FuzzyCriteriaForm(cfg)
{
    let fuzzyCtrl = new FuzzyLogicController({ Connector: cfg.Connector });

    let frm = {};

    let _schema = new Fuzzy();

    let btnSubmit;

    let panelTable;

    let _data = {
        Name: "",
        InferenceType: "",
        MembershipType: "",
        DefuzzyficationType:"",
        FuzzyItems: [],
    };

    construct();


    function construct()
    {
        let tabindex = 0;

        frm = new FrameForm(
            {
                Id: cfg.Id,
                Code: cfg.Code,
                Label: "Create Fuzzy Logic Membership",
                StatusType: StatusType.Edit,
                DeepJoin: false,
                ShowLabel: false,
                AddDefaultOption: false,
                AllowSelectParent: false,
                EnableAssociation: false,
                Schema: _schema,
                PageSize: DEFAULT_PAGE_SIZE,
                Desktop: cfg.Desktop,
                DesktopItemType: cfg.DesktopItemType,
                FrameType: FrameType.Bordered,
                ReferenceType: ReferenceType.Struct,
                Connector: cfg.Connector,
                Theme: cfg.Theme,
                Data: cfg.Data,
                User: cfg.User,
                FormColumns: 2,
                ContentUrl: null,
                QueryMode: QueryMode.Struct,
                QueryFunction: null,
                GetServerTime: cfg.GetServerTime,
                //GetLookupDataFunction: function (dbtable, grid)
                //{
                //},
                //GetDataFunction: function (onResponse)
                //{
                //},
                //SaveDataFunction: function (data, onResponse)
                //{
                //    btnSubmit.click();
                //    frm.SetStateSucceed();
                //},
                DeleteDataFunction: function (data, onResponse)
                {
                    let ent = modelToEntity(data);
                    deleteData(ent);
                    frm.Close();
                }
            }
        );
        if (cfg.Data != null)
        {
            _data.Id = cfg.Data.Id;
            _data.CriteriaId = cfg.Data.CriteriaId;
            _data.Name = cfg.Data.Name;
            _data.InferenceType = cfg.Data.InferenceType;
            _data.MembershipType = cfg.Data.MembershipType;
            _data.DefuzzyficationType = cfg.Data.DefuzzyficationType;
            frm.LoadData(_data, _schema);
        }

        let btnAddItem = Inputs.CreateButton({
            Id: cfg.Id.concat("btnAddItem"), Name: " Add Item", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-plus", Label: "Add Item Criteria",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }

                addItem();
            }
        });
        frm.Body.appendChild(btnAddItem);

        frm.Body.appendChild(document.createElement("br"));
        frm.Body.appendChild(document.createElement("br"));

        panelTable = createPanelTableMatter([]);
        frm.Body.appendChild(panelTable);

        btnSubmit = Inputs.CreateButton({
            Id: cfg.Id.concat("btnSubmit"), Name: " Submit", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-paper-plane", Label: "Submit",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }

                let data = frm.GetData();
                _data.Name = data.Name;
                _data.InferenceType = data.InferenceType;
                _data.MembershipType = data.MembershipType;
                _data.DefuzzyficationType = data.DefuzzyficationType;

                submit(_data);
            }
        });
        panelTable.appendChild(btnSubmit);

        frm.Body.appendChild(document.createElement("br"));

        if (cfg.Data != null && cfg.Data.Id != null)
        {
            fuzzyCtrl.Find(cfg.Data.Id,
                function (result)
                {
                    _data = entityToModel(result);
                    panelTable.LoadData(_data.FuzzyItems, function (results)
                    {

                    });
                }
            );
        }
        else if (cfg.Data != null && cfg.Data.CriteriaId != null)
        {
            fuzzyCtrl.GetByCriteriaId(cfg.Data.CriteriaId,
                function (result)
                {
                    if (result == null)
                    {
                        MsgBox.Show("Data Not Found");
                        return;
                    }
                    _data = entityToModel(result);
                    panelTable.LoadData(_data.FuzzyItems, function (results)
                    {

                    });
                }
            );
        }
    }

    function createPanelTableMatter(list)
    {
        let pnlTable = new PanelTable({
            Id: "fuzzyMembership_new",
            Label: "Fuzzy Membership",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: false,
            AllowSort: false,
            Schema: new FuzzyItem(),
            PageSize: list.length,
            FrameType: FrameType.Borderless,
            EnableSearch: false,
            AddDefaultOption: false,
            AllowSelectParent: false,
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                addItem(item);
            }
        });

        pnlTable.LoadData(list, function (results)
        {

        });

        return pnlTable;
    }

    function addItem(dataItem)
    {
        if (dataItem == null)
        {
            dataItem = {};
        }

        let panel = new FuzzyCriteriaItemForm(
            {
                Id: cfg.Id.concat('_edsFuzzyItem_PanelForm'),
                Label: "Fuzzy Membership Range",
                Theme: cfg.Theme,
                Connector: cfg.Connector,
                Data: dataItem,
                OnAdd: function (projectDataItem)
                {
                    let indexToDelete = _data.FuzzyItems.findIndex(x => x.Name == projectDataItem.Name);
                    if (indexToDelete > -1)
                    {
                        _data.FuzzyItems.splice(indexToDelete, 1);
                    }
                    _data.FuzzyItems.push(projectDataItem);
                    panelTable.LoadData(_data.FuzzyItems, function (results)
                    {

                    });
                },
                OnDelete: function (projectDataItem)
                {
                    let indexToDelete = _data.FuzzyItems.findIndex(x => x.Name == projectDataItem.Name);
                    if (indexToDelete > -1)
                    {
                        _data.FuzzyItems.splice(indexToDelete, 1);
                        panelTable.LoadData(_data.FuzzyItems, function (results)
                        {

                        });
                    }
                }
            }
        );
    }

    function modelToEntity(model)
    {
        let ent = {
            Id: model.Id,
            Name : model.Name,
            InferenceType: model.InferenceType,
            MembershipType: model.MembershipType,
            DefuzzyficationType: model.DefuzzyficationType,
            aisCriteriaId: model.CriteriaId,
            aisCriteria: {
                Id: model.CriteriaId,
                Name: model.Name,
                CriteriaType: Kenviro.CriteriaType.FuzzyLogic,
                aisCriterias: []
            },
        };

        model.FuzzyItems.forEach(
            function (fuzzyItem, index)
            {
                if (fuzzyItem.Name == "")
                {
                    model.FuzzyItems.splice(index, 1);
                    return;
                }

                let existingIndex = ent.aisCriteria.aisCriterias.findIndex(x => x.Name.trim().toLowerCase() == fuzzyItem.Name.trim().toLowerCase());
                if (existingIndex != -1)
                {
                    model.FuzzyItems.splice(index, 1);
                    return;
                }

                let edsCrit = {
                    Id: fuzzyItem.Id,
                    Name: fuzzyItem.Name,
                    CriteriaType: Kenviro.CriteriaType.Matter,
                    aisCriterias: []
                };

                fuzzyItem.FuzzyItemCriterias.forEach(
                    function (fuzzyItemCriteria, j)
                    {
                        if (fuzzyItemCriteria.Name == "")
                        {
                            fuzzyItem.FuzzyItemCriterias.splice(j, 1);
                            return;
                        }

                        let existingIndexJ = edsCrit.aisCriterias.findIndex(x => x.Name.trim().toLowerCase() == fuzzyItemCriteria.Name.trim().toLowerCase());
                        if (existingIndexJ != -1)
                        {
                            fuzzyItem.FuzzyItemCriterias.splice(j, 1);
                            return;
                        }

                        let edsCritItem = {
                            Id: fuzzyItemCriteria.Id,
                            Name: fuzzyItemCriteria.Name,
                            CriteriaType: fuzzyItem.CriteriaType,
                            aisCriterias: []
                        };

                        let critMin = edsCritItem.aisCriterias.find(x => x.Name.trim().toLowerCase() == "min");
                        if (critMin == null)
                        {
                            edsCritItem.aisCriterias.push({ Id: fuzzyItemCriteria.MinId, Name: "Min", Weight: fuzzyItemCriteria.Min, CriteriaType: fuzzyItem.CriteriaType });
                        }
                        else
                        {
                            critMin.Weight = fuzzyItemCriteria.Min;
                        }

                        let critMax = edsCritItem.aisCriterias.find(x => x.Name.trim().toLowerCase() == "max");
                        if (critMax == null)
                        {
                            edsCritItem.aisCriterias.push({ Id: fuzzyItemCriteria.MaxId, Name: "Max", Weight: fuzzyItemCriteria.Max, CriteriaType: fuzzyItem.CriteriaType });
                        }
                        else
                        {
                            critMax.Weight = fuzzyItemCriteria.Max;
                        }

                        edsCrit.aisCriterias.push(edsCritItem);
                    }
                );

                ent.aisCriteria.aisCriterias.push(edsCrit);
            }
        );

        return ent;
    }

    function entityToModel(ent)
    {
        let model = {
            Id: ent.Id,
            CriteriaId: ent.aisCriteriaId,
            Name: ent.Name,
            InferenceType: ent.InferenceType,
            MembershipType: ent.MembershipType,
            DefuzzyficationType: ent.DefuzzyficationType,
            FuzzyItems : []
        };

        ent.aisCriteria.aisCriterias.forEach(
            function (item, i)
            {
                let modelItem = {
                    Id: item.Id,
                    Name: item.Name,
                    CriteriaType: Kenviro.CriteriaType.Matter,
                    FuzzyId: model.Id,
                    FuzzyItemCriterias:[]
                };

                item.aisCriterias.forEach(
                    function (crit, j)
                    {
                        let modelItemCriteria = {
                            Id: crit.Id,
                            Name: crit.Name,
                            CriteriaType: crit.CriteriaType,
                            FuzzyItemId: modelItem.Id
                        };

                        if (crit.aisCriterias.length > 0)
                        {
                            modelItemCriteria.MinId = crit.aisCriterias[0].Id;
                            modelItemCriteria.Min = crit.aisCriterias[0].Weight;
                        }
                        if (crit.aisCriterias.length > 1)
                        {
                            modelItemCriteria.MaxId = crit.aisCriterias[1].Id;
                            modelItemCriteria.Max = crit.aisCriterias[1].Weight;
                        }

                        modelItem.FuzzyItemCriterias.push(modelItemCriteria);
                    }
                );

                model.FuzzyItems.push(modelItem);
            }
        );
        
        return model;
    }

    function submit(data)
    {
        let ent = modelToEntity(data);

        MsgLoading.Show(true);

        fuzzyCtrl.Save(ent,
            function (result)
            {
                MsgLoading.Close();
                if (result == null)
                {
                    MsgBox.Show("Process Failed");
                    return;
                }

                _data = entityToModel(result);

                MsgBox.Show("Process Succeed");
            }
        );
    }

    function deleteData(data)
    {
        let ent = modelToEntity(data);
        fuzzyCtrl.Delete(ent);
    }


    return frm;
};














//var FuzzyItemCriteria = function FuzzyItemCriteria()
//{
//    this.Name = "FuzzyItemCriteria";
//    this.Label = "Fuzzy Item Criteria";
//    this.Columns = [
//        {
//            StatusType: StatusType.Hidden,
//            Name: "Id",
//            InputType: InputType.Number,
//            Required: true,
//            KeyType: KeyType.Primary,
//            MinimumValue: DataType.Int.Min,
//            MaximumValue: DataType.Int.Max,
//            DecimalPoint: 0,
//            DefaultValue: 0,
//            Label: "Id",
//            Note: "Id",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null
//        },
//        {
//            StatusType: StatusType.Edit,
//            Name: "Name",
//            InputType: InputType.Text,
//            Required: true,
//            KeyType: "",
//            MinimumValue: 0,
//            MaximumValue: 255,
//            DecimalPoint: null,
//            DefaultValue: null,
//            Label: "Name",
//            Note: "Name",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null,
//        },
//        {
//            StatusType: StatusType.Edit,
//            Name: "Min",
//            InputType: InputType.Number,
//            Required: true,
//            KeyType: "",
//            MinimumValue: 0,
//            MaximumValue: 999999999,
//            DecimalPoint: 9,
//            DefaultValue: 0,
//            Label: "Min",
//            Note: "Min",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null
//        },
//        {
//            StatusType: StatusType.Edit,
//            Name: "Max",
//            InputType: InputType.Number,
//            Required: true,
//            KeyType: "",
//            MinimumValue: 0,
//            MaximumValue: 999999999,
//            DecimalPoint: 9,
//            DefaultValue: 0,
//            Label: "Max",
//            Note: "Max",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null
//        },
//        {
//            StatusType: StatusType.Hidden,
//            Name: "FuzzyItemId",
//            InputType: InputType.Lookup,
//            Required: false,
//            KeyType: "",
//            MinimumValue: DataType.Int.Min,
//            MaximumValue: DataType.Int.Max,
//            DecimalPoint: 0,
//            DefaultValue: null,
//            Label: "Fuzzy",
//            Note: "Fuzzy",
//            ReferenceSchema: new FuzzyItem(),
//            ReferenceColumn: "Id",
//            ReferenceName: "Name",
//            Options: null
//        },
//        {
//            StatusType: StatusType.Hidden,
//            Name: "MinId",
//            InputType: InputType.Number,
//            Required: true,
//            KeyType: "",
//            MinimumValue: DataType.Int.Min,
//            MaximumValue: DataType.Int.Max,
//            DecimalPoint: 0,
//            DefaultValue: 0,
//            Label: "MinId",
//            Note: "MinId",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null
//        },
//        {
//            StatusType: StatusType.Hidden,
//            Name: "MaxId",
//            InputType: InputType.Number,
//            Required: true,
//            KeyType: "",
//            MinimumValue: DataType.Int.Min,
//            MaximumValue: DataType.Int.Max,
//            DecimalPoint: 0,
//            DefaultValue: 0,
//            Label: "MaxId",
//            Note: "MaxId",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null
//        },
//    ];
//    this.Associations = [
//    ];
//};

//var FuzzyItem = function FuzzyItem()
//{
//    this.Name = "FuzzyItem";
//    this.Label = "Fuzzy Item";
//    this.Columns = [
//        {
//            StatusType: StatusType.Hidden,
//            Name: "Id",
//            InputType: InputType.Number,
//            Required: true,
//            KeyType: KeyType.Primary,
//            MinimumValue: DataType.Int.Min,
//            MaximumValue: DataType.Int.Max,
//            DecimalPoint: 0,
//            DefaultValue: 0,
//            Label: "Id",
//            Note: "Id",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null
//        },
//        {
//            StatusType: StatusType.Edit,
//            Name: "Name",
//            InputType: InputType.Text,
//            Required: true,
//            KeyType: "",
//            MinimumValue: 0,
//            MaximumValue: 255,
//            DecimalPoint: null,
//            DefaultValue: null,
//            Label: "Name",
//            Note: "Name",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null,
//        },
//        {
//            StatusType: StatusType.Edit,
//            Name: "CriteriaType",
//            InputType: InputType.Select,
//            Required: true,
//            KeyType: "",
//            MinimumValue: 0,
//            MaximumValue: 32,
//            DecimalPoint: null,
//            DefaultValue: "",
//            Label: "CriteriaType",
//            Note: "CriteriaType",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: ["Indication", "Solution"]
//        },
//        {
//            StatusType: StatusType.Hidden,
//            Name: "FuzzyId",
//            InputType: InputType.Lookup,
//            Required: false,
//            KeyType: "",
//            MinimumValue: DataType.Int.Min,
//            MaximumValue: DataType.Int.Max,
//            DecimalPoint: 0,
//            DefaultValue: null,
//            Label: "Fuzzy",
//            Note: "Fuzzy",
//            ReferenceSchema: new Fuzzy(),
//            ReferenceColumn: "Name",
//            ReferenceName: "Name",
//            Options: null
//        },
//    ];
//    this.Associations = [
//        {
//            Name: "FuzzyItemCriterias",
//            Label: "Criterias",
//            Schema: "FuzzyItemCriteria"
//        }
//    ];
//};

//var Fuzzy = function Fuzzy()
//{
//    this.Name = "Fuzzy";
//    this.Label = "Fuzzy";
//    this.Columns = [
//        {
//            StatusType: StatusType.Hidden,
//            Name: "Id",
//            InputType: InputType.Number,
//            Required: true,
//            KeyType: KeyType.Primary,
//            MinimumValue: DataType.Int.Min,
//            MaximumValue: DataType.Int.Max,
//            DecimalPoint: 0,
//            DefaultValue: 0,
//            Label: "Id",
//            Note: "Id",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null
//        },
//        {
//            StatusType: StatusType.Hidden,
//            Name: "CriteriaId",
//            InputType: InputType.Number,
//            Required: true,
//            KeyType: "",
//            MinimumValue: DataType.Int.Min,
//            MaximumValue: DataType.Int.Max,
//            DecimalPoint: 0,
//            DefaultValue: 0,
//            Label: "CriteriaId",
//            Note: "CriteriaId",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null
//        },
//        {
//            StatusType: StatusType.Edit,
//            Name: "Name",
//            InputType: InputType.Text,
//            Required: true,
//            KeyType: "",
//            MinimumValue: 0,
//            MaximumValue: 255,
//            DecimalPoint: null,
//            DefaultValue: null,
//            Label: "Name",
//            Note: "Name",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: null,
//        },
//        {
//            StatusType: StatusType.Edit,
//            Name: "InferenceType",
//            InputType: InputType.Select,
//            Required: true,
//            KeyType: "",
//            MinimumValue: 0,
//            MaximumValue: 32,
//            DecimalPoint: null,
//            DefaultValue: "",
//            Label: "InferenceType",
//            Note: "InferenceType",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: "Name",
//            Options: [ "MamdaniFuzzyInference" ]
//        },
//        {
//            StatusType: StatusType.Edit,
//            Name: "MembershipType",
//            InputType: InputType.Select,
//            Required: true,
//            KeyType: "",
//            MinimumValue: 0,
//            MaximumValue: 32,
//            DecimalPoint: null,
//            DefaultValue: "",
//            Label: "MembershipType",
//            Note: "MembershipType",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: [ "Triangular" ]
//        },
//        {
//            StatusType: StatusType.Edit,
//            Name: "DefuzzyficationType",
//            InputType: InputType.Select,
//            Required: true,
//            KeyType: "",
//            MinimumValue: 0,
//            MaximumValue: 32,
//            DecimalPoint: null,
//            DefaultValue: "",
//            Label: "DefuzzyficationType",
//            Note: "DefuzzyficationType",
//            ReferenceSchema: null,
//            ReferenceColumn: null,
//            ReferenceName: null,
//            Options: [ "CentreOfGravity" ]
//        },
//    ];
//    this.Associations = [
//        {
//            Name: "FuzzyItems",
//            Label: "Items",
//            Schema: "FuzzyItem"
//        }
//    ];
//};
