﻿var aisDssItem = function aisDssItem()
{
    this.Name = "aisDssItem";
    this.Label = "ES-DSS Project Item";
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
            StatusType: StatusType.Hidden,
            Name: "aisDssId",
            InputType: InputType.Lookup,
            Required: true,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "ES-DSS Project",
            Note: "ES-DSS Project",
            ReferenceSchema: new aisDss(),
            ReferenceColumn: "Id",
            ReferenceName: "Name",
            Options: null
        },
        {
            StatusType: StatusType.Hidden,
            Name: "Code",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 36,
            DecimalPoint: null,
            DefaultValue: null,
            Label: "Code",
            Note: "Code from exported data",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null,
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
            Note: "Object Name",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null,
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
            Label: "Index",
            Note: "Calculated Index Result.",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null,
        },
        {
            StatusType: StatusType.View,
            Name: "Output",
            InputType: InputType.Number,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 999999999,
            DecimalPoint: 0.1,
            DefaultValue: 0,
            Label: "Output",
            Note: "Calculated Value Result.",
            ReferenceSchema: null,
            ReferenceColumn: null,
            ReferenceName: null,
            Options: null,
        },
        {
            StatusType: StatusType.Hidden,
            Name: "Note",
            InputType: InputType.Text,
            Required: false,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 4096,
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
            Name: "aisDssItemCriterias",
            Label: "ES-DSS Project Item Criterias",
            Schema: "aisDssItemCriteria"
        },
    ];
};