package ardvro.component.sqljson;

import java.io.Serializable;
import java.util.List;

import ardvro.core.connection.IConnection;

public class DbQueryFuzzy extends DbQuery implements Serializable
{
    public List<DbQueryFuzzyCriteria> Criterias;

    public DbQueryFuzzy(DbQuery parent, List<DbQueryFuzzyCriteria> criterias, IConnection connection)
    {
        super(connection);
        Base = parent;
        QueryType = "FUZZY";
        Criterias = criterias;
    }


}
