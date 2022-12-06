package ardvro.component.kenviro;

import java.io.Serializable;

public class BackpropagationSetting implements Serializable
{
    public double LearningRate = 0.1;

    public double ErrorTarget = 0.0001;

    public int Epoch = 1000;

    public class BackpropagationSettingLayer
    {
        public int Neurons = 4;

        public String ActivationType = "Sigmoid";
    }

    public class BackprogationSettingResult
    {
        public double Error = 0.0001;
        public double[][][] Weights;
        public double[][] Biases;
    }

    public BackpropagationSettingLayer[] Layers;

}
