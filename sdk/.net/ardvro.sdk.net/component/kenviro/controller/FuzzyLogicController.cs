namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.adapter.ais.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class FuzzyLogicController
{
    private IConnection _connection;
    public FuzzyLogicController(IConnection connection)
    {
        _connection = connection;
    }

    public void Fuzzification(String fuzzyLogicType, double inputValue, double[][]criteriaMatrix, List<Flexible> linePoints, Action<double> callback)
    {
        Flexible args = new Flexible();
        args.Add("FuzzyLogicType", fuzzyLogicType);
        args.Add("Input", inputValue);
        args.Add("Criterias", criteriaMatrix);
        args.Add("Lines", linePoints);
        _connection.Submit(args, "ardvro/component/kenviro/FuzzyLogic/Fuzzification", callback);
    }

    public void GenerateCombinationRules(String fuzzyLogicType, double[][][] fuzzySets3d, Action<double[][]> callback)
    {
        Flexible args = new Flexible();
        args.Add("FuzzyLogicType", fuzzyLogicType);
        args.Add("FuzzySets", fuzzySets3d);
        _connection.Submit(args, "ardvro/component/kenviro/FuzzyLogic/GenerateCombinationRules", callback);
    }

    public void Compute(String fuzzyLogicType, double[] inputs, double[][][] fuzzySetsCriterias, double[][]targetCriterias, double[][]rules, Action<double> callback)
    {
        Flexible args = new Flexible();
        args.Add("FuzzyLogicType", fuzzyLogicType);
        args.Add("Inputs", inputs);
        args.Add("FuzzySetCriterias", fuzzySetsCriterias);
        args.Add("TargetCriterias", targetCriterias);
        args.Add("Rules", rules);
        _connection.Submit(args, "ardvro/component/kenviro/FuzzyLogic/Compute", callback);
    }


}
