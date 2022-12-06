namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.adapter.ais.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class EvolutionaryController
{
    private IConnection _connection;
    public EvolutionaryController(IConnection connection)
    {
        _connection = connection;
    }

    public void Compute(String evolutionaryType, int populationSize, double crossoverRate, double[][] dataFormatSample, double[][][] rules, double[][] targets, Action<double[]> callback)
    {
        Flexible args = new Flexible();
        args.Add("Inputs", evolutionaryType);

        args.Add("Targets", populationSize);
        args.Add("CrossoverRate", crossoverRate);
        args.Add("DataFormatSample", dataFormatSample);
        args.Add("Rules", rules);
        args.Add("Targets", targets);

        _connection.Submit(args, "ardvro/component/kenviro/Evolutionary/Compute", callback);
    }

}
