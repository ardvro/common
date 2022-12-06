var IntegrationForm = function IntegrationForm(cfg)
{
    let frm;

    let authenticationCtrl = new AuthenticationController({
        Connector: cfg.Connector
    });

    let _roles;

    init();

    function init()
    {
        authenticationCtrl.GetRoles(function (items)
        {
            _roles = items;

            frm = new DataForm(
                {
                    Id: cfg.Id,
                    Code: cfg.Code,
                    Label: "Integration",
                    Theme: cfg.Theme,
                    StatusType: StatusType.Edit,
                    ShowLabel: false,
                    AddDefaultOption: true,
                    AllowSelectParent: false,
                    EnableAssociation: true,
                    Schema: new genIntegration(),
                    PageSize: 10,
                    FrameType: FrameType.Bordered,
                    ReferenceType: ReferenceType.Struct,
                    Connector: cfg.Connector,
                    Desktop: cfg.Desktop,
                    Data: cfg.Data,
                    User: cfg.User,
                    QueryMode: QueryMode.Json,
                    QueryFunction: null,
                    WebsiteSetting: cfg.WebsiteSetting,
                    FormColumns: 2,
                    GetServerTime: cfg.GetServerTime,
                    OnAssociationSchemaLoad: function (schema)
                    {
                        setRoles(schema);
                    }
                }
            );
        });


    }

    function setRoles(schema)
    {
        let col = schema.Columns.find(x => x.Name == "ssoRoleId");
        if (col != null)
        {
            col.Options = _roles;
        }
    }

    return frm;
};