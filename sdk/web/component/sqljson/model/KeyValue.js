var KeyValue = function KeyValue()
{
    this.Name = "KeyValue";
    this.Label = "KeyValue";
    this.Columns = [
        {
            StatusType: StatusType.View,
            Name: "Key",
            InputType: InputType.Text,
            Required: true,
            KeyType: KeyType.Primary,
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Key",
            Note: "Key",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "Value",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 1024,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "Value",
            Note: "Value",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        }
    ];

    this.Associations = [];

};