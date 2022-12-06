package ardvro.component.sqljson.controller;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class HttpController
{
    private IConnection _conection;

    public HttpController(IConnection connection)
    {
        _conection = connection;
    }

    public void Get(String url, String authorization, IResponseListener onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/Get";
        _conection.Submit(new Object[]{ url, authorization }, functionName, onResponse);
    }

    public void Post(String url, Object data, String authorization, IResponseListener onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/Post";
        _conection.Submit(new Object[]{ url, data, authorization }, functionName, onResponse);
    }

    public void GetStream(String url, String authorization, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/GetStream";
        _conection.Submit(new Object[]{ url, authorization }, functionName, onResponse);
    }

    public void PostStream(String url, Object data, String authorization, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/PostStream";
        _conection.Submit(new Object[]{ url, data, authorization }, functionName, onResponse);
    }

    public void Upload(String url, Object data, byte[] bytes, String authorization, IResponseListener onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/Upload";
        _conection.Submit(new Object[]{ url, data, bytes, authorization }, functionName, onResponse);
    }

}
