namespace ardvro.sdk.net.component.sqljson;

using ardvro.sdk.net.component.sqljson.db;
using ardvro.core.ext.connection;
using ardvro.core.lib.cache;
using ardvro.core.lib.extension;
using Microsoft.Extensions.Caching.Memory;
using ardvro.core.lib.common;
using System.Collections.Concurrent;

public class SqlJson
{
    const string SqlJsonCache = "SqlJsonCache";

    private IConnection _connection;

    private ConcurrentDictionary<string, DbQueryFrom> _sqlJsons;

    public DbQueryFrom this[string key]
    {
        get
        {
            if (_sqlJsons.TryGetValue(key, out DbQueryFrom query))
            {
                return query;
            }
            return null;
        }
    }

    public SqlJson(IConnection connection)
    {
        _connection = connection;
        init(this);
    }

    public SqlJson(IConnection connection, Action<SqlJson> onInit)
    {
        _connection = connection;
        init(this, onInit);
    }

    public DbQueryFrom Get(string from)
    {
        if (_sqlJsons.TryGetValue(from, out DbQueryFrom query))
        {
            return query;
        }
        return null;
    }

    private void init(SqlJson sqljsonReference, Action<SqlJson> onInit = null)
    {
        var sqlJsonCacheObj = Cache.Instance.Get<ConcurrentDictionary<string, DbQueryFrom>>(SqlJsonCache);
        if (sqlJsonCacheObj != null)
        {
            return;
        }

        //string url = "ardvro/wf/sqljson/queryworkflow/getdbobjects";
        string url = "ardvro/component/sqljson/sql/getdbobjects";

        _connection.Submit<List<Flexible>>(new object[] { }, url, 
            (List<Flexible> list) => 
            { 
                if (list == null)
                {
                    return;
                }

                _sqlJsons = new ConcurrentDictionary<string, DbQueryFrom>();
                foreach (var item in list)
                {
                    DbQueryFrom dbQueryFrom = new DbQueryFrom(null, item.Get<string>("Name"), _connection);
                    _sqlJsons.TryAdd(dbQueryFrom.From, dbQueryFrom);
                }

                Cache.Instance.Set(SqlJsonCache, _sqlJsons);

                if (onInit != null)
                {
                    onInit.Invoke(sqljsonReference);
                }
            }
        );
    }

    public void GetSchema(Action<List<Flexible>> onResponse)
    {
        string functionName = "ardvro/component/sqljson/sql/getschema";
        _connection.Submit(new object[]{}, functionName, onResponse);
    }

    public void BeginTransaction(Action<string> callback)
    {
        string functionName = "ardvro/component/sqljson/begintransaction";
        _connection.Submit(new object[]{}, functionName, callback);
    }

    public void RemoveTransaction(string transactionId, string commandId, Action<string> callback)
    {
        string functionName = "ardvro/component/sqljson/removetransaction";
        _connection.Submit(new object[]{ transactionId, commandId }, functionName, callback);
    }

    public void CommitTransaction(string transactionId, Action<string> callback)
    {
        string functionName = "ardvro/component/sqljson/committransaction";
        _connection.Submit(new object[]{ transactionId }, functionName, callback);
    }

    public void RollbackTransaction(string transactionId, Action<string> callback)
    {
        string functionName = "ardvro/component/sqljson/rollbacktransaction";
        _connection.Submit(new object[]{ transactionId }, functionName, callback);
    }

}
