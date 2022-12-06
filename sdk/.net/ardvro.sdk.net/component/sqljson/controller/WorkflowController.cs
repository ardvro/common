namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.adapter.wfe.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class WorkflowController
{
    private IConnection _conection;

    public WorkflowController(IConnection connection)
    {
        _conection = connection;
    }

    public void GetItems(Action<List<Flexible>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/GetItems";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

    public void Find(Object id, Action<wfeWorkflow> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/Find";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }

    public void GetByName(String name, Action<wfeWorkflow> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/GetByName";
        _conection.Submit(new Object[]{ name }, functionName, onResponse);
    }

    public void GetByWorkgroup(Action<List<wfeWorkflow>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/GetByWorkgroup";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

    public void Save(Flexible ent, Action<Flexible> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/Save";
        _conection.Submit(ent, functionName, onResponse);
    }

    public void Delete(Flexible ent, Action<Flexible> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/Delete";
        _conection.Submit(ent, functionName, onResponse);
    }

    public void Run(Flexible ent, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/Run";
        _conection.Submit(ent, functionName, onResponse);
    }

    public void GetInputs(Object id, Action<List<Column>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/GetInputs";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }

}
