namespace ardvro.sdk.net.component.sqljson.db;

using ardvro.core.ext.connection;

[Serializable]
public class DbQueryAggregate : DbQuery
{
    public string Field = "*";

    public string AggregateType;

    public DbQueryAggregate(DbQuery query, String field, String aggregateType, IConnection connection)
        :base(connection)
    {
        Base = query;
        Connection = connection;
        QueryType = "AGGREGATE";
        Field = field;
        AggregateType = aggregateType;
    }



}
