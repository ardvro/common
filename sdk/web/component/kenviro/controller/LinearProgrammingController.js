var LinearProgrammingController = function LinearProgrammingController(cfg)
{
    let ctrl = {};

    ctrl.Compute = function (linearProgrammingType, inputs, weights, callback)
    {
        let args = {
            LinearProgrammingType: linearProgrammingType,
            Inputs: inputs,
            Weights: weights,
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/LinearProgramming/Compute", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
}