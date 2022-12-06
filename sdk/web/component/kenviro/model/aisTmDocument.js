var aisTmDocument = function aisTmDocument()
{
    this.Name = "aisTmDocument";
    this.Label = "Documents";
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
            StatusType: StatusType.Hidden,
            Name: "Status",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 128,
            DecimalPoint: 0,
            DefaultValue: 1,
            Label: "Status",
            Note: "Status",
            ReferenceSchema: null,
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: [
                {
                    Id: 1,
                    Name: "Active"
                },
                {
                    Id: 0,
                    Name: "Draft"
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
            StatusType: StatusType.Edit,
            Name: "aisTmId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Subject",
            Note: "Subject",
            ReferenceSchema: new aisTm(),
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Title",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Title",
            Note: "Title",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null,
        },
        {
            StatusType: StatusType.Edit,
            Name: "TextContent",
            InputType: InputType.TextArea,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: DataType.MediumText.Max,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Text Content",
            Note: "Text Content",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Source",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 512,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "FileName",
            Note: "FileName",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.View,
            Name: "Summary",
            InputType: InputType.TextArea,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 8192,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Summary",
            Note: "Summary",
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
            Name: "aisTmTopicDocuments",
            Label: "Topic Documents",
            Schema: "aisTmTopicDocument"
        }
    ];
};