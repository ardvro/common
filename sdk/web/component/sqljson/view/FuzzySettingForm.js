var FuzzySettingForm = function FuzzySettingForm(cfg)
{
    const DEFAULTNAME = "Default";
    const fuzzySettingCtrl = new FuzzySettingController({ Connector: cfg.Connector });

    let frm = {};

    let _schema = new FuzzySetting();

    let btnSubmit;

    let panelTable;

    let _data;

    construct();


    function construct()
    {
        frm = new FrameForm(
            {
                Id: cfg.Id,
                Code: cfg.Code,
                Label: "Fuzzy Logic Membership",
                StatusType: StatusType.Edit,
                DeepJoin: false,
                ShowLabel: false,
                AddDefaultOption: false,
                AllowSelectParent: false,
                EnableAssociation: false,
                Schema: _schema,
                PageSize: DEFAULT_PAGE_SIZE,
                Desktop: cfg.Desktop,
                DesktopItemType: DesktopItemType.Modal,
                FrameType: FrameType.Bordered,
                ReferenceType: ReferenceType.Struct,
                Connector: cfg.Connector,
                Theme: cfg.Theme,
                Data: cfg.Data,
                User: cfg.User,
                FormColumns: 4,
                ContentUrl: null,
                QueryMode: QueryMode.Struct,
                QueryFunction: null,
                GetServerTime: cfg.GetServerTime,
                DeleteDataFunction: function (data, onResponse)
                {
                    deleteData(ent);
                    frm.Close();
                }
            }
        );

        if (cfg.Data != null)
        {
            fuzzySettingCtrl.GetById(cfg.Data.Id,
                function (result)
                {
                    _data = entityToModel(result);
                    frm.LoadData(_data, _schema);
                    initForm();
                    panelTable.LoadData(_data.FuzzySettingItems,
                        function (results)
                        {
                        }
                    );
                }
            );
        }
        else
        {
            fuzzySettingCtrl.GetAll(
                function (result)
                {
                    _data = entityToModel(result);
                    frm.LoadData(_data, _schema);
                    initForm();
                    panelTable.LoadData(_data.FuzzySettingItems,
                        function (results)
                        {
                        }
                    );
                }
            );
        }
    }

    function initForm()
    {
        let tabindex = _schema.Columns.length;

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
                _data.Name = DEFAULTNAME;
                _data.InferenceType = data.InferenceType;
                _data.MembershipType = data.MembershipType;
                _data.DefuzzyficationType = data.DefuzzyficationType;

                submit(_data);
            }
        });
        panelTable.appendChild(btnSubmit);

        frm.Body.appendChild(document.createElement("br"));
    }

    function createPanelTableMatter(list)
    {
        let itemSchema = new FuzzySettingItem();
        colCriteriaType = itemSchema.Columns.find(x => x.Name == "CriteriaType");
        colCriteriaType.StatusType = StatusType.Hidden;

        let pnlTable = new PanelTable({
            Id: "fuzzyMembership_new",
            Label: "Fuzzy Membership",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: false,
            AllowSort: false,
            Schema: itemSchema,
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

        let panel = new FuzzySettingItemForm(
            {
                Id: cfg.Id.concat('FuzzySettingItemForm'),
                Label: "Fuzzy Membership Range",
                Theme: cfg.Theme,
                Connector: cfg.Connector,
                Data: dataItem,
                OnAdd: function (projectDataItem)
                {
                    let indexToDelete = _data.FuzzySettingItems.findIndex(x => x.Name == projectDataItem.Name);
                    if (indexToDelete > -1)
                    {
                        _data.FuzzySettingItems.splice(indexToDelete, 1);
                    }
                    _data.FuzzySettingItems.push(projectDataItem);
                    panelTable.LoadData(_data.FuzzySettingItems, function (results)
                    {

                    });
                },
                OnDelete: function (projectDataItem)
                {
                    let indexToDelete = _data.FuzzySettingItems.findIndex(x => x.Name == projectDataItem.Name);
                    if (indexToDelete > -1)
                    {
                        _data.FuzzySettingItems.splice(indexToDelete, 1);
                        panelTable.LoadData(_data.FuzzySettingItems, function (results)
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
            ssoFuzzies: []
        };

        model.FuzzySettingItems.forEach(
            function (fuzzyItem, index)
            {
                if (fuzzyItem.Name == "")
                {
                    model.FuzzySettingItems.splice(index, 1);
                    return;
                }

                let existingIndex = ent.ssoFuzzies.findIndex(x => x.Name.trim().toLowerCase() == fuzzyItem.Name.trim().toLowerCase());
                if (existingIndex != -1)
                {
                    model.FuzzyItems.splice(index, 1);
                    return;
                }

                let edsCrit = {
                    Id: fuzzyItem.Id,
                    Name: fuzzyItem.Name,
                    CriteriaType: "Matter",
                    ssoFuzzies: []
                };

                fuzzyItem.FuzzySettingItemCriterias.forEach(
                    function (fuzzyItemCriteria, j)
                    {
                        if (fuzzyItemCriteria.Name == "")
                        {
                            fuzzyItem.FuzzySettingItemCriterias.splice(j, 1);
                            return;
                        }

                        let existingIndexJ = edsCrit.ssoFuzzies.findIndex(x => x.Name.trim().toLowerCase() == fuzzyItemCriteria.Name.trim().toLowerCase());
                        if (existingIndexJ != -1)
                        {
                            fuzzyItem.FuzzySettingItemCriterias.splice(j, 1);
                            return;
                        }

                        let edsCritItem = {
                            Id: fuzzyItemCriteria.Id,
                            Name: fuzzyItemCriteria.Name,
                            CriteriaType: "Criteria",
                            ssoFuzzies: []
                        };

                        let critMin = edsCritItem.ssoFuzzies.find(x => x.Name.trim().toLowerCase() == "min");
                        if (critMin == null)
                        {
                            edsCritItem.ssoFuzzies.push({ Id: fuzzyItemCriteria.MinId, Name: "Min", Weight: fuzzyItemCriteria.Min, CriteriaType: "Value" });
                        }
                        else
                        {
                            critMin.Weight = fuzzyItemCriteria.Min;
                        }

                        let critMax = edsCritItem.ssoFuzzies.find(x => x.Name.trim().toLowerCase() == "max");
                        if (critMax == null)
                        {
                            edsCritItem.ssoFuzzies.push({ Id: fuzzyItemCriteria.MaxId, Name: "Max", Weight: fuzzyItemCriteria.Max, CriteriaType: "Value" });
                        }
                        else
                        {
                            critMax.Weight = fuzzyItemCriteria.Max;
                        }

                        edsCrit.ssoFuzzies.push(edsCritItem);
                    }
                );

                ent.ssoFuzzies.push(edsCrit);
            }
        );

        return ent;
    }

    function entityToModel(ent)
    {
        if (ent == null)
        {
            let defaultModel = {
                Name: DEFAULTNAME,
                InferenceType: "MamdaniFuzzyInference",
                MembershipType: "Triangular",
                DefuzzyficationType: "CentreOfGravity",
                FuzzySettingItems: []
            };
            return defaultModel;
        }

        let model = {
            Id: ent.Id,
            CriteriaId: ent.ssoFuzzyId,
            Name: ent.Name,
            InferenceType: ent.InferenceType,
            MembershipType: ent.MembershipType,
            DefuzzyficationType: ent.DefuzzyficationType,
            CriteriaType: ent.CriteriaType,
            FuzzySettingItems : []
        };

        ent.ssoFuzzies.forEach(
            function (item, i)
            {
                let modelItem = {
                    Id: item.Id,
                    Name: item.Name,
                    CriteriaType: "Indication",
                    FuzzySettingId: model.Id,
                    FuzzySettingItemCriterias:[]
                };

                item.ssoFuzzies.forEach(
                    function (crit, j)
                    {
                        let modelItemCriteria = {
                            Id: crit.Id,
                            Name: crit.Name,
                            CriteriaType: "Value",
                            FuzzySettingItemId: modelItem.Id
                        };

                        if (crit.ssoFuzzies.length > 0)
                        {
                            modelItemCriteria.MinId = crit.ssoFuzzies[0].Id;
                            modelItemCriteria.Min = crit.ssoFuzzies[0].Weight;
                        }
                        if (crit.ssoFuzzies.length > 1)
                        {
                            modelItemCriteria.MaxId = crit.ssoFuzzies[1].Id;
                            modelItemCriteria.Max = crit.ssoFuzzies[1].Weight;
                        }

                        modelItem.FuzzySettingItemCriterias.push(modelItemCriteria);
                    }
                );

                model.FuzzySettingItems.push(modelItem);
            }
        );
        
        return model;
    }

    function submit(data)
    {
        let ent = modelToEntity(data);

        MsgLoading.Show(true);

        fuzzySettingCtrl.Save(ent,
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

        MsgLoading.Show(true);

        fuzzySettingCtrl.Delete(ent,
            function (result)
            {
                MsgLoading.Close();
                if (result == null)
                {
                    MsgBox.Show("Process Failed");
                    return;
                }

                MsgBox.Show("Deleted");
                frm.Close();
            }
        );
    }

    return frm;
};
