namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class LinearProgrammingController
{
    private IConnection _connection;
    public LinearProgrammingController(IConnection connection)
    {
        _connection = connection;
    }

    public void Compute (String linearProgrammingType, double[][]inputs, double[] weights, Action<object> callback)
    {
        var args = new Flexible();
        args.Add("LinearProgrammingType", linearProgrammingType);
        args.Add("Inputs", inputs);
        args.Add("Weights", weights);
        _connection.Submit(args, "ardvro/component/kenviro/LinearProgramming/Compute", callback);
    }

}
