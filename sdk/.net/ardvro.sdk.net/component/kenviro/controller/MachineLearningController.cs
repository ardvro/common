namespace ardvro.sdk.net.component.kenviro.controller;

using ardvro.adapter.ais.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class MachineLearningController
{
    private IConnection _connection;
    public MachineLearningController(IConnection connection)
    {
        _connection = connection;
    }

    public void Save(aisMl data, Action<aisMl> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/MachineLearning/Save", callback);
    }

    public void Find(int id, Action<aisMl> callback)
    {
        _connection.Submit(new Object[] { id }, "ardvro/component/kenviro/MachineLearning/Find", callback);
    }

    public void Delete(aisMl data, Action<aisMl> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/MachineLearning/Delete", callback);
    }

    public void GetDatasets(int id, Action<List<aisMlDataset>> callback)
    {
        _connection.Submit(new Object[] { id }, "ardvro/component/kenviro/MachineLearning/GetDatasets", callback);
    }

    public void GetLogs(int id, Action<List<aisMlLog>> callback)
    {
        _connection.Submit(new Object[] { id }, "ardvro/component/kenviro/MachineLearning/GetLogs", callback);
    }

    public void SaveDatasets(List<aisMlDataset> list, Action<int> callback)
    {
        _connection.Submit(new Object[]{list}, "ardvro/component/kenviro/MachineLearning/Save", callback);
    }

    public void SaveLog(aisMlLog data, Action<aisMl> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/MachineLearning/SaveLog", callback);
    }

    public void Import(Flexible data, Action<int> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/MachineLearning/Import", callback);
    }

    public void Learning(int id, Action<aisMl> callback)
    {
        _connection.Submit(id, "ardvro/component/kenviro/MachineLearning/Learning", callback);
    }

    public void Compute(Flexible data, Action<List<Flexible>> callback)
    {
        _connection.Submit(data, "ardvro/component/kenviro/MachineLearning/Compute", callback);
    }

}
