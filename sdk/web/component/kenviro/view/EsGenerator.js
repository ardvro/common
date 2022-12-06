var EsGenerator = function EsGenerator(cfg)
{
    let esCtrl = new ExpertSystemController({ Connector: cfg.Connector });
    let criteriaCtrl = new CriteriaController({ Connector: cfg.Connector });
    let tmCtrl = new TextMiningController({ Connector: cfg.Connector });

    let frm = {};

    let _schema = new aisEs();

    let txtName;
    let ddlInferenceType;

    let lblKnowledgeAcquisitionType;

    let chkKnowledgeSourceDocuments;
    let fuDocs;
    let ddlExtractionType;

    let chkKnowledgeSourceGoogleSearch;
    let txtGoogleSearchKey;
    let txtGoogleCxKey;
    let txtKeywords;

    let chkKnowledgeSourceUrls;
    let txtUrls;

    let chkExistingCriteria;
    let lookupCriteria;

    let chkTextMinedData;
    let lookupTextMined;

    let chkTextContent;
    let txtContent;

    let chkManualInput;

    let btnGenerate;

    let _data = {};

    construct();

    function construct()
    {
        frm = new FormPanel({ Id: cfg.Id });

        let tabindex = 0;

        txtName = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtName"), Name: "Name", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Expert System Name",
                Note: "Expert System Name", Theme: cfg.Theme, MaximumValue: 255, TabIndex: tabindex
            }
        );
        frm.Body.Add(txtName);
        tabindex++;

        ddlInferenceType = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("ddlInferenceType"), Name: "InferenceType", InputType: InputType.Select, Required: true, StatusType: StatusType.Edit, Label: "Inference Type",
                MinimumValue: 0, MaximumValue: DataType.Int.Max, Note: "Decision Method / Mathematic Calculation Formula", TabIndex: tabindex, AddDefaultOption: true,
                Recursive: true, ReferenceName: null, ReferenceColumn: null, Options: _schema.Columns.find(x => x.Name == "InferenceType").Options
            }
        );
        frm.Body.Add(ddlInferenceType);
        tabindex++;

        ddlExtractionType = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("ddlExtractionType"), Name: "ExtractionType", InputType: InputType.Select, Required: false, StatusType: StatusType.Edit, Label: "ExtractionType",
                MinimumValue: 0, MaximumValue: DataType.Int.Max, Note: "Extraction Type", TabIndex: tabindex, AddDefaultOption: false,
                Recursive: false, Options: ["Indication", "Information", "Question"]
            }
        );
        frm.Body.Add(ddlExtractionType);
        tabindex++;

        lblKnowledgeAcquisitionType = Inputs.CreateFormGroup("lblKnowledgeAcquisitionType", "KnowledgeAcquisitionType", "Knowledge Acquisition Type", "Knowledge Acquisition Type", true);
        frm.Body.Add(lblKnowledgeAcquisitionType);
        tabindex++;

        chkKnowledgeSourceDocuments = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkKnowledgeSourceDocuments"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Knowledge Source from Documents", Note: "Knowledge source from uploaded documents, upload multiple documents of a specific area of expertise in .txt format. Note that the documents have to be in the English language.", TabIndex: tabindex });
        chkKnowledgeSourceDocuments.Input.onchange = function (e)
        {
            if (chkKnowledgeSourceDocuments.Input.checked)
            {
                fuDocs.removeAttribute("hidden");
            }
            else
            {
                fuDocs.setAttribute("hidden", "");
                fuDocs.Reset();
            }
        };
        lblKnowledgeAcquisitionType.appendChild(chkKnowledgeSourceDocuments);
        tabindex++;

        fuDocs = Inputs.CreateInput(
            {
                Id: cfg.Id.concat("_fuDocs"), Name: "UploadDocuments", InputType: InputType.File, Required: false, StatusType: StatusType.Multiple, Label: "Upload Documents",
                Note: "Upload Documents", Theme: cfg.Theme, TabIndex: tabindex, AcceptFileTypes: ".txt"
            }
        );
        tabindex++;
        chkKnowledgeSourceDocuments.appendChild(fuDocs);
        fuDocs.setAttribute("hidden", "");

        chkKnowledgeSourceGoogleSearch = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkKnowledgeSourceGoogleSearch"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Knowledge Source from Google", Note: "Knowledge Source from Google Search Results, the accuracy depends on the source site you set up in the expertise areas section: GoogleSearchKey and GoogleCxKey.", TabIndex: tabindex });
        chkKnowledgeSourceGoogleSearch.Input.onchange = function (e)
        {
            if (chkKnowledgeSourceGoogleSearch.Input.checked)
            {
                txtKeywords.removeAttribute("hidden");
                txtGoogleSearchKey.removeAttribute("hidden");
                txtGoogleCxKey.removeAttribute("hidden");
            }
            else
            {
                txtKeywords.setAttribute("hidden", "");
                txtGoogleSearchKey.setAttribute("hidden", "");
                txtGoogleCxKey.setAttribute("hidden", "");
                txtKeywords.value = "";
                txtGoogleSearchKey.value = "";
                txtGoogleCxKey.value = "";
            }
        };
        lblKnowledgeAcquisitionType.appendChild(chkKnowledgeSourceGoogleSearch);
        tabindex++;

        txtKeywords = Inputs.CreateInput(
            {
                Id: cfg.Id.concat("_txtKeywords"), Name: "Keywords", InputType: InputType.Text, Required: false, StatusType: StatusType.Edit, Label: "Keywords",
                Note: "Keywords", Theme: cfg.Theme, TabIndex: tabindex
            }
        );
        tabindex++;
        chkKnowledgeSourceGoogleSearch.appendChild(txtKeywords);
        txtKeywords.setAttribute("hidden", "");

        txtGoogleSearchKey = Inputs.CreateInput(
            {
                Id: cfg.Id.concat("_txtGoogleSearchKey"), Name: "GoogleSearchKey", InputType: InputType.Text, Required: false, StatusType: StatusType.Edit, Label: "Google Search Key",
                Note: "Google Search Key", Theme: cfg.Theme, TabIndex: tabindex
            }
        );
        tabindex++;
        chkKnowledgeSourceGoogleSearch.appendChild(txtGoogleSearchKey);
        txtGoogleSearchKey.setAttribute("hidden", "");

        txtGoogleCxKey = Inputs.CreateInput(
            {
                Id: cfg.Id.concat("_txtGoogleCxKey"), Name: "GoogleCxKey", InputType: InputType.Text, Required: false, StatusType: StatusType.Edit, Label: "Google Cx Key",
                Note: "Google Cx Key", Theme: cfg.Theme, TabIndex: tabindex
            }
        );
        tabindex++;
        chkKnowledgeSourceGoogleSearch.appendChild(txtGoogleCxKey);
        txtGoogleCxKey.setAttribute("hidden", "");

        chkKnowledgeSourceUrls = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkKnowledgeSourceUrls"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Knowledge Source from URL", Note: "Split with comma to enter multiple URLs. Note that the documents have to be in the English language.", TabIndex: tabindex });
        chkKnowledgeSourceUrls.Input.onchange = function (e)
        {
            if (chkKnowledgeSourceUrls.Input.checked)
            {
                txtUrls.removeAttribute("hidden");
            }
            else
            {
                txtUrls.setAttribute("hidden", "");
            }
        };
        lblKnowledgeAcquisitionType.appendChild(chkKnowledgeSourceUrls);
        tabindex++;

        txtUrls = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtUrls"), Name: "URL", InputType: InputType.Text, Required: false, StatusType: StatusType.Edit, Label: "URL",
                Note: "Project Name", Theme: cfg.Theme, MaximumValue: 1024, TabIndex: tabindex
            }
        );
        tabindex++;
        chkKnowledgeSourceUrls.appendChild(txtUrls);
        txtUrls.setAttribute("hidden", "");

        chkTextMinedData = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkTextMinedData"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Existing Text Mined Data", Note: "Knowledge source from existing Text Mined Data.", TabIndex: tabindex });
        chkTextMinedData.Input.onchange = function (e)
        {
            if (chkTextMinedData.Input.checked)
            {
                lookupTextMined.removeAttribute("hidden");
            }
            else
            {
                lookupTextMined.setAttribute("hidden", "");
                lookupTextMined.Clear();
            }
        };
        lblKnowledgeAcquisitionType.appendChild(chkTextMinedData);
        tabindex++;

        lookupTextMined = Inputs.CreateInput(
            {
                Id: cfg.Id.concat("lookupTextMined"),
                Name: "aisTmId",
                InputType: InputType.Lookup,
                Required: true,
                StatusType: StatusType.Select,
                Label: "Text Mined Subject",
                MinimumValue: 0,
                MaximumValue: DataType.Int.Max,
                Step: 0,
                ReferenceSchema: new aisTm(),
                ReferenceColumn: "aisTmId",
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
                    _data.aisTmId = Number(value);
                },
                OnLookupAdd: function (frmpanel)
                {
                    let data = frmpanel.GetData();
                    criteriaCtrl.Save(data);
                },
                OnLookup: function (e, paneltable)
                {
                    tmCtrl.GetSubjects(
                        function (results)
                        {
                            paneltable.LoadData(results);
                            lookupTextMined.SetSelectedItems();
                        }
                    );
                }
            }
        );
        chkTextMinedData.appendChild(lookupTextMined);
        lookupTextMined.setAttribute("hidden", "");
        tabindex++;

        chkExistingCriteria = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkExistingCriteria"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Existing Criteria", Note: "Knowledge source from existing Subject Matter Criterions.", TabIndex: tabindex });
        chkExistingCriteria.Input.onchange = function (e)
        {
            if (chkExistingCriteria.Input.checked)
            {
                lookupCriteria.removeAttribute("hidden");
            }
            else
            {
                lookupCriteria.setAttribute("hidden", "");
                lookupCriteria.Clear();
            }
        };
        lblKnowledgeAcquisitionType.appendChild(chkExistingCriteria);
        tabindex++;

        lookupCriteria = Inputs.CreateInput(
            {
                Id: cfg.Id.concat("lookupCriteria"),
                Name: "aisCriteriaId",
                InputType: InputType.Lookup,
                Required: true,
                StatusType: StatusType.Select,
                Label: "Criteria",
                MinimumValue: 0,
                MaximumValue: DataType.Int.Max,
                Step: 0,
                ReferenceSchema: new aisCriteria(),
                ReferenceColumn: "Id",
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
                },
                OnLookupAdd: function (frmpanel)
                {
                    let data = frmpanel.GetData();
                    criteriaCtrl.Save(data);
                },
                OnLookup: function (e, paneltable)
                {
                    criteriaCtrl.GetCriterias(null, Kenviro.CriteriaType.ExpertSystem,
                        function (results)
                        {
                            let list = Utils.ArrangeRecursiveList(results, "aisCriteriaId", "Id", "Name", null, 0);
                            paneltable.LoadData(list);
                            lookupCriteria.SetSelectedItems();
                        }
                    );
                }
            }
        );
        chkExistingCriteria.appendChild(lookupCriteria);
        lookupCriteria.setAttribute("hidden", "");
        tabindex++;

        chkTextContent = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkTextContent"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Text Content", Note: "Type of paste text content here. Note that the documents have to be in the English language.", TabIndex: tabindex });
        chkTextContent.Input.onchange = function (e)
        {
            if (chkTextContent.Input.checked)
            {
                txtContent.removeAttribute("hidden");
            }
            else
            {
                txtContent.setAttribute("hidden", "");
            }
        };
        lblKnowledgeAcquisitionType.appendChild(chkTextContent);
        tabindex++;

        txtContent = Inputs.CreateInput(
            {
                Id: cfg.Id.concat("txtContent"), Name: "TextContent", InputType: InputType.TextArea, Required: false, StatusType: StatusType.Edit, Label: "Text Content",
                Note: "Paste text here", Theme: cfg.Theme, MaximumValue: 1024, TabIndex: tabindex
            }
        );
        tabindex++;
        chkTextContent.appendChild(txtContent);
        txtContent.setAttribute("hidden", "");

        chkManualInput = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkManualInput"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Manual Input", Note: "Manual Input on next step.", TabIndex: tabindex });
        lblKnowledgeAcquisitionType.appendChild(chkManualInput);
        tabindex++;

        frm.Body.Load();

        btnGenerate = Inputs.CreateButton({
            Id: cfg.Id.concat("btnGenerate"), Name: " Generate", ButtonType: ButtonType.Submit, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-unlock-alt", Label: "Generate",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                submit();
            }
        });

        frm.AddButton(btnGenerate);

        txtName.Input.focus();
    }

    function submit()
    {
        _data.Name = txtName.Input.value;
        _data.InferenceType = ddlInferenceType.Input.value;
        let checkedOptions = 0;
        if (chkKnowledgeSourceDocuments.Input.checked)
        {
            _data.AutomatedFromFiles = true;
            let listFiles = fuDocs.GetFiles();
            _data.Files = listFiles;
            _data.InformationExtractionType = ddlExtractionType.Input.value;
            checkedOptions++;
        }

        if (chkKnowledgeSourceGoogleSearch.Input.checked)
        {
            _data.AutomatedFromGoogle = true;
            _data.Keywords = txtKeywords.Input.value;
            _data.GoogleSearchKey = txtGoogleSearchKey.Input.value;
            _data.GoogleCxKey = txtGoogleCxKey.Input.value;
            checkedOptions++;
        }

        if (chkKnowledgeSourceUrls.Input.checked)
        {
            _data.AutomatedFromUrls = true;
            _data.Urls = txtUrls.Input.value;
            checkedOptions++;
        }

        if (chkTextMinedData.Input.checked)
        {
            _data.ImportFromTextMined = true;
            _data.aisTmId = lookupTextMined.GetValue();
            checkedOptions++;
        }

        if (chkExistingCriteria.Input.checked)
        {
            _data.FromExistingCriteria = true;
            _data.aisCriteriaId = lookupCriteria.GetValue();
            checkedOptions++;
        }

        if (chkManualInput.Input.checked)
        {
            _data.ManualInput = true;
            checkedOptions++;
        }

        if (chkTextContent.Input.checked)
        {
            _data.FromTextContent = txtContent.value;
            checkedOptions++;
        }

        if (checkedOptions == 0)
        {
            MsgBox.Show("Please select an Acquisition Type");
            return;
        }

        MsgLoading.LockPanel(frm.Body, "Please wait ...");
        esCtrl.Generate(_data,
            function (result)
            {
                if (result == null || result == 0)
                {
                    MsgLoading.UnlockPanel(frm.Body);
                    MsgBox.Show("Process Failed " + new Date().toLocaleString());
                    return;
                }
                else if (result == 1)
                {
                    MsgLoading.UnlockPanel(frm.Body);
                    MsgBox.Show("Process Succeed " + new Date().toLocaleString());
                    const esfrm = new EsForm(
                        {
                            Id: "expertsystem",
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
                    let tabform = cfg.Desktop.Add("", "expertsystem", esfrm);
                    esfrm.SetDesktopTab(tabform);
                }
                else if (result == 2)
                {
                    MsgBox.Show("Text mining process still in progress and it will not appear on the Expert Systems list until it finished. You will receive a notification when it finished. Meanwhile, you can leave this screen and continue with the other task.");
                    if (chkManualInput.Input.checked)
                    {
                        MsgLoading.UnlockPanel(frm.Body);
                        criteriaTreeViewClick();
                    }
                    return;
                }

                if (chkManualInput.Input.checked)
                {
                    criteriaTreeViewClick();
                }

            }
        );

    }

    function criteriaTreeViewClick()
    {
        const frm = new CriteriaTreeview(
            {
                Id: "criterias",
                Code: "criterias",
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
        let tabform = cfg.Desktop.Add("", "criterias", frm);
    }


    return frm;
};