var ProbabilisticController = function ProbabilisticController(cfg)
{
    let ctrl = {};

    ctrl.Compute = function (probabilisticType, inputs, weights, callback)
    {
        let args = {
            ProbabilisticType: probabilisticType,
            Inputs: inputs,
            Weights: weights
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/Probabilistic/Compute", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
}