var KenviroMenu = function KenviroMenu(cfg)
{
    const adminCtrl = new AdminController({ Connector: cfg.Connector });

    const _list = [
        { Name: "aisCriteria", SchemaName: "aisCriteria", Label: "Criterias", Detail: "", Icon: "fas fa-project-diagram" },
        { Name: "aisDss", SchemaName: "aisDss", Label: "Decision Support Systems", Detail: "", Icon: "fas fa-chart-pie" },
        { Name: "aisDssItem", SchemaName: "aisDssItem", Label: "DSS Items", Detail: "", Icon: "fas fa-chart-pie" },
        { Name: "aisEs", SchemaName: "aisEs", Label: "Expert Systems", Detail: "", Icon: "fas fa-diagnoses" },
        { Name: "aisEsLog", SchemaName: "aisEsLog", Label: "ES Logs", Detail: "", Icon: "fas fa-history" },
        { Name: "aisMl", SchemaName: "aisMl", Label: "Machine Learning", Detail: "", Icon: "fas fa-drafting-compass" },
        { Name: "aisMlDataset", SchemaName: "aisMlDataset", Label: "ML Datasets", Detail: "", Icon: "fas fa-table" },
        { Name: "aisMlLog", SchemaName: "aisMlLog", Label: "ML Logs", Detail: "", Icon: "fas fa-history" },
        { Name: "aisTm", SchemaName: "aisTm", Label: "TM Subjects", Detail: "", Icon: "fas fa-magic" },
        { Name: "aisTmTopic", SchemaName: "aisTmTopic", Label: "TM Topics", Detail: "", Icon: "fas fa-book-open" },
        { Name: "aisTmDocument", SchemaName: "aisTmDocument", Label: "TM Documents", Detail: "", Icon: "fas fa-book" },
        { Name: "aisTmSentence", SchemaName: "aisTmSentence", Label: "TM Sentences", Detail: "", Icon: "fas fa-book-reader" },
        { Name: "aisTmTopicSentence", SchemaName: "aisTmTopicSentence", Label: "TM Topic Sentences", Detail: "", Icon: "fas fa-bookmark" },
        { Name: "aisTmTopicDocument", SchemaName: "aisTmTopicDocument", Label: "TM Topic Documents", Detail: "", Icon: "fas fa-table" },
        { Name: "aisTmPattern", SchemaName: "aisTmPattern", Label: "TM Pattern", Detail: "", Icon: "fas fa-file-alt" },
        { Name: "aisTmFilter", SchemaName: "aisTmFilter", Label: "TM Filter", Detail: "", Icon: "fas fa-filter" }
    ];

    const frm = new DeskMenu({
        Id: cfg.Id,
        Code: cfg.Code,
        Label: cfg.Label,
        SchemaSuffix: cfg.SchemaSuffix,
        Connector: cfg.Connector,
        Theme: cfg.Theme,
        Desktop: cfg.Desktop,
        User: cfg.User,
        CdnUrl: cfg.CdnUrl,
        ShowLabel: cfg.ShowLabel,
        Authenticator: cfg.Authenticator,
        GetServerTime: cfg.GetServerTime,
        OnItemRowClick: function (e, tr, td, item, schitem)
        {
            onItemRowClick(tr.id, item.Name);
        },
        Data: _list
    });
    if (cfg.Desktop != null)
    {
        let tabform = cfg.Desktop.Add("", cfg.Code, frm);
    }

    initButtons(frm);


    function initButtons(pnl)
    {
        pnl.Footer.setAttribute("class", "container");

        let divRows = document.createElement("div");
        divRows.setAttribute("class", "row justify-content-center");
        pnl.Footer.appendChild(document.createElement("hr"));
        pnl.Footer.appendChild(divRows);

        let divButtons = document.createElement("div");
        divRows.appendChild(divButtons);

        divButtons.setAttribute("class", "col-auto");
        divButtons.setAttribute("style", "padding: 2px;");

        //if (cfg.Desktop.GetTypeName() === DesktopType.WebUrl)
        //{
        //    let btnBack = Inputs.CreateBackButton(cfg.Id.concat("_btnBack"), cfg.Theme.ButtonClass);
        //    frm.Header.appendChild(btnBack);

        //    let btnLink = Inputs.CreateLinkButton(cfg.Id.concat("_btnLink"), cfg.Theme.ButtonClass);
        //    frm.Header.appendChild(btnLink);
        //}

        const btnClearCache = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnClearCache"), Name: " Clear Cache", ButtonType: ButtonType.Button, Class: "btn btn-info", TabIndex: 0,
            Icon: "fas fa-broom", Label: "Clear Cache",
            OnClick: function (e)
            {
                clearCache(adminCtrl);
            }
        });
        btnClearCache.setAttribute("style", "min-width: 135px");
        divButtons.appendChild(btnClearCache);

        pnl.Footer.appendChild(document.createElement("hr"));
        let lblNote = document.createElement("label");
        lblNote.innerHTML = "Please Clear Cache If you Modified: Settings";
        pnl.Footer.appendChild(lblNote);
    }

    function onItemRowClick(elementId, name)
    {
        let menu = _list.find(x => x.Name == name);
        let schema = new window[name];
        let frm = new DataTableForm(
            {
                Id: cfg.Id.concat("_", name),
                Code: menu.Label.replace(/\s/g, ""),
                Label: schema.Label,
                Theme: cfg.Theme,
                Schema: schema,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                ShowLabel: true,
                GetServerTime: cfg.GetServerTime
            }
        );
    }

    function clearCache(ctrl)
    {
        ctrl.ClearCache(function (box)
        {
            MsgBox.Show("Cache Cleared");
        });
    }

    return frm;
};