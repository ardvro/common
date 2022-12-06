var FuzzyItem = function FuzzyItem()
{
    this.Name = "FuzzyItem";
    this.Label = "Fuzzy Item";
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
            Name: "CriteriaType",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 32,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "CriteriaType",
            Note: "CriteriaType",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: ["Indication", "Solution"]
        },
        {
            StatusType: StatusType.Hidden,
            Name: "FuzzyId",
            InputType: InputType.Lookup,
            Required: false,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Fuzzy",
            Note: "Fuzzy",
            ReferenceSchema: new Fuzzy(),
            ReferenceColumn: "Name",
            ReferenceName: "Name",
            Options: null
        },
    ];
    this.Associations = [
        {
            Name: "FuzzyItemCriterias",
            Label: "Criterias",
            Schema: "FuzzyItemCriteria"
        }
    ];
};