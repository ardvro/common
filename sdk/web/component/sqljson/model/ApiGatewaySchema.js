var ApiGatewaySchema = function ApiGatewaySchema()
{
    this.Name = "ApiGatewaySchema";
    this.Label = "ApiGatewaySchema";
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
            Name: "ForwardUrl",
            InputType: InputType.Url,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 1024,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "ForwardUrl",
            Note: "ForwardUrl",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "HeaderApiKey",
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 512,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "HeaderApiKey",
            Note: "HeaderApiKey",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
        {
            StatusType: StatusType.Edit,
            Name: "HttpMethod",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 10,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "HttpMethod",
            Note: "HttpMethod",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: ["POST", "GET"]
        },
        {
            StatusType: StatusType.Edit,
            Name: "ContentType",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "ContentType",
            Note: "ContentType",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: ["application/json", "application/x-www-form-urlencoded", "application/txt"]
        },
        {
            StatusType: StatusType.Edit,
            Name: "Headers",
            InputType: InputType.Text,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 512,
            DecimalPoint: null,
            DefaultValue: "",
            Label: "Headers",
            Note: "Headers",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null
        },
    ];

    this.Associations = [
        {
            Name: "Maps",
            Label: "Mapping",
            Schema: "ApiGatewaySchemaMap"
        },
    ];

};