namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryFind : DbQuery
{
    public Object Id;

    public DbQueryFind(DbQuery query, Object id, IConnection connection)
        :base(connection)
    {
        Base = query;
        Connection = connection;
        QueryType = "FIND";
        Id = id;
    }

}
