namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class BackpropagationController
{
    private IConnection _connection;
    public BackpropagationController(IConnection connection)
    {
        _connection = connection;
    }

    public void Learning(double[][] inputs, double[][]targets, double learningRate, double errorTarget, int epoch, BackpropagationSetting.BackpropagationSettingLayer[] layers, Action<BackpropagationSetting.BackprogationSettingResult> callback)
    {
        BackpropagationSetting setting = new BackpropagationSetting();
        setting.Epoch = epoch;
        setting.ErrorTarget = errorTarget;
        setting.LearningRate = learningRate;
        setting.Layers = layers;

        Flexible args = new Flexible();
        args.Add("Inputs", inputs);
        args.Add("Targets", targets);
        args.Add("Epoch", epoch);
        args.Add("Setting", setting);

        _connection.Submit(args, "ardvro/component/kenviro/Backpropagation/Learning", callback);
    }

    public void Compute(double[][] inputs, double[][][] weights, double[][]targets, double learningRate, double errorTarget, int epoch, BackpropagationSetting.BackpropagationSettingLayer[] layers, Action<double[]> callback)
    {
        BackpropagationSetting setting = new BackpropagationSetting();
        setting.Epoch = epoch;
        setting.ErrorTarget = errorTarget;
        setting.LearningRate = learningRate;
        setting.Layers = layers;

        Flexible args = new Flexible();
        args.Add("Inputs", inputs);
        args.Add("Weights", weights);
        args.Add("Targets", targets);
        args.Add("Epoch", epoch);
        args.Add("Setting", setting);

        _connection.Submit(args, "ardvro/component/kenviro/Backpropagation/Compute", callback);
    }

}
