package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQueryGroup extends DbQueryOrder implements Serializable
{
    public String Groups;

    public DbQueryGroup(DbQuery parent, String groups, IConnection connection)
    {
        super(null, "", connection);
        Base = parent;
        QueryType = "GROUPBY";
        Groups = groups;
    }

    public DbQueryOrder OrderBy(String orderby)
    {
        DbQueryOrder order = new DbQueryOrder(this, orderby, Connection);
        return order;
    };

}
