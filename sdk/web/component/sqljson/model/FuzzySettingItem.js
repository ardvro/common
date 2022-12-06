var FuzzySettingItem = function FuzzySettingItem()
{
    this.Name = "FuzzySettingItem";
    this.Label = "FuzzySettingItem";
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
            Name: "FuzzySettingId",
            InputType: InputType.Lookup,
            Required: false,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "FuzzySetting",
            Note: "FuzzySetting",
            ReferenceSchema: new FuzzySetting(),
            ReferenceColumn: "Name",
            ReferenceName: "Name",
            Options: null
        },
    ];
    this.Associations = [
        {
            Name: "FuzzySettingItemCriterias",
            Label: "Criterias",
            Schema: "FuzzySettingItemCriteria"
        }
    ];
};