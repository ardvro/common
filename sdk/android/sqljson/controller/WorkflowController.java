package ardvro.component.sqljson.controller;

import com.google.gson.internal.LinkedTreeMap;

import java.util.ArrayList;

import ardvro.adapter.wfe.wfeWorkflow;
import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;
import ardvro.core.lib.common.Column;

public class WorkflowController
{
    private IConnection _conection;

    public WorkflowController(IConnection connection)
    {
        _conection = connection;
    }

    public void GetItems(IResponseListener<ArrayList<LinkedTreeMap<String, Object>>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/GetItems";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

    public void Find(Object id, IResponseListener<wfeWorkflow> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/Find";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }

    public void GetByName(String name, IResponseListener<wfeWorkflow> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/GetByName";
        _conection.Submit(new Object[]{ name }, functionName, onResponse);
    }

    public void GetByWorkgroup(IResponseListener<ArrayList<wfeWorkflow>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/GetByWorkgroup";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

    public void Save(LinkedTreeMap<String, Object> ent, IResponseListener<LinkedTreeMap<String, Object>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/Save";
        _conection.Submit(ent, functionName, onResponse);
    }

    public void Delete(LinkedTreeMap<String, Object> ent, IResponseListener<LinkedTreeMap<String, Object>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/Delete";
        _conection.Submit(ent, functionName, onResponse);
    }

    public void Run(LinkedTreeMap<String, Object> ent, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/Run";
        _conection.Submit(ent, functionName, onResponse);
    }

    public void GetInputs(Object id, IResponseListener<ArrayList<Column>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/workflow/GetInputs";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }

}
