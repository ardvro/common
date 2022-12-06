namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class LinearRegressionController
{
    private IConnection _connection;
    public LinearRegressionController(IConnection connection)
    {
        _connection = connection;
    }

    public void Compute(String linearRegressionType, double[][] inputs, double alpha, double delta, Action<double[][]> callback)
    {
        Flexible args = new Flexible();
        args.Add("LinearRegressionType", linearRegressionType);
        args.Add("Inputs", inputs);
        args.Add("Alpha", alpha);
        args.Add("Delta", delta);

        _connection.Submit(args, "ardvro/component/kenviro/LinearRegression/Compute", callback);
    }

    public void Learning(String linearRegressionType, double[][] inputs, Action<object> callback)
    {
        Flexible args = new Flexible();
        args.Add("LinearRegressionType", linearRegressionType);
        args.Add("Inputs", inputs);

        _connection.Submit(args, "ardvro/component/kenviro/LinearRegression/Learning", callback);
    }

    public void Run(String linearRegressionType, double[][] inputs, Action<object> callback)
    {
        Flexible args = new Flexible();
        args.Add("LinearRegressionType", linearRegressionType);
        args.Add("Inputs", inputs);

        _connection.Submit(args, "ardvro/component/kenviro/LinearRegression/Run", callback);
    }

}
