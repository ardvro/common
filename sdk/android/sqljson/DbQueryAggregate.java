package ardvro.component.sqljson;

import java.io.Serializable;

import ardvro.core.connection.IConnection;

public class DbQueryAggregate extends DbQuery implements Serializable
{
    public String Field = "*";

    public String AggregateType;

    public DbQueryAggregate(DbQuery query, String field, String aggregateType, IConnection connection)
    {
        super(connection);
        Base = query;
        Connection = connection;
        QueryType = "AGGREGATE";
        Field = field;
        AggregateType = aggregateType;
    }



}
