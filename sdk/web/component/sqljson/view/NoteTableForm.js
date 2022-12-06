var NoteTableForm = function NoteTableForm(cfg)
{
    let frm;

    init();

    function init()
    {
        let frm = new DataTableForm(
            {
                Id: "notes",
                Code: "notes",
                Label: "Notes",
                Theme: cfg.Theme,
                Schema: new genNote(),
                Connector: cfg.Connector,
                Desktop: cfg.Desktop,
                User: cfg.User,
                ShowLabel: true,
                GetServerTime: cfg.GetServerTime
            }
        );
    }

    return frm;
};
