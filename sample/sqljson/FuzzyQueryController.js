var FuzzyQueryController = function FuzzyQueryController(cfg)
{
    let ctrl = {};

    let dbcontext;

    ctrl.TestFuzzyQueryList = function (fieldName, operatorType, value, callback)
    {
        let criterias = [
            {
                Field: fieldName,
                Operator: operatorType,
                Value: value,
                Compound: "AND"
            },
            //{
            //    Field: "Evidence",
            //    Operator: operatorType,
            //    Value: "HIGH",
            //    Compound: ""
            //},
        ];

        dbcontext.aknMatterLog.Where("aknMatterLog.Status = ?", 1).Fuzzy(criterias).List("*").Send(function (list)
        {
            if (callback != null)
            {
                callback(list);
            }
        });
    };

    function construct()
    {
        dbcontext = new SqlJson({
            Connector: cfg.Connector,
            OnLoad: function (db)
            {
                dbcontext = db;
                if (cfg.OnLoad != null)
                {
                    cfg.OnLoad(ctrl);
                }
            }
        });
    }

    construct();

    return ctrl;
}

//usage:
/*

let ctrl = new FuzzyQuerController({Connector:Website.GetConnector()});
ctrl.TestFuzzyQueryList("Production", ">=", "HIGH", function(results){ log(results); });


*/
