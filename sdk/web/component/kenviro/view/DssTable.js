var DssTable = function DssTable(cfg)
{
    let frm = new DataTable(
        {
            Id: cfg.Id,
            Code: cfg.Code.replace(/\s/g, ""),
            Label: cfg.Label,
            Theme: cfg.Theme,
            ShowLabel: cfg.ShowLabel,
            Schema: new aisDss(),
            Connector: cfg.Connector,
            Desktop: cfg.Desktop,
            User: cfg.User,
            GetServerTime: cfg.GetServerTime,
            WebBaseUrl: cfg.WebBaseUrl,
            CdnUrl: cfg.CdnUrl,
            StatusType: StatusType.View,
            AddDefaultOption: true,
            AllowSelectParent: true,
            AllowSort: true,
            PageSize: DEFAULT_PAGE_SIZE,
            FrameType: FrameType.Bordered,
            ReferenceType: ReferenceType.Flat,
            EnableSearch: true,
            DefaultSort: null,
            QueryMode: QueryMode.Struct,
            QueryFunction: null,
            NotificationListener: cfg.NotificationListener,
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                let id = item != null && item.Id != null && item.Id != 0 ? item.Id : "";
                const frmItem = new DssForm(
                    {
                        Id: "decisionsupportsystems_" + id,
                        Code: "decisionsupportsystems_" + id,
                        Connector: cfg.Connector,
                        Theme: cfg.Theme,
                        Desktop: cfg.Desktop,
                        DesktopItemType: DesktopItemType.Desktop,
                        User: cfg.User,
                        CdnUrl: cfg.CdnUrl,
                        WebBaseUrl: cfg.WebBaseUrl,
                        Data: item,
                        GetServerTime: cfg.GetServerTime
                    }
                );
                let tabform = cfg.Desktop.Add(id, "decisionsupportsystems_" + id, frmItem);
                frmItem.SetDesktopTab(tabform);
            }
        }
    );

    return frm;
};