using ardvro.adapter.ais;
using ardvro.adapter.ais.dto;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;
using ardvro.sdk.net.component.kenviro.controller;
using ardvro.sdk.net.component.sqljson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static ardvro.sdk.net.component.kenviro.BackpropagationSetting;

namespace ardvro.sdk.test
{
    public class AIController
    {
        private readonly SqlJson dbcontext;
        private readonly IConnection _connection;
        private readonly TextMiningController _textMiningController;
        private readonly ExpertSystemController _expertSystemController;
        private readonly ProbabilisticController _probabilisticController;
        private readonly BackpropagationController _neuralNetworkController;

        public AIController(IConnection connection)
        {
            dbcontext = new SqlJson(connection,
                (SqlJson sqljson) =>
                {
                }
            );
            _connection = connection;

            _textMiningController = new TextMiningController(connection);
            _expertSystemController = new ExpertSystemController(connection);
            _probabilisticController = new ProbabilisticController(connection);
            _neuralNetworkController = new BackpropagationController(connection);
        }

        public void TextSummarization(String subject, List<Flexible> documents, Action<String> callback)
        {
            _textMiningController.TextSummarization(subject, documents, callback);
        }

        public void ChatbotGetNextQuestion(Inference inferenceData, Action<Inference> onResponse)
        {
            _expertSystemController.GetNextCriteria(inferenceData, onResponse);
        }

        public void Compute(String probabilisticType, double[][] inputs, double[] weights, Action<double[][]> callback)
        {
            _probabilisticController.Compute(probabilisticType, inputs, weights, callback);
        }

        public void NeuralNetworkLearning(double[][] inputs, double[][] targets, double learningRate, double errorTarget, int epoch, BackpropagationSettingLayer[] layers, Action<BackprogationSettingResult> callback)
        {
            _neuralNetworkController.Learning(inputs, targets, learningRate, errorTarget, epoch, layers, callback);
        }

        public void NeuralNetworkCompute(double[][] inputs, double[][][] weights, double[][] targets, double learningRate, double errorTarget, int epoch, BackpropagationSettingLayer[] layers, Action<double[]> callback)
        {
            _neuralNetworkController.Compute(inputs, weights, targets, learningRate, errorTarget, epoch, layers, callback);
        }

    }
}
