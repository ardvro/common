package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQueryManipulation extends DbQuery implements Serializable
{
    public Object Data;

    public String TransactionId;

    public DbQueryManipulation(DbQuery query, Object data, IConnection connection)
    {
        super(connection);
        Base = query;
        Connection = connection;
        QueryType = "MANIPULATION";
        Data = data;
    }

    public DbQueryManipulation(DbQuery query, String transactionId, Object data, IConnection connection)
    {
        super(connection);
        Base = query;
        Connection = connection;
        QueryType = "MANIPULATION";
        Data = data;
        TransactionId = transactionId;
    }

}
