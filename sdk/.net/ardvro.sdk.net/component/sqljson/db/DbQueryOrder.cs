namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryOrder : DbQueryLimit
{
    public String OrderBy;

    public DbQueryOrder(DbQuery parent, String orderBy, IConnection connection)
        :base(null, 0, 0, connection)
    {
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
