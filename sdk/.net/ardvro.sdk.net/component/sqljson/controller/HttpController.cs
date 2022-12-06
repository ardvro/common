namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.core.ext.connection;

public class HttpController
{
    private IConnection _conection;

    public HttpController(IConnection connection)
    {
        _conection = connection;
    }

    public void Get(String url, String authorization, Action<object> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/Get";
        _conection.Submit(new Object[]{ url, authorization }, functionName, onResponse);
    }

    public void Post(String url, Object data, String authorization, Action<object> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/Post";
        _conection.Submit(new Object[]{ url, data, authorization }, functionName, onResponse);
    }

    public void GetStream(String url, String authorization, Action<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/GetStream";
        _conection.Submit(new Object[]{ url, authorization }, functionName, onResponse);
    }

    public void PostStream(String url, Object data, String authorization, Action<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/PostStream";
        _conection.Submit(new Object[]{ url, data, authorization }, functionName, onResponse);
    }

    public void Upload(String url, Object data, byte[] bytes, String authorization, Action<object> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Http/Upload";
        _conection.Submit(new Object[]{ url, data, bytes, authorization }, functionName, onResponse);
    }

}
