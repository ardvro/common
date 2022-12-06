var FileAssemblyForm = function FileAssemblyForm(cfg)
{
    let _adminCtrl = new AdminController({ Connector: cfg.Connector });

    let frm = new DataForm(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: "",
            Theme: cfg.Theme,
            StatusType: StatusType.Edit,
            ShowLabel: false,
            AddDefaultOption: true,
            AllowSelectParent: false,
            EnableAssociation: false,
            Schema: new genFile(),
            PageSize: 10,
            FrameType: FrameType.Bordered,
            ReferenceType: ReferenceType.Struct,
            Connector: cfg.Connector,
            Desktop: cfg.Desktop,
            DesktopItemType: DesktopItemType.Desktop,
            Data: cfg.Data,
            User: cfg.User,
            GetServerTime: cfg.GetServerTime,
            WebsiteSetting: cfg.WebsiteSetting,
            FormColumns: 2,
            QueryMode: QueryMode.Json,
            QueryFunction: null,
            OnSave: function (data, ctrl)
            {
                let fu = frm.GetControl("Content");
                if (fu == null)
                {
                    return data;
                }

                let files = [];

                let n = fu.GetFiles().length;
                if (n === 1)
                {
                    if (fu.GetFiles()[0].Content != null)
                    {
                        data["Content"] = fu.GetFiles()[0].Content.split(',')[1];
                        if (data["Name"] == null || data["Name"] == "")
                        {
                            data["Name"] = fu.GetFiles()[0].Name;
                        }

                        if (data["FileType"] == null || data["FileType"] == "")
                        {
                            data["FileType"] = fu.GetFiles()[0].Type;
                        }

                        if (data["Name"].startsWith(";"))
                        {
                            data["Name"] = data["Name"].substring(0, 1);
                        }

                        data["ItemType"] = FileItemType.Assembly;

                        files.push(data);

                        _adminCtrl.UploadCustomAssemblies(files,
                            function (result)
                            {
                                if (result == null)
                                {
                                    MsgBox.Show("Failed to save file");
                                    return;
                                }

                                MsgBox.Show("Uploaded files save to multiple records.");
                                frm.Close();
                            }
                        );

                        return data;
                    }
                }
                else if (n > 1)
                {
                    let username = cfg.User.Name;
                    for (let i = 0; i < n; i++)
                    {
                        data.Updated = cfg.GetServerTime;
                        data.Updater = username;

                        if (fu.GetFiles()[i].Content == null)
                        {
                            continue;
                        }

                        let obj = Object.assign({}, data);

                        let content = "";
                        if (fu.GetFiles()[i].Content != null)
                        {
                            content = fu.GetFiles()[i].Content.split(',')[1];
                        }

                        obj["Content"] = content;
                        obj["Name"] = fu.GetFiles()[i].Name;
                        obj["FileType"] = fu.GetFiles()[i].Type;
                        obj["ItemType"] = FileItemType.Assembly;
                        files.push(obj);

                        if (i == n - 1)
                        {
                            obj["Content"] = content;
                            obj["Name"] = fu.GetFiles()[i].Name;
                            obj["FileType"] = fu.GetFiles()[i].Type;
                            obj["ItemType"] = FileItemType.Assembly;
                            ctrl.Save("genFile", obj, function (savedData)
                            {
                                if (savedData == null)
                                {
                                    MsgBox.Show("Failed to save file.");
                                    return;
                                }

                                MsgBox.Show("Uploaded files save to multiple records.");
                                frm.Close();
                            });
                        }
                        else
                        {
                            ctrl.Save("genFile", obj, function (savedData)
                            {
                                if (savedData == null)
                                {
                                    MsgBox.Show("Failed to save file.");
                                    return;
                                }

                                if (n - 1 == i)
                                {
                                    MsgBox.Show("Uploaded files save to multiple records.");
                                    frm.Close();
                                }
                            });
                        }
                    }
                }

                _adminCtrl.UploadCustomAssemblies(files,
                    function (result)
                    {
                        if (result == null)
                        {
                            MsgBox.Show("Failed to save file");
                            return;
                        }

                        MsgBox.Show("Uploaded files save to multiple records.");
                        frm.Close();
                    }
                );

            },
            OnDelete: function (data, onLoaded, ctrl)
            {
                let files = [];
                files.push(data);
                _adminCtrl.RemoveCustomAssemblies(files,
                    function (result)
                    {
                        if (result == null)
                        {
                            MsgBox.Show("Failed to save file");
                            return;
                        }

                        MsgBox.Show("Uploaded files save to multiple records.");
                        frm.Close();
                    }
                );
                return data;
            },
            OnLoad: function (parentFrm, schema, data, ctrl)
            {
                
            }
        }
    );


    return frm;
};