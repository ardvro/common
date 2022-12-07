var LinearRegressionController = function LinearRegressionController(cfg)
{
    let ctrl = {};

    ctrl.Compute = function (linearRegressionType, inputs, alpha, delta, callback)
    {
        let args = {
            LinearRegressionType: linearRegressionType,
            Inputs: inputs,
            Alpha: alpha,
            Delta: delta,
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/LinearRegression/Compute", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Learning = function (linearRegressionType, inputs, callback)
    {
        let args = {
            LinearRegressionType: linearRegressionType,
            Inputs: inputs
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/LinearRegression/Learning", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Run = function (linearRegressionType, inputs, callback)
    {
        let args = {
            LinearRegressionType: linearRegressionType,
            Inputs: inputs
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/LinearRegression/Run", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
}