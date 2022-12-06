var TmForm = function TmForm(cfg)
{
    let txmCtrl = new TextMiningController({ Connector: cfg.Connector });

    frm = new FormPanel({ Id: cfg.Id });

    construct();

    function construct()
    {
        //if (cfg.Desktop.GetTypeName() === DesktopType.WebUrl && cfg.DesktopItemType === DesktopItemType.Desktop)
        //{
        //    let btnBack = Inputs.CreateBackButton(cfg.Id.concat("_btnBack"), cfg.Theme.ButtonClass);
        //    frm.Body.appendChild(btnBack);

        //    let btnLink = Inputs.CreateLinkButton(cfg.Id.concat("_btnLink"), cfg.Theme.ButtonClass);
        //    frm.Body.appendChild(btnLink);
        //}

        if (cfg.Data != null && cfg.Data.Id != null)
        {
            //let btnLink = Inputs.CreateLinkButton(cfg.Id.concat("_btnLink"), cfg.Theme.ButtonClass);
            //frm.Body.appendChild(btnLink);

            //let btnNew = Inputs.CreateButton({
            //    Id: cfg.Id.concat("btnNew"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
            //    Icon: "fas fa-file", Label: "",
            //    OnClick: function (e)
            //    {
            //        reset();
            //    }
            //});
            //frm.Header.appendChild(btnNew);

            //let btnRefresh = Inputs.CreateButton({
            //    Id: cfg.Id.concat("btnRefresh"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
            //    Icon: "fas fa-sync", Label: "",
            //    OnClick: function (e)
            //    {
            //        getdata();
            //    }
            //});
            //frm.Header.appendChild(btnRefresh);

            let btnDelete = Inputs.CreateButton({
                Id: cfg.Id.concat("btnDelete"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
                Icon: "fas fa-trash", Label: "",
                OnClick: function (e)
                {
                    deleteData();
                }
            });
            frm.Header.appendChild(btnDelete);

            createPrintButtons();
        }

        let btnRestructure = Inputs.CreateButton({
            Id: cfg.Id.concat("btnRestructure"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
            Icon: "fas fa-stream", Label: "Restructure topics sentences",
            OnClick: function (e)
            {
                let mb = new MsgOkCancel({
                    Label: "Restructure",
                    Text: "This process will restructured and rearange the sentences information for each topics. Click Ok to proceed.",
                    OnOkClick: function ()
                    {
                        restructure();
                    }
                });
            }
        });
        frm.Header.appendChild(btnRestructure);

        frm.Body.appendChild(document.createElement("br"));

        let lblSubject = document.createElement("label");
        lblSubject.setAttribute("style", "font-size:x-large;");
        lblSubject.innerHTML ="<strong>" + cfg.Data.Name +  "</strong>";
        frm.Body.appendChild(lblSubject);

        frm.Body.appendChild(document.createElement("br"));

        let tabHeader = TabPanel.CreateTabHeader();

        let tabTopics = TabPanel.CreateTabHeaderItem("fas fa-users", "#ContentTree", true, "Topics");
        tabHeader.appendChild(tabTopics);

        let tabSummary = TabPanel.CreateTabHeaderItem("fas fa-search", "#ContentSearch", false, "Summary");
        tabHeader.appendChild(tabSummary);

        let tabDocuments = TabPanel.CreateTabHeaderItem("fas fa-comment", "#Messages", false, "Documents");
        tabHeader.appendChild(tabDocuments);


        let tabContent = TabPanel.CreateTabContent();

        let tabTopicsContent = TabPanel.CreateTabContentItem("ContentTree", true);
        tabContent.appendChild(tabTopicsContent);

        let tabSummaryContent = TabPanel.CreateTabContentItem("ContentSearch", false);
        tabContent.appendChild(tabSummaryContent);

        let tabDocumentsContent = TabPanel.CreateTabContentItem("Messages", false);
        tabContent.appendChild(tabDocumentsContent);

        frm.Body.appendChild(tabHeader);
        frm.Body.appendChild(tabContent);

        MsgLoading.LockPanel(frm.Body, "Loading ...");
        txmCtrl.Find(cfg.Data.Id,
            function (result)
            {
                if (result == null)
                {
                    return;
                }

                let lbl = document.createElement("label");
                lbl.innerHTML = result.Summary.split(' ').length + " Words";
                tabSummaryContent.appendChild(lbl);

                let summaryPanel = new Panel({ Id: cfg.Id.concat("tabcontent_summary") });
                summaryPanel.Body.innerHTML = result.Summary;
                tabSummaryContent.appendChild(summaryPanel);
            }
        );

        txmCtrl.GetTopics(cfg.Data.Id,
            function (results)
            {
                MsgLoading.UnlockPanel(frm.Body);

                if (results == null)
                {
                    return;
                }

                let lbl = document.createElement("label");
                lbl.innerHTML = results.length + " Topics";
                tabTopicsContent.appendChild(lbl);

                let pnl = createPanelTableTopics(cfg.Data, results);
                tabTopicsContent.appendChild(pnl);
            }
        );

        txmCtrl.GetDocuments(cfg.Data.Id,
            function (results)
            {
                if (results == null)
                {
                    return;
                }

                let lbl = document.createElement("label");

                let wordcount = 0;
                for (let i = 0; i < results.length; i++)
                {
                    let words = results[i].TextContent.split(' ');
                    wordcount += words.length;
                }

                lbl.innerHTML = results.length + " Documents, Total " + wordcount + " Words";
                tabDocumentsContent.appendChild(lbl);

                let pnl = createPanelTableDocuments(cfg.Data, results);
                tabDocumentsContent.appendChild(pnl);
            }
        );
    }

    function createPanelTableTopics(ent, list)
    {
        let pnlTable = new PanelTable({
            Id: "topics_" + ent.Id,
            Label: "Topics",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: false,
            AllowSort: false,
            Schema:
            {
                Columns:
                    [
                        {
                            StatusType: StatusType.Edit,
                            Name: "Name",
                            InputType: InputType.Text,
                            Required: false,
                            KeyType: "",
                            MinimumValue: 0,
                            MaximumValue: 255,
                            DecimalPoint: null,
                            DefaultValue: null,
                            Label: "Topic",
                            Note: "Topic",
                            ReferenceSchema: null,
                            ReferenceColumn: null,
                            ReferenceName: null,
                            Options: null,
                        },
                        {
                            StatusType: StatusType.Edit,
                            Name: "CosineSimilarityAverage",
                            InputType: InputType.Number,
                            Required: true,
                            KeyType: "",
                            MinimumValue: 0,
                            MaximumValue: 999999999,
                            DecimalPoint: 9,
                            DefaultValue: 0,
                            Label: "CosineSimilarity",
                            Note: "CosineSimilarity",
                            ReferenceSchema: null,
                            ReferenceColumn: null,
                            ReferenceName: null,
                            Options: null
                        },
                        {
                            StatusType: StatusType.Edit,
                            Name: "TfIdfAverage",
                            InputType: InputType.Number,
                            Required: true,
                            KeyType: "",
                            MinimumValue: 0,
                            MaximumValue: 999999999,
                            DecimalPoint: 9,
                            DefaultValue: 0,
                            Label: "TF-IDF",
                            Note: "TF-IDF",
                            ReferenceSchema: null,
                            ReferenceColumn: null,
                            ReferenceName: null,
                            Options: null
                        },
                        {
                            StatusType: StatusType.Edit,
                            Name: "TotalRecall",
                            InputType: InputType.Number,
                            Required: true,
                            KeyType: "",
                            MinimumValue: 0,
                            MaximumValue: 999999999,
                            DecimalPoint: 9,
                            DefaultValue: 0,
                            Label: "Count",
                            Note: "Count",
                            ReferenceSchema: null,
                            ReferenceColumn: null,
                            ReferenceName: null,
                            Options: null
                        }
                    ]
            },
            PageSize: list.length,
            FrameType: FrameType.Borderless,
            EnableSearch: false,
            AddDefaultOption: false,
            AllowSelectParent: false,
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                txmCtrl.GetSentences(item.Id,
                    function (results)
                    {
                        let pnl = loadSentencesForm(item.Id, results);
                        let frmmdl = new PanelModal(
                            {
                                Id: item.Id,
                                Label: "Senteces of Topic : " + item.Name,
                                Theme: cfg.Theme
                            }
                        );
                        frmmdl.Body.appendChild(pnl);
                    }
                );
            }
        });

        pnlTable.LoadData(list, function (results)
        {

        });

        let searhbox = new SearchBox(cfg.Id.concat("_searchbox"), "", cfg.Theme.ButtonClass,
            function (keywords)//onsearch
            {
                var filteredList = list.filter(x => x.Name.includes(keywords));
                pnlTable.LoadData(filteredList, function (results)
                {

                });
            },
            function (e) // onclear
            {
                var filteredList = list.filter(x => x.Name.includes(''));
                pnlTable.LoadData(filteredList, function (results)
                {

                });
            },
            function (text)//onrefresh
            {
                var filteredList = list.filter(x => x.Name.includes(text));
                pnlTable.LoadData(filteredList, function (results)
                {

                });
            }
        );
        pnlTable.Header.appendChild(searhbox);

        return pnlTable;
    }

    function loadSentencesForm(id, list)
    {
        let pnlTable = new PanelTable({
            Id: "sentences_" + id,
            Label: "Sentences",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: false,
            AllowSort: false,
            Schema:
            {
                Columns:
                    [
                        {
                            StatusType: StatusType.Edit,
                            Name: "Name",
                            InputType: InputType.TextArea,
                            Required: false,
                            KeyType: "",
                            MinimumValue: 0,
                            MaximumValue: 255,
                            DecimalPoint: null,
                            DefaultValue: null,
                            Label: "",
                            Note: "",
                            ReferenceSchema: null,
                            ReferenceColumn: null,
                            ReferenceName: null,
                            Options: null,
                        },
                    ]
            },
            PageSize: list.length,
            FrameType: FrameType.Borderless,
            EnableSearch: false,
            AddDefaultOption: false,
            AllowSelectParent: false,
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
            }
        });

        pnlTable.LoadData(list, function (results)
        {

        });

        return pnlTable;
    }

    function createPanelTableDocuments(ent, list)
    {
        let pnlTable = new PanelTable({
            Id: "documents_" + ent.Id,
            Label: "Documents",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: false,
            AllowSort: false,
            Schema:
            {
                Columns:
                    [
                        {
                            StatusType: StatusType.View,
                            Name: "Title",
                            InputType: InputType.Text,
                            Required: false,
                            KeyType: "",
                            MinimumValue: 0,
                            MaximumValue: 255,
                            DecimalPoint: null,
                            DefaultValue: null,
                            Label: "Title",
                            Note: "Title",
                            ReferenceSchema: null,
                            ReferenceColumn: null,
                            ReferenceName: null,
                            Options: null,
                        }
                    ]
            },
            PageSize: list.length,
            FrameType: FrameType.Borderless,
            EnableSearch: false,
            AddDefaultOption: false,
            AllowSelectParent: false,
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                MsgBox.ShowTitleMessage(item.Title, item.TextContent);
            }
        });

        pnlTable.LoadData(list, function (results)
        {

        });

        return pnlTable;
    }

    function createPrintButtons()
    {
        let tabIndex = 1;

        let divBtnExport = document.createElement("div");

        let divPrints = document.createElement("span");
        divPrints.setAttribute("class", "dropdown");
        let btnExport = Inputs.CreateButton({
            Id: cfg.Id.concat("_btnExport"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass + " dropdown-toggle", TabIndex: tabIndex,
            Icon: "fas fa-file-export", Label: "Export"
        });
        btnExport.setAttribute("data-toggle", "dropdown");
        divPrints.appendChild(btnExport);
        divBtnExport.setAttribute("class", "dropdown-menu");
        divPrints.appendChild(divBtnExport);

        frm.Header.appendChild(divPrints);

        let btnPrint = document.createElement("a");
        btnPrint.setAttribute("class", "dropdown-item");
        btnPrint.innerHTML = '<i class="fas fa-print"></i>&nbsp;&nbsp; Print Preview';
        btnPrint.onclick = function (e)
        {
            panelTable.PrintPreview(cfg.User.CountryLanguage, cfg.User.PrimaryWorkgroupCurrencyDecimalDigits);
        };
        divBtnExport.appendChild(btnPrint);

        let btnPdf = document.createElement("a");
        btnPdf.setAttribute("class", "dropdown-item");
        btnPdf.innerHTML = '<i class="fas fa-file-pdf"></i>&nbsp;&nbsp; Export To PDF';
        btnPdf.onclick = function (e)
        {
            let pdfHandler = null;
            if (cfg.Desktop != null)
            {
                pdfHandler = function (pnl, url)
                {
                    let tabform = cfg.Desktop.Add(cfg.Id + "pdf", cfg.Id + "pdf", pnl);
                };
            }
            panelTable.PrintToPdf(cfg.User.CountryLanguage, cfg.User.PrimaryWorkgroupCurrencyDecimalDigits, pdfHandler);
        };
        divBtnExport.appendChild(btnPdf);

        let btnExcel = document.createElement("a");
        btnExcel.setAttribute("class", "dropdown-item");
        btnExcel.innerHTML = '<i class="fas fa-file-excel"></i>&nbsp;&nbsp; Export To Excel';
        btnExcel.onclick = function (e)
        {
            panelTable.PrintToExcel(cfg.User.CountryLanguage, cfg.User.PrimaryWorkgroupCurrencyDecimalDigits);
        };
        divBtnExport.appendChild(btnExcel);

        let btnCsv = document.createElement("a");
        btnCsv.setAttribute("class", "dropdown-item");
        btnCsv.innerHTML = '<i class="fas fa-file-csv"></i>&nbsp;&nbsp; Export To CSV';
        btnCsv.onclick = function (e)
        {
            panelTable.PrintToCsv(cfg.User.CountryLanguage, cfg.User.PrimaryWorkgroupCurrencyDecimalDigits);
        };
        divBtnExport.appendChild(btnCsv);
    }

    function restructure()
    {
        MsgLoading.LockPanel(frm.Body, "Restructuring ...");
        txmCtrl.RestructureTopics(cfg.Data.Id,
            function (results)
            {
                MsgLoading.UnlockPanel(frm.Body);
                if (results == null)
                {
                    MsgBox.Show("Process failed");
                    return;
                }

                let msgokcancel = new MsgOkCancel({
                    Id: "msgokcancelrestruct",
                    Label: "Restructure Finished",
                    Text: "Refresh Page?",
                    OnOkClick: function ()
                    {
                        cfg.Desktop.Remove(cfg.Data.Id, "textminingform");
                        msgokcancel.Close();

                        setTimeout(
                            function ()
                            {
                                const frmItem = new TmForm(
                                    {
                                        Id: "textminingform_" + cfg.Data.Id,
                                        Code: "textminingform",
                                        Connector: cfg.Connector,
                                        Theme: cfg.Theme,
                                        Desktop: cfg.Desktop,
                                        User: cfg.User,
                                        CdnUrl: cfg.CdnUrl,
                                        WebBaseUrl: cfg.WebBaseUrl,
                                        Data: cfg.Data,
                                        GetServerTime: cfg.GetServerTime
                                    }
                                );
                                let tabform = cfg.Desktop.Add(cfg.Data.Id, "textminingform", frmItem);
                                frmItem.SetDesktopTab(tabform);
                            }, 500);
                    }
                });
            }
        );
    }


    return frm;
};