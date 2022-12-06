namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class ProbabilisticController
{
    private IConnection _connection;
    public ProbabilisticController(IConnection connection)
    {
        _connection = connection;
    }

    public void Compute (String probabilisticType, double[][]inputs, double[] weights, Action<double[][]> callback)
    {
        var args = new Flexible();
        args.Add("ProbabilisticType", probabilisticType);
        args.Add("Inputs", inputs);
        args.Add("Weights", weights);
        _connection.Submit(args, "ardvro/component/kenviro/Probabilistic/Compute", callback);
    }

}
