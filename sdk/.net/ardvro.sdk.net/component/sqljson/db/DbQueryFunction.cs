namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryFunction : DbQuery
{
    public String FunctionName = "*";

    public Object[] Parameters;

    public DbQueryFunction(DbQuery query, String name, Object[] parameters, IConnection connection)
        :base(connection)
    {
        Base = query;
        Connection = connection;
        QueryType = "FUNCTION";
        FunctionName = name;
        Parameters = parameters;
    }



}
