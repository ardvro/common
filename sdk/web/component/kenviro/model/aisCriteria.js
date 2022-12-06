var aisCriteria = function aisCriteria()
{
    this.Name = "aisCriteria";
    this.Label = "Criterias";
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
                    Id: 2,
                    Name: "In Progress"
                },
                {
                    Id: 3,
                    Name: "Cancel"
                },
                {
                    Id: 0,
                    Name: "Draft"
                },
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
            Name: "aisCriteriaId",
            InputType: InputType.Lookup,
            Required: false,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Matter",
            Note: "Matter",
            ReferenceSchema: { Name: "aisCriteria" },
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Name",
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 1024,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Criteria",
            Note: "Criteria / Indication / Question / Synthomp",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null,
        },
        {
            StatusType: StatusType.Edit,
            Name: "CriteriaType",
            InputType: InputType.Select,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 32,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Criteria Type",
            Note: "Criteria Type",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options:[ "ExpertSystem", "DecisionSupportSystem", "FuzzyLogic", "Subject", "Matter", "Indication", "Solution" ]
        },
        {
            StatusType: StatusType.Edit,
            Name: "Weight",
            InputType: InputType.Number,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 999999999,
            DecimalPoint: 0.1,
            DefaultValue: 1,
            Label: "Weight",
            Note: "A value that would be affected the probability calculation between 0 and 1. Higher weights will result a higher probability.",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null,
        },
        {
            StatusType: StatusType.Edit,
            Name: "Sort",
            InputType: InputType.Number,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 999999999,
            DecimalPoint: 0,
            DefaultValue: 1,
            Label: "Sort",
            Note: "Priotise and indication to ask by input a sort value, min value 1. Lower value will have highest priority",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null,
        }
    ];
    this.Associations = [
        {
            Name: "aisCriterias",
            Label: "Criterias",
            Schema: "aisCriteria"
        },
    ];
};