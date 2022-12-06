var GaCriteriaForm = function GaCriteriaForm(cfg)
{
    let critCtrl = new CriteriaController({ Connector: cfg.Connector });

    let frm = new PanelModal(
        {
            Id: cfg.Id,
            Label: "Genetic Algorithm Evaluation Rules",
            Theme: cfg.Theme
        }
    );

    let panel;

    let btnAddItem;
    let btnDelete;

    let _schema = new FuzzyItem();
    let crittype = _schema.Columns.find(x => x.Name == "CriteriaType");
    crittype.StatusType = StatusType.Hidden;

    construct();

    function construct()
    {
        panel = new FrameForm(
            {
                Id: cfg.Id,
                Code: cfg.Code,
                Label: "Create Genetic Algorithm Evaluation Rules",
                StatusType: StatusType.Edit,
                DeepJoin: false,
                ShowLabel: false,
                AddDefaultOption: false,
                AllowSelectParent: false,
                EnableAssociation: true,
                Schema: _schema,
                PageSize: DEFAULT_PAGE_SIZE,
                //Desktop: cfg.Desktop,
                FrameType: FrameType.Bordered,
                ReferenceType: ReferenceType.Struct,
                Connector: cfg.Connector,
                Theme: cfg.Theme,
                Data: cfg.Data,
                User: cfg.User,
                FormColumns: 1,
                ContentUrl: null,
                QueryMode: QueryMode.Struct,
                QueryFunction: null,
                GetServerTime: cfg.GetServerTime,
                GetLookupDataFunction: function (dbtable, grid)
                {
                },
                GetDataFunction: function (onResponse)
                {
                },
                SaveDataFunction: function (data, onResponse)
                {
                    addData(data);
                },
                DeleteDataFunction: function (data, onResponse)
                {
                    deleteData(data);
                }
            }
        );

        frm.Body.appendChild(panel);

        btnAddItem = Inputs.CreateButton({
            Id: cfg.Id.concat("btnAddItem"), Name: " Add", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, 
            Icon: "fas fa-plus", Label: "Add Item Criteria",
            OnClick: function (e)
            {
                let data = panel.GetData();
                addData(data);
            }
        });
        frm.AddButton(btnAddItem);

        if (cfg.Data == null)
        {
            cfg.Data = {};
        }

        if (cfg.Data.Id != null && cfg.Data.Id != 0)
        {
            critCtrl.Find(cfg.Data.Id,
                function (result)
                {
                    let data = entityToModel(result, _schema);
                    panel.LoadData(data);
                }
            );

            btnDelete = Inputs.CreateButton({
                Id: cfg.Id.concat("btnDelete"), Name: " Remove", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass,
                Icon: "fas fa-minus", Label: "Remove Item Criteria",
                OnClick: function (e)
                {
                    let data = panel.GetData();
                    deleteData(data);
                }
            });
            frm.AddButton(btnDelete);
        }
        else
        {
            cfg.Data.Name = "";
            cfg.Data.CriteriaType = Kenviro.GeneticAlgorithm;
            cfg.Data.FuzzyItemCriterias = [];

            let modelItemCriteria1 = {
                Id: cfg.Data.Id,
                Name: "",
                FuzzyItemId: cfg.Data.Id,
                Min: 0,
                Max: 0
            };
            cfg.Data.FuzzyItemCriterias.push(modelItemCriteria1);

            let modelItemCriteria2 = {
                Id: cfg.Data.Id,
                Name: "",
                FuzzyItemId: cfg.Data.Id,
                Min: 0,
                Max: 0
            };
            cfg.Data.FuzzyItemCriterias.push(modelItemCriteria2);
        }
    }

    function addData(data)
    {
        if (!panel.IsValid())
        {
            return;
        }

        let ent = modelToEntity(data);

        critCtrl.Save(ent);

        //frm.Close();
    }

    function deleteData(data)
    {
        if (!panel.IsValid())
        {
            return;
        }

        let ent = modelToEntity(data);

        critCtrl.Delete(ent);


        frm.Close();
    }



    function modelToEntity(model)
    {
        let edsCrit = {
            Id: model.Id,
            Name: model.Name,
            CriteriaType: Kenviro.CriteriaType.GeneticAlgorithm,
            aisCriterias: []
        };

        model.FuzzyItemCriterias.forEach(
            function (fuzzyItemCriteria, j)
            {
                if (fuzzyItemCriteria.Name == "")
                {
                    model.FuzzyItemCriterias.splice(j, 1);
                    return;
                }

                let existingIndexJ = edsCrit.aisCriterias.findIndex(x => x.Name.trim().toLowerCase() == fuzzyItemCriteria.Name.trim().toLowerCase());
                if (existingIndexJ != -1)
                {
                    model.FuzzyItemCriterias.splice(j, 1);
                    return;
                }

                let edsCritItem = {
                    Id: fuzzyItemCriteria.Id,
                    Name: fuzzyItemCriteria.Name,
                    CriteriaType: Kenviro.CriteriaType.Indication,
                    aisCriterias: []
                };

                let critMin = edsCritItem.aisCriterias.find(x => x.Name.trim().toLowerCase() == "min");
                if (critMin == null)
                {
                    edsCritItem.aisCriterias.push({ Id: fuzzyItemCriteria.MinId, Name: "Min", Weight: fuzzyItemCriteria.Min, CriteriaType: Kenviro.CriteriaType.Indication });
                }
                else
                {
                    critMin.Weight = fuzzyItemCriteria.Min;
                }

                let critMax = edsCritItem.aisCriterias.find(x => x.Name.trim().toLowerCase() == "max");
                if (critMax == null)
                {
                    edsCritItem.aisCriterias.push({ Id: fuzzyItemCriteria.MaxId, Name: "Max", Weight: fuzzyItemCriteria.Max, CriteriaType: Kenviro.CriteriaType.Indication });
                }
                else
                {
                    critMax.Weight = fuzzyItemCriteria.Max;
                }

                edsCrit.aisCriterias.push(edsCritItem);
            }
        );

        return edsCrit;
    }


    function entityToModel(ent)
    {
        let model = {
            Id: ent.Id,
            Name: ent.Name,
            CriteriaType: ent.CriteriaType,
            FuzzyItemCriterias: []
        };

        ent.aisCriterias.forEach(
            function (crit, j)
            {
                let modelItemCriteria = {
                    Id: crit.Id,
                    Name: crit.Name,
                    CriteriaType: crit.CriteriaType,
                    FuzzyItemId: ent.Id
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

                model.FuzzyItemCriterias.push(modelItemCriteria);
            }
        );

        return model;
    }



    return frm;
}