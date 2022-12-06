var Fuzzy = function Fuzzy()
{
    this.Name = "Fuzzy";
    this.Label = "Fuzzy";
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
            Name: "CriteriaId",
            InputType: InputType.Number,
            Required: true,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: 0,
            Label: "CriteriaId",
            Note: "CriteriaId",
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
            Options: null,
        },
        {
            StatusType: StatusType.Edit,
            Name: "InferenceType",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 32,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "InferenceType",
            Note: "InferenceType",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: "Name",
            Options: ["MamdaniFuzzyInference"]
        },
        {
            StatusType: StatusType.Edit,
            Name: "MembershipType",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 32,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "MembershipType",
            Note: "MembershipType",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: ["Triangular"]
        },
        {
            StatusType: StatusType.Edit,
            Name: "DefuzzyficationType",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 32,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "DefuzzyficationType",
            Note: "DefuzzyficationType",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: ["CentreOfGravity"]
        },
    ];
    this.Associations = [
        {
            Name: "FuzzyItems",
            Label: "Items",
            Schema: "FuzzyItem"
        }
    ];
};