var EsTable = function EsTable(cfg)
{
    let frm = new DataTable(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: cfg.Label,
            Theme: cfg.Theme,
            ShowLabel: cfg.ShowLabel,
            Schema: new aisEs(),
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
                    let frmItem = new DataForm(
                        {
                            Id: cfg.Id.concat("_", item.Id),
                            Code: cfg.Code.concat("/", item.Id).replace(/\s/g, ""),
                            Label: cfg.Label.concat(' ', item.Id == 0 ? '' : item.Id),
                            Theme: cfg.Theme,
                            StatusType: StatusType.Edit,
                            ShowLabel: cfg.ShowLabel,
                            AddDefaultOption: true,
                            AllowSelectParent: true,
                            EnableAssociation: false,
                            Schema: new aisEs(),
                            PageSize: DEFAULT_PAGE_SIZE,
                            FrameType: FrameType.Bordered,
                            ReferenceType: ReferenceType.Struct,
                            Connector: cfg.Connector,
                            Desktop: cfg.Desktop,
                            DesktopItemType: DesktopItemType.Desktop,
                            Data: item,
                            User: cfg.User,
                            FormColumns: 2,
                            QueryMode: QueryMode.Struct,
                            GetServerTime: cfg.GetServerTime,
                            QueryFunction: null,
                            OnDataLoad: null
                        }
                    );
                }
                else
                {
                    const frm = new EsGenerator(
                        {
                            Id: "expertsystemgenerator",
                            Code: cfg.Code + "/generator",
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
                    let tabform = cfg.Desktop.Add("", cfg.Code + "/generator", frm);
                    frm.SetDesktopTab(tabform);
                }
            }
        }
    );


    let btnRun = Inputs.CreateButton({
        Id: cfg.Id.concat("btnRun"), Name: " Run", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
        Icon: "fas fa-rocket", Label: "",
        OnClick: function (e)
        {
            const frm = new EsForm(
                {
                    Id: cfg.Id.concat("_expertsystem"),
                    Code: "expertsystem",
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

            let tabform = cfg.Desktop.Add("", "expertsystem", frm);
            frm.SetDesktopTab(tabform);
        }
    });

    let btnChatbot = Inputs.CreateButton({
        Id: cfg.Id.concat("btnchatbot"), Name: " Chatbot", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
        Icon: "fas fa-robot", Label: "",
        OnClick: function (e)
        {
            Kenviro.ShowChatbotWidgetScript(cfg.WebBaseUrl, cfg.WebSocketUrl, cfg.CdnUrl, cfg.Theme.ButtonClass);
        }
    });

    if (cfg.Desktop.GetTypeName() == DesktopType.WebUrl)
    {
        frm.Header.appendChild(btnRun);
        frm.Header.appendChild(btnChatbot);
    }
    else
    {
        frm.Body.insertBefore(btnRun, frm.Body.firstChild);
        frm.Body.insertBefore(btnChatbot, frm.Body.firstChild);
    }

    return frm;
};