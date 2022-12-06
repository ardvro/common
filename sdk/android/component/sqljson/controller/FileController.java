package ardvro.component.sqljson.controller;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class FileController
{
    private IConnection _conection;

    public FileController(IConnection connection)
    {
        _conection = connection;
    }

    public void Get(Object id, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/File/Get";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }

}
