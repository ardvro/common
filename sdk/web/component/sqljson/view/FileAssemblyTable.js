var FileAssemblyTable = function FileAssemblyTable(cfg)
{
    const frm = new DataTable(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: "Assemblies",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: cfg.ShowLabel,
            AddDefaultOption: true,
            AllowSelectParent: false,
            AllowSort: true,
            Schema: new genFile(),
            PageSize: DEFAULT_PAGE_SIZE,
            FrameType: FrameType.Bordered,
            ReferenceType: ReferenceType.Flat,
            Connector: cfg.Connector,
            EnableSearch: true,
            Desktop: cfg.Desktop,
            User: cfg.User,
            DefaultSort: "ItemType, Updated DESC",
            WebsiteSetting: cfg.WebsiteSetting,
            GetServerTime: cfg.GetServerTime,

            Routes: cfg.Routes,
            WebBaseUrl: cfg.WebBaseUrl,
            NotificationListener: cfg.NotificationListener,
            CdnUrl: cfg.CdnUrl,
            GetServerTime: cfg.GetServerTime,
            QueryMode: QueryMode.Json,
            QueryFunction: function (ctrl, table, grid)
            {
                return ctrl.Query("genFile", null, { Where : "ItemType = 'Assembly'", Parameter: null }, null, "ItemType, Updated DESC", grid.GetPageSize(), grid.GetPageIndex()).PagingJsons("*");
            },
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                if (item == null || item.Id == null)
                {
                    showDataForm(item);
                }
                else
                {
                    showOptions(cfg.Id.concat(item.Id), item);
                }
            },
        }
    );

    function showOptions(id, item)
    {
        let div = new PanelModal(
            {
                Id: cfg.Id.concat("_panelmodal"),
                Label: item.Name,
                Theme: cfg.Theme
            }
        );
        let btnDownload = Inputs.CreateButton({
            Id: id.concat("btnDownload"), Name: " Download", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass,
            Icon: "fas fa-download", Label: "Download",
            OnClick: function (e)
            {
                downloadFile(item);
                div.Close();
            }
        });
        div.AddButton(btnDownload);

        let btnLink = Inputs.CreateButton({
            Id: id.concat("btnLink"), Name: " Link", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass,
            Icon: "fas fa-link", Label: "Link",
            OnClick: function (e)
            {
                showLink(item);
                div.Close();
            }
        });
        div.AddButton(btnLink);

        let btnEdit = Inputs.CreateButton({
            Id: id.concat("btnEdit"), Name: " Edit", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass,
            Icon: "fas fa-edit", Label: "Edit",
            OnClick: function (e)
            {
                showDataForm(item);
                div.Close();
            }
        });
        div.AddButton(btnEdit);
    }

    function downloadFile(item)
    {
        if (item.Url != null && item.Url != "")
        {
            let url = item.Url.concat("&rand=", Utils.Guid());
            Ajax.Post(url, [item.Id], cfg.User.Token, function (response)
            {
                if (response != null)
                {
                    Utils.DownloadFromBase64(response, item.Name + item.FileType);
                }
            });
        }
        else
        {
            let url = "https://".concat(WEBSOCKETURL, "/ardvro/component/sqljson/file/", item.Id, "/?rand=", Utils.Guid());

            Ajax.Get(url, cfg.User.Token, function (response)
            {
                if (response != null)
                {
                    Utils.DownloadFromBase64(response, item.Name);
                }
            });
        }
    }

    function showDataForm(item)
    {
        if (item != null && item.ItemType == FileItemType.Assembly)
        {
            let frmItem = new FileAssemblyForm(
                {
                    Id: cfg.Id.concat("_dataform"),
                    Code: item.Id == null ? "Assembly_File" : cfg.Code.concat("/", item.Id),
                    Label: cfg.Label,
                    Theme: cfg.Theme,
                    StatusType: StatusType.Edit,
                    ShowLabel: true,
                    AddDefaultOption: true,
                    AllowSelectParent: true,
                    EnableAssociation: true,
                    FrameType: FrameType.Bordered,
                    ReferenceType: ReferenceType.Struct,
                    Connector: cfg.Connector,
                    Desktop: cfg.Desktop,
                    Data: item,
                    User: cfg.User,
                    FormColumns: 2,
                    QueryMode: QueryMode.Struct,
                    GetServerTime: cfg.GetServerTime,
                }
            );
        }
        else
        {
            let frmItem = new FileForm(
                {
                    Id: cfg.Id.concat("_dataform"),
                    Code: item.Id == null ? "file" : cfg.Code.concat("/", item.Id),
                    Label: cfg.Label,
                    Theme: cfg.Theme,
                    StatusType: StatusType.Edit,
                    ShowLabel: true,
                    AddDefaultOption: true,
                    AllowSelectParent: true,
                    EnableAssociation: true,
                    FrameType: FrameType.Bordered,
                    ReferenceType: ReferenceType.Struct,
                    Connector: cfg.Connector,
                    Desktop: cfg.Desktop,
                    Data: item,
                    User: cfg.User,
                    FormColumns: 2,
                    QueryMode: QueryMode.Struct,
                    GetServerTime: cfg.GetServerTime,
                }
            );
        }
    }

    function showLink(item)
    {
        if (item.Url != null && item.Url != "")
        {
            Utils.CopyStringToClipboard(item.Url);
            MsgBox.Show(item.Url);
        }
        else
        {
            let url = "https://".concat(WEBSOCKETURL, "/webapi/file/", item.Id, "/?rand=", Utils.Guid()); 
            Utils.CopyStringToClipboard(url);
            MsgBox.Show(url);
        }
    }

    return frm;
};