package ardvro.component.sqljson.controller;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class DataImportController
{
    private IConnection _conection;

    public DataImportController(IConnection connection)
    {
        _conection = connection;
    }

    public void ImportCsv(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ImportCsv";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ImportExcel(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ImportExcel";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ImportHtml(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ImportHtml";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ImportPdf(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ImportPdf";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ImportTxt(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ImportTxt";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

}
