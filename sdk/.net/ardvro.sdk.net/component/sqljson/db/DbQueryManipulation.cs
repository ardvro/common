namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryManipulation : DbQuery
{
    public Object Data;

    public String TransactionId;

    public DbQueryManipulation(DbQuery query, Object data, IConnection connection)
        : base(connection)
    {
        Base = query;
        Connection = connection;
        QueryType = "MANIPULATION";
        Data = data;
    }

    public DbQueryManipulation(DbQuery query, String transactionId, Object data, IConnection connection)
        :base(connection)
    {
        Base = query;
        Connection = connection;
        QueryType = "MANIPULATION";
        Data = data;
        TransactionId = transactionId;
    }

}
