var EsForm = function EsForm(cfg)
{
    let criteriaCtrl = new CriteriaController({ Connector: cfg.Connector });
    let expertSystemCtrl = new ExpertSystemController({ Connector: cfg.Connector });

    let frm;

    let ddlExpertSystem;
    let txtSubject;
    let btnQuery;
    let btnSubmit;

    //let _domains = [];
    let _expertSystemsList = [];

    //let _expertSystemId = 0;

    construct();
    
    function construct()
    {
        frm = new FormPanel({ Id: cfg.Id });
        //if (cfg.Desktop.GetTypeName() === DesktopType.WebUrl && cfg.DesktopItemType === DesktopItemType.Desktop)
        //{
        //    let btnBack = Inputs.CreateBackButton(cfg.Id.concat("_btnBack"), cfg.Theme.ButtonClass);
        //    frm.Body.appendChild(btnBack);

        //    let btnLink = Inputs.CreateLinkButton(cfg.Id.concat("_btnLink"), cfg.Theme.ButtonClass);
        //    frm.Body.appendChild(btnLink);
        //}

        let btnNew = Inputs.CreateButton({
            Id: cfg.Id.concat("btnNew"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
            Icon: "fas fa-file", Label: "",
            OnClick: function (e)
            {
                frm.remove();
                construct();
                let tabform = cfg.Desktop.Add("", "kenviroesie", frm);
                frm.SetDesktopTab(tabform);
            }
        });
        frm.Header.appendChild(btnNew);

        //frm.Body.appendChild(document.createElement("br"));
        //frm.Body.appendChild(document.createElement("br"));

        let tabindex = 0;
        ddlExpertSystem = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("ddlExpertSystem"), Name: "ExpertSystem", InputType: InputType.Select, Required: false, StatusType: StatusType.Edit, Label: "Subject Expertise Area",
                MinimumValue: 0, MaximumValue: DataType.Int.Max, Note: "Subject Expertise Area", TabIndex: tabindex, AddDefaultOption: true,
                Options: []
            }
        );
        frm.Body.Add(ddlExpertSystem);
        tabindex++;

        txtSubject = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtSubject"), Name: "Subject", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Keywords",
                Note: "Keyword or Subject", Theme: cfg.Theme, TabIndex: tabindex
            }
        );
        frm.Body.Add(txtSubject);
        tabindex++;

        frm.Body.Load();

        btnQuery = Inputs.CreateButton({
            Id: cfg.Id.concat("btnQuery"), Name: " Query", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-question", Label: "Submit",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }

                //if (ddlExpertSystem.Input.value != '')
                //{
                //    _expertSystemId = Number(ddlExpertSystem.Input.value);
                //    if (isNaN(_expertSystemId))
                //    {
                //        _expertSystemId = 0;
                //    }
                //}
                frm.Footer.innerHTML = '';
                frm.AddButton(btnQuery);
                frm.Footer.appendChild(document.createElement("br"));
                frm.Footer.appendChild(document.createElement("br"));

                let expertSystemId = Number(ddlExpertSystem.Input.value);
                let aisEs = _expertSystemsList.find(x => x.Id == expertSystemId);
                if (aisEs != null)
                {
                    expertSystemId = aisEs.aisCriteriaId;
                }

                searchCriterias(criteriaCtrl, expertSystemId, txtSubject.Input.value,
                    function (criteriaCtrl, aisCriteriaId, message)
                    {
                        MsgBox.Show("We cannot find any issue related to your keywords, please try to specify other keywords.");
                    }
                );
            }
        });

        frm.AddButton(btnQuery);

        frm.Footer.appendChild(document.createElement("br"));
        frm.Footer.appendChild(document.createElement("br"));

        ddlExpertSystem.Input.focus();

        if (cfg.ExpertSystemId != null)
        {
            ddlExpertSystem.Input.value = cfg.ExpertSystemId;
        }

        if (cfg.Keywords != null)
        {
            txtSubject.Input.value = cfg.Keywords;
        }

        let expertSystemId = Utils.GetQueryStringByName('id');
        if (expertSystemId != null && expertSystemId != '')
        {
            ddlExpertSystem.Input.value = expertSystemId;
        }

        let query = Utils.GetQueryStringByName('q');
        if (query != null && query != '')
        {
            txtSubject.Input.value = query;
        }

        if (ddlExpertSystem.Input.value != '' && txtSubject.Input.value != '')
        {
            btnQuery.click();
        }

        expertSystemCtrl.SearchExpertSystems("",
            function (result)
            {
                if (result == null)
                {
                    return;
                }
                _expertSystemsList = result;
                ddlExpertSystem.Input.SetOptions(result);
                if (cfg.ExpertSystemId != null)
                {
                    ddlExpertSystem.Input.value = cfg.ExpertSystemId;
                }
            }
        );

    }

    function searchCriterias(criteriaCtrl, aisCriteriaId, message, onUnhandle)
    {
        if (message == null || message == "")
        {
            if (onUnhandle != null)
            {
                onUnhandle(expertSystemCtrl, aisCriteriaId, message);
            }
            return;
        }

        MsgLoading.Show();
        let listCriteria = [];
        criteriaCtrl.SearchCriterias(aisCriteriaId, message.trim().toLowerCase(), "Indication",
            function (items)
            {
                MsgLoading.Close();
                if (items == null || items.length <= 0)
                {
                    MsgBox.Show("Criterias not found, try another keywords");
                    return;
                }

                //_domains = items.filter(x=>x.CriteriaType == 'Matter').
                //    map(x =>
                //        (
                //            {
                //                Id: x.Id,
                //                Criterias: items.filter(y => y.aisCriteriaId == x),
                //                Name: items.find(y => y.aisCriteriaId == x) != null ? items.find(y => y.aisCriteriaId == x).ParentName : ""
                //            }
                //        )
                //    );

                items.filter(x => x.CriteriaType == 'Indication' || x.CriteriaType == 'Information').forEach(
                    function (item, j)
                    {
                        //let criteriaItem = {
                        //    aisCriteria: item,
                        //    eds: { Id: item.aisCriteriaId, Name: item.ParentName },
                        //    Criteria: item.Name,
                        //    Question: message,
                        //    Answer: 0
                        //};

                        item.Answer = 0;

                        listCriteria.push(item);
                    }
                );

                let panelCriteria = createPanelTableApplications(listCriteria);
                frm.Footer.appendChild(panelCriteria);
                frm.Footer.appendChild(document.createElement("br"));
                frm.Footer.appendChild(document.createElement("br"));
                btnSubmit = Inputs.CreateButton({
                    Id: cfg.Id.concat("btnSubmit"), Name: " Compute", ButtonType: ButtonType.Submit, Class: cfg.Theme.ButtonClass, TabIndex: 0,
                    Icon: "fas fa-paper-plane", Label: "Submit",
                    OnClick: function (e)
                    {
                        if (!frm.IsValid())
                        {
                            return;
                        }

                        submit2(panelCriteria);
                    }
                });
                createPrintButtons(frm.Footer, panelCriteria);
                frm.Footer.appendChild(btnSubmit);
            }
        );

    }

    function createPanelTableApplications(list)
    {
        let pnlTable = new PanelTable({
            Id: "kenviroexpertsystemcriteriapanel",
            Label: "Please Answer All This Questions Below To Get Your Analisis Results",
            Theme: cfg.Theme,
            StatusType: StatusType.Edit,
            ShowLabel: true,
            AllowSort: false,
            Schema:
            {
                Columns:
                    [
                        {
                            StatusType: StatusType.View,
                            Name: "Name",
                            InputType: InputType.TextArea,
                            Required: false,
                            KeyType: "",
                            MinimumValue: 0,
                            MaximumValue: 2048,
                            DecimalPoint: null,
                            DefaultValue: "",
                            Label: "Criteria",
                            Note: "Criteria",
                            ReferenceSchema: null,
                            ReferenceColumn: null,
                            ReferenceName: null,
                            Options: null
                        },
                        {
                            StatusType: StatusType.Edit,
                            Name: "Answer",
                            InputType: InputType.Radio,
                            Required: false,
                            KeyType: "",
                            MinimumValue: 0,
                            MaximumValue: 1,
                            DecimalPoint: 0,
                            DefaultValue: 1,
                            Label: "Answer",
                            Note: "Answer",
                            ReferenceSchema: null,
                            ReferenceColumn: "Id",
                            ReferenceName: "Name",
                            Options: [
                                {
                                    Id: 1,
                                    Name: "YES"
                                },
                                {
                                    Id: 0,
                                    Name: "NO"
                                },
                            ]
                        },
                    ]
            },
            PageSize: list.length,
            FrameType: FrameType.Bordered,
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

    //function bindSolution(element, domain)
    //{
    //    let textDomain = "<strong>" + domain.Name + "</strong>.<br /><strong><u><i>Probability: " + Math.round(domain.Output * 100) + "%</i></u></strong><br />";
    //    let divContent = document.createElement("div");
    //    divContent.setAttribute("style", "margin-top:5px; border-radius: 5px;");
    //    element.appendChild(divContent);
    //    divContent.innerHTML = textDomain + domain.Solutions;
    //}

    function submit2(panelCriteria)
    {
        let data = panelCriteria.GetData();

        let mattersCriterias = [];
        for (let i = 0; i < data.List.length; i++)
        {
            let item = data.List[i];

            let criteriaItem = {
                Id: item.Id,
                Name: item.Name,
                Value: item.Answer == '1' ? 1 : 0,
                Weight: 1,
                Output: 0,
                Note: "",
                Matter: {
                    Id: item.aisCriteriaId,
                    Name: item.ParentName,
                    Value: 0,
                    Weight: item.ParentWeight,
                    Output: 0,
                    Note:""
                },
                Criterias:[]
            };

            mattersCriterias.push(criteriaItem);
        }

        MsgLoading.Show();
        expertSystemCtrl.Compute(mattersCriterias, (cfg.pfeProfile != null ? cfg.pfeProfile.Id : 0),
            function (results)
            {
                MsgLoading.Close();
                if (results == null)
                {
                    MsgBox.Show("Calculation Failed");
                    return;
                }

                panelCriteria.Footer.innerHTML = results.Solutions;

                //results.forEach(
                //    function (item, i)
                //    {
                //        console.log("Id:" + item.Id);
                //        console.log("Output:" + item.Output);
                //        console.log("Weight:" + item.Weight);
                //        console.log("Value:" + item.Value);
                //        console.log("=====================");

                //        bindSolution(panelCriteria.Footer, item);
                //    }
                //);

            }
        );

    }

    function createPrintButtons(elementContainer, panelTable)
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

        elementContainer.appendChild(divPrints);

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


    return frm;
};


//function submit(panelCriteria)
//{
//    let data = panelCriteria.GetData();

//    for (let i = 0; i < data.List.length; i++)
//    {
//        let item = data.List[i];

//        if (item.Answer == '1')
//        {
//            let result = Kenviro.CalculateDempsterShafer(_domains, item.aisCriteria, "Id", "aisCriterias", "Id", "aisCriteriaId");
//            if (result != null && result.Matters != null && result.Matters.length > 0)
//            {
//                _domains = result.Matters;

//                expertSystemCtrl.SaveCriteriaLog(item.aisCriteria.Id, cfg.pfeProfile != null ? cfg.pfeProfile.Id : null, "", item.Answer);
//            }
//        }
//        else
//        {
//            Kenviro.BookmarkIncorrect(_domains, item.aisCriteria, "Id", "aisCriteriaId");
//        }
//    }

//    let totalProbs = 0;
//    _domains.forEach(
//        function (dom, i)
//        {
//            totalProbs += dom.Probability;
//        }
//    );
//    _domains.forEach(
//        function (dom, i)
//        {
//            dom.Probability = dom.Probability / totalProbs;
//        }
//    );

//    let finalresult = Kenviro.GetDominated(_domains);

//    if (finalresult != null)
//    {
//        if (finalresult.WinnerMatter != null && finalresult.WinnerMatter.Probability >= 0.65)
//        {
//            bindSolution(frm.Footer, finalresult.WinnerMatter);
//        }

//        if (finalresult.WinnerMatter == null || (finalresult.WinnerMatter != null && finalresult.WinnerMatter.Probability < 0.65))
//        {
//            if (finalresult.PotentialMatters != null && finalresult.PotentialMatters.length > 0)
//            {
//                finalresult.PotentialMatters.forEach(
//                    function (potentialDomain, j)
//                    {
//                        bindSolution(frm.Footer, potentialDomain);
//                    }
//                );
//            }

//            if (finalresult.UncertaintyMatters != null && finalresult.UncertaintyMatters.length > 0)
//            {
//                finalresult.UncertaintyMatters.forEach(
//                    function (uncertaintyDomain, j)
//                    {
//                        bindSolution(frm.Footer, uncertaintyDomain);
//                    }
//                );
//            }
//        }
//    }
//    else
//    {
//        let list = _domains.sort((a, b) => (a.Probability < b.Probability) ? 1 : ((a.Probability > b.Probability) ? -1 : 0));
//        list.forEach(
//            function (domain, j)
//            {
//                bindSolution(frm.Footer, domain);
//            }
//        );
//    }
//}

//function bindSolution(element, domain)
//{
//    //let textDomain = "<strong>" + domain.Name + "</strong>.<br /><br /><strong><u><i>Probability: " + Math.round(domain.Probability * 100) + "%</i></u></strong><br /><br />";
//    let textDomain = "<strong>" + domain.Name + "</strong>.<br /><br /><strong><u><i>Probability: " + Math.round(domain.Output * 100) + "%</i></u></strong><br /><br />";
//    let textSolutionResults = "";

//    let divContent = document.createElement("div");
//    divContent.setAttribute("style", "margin-top:5px; border-radius: 5px;");
//    element.appendChild(divContent);

//    expertSystemCtrl.GetSolutions(domain.Id,
//        function (results)
//        {
//            if (results == null || results.length <= 0)
//            {
//                return;
//            }

//            results.forEach(
//                function (result, index)
//                {
//                    textSolutionResults += result.Name += "<br /><br />";
//                }
//            );

//            divContent.innerHTML = textDomain + textSolutionResults;
//        }
//    );

//    //expertSystemCtrl.SaveMatterLog(domain.Id, cfg.pfeProfile != null ? cfg.pfeProfile.Id : null, domain.Probability, domain.Evidence, "");
//    //expertSystemCtrl.SaveMatterLog(domain.Id, cfg.pfeProfile != null ? cfg.pfeProfile.Id : null, domain.Output, domain.Weight, "");
//}
