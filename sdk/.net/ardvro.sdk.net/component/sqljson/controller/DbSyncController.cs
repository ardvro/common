namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.core.ext.connection;

public class DbSyncController
{
    private IConnection _conection;

    public DbSyncController(IConnection connection)
    {
        _conection = connection;
    }

    public void SyncId(Object id, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/dbsync/SyncId";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }

    public void SyncName(String name, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/dbsync/SyncName";
        _conection.Submit(new Object[]{ name }, functionName, onResponse);
    }

    public void SyncCustom(String dbSyncType, String sourceTable, String sourceColumns, String flagSourceColumns, String wherePredicatesSource,
                           String sourceCredentials, String targetTable, String targetColumns, String targetCredentials, String sourceSqlCustom,
                           String targetSqlCustom, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/dbsync/SyncCustom";
        _conection.Submit(new Object[]{ dbSyncType, sourceTable, sourceColumns, flagSourceColumns, wherePredicatesSource, sourceCredentials, targetTable, targetColumns, targetCredentials, sourceSqlCustom, targetSqlCustom }, functionName, onResponse);
    }


}
