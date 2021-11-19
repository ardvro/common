var LinearProgrammingController = function LinearProgrammingController(cfg)
{
    let ctrl = {};

    ctrl.Compute = function (evolutionaryType, inputs, weights, callback)
    {
        let args = {
            LinearProgrammingType: evolutionaryType,
            Inputs: inputs,
            Weights: weights,
        };
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/LinearProgrammingWorkflow/Compute", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
}