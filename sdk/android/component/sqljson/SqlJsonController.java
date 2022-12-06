package ardvro.component.sqljson;

import com.google.gson.internal.LinkedTreeMap;

import java.util.ArrayList;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class SqlJsonController
{
    private SqlJson dbcontext;

    public SqlJsonController(IConnection connection)
    {
        dbcontext = new SqlJson(connection);
    }

    private DbQuery query(String szSqlFrom, DbQueryJoin joins, DbQueryWhere whereFilters, String szSqlGroupBy, String szSqlOrder, int intPageSize, int intPageIndex)
    {
        DbQuery query = dbcontext.Get(szSqlFrom);

        if (joins != null && joins.JoinType != null && joins.JoinType != "" && joins.Joins != null && joins.Joins != "")
        {
            //query = query[joins.JoinType](joins.Joins);
            query = joins;
        }

        if (whereFilters != null && whereFilters.Where != null && whereFilters.Where != "")
        {
            Object[] params = whereFilters.Parameters != null ? whereFilters.Parameters: null;
            query = ((DbQueryFrom)query).Where(whereFilters.Where, params);
        }

        if (szSqlGroupBy != null && szSqlGroupBy != "")
        {
            query = ((DbQueryFrom)query).GroupBy(szSqlGroupBy);
        }

        if (szSqlOrder != null && szSqlOrder != "")
        {
            query = ((DbQueryFrom)query).OrderBy(szSqlOrder);
        }

        if (intPageSize > 0)
        {
            query = ((DbQueryFrom)query).Limit(intPageIndex, intPageSize);
        }
        else if (intPageSize > 0)
        {
            query = ((DbQueryFrom)query).Limit(intPageSize);
        }

        return query;
    }


    private void send(Response dbquery, IResponseListener responseListener)
    {
        dbquery.Send(responseListener);
    }

    public DbQuery Query(String szSqlFrom, DbQueryJoin joins, DbQueryWhere whereFilters, String szSqlGroupBy, String szSqlOrder, int intPageSize, int intPageIndex)
    {
        return  query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, intPageIndex);
    }

    public void Send(Response dbquery, IResponseListener responseListener)
    {
        dbquery.Send(responseListener);
    }

    public void Paging (String szSqlFrom, DbQueryJoin joins, DbQueryWhere whereFilters, String szSqlGroupBy, String szSqlOrder, int intPageSize, int intPageIndex, String szSqlSelect, QueryMode queryMode, IResponseListener callback)
    {
        DbQuery dbquery = query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, intPageIndex);

        if (szSqlSelect == null || szSqlSelect == "")
        {
            szSqlSelect = "*";
        }

        Response preQuery;
        if (queryMode == QueryMode.Struct)
        {
            preQuery = dbquery.Paging(szSqlSelect);
        }
        else
        {
            preQuery = dbquery.PagingJsons(szSqlSelect);
        }

        send(preQuery, callback);
    }

    public void List(String szSqlFrom, DbQueryJoin joins, DbQueryWhere whereFilters, String szSqlGroupBy, String szSqlOrder, int intPageSize, String szSqlSelect, QueryMode queryMode, IResponseListener callback)
    {
        DbQuery dbquery = query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, 0);

        if (szSqlSelect == null || szSqlSelect == "")
        {
            szSqlSelect = "*";
        }

        Response preQuery;
        if (queryMode == QueryMode.Struct)
        {
            preQuery = dbquery.List(szSqlSelect);
        }
        else
        {
            preQuery = dbquery.Jsons(szSqlSelect);
        }
        send(preQuery, callback);
    }

    public void First(String szSqlFrom, DbQueryJoin joins, DbQueryWhere whereFilters, String szSqlGroupBy, String szSqlOrder, String szSqlSelect, QueryMode queryMode, IResponseListener callback)
    {
        DbQuery dbquery = query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, 1, 0);

        if (szSqlSelect == null || szSqlSelect == "")
        {
            szSqlSelect = "*";
        }

        Response preQuery;
        if (queryMode == QueryMode.Struct)
        {
            preQuery = dbquery.First(szSqlSelect);
        }
        else
        {
            preQuery = dbquery.Json(szSqlSelect);
        }
        send(preQuery, callback);
    }

    public void Insert(String szSqlFrom, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).Insert(data).Send(callback);
    }

    public void Update(String szSqlFrom, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).Update(data).Send(callback);
    }

    public void Upsert(String szSqlFrom, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).Upsert(data).Send(callback);
    }

    public void Save(String szSqlFrom, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).Save(data).Send(callback);
    }

    public void Delete(String szSqlFrom, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).Delete(data).Send(callback);
    }


    public void InsertTransaction(String szSqlFrom, String transactionId, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).InsertTransaction(transactionId, data).Send(callback);
    }

    public void UpdateTransaction(String szSqlFrom, String transactionId, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).UpdateTransaction(transactionId, data).Send(callback);
    }

    public void UpsertTransaction(String szSqlFrom, String transactionId, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).UpsertTransaction(transactionId, data).Send(callback);
    }

    public void DeleteTransaction(String szSqlFrom, String transactionId, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).DeleteTransaction(transactionId, data).Send(callback);
    }

    public void SaveTransaction(String szSqlFrom, String transactionId, Object data, IResponseListener callback)
    {
        dbcontext.Get(szSqlFrom).SaveTransaction(transactionId, data).Send(callback);
    }

    public void GetSchema(IResponseListener<ArrayList<LinkedTreeMap<String, Object>>> onResponse)
    {
        dbcontext.GetSchema(onResponse);
    }

    public void BeginTransaction(IResponseListener<String> callback)
    {
        dbcontext.BeginTransaction(callback);
    }

    public void RemoveTransaction(String transactiondId, String commandId, IResponseListener<String> callback)
    {
        dbcontext.RemoveTransaction(transactiondId, commandId, callback);
    }

    public void CommitTransaction(String transactionId, IResponseListener<String> callback)
    {
        dbcontext.CommitTransaction(transactionId, callback);
    }

    public void RollbackTransaction(String transactionId, IResponseListener<String> callback)
    {
        dbcontext.RollbackTransaction(transactionId, callback);
    }

}
