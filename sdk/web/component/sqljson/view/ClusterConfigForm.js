var ClusterConfigForm = function ClusterConfigForm(cfg)
{
    let _adminCtrl = new AdminController({ Connector: cfg.Connector });

    let _schema = new KeyValue();

    let frm = new FrameForm(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: "",
            Theme: cfg.Theme,
            StatusType: StatusType.Edit,
            ShowLabel: false,
            AddDefaultOption: true,
            AllowSelectParent: false,
            EnableAssociation: true,
            Schema: _schema,
            PageSize: 10,
            FrameType: FrameType.Bordered,
            ReferenceType: ReferenceType.Struct,
            Connector: cfg.Connector,
            Desktop: cfg.Desktop,
            DesktopItemType: DesktopItemType.Modal,
            Data: cfg.Data,
            User: cfg.User,
            GetServerTime: cfg.GetServerTime,
            WebsiteSetting: cfg.WebsiteSetting,
            FormColumns: 2,
            GetLookupDataFunction: function (dbtable, grid)
            {
            },
            GetDataFunction: function (onResponse)
            {
            },
            SaveDataFunction: function (data, onResponse)
            {
                _adminCtrl.SaveClusterConfig(data,
                    function (result)
                    {
                        if (result == null)
                        {
                            MsgBox.Show("Failed");
                            return;
                        }

                        MsgBox.Show("Saved");
                        frm.Close();
                    }
                );
            },
        //    DeleteDataFunction: function (data, onResponse)
        //    {
        //        _adminCtrl.RemoveClusterConfig(data,
        //            function (result)
        //            {
        //                if (result == null)
        //                {
        //                    MsgBox.Show("Failed to save file");
        //                    return;
        //                }

        //                MsgBox.Show("Uploaded files save to multiple records.");
        //                frm.Close();
        //            }
        //        );
        //    }
        }

    );

    frm.LoadData(cfg.Data, _schema);

    console.log(cfg.Data);

    return frm;
};