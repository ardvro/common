var SqlController = function SqlController(cfg)
{
    const ctrl = {};

    let dbcontext;


    function query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, intPageIndex)
    {
        let query = dbcontext[szSqlFrom];

        if (joins != null && joins.JoinType != null && joins.JoinType != "" && joins.Joins != null && joins.Joins != "")
        {
            query = query[joins.JoinType](joins.Joins);
        }

        if (whereFilters != null && whereFilters.Where != null && whereFilters.Where != "")
        {
            let params = whereFilters.Parameters != null ? whereFilters.Parameters.flat() : null;
            query = query.Where(whereFilters.Where, params);
        }

        if (szSqlGroupBy != null && szSqlGroupBy != "")
        {
            query = query.GroupBy(szSqlGroupBy);
        }

        if (szSqlOrder != null && szSqlOrder != "")
        {
            query = query.OrderBy(szSqlOrder);
        }

        if (intPageIndex != null && intPageSize > 0)
        {
            query = query.Limit(intPageIndex, intPageSize);
        }
        else if (intPageIndex == null && intPageSize > 0)
        {
            query = query.Limit(intPageSize);
        }

        return query;
    }

    function send(dbquery, callback)
    {
        dbquery.Send(function (result)
        {
            let data;

            if (result != null && result != "")
            {
                if (typeof result === 'string' || result instanceof String)
                {
                    try
                    {
                        data = JSON.parse(result.replace(/\\n/g, " "));
                        try
                        {
                            data = JSON.parse(result);
                        }
                        catch
                        {
                            console.log(exception);
                        }
                    }
                    catch (exception)
                    {
                        console.log(exception);
                    }
                }
                else
                {
                    data = result;
                }
            }

            if (callback != null)
            {
                callback(data);
            }
        });
    };

    ctrl.Query = function (szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, intPageIndex)
    {
        return query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, intPageIndex);
    };

    ctrl.Send = function (dbquery, callback)
    {
        send(dbquery, callback);
    };

    ctrl.Paging = function (szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, intPageIndex, szSqlSelect, queryMode, callback)
    {
        let dbquery = query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, intPageIndex);

        if (szSqlSelect == null || szSqlSelect == "")
        {
            szSqlSelect = "*";
        }

        if (queryMode == QueryMode.Struct)
        {
            dbquery = dbquery.Paging(szSqlSelect);
        }
        else
        {
            dbquery = dbquery.PagingJsons(szSqlSelect);
        }

        send(dbquery, callback);
    };

    ctrl.List = function (szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, szSqlSelect, queryMode, callback)
    {
        let dbquery = query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize);

        if (szSqlSelect == null || szSqlSelect == "")
        {
            szSqlSelect = "*";
        }

        if (queryMode == QueryMode.Struct)
        {
            dbquery = dbquery.List(szSqlSelect);
        }
        else
        {
            dbquery = dbquery.Jsons(szSqlSelect);
        }

        send(dbquery, callback);
    };

    ctrl.First = function (szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, szSqlSelect, queryMode, callback)
    {
        let dbquery = query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder);

        if (szSqlSelect == null || szSqlSelect == "")
        {
            szSqlSelect = "*";
        }

        if (queryMode == QueryMode.Struct)
        {
            dbquery = dbquery.First(szSqlSelect);
        }
        else
        {
            dbquery = dbquery.Json(szSqlSelect);
        }

        send(dbquery, callback);
    };

    ctrl.Insert = function (szSqlFrom, data, callback)
    {
        dbcontext[szSqlFrom].Insert(data).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };

    ctrl.Update = function (szSqlFrom, data, callback)
    {
        dbcontext[szSqlFrom].Update(data).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };

    ctrl.Upsert = function (szSqlFrom, data, callback)
    {
        dbcontext[szSqlFrom].Upsert(data).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };

    ctrl.Save = function (szSqlFrom, data, callback)
    {
        dbcontext[szSqlFrom].Save(data).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };

    ctrl.Delete = function (szSqlFrom, data, callback)
    {
        dbcontext[szSqlFrom].Delete(data).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };


    ctrl.GetSchema = function (onResponse)
    {
        dbcontext.GetSchema(onResponse);
    };


    ctrl.InsertTransaction = function (szSqlFrom, transactionId, data, callback)
    {
        dbcontext[szSqlFrom].InsertTransaction(data, transactionId).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };

    ctrl.UpdateTransaction = function (szSqlFrom, transactionId, data, callback)
    {
        dbcontext[szSqlFrom].UpdateTransaction(data, transactionId).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };

    ctrl.UpsertTransaction = function (szSqlFrom, transactionId, data, callback)
    {
        dbcontext[szSqlFrom].UpsertTransaction(data, transactionId).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };

    ctrl.SaveTransaction = function (szSqlFrom, transactionId, data, callback)
    {
        dbcontext[szSqlFrom].SaveTransaction(data, transactionId).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };

    ctrl.DeleteTransaction = function (szSqlFrom, transactionId, data, callback)
    {
        dbcontext[szSqlFrom].DeleteTransaction(data, transactionId).Send(function (result)
        {
            if (callback != null)
            {
                callback(result);
            }
        });
    };


    ctrl.RemoveTransaction = function (transactionId, commandId, onCallback)
    {
        dbcontext.RemoveTransaction(transactionId, commandId, onCallback);
    };

    ctrl.BeginTransaction = function (onCallback)
    {
        dbcontext.BeginTransaction(onCallback);
    };

    ctrl.CommitTransaction = function (transactionId, onCallback)
    {
        dbcontext.CommitTransaction(transactionId, onCallback);
    };

    ctrl.RollbackTransaction = function (transactionId, onCallback)
    {
        dbcontext.RollbackTransaction(transactionId, onCallback);
    };


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