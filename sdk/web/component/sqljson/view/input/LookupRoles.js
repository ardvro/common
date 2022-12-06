var LookupRoles = function LookupRoles(cfg)
{
    let _roles = cfg.Roles;
    let _values = [];
    let _lookUpRoles = Inputs.CreateInput
        (
            {
                Id: "_lookUpRoles", Name: "Roles", InputType: InputType.Lookup, Required: true, StatusType: StatusType.Multiple, Label: "Roles",
                Note: "Roles", TabIndex: 0,
                ReferenceSchema: new Option(),
                ReferenceColumn: "Id",
                ReferenceName: "Name",
                OnLookup: function (e, grid, lookupInput)
                {
                    if (_roles == null)
                    {
                        cfg.AuthenticationController.GetRoles(function (roles)
                        {
                            grid.LoadData(roles);
                            if (_values != null && _values.length > 0)
                            {
                                let rolesId = _values.map(x => (x.Id));
                                grid.SetSelectedRows(rolesId);
                            }
                        });
                    }
                    else
                    {
                        grid.LoadData(_roles);
                        if (_values != null && _values.length > 0)
                        {
                            let rolesId = _values.map(x => (x.Id));
                            grid.SetSelectedRows(rolesId);
                        }
                    }
                },
                OnSelect: function (selectedItems)
                {
                    _values = selectedItems;
                }
            }
        );

    _lookUpRoles.GetValues = function ()
    {
        return _values;
    }

    _lookUpRoles.SetDataSource = function (list)
    {
        _roles = list;
    };

    _lookUpRoles.SetRoles = function (rolesId)
    {
        if (_roles == null)
        {
            cfg.AuthenticationController.GetRoles(function (roles)
            {
                _roles = roles;

                setValues(rolesId);
            });
        }
        else
        {
            setValues(rolesId);
        }
    }

    function setValues(rolesId)
    {
        _values = [];
        _roles.forEach(
            function (value, index)
            {
                let roleId = rolesId.find(x => x == value.Id);
                if (roleId != null)
                {
                    _values.push({ Id: roleId, Name: value.Name });
                }
            }
        );
        _lookUpRoles.SetItems(_values);
    }

    return _lookUpRoles;
}