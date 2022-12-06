var CriteriaTreeview = function CriteriaTreeview(cfg)
{
    let ctrlCriteria = new CriteriaController({ Connector: cfg.Connector });

    let panel = {};

    const CriteriaDataType = {
        Subject: 'Subject',
        Matter: 'Matter',
        Criteria: 'Criteria'
    };

    let _listParentContents;
    let _linearList;

    let treeView;
    let treeViewId = cfg.Id + "_CriteriaTreeview_Treeview";
    let divTreeView;

    let divSearchInputContent;

    construct();

    function construct()
    {
        //panel = document.createElement("div");
        panel = new Panel({ Id: cfg.Id });
        //if (cfg.Desktop.GetTypeName() === DesktopType.WebUrl && cfg.DesktopItemType === DesktopItemType.Desktop)
        //{
        //    let btnBack = Inputs.CreateBackButton(cfg.Id.concat("_btnBack"), cfg.Theme.ButtonClass);
        //    panel.appendChild(btnBack);

        //    let btnLink = Inputs.CreateLinkButton(cfg.Id.concat("_btnLink"), cfg.Theme.ButtonClass);
        //    panel.appendChild(btnLink);
        //}

        let btnCriteriaTable = Inputs.CreateButton({
            Id: cfg.Id.concat("btnCriteriaTable"), Name: " Criterias List", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
            Icon: "fas fa-book-open", Label: "",
            OnClick: function (e)
            {
                const frm = new CriteriaTable(
                    {
                        Id: "criterias",
                        Code: "criterias",
                        Label: "Criterias ",
                        Theme: cfg.Theme,
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        GetServerTime: cfg.GetServerTime
                    }
                );
            }
        });
        panel.appendChild(btnCriteriaTable);

        divSearchInputContent = new SearchBox(cfg.Id.concat("_searchbox"), "", cfg.Theme.ButtonClass,
            function (keywords)//onsearch
            {
                searchData(keywords);
            },
            function (e) // onclear
            {
                searchData("");
            },
            function (text)//onrefresh
            {
                refresh();
            }
        );
        panel.appendChild(divSearchInputContent);

        let btnCreateGeneticAlgorithmCriteria = Inputs.CreateButton({
            Id: "btnCreateDecisionSupportSystemCriteria", Name: " Create Genetic Algorithm Rules", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
            Icon: "fas fa-plus", Label: "Create Genetic Algorithm Rules",
            OnClick: function (e)
            {
                const frm = new GaCriteriaForm(
                    {
                        Id: "geneticalgorithmgenerator",
                        Code: "geneticalgorithmgenerator",
                        Connector: cfg.Connector,
                        Theme: cfg.Theme,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        Data: null,
                        CdnUrl: cfg.CdnUrl,
                        WebBaseUrl: cfg.WebBaseUrl,
                        GetServerTime: cfg.GetServerTime
                    }
                );
            }
        });
        btnCreateGeneticAlgorithmCriteria.style.width = "302px";
        panel.appendChild(btnCreateGeneticAlgorithmCriteria);

        let btnCreateFuzzyCriteria = Inputs.CreateButton({
            Id: "btnCreateFuzzyCriteria", Name: " Create Fuzzy Logic Membership", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
            Icon: "fas fa-plus", Label: "Create Fuzzy Logic Membership",
            OnClick: function (e)
            {
                const frm = new FuzzyCriteriaForm(
                    {
                        Id: "FuzzyCriteriaForm",
                        Code: "FuzzyCriteriaForm",
                        Connector: cfg.Connector,
                        Theme: cfg.Theme,
                        Desktop: cfg.Desktop,
                        DesktopItemType: DesktopItemType.Modal,
                        User: cfg.User,
                        Data: null,
                        CdnUrl: cfg.CdnUrl,
                        WebBaseUrl: cfg.WebBaseUrl,
                        GetServerTime: cfg.GetServerTime
                    }
                );
            }
        });
        btnCreateFuzzyCriteria.style.width = "302px";
        panel.appendChild(btnCreateFuzzyCriteria);

        let btnCreateCriteria = Inputs.CreateButton({
            Id: "btnCreateCriteria", Name: " Create Criteria", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
            Icon: "fas fa-plus", Label: "Create Criteria",
            OnClick: function (e)
            {
                let schema = new aisCriteria();
                let criteriaCol = schema.Columns.find(x => x.Name == "aisCriteriaId");
                addForm('kenviroknowledgebasecriteria', 'Create Criteria', schema);
            }
        });
        btnCreateCriteria.style.width = "302px";
        panel.appendChild(btnCreateCriteria);

        panel.appendChild(document.createElement("br"));
        panel.appendChild(document.createElement("br"));

        divTreeView = document.createElement("div");
        divTreeView.setAttribute("id", treeViewId);
        panel.appendChild(divTreeView);

        refresh();

        window.scrollTo(0, 0);
    }

    function refresh()
    {
        getData(function (list)
        {
            tree = createTree(divTreeView, 'transparent', [],
                function (node)
                {
                    onNodeSelected(node);
                }
            );
            createTreeview(tree, null, list);
            tree.drawTree();
            tree.expandTree();
        });
    }

    function getData(onload)
    {
        ctrlCriteria.GetCriteriasAll(function (list)
        {
            _linearList = list;
            _listParentContents = Utils.SortListRecursive(list, "aisCriteriaId", "Id", "aisCriterias", null);
            if (onload != null)
            {
                onload(_listParentContents);
            }
        });
    }

    function searchData(keywords)
    {
        let list = Utils.CloneList(_linearList);
        let filters = [];
        if (keywords == "")
        {
            filters = Utils.SortListRecursive(list, "aisCriteriaId", "Id", "aisCriterias", null);
        }
        else
        {
            filters = list.filter(x => x.Name.trim().toLowerCase().includes(keywords.toLowerCase()));
        }
        
        tree.clearTree();
        tree = createTree(divTreeView, 'white', [], function (node)
        {
            onNodeSelected(node);
        });
        createTreeview(tree, null, filters);
        tree.drawTree();
        tree.expandTree();
    }

    function createTreeview(tree, nodeParent, list)
    {
        if (list == null)
        {
            return;
        }

        list.forEach(function (item, i)
        {
            let node;

            let icon = item.Icon;
            if (icon == null || icon == "")
            {
                icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'ic_menu_black_36dp.png';
            }

            let label = item.Name;

            if (nodeParent == null)
            {
                node = tree.createNode(label, false, icon, null, null, null, item);
            }
            else
            {
                node = nodeParent.createChildNode(label, false, icon, null, null, item);
            }

            if (item["aisCriterias"] != null && node != null)
            {
                createTreeview(tree, node, item["aisCriterias"]);
            }
        });

    }

    function onNodeSelected(node)
    {
        let item = node.data;
        let schema = new aisCriteria();

        let frmItem = new DataForm(
            {
                Id: cfg.Id.concat(schema.Label, "_", item.Id),
                Code: cfg.Code.concat(schema.Label, "_", item.Id).replace(/\s/g, ""),
                Label: schema.Label.concat(schema.Label, ' ', item.Id == 0 ? '' : item.Id),
                Theme: cfg.Theme,
                StatusType: StatusType.Edit,
                ShowLabel: cfg.ShowLabel,
                AddDefaultOption: true,
                AllowSelectParent: true,
                EnableAssociation: true,
                Schema: schema,
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
                GetServerTime: cfg.GetServerTime
            }
        );
    }

    function addForm(code, label, schema)
    {
        let frmItem = new DataForm(
            {
                Id: cfg.Id.concat(code),
                Code: cfg.Code.concat(code).replace(/\s/g, ""),
                Label: label,
                Theme: cfg.Theme,
                StatusType: StatusType.Edit,
                ShowLabel: cfg.ShowLabel,
                AddDefaultOption: true,
                AllowSelectParent: true,
                EnableAssociation: true,
                Schema: schema,
                PageSize: DEFAULT_PAGE_SIZE,
                FrameType: FrameType.Bordered,
                DesktopItemType: DesktopItemType.Modal,
                ReferenceType: ReferenceType.Struct,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                Data: null,
                User: cfg.User,
                FormColumns: 2,
                QueryMode: QueryMode.Struct,
                GetServerTime: cfg.GetServerTime,
                QueryFunction: null
            }
        );
    }

    return panel;
};