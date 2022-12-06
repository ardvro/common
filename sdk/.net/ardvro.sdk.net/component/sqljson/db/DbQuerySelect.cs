namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQuerySelect : DbQuery
{
    public string Fields = "*";

    public DbQuerySelect(DbQuery query, String fields, IConnection connection)
        :base(connection)
    {
        Base = query;
        Connection = connection;
        QueryType = "SELECT";
        Fields = fields;
    }


}
