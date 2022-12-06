var SqlJson = function SqlJson(params)
{
    const sqljson = {};
    const SqlJsonCache = "SqlJsonCache";

    init();

    function init()
    {
        let caches = Cache.Get(SqlJsonCache);
        if (caches != null && caches.length > 0)
        {
            caches.forEach(function (name, i)
            {
                sqljson[name] = new DbQueryFrom(name, params.Connector);
            });

            if (params.OnLoad != null)
            {
                params.OnLoad(sqljson);
            }
            return sqljson;
        }

        let url = "ardvro/component/sqljson/sql/getdbobjects";
        params.Connector.Submit([], url, function (box)
        {
            if (box !== null && box.Data !== null && box.Data.length > 0)
            {
                let list = [];
                box.Data.forEach(function (data, i) 
                {
                    sqljson[data.Name] = new DbQueryFrom(data.Name, params.Connector);
                    list.push(data.Name);
                });

                let dtm = new Date();
                let expired = new Date(dtm.getFullYear(), dtm.getMonth(), dtm.getDate(), dtm.getHours() + 2, dtm.getMinutes());
                Cache.Set(SqlJsonCache, list, expired);

                if (params.OnLoad != null)
                {
                    params.OnLoad(sqljson);
                }
            }
        });
    }

    sqljson.GetSchema = function (onResponse)
    {
        params.Connector.Submit([], "ardvro/component/sqljson/sql/getschema", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    sqljson.RemoveTransaction = function (transactionId, commandId, onCallback)
    {
        params.Connector.Submit([transactionId, commandId], "ardvro/component/sqljson/removetransaction", function (box)
        {
            onCallback != null ? onCallback(box == null ? null : box.Data) : null;
        });
    };

    sqljson.BeginTransaction = function (onCallback)
    {
        params.Connector.Submit([], "ardvro/component/sqljson/begintransaction", function (box)
        {
            onCallback != null ? onCallback(box == null ? null : box.Data) : null;
        });
    };

    sqljson.CommitTransaction = function (transactionId, onCallback)
    {
        params.Connector.Submit([transactionId], "ardvro/component/sqljson/committransaction", function (box)
        {
            onCallback != null ? onCallback(box == null ? null : box.Data) : null;
        });
    };

    sqljson.RollbackTransaction = function (transactionId, onCallback)
    {
        params.Connector.Submit([transactionId], "ardvro/component/sqljson/rollbacktransaction", function (box)
        {
            onCallback != null ? onCallback(box == null ? null : box.Data) : null;
        });
    };



    return sqljson;
};

var Response = function Response(requestData, connector)
{
    const response = {};

    response.Send = function (onResponseReceived)
    {
        connector.Submit(requestData, requestData.Url, function onResponseReceivedFunction(box)
        {
            if (box !== null)
            {
                if (onResponseReceived != null)
                {
                    onResponseReceived(box.Data);
                }

                if (box.Status == 0 && box.Data == null && box.Message != null && box.Message != "")
                {
                    console.error(box);
                }
            }
            else
            {
                console.error("There was an error from server when processing a request:" + JSON.stringify(requestData));
            }
        });
    };

    //considering to remove this function for security reasons 2020-11-08 14:18
    //this function only validate the methodName on db object table without checking the whole query inside it, 
    //this is a security hole, attacker can put the other table to access which have been set to no CRUD access, it will bypass the standard dbaobject validation
    /*response.Invoke = function (methodName, onResponseReceived)
    {
        requestData.Method = methodName;
        connector.Submit(requestData, requestData.Url, function onResponseReceivedFunction(box)
        {
            if (box !== null)
            {
                if (onResponseReceived != null)
                {
                    onResponseReceived(box.Data);
                }

                if (box.Status == 0 && box.Data == null && box.Message != null && box.Message != "")
                {
                    console.error(box);
                }
            }
            else
            {
                console.error("There was an error from server when processing a request:" + JSON.stringify(requestData));
            }
        });
    };*/

    return response;
};

var DbQuery = function DbQuery(connector)
{
    const query = {};

    query.ProcedureJsons = function (parameters)
    {
        let args = [];
        //arguments is a built in function of javascript to detect the number of parameters the passed to the function, perhaps need var arg parameters
        for (let i = 0; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }
        let qr = new DbQueryProcedure(query, query.From, args, connector);
        qr.Url = "ardvro/component/sqljson/sql/procedurejsons";
        let response = new Response(qr, connector);
        return response;
    };

    query.Procedure = function (parameters)
    {
        let args = [];
        //arguments is a built in function of javascript to detect the number of parameters the passed to the function, perhaps need var arg parameters
        for (let i = 0; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }
        let qr = new DbQueryProcedure(query, query.From, args, connector);
        qr.Url = "ardvro/component/sqljson/sql/procedure";
        let response = new Response(qr, connector);
        return response;
    };

    query.FunctionJson = function (parameters)
    {
        let args = [];
        //arguments is a built in function of javascript to detect the number of parameters the passed to the function, perhaps need var arg parameters
        for (let i = 0; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }
        let qr = new DbQueryProcedure(query, query.From, args, connector);
        qr.Url = "ardvro/component/sqljson/sql/functionjson";
        let response = new Response(qr, connector);
        return response;
    };

    query.Function = function (parameters)
    {
        let args = [];
        //arguments is a built in function of javascript to detect the number of parameters the passed to the function, perhaps need var arg parameters
        for (let i = 0; i < arguments.length; i++)
        {
            args.push(arguments[i]);
        }
        let qr = new DbQueryFunction(query, query.From, args, connector);
        qr.Url = "ardvro/component/sqljson/sql/function";
        let response = new Response(qr, connector);
        return response;
    };

    query.List = function (fields)
    {
        let qr = new DbQuerySelect(query, fields, connector);
        qr.Url = "ardvro/component/sqljson/sql/list";
        let response = new Response(qr, connector);
        return response;
    };

    query.First = function (fields)
    {
        let qr = new DbQuerySelect(query, fields, connector);
        qr.Url = "ardvro/component/sqljson/sql/first";
        let response = new Response(qr, connector);
        return response;
    };

    query.Paging = function (fields)
    {
        let qr = new DbQuerySelect(query, fields, connector);
        qr.Url = "ardvro/component/sqljson/sql/paging";
        let response = new Response(qr, connector);
        return response;
    };

    query.PagingJsons = function (fields)
    {
        let qr = new DbQuerySelect(query, fields, connector);
        qr.Url = "ardvro/component/sqljson/sql/pagingjsons";
        let response = new Response(qr, connector);
        return response;
    };

    query.Jsons = function (fields)
    {
        let qr = new DbQuerySelect(query, fields, connector);
        qr.Url = "ardvro/component/sqljson/sql/jsons";
        let response = new Response(qr, connector);
        return response;
    };

    query.Json = function (fields)
    {
        let qr = new DbQuerySelect(query, fields, connector);
        qr.Url = "ardvro/component/sqljson/sql/json";
        let response = new Response(qr, connector);
        return response;
    };

    query.Aggregate = function (aggregateType, field)
    {
        let qr = new DbQueryAggregate(query, aggregateType, field, connector);
        qr.Url = "ardvro/component/sqljson/sql/aggregate";
        let response = new Response(qr, connector);
        return response;
    };

    query.Count = function (field)
    {
        return query.Aggregate("COUNT", field);
    };

    query.Sum = function (field)
    {
        return query.Aggregate("SUM", field);
    };

    query.Avg = function (field)
    {
        return query.Aggregate("AVG", field);
    };

    query.Max = function (field)
    {
        return query.Aggregate("MAX", field);
    };

    query.Min = function (field)
    {
        return query.Aggregate("MIN", field);
    };

    return query;
};

var DbQueryFrom = function DbQueryFrom(from, connector)
{
    const query = new DbQueryJoin(null, null, null, connector);
    query.From = from;
    query.QueryType = "FROM";

    query.Find = function (id)
    {
        let qr = new DbQueryFind(query, id, connector);
        qr.Url = "ardvro/component/sqljson/sql/find";
        let response = new Response(qr, connector);
        return response;
    };

    query.Insert = function (data)
    {
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/insert";
        let response = new Response(qr, connector);
        return response;
    };

    query.Update = function (data)
    {
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/update";
        let response = new Response(qr, connector);
        return response;
    };

    query.Upsert = function (data)
    {
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/upsert";
        let response = new Response(qr, connector);
        return response;
    };

    query.Save = function (data)
    {
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/save";
        let response = new Response(qr, connector);
        return response;
    };

    query.Delete = function (data)
    {
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/delete";
        let response = new Response(qr, connector);
        return response;
    };


    query.InsertTransaction = function (transactionId, data)
    {
        data.TransactionId = transactionId;
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/inserttransaction";
        let response = new Response(qr, connector);
        return response;
    };

    query.UpdateTransaction = function (transactionId, data)
    {
        data.TransactionId = transactionId;
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/updatetransaction";
        let response = new Response(qr, connector);
        return response;
    };

    query.UpsertTransaction = function (transactionId, data)
    {
        data.TransactionId = transactionId;
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/upserttransaction";
        let response = new Response(qr, connector);
        return response;
    };

    query.SaveTransaction = function (transactionId, data)
    {
        data.TransactionId = transactionId;
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/savetransaction";
        let response = new Response(qr, connector);
        return response;
    };

    query.DeleteTransaction = function (transactionId, data)
    {
        data.TransactionId = transactionId;
        let qr = new DbQueryManipulation(query, data, connector);
        qr.Url = "ardvro/component/sqljson/sql/deletetransaction";
        let response = new Response(qr, connector);
        return response;
    };


    return query;
};

var DbQueryJoin = function DbQueryJoin(parent, joins, joinType, connector)
{
    const query = new DbQueryWhere(null, null, null, connector);
    query.Base = parent;
    query.Joins = joins;
    query.QueryType = "JOIN";
    query.JoinType = joinType;

    query.LeftJoin = function (joins)
    {
        let order = new DbQueryJoin(query, joins, "LEFT", connector);
        return order;
    };

    query.RightJoin = function (joins)
    {
        let order = new DbQueryJoin(query, joins, "RIGHT", connector);
        return order;
    };

    query.Join = function (joins)
    {
        let order = new DbQueryJoin(query, joins, "", connector);
        return order;
    };

    query.Where = function (where, args)
    {
        let params = [];
        if (arguments.length > 2)
        {
            for (let i = 1; i < arguments.length; i++)
            {
                params.push(arguments[i]);
            }
        }
        else if (arguments.length == 2 && Array.isArray(args) && args.length > 0)
        {
            for (let i = 0; i < args.length; i++)
            {
                params.push(args[i]);
            }
        }
        else
        {
            params.push(args);
        }

        let whereqr = new DbQueryWhere(query, where, params, connector);
        return whereqr;
    };

    return query;
};

var DbQueryWhere = function DbQueryWhere(parent, where, parameters, connector)
{
    const query = new DbQueryGroup(null, null, connector);
    query.Base = parent;
    query.QueryType = "WHERE";
    query.Where = where;
    query.Parameters = parameters;

    query.GroupBy = function (groups)
    {
        let groupby = new DbQueryGroup(query, groups, connector);
        return groupby;
    };

    return query;
};

var DbQueryGroup = function DbQueryGroup(parent, fields, connector)
{
    const query = new DbQueryOrder(null, null, connector);
    query.Base = parent;
    query.QueryType = "GROUPBY";
    query.Groups = fields;

    query.OrderBy = function (orderby)
    {
        let order = new DbQueryOrder(query, orderby, connector);
        return order;
    };

    return query;
};

var DbQueryOrder = function DbQueryOrder(parent, orderby, connector)
{
    const query = new DbQueryLimit(null, null, null, connector);
    query.Base = parent;
    query.QueryType = "ORDERBY";
    query.OrderBy = orderby;

    query.Limit = function (index, size)
    {
        let limit = new DbQueryLimit(query, index, size, connector);
        return limit;
    };

    return query;
};

var DbQueryLimit = function DbQueryLimit(parent, offset, rows, connector)
{
    const query = new DbQuerySelect(null, null, connector);
    query.Base = parent;
    query.QueryType = "LIMIT";
    query.Offset = offset;
    query.Rows = rows;

    query.Select = function (fields)
    {
        let select = new DbQuerySelect(query, fields, connector);
        return select;
    };

    query.Fuzzy = function (criterias)
    {
        let fuzzy = new DbQueryFuzzy(query, criterias, connector);
        //query.DbQueryFuzzy = fuzzy;
        return fuzzy;
    };

    return query;
};

var DbQuerySelect = function DbQuerySelect(parent, fields, connector)
{
    const query = new DbQuery(connector);
    query.Base = parent;
    query.QueryType = "SELECT";
    query.Fields = fields == null ? "*" : fields;

    return query;
};

var DbQueryFind = function DbQueryFind(parent, id, connector)
{
    const query = new DbQuery(connector);
    query.Base = parent;
    query.QueryType = "FIND";
    query.Id = id;

    return query;
};

var DbQueryManipulation = function DbQueryManipulation(parent, data, connector)
{
    const query = new DbQuery(connector);
    query.Base = parent;
    query.QueryType = "MANIPULATION";
    query.Data = data;

    return query;
};

var DbQueryAggregate = function DbQueryAggregate(parent, aggregateType, field, connector)
{
    const query = new DbQuery(connector);
    query.Base = parent;
    query.QueryType = "AGGREGATE";
    query.AggregateType = aggregateType;
    query.Field = field;

    return query;
};

var DbQueryProcedure = function DbQueryProcedure(parent, name, parameters, connector)
{
    const query = new DbQuery(connector);
    query.Base = parent;
    query.QueryType = "PROCEDURE";
    query.Parameters = parameters;
    query.ProcedureName = name;

    return query;
};

var DbQueryFunction = function DbQueryFunction(parent, name, parameters, connector)
{
    const query = new DbQuery(connector);
    query.Base = parent;
    query.QueryType = "FUNCTION";
    query.Parameters = parameters;
    query.FunctionName = name;

    return query;
};

var DbQueryFuzzy = function DbQueryFuzzy(parent, criterias, connector)
{
    const query = new DbQuery(connector);
    query.Base = parent;
    query.QueryType = "FUZZY";

    query.Criterias = criterias;

    return query;
};
