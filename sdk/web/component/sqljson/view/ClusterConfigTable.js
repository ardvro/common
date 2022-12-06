var ClusterConfigTable = function ClusterConfigTable(cfg)
{
    let frm = {};
    //let btnAdd;
    let btnRefresh;
    let btnMessage;
    let _adminCtrl = new AdminController({ Connector: cfg.Connector });

    construct();

    function construct()
    {
        frm = new PanelTable(
            {
                Id: "ClusterConfigTable",
                Label: "ClusterConfigTable",
                Theme: cfg.Theme,
                StatusType: StatusType.View,
                ShowLabel: false,
                AddDefaultOption: false,
                AllowSelectParent: true,
                AllowSort: true,
                PageSize: 10,
                FrameType: FrameType.Bordered,
                ReferenceType: ReferenceType.Struct,
                Connector: cfg.Connector,
                EnableSearch: true,
                Schema: new KeyValue(),
                OnItemRowClick: function (e, tr, td, item, schitem)
                {
                    let frm = new ClusterConfigForm({
                        Id: item.Key, Label: item.Key, ParentHtmlId: "modal", Theme: cfg.Theme, 
                        Connector: cfg.Connector, Data: item, Desktop: cfg.Desktop
                    });
                },
                OnPageIndexChange: function (e, table, newPageIndex, pageSize)
                {
                    getData(table);
                },
                OnSort: function (table, schemaItem, sort)
                {
                    getData(table);
                },
                OnSearch: function (e, el, table, filters, currentSorted, ActivePageIndex, PageSize)
                {
                    getData(table);
                }

            }
        );

        initButtons();

        getData(frm);

        let tabform = cfg.Desktop.Add(null, cfg.Code, frm);
    }

    function initButtons()
    {
        let tabIndex = 3;

        tabIndex++;

        btnMessage = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnMessage"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabIndex,
            Icon: "fas fa-info", Label: "Message",
            OnClick: function (e)
            {

            }
        });
        frm.Header.appendChild(btnMessage);

        tabIndex++;

        //btnAdd = Inputs.CreateButton({
        //    Id: cfg.Id.concat("_btnAdd"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabIndex,
        //    Icon: "fas fa-plus", Label: "Add",
        //    OnClick: function (e)
        //    {
        //        let frm = new ApiGatewayForm({
        //            Id: "newApiGateway", Label: "", ParentHtmlId: "modal", Theme: cfg.Theme,
        //            Connector: cfg.Connector, Data: null, Desktop: cfg.Desktop
        //        });
        //    }
        //});
        //frm.Header.appendChild(btnAdd);

        //tabIndex++;


        btnRefresh = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnRefresh"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabIndex,
            Icon: "fas fa-sync-alt", Label: "Refresh",
            OnClick: function (e)
            {
                getData(frm);
            }
        });
        frm.Header.appendChild(btnRefresh);

        tabIndex++;
    }

    function getData(grid)
    {
        btnRefresh.setAttribute("hidden", "hidden");

        let btnMessage3 = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnMessage"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
            Icon: "fas fa-spinner",
            OnClick: function (e)
            {

            }
        });
        btnMessage.replaceWith(btnMessage3);
        btnMessage = btnMessage3;

        _adminCtrl.GetClusterConfigs(function (data)
        {
            if (data == null)
            {
                MsgBox.Show("Request Failed");
                return;
            }

            let datalist = {
                List: data,
                Count: data.length,
                PagaSize: data.length
            };

            grid.LoadData(datalist);

            let btnMessage2 = Inputs.CreateButton({
                Id: cfg.Id.concat("_btnMessage"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
                Icon: "fas fa-info",
                OnClick: function (e)
                {

                }
            });
            btnMessage.replaceWith(btnMessage2);
            btnMessage = btnMessage2;
            btnRefresh.removeAttribute("hidden");
        });
    }

    return frm;
};