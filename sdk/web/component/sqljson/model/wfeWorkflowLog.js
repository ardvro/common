var wfeWorkflowLog = function wfeWorkflowLog()
{
    this.Name = "wfeWorkflowLog";
    this.Label = "Workflow Logs";
    this.Columns = [
        {
            StatusType: StatusType.Hidden,
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
                    Name: "In Progress 1"
                },
                {
                    Id: 3,
                    Name: "In Progress 2"
                },
                {
                    Id: 4,
                    Name: "In Progress 3"
                },
                {
                    Id: 5,
                    Name: "In Progress 4"
                },
                {
                    Id: 6,
                    Name: "In Progress 5"
                },
                {
                    Id: 7,
                    Name: "In Progress 6"
                },
                {
                    Id: 8,
                    Name: "In Progress 7"
                },
                {
                    Id: 9,
                    Name: "In Progress 8"
                },
                {
                    Id: 10,
                    Name: "Finished"
                },
                {
                    Id: 11,
                    Name: "Canceled"
                }
            ]
        },
        {
            StatusType: StatusType.Hidden,
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
            StatusType: StatusType.Hidden,
            Name: "Updater",
            InputType: InputType.AlphaNumeric,
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
            StatusType: StatusType.View,
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
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "wfeWorkflowId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Workflow Id",
            Note: "Workflow Id",
            ReferenceSchema: new wfeWorkflow(),
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        },
        {
            StatusType: StatusType.View,
            Name: "Content",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: DataType.LongText.Max,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Content",
            Note: "Content",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        }
    ];

    this.Associations = [
    ];
};