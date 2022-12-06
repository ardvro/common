var ssoObject = function ssoObject()
{
    this.Name = "ssoObject";
    this.Label = "Database Objects";
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
            Name: "Name",
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 85,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "Name",
            Note: "Data Source Name",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Label",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 85,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "Label",
            Note: "Label",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "DbType",
            InputType: InputType.Select,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 32,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "Database Type",
            Note: "Project Label",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: ["MySql", "Redist"]
        },
        {
            StatusType: StatusType.Edit,
            Name: "ObjectType",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 32,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "Object Type",
            Note: "Object Type",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: ["", "TABLE", "PROCEDURE", "FUNCTION", "VIEW"]
        },
        {
            StatusType: StatusType.Edit,
            Name: "SecurityColumn",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 85,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "Security Column",
            Note: "Security Column",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "SecurityValueType",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 85,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "SecurityValueType",
            Note: "SecurityValueType",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: [ "Workgroup", "User" ]
        },
        {
            StatusType: StatusType.Edit,
            Name: "Note",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "Note",
            Note: "Note",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        }
    ];
    this.Associations = [
    ];
};