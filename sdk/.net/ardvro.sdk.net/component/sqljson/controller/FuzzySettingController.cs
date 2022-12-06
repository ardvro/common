namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.adapter.sso.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class FuzzySettingController
{
    private IConnection _conection;

    public FuzzySettingController(IConnection connection)
    {
        _conection = connection;
    }

    public void Save(Object data, Action<ssoFuzzy> onResponse)
    {
        String functionName = "ardvro/component/sqljson/FuzzySetting/Save";
        _conection.Submit(data, functionName, onResponse);
    }

    public void Delete(Object data, Action<ssoFuzzy> onResponse)
    {
        String functionName = "ardvro/component/sqljson/FuzzySetting/Delete";
        _conection.Submit(data, functionName, onResponse);
    }

    public void GetById(Object id, Action<ssoFuzzy> onResponse)
    {
        String functionName = "ardvro/component/sqljson/FuzzySetting/GetById";
        _conection.Submit(new Object[] { id }, functionName, onResponse);
    }

    public void GetAll(Action<List<ssoFuzzy>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/FuzzySetting/GetAll";
        _conection.Submit(new Object[] { }, functionName, onResponse);
    }

}
