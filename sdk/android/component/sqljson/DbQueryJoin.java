package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQueryJoin extends  DbQueryWhere implements Serializable
{

    public String Joins;
    public String JoinType;

    public DbQueryJoin(DbQuery parent, String joins, String joinType, IConnection connection)
    {
        super(null, "", null, connection);
        QueryType = "JOIN";
        Joins = joins;
        JoinType = joinType;
    }

    public DbQueryJoin LeftJoin(String joins)
    {
        DbQueryJoin query = new DbQueryJoin(this, joins, "LEFT", Connection);
        return  query;
    }

    public DbQueryJoin RightJoin(String joins)
    {
        DbQueryJoin query = new DbQueryJoin(this, joins, "RIGHT", Connection);
        return  query;
    }

    public DbQueryJoin Join(String joins)
    {
        DbQueryJoin query = new DbQueryJoin(this, joins, "", Connection);
        return  query;
    }

    public DbQueryWhere Where(String where, Object ... parameters)
    {
        DbQueryWhere query = new DbQueryWhere(this, where, parameters, Connection);
        return  query;
    }

}
