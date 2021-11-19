var EvolutionaryController = function EvolutionaryController(cfg)
{
    let ctrl = {};

    ctrl.Compute = function (evolutionaryType, populationSize, crossoverRate, dataFormatSample, rules, targets, callback)
    {
        let args = {
            Inputs: evolutionaryType,
            Targets: populationSize,
            CrossoverRate: crossoverRate,
            DataFormatSample: dataFormatSample,
            Rules: rules,
            Targets: targets,
        };
        cfg.Connector.Submit(args, "ardvro/wf/kenviro/EvolutionaryWorkflow/Compute", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
}