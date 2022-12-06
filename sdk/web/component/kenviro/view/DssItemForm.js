var DssItemForm = function DssItemForm(cfg)
{
    let frm = new PanelModal(
        {
            Id: cfg.Id,
            Label: "ES-DSS Project Item",
            Theme: cfg.Theme
        }
    );

    let _schema = new aisDssItem();
    let btnAddItem;
    let btnDelete;

    construct();

    function construct()
    {
        let panel = new PanelForm(
            {
                Id: cfg.Id.concat('_PanelForm'),
                Label: "ES-DSS Project Item",
                Theme: cfg.Theme,
                StatusType: StatusType.Edit,
                ShowLabel: false,
                AddDefaultOption: true,
                AllowSelectParent: true,
                FormColumns: 3,
                Schema: _schema,
                PageSize: 100,
                FrameType: FrameType.Bordered,
                PrintUrl: "",
                Data: cfg.Data,
                EnableAssociation: true,
                OnAssociationSchemaLoad: function (subSchema)
                {

                }
            }
        );
        frm.Body.appendChild(panel);

        btnAddItem = Inputs.CreateButton({
            Id: cfg.Id.concat("btnAddItem"), Name: " Add", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass, 
            Icon: "fas fa-plus", Label: "Add Item Criteria",
            OnClick: function (e)
            {
                if (!panel.IsValid())
                {
                    return;
                }

                if (cfg.OnAdd != null)
                {
                    let data =  panel.GetData();
                    cfg.OnAdd(data);
                }

                frm.Close();
            }
        });
        frm.AddButton(btnAddItem);

        if (cfg.Data != null && cfg.Data.Name != null && cfg.Data.Name != "")
        {
            btnDelete = Inputs.CreateButton({
                Id: cfg.Id.concat("btnDelete"), Name: " Remove", ButtonType: ButtonType.Button, Class: cfg.Theme.ButtonClass,
                Icon: "fas fa-minus", Label: "Remove Item Criteria",
                OnClick: function (e)
                {
                    if (!panel.IsValid())
                    {
                        return;
                    }

                    if (cfg.OnDelete != null)
                    {
                        let data = panel.GetData();
                        cfg.OnDelete(data);
                    }

                    frm.Close();
                }
            });
            frm.AddButton(btnDelete);
        }

        panel.LoadData(cfg.Data, _schema);

    }


    return frm;
}