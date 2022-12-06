var AdminController = function AdminController(cfg)
{
    let ctrl = {};

    let dbcontext;

    ctrl.GetTable = function (tableName)
    {
        if (dbcontext == null)
        {
            return;
        }

        return dbcontext[tableName];
    };

    ctrl.ClearCache = function (onResponse)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Admin/ClearCache", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Find = function (id, callback)
    {
        cfg.Connector.Submit(id, "ardvro/component/sqljson/Admin/Find", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.CreateApplication = function (appName, url, dbscript,  callback)
    {
        cfg.Connector.Submit([appName, url, dbscript], "ardvro/component/sqljson/Admin/CreateApplication", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.DeleteApplication = function (id, callback)
    {
        cfg.Connector.Submit(id, "ardvro/component/sqljson/Admin/DeleteApplication", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.BackupDatabases = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Admin/BackupDatabases", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.BackupDatabase = function (id, callback)
    {
        cfg.Connector.Submit(id, "ardvro/component/sqljson/Admin/BackupDatabase", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.Restart = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Admin/Restart", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.UploadCustomAssemblies = function (assemblies, callback)
    {
        let data = {
            List: assemblies
        };
        cfg.Connector.Submit(data, "ardvro/component/sqljson/Admin/UploadCustomAssemblies", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.RemoveCustomAssemblies = function (assemblies, callback)
    {
        let data = {
            List: assemblies
        };
        cfg.Connector.Submit(data, "ardvro/component/sqljson/Admin/RemoveCustomAssemblies", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetWebApis = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Admin/GetWebApis", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SaveWebApi = function (data, callback)
    {
        cfg.Connector.Submit(data, "ardvro/component/sqljson/Admin/SaveWebApi", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.RemoveWebApi = function (data, callback)
    {
        cfg.Connector.Submit(data, "ardvro/component/sqljson/Admin/RemoveWebApi", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetApiGateways = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Admin/GetApiGateways", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SaveApiGateway = function (data, callback)
    {
        cfg.Connector.Submit(data, "ardvro/component/sqljson/Admin/SaveApiGateway", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.RemoveApiGateway = function (data, callback)
    {
        cfg.Connector.Submit(data, "ardvro/component/sqljson/Admin/RemoveApiGateway", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.GetClusterConfigs = function (callback)
    {
        cfg.Connector.Submit([], "ardvro/component/sqljson/Admin/GetClusterConfigs", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SaveClusterConfig = function (data, callback)
    {
        cfg.Connector.Submit(data, "ardvro/component/sqljson/Admin/SaveClusterConfig", function (box)
        {
            callback != null ? callback(box == null ? null : box.Data) : null;
        });
    };


    //ctrl.DeleteFuzzyLogicSettings = function (data, onResponse)
    //{
    //    cfg.Connector.Submit(data, "ardvro/component/sqljson/Admin/DeleteFuzzyLogicSettings", function (box)
    //    {
    //        onResponse != null ? onResponse(box == null ? null : box.Data) : null;
    //    });
    //};

    //ctrl.GetFuzzyLogicSettings = function (onResponse)
    //{
    //    cfg.Connector.Submit([], "ardvro/component/sqljson/Admin/GetFuzzyLogicSettings", function (box)
    //    {
    //        onResponse != null ? onResponse(box == null ? null : box.Data) : null;
    //    });
    //};

    //ctrl.GetFuzzyLogicSettingById = function (id, onResponse)
    //{
    //    cfg.Connector.Submit(id, "ardvro/component/sqljson/Admin/GetFuzzyLogicSettingById", function (box)
    //    {
    //        onResponse != null ? onResponse(box == null ? null : box.Data) : null;
    //    });
    //};

    function construct()
    {
        dbcontext = new SqlJson({
            Connector: cfg.Connector,
            OnLoad: function (db)
            {
                dbcontext = db;
                if (cfg.OnLoad != null)
                {
                    cfg.OnLoad(ctrl);
                }
            }
        });
    }

    construct();


    return ctrl;
};