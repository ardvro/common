var MlForm = function MlForm(cfg)
{
    let mlnCtrl = new MachineLearningController({ Connector: cfg.Connector });

    //let btnSubmit;
    let btnUpload;
    let btnLearning;
    let filePicker;

    let btnUploadTest;
    //let btnSubmitTest;
    let filePickerTest;


    let _schema = new aisMl();

    construct();

    function construct()
    {
        let tabindex = _schema.Columns.length + 1;

        frm = new FrameForm(
            {
                Id: cfg.Id,
                Code: cfg.Code,
                Label: "Create Machine Learning",
                StatusType: StatusType.Edit,
                DeepJoin: false,
                ShowLabel: false,
                AddDefaultOption: false,
                AllowSelectParent: false,
                EnableAssociation: false,
                Schema: _schema,
                PageSize: DEFAULT_PAGE_SIZE,
                Desktop: cfg.Desktop,
                DesktopItemType: DesktopItemType.Desktop,
                FrameType: FrameType.Bordered,
                ReferenceType: ReferenceType.Struct,
                Connector: cfg.Connector,
                Theme: cfg.Theme,
                Data: cfg.Data,
                User: cfg.User,
                FormColumns: 4,
                ContentUrl: null,
                QueryMode: QueryMode.Struct,
                QueryFunction: null,
                GetServerTime: cfg.GetServerTime,
                GetLookupDataFunction: function (dbtable, grid)
                {
                },
                GetDataFunction: function (onResponse)
                {
                    find(cfg.Data.Id);
                },
                SaveDataFunction: function (data, onResponse)
                {
                    saveData(data, mlnCtrl, frm);
                },
                DeleteDataFunction: function (data, onResponse)
                {
                    deleteData(data, mlnCtrl, frm);
                }
            }
        );

        if (cfg.Data == null)
        {
            cfg.Data = {};
        }

        if (cfg.Data.Id != null && cfg.Data.Id != 0)
        {
            find(cfg.Data.Id);
            tabindex = createButtons(tabindex);
        }
    }

    function createButtons(tabindex)
    {
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
                upload();
            }
        });
        frm.Body.appendChild(filePicker);
        //tabindex++;

        filePickerTest = Inputs.CreateInput({
            Id: cfg.Id.concat('_uploadtest'),
            Name: "UploadDataTest",
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
                compute();
            }

        });
        frm.Body.appendChild(filePickerTest);
        //tabindex++;

        btnUpload = Inputs.CreateButton({
            Id: cfg.Id.concat("btnUpload"), Name: " 2. Browse and Submit Training Files", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-upload", Label: "Step 2. Browse and Submit Training Files",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                filePicker.Open();
            }
        });
        frm.Body.appendChild(btnUpload);
        tabindex++;

        /*btnSubmit = Inputs.CreateButton({
            Id: cfg.Id.concat("btnSubmit"), Name: " 3. Submit Training Files", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-paper-plane", Label: "Step 3. Submit Training Files",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                upload();
            }
        });
        frm.Body.appendChild(btnSubmit);
        tabindex++;*/

        btnLearning = Inputs.CreateButton({
            Id: cfg.Id.concat("btnLearning"), Name: " 3. Learning", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-microchip", Label: "Step 3. Learning",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                learning(frm.GetData().Id, mlnCtrl, frm, _schema);
            }
        });
        frm.Body.appendChild(btnLearning);
        tabindex++;

        btnUploadTest = Inputs.CreateButton({
            Id: cfg.Id.concat("btnUploadTest"), Name: " 4. Browse and Compute Test Data", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-diagnoses", Label: "Step 4. Browse and Compute Test Data",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                filePickerTest.Open();
            }
        });
        frm.Body.appendChild(btnUploadTest);
        tabindex++;

        /*btnSubmitTest = Inputs.CreateButton({
            Id: cfg.Id.concat("btnSubmitTest"), Name: " 6. Compute Test Data", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-paper-plane", Label: "6. Compute Test Data",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                compute();
            }
        });
        frm.Body.appendChild(btnSubmitTest);
        tabindex++;*/


        return tabindex;
    }

    function saveData(data, mlnCtrl, frm, onResponse)
    {
        if (!frm.IsValid())
        {
            return;
        }

        mlnCtrl.Save(data,
            function (result)
            {
                if (result == null)
                {
                    MsgBox.Show("Process Failed");
                    return;
                }

                frm.SetStateSucceed();
                frm.LoadData(result, frm.GetSchema());
                createButtons(frm.GetSchema().Columns.length);
                if (result.Datasets != null)
                {
                    let pnltbl = createPanelTableDatasets(result.Datasets);
                    frm.Body.appendChild(pnltbl);
                }

                if (onResponse != null)
                {
                    onResponse(result);
                }
            }
        );
    }

    function deleteData(data, mlnCtrl, frm)
    {
        mlnCtrl.Delete(data);
        frm.Close();
    }

    function upload()
    {
        let jsonFilesbase64Content = filePicker.GetValue();

        let data = frm.GetData();
        let list = [];

        if (data.DataType == "Image")
        {
            let datalabel = "";
            if (data.DataType == "Image" && data.DataType == "Backpropagation")
            {
                datalabel = window.prompt("Dataset Label in Number");
            }

            let uploadedfiles = JSON.parse(jsonFilesbase64Content);
            uploadedfiles.forEach(
                function (file, index)
                {
                    let item = {
                        Name : file.Name,
                        Type: file.Type,
                        Code: datalabel,
                        Content: ''
                    };

                    let filecontentparts = file.Content.split(/,/g);
                    if (filecontentparts.length > 1)
                    {
                        item.Content = filecontentparts[1];
                    }
                    list.push(item);
                }
            );
        }
        else if (data.DataType == "Matrix")
        {
            list = DataUtils.FilesToData(jsonFilesbase64Content, "DssCsvSchema", 0, 0,
                function (strErrors)
                {
                    if (strErrors !== "")
                    {
                        MsgBox.Show("Invalid row format: <br /><br />" + strErrors);
                        filePicker.Reset();
                    }
                }
            );
        }

        if (list == null || list.length == 0)
        {
            MsgBox.Show("Invalid Format");
            return;
        }

        let box = {
            Data: data,
            List: list,
        };

        MsgLoading.LockPanel(frm, "Uploading ... ");
        mlnCtrl.Import(box,
            function (result)
            {
                MsgLoading.UnlockPanel(frm);

                if (result == null)
                {
                    MsgBox.Show("Import Failed");
                    return;
                }

                find(data.Id);

                MsgBox.Show("Upload succeed " + new Date().toLocaleString());
            }
        );
    }

    function learning(id, mlnCtrl, frm, schema)
    {
        MsgLoading.LockPanel(frm, "Learning ...");
        mlnCtrl.Learning(id,
            function (result)
            {
                MsgLoading.UnlockPanel(frm);
                if (result == null)
                {
                    MsgBox.Show("Failed");
                }

                frm.LoadData(result, schema);
                frm.SetStateSucceed();
                createButtons(schema.Columns.length);
                let pnltbl = createPanelTableDatasets(result.Datasets);
                frm.Body.appendChild(pnltbl);

                MsgBox.Show("Learning finished " + new Date().toLocaleString());
            }
        );
    }

    function compute()
    {
        let jsonFilesbase64Content = filePickerTest.GetValue();

        let data = frm.GetData();
        let list = [];

        if (data.DataType == "Image")
        {
            let uploadedfiles = JSON.parse(jsonFilesbase64Content);
            uploadedfiles.forEach(
                function (file, index)
                {
                    let item = {
                        Name: file.Name,
                        Type: file.Type,
                        Content: ''
                    };

                    let filecontentparts = file.Content.split(/,/g);
                    if (filecontentparts.length > 1)
                    {
                        item.Content = filecontentparts[1];
                    }
                    list.push(item);
                }
            );
        }
        else if (data.DataType == "Matrix")
        {
            list = DataUtils.FilesToData(jsonFilesbase64Content, "DssCsvSchema", 0, 1,
                function (strErrors)
                {
                    if (strErrors !== "")
                    {
                        MsgBox.Show("Invalid row format: <br /><br />" + strErrors);
                        filePicker.Reset();
                    }
                }
            );
        }

        if (list == null || list.length == 0)
        {
            MsgBox.Show("Invalid Format");
            return;
        }

        let box = {
            Data: data,
            List: list,
        };

        MsgLoading.LockPanel(frm, "Computing ...");
        mlnCtrl.Compute(box,
            function (result)
            {
                MsgLoading.UnlockPanel(frm);
                if (result == null)
                {
                    MsgBox.Show("Import Failed");
                    return;
                }

                let pnltbl = createPanelTableLogs(data.DataType, result);
                frm.Body.appendChild(pnltbl);

                MsgBox.Show("Compute succeed " + new Date().toLocaleString());
            }
        );
    }

    function find(id)
    {
        mlnCtrl.Find(id,
            function (result)
            {
                frm.LoadData(result, _schema);
                frm.SetStateSucceed();
                tabindex = createButtons(_schema.Columns.length);
                let pnltbl = createPanelTableDatasets(result.Datasets);
                frm.Body.appendChild(pnltbl);

                let pnltbllogs = createPanelTableLogs(result.DataType, result.Logs);
                frm.Body.appendChild(pnltbllogs);

            }
        );
    }

    function createPanelTableDatasets(list)
    {
        if (list == null)
        {
            return;
        }

        let pnlTable = new PanelTable({
            Id: "mldatesets",
            Label: "Datasets",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: true,
            AllowSort: false,
            Schema: {
                Columns: [
                    {
                        StatusType: StatusType.Hidden,
                        Name: "aisMlId",
                        InputType: InputType.Lookup,
                        Required: true,
                        KeyType: "",
                        MinimumValue: 0,
                        MaximumValue: DataType.Int.Max,
                        DecimalPoint: null,
                        DefaultValue: null,
                        Label: "ProjectId",
                        Note: "ProjectId",
                        ReferenceSchema: new aisMl(),
                        ReferenceColumn: "Id",
                        ReferenceName: "Name",
                        Options: null,
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "Code",
                        InputType: InputType.Text,
                        Required: true,
                        KeyType: "",
                        MinimumValue: 0,
                        MaximumValue: 36,
                        DecimalPoint: null,
                        DefaultValue: null,
                        Label: "Target",
                        Note: "Target",
                        ReferenceSchema: null,
                        ReferenceColumn: null,
                        ReferenceName: null,
                        Options: null,
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "DatasetsCount",
                        InputType: InputType.Number,
                        Required: true,
                        KeyType: "",
                        MinimumValue: 0,
                        MaximumValue: DataType.Int.Max,
                        DecimalPoint: null,
                        DefaultValue: null,
                        Label: "Count",
                        Note: "Count",
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

    function createPanelTableLogs(datatype, list)
    {
        let inputType = InputType.Text;
        if (datatype == "Image")
        {
            inputType = InputType.File;

            list.forEach(
                function (item, index)
                {
                    let files = [];
                    let file = {
                        result: "data:image/jpeg;base64," + item.Content,
                        name: item.Code,
                        Type: "jpeg"
                    };
                    files.push(file);

                    item.Content = JSON.stringify(files);
                }
            );
        }

        let pnlTable = new PanelTable({
            Id: "mltestlogs",
            Label: "Test Logs",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: true,
            AllowSort: false,
            Schema: {
                Columns: [
                    {
                        StatusType: StatusType.Hidden,
                        Name: "aisMlId",
                        InputType: InputType.Lookup,
                        Required: true,
                        KeyType: "",
                        MinimumValue: 0,
                        MaximumValue: DataType.Int.Max,
                        DecimalPoint: null,
                        DefaultValue: null,
                        Label: "ProjectId",
                        Note: "ProjectId",
                        ReferenceSchema: new aisMl(),
                        ReferenceColumn: "Id",
                        ReferenceName: "Name",
                        Options: null,
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "Data",
                        InputType: inputType,
                        Required: true,
                        KeyType: "",
                        MinimumValue: 0,
                        MaximumValue: DataType.Int.Max,
                        DecimalPoint: null,
                        DefaultValue: null,
                        Label: "Data",
                        Note: "Data",
                        ReferenceSchema: null,
                        ReferenceColumn: null,
                        ReferenceName: null,
                        Options: null,
                    },
                    {
                        StatusType: StatusType.View,
                        Name: "Code",
                        InputType: InputType.Text,
                        Required: true,
                        KeyType: "",
                        MinimumValue: 0,
                        MaximumValue: 36,
                        DecimalPoint: null,
                        DefaultValue: null,
                        Label: "Target",
                        Note: "Target",
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


    return frm;
}