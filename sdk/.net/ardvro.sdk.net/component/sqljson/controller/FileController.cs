namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class FileController
{
    private IConnection _conection;

    public FileController(IConnection connection)
    {
        _conection = connection;
    }

    public void Get(Object id, Action<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/File/Get";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }

}
