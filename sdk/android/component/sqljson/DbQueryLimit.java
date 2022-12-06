package ardvro.component.sqljson;

import java.io.Serializable;
import java.util.List;

import ardvro.core.connection.IConnection;

public class DbQueryLimit extends  DbQuerySelect implements Serializable
{
    public int Offset;

    public int Rows;

    public DbQueryLimit(DbQuery parent, int offset, int rows, IConnection connection)
    {
        super(null, "*", connection);
        Base = parent;
        QueryType = "LIMIT";
        Offset = offset;
        Rows = rows;
    }

    public DbQuerySelect Select(String fields)
    {
        DbQuerySelect query = new DbQuerySelect(this, fields, Connection);
        return query;
    }

    public DbQueryFuzzy Fuzzy(List<DbQueryFuzzyCriteria> criterias)
    {
        DbQueryFuzzy query = new DbQueryFuzzy(this, criterias, Connection);
        return query;
    }

}
