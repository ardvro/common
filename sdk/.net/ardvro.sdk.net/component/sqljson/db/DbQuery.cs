namespace ardvro.sdk.net.component.sqljson.db;

using Newtonsoft.Json;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

[Serializable]
public class DbQuery 
{
    [JsonProperty(DefaultValueHandling = DefaultValueHandling.Include)]
    protected DbQuery Base;

    [JsonProperty(DefaultValueHandling = DefaultValueHandling.Include)]
    protected string QueryType;

    [JsonIgnore]
    protected IConnection Connection;

    public DbQuery(IConnection connection)
    {
        Connection = connection;
    }

    public Response ProcedureJsons(params object[] parameters)
    {
        var qr = new DbQueryProcedure(this, (this as DbQueryFrom).From, parameters, Connection);
        string url = "ardvro/component/sqljson/sql/procedurejsons";
        var response = new Response(qr, url, Connection);
        return response;
    }

    public Response Procedure(params object[] parameters)
    {
        var qr = new DbQueryProcedure(this, (this as DbQueryFrom).From, parameters, Connection);
        string url = "ardvro/component/sqljson/sql/procedure";
        var response = new Response(qr, url, Connection);
        return response;
    }

    public Response FunctionJsons(params object[] parameters)
    {
        var qr = new DbQueryFunction(this, (this as DbQueryFrom).From, parameters, Connection);
        string url = "ardvro/component/sqljson/sql/functionjson";
        var response = new Response(qr, url, Connection);
        return response;
    }

    public Response Function(params object[] parameters)
    {
        var qr = new DbQueryFunction(this, (this as DbQueryFrom).From, parameters, Connection);
        string url = "ardvro/component/sqljson/sql/function";
        var response = new Response(qr, url, Connection);
        return response;
    }

    public Response List(String columns)
    {
        DbQuerySelect qr = new DbQuerySelect(this, columns, Connection);
        String url = "ardvro/component/sqljson/sql/list";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response First(String columns)
    {
        DbQuerySelect qr = new DbQuerySelect(this, columns, Connection);
        String url = "ardvro/component/sqljson/sql/first";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Paging(String columns)
    {
        DbQuerySelect qr = new DbQuerySelect(this, columns, Connection);
        String url = "ardvro/component/sqljson/sql/paging";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response PagingJsons(String columns)
    {
        DbQuerySelect qr = new DbQuerySelect(this, columns, Connection);
        String url = "ardvro/component/sqljson/sql/pagingjsons";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Jsons(String columns)
    {
        DbQuerySelect qr = new DbQuerySelect(this, columns, Connection);
        String url = "ardvro/component/sqljson/sql/jsons";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Json(String columns)
    {
        DbQuerySelect qr = new DbQuerySelect(this, columns, Connection);
        String url = "ardvro/component/sqljson/sql/json";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Aggregate(String aggregateType, String column)
    {
        DbQueryAggregate qr = new DbQueryAggregate(this, aggregateType, column, Connection);
        String url = "ardvro/component/sqljson/sql/aggregate";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Count(String column)
    {
        return Aggregate("COUNT", column);
    }

    public Response Sum(String column)
    {
        return Aggregate("SUM", column);
    }

    public Response Avg(String column)
    {
        return Aggregate("AVG", column);
    }

    public Response Max(String column)
    {
        return Aggregate("MAX", column);
    }

    public Response Min(String column)
    {
        return Aggregate("MIN", column);
    }

}
