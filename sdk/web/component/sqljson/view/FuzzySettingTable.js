var FuzzySettingTable = function FuzzySettingTable(cfg)
{
    let fuzzySettingCtrl = new FuzzySettingController({ Connector: cfg.Connector });

    const frm = new FrameTable(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: cfg.Label,
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: true,
            AddDefaultOption: false,
            AllowSelectParent: false,
            AllowSort: false,
            Schema: new ssoFuzzy(),
            PageSize: 1000,
            FrameType: FrameType.Bordered,
            ReferenceType: ReferenceType.Flat,
            Connector: cfg.Connector,
            Desktop: cfg.Desktop,
            User: cfg.User,
            GetServerTime: cfg.GetServerTime,
            EnableSearch: false,
            GetDataFunction: function (ctrlArg, onLoaded)
            {
                fuzzySettingCtrl.GetAll(
                    function (results)
                    {
                        onLoaded(results);
                    }
                );
            },
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                const frm = new FuzzySettingForm(
                    {
                        Id: "FuzzySettingForm",
                        Code: "FuzzySettingForm",
                        Connector: cfg.Connector,
                        Theme: cfg.Theme,
                        Desktop: cfg.Desktop,
                        User: cfg.User,
                        Data: item,
                        CdnUrl: cfg.CdnUrl,
                        WebBaseUrl: cfg.WebBaseUrl,
                        GetServerTime: cfg.GetServerTime
                    }
                );
            }
        }
    );

    frm.Load();

    window.scrollTo(0, 0);

    return frm;
};