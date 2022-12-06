package ardvro.component.webappgear.cms;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class HtmlWriterController
{
    private IConnection _connection;
    public HtmlWriterController(IConnection connection)
    {
        _connection = connection;
    }

    public void WriteAllToHtml(String spName, String idFieldName, String tableName, String titleField, String contentField, String keywordsField, IResponseListener<String> callback)
    {
        Object[] args = new Object[] { spName, idFieldName, tableName, titleField, contentField, keywordsField };
        _connection.Submit(args, "ardvro/component/webappgear/cms/Html/WriteAllToHtmlFile", callback);
    }

    public void WriteToHtmlFile(int id, String spName, String idFieldName, String tableName, String titleField, String contentField, String keywordsField, IResponseListener<String> callback)
    {
        Object[] args = new Object[] { id, spName, idFieldName, tableName, titleField, contentField, keywordsField };
        _connection.Submit(args, "ardvro/component/webappgear/cms/Html/WriteToHtmlFile", callback);
    }

    public void DeleteHtmlFile(int id, String spName, String idFieldName, String tableName, String titleField, IResponseListener<Integer> callback)
    {
        Object[] args = new Object[] { id, spName, idFieldName, tableName, titleField };
        _connection.Submit(args, "ardvro/component/webappgear/cms/Html/DeleteHtmlFile", callback);
    }

    public void Parse(Object data, String template, IResponseListener<Integer> callback)
    {
        Object[] args = new Object[] { data, template };
        _connection.Submit(args, "ardvro/component/webappgear/cms/Html/Parse", callback);
    }

}
