var ssoObjectWorkgroupRole = function ssoObjectWorkgroupRole()
{
    this.Name = "ssoObjectWorkgroupRole";
    this.Label = "Database Object Workgroup Roles";
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
            MinimumValue: DataType.Byte.Min,
            MaximumValue: DataType.Byte.Max,
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
            KeyType: "",
            MinimumValue: null,
            MaximumValue: null,
            DecimalPoint: null,
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
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 85,
            DecimalPoint: null,
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
            Name: "ssoObjectWorkgroupId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Database Object Workgroup",
            Note: "Database Object Workgroup",
            ReferenceSchema: new ssoObjectWorkgroup(),
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "ssoRoleId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Roles",
            Note: "Roles",
            ReferenceSchema: new ssoRole(),
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "AllowCreate",
            InputType: InputType.CheckBox,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 0,
            DecimalPoint: null,
            DefaultValue: false,
            Label: "Allow Create",
            Note: "Allow Create",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "AllowRead",
            InputType: InputType.CheckBox,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 0,
            DecimalPoint: null,
            DefaultValue: false,
            Label: "Allow Read",
            Note: "Allow Read",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "AllowUpdate",
            InputType: InputType.CheckBox,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 0,
            DecimalPoint: null,
            DefaultValue: false,
            Label: "Allow Update",
            Note: "Allow Update",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "AllowDelete",
            InputType: InputType.CheckBox,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 0,
            DecimalPoint: null,
            DefaultValue: false,
            Label: "Allow Delete",
            Note: "Allow Delete",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        }
    ];
    this.Associations = [];
};
