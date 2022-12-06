var ssoUserWorkgroupRole = function ssoUserWorkgroupRole()
{
    this.Name = "ssoUserWorkgroupRole";
    this.Label = "User Workgroup Roles";
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
            Name: "ssoUserWorkgroupId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "User Workgroup",
            Note: "User Workgroup",
            ReferenceSchema: new ssoUserWorkgroup(),
            ReferenceColumn: "Id",
            ReferenceName: "ssoWorkgroup.Name",
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "ssoRoleId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Role",
            Note: "Role",
            ReferenceSchema: new ssoRole(),
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        }
    ];
    this.Associations = [];
};
