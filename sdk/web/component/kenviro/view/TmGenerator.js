var TmGenerator = function TmGenerator(cfg)
{
    let esCtrl = new TextMiningController({ Connector: cfg.Connector });

    let frm = {};

    //let _schema = new aisTm();

    let txtName;
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

    let chkTextContent;
    let txtContent;

    let btnGenerate;

    let _data = {};

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
        //frm.Body.appendChild(document.createElement("br"));
        //frm.Body.appendChild(document.createElement("br"));

        let tabindex = 0;

        txtName = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtName"), Name: "Name", InputType: InputType.Text, Required: true, StatusType: StatusType.Edit, Label: "Subject Name",
                Note: "Subject Name", Theme: cfg.Theme, MaximumValue: 255, TabIndex: tabindex
            }
        );
        frm.Body.Add(txtName);
        tabindex++;

        ddlExtractionType = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("ddlExtractionType"), Name: "ExtractionType", InputType: InputType.Select, Required: false, StatusType: StatusType.Edit, Label: "ExtractionType",
                MinimumValue: 0, MaximumValue: DataType.Int.Max, Note: "Extraction Type", TabIndex: tabindex, AddDefaultOption: false,
                Recursive: false, Options: ["Information", "Indication", "Question"]
            }
        );
        frm.Body.Add(ddlExtractionType);
        tabindex++;

        lblKnowledgeAcquisitionType = Inputs.CreateFormGroup("lblKnowledgeAcquisitionType", "KnowledgeAcquisitionType", "Text Sources Type", "Text Sources Type", true);
        frm.Body.Add(lblKnowledgeAcquisitionType);

        chkKnowledgeSourceDocuments = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkKnowledgeSourceDocuments"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Text Source from Documents", Note: "Text source from uploaded documents, upload multiple documents of a specific area of expertise in .txt format. Note that the documents have to be in the English language.", TabIndex: tabindex });
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

        chkKnowledgeSourceGoogleSearch = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkKnowledgeSourceGoogleSearch"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Text Source from Google", Note: "Text Source from Google Search Results, the accuracy depends on the source site you set up in the expertise areas section: GoogleSearchKey and GoogleCxKey.", TabIndex: tabindex });
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

        chkKnowledgeSourceUrls = Inputs.CreateFormInput({ Id: cfg.Id.concat("chkKnowledgeSourceUrls"), InputType: InputType.CheckBox, StatusType: StatusType.Edit, Label: "Text Source from URL", Note: "Split with comma to enter multiple URLs. Note that the documents have to be in the English language.", TabIndex: tabindex });
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

        txtUrls = Inputs.CreateInput(
            {
                Id: cfg.Id.concat("txtUrls"), Name: "URL", InputType: InputType.Text, Required: false, StatusType: StatusType.Edit, Label: "URL",
                Note: "Project Name", Theme: cfg.Theme, MaximumValue: 1024, TabIndex: tabindex
            }
        );
        tabindex++;
        chkKnowledgeSourceUrls.appendChild(txtUrls);
        txtUrls.setAttribute("hidden", "");

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

        frm.Body.Load();

        btnGenerate = Inputs.CreateButton({
            Id: cfg.Id.concat("btnGenerate"), Name: " Compute", ButtonType: ButtonType.Submit, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-paper-plane", Label: "Compute",
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
            _data.Keywords = txtKeywords.value;
            _data.GoogleSearchKey = txtGoogleSearchKey.value;
            _data.GoogleCxKey = txtGoogleCxKey.value;
            checkedOptions++;
        }

        if (chkKnowledgeSourceUrls.Input.checked)
        {
            _data.AutomatedFromUrls = true;
            _data.Urls = txtUrls.value;
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

        MsgLoading.LockPanel(frm.Body, "This process will take approximately 10 mins to hours depends on the size of the text. You can leave this screen, you will be notified when it finished");
        esCtrl.Generate(_data,
            function (item)
            {
                if (item == null)
                {
                    MsgLoading.UnlockPanel(frm.Body);
                    MsgBox.Show("Process Failed " + new Date().toLocaleString());
                    return;
                }
                else if (item == 2)
                {
                    MsgBox.Show("Text mining process still in progress. You will receive a notification when it finished. Meanwhile, you can leave this screen and continue with the other task.");
                    return;
                }
                else if (item == 1)
                {
                    MsgLoading.UnlockPanel(frm.Body);
                    MsgBox.Show("Process Succeed " + new Date().toLocaleString());

                    const frmItem = new TmForm(
                        {
                            Id: "textminingform_" + item.Id,
                            Code: "textminingform",
                            Connector: cfg.Connector,
                            Theme: cfg.Theme,
                            Desktop: cfg.Desktop,
                            User: cfg.User,
                            CdnUrl: cfg.CdnUrl,
                            WebBaseUrl: cfg.WebBaseUrl,
                            Data: item,
                            GetServerTime: cfg.GetServerTime
                        }
                    );
                    let tabform = cfg.Desktop.Add(item.Id, "textminingform", frmItem);
                    frmItem.SetDesktopTab(tabform);
                }
                else
                {
                    MsgLoading.UnlockPanel(frm.Body);
                    MsgBox.Show("Unknown error");
                    return;
                }
            }
        );

    }

    return frm;
};