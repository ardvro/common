var aisTmTopic = function aisTmTopic()
{
    this.Name = "aisTmTopic";
    this.Label = "Topics";
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
            Name: "TagType",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 32,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "TagType",
            Note: "TagType",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null,
        },
        {
            StatusType: StatusType.Edit,
            Name: "Name",
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
            Name: "Df",
            InputType: InputType.Number,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 999999999,
            DecimalPoint: 9,
            DefaultValue: 0,
            Label: "Document Term Frequency (DF)",
            Note: "Document Term Frequency (DF)",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Idf",
            InputType: InputType.Number,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 999999999,
            DecimalPoint: 9,
            DefaultValue: 0,
            Label: "Idf",
            Note: "Idf",
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
        },
        {
            Name: "aisTmSentences",
            Label: "Sentences",
            Schema: "aisTmSentence"
        }
    ];
};