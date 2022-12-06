namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class IntegrationController
{
    private IConnection _conection;

    public IntegrationController(IConnection connection)
    {
        _conection = connection;
    }

    public void Execute(String name, Object data, String authorization, Action<object> onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/execute";
        _conection.Submit(new Object[]{ name, data, authorization }, functionName, onResponse);
    }

    public void Send(String receiver, Object data, Action<List<Box>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/send";
        _conection.Submit(new Object[]{ receiver, data }, functionName, onResponse);
    }

    public void Broadcast(String[] receivers, Object data, Action<List<Box>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/broadcast";
        _conection.Submit(new Object[]{ receivers, data }, functionName, onResponse);
    }

    public void Get(Object id, Object data, String authorization, Action<Box> onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/Get";
        _conection.Submit(new Object[]{ id, data, authorization }, functionName, onResponse);
    }

    public void Post(Object id, Object data, String authorization, Action<Box> onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/Post";
        _conection.Submit(new Object[]{ id, data, authorization }, functionName, onResponse);
    }

}
