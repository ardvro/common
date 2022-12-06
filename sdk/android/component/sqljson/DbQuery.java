package ardvro.component.sqljson;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQuery implements Serializable
{
    @SerializedName("Base")
    protected DbQuery Base;

    @SerializedName("QueryType")
    protected String QueryType;

    //@Expose(serialize = false, deserialize = false)
    protected transient IConnection Connection;

    public DbQuery(IConnection connection)
    {
        Connection = connection;
    }

    public Response ProcedureJsons(Object... parameters)
    {
        DbQueryProcedure qr = new DbQueryProcedure(this, ((DbQueryFrom)this).From, parameters, Connection);
        String url = "ardvro/component/sqljson/sql/procedurejsons";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Procedure(Object... parameters)
    {
        DbQueryProcedure qr = new DbQueryProcedure(this, ((DbQueryFrom)this).From, parameters, Connection);
        String url = "ardvro/component/sqljson/sql/procedure";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response FunctionJsons(Object... parameters)
    {
        DbQueryFunction qr = new DbQueryFunction(this, ((DbQueryFrom)this).From, parameters, Connection);
        String url = "ardvro/component/sqljson/sql/functionjson";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Function(Object... parameters)
    {
        DbQueryFunction qr = new DbQueryFunction(this, ((DbQueryFrom)this).From, parameters, Connection);
        String url = "ardvro/component/sqljson/sql/function";
        Response response = new Response(qr, url, Connection);
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
