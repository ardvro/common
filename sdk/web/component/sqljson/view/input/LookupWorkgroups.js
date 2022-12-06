var LookupWorkgroups = function LookupWorkgroups(cfg)
{
    let _values = [];
    let _lookUpWorkgroups = Inputs.CreateInput
        (
            {
                Id: "_lookUpWorkgroups", Name: "Workgroups", InputType: InputType.Lookup, Required: true, StatusType: StatusType.Multiple,
                Label: "Workgroups", Note: "Workgroups", TabIndex: 0,
                ReferenceSchema: new Option(),
                ReferenceColumn: "Id",
                ReferenceName: "Name",
                OnLookup: function (e, grid, lookupInput)
                {
                    grid.LoadData(cfg.User.Data.Workgroups);

                    if (_values != null && _values.length > 0)
                    {
                        let workgroupsId = _values.map(x => (x.Id));
                        grid.SetSelectedRows(workgroupsId);
                    }
                },
                OnSelect: function (selectedItems)
                {
                    _values = selectedItems;
                }
            }
        );

    _lookUpWorkgroups.GetValues = function ()
    {
        return _values;
    };

    _lookUpWorkgroups.SetWorkgroups = function (workgroupsId)
    {
        _values = [];
        cfg.User.Data.Workgroups.forEach(
            function (value, index)
            {
                let workgroupId = workgroupsId.find(x => x == value.Id);
                if (workgroupId != null)
                {
                    _values.push({ Id: workgroupId, Name: value.Name });
                }
            }
        );
        _lookUpWorkgroups.SetItems(_values);
    };

    return _lookUpWorkgroups;
}