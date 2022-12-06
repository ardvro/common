namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryLimit : DbQuerySelect
{
    public int Offset;

    public int Rows;

    public DbQueryLimit(DbQuery parent, int offset, int rows, IConnection connection)
        :base(null, "*", connection)
    {
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
