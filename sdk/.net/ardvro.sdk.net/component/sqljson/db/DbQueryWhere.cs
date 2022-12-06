namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryWhere : DbQueryGroup
{
    public Object[] Parameters;

    public String Where;

    public DbQueryWhere(DbQuery parent, String where, Object[] parameters, IConnection connection)
        :base(null, "", connection)
    {
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
