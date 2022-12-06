package ardvro.component.sqljson.controller;

import java.util.ArrayList;

import ardvro.adapter.sso.ssoFuzzy;
import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class FuzzySettingController
{
    private IConnection _conection;

    public FuzzySettingController(IConnection connection)
    {
        _conection = connection;
    }

    public void Save(Object data, IResponseListener<ssoFuzzy> onResponse)
    {
        String functionName = "ardvro/component/sqljson/FuzzySetting/Save";
        _conection.Submit(data, functionName, onResponse);
    }

    public void Delete(Object data, IResponseListener<ssoFuzzy> onResponse)
    {
        String functionName = "ardvro/component/sqljson/FuzzySetting/Delete";
        _conection.Submit(data, functionName, onResponse);
    }

    public void GetById(Object id, IResponseListener<ssoFuzzy> onResponse)
    {
        String functionName = "ardvro/component/sqljson/FuzzySetting/GetById";
        _conection.Submit(new Object[] { id }, functionName, onResponse);
    }

    public void GetAll( IResponseListener<ArrayList<ssoFuzzy>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/FuzzySetting/GetAll";
        _conection.Submit(new Object[] { }, functionName, onResponse);
    }

}
