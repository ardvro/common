namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.adapter.ais.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;
public class CriteriaController
{
    private IConnection _connection;
    public CriteriaController(IConnection connection)
    {
        _connection = connection;
    }

    public void GetCriteriasRecursive(Action<List<aisCriteria>> callback)
    {
        _connection.Submit(new Object[]{}, "ardvro/component/kenviro/Criteria/GetCriteriasRecursive", callback);
    }

    public void GetCriterias(int parentCriteriaId, String criteriaType, Action<List<aisCriteria>> callback)
    {
        _connection.Submit(new Object[]{parentCriteriaId, criteriaType}, "ardvro/component/kenviro/Criteria/GetCriterias", callback);
    }

    public void GetCriteriasAll(Action<List<aisCriteria>> callback)
    {
        _connection.Submit(new Object[]{}, "ardvro/component/kenviro/Criteria/GetCriteriasAll", callback);
    }

    public void SearchCriterias(int parentCriteriaId, String keywords, String criteriaType, Action<List<aisCriteria>> callback)
    {
        _connection.Submit(new Object[]{parentCriteriaId, keywords, criteriaType}, "ardvro/component/kenviro/Criteria/SearchCriterias", callback);
    }

    public void Save(aisCriteria data, Action<aisCriteria> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/Criteria/Save", callback);
    }

    public void Delete(aisCriteria data, Action<aisCriteria> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/Criteria/Delete", callback);
    }

    public void Find(int id, Action<aisCriteria> callback)
    {
        _connection.Submit(new Object[] { id }, "ardvro/component/kenviro/Criteria/Delete", callback);
    }

}
