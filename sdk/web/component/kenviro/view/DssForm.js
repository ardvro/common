var DssForm = function DssForm(cfg)
{
    let criteriaCtrl = new CriteriaController({ Connector: cfg.Connector });
    let dssCtrl = new DecisionSupportSystemController({ Connector: cfg.Connector });

    let frm;

    let lookupCriteria;
    let ddlMatter;
    let ddlMethod;
    let txtName;
    let btnAddItem;
    let btnUpload;
    let panelTable;
    let btnSubmit;
    let btnReport;
    let filePicker;
    let btnDownloadTemplate;

    let btnCreateGeneticAlgorithmCriteria;
    let btnCreateFuzzyCriteria;
    let btnCreateCriteria;

    let _data = {
        Name: ""
    };

    let _criterias;

    let _aisDss = new aisDss();

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

        if (cfg.Data != null && cfg.Data.Id != null)
        {
            let btnLink = Inputs.CreateLinkButton(cfg.Id.concat("_btnLink"), cfg.Theme.ButtonClass);
            frm.Body.appendChild(btnLink);

            let btnNew = Inputs.CreateButton({
                Id: cfg.Id.concat("btnNew"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
                Icon: "fas fa-file", Label: "",
                OnClick: function (e)
                {
                    reset();
                }
            });
            frm.Body.appendChild(btnNew);

            let btnRefresh = Inputs.CreateButton({
                Id: cfg.Id.concat("btnRefresh"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
                Icon: "fas fa-sync", Label: "",
                OnClick: function (e)
                {
                    refresh();
                }
            });
            frm.Body.appendChild(btnRefresh);

            let btnDelete = Inputs.CreateButton({
                Id: cfg.Id.concat("btnDelete"), Name: "", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
                Icon: "fas fa-trash", Label: "",
                OnClick: function (e)
                {
                    deleteData();
                }
            });
            frm.Body.appendChild(btnDelete);

            createPrintButtons();
        }

        //frm.Body.appendChild(document.createElement("br"));
        //frm.Body.appendChild(document.createElement("br"));

        let tabindex = 0;

        txtName = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtName"), Name: "Name", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Project Name",
                Note: "Project Name", Theme: cfg.Theme, MaximumValue: 255, TabIndex: tabindex
            }
        );
        frm.Body.Add(txtName);
        tabindex++;

        ddlMethod = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("ddlMethod"), Name: "Method", InputType: InputType.Select, Required: true, StatusType: StatusType.Edit,
                Label: "DecisionType",
                MinimumValue: 0, MaximumValue: DataType.Int.Max, Note: "Decision Method / Mathematic Calculation Formula", TabIndex: tabindex, AddDefaultOption: true,
                Recursive: true, ReferenceName: "Name", ReferenceColumn: "ParentId", Options: _aisDss.Columns.find(x => x.Name == "DecisionType").Options
            }
        );
        ddlMethod.Input.onchange = function (e)
        {
            decisionMethodChange();
        };
        let lblMethod = document.createElement("label");
        lblMethod.innerHTML = "Read more about decision method and it's criterions <a href='https://www.ardvro.com/content/106/' target='_blank'>here.</a> <br />"
        lblMethod.innerHTML += "Find sample data and case <a href='https://www.ardvro.com/content/108/' target='_blank'>here.</a>"
        lblMethod.setAttribute("style", "font-size:medium;");
        ddlMethod.appendChild(lblMethod);
        frm.Body.Add(ddlMethod);
        tabindex++;

        lookupCriteria = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("lookupCriteria"),
                Name: "aisCriteriaId",
                InputType: InputType.Lookup,
                Required: false,
                StatusType: StatusType.Select,
                Label: "Criteria",
                MinimumValue: 0,
                MaximumValue: DataType.Int.Max,
                Step: 0,
                ReferenceSchema: new aisCriteria(),
                ReferenceColumn: "aisCriteriaId",
                ReferenceName: "Name",
                Options: null,
                Theme: cfg.Theme,
                PageSize: DEFAULT_PAGE_SIZE,
                AllowSelectParent: true,
                AddDefaultOption: true,
                Recursive: true,
                TabIndex: tabindex,
                Note: "",
                OnChange: function (e, value)
                {
                    _data.aisCriteriaId = Number(value);
                    criteriaCtrl.GetCriterias(Number(value), Kenviro.CriteriaType.Matter,
                        function (results)
                        {
                            _criterias = results;
                        }
                    );
                },
                OnLookupAdd: function (frmpanel)
                {
                    let data = frmpanel.GetData();
                    criteriaCtrl.Save(data);
                },
                OnLookup: function (e, paneltable)
                {
                    selectCriteriaLookup(paneltable);
                }
            }
        );
        frm.Body.Add(lookupCriteria);

        if (cfg.Data == null || cfg.Data.Id == null || cfg.Data.Id == 0)
        {
            btnUpload = Inputs.CreateButton({
                Id: cfg.Id.concat("btnUpload"), Name: " Upload and Calculate", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
                Icon: "fas fa-upload", Label: "Upload",
                OnClick: function (e)
                {
                    if (!frm.IsValid())
                    {
                        return;
                    }
                    filePicker.Open();
                }
            });
            lookupCriteria.appendChild(btnUpload);

            btnDownloadTemplate = Inputs.CreateButton({
                Id: cfg.Id.concat("btnDownloadTemplate"), Name: " Download Template", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
                Icon: "fas fa-download", Label: "Template",
                OnClick: function (e)
                {
                    let urlDownloadTemplate = cfg.CdnUrl.concat("/res/docs/sample/dss/templatedss.csv");
                    Utils.OpenUrl(urlDownloadTemplate, "_blank");
                }
            });
            lookupCriteria.appendChild(btnDownloadTemplate);

            btnCreateFuzzyCriteria = Inputs.CreateButton({
                Id: "btnCreateFuzzyCriteria", Name: " Create Fuzzy Logic Membership", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
                Icon: "fas fa-plus", Label: "Create Fuzzy Logic Membership",
                OnClick: function (e)
                {
                    const frm = new FuzzyCriteriaForm(
                        {
                            Id: "fuzzylogicform",
                            Code: "fuzzylogicform",
                            Connector: cfg.Connector,
                            Theme: cfg.Theme,
                            Desktop: cfg.Desktop,
                            DesktopItemType: DesktopItemType.Modal,
                            User: cfg.User,
                            Data: null,
                            CdnUrl: cfg.CdnUrl,
                            WebBaseUrl: cfg.WebBaseUrl,
                            GetServerTime: cfg.GetServerTime
                        }
                    );
                }
            });
            btnCreateFuzzyCriteria.setAttribute("hidden", "");
            lookupCriteria.appendChild(btnCreateFuzzyCriteria);

            btnCreateGeneticAlgorithmCriteria = Inputs.CreateButton({
                Id: "btnCreateDecisionSupportSystemCriteria", Name: " Create Genetic Algorithm Rules", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
                Icon: "fas fa-plus", Label: "Create Genetic Algorithm Rules",
                OnClick: function (e)
                {
                    const frm = new GaCriteriaForm(
                        {
                            Id: "geneticalgorithmgenerator",
                            Code: "geneticalgorithmgenerator",
                            Connector: cfg.Connector,
                            Theme: cfg.Theme,
                            Desktop: cfg.Desktop,
                            User: cfg.User,
                            Data: null,
                            CdnUrl: cfg.CdnUrl,
                            WebBaseUrl: cfg.WebBaseUrl,
                            GetServerTime: cfg.GetServerTime
                        }
                    );
                }
            });
            btnCreateGeneticAlgorithmCriteria.setAttribute("hidden", "");
            lookupCriteria.appendChild(btnCreateGeneticAlgorithmCriteria);

            btnCreateCriteria = Inputs.CreateButton({
                Id: "btnCreateCriteria", Name: " Create Criteria", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: 0,
                Icon: "fas fa-plus", Label: "Create Criteria",
                OnClick: function (e)
                {
                    lookupCriteria.Input.Add();
                }
            });
            btnCreateCriteria.setAttribute("hidden", "");
            lookupCriteria.appendChild(btnCreateCriteria);

            filePicker = Inputs.CreateInput({
                Id: cfg.Id.concat('_upload'),
                Name: "UploadData",
                Required: false,
                InputType: InputType.File,
                StatusType: StatusType.Multiple,
                Label: "",
                MaximumValue: 1048576,
                TabIndex: 0,
                Theme: cfg.Theme,
                ViewMode: StatusType.Hidden,
                OnChange: function (e, fileBase64)
                {
                    upload(fileBase64);
                }
            });
            lookupCriteria.appendChild(filePicker);
        }

        /*ddlSubject.Input.onchange = function (e)
        {
            subjectCtrl.GetMatters(Number(ddlSubject.Input.value),
                function (resultMatters)
                {
                    ddlMatter.Input.SetOptions(resultMatters);

                    if (_data != null && _data.aknMatterId != null)
                    {
                        ddlMatter.Input.value = _data.aknMatterId;
                        ddlMatter.Input.onchange();
                    }
                }
            );
        };
        tabindex++;*/

        /*ddlMatter = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("ddlMatter"), Name: "Matter", InputType: InputType.Select, Required: true, StatusType: StatusType.Edit, Label: "Subject Matter",
                MinimumValue: 0, MaximumValue: DataType.Int.Max, Note: "Subject Matter", TabIndex: tabindex, AddDefaultOption: true,
                Options: []
            }
        );
        frm.Body.Add(ddlMatter);
        ddlMatter.Input.onchange = function (e)
        {
            bindCriterias();
        };
        tabindex++;*/


        frm.Body.Load();

        btnAddItem = Inputs.CreateButton({
            Id: cfg.Id.concat("btnAddItem"), Name: " Add Item", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-plus", Label: "Add Item Criteria",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }

                addItem();
            }
        });
        frm.AddButton(btnAddItem);

        frm.Footer.appendChild(document.createElement("br"));
        frm.Footer.appendChild(document.createElement("br"));

        _data.aisDssItems = [];
        panelTable = createPanelTableApplications(_data.aisDssItems);
        frm.Footer.appendChild(panelTable);

        btnSubmit = Inputs.CreateButton({
            Id: cfg.Id.concat("btnSubmit"), Name: " Compute", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-paper-plane", Label: "Submit",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }

                submit();
            }
        });
        panelTable.appendChild(btnSubmit);

        btnReport = Inputs.CreateButton({
            Id: cfg.Id.concat("btnReport"), Name: " View Report", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-table", Label: "View Report",
            OnClick: function (e)
            {
                if (_data == null)
                {
                    return;
                }

                viewReport();
            }
        });
        panelTable.appendChild(btnReport);

        lookupCriteria.focus();

        if (cfg.Data != null && cfg.Data.Id != null)
        {
            dssCtrl.GetById(cfg.Data.Id,
                function (result)
                {
                    if (result == null)
                    {
                        MsgBox.Show("Data Not Found");
                        reset();
                        return;
                    }

                    _data = result;

                    dataToUi();
                }
            );
        }
        else if (cfg.Data != null && cfg.Data.Id == null)
        {
            _data.Id = 0;
            if (cfg.Data.Name != null)
            {
                _data.Name = cfg.Data.Name;
            }
            _data.aisCriteriaId = cfg.Data.aisCriteriaId;
            _data.aisCriteria = {};
            _data.aisCriteria.Id = cfg.Data.aisCriteriaId;
            if (cfg.Data.aisCriteria != null)
            {
                _data.aisCriteria.Name = cfg.Data.aisCriteria.Name;
            }
            _data.DecisionType = cfg.Data.DecisionType;
            dataToUi();
        }

        window.scrollTo(0, 0);
    }

    function addItem(dataItem)
    {
        if (dataItem == null)
        {
            dataItem = {};
            dataItem.aisDssItemCriterias = [];
            dataItem.Updated = cfg.GetServerTime().Format('yyyy-MM-dd HH:mm:ss');
            dataItem.Updater = cfg.User.Name;
            dataItem.Status = 1;
            dataItem.Weight = 1.0;
            dataItem.Output = 0.0;
            dataItem.Sort = 1;
        }

        _criterias.forEach(
            function (criteria, index)
            {
                let itemIndex = dataItem.aisDssItemCriterias.findIndex(x => x.aisCriteriaId == criteria.Id);
                if (itemIndex != -1)
                {
                    return;
                }

                let projectItemCriteria = {
                    Updater: cfg.User.Name,
                    Updated: cfg.GetServerTime().Format('yyyy-MM-dd HH:mm:ss'),
                    Status: 1,
                    aisCriteriaId: criteria.Id,
                    Name: criteria.Name,
                    Value: 0.0,
                    Weight: criteria.Weight,
                    Output: 0,
                    Sort: criteria.Sort,
                    Note: ""
                };
                dataItem.aisDssItemCriterias.push(projectItemCriteria);
            }
        );

        let panel = new DssItemForm(
            {
                Id: cfg.Id.concat('_DssItemForm'),
                Label: "ES-DSS Project Item",
                Theme: cfg.Theme,
                Connector: cfg.Connector,
                Data: dataItem,
                OnAdd : function (projectDataItem)
                {
                    let indexToDelete = _data.aisDssItems.findIndex(x => x.Name == projectDataItem.Name);
                    if (indexToDelete > -1)
                    {
                        _data.aisDssItems.splice(indexToDelete, 1);
                    }
                    projectDataItem.Updated = cfg.GetServerTime().Format('yyyy-MM-dd HH:mm:ss');
                    projectDataItem.Updater = cfg.User.Name;
                    projectDataItem.Status = 1;

                    _data.aisDssItems.push(projectDataItem);
                    panelTable.LoadData(_data.aisDssItems, function (results)
                    {

                    });
                },
                OnDelete: function (projectDataItem)
                {
                    let indexToDelete = _data.aisDssItems.findIndex(x => x.Name == projectDataItem.Name);
                    if (indexToDelete > -1)
                    {
                        _data.aisDssItems.splice(indexToDelete, 1);
                        panelTable.LoadData(_data.aisDssItems, function (results)
                        {

                        });
                    }
                }
            }
        );
    }

    function createPanelTableApplications(list)
    {
        let pnlTable = new PanelTable({
            Id: "kenvirodssprojectitempanel",
            Label: "Project Items",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: true,
            AllowSort: false,
            Schema: new aisDssItem(),
            PageSize: list.length,
            FrameType: FrameType.Bordered,
            EnableSearch: false,
            AddDefaultOption: false,
            AllowSelectParent: false,
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                addItem(item);
            }
        });

        pnlTable.LoadData(list, function (results)
        {

        });

        return pnlTable;
    }

    function dataToUi()
    {
        if (_data == null || _data.Id == null)
        {
            return;
        }

        txtName.Input.value = _data.Name;
        lookupCriteria.Input.SetValue(_data.aisCriteriaId);
        lookupCriteria.Input.SetText(_data.aisCriteria.Name);
        ddlMethod.Input.value = _data.DecisionType;
        criteriaCtrl.GetCriterias(Number(_data.aisCriteriaId), Kenviro.CriteriaType.Matter,
            function (results)
            {
                _criterias = results;
            }
        );
        
        let listSorts = _data.aisDssItems.sort((a, b) => (a.Weight > b.Weight) ? 1 : ((a.Weight < b.Weight) ? -1 : 0));

        panelTable.LoadData(listSorts, function (results)
        {

        });
    }

    function refresh()
    {
        if (_data == null || _data.Id == null)
        {
            return;
        }

        txtName.Input.value = _data.Name;
        lookupCriteria.Input.SetValue(_data.aisCriteriaId);
        ddlMethod.Input.value = _data.DecisionType;
        let listSorts = _data.aisDssItems.sort((a, b) => (a.Weight > b.Weight) ? 1 : ((a.Weight < b.Weight) ? -1 : 0));

        panelTable.LoadData(listSorts, function (results)
        {

        });
    }

    function uiToData()
    {
        if (_data == null)
        {
            return;
        }

        _data.Updated = cfg.GetServerTime();
        _data.Updater = cfg.User.Name;
        _data.Status = 1;

        _data.Name = txtName.Input.value;
        _data.aisCriteriaId = Number(lookupCriteria.Input.GetValue());
        _data.DecisionType = ddlMethod.Input.value;
        _data.aisDssItems = panelTable.GetDataList();
    }

    function submit()
    {
        let updateUrl = (cfg.Data == null || cfg.Data.Id == null || cfg.Data.Id == 0);

        uiToData();

        MsgLoading.LockPanel(frm, "Calculating ...");

        dssCtrl.Submit(_data,
            function (result)
            {
                MsgLoading.UnlockPanel(frm);
                if (result == null || result.Id == null || result.Id == 0)
                {
                    MsgBox.Show("Process Failed");
                    return;
                }

                _data = result;

                panelTable.LoadData(_data.aisDssItems, function (results)
                {

                });

                MsgBox.Show("Finished");

                if (updateUrl)
                {
                    window.history.pushState({ "html": "" }, "", "/kenviroaisDss/".concat(_data.Id));
                }
            }
        );
    }

    function reset()
    {
        if (_data != null && txtName.Input.value != "" && _data.aisDssItems != null && _data.aisDssItems.length > 0)
        {
            let msgOk = new MsgOkCancel({
                Id: "MsgOkCancel",
                Label: "Data Reset",
                Text: "You have unsaved data, this action will reset your existing input. Confirm Reset Data???",
                Theme: cfg.Theme,
                OnOkClick: function (e)
                {
                    _data = {};
                    _data.aisDssItems = [];
                    _criterias = [];

                    txtName.Input.value = "";
                    lookupCriteria.Input.Clear();
                    ddlMethod.Input.value = "";
                    panelTable.LoadData(_data.aisDssItems, function (results)
                    {

                    });
                }
            });
            return;
        }

        _data = {};
        _data.aisDssItems = [];
        _criterias = [];

        txtName.Input.value = "";
        ddlMethod.Input.value = "";
        lookupCriteria.Input.Clear();
        panelTable.LoadData(_data.aisDssItems, function (results)
        {

        });
        ddlMatter.Input.SetOptions([]);
    }

    function deleteData()
    {
        let msgOk = new MsgOkCancel({
            Id: "MsgOkCancel",
            Label: "Delete Data",
            Text: "Confirm Delete Data???",
            Theme: cfg.Theme,
            OnOkClick: function (e)
            {
                dssCtrl.Delete(_data);
                window.history.back();
            }
        });

    }

    function viewReport()
    {
        const frm = new DssItemCriteriaCountTable(
            {
                Id: "kenviroedsreport_" + _data.Id,
                Code: "kenviroedsreport/" + _data.Id,
                Label: "DSS Matrix View Report",
                Theme: cfg.Theme,
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                Data: _data,
                User: cfg.User,
                GetServerTime: cfg.GetServerTime
            }
        );
    }

    function upload(jsonFilesbase64Content)
    {
        MsgLoading.LockPanel(frm, "Importing, Uploading and Calculating ...");
        let list = DataUtils.FilesToData(jsonFilesbase64Content, "DssCsvSchema", 0, 1,
            function (strErrors)
            {
                if (strErrors !== "")
                {
                    MsgBox.Show("Invalid row format: <br /><br />" + strErrors);
                    filePicker.Reset();
                }
            }
        );

        _data = {};
        _data.Name = txtName.Input.value;
        _data.aisCriteriaId = Number(lookupCriteria.Input.GetValue());
        _data.DecisionType = ddlMethod.Input.value;

        dssCtrl.Import(_data.aisCriteriaId, _data.Name, _data.DecisionType, list, cfg.pfeProfile != null ? cfg.pfeProfile.Id : 0,
            function (result)
            {
                MsgLoading.UnlockPanel(frm);

                if (result == null)
                {
                    MsgBox.Show("Import Failed");
                    return;
                }
                _criterias = [];

                _data = result;

                dataToUi();
            }
        );
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

        frm.Body.appendChild(divPrints);

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

    function selectCriteriaLookup(paneltable)
    {
        //let decisionType = ddlMethod.Input.value;
        //if (decisionType == "" || decisionType == null)
        //{
        //    decisionType = Kenviro.CriteriaType.DecisionSupportSystem;
        //}
        let decisionType = Kenviro.CriteriaType.DecisionSupportSystem;
        let parentCriteria = Number(lookupCriteria.Input.GetValue());
        criteriaCtrl.GetCriterias(parentCriteria, decisionType,
            function (results)
            {
                //let list = Utils.ArrangeRecursiveList(results, "aisCriteriaId", "Id", "Name", null, 0);
                paneltable.LoadData(results);
                lookupCriteria.Input.SetSelectedItems();
            }
        );
    }

    function decisionMethodChange()
    {
        if (ddlMethod.Input.value == "MamdaniFuzzyInference")
        {
            btnCreateFuzzyCriteria.removeAttribute("hidden");
            btnCreateGeneticAlgorithmCriteria.setAttribute("hidden", "");
            btnCreateCriteria.setAttribute("hidden", "");
        }
        else if (ddlMethod.Input.value == "GeneticAlgorithm")
        {
            btnCreateGeneticAlgorithmCriteria.removeAttribute("hidden");
            btnCreateFuzzyCriteria.setAttribute("hidden", "");
            btnCreateCriteria.setAttribute("hidden", "");
        }
        else if (ddlMethod.Input.value == "")
        {
            btnCreateCriteria.removeAttribute("hidden");
            btnCreateGeneticAlgorithmCriteria.setAttribute("hidden", "");
            btnCreateCriteria.setAttribute("hidden", "");
        }
        else
        {
            btnCreateCriteria.removeAttribute("hidden");
            btnCreateGeneticAlgorithmCriteria.setAttribute("hidden", "");
            btnCreateFuzzyCriteria.setAttribute("hidden", "");
        }
    }


    return frm;
};
