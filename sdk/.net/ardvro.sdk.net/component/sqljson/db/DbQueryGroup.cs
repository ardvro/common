namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryGroup : DbQueryOrder
{
    public String Groups;

    public DbQueryGroup(DbQuery parent, String groups, IConnection connection)
        :base(null, "", connection)
    {
        Base = parent;
        QueryType = "GROUPBY";
        Groups = groups;
    }

    public DbQueryOrder OrderBy(String orderby)
    {
        DbQueryOrder order = new DbQueryOrder(this, orderby, Connection);
        return order;
    }

}
