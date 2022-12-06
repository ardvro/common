var BackpropagationController = function BackpropagationController(cfg)
{
    let ctrl = {};

    ctrl.Learning = function (inputs, targets, learningRate, errorTarget, epoch, layers, callback)
    {
        let args = {
            Inputs: inputs,
            Targets: targets,
            Epoch: epoch,
            Setting: {
                LearningRate: learningRate,
                ErrorTarget: errorTarget,
                Layers: layers
            }
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/Backpropagation/Learning", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Compute = function (inputs, weights, biases, learningRate, errorTarget, epoch, layers, callback)
    {
        let args = {
            Inputs: inputs,
            Weights: weights,
            Biases: biases,
            Epoch: epoch,
            Setting: {
                LearningRate: learningRate,
                ErrorTarget: errorTarget,
                Layers: layers
            }
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/Backpropagation/Compute", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
}