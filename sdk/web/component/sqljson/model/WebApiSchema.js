var WebApiSchema = function WebApiSchema()
{
    this.Name = "WebApiSchema";
    this.Label = "WebApiSchema";
    this.Columns = [
        {
            StatusType: StatusType.Edit,
            Name: "EndPoint",
            InputType: InputType.Text,
            Required: true,
            KeyType: KeyType.Primary,
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: 0,
            DefaultValue: 0,
            Label: "EndPoint",
            Note: "EndPoint",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "RequiredApiKey",
            InputType: InputType.CheckBox,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 1,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "RequiredApiKey",
            Note: "RequiredApiKey",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        }
    ];

    this.Associations = [];

};