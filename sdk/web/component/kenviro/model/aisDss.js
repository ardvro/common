var aisDss = function aisDss()
{
    this.Name = "aisDss";
    this.Label = "ES-DSS Project";
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
                }
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
            Required: true,
            KeyType: "",
            MinimumValue: DataType.Int.Min,
            MaximumValue: DataType.Int.Max,
            DecimalPoint: 0,
            DefaultValue: null,
            Label: "Matter",
            Note: "Matter",
            ReferenceSchema: new aisCriteria(),
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
            Name: "DecisionType",
            InputType: InputType.Select,
            Required: true,
            KeyType: "",
            MinimumValue: 0,
            MaximumValue: 255,
            DecimalPoint: 0,
            DefaultValue: "",
            Label: "DecisionType",
            Note: "DecisionType",
            ReferenceSchema: { Name:"Name", Id: "Id" },
            ReferenceColumn: "ParentId",
            ReferenceName: "Name",
            Options: [
                {
                    Id: "Probabilistic",
                    Name: "Probabilistic"
                },
                {
                    Id: "AnalyticalHierarcyProcess",
                    Name: "Analytical Hierarcy Process",
                    ParentId: "Probabilistic"
                },
                {
                    Id: "Bayes",
                    Name: "Bayes",
                    ParentId: "Probabilistic"
                },
                {
                    Id: "ComparativePerformanceIndex",
                    Name: "Comparative Performance Index",
                    ParentId: "Probabilistic"
                },
                {
                    Id: "Delphi",
                    Name: "Delphi",
                    ParentId: "Probabilistic"
                },
                {
                    Id: "DempsterShafer",
                    Name: "Dempster-Shafer",
                    ParentId: "Probabilistic"
                },
                {
                    Id: "ExponentialComparison",
                    Name: "Exponential Comparison",
                    ParentId: "Probabilistic"
                },
                {
                    Id: "EqualLikeHood",
                    Name: "Equal Like Hood",
                    ParentId: "Probabilistic"
                },
                {
                    Id: "Hurwicz",
                    Name: "Hurwicz",
                    ParentId: "Probabilistic"
                },
                {
                    Id: "MinimaxRegression",
                    Name: "Minimax Regression",
                    ParentId: "Probabilistic"
                },
                {
                    Id: "Optimization",
                    Name: "Optimization",
                },
                {
                    Id: "LinearProgramming",
                    Name: "Linear Programming",
                    ParentId: "Optimization"
                },
                {
                    Id: "BigMMinimization",
                    Name: "Big M Method Minimization",
                    ParentId: "LinearProgramming"
                },
                {
                    Id: "DualMinimization",
                    Name: "Dual Simplex Method Minimization",
                    ParentId: "LinearProgramming"
                },
                {
                    Id: "SimplexMaximization",
                    Name: "Simplext Method Maximization",
                    ParentId: "LinearProgramming"
                },
                {
                    Id: "Evolutionary",
                    Name: "Evolutionary Algorithm",
                    ParentId: "Optimization"
                },
                {
                    Id: "GeneticAlgorithm",
                    Name: "Genetic Algorithm",
                    ParentId: "Evolutionary"
                },
                {
                    Id: "Forecasting",
                    Name: "Forecasting"
                }, 
                {
                    Id: "LinearRegression",
                    Name: "Linear Regression",
                    ParentId: "Forecasting"
                },
                {
                    Id: "GradientDescent",
                    Name: "Gradient Descent",
                    ParentId: "LinearRegression"
                },
                {
                    Id: "LeastSquareCriterion",
                    Name: "Least Square Criterion",
                    ParentId: "LinearRegression"
                },
                {
                    Id: "NeuralNetwork",
                    Name: "NeuralNetwork",
                    ParentId: "Forecasting"
                },
                {
                    Id: "Backpropagation",
                    Name: "Back-Propagation",
                    ParentId: "NeuralNetwork"
                },
                {
                    Id: "Estimation",
                    Name: "Estimation",
                },
                {
                    Id: "MamdaniFuzzyInference",
                    Name: "Fuzzy Logic",
                    ParentId: "Estimation"
                },
                {
                    Id: "Clustering",
                    Name: "Clustering"
                }, 
                {
                    Id: "SelfOrganizingMaps",
                    Name: "Self Organizing Maps",
                    ParentId: "Clustering"
                }

            ]
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
            Name: "aisDssItems",
            Label: "ES-DSS Project Items",
            Schema: "aisDssItem"
        }
    ];
};