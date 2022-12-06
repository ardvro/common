namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.adapter.ais.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class DecisionSupportSystemController
{
    private IConnection _connection;
    public DecisionSupportSystemController(IConnection connection)
    {
        _connection = connection;
    }

    public void Submit(aisDss data, Action<aisDss> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/DecisionSupportSystem/Submit", callback);
    }

    public void Import(int aisCriteriaId, String name, String decisionMethodType, List<Flexible> list, int pfeProfileId, Action<aisDss> callback)
    {
        Flexible data = new Flexible();
        data.Add("aisCriteriaId", aisCriteriaId);
        data.Add("pfeProfileId", pfeProfileId);
        data.Add("Name", name);
        data.Add("DecisionType", decisionMethodType);
        data.Add("List", list);

        _connection.Submit(data, "ardvro/component/kenviro/DecisionSupportSystem/Import", callback);
    }

    public void GetById(int id, Action<aisDss> callback)
    {
        _connection.Submit(new Object[] { id }, "ardvro/component/kenviro/DecisionSupportSystem/GetById", callback);
    }

    public void Delete(aisDss data, Action<aisDss> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/DecisionSupportSystem/Delete", callback);
    }

}
