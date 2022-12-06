package ardvro.component.sqljson;

import com.google.gson.internal.LinkedTreeMap;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.UUID;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;
import ardvro.core.lib.cache.Cache;

public class SqlJson
{
    static String SqlJsonCache = "SqlJsonCache";

    private IConnection _connection;

    private LinkedTreeMap<String, DbQueryFrom> _sqlJsons;

    public SqlJson(IConnection connection)
    {
        _connection = connection;
        init(this, null);
    }

    public SqlJson(IConnection connection, IResponseListener<SqlJson> onInit)
    {
        _connection = connection;
        init(this, onInit);
    }

    public DbQueryFrom Get(String from)
    {
        return  _sqlJsons.get(from);
    }

    private void init(final SqlJson sqljsonReference, final IResponseListener<SqlJson> onInit)
    {
        Object sqlJsonCacheObj = Cache.GetInstance().Get(SqlJsonCache);
        if (sqlJsonCacheObj != null)
        {
            return;
        }

        //String url = "ardvro/wf/sqljson/queryworkflow/getdbobjects";
        String url = "ardvro/component/sqljson/sql/getdbobjects";
        _connection.Submit(new Object[]{}, url, new IResponseListener<ArrayList<LinkedTreeMap<String, Object>>>() {
            @Override
            public String get_Code() { return UUID.randomUUID().toString(); }

            @Override
            public boolean get_IsRemoveAfterCalled() {
                return true;
            }

            @Override
            public Type GetObjectType() {
                return new ArrayList<LinkedTreeMap<String, Object>>().getClass();
            }

            @Override
            public void OnResponseReceived(ArrayList<LinkedTreeMap<String, Object>> args) {

                if (args == null)
                {
                    return;
                }

                _sqlJsons = new LinkedTreeMap<String, DbQueryFrom>();
                for(LinkedTreeMap<String, Object> item :args)
                {
                    DbQueryFrom dbQueryFrom = new DbQueryFrom(null, item.get("Name").toString(), _connection);
                    _sqlJsons.put(dbQueryFrom.From, dbQueryFrom);
                }

                Cache.GetInstance().Set(_sqlJsons.getClass(), SqlJsonCache, _sqlJsons);

                if (onInit != null)
                {
                    onInit.OnResponseReceived(sqljsonReference);
                }

                //Box box = (Box)args;
                //if (box == null && box.Data == null)
                //{
                    //return;
                //}

//                if (!box.Data.getClass().equals(Object[].class))
//                {
//                    return;
//                }
//
//                if (!box.Data.getClass().equals(Object[].class))
//                {
//
//                }
//
//                Object[] list = (Object[]) box.Data;
//
//                for(Object data : list)
//                {
//                    sqljson[data.Name] = new DbQueryFrom(data.Name, params.Connector);
//                    list.push(data.Name);
//                }
//
//                let dtm = new Date();
//                let expired = new Date(dtm.getFullYear(), dtm.getMonth(), dtm.getDate(), dtm.getHours() + 2, dtm.getMinutes());
//                Cache.Set(SqlJsonCache, list, expired);
//
//                if (params.OnLoad != null)
//                {
//                    params.OnLoad(sqljson);
//                }

            }
        });
    }

    public void GetSchema(IResponseListener<ArrayList<LinkedTreeMap<String, Object>>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/sql/getschema";
        _connection.Submit(new Object[]{}, functionName, onResponse);
    };

    public void BeginTransaction(IResponseListener<String> callback)
    {
        String functionName = "ardvro/component/sqljson/begintransaction";
        _connection.Submit(new Object[]{}, functionName, callback);
    }

    public void RemoveTransaction(String transactionId, String commandId, IResponseListener<String> callback)
    {
        String functionName = "ardvro/component/sqljson/removetransaction";
        _connection.Submit(new Object[]{ transactionId, commandId }, functionName, callback);
    }

    public void CommitTransaction(String transactionId, IResponseListener<String> callback)
    {
        String functionName = "ardvro/component/sqljson/committransaction";
        _connection.Submit(new Object[]{ transactionId }, functionName, callback);
    }

    public void RollbackTransaction(String transactionId, IResponseListener<String> callback)
    {
        String functionName = "ardvro/component/sqljson/rollbacktransaction";
        _connection.Submit(new Object[]{ transactionId }, functionName, callback);
    }

}
