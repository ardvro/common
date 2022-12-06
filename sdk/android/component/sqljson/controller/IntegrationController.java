package ardvro.component.sqljson.controller;

import java.util.ArrayList;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;
import ardvro.core.transceiver.Box;

public class IntegrationController
{
    private IConnection _conection;

    public IntegrationController(IConnection connection)
    {
        _conection = connection;
    }

    public void Execute(String name, Object data, String authorization, IResponseListener onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/execute";
        _conection.Submit(new Object[]{ name, data, authorization }, functionName, onResponse);
    }

    public void Send(String receiver, Object data, IResponseListener<ArrayList<Box>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/send";
        _conection.Submit(new Object[]{ receiver, data }, functionName, onResponse);
    }

    public void Broadcast(String[] receivers, Object data, IResponseListener<ArrayList<Box>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/broadcast";
        _conection.Submit(new Object[]{ receivers, data }, functionName, onResponse);
    }

    public void Get(Object id, Object data, String authorization, IResponseListener<Box> onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/Get";
        _conection.Submit(new Object[]{ id, data, authorization }, functionName, onResponse);
    }

    public void Post(Object id, Object data, String authorization, IResponseListener<Box> onResponse)
    {
        String functionName = "ardvro/component/sqljson/integration/Post";
        _conection.Submit(new Object[]{ id, data, authorization }, functionName, onResponse);
    }

}
