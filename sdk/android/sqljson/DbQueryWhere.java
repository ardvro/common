package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQueryWhere extends DbQueryGroup implements Serializable
{
    public Object[] Parameters;

    public String Where;

    public DbQueryWhere(DbQuery parent, String where, Object[] parameters, IConnection connection)
    {
        super(null, "", connection);
        Base = parent;
        QueryType = "WHERE";
        Where = where;
        Parameters = parameters;
    }

    public DbQueryGroup GroupBy(String groups)
    {
        DbQueryGroup groupby = new DbQueryGroup(this, groups, Connection);
        return groupby;
    }

}
