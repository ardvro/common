package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQueryProcedure extends DbQuery implements Serializable
{
    public String ProcedureName = "*";

    public Object[] Parameters;

    public DbQueryProcedure(DbQuery query, String name, Object[] parameters, IConnection connection)
    {
        super(connection);
        Base = query;
        Connection = connection;
        QueryType = "PROCEDURE";
        ProcedureName = name;
        Parameters = parameters;
    }



}
