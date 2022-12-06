var SqlJsonEditor = function SqlJsonEditor(cfg)
{
    let noteCtrl = new NoteController({ Connector: cfg.Connector });

    let frm;
    let txtSource;
    let btnSubmit;
    let btnCopy;
    let btnPaste;
    let btnClearCode;
    let btnClearLog;
    let btnSave;
    let iframesrc;

    construct();


    function construct()
    {
        frm = new FormPanel({ Id: cfg.Id });
        let tabindex = 0;

        txtSource = Inputs.CreateFormInput(
            {
                Id: cfg.Id.concat("txtSource"),
                Name: "txtSource",
                InputType: InputType.Javascript,
                Required: false,
                StatusType: StatusType.Edit,
                Label: "Code",
                MaximumValue: DataType.Int.Max,
                Note: "Code API Fiddle",
                Rows: 100,
                OnChange: function (e, value)
                {
                },
            }
        );
        frm.Body.Add(txtSource);

        frm.Body.Load();

        btnSubmit = Inputs.CreateButton({
            Id: cfg.Id.concat("btnSubmit"), Name: " Execute", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-paper-plane", Label: "Execute",
            OnClick: function (e)
            {
                if (!frm.IsValid())
                {
                    return;
                }
                submit();
            }
        });
        btnSubmit.classList.add("disabled");
        frm.Body.appendChild(btnSubmit);
        tabindex++;

        btnCopy = Inputs.CreateButton({
            Id: cfg.Id.concat("btnCopy"), Name: " Copy", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-copy", Label: "Copy",
            OnClick: function (e)
            {
                copy();
            }
        })
        frm.Body.appendChild(btnCopy);
        tabindex++;

        btnPaste = Inputs.CreateButton({
            Id: cfg.Id.concat("btnPaste"), Name: " Paste", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-paste", Label: "Paste",
            OnClick: function (e)
            {
                paste();
            }
        })
        frm.Body.appendChild(btnPaste);
        tabindex++;

        btnClearCode = Inputs.CreateButton({
            Id: cfg.Id.concat("btnClearCode"), Name: " Clear Code", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-sync", Label: "Clear Code",
            OnClick: function (e)
            {
                txtSource.Input.Editor.setValue('');
            }
        })
        frm.Body.appendChild(btnClearCode);
        tabindex++;

        btnClearLog = Inputs.CreateButton({
            Id: cfg.Id.concat("btnClearLog"), Name: " Clear Logs", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-sync", Label: "Clear Logs",
            OnClick: function (e)
            {
                iframesrc.contentWindow.location.reload();
            }
        })
        frm.Body.appendChild(btnClearLog);
        tabindex++;

        btnSave = Inputs.CreateButton({
            Id: cfg.Id.concat("btnSave"), Name: " Save", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, TabIndex: tabindex,
            Icon: "fas fa-save", Label: "Save",
            OnClick: function (e)
            {
                save();
            }
        })
        frm.Body.appendChild(btnSave);
        tabindex++;

        frm.Body.appendChild(document.createElement("br"));
        frm.Body.appendChild(document.createTextNode("Output: "));
        frm.Body.appendChild(document.createElement("br"));

        iframesrc = document.createElement("iframe");
        iframesrc.setAttribute("id", cfg.Id.concat("iframesrc"));
        iframesrc.setAttribute("style", "width:98vw; height: 50vh;");
        iframesrc.setAttribute("src", cfg.DebuggerHtml);
        iframesrc.onload = function (e)
        {
            setTimeout(function () { btnSubmit.classList.remove("disabled"); }, 1000);
        };
        frm.Body.appendChild(iframesrc);

        txtSource.Input.Editor.setSize("98vw", "50vh");
    }

    function createSchema()
    {
        let schema = {
            Name: "SqlJsonEditorSchema",
            Label: "Sql Json Editor Schema",
            Columns: [
                {
                    StatusType: StatusType.Hidden,
                    Name: "Id",
                    InputType: InputType.Number,
                    Required: true,
                    KeyType: KeyType.Primary,
                    MinimumValue: DataType.Int.Min,
                    MaximumValue: DataType.Int.Max,
                    DecimalPoint: 0,
                    DefaultValue: 0,
                    Label: "Id",
                    Note: "Id",
                    ReferenceSchema: null,
                    ReferenceColumn: null,
                    ReferenceName: null,
                    Options: null
                },
                {
                    StatusType: StatusType.Edit,
                    Name: "Name",
                    InputType: InputType.Text,
                    Required: true,
                    KeyType: "",
                    MinimumValue: 0,
                    MaximumValue: 255,
                    DecimalPoint: null,
                    DefaultValue: null,
                    Label: "Name",
                    Note: "Name",
                    ReferenceSchema: null,
                    ReferenceColumn: null,
                    ReferenceName: null,
                    Options: null,
                },
                {
                    StatusType: StatusType.Hidden,
                    Name: "Content",
                    InputType: InputType.TextArea,
                    Required: true,
                    KeyType: "",
                    MinimumValue: 0,
                    MaximumValue: 255,
                    DecimalPoint: null,
                    DefaultValue: null,
                    Label: "Name",
                    Note: "Name",
                    ReferenceSchema: null,
                    ReferenceColumn: null,
                    ReferenceName: null,
                    Options: null,
                },
                {
                    StatusType: StatusType.Hidden,
                    Name: "CategoryId",
                    InputType: InputType.Number,
                    Required: true,
                    KeyType: KeyType.Primary,
                    MinimumValue: DataType.Int.Min,
                    MaximumValue: DataType.Int.Max,
                    DecimalPoint: 0,
                    DefaultValue: 0,
                    Label: "Category ",
                    Note: "Category",
                    ReferenceColumn: "CategoryId",
                    ReferenceName: "Name",
                    Options: null
                },
            ]
        };
        return schema;
    }

    function submit()
    {
        let src = txtSource.Input.Editor.getValue();
        iframesrc.contentWindow.eval(src);
    }

    function copy()
    {
        let src = txtSource.Input.Editor.getValue();
        Utils.CopyStringToClipboard(src);
    }

    function save()
    {
        if (cfg.User == null)
        {
            MsgBox.Show("Please login to save the code");
            return;
        }

        let src = txtSource.Input.Editor.getValue();
        let filename = prompt("File name");
        noteCtrl.Save(filename, src,
            function (result)
            {
                if (result == null)
                {
                    MsgBox.Show("Save Failed");
                    return;
                }

            }
        );
    }

    async function paste()
    {
        const text = await navigator.clipboard.readText();
        txtSource.Input.Editor.setValue(text);
    }


    frm.GetSchema = function ()
    {
        let schema = createSchema();
        return schema;
    };

    frm.SetCode = function (code)
    {
        txtSource.Input.Editor.setValue(code);
    };

    return frm;
};