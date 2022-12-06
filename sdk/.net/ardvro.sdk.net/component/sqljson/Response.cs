namespace ardvro.sdk.net.component.sqljson;

using ardvro.core.ext.connection;

public class Response
{
    private object _requestData;
    private string _url;
    private IConnection _connection;

    public Response(object requestData, string url, IConnection connection)
    {
        _requestData = requestData;
        _connection = connection;
        _url = url;
    }

    public void Send<T>(Action<T> callback)
    {
        _connection.Submit(_requestData, _url, callback);
    }

}
