var DataTableForm = function DataTableForm(cfg)
{
    let frm = new DataTable(
        {
            Id: cfg.Id,
            Code: cfg.Code.replace(/\s/g, ""),
            Label: cfg.Label,
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: cfg.ShowLabel,
            AddDefaultOption: true,
            AllowSelectParent: true,
            AllowSort: true,
            Schema: cfg.Schema,
            PageSize: DEFAULT_PAGE_SIZE,
            FrameType: FrameType.Bordered,
            ReferenceType: ReferenceType.Flat,
            Connector: cfg.Connector,
            EnableSearch: true,
            Desktop: cfg.Desktop,
            DesktopItemType: cfg.DesktopItemType,
            User: cfg.User,
            DefaultSort: null,
            QueryMode: QueryMode.Struct,
            QueryFunction: null,
            GetServerTime: cfg.GetServerTime,
            WebsiteSetting: cfg.WebsiteSetting,
            Routes: cfg.Routes,
            WebBaseUrl: cfg.WebBaseUrl,
            NotificationListener: cfg.NotificationListener,
            CdnUrl: cfg.CdnUrl,
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                if (item == null)
                {
                    item = {};
                }
                //if (item.Id == null)
                //{
                //    item.Id = 0;
                //}

                let id = item != null && item.Id != null && item.Id != 0 ? item.Id : "";

                cfg.Schema.Columns.forEach(function (x, index)
                {
                    if (x.StatusType == StatusType.Hidden && Object.keys(DefaultColumnType).find(y=>y == x.Name) == null &&
                        ( x.InputType == InputType.TextArea
                        || x.InputType == InputType.CheckBox
                        || x.InputType == InputType.Radio
                        || x.InputType == InputType.DateTime
                        || x.InputType == InputType.File
                        || x.InputType == InputType.Password
                        || x.InputType == InputType.WebEditor
                        || x.InputType == InputType.HtmlEditor
                        || x.InputType == InputType.SqlEditor
                        || (x.InputType == InputType.Select && (x.Options != null || x.Options.length > 0))
                        )
                    )
                    {
                        x.StatusType = StatusType.Edit;
                    }
                });

                let frmItem = new DataForm(
                    {
                        Id: cfg.Id.concat("_", item.Id),
                        //Code: cfg.Code.concat("_", item.Id).replace(/\s/g, ""),
                        Code: cfg.Code.concat("/", id).replace(/\s/g, ""),
                        Label: cfg.Label.concat(' ', id),
                        Theme: cfg.Theme,
                        StatusType: StatusType.Edit,
                        ShowLabel: cfg.ShowLabel,
                        AddDefaultOption: true,
                        AllowSelectParent: true,
                        EnableAssociation: true,
                        Schema: cfg.Schema,
                        PageSize: DEFAULT_PAGE_SIZE,
                        FrameType: FrameType.Bordered,
                        ReferenceType: ReferenceType.Struct,
                        Connector: cfg.Connector,
                        Desktop: cfg.Desktop,
                        DesktopItemType: cfg.DesktopItemType,
                        Data: item,
                        User: cfg.User,
                        FormColumns: 1,
                        QueryMode: QueryMode.Struct,
                        GetServerTime: cfg.GetServerTime,
                        QueryFunction: null,
                        //OnDataLoad: null
                    }
                );
            }
        }
    );
    return frm;
};