namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryProcedure : DbQuery
{
    public String ProcedureName = "*";

    public Object[] Parameters;

    public DbQueryProcedure(DbQuery query, String name, Object[] parameters, IConnection connection)
        :base(connection)
    {
        Base = query;
        Connection = connection;
        QueryType = "PROCEDURE";
        ProcedureName = name;
        Parameters = parameters;
    }



}
