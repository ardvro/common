var SchemaTreeview = function SchemaTreeview(cfg)
{
    const COLUMN = "Column";
    const COLUMNS = "Columns";
    const TABLE = "TABLE";

    let _sqlCtrl = new SqlController({ Connector: cfg.Connector });

    let panel = {};

    let _listParentContents;
    let _linearList;

    let treeView;
    let treeViewId = cfg.Id + "_SchemaTreeview_Treeview";
    let divTreeView;

    let divSearchInputContent;
    let txtSearch;
    let btnSearch;
    let btnClear;
    let btnRefresh;

    construct();

    function construct()
    {
        //panel = document.createElement("div");
        panel = new Panel({ Id: cfg.Id });
        if (cfg.Desktop.GetTypeName() === DesktopType.WebUrl)
        {
        //    let btnBack = Inputs.CreateButton({
        //        Id: cfg.Id.concat("btnBack"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
        //        Icon: "fas fa-arrow-left", Label: "",
        //        OnClick: function (e)
        //        {
        //            window.history.back();
        //        }
        //    });
        //    panel.appendChild(btnBack);
        }

        initDivSearch();

        panel.appendChild(divSearchInputContent);

        panel.appendChild(document.createElement("br"));

        divTreeView = document.createElement("div");
        divTreeView.setAttribute("id", treeViewId);
        panel.appendChild(divTreeView);

        refresh();

        //window.scrollTo(0, 0);
    }

    function initDivSearch()
    {
        let tabIndex = 1;

        divSearchInputContent = document.createElement("div");
        divSearchInputContent.setAttribute("class", "input-group");
        //divSearchInputContent.setAttribute("style", "padding-top:10px; padding-bottom: 10px;");

        txtSearch = Inputs.CreateInput({ InputType: InputType.Text, Id: "txtSearchContentPanel", Name: "Search", Label: "Search", Required: false, Note: "Search contents, tickets, forums", TabIndex: tabIndex, MinimumValue: 0, MaximumValue: 255 });
        divSearchInputContent.appendChild(txtSearch);

        btnClear = Inputs.CreateButton({
            Id: "btnClearContentPanel", Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabIndex,
            Icon: "fas fa-backspace", Label: "Clear",
            OnClick: function (e)
            {
                txtSearch.value = '';
            }
        });
        divSearchInputContent.appendChild(btnClear);

        btnSearch = Inputs.CreateButton({
            Id: "btnSearchContentPanel", Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabIndex,
            Icon: "fas fa-search", Label: "Search",
            OnClick: function (e)
            {
                searchData();
            }
        });
        divSearchInputContent.appendChild(btnSearch);

        btnRefresh = Inputs.CreateButton({
            Id: "btnRefreshContentPanel", Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabIndex,
            Icon: "fas fa-sync-alt", Label: "Refresh",
            OnClick: function (e)
            {
                txtSearch.value = '';
                refresh();
            }
        });
        divSearchInputContent.appendChild(btnRefresh);
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
            //tree.expandTree();
        });
    }

    function getData(onload)
    {
        _sqlCtrl.GetSchema(function (list)
        {
            _linearList = list;
            _listParentContents = arrangeSchemaColumns(list);
            if (onload != null)
            {
                onload(_listParentContents);
            }
        });
    }

    function arrangeSchemaColumns(list)
    {
        let listparent = list.filter(x => x.ColumnName == null);
        listparent.forEach(
            function (table, i)
            {
                let childs = list.filter(x => x.Name == table.Name && x.ColumnName != null);
                childs.forEach(
                    function (col, j)
                    {
                        col.Name = col.ColumnName;
                        col.ObjectType = COLUMN;
                    }
                );

                table[COLUMNS] = childs;
            }
        );
        return listparent;
    }

    function searchData()
    {
        let list = Utils.CloneList(_linearList);
        let filters = [];
        if (txtSearch.value == "")
        {
            filters = _listParentContents;
        }
        else
        {
            filters = list.filter(x => x.Name.trim().toLowerCase().includes(txtSearch.value.trim().toLowerCase()));
        }
        
        tree.clearTree();
        tree = createTree(divTreeView, 'white', [], function (node)
        {
            onNodeSelected(node);
        });
        createTreeview(tree, null, filters);
        tree.drawTree();
        //tree.expandTree();
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

            let icon = "";

            if (item.ObjectType == TABLE && item.ColumnName == null)
            {
                icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_table_chart_black_36dp.png';
            }
            else if (item.ColumnName == null && (item.ObjectType == "PROCEDURE" || item.ObjectType == "FUNCTION"))
            {
                icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_code_black_36dp.png';
            }
            else if (item.ObjectType == COLUMN && item.ColumnName != null)
            {
                if (item.KeyType != "" && (item.KeyType.includes("PRI")))
                {
                    icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_vpn_key_black_36dp.png';
                }
                else if (item.ConstraintName != null && item.ConstraintName != "")
                {
                    icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_pivot_table_chart_black_36dp.png';
                }
                else if (item.TypeName == "tinyint(1)" || item.TypeName.includes('bool'))
                {
                    icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_check_box_black_36dp.png';
                }
                else if (item.TypeName.includes("int") || item.TypeName.includes("decimal") || item.TypeName.includes("double") || item.TypeName.includes("float") || item.TypeName.includes("number"))
                {
                    icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_pin_black_36dp.png';
                }
                else if (item.TypeName.includes("blob") || item.TypeName.includes("text") || item.TypeName.includes("binary"))
                {
                    icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_perm_media_black_36dp.png';
                }
                else if (item.TypeName.includes("date") || item.TypeName.includes("time"))
                {
                    icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_date_range_black_36dp.png';
                }
                else
                {
                    icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_sort_by_alpha_black_36dp.png';
                }
            }

            if (icon == null || icon == "")
            {
                icon = cfg.CdnUrl + CDN_BASE_PATH_IMG + 'outline_table_chart_black_36dp.png';
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

            if (item[COLUMNS] != null && node != null)
            {
                createTreeview(tree, node, item[COLUMNS]);
            }
        });
    }

    function onNodeSelected(node)
    {
        let item = node.data;

        if (item.ObjectType == COLUMN)
        {
            let colinfo = JSON.stringify(node.data, null, 2);
            MsgBox.Show(colinfo);
            return;
        }
        else if (item.ObjectType != TABLE)
        {
            //cannot display StoreProcedure and Function script here, coz comlicated and for a security reasons, only show the sp and function name with it's parameters
            return;
        }

        let cols = _listParentContents.find(x => x.Name == item.Name).Columns;

        let schema = {
            Name: item.Name,
            Label: item.Name,
            Columns:[]
        };

        cols.forEach(
            function (col, i)
            {
                var schitem = {
                    StatusType: StatusType.Edit,
                    Name: col.Name,
                    Required: col.Required,
                    MinimumValue: null,
                    MaximumValue: null,
                    DecimalPoint: null,
                    DefaultValue: col.DefaultValue,
                    Label: col.ColumnName,
                    Note: col.ColumnName,
                    ReferenceSchema: null,
                    ReferenceColumn: null,
                    ReferenceName: null,
                    Options: null
                };
                if (col.KeyType != "" && (col.KeyType.includes("PRI")))
                {
                    schitem.KeyType = KeyType.Primary;
                }

                if (col.ConstraintName != null && col.ConstraintName != "")
                {
                    schitem.ReferenceSchema = { Name: col.ReferenceTable };
                    schitem.ReferenceColumn = "Id";
                    schitem.ReferenceName = "Name";
                    schitem.InputType = InputType.Lookup;
                }
                else if (col.TypeName == "tinyint(1)" || col.TypeName.includes("bool"))
                {
                    schitem.InputType = InputType.CheckBox;
                }
                else if (col.TypeName.includes("int") || col.TypeName.includes("decimal") || col.TypeName.includes("double") || col.TypeName.includes("float") || col.TypeName.includes("number"))
                {
                    schitem.InputType = InputType.Number;
                }
                //else if (col.TypeName.includes("blob") || col.TypeName.includes("text") || col.TypeName.includes("binary"))
                else if (col.TypeName.includes("blob") || col.TypeName.includes("binary"))
                {
                    schitem.InputType = InputType.File;
                }
                else if (col.TypeName.includes("text"))
                {
                    schitem.InputType = InputType.TextArea;
                }
                else if (col.TypeName.includes("date") || col.TypeName.includes("time"))
                {
                    schitem.InputType = InputType.DateTime;
                }
                else
                {
                    schitem.InputType = InputType.Text;
                }

                schema.Columns.push(schitem);
            }
        );

        let frm = new DataTableForm(
            {
                Id: "schema_" + item.Name,
                Code: "schema_" + item.Name,
                Label: item.Name,
                Theme: cfg.Theme,
                Schema: schema,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                DesktopItemType: DesktopItemType.Modal,
                User: cfg.User,
                ShowLabel: true,
                GetServerTime: cfg.GetServerTime
            }
        );
    }


    return panel;
};