var CriteriaTable = function CriteriaTable(cfg)
{
    let criteriaCtrl = new CriteriaController({ Connector: cfg.Connector });

    const frm = new FrameTable(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: cfg.Label,
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: true,
            AddDefaultOption: false,
            AllowSelectParent: false,
            AllowSort: false,
            Schema: new aisCriteria(),
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
                criteriaCtrl.GetCriterias(null, "",
                    function (results)
                    {
                        onLoaded(results);
                    }
                );
            },
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                let id = item != null && item.Id != null && item.Id != 0 ? item.Id : "";

                if (item.CriteriaType == Kenviro.CriteriaType.FuzzyLogic)
                {
                    const frm = new FuzzyCriteriaForm(
                        {
                            Id: "fuzzylogic",
                            Code: "fuzzylogic/" + id,
                            Connector: cfg.Connector,
                            Theme: cfg.Theme,
                            Desktop: cfg.Desktop,
                            DesktopItemType: DesktopItemType.Modal,
                            User: cfg.User,
                            Data: { CriteriaId: item.Id },
                            CdnUrl: cfg.CdnUrl,
                            WebBaseUrl: cfg.WebBaseUrl,
                            GetServerTime: cfg.GetServerTime
                        }
                    );
                }
                else if (item.CriteriaType == Kenviro.CriteriaType.GeneticAlgorithm)
                {
                    const frm = new GaCriteriaForm(
                        {
                            Id: "geneticalgorithmcriteria",
                            Code: "geneticalgorithmcriteria/" + id,
                            Connector: cfg.Connector,
                            Theme: cfg.Theme,
                            Desktop: cfg.Desktop,
                            User: cfg.User,
                            Data: item,
                            CdnUrl: cfg.CdnUrl,
                            WebBaseUrl: cfg.WebBaseUrl,
                            GetServerTime: cfg.GetServerTime
                        }
                    );
                }
                else
                {
                    let frmItem = new DataForm(
                        {
                            Id: cfg.Id.concat("criteria_", id),
                            Code: cfg.Code.concat("criteria/", id).replace(/\s/g, ""),
                            Label: "Criteria ".concat(item.Name != null ? item.Name : '', ' ', id),
                            Theme: cfg.Theme,
                            StatusType: StatusType.Edit,
                            ShowLabel: cfg.ShowLabel,
                            AddDefaultOption: true,
                            AllowSelectParent: true,
                            EnableAssociation: true,
                            Schema: new aisCriteria(),
                            PageSize: DEFAULT_PAGE_SIZE,
                            FrameType: FrameType.Bordered,
                            ReferenceType: ReferenceType.Struct,
                            Connector: cfg.Connector,
                            Desktop: cfg.Desktop,
                            DesktopItemType: DesktopItemType.Modal,
                            Data: item,
                            User: cfg.User,
                            FormColumns: 2,
                            QueryMode: QueryMode.Struct,
                            GetServerTime: cfg.GetServerTime,
                            QueryFunction: null
                        }
                    );
                }

            }

        }
    );

    frm.Load();

    window.scrollTo(0, 0);

    return frm;
};