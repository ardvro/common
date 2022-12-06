namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class SelfOrganizingMapsController
{
    private IConnection _connection;
    public SelfOrganizingMapsController(IConnection connection)
    {
        _connection = connection;
    }

    public void Learning(double[] inputs, double[][] weights, int neuronCounts, double learningRate, double learningRadius, double errorTarget, int epoch, Action<Object> callback)
    {
        Flexible args = new Flexible();
        args.Add("Inputs", inputs);
        args.Add("Weights", weights);

        Flexible setting = new Flexible();
        setting.Add("LearningRate", learningRate);
        setting.Add("LearningRadius", learningRadius);
        setting.Add("ErrorTarget", errorTarget);
        setting.Add("Epoch", epoch);
        setting.Add("InputCount", inputs.Length);
        setting.Add("NeuronCount", neuronCounts);

        args.Add("Setting", setting);

        _connection.Submit(args, "ardvro/component/kenviro/SelfOrganizingMaps/Learning", callback);
    }

    public void Compute(double[][] inputs, int neuronCounts, double learningRate, double learningRadius, double errorTarget, int epoch, Action<object> callback)
    {
        Flexible args = new Flexible();
        args.Add("Inputs", inputs);

        Flexible setting = new Flexible();
        setting.Add("LearningRate", learningRate);
        setting.Add("LearningRadius", learningRadius);
        setting.Add("ErrorTarget", errorTarget);
        setting.Add("Epoch", epoch);
        setting.Add("InputCount", inputs[0].Length);
        setting.Add("NeuronCount", neuronCounts);

        args.Add("Setting", setting);

        _connection.Submit(args, "ardvro/component/kenviro/SelfOrganizingMaps/Learning", callback);
    }

}
