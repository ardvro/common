package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQuerySelect extends DbQuery implements Serializable
{
    public String Fields = "*";

    public DbQuerySelect(DbQuery query, String fields, IConnection connection)
    {
        super(connection);
        Base = query;
        Connection = connection;
        QueryType = "SELECT";
        Fields = fields;
    }



}
