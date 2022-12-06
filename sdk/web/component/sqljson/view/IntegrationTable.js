var IntegrationTable = function IntegrationTable(cfg)
{
    let frm;

    init();

    function init()
    {
        frm = new DataTable(
            {
                Id: cfg.Id,
                Code: cfg.Code,
                Label: "Integrations",
                Theme: cfg.Theme,
                StatusType: StatusType.View,
                ShowLabel: false,
                AddDefaultOption: true,
                AllowSelectParent: false,
                AllowSort: true,
                Schema: new genIntegration(),
                PageSize: DEFAULT_PAGE_SIZE,
                FrameType: FrameType.Bordered,
                ReferenceType: ReferenceType.Flat,
                Connector: cfg.Connector,
                EnableSearch: true,
                Desktop: cfg.Desktop,
                User: cfg.User,
                WebsiteSetting: cfg.WebsiteSetting,

                //Routes: cfg.Routes,
                WebBaseUrl: cfg.WebBaseUrl,
                CdnUrl: cfg.CdnUrl,
                GetServerTime: cfg.GetServerTime,
                QueryMode: QueryMode.Json,
                QueryFunction: null,

                OnItemRowClick: function (e, tr, td, item, schitem)
                {
                    let id = item != null && item.Id != null && item.Id != 0 ? item.Id : "";

                    let dataform = new IntegrationForm({
                        Id: cfg.Id + "/" + id,
                        Code: cfg.Code + "/" + id,
                        Connector: cfg.Connector,
                        Theme: cfg.Theme,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        Data: item,
                        GetServerTime: cfg.GetServerTime,
                        WebsiteSetting: cfg.WebsiteSetting
                    });

                },
                DefaultSort: "Name ASC",
            }
        );

    }

    return frm;
};