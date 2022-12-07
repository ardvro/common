var SelfOrganizingMapsController = function SelfOrganizingMapsController(cfg)
{
    let ctrl = {};

    ctrl.Learning = function (inputs, neuronCounts, learningRate, learningRadius, errorTarget, epoch, callback)
    {
        let args = {
            Inputs: inputs,
            Setting: {
                LearningRate: learningRate,
                LearningRadius: learningRadius,
                ErrorTarget: errorTarget,
                Epoch: epoch,
                InputCount: inputs[0].length,
                NeuronCount: neuronCounts,
            }
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/SelfOrganizingMaps/Learning", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Compute = function (inputs, weights, neuronCounts, learningRate, learningRadius, errorTarget, epoch, callback)
    {
        let args = {
            Inputs: inputs,
            Weights: weights,
            Setting: {
                LearningRate: learningRate,
                LearningRadius: learningRadius,
                ErrorTarget: errorTarget,
                Epoch: epoch,
                InputCount: inputs[0].length,
                NeuronCount: neuronCounts,
            }
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/SelfOrganizingMaps/Compute", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
}