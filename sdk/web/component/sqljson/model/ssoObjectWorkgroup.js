var ssoObjectWorkgroup = function ssoObjectWorkgroup()
{
    this.Name = "ssoObjectWorkgroup";
    this.Label = "Database Object Workgroups";
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
            Name: "ssoWorkgroupId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Workgroup",
            Note: "Workgroup",
            ReferenceSchema: new ssoWorkgroup(),
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "ssoObjectId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Database Object",
            Note: "Database Object",
            ReferenceSchema: new ssoObject(),
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        }
    ];
    this.Associations = [
        {
            Name: "ssoObjectWorkgroupRoles",
            Label: "Database Object Workgroup Roles",
            Schema: "ssoObjectWorkgroupRole"
        }
    ];
};