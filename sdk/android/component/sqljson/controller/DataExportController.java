package ardvro.component.sqljson.controller;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class DataExportController
{
    private IConnection _conection;

    public DataExportController(IConnection connection)
    {
        _conection = connection;
    }

    public void ExportCsv(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataExport/ExportCsv";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ExportExcel(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataExport/ExportExcel";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ExportHtml(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataExport/ExportHtml";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ExportPdf(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataExport/ExportPdf";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ExportTxt(String countryCode, Object data, String template, int width, int height, IResponseListener<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataExport/ExportTxt";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

}
