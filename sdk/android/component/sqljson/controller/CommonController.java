package ardvro.component.sqljson.controller;

import com.google.gson.internal.LinkedTreeMap;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class CommonController
{
    private IConnection _conection;

    public CommonController(IConnection connection)
    {
        _conection = connection;
    }

    public void GenerateRsaKey(IResponseListener<LinkedTreeMap<String, String>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Common/GenerateRsaKey";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GenerateRsaServerKey(IResponseListener<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Common/GenerateRsaServerKey";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GenerateRsaClientKey(IResponseListener<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Common/GenerateRsaClientKey";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

}
