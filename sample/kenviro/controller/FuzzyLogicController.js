var FuzzyLogicController = function FuzzyLogicController(cfg)
{
    let ctrl = {};

    ctrl.Fuzzification = function (fuzzyLogicType, inputValue, criteriaMatrix, linePoints, callback)
    {
        let args = {
            FuzzyLogicType: fuzzyLogicType,
            Input: inputValue,
            Criterias: criteriaMatrix,
            Lines: linePoints
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/FuzzyLogic/Fuzzification", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GenerateCombinationRules = function (fuzzyLogicType, fuzzySets3d, callback)
    {
        let args = {
            FuzzyLogicType: fuzzyLogicType,
            FuzzySets: fuzzySets3d
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/FuzzyLogic/GenerateCombinationRules", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    ctrl.Compute = function (fuzzyLogicType, inputs, fuzzySetsCriterias, targetCriterias, rules, callback)
    {
        let args = {
            FuzzyLogicType: fuzzyLogicType,
            Inputs: inputs,
            FuzzySetCriterias: fuzzySetsCriterias,
            TargetCriterias: targetCriterias,
            Rules: rules
        };
        cfg.Connector.Submit(args, "ardvro/component/kenviro/FuzzyLogic/Compute", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
}