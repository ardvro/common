namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryFuzzy : DbQuery
{
    public List<DbQueryFuzzyCriteria> Criterias;

    public DbQueryFuzzy(DbQuery parent, List<DbQueryFuzzyCriteria> criterias, IConnection connection)
        :base(connection)
    {
        Base = parent;
        QueryType = "FUZZY";
        Criterias = criterias;
    }


}
