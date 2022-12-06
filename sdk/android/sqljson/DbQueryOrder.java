package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQueryOrder extends  DbQueryLimit implements Serializable
{
    public String OrderBy;

    public DbQueryOrder(DbQuery parent, String orderBy, IConnection connection)
    {
        super(null, 0, 0, connection);
        Base = parent;
        QueryType = "ORDERBY";
        OrderBy = orderBy;
    }

    public DbQueryLimit Limit(int index, int size)
    {
        DbQueryLimit limit = new DbQueryLimit(this, index, size, Connection);
        return limit;
    }

    public DbQueryLimit Limit(int size)
    {
        DbQueryLimit limit = new DbQueryLimit(this, 0, size, Connection);
        return limit;
    }

}
