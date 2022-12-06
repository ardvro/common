var ApiGatewaySchemaMap = function ApiGatewaySchemaMap()
{
    this.Name = "ApiGatewaySchemaMap";
    this.Label = "ApiGatewaySchemaMap";
    this.Columns = [
        {
            StatusType: StatusType.Edit,
            Name: "SourceField",
            InputType: InputType.Text,
            Required: true,
            KeyType: null,
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: 0,
            DefaultValue: 0,
            Label: "SourceField",
            Note: "SourceField",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "TargetField",
            InputType: InputType.Url,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "TargetField",
            Note: "TargetField",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "TargetType",
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "TargetType",
            Note: "TargetType",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "DefaultValue",
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "DefaultValue",
            Note: "DefaultValue",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Hidden,
            Name: "ApiGatewaySchema",
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "",
            Note: "",
            ReferenceSchema: { Name: "ApiGatewaySchema" },
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
    ];




    this.Associations = [];

};