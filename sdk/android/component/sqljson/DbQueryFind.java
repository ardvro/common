package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQueryFind extends DbQuery implements Serializable
{
    public Object Id;

    public DbQueryFind(DbQuery query, Object id, IConnection connection)
    {
        super(connection);
        Base = query;
        Connection = connection;
        QueryType = "FIND";
        Id = id;
    }

}
