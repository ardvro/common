namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.adapter.ais.ent;
using ardvro.adapter.ais.dto;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class ExpertSystemController
{
    private IConnection _connection;
    public ExpertSystemController(IConnection connection)
    {
        _connection = connection;
    }

    public void Find(int id, Action<aisEs> callback)
    {
        _connection.Submit(new Object[] { id }, "ardvro/component/kenviro/ExpertSystem/Find", callback);
    }

    public void SearchExpertSystems(String text, Action<List<aisEs>> callback)
    {
        _connection.Submit(new Object[] { text }, "ardvro/component/kenviro/ExpertSystem/SearchExpertSystems", callback);
    }

    public void SearchMatters(int expertSystemId, String text, Action<Inference> callback)
    {
        _connection.Submit(new Object[] { expertSystemId, text }, "ardvro/component/kenviro/ExpertSystem/SearchMatters", callback);
    }

    public void GetNextCriteria(Inference data, Action<Inference> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/ExpertSystem/GetNextCriteria", callback);
    }

    public void Compute(List<Criteria> list, int profileId, Action<Inference> callback)
    {
        Inference data = new Inference();
        data.Criterias = list;
        _connection.Submit(data, "ardvro/component/kenviro/ExpertSystem/Compute", callback);
    }

    public void Generate(GenerateExpertSystemData data, Action<Inference> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/ExpertSystem/Generate", callback);
    }

    public void sp_EsLogAnswerCount(DateTime datefrom, DateTime dateto, int offset, int pagesize, Action<List<Flexible>> callback)
    {
        _connection.Submit(new Object[] { datefrom, dateto, offset, pagesize }, "ardvro/component/kenviro/ExpertSystem/sp_EsLogAnswerCount", callback);
    }

    public void sp_DssItemCriteriaUsageCount(DateTime datefrom, DateTime dateto, int offset, int pagesize, Action<List<Flexible>> callback)
    {
        _connection.Submit(new Object[] { datefrom, dateto, offset, pagesize }, "ardvro/component/kenviro/ExpertSystem/sp_DssItemCriteriaUsageCount", callback);
    }

    public void sp_EsLogAnswerCountSolutions(DateTime datefrom, DateTime dateto, int offset, int pagesize, Action<List<Flexible>> callback)
    {
        _connection.Submit(new Object[] { datefrom, dateto, offset, pagesize }, "ardvro/component/kenviro/ExpertSystem/sp_EsLogAnswerCountSolutions", callback);
    }

}
