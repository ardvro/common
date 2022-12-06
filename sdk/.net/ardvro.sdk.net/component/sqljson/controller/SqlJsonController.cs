namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.sdk.net.component.sqljson.db;
using ardvro.sdk.net.component.sqljson;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

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
            Object[] prms = whereFilters.Parameters != null ? whereFilters.Parameters: null;
            query = ((DbQueryFrom)query).Where(whereFilters.Where, prms);
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


    private void send<T>(Response dbquery, Action<T> responseListener)
    {
        dbquery.Send(responseListener);
    }

    public DbQuery Query(String szSqlFrom, DbQueryJoin joins, DbQueryWhere whereFilters, String szSqlGroupBy, String szSqlOrder, int intPageSize, int intPageIndex)
    {
        return  query(szSqlFrom, joins, whereFilters, szSqlGroupBy, szSqlOrder, intPageSize, intPageIndex);
    }

    public void Send<T>(Response dbquery, Action<T> responseListener)
    {
        dbquery.Send(responseListener);
    }

    public void Paging<T>(String szSqlFrom, DbQueryJoin joins, DbQueryWhere whereFilters, String szSqlGroupBy, String szSqlOrder, int intPageSize, int intPageIndex, String szSqlSelect, QueryMode queryMode, Action<T> callback)
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

    public void List<T>(String szSqlFrom, DbQueryJoin joins, DbQueryWhere whereFilters, String szSqlGroupBy, String szSqlOrder, int intPageSize, String szSqlSelect, QueryMode queryMode, Action<T> callback)
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

    public void First<T>(String szSqlFrom, DbQueryJoin joins, DbQueryWhere whereFilters, String szSqlGroupBy, String szSqlOrder, String szSqlSelect, QueryMode queryMode, Action<T> callback)
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

    public void Insert<T>(String szSqlFrom, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).Insert(data).Send(callback);
    }

    public void Update<T>(String szSqlFrom, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).Update(data).Send(callback);
    }

    public void Upsert<T>(String szSqlFrom, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).Upsert(data).Send(callback);
    }

    public void Save<T>(String szSqlFrom, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).Save(data).Send(callback);
    }

    public void Delete<T>(String szSqlFrom, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).Delete(data).Send(callback);
    }


    public void InsertTransaction<T>(String szSqlFrom, String transactionId, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).InsertTransaction(transactionId, data).Send(callback);
    }

    public void UpdateTransaction<T>(String szSqlFrom, String transactionId, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).UpdateTransaction(transactionId, data).Send(callback);
    }

    public void UpsertTransaction<T>(String szSqlFrom, String transactionId, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).UpsertTransaction(transactionId, data).Send(callback);
    }

    public void DeleteTransaction<T>(String szSqlFrom, String transactionId, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).DeleteTransaction(transactionId, data).Send(callback);
    }

    public void SaveTransaction<T>(String szSqlFrom, String transactionId, Object data, Action<T> callback)
    {
        dbcontext.Get(szSqlFrom).SaveTransaction(transactionId, data).Send(callback);
    }

    public void GetSchema(Action<List<Flexible>> onResponse)
    {
        dbcontext.GetSchema(onResponse);
    }

    public void BeginTransaction(Action<String> callback)
    {
        dbcontext.BeginTransaction(callback);
    }

    public void RemoveTransaction(String transactiondId, String commandId, Action<string> callback)
    {
        dbcontext.RemoveTransaction(transactiondId, commandId, callback);
    }

    public void CommitTransaction(String transactionId, Action<string> callback)
    {
        dbcontext.CommitTransaction(transactionId, callback);
    }

    public void RollbackTransaction(String transactionId, Action<string> callback)
    {
        dbcontext.RollbackTransaction(transactionId, callback);
    }

}
