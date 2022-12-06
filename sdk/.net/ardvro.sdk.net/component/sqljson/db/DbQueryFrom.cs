namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryFrom : DbQueryJoin
{
    public String From;

    public DbQueryFrom(DbQuery parent, String from, IConnection connection)
        :base(null, "", "", connection)
    {
        QueryType = "FROM";
        From = from;
    }

    public Response Find(Object Id)
    {
        DbQueryFind qr = new DbQueryFind(this, Id, Connection);
        String url = "ardvro/component/sqljson/sql/find";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Insert(Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, data, Connection);
        String url = "ardvro/component/sqljson/sql/insert";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Update(Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, data, Connection);
        String url = "ardvro/component/sqljson/sql/update";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Upsert(Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, data, Connection);
        String url = "ardvro/component/sqljson/sql/upsert";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Save(Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, data, Connection);
        String url = "ardvro/component/sqljson/sql/save";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Delete(Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, data, Connection);
        String url = "ardvro/component/sqljson/sql/delete";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response InsertTransaction(String transactionId, Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, transactionId, data, Connection);
        String url = "ardvro/component/sqljson/sql/inserttransaction";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response UpdateTransaction(String transactionId, Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, transactionId, data, Connection);
        String url = "ardvro/component/sqljson/sql/updatetransaction";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response UpsertTransaction(String transactionId, Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, transactionId, data, Connection);
        String url = "ardvro/component/sqljson/sql/upserttransaction";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response SaveTransaction(String transactionId, Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, transactionId, data, Connection);
        String url = "ardvro/component/sqljson/sql/savetransaction";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response DeleteTransaction(String transactionId, Object data)
    {
        DbQueryManipulation qr = new DbQueryManipulation(this, transactionId, data, Connection);
        String url = "ardvro/component/sqljson/sql/deletetransaction";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response ProcedureJsons(Object[] parameters)
    {
        DbQueryProcedure qr = new DbQueryProcedure(this, From, parameters, Connection);
        String url = "ardvro/component/sqljson/sql/procedurejsons";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Procedure(Object[] parameters)
    {
        DbQueryProcedure qr = new DbQueryProcedure(this, From, parameters, Connection);
        String url = "ardvro/component/sqljson/sql/procedure";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response FunctionJsons(Object[] parameters)
    {
        DbQueryFunction qr = new DbQueryFunction(this, From, parameters, Connection);
        String url = "ardvro/component/sqljson/sql/functionjson";
        Response response = new Response(qr, url, Connection);
        return response;
    }

    public Response Function(Object[] parameters)
    {
        DbQueryFunction qr = new DbQueryFunction(this, From, parameters, Connection);
        String url = "ardvro/component/sqljson/sql/function";
        Response response = new Response(qr, url, Connection);
        return response;
    }

}
