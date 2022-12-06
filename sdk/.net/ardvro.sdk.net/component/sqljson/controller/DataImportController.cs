namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class DataImportController
{
    private IConnection _conection;

    public DataImportController(IConnection connection)
    {
        _conection = connection;
    }

    public void ExportCsv(String countryCode, Object data, String template, int width, int height, Action<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ExportCsv";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ExportExcel(String countryCode, Object data, String template, int width, int height, Action<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ExportExcel";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ExportHtml(String countryCode, Object data, String template, int width, int height, Action<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ExportHtml";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ExportPdf(String countryCode, Object data, String template, int width, int height, Action<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ExportPdf";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

    public void ExportTxt(String countryCode, Object data, String template, int width, int height, Action<byte[]> onResponse)
    {
        String functionName = "ardvro/component/sqljson/DataImport/ExportTxt";
        _conection.Submit(new Object[]{ countryCode, data, template, width, height }, functionName, onResponse);
    }

}
