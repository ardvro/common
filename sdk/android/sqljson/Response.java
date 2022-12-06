package ardvro.component.sqljson;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class Response
{
    private Object _requestData;
    private String _url;
    private IConnection _connection;

    public Response(Object requestData, String url, IConnection connection)
    {
        _requestData = requestData;
        _connection = connection;
        _url = url;
    }

    public void Send(IResponseListener listener)
    {
        _connection.Submit(_requestData, _url, listener);
    }

}
