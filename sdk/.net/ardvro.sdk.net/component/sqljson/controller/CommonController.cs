namespace ardvro.sdk.net.component.sqljson.controller;


using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class CommonController
{
    private IConnection _conection;

    public CommonController(IConnection connection)
    {
        _conection = connection;
    }

    public void GenerateRsaKey(Action<Flexible> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Common/GenerateRsaKey";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GenerateRsaServerKey(Action<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Common/GenerateRsaServerKey";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GenerateRsaClientKey(Action<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Common/GenerateRsaClientKey";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

}
