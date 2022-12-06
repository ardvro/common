var wfeWorkflow = function wfeWorkflow()
{
    this.Name = "wfeWorkflow";
    this.Label = "Workflow";
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
            Label: "Permission",
            Note: "Permission",
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
                    Name: "Published"
                },
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
            InputType: InputType.Select,
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
            Name: "Name",
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Name",
            Note: "Name",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },

        //{
        //    StatusType: StatusType.Edit,
        //    Name: "WorkflowType",
        //    InputType: InputType.Select,
        //    Required: true,
        //    KeyType: "",
        //    MinimumValue: 0,
        //    MaximumValue: 4096,
        //    DecimalPoint: null,
        //    DefaultValue: null,
        //    Label: "WorkflowType",
        //    Note: "WorkflowType",
        //    ReferenceSchema: null,
        //    ReferenceColumn: null,
        //    ReferenceName: null,
        //    Options: [ "Activity", "State"]
        //},
        //{
        //    StatusType: StatusType.Edit,
        //    Name: "OutputFormat",
        //    InputType: InputType.Text,
        //    Required: true,
        //    KeyType: "",
        //    MinimumValue: 0,
        //    MaximumValue: 4096,
        //    DecimalPoint: null,
        //    DefaultValue: null,
        //    Label: "OutputFormat",
        //    Note: "OutputFormat",
        //    ReferenceSchema: null,
        //    ReferenceColumn: null,
        //    ReferenceName: null,
        //    Options: null
        //},

        {
            StatusType: StatusType.Edit,
            Name: "Content",
            InputType: InputType.TextArea,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: DataType.MediumText.Max,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Content",
            Note: "Content",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
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
            Name: "wfeWorkflowRoles",
            Label: "Workflow Roles",
            Schema: "wfeWorkflowRole"
        },
        {
            Name: "wfeWorkflowLogs",
            Label: "Workflow Logs",
            Schema: "wfeWorkflowLog"
        }
    ];
};