var TmTable = function TmTable(cfg)
{
    let frm = new DataTable(
        {
            Id: cfg.Id,
            Code: cfg.Code.replace(/\s/g, ""),
            Label: cfg.Label,
            Theme: cfg.Theme,
            ShowLabel: cfg.ShowLabel,
            Schema: new aisTm(),
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
            QueryMode: QueryMode.Json,
            QueryFunction: null,
            NotificationListener: cfg.NotificationListener,
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                if (item != null && item.Id != null)
                {
                    let frmItem = new TmForm(
                        {
                            Id: "textminingform_" + item.Id,
                            Code: "textmining/" + item.Id,
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
                    let tabform = cfg.Desktop.Add(item.Id, "textmining/" + item.Id, frmItem);
                    frmItem.SetDesktopTab(tabform);
                }
                else
                {
                    if (cfg.User == null)
                    {
                        MsgBox.Show("Please login");
                        return;
                    }
                    else if (!cfg.User.IsInRoles([RoleType.ROOT, RoleType.ADMINISTRATOR, RoleType.DIRECTOR, RoleType.MANAGER, RoleType.SUPERVISOR]))
                    {
                        MsgBox.Show("Unauhthorized access");
                        return;
                    }

                    let frm = new TmGenerator(
                        {
                            Id: "textmininggenerator",
                            Code: "textmininggenerator",
                            Connector: cfg.Connector,
                            Theme: cfg.Theme,
                            Desktop: cfg.Desktop,
                            DesktopItemType: DesktopItemType.Desktop,
                            User: cfg.User,
                            CdnUrl: cfg.CdnUrl,
                            WebBaseUrl: cfg.WebBaseUrl,
                            GetServerTime: cfg.GetServerTime
                        }
                    );
                    let tabform = cfg.Desktop.Add("", "textmininggenerator", frm);
                    frm.SetDesktopTab(tabform);
                }
            }
        }
    );

    return frm;
};