namespace ardvro.sdk.net.component.webappgear.acc;

using ardvro.core.ext.connection;

public class HtmlWriterController
{
    private IConnection _connection;
    public HtmlWriterController(IConnection connection)
    {
        _connection = connection;
    }

    public void WriteAllToHtml(String spName, String idFieldName, String tableName, String titleField, String contentField, String keywordsField, Action<String> callback)
    {
        Object[] args = new Object[] { spName, idFieldName, tableName, titleField, contentField, keywordsField };
        _connection.Submit(args, "ardvro/component/webappgear/cms/Html/WriteAllToHtmlFile", callback);
    }

    public void WriteToHtmlFile(int id, String spName, String idFieldName, String tableName, String titleField, String contentField, String keywordsField, Action<String> callback)
    {
        Object[] args = new Object[] { id, spName, idFieldName, tableName, titleField, contentField, keywordsField };
        _connection.Submit(args, "ardvro/component/webappgear/cms/Html/WriteToHtmlFile", callback);
    }

    public void DeleteHtmlFile(int id, String spName, String idFieldName, String tableName, String titleField, Action<int> callback)
    {
        Object[] args = new Object[] { id, spName, idFieldName, tableName, titleField };
        _connection.Submit(args, "ardvro/component/webappgear/cms/Html/DeleteHtmlFile", callback);
    }

    public void Parse(Object data, String template, Action<int> callback)
    {
        Object[] args = new Object[] { data, template };
        _connection.Submit(args, "ardvro/component/webappgear/cms/Html/Parse", callback);
    }

}
