package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQueryFunction extends DbQuery implements Serializable
{
    public String FunctionName = "*";

    public Object[] Parameters;

    public DbQueryFunction(DbQuery query, String name, Object[] parameters, IConnection connection)
    {
        super(connection);
        Base = query;
        Connection = connection;
        QueryType = "FUNCTION";
        FunctionName = name;
        Parameters = parameters;
    }



}
