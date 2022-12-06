package ardvro.component.sqljson.controller;

import com.google.gson.internal.LinkedTreeMap;

import java.util.ArrayList;

import ardvro.adapter.sso.ApiGatewaySchema;
import ardvro.adapter.sso.WebApiSchema;
import ardvro.adapter.sso.ssoApplication;
import ardvro.component.sqljson.DbQueryFrom;
import ardvro.component.sqljson.SqlJson;
import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;
import ardvro.core.lib.common.FileBase64;

public class AdminController
{
    private IConnection _conection;
    private SqlJson dbcontext;

    public AdminController(IConnection connection)
    {
        _conection = connection;
        dbcontext = new SqlJson(connection);
    }

    public DbQueryFrom GetTable (String tableName)
    {
        if (dbcontext == null)
        {
            return null;
        }

        return dbcontext.Get(tableName);
    }

    public void ClearCache(IResponseListener onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/ClearCache";
        _conection.Submit(new Object[]{}, functionName, onResponse);
    }

    public void Find(Object id, IResponseListener<ssoApplication> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/Find";
        _conection.Submit(new Object[]{id}, functionName, onResponse);
    }

    public void CreateApplication(String appName, String url, String dbscript, IResponseListener<ssoApplication> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/CreateApplication";
        _conection.Submit(new Object[]{appName, url, dbscript}, functionName, onResponse);
    }

    public void DeleteApplication(Object id, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/DeleteApplication";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }

    public void BackupDatabases(IResponseListener<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/BackupDatabases";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void BackupDatabase(Object id, IResponseListener<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/BackupDatabase";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }

    public void Restart(IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/Restart";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void UploadCustomAssemblies(ArrayList<FileBase64> assemblies, IResponseListener<Integer> onResponse)
    {
        LinkedTreeMap<String, Object> data = new LinkedTreeMap<String, Object>();
        data.put("List", assemblies);
        String functionName = "ardvro/component/sqljson/Admin/UploadCustomAssemblies";
        _conection.Submit(data, functionName, onResponse);
    }

    public void RemoveCustomAssemblies(ArrayList<FileBase64> assemblies, IResponseListener<Integer> onResponse)
    {
        LinkedTreeMap<String, Object> data = new LinkedTreeMap<String, Object>();
        data.put("List", assemblies);
        String functionName = "ardvro/component/sqljson/Admin/RemoveCustomAssemblies";
        _conection.Submit(data, functionName, onResponse);
    }

    public void GetWebApis(IResponseListener<ArrayList<WebApiSchema>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/GetWebApis";
        _conection.Submit(new Object[] { }, functionName, onResponse);
    }

    public void SaveWebApi(WebApiSchema data, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/GetWebApis";
        _conection.Submit(data, functionName, onResponse);
    }

    public void RemoveWebApi(WebApiSchema data, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/RemoveWebApi";
        _conection.Submit(data, functionName, onResponse);
    }

    public void GetApiGateways(IResponseListener<ArrayList<ApiGatewaySchema>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/GetApiGateways";
        _conection.Submit(new Object[] { }, functionName, onResponse);
    }

    public void SaveApiGateway(ApiGatewaySchema data, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/SaveApiGateway";
        _conection.Submit(data, functionName, onResponse);
    }

    public void RemoveApiGateway(ApiGatewaySchema data, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/RemoveApiGateway";
        _conection.Submit(data, functionName, onResponse);
    }

    public void GetClusterConfigs(IResponseListener<ArrayList<LinkedTreeMap<String, Object>>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/GetClusterConfigs";
        _conection.Submit(new Object[] { }, functionName, onResponse);
    }

    public void SaveClusterConfig(LinkedTreeMap<String, Object> data, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Admin/SaveClusterConfig";
        _conection.Submit(data, functionName, onResponse);
    }

}
