var DbSyncController = function DbSyncController(cfg)
{
    let ctrl = {};

    ctrl.SyncId = function (id, callback)
    {
        cfg.Connector.Submit(id, "ardvro/component/sqljson/dbsync/syncid", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SyncName = function (name, callback)
    {
        cfg.Connector.Submit(name, "ardvro/component/sqljson/dbsync/syncname", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SyncCustom = function (dbSyncType, sourceTable, sourceColumns, flagSourceColumns, wherePredicatesSource, sourceCredentials, targetTable, targetColumns, targetCredentials, sourceSqlCustom, targetSqlCustom, callback)
    {
        let args = [dbSyncType, sourceTable, sourceColumns, flagSourceColumns, wherePredicatesSource, sourceCredentials, targetTable, targetColumns, targetCredentials, sourceSqlCustom, targetSqlCustom];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/dbsync/synccustom", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    return ctrl;
};