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
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/LinearRegressionWorkflow/Compute", function (box)
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
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/LinearRegressionWorkflow/Learning", function (box)
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
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/LinearRegressionWorkflow/Run", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
}