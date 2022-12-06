var ssoMenu = function ssoMenu()
{
    this.Name = "ssoMenu";
    this.Label = "Menu";
    this.Columns = [
        {
            StatusType: StatusType.View,
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
            Name: "Status",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 128,
            DecimalPoint: 0,
            DefaultValue: 0,
            Label: "Status",
            Note: "Status",
            ReferenceSchema: null,
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: [
                {
                    Id: 0,
                    Name: "Draft"
                },
                {
                    Id: 1,
                    Name: "Active"
                },
                {
                    Id: 2,
                    Name: "In Progress"
                },
                {
                    Id: 3,
                    Name: "Cancel"
                }
            ]
        },
        {
            StatusType: StatusType.View,
            Name: "Updated",
            InputType: InputType.DateTime,
            Required: true,
            KeyType: null,
            MinimumValue: null,
            MaximumValue: null,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Updated",
            Note: "Last Updated Time",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.View,
            Name: "Updater",
            InputType: InputType.AlphaNumeric,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 85,
            DecimalPoint: 0,
            DefaultValue: "",
            Label: "Updater",
            Note: "Last Updated By",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "ssoApplicationId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Application",
            Note: "Application",
            ReferenceSchema: new ssoApplication(),
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "ssoMenuId",
            InputType: InputType.Lookup,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Menu",
            Note: "Menu",
            ReferenceSchema: { Name: "ssoMenu" },
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Code",
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 36,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Code",
            Note: "Code",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Name",
            InputType: InputType.AlphaNumeric,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 85,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Name",
            Note: "Name",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Icon",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Icon",
            Note: "Icon",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Script",
            InputType: InputType.TextArea,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: DataType.LongText.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Script",
            Note: "Script",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Path",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Path",
            Note: "Path",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Note",
            InputType: InputType.TextArea,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Note",
            Note: "Note",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        }
    ];
    this.Associations = [
        {
            Name: "ssoMenuRoles",
            Label: "Menu Roles",
            Schema: "ssoMenuRole"
        }
        //{
        //    Name: "ssoMenus",
        //    Label: "Associations Menu",
        //    Schema: "ssoMenu"
        //}

    ];
};
