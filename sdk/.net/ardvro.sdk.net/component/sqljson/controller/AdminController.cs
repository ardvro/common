namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.sdk.net.component.sqljson.db;
using ardvro.sdk.net.component.sqljson;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;
using ardvro.adapter.sso.ent;
using ardvro.adapter.sso;

public class AdminController
{
    private IConnection _conection;
    private SqlJson dbcontext;

    public AdminController(IConnection connection)
    {
        _conection = connection;
        dbcontext = new SqlJson(connection);
    }

    public DbQueryFrom GetTable (string tableName)
    {
        if (dbcontext == null)
        {
            return null;
        }

        return dbcontext.Get(tableName);
    }

    public void ClearCache(Action<string> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/ClearCache";
        _conection.Submit(new object[]{}, functionName, onResponse);
    }

    public void Find(object id, Action<ssoApplication> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/Find";
        _conection.Submit(new object[]{id}, functionName, onResponse);
    }

    public void CreateApplication(string appName, string url, string dbscript, Action<ssoApplication> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/CreateApplication";
        _conection.Submit(new object[]{appName, url, dbscript}, functionName, onResponse);
    }

    public void DeleteApplication(object id, Action<int> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/DeleteApplication";
        _conection.Submit(new object[]{ id }, functionName, onResponse);
    }

    public void BackupDatabases(Action<string> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/BackupDatabases";
        _conection.Submit(new object[]{ }, functionName, onResponse);
    }

    public void BackupDatabase(object id, Action<string> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/BackupDatabase";
        _conection.Submit(new object[]{ id }, functionName, onResponse);
    }

    public void Restart(Action<int> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/Restart";
        _conection.Submit(new object[]{ }, functionName, onResponse);
    }

    public void UploadCustomAssemblies(List<FileBase64> assemblies, Action<int> onResponse)
    {
        var data = new Flexible();
        data["List"] = assemblies;
        string functionName = "ardvro/component/sqljson/Admin/UploadCustomAssemblies";
        _conection.Submit(data, functionName, onResponse);
    }

    public void RemoveCustomAssemblies(List<FileBase64> assemblies, Action<int> onResponse)
    {
        var data = new Flexible();
        data["List"] = assemblies;
        string functionName = "ardvro/component/sqljson/Admin/RemoveCustomAssemblies";
        _conection.Submit(data, functionName, onResponse);
    }

    public void GetWebApis(Action<List<WebApiSchema>> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/GetWebApis";
        _conection.Submit(new object[] { }, functionName, onResponse);
    }

    public void SaveWebApi(WebApiSchema data, Action<int> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/GetWebApis";
        _conection.Submit(data, functionName, onResponse);
    }

    public void RemoveWebApi(WebApiSchema data, Action<int> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/RemoveWebApi";
        _conection.Submit(data, functionName, onResponse);
    }

    public void GetApiGateways(Action<List<ApiGatewaySchema>> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/GetApiGateways";
        _conection.Submit(new object[] { }, functionName, onResponse);
    }

    public void SaveApiGateway(ApiGatewaySchema data, Action<int> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/SaveApiGateway";
        _conection.Submit(data, functionName, onResponse);
    }

    public void RemoveApiGateway(ApiGatewaySchema data, Action<int> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/RemoveApiGateway";
        _conection.Submit(data, functionName, onResponse);
    }

    public void GetClusterConfigs(Action<List<KeyValuePair<string, object>>> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/GetClusterConfigs";
        _conection.Submit(new object[] { }, functionName, onResponse);
    }

    public void SaveClusterConfig(KeyValuePair<string, object> data, Action<int> onResponse)
    {
        string functionName = "ardvro/component/sqljson/Admin/SaveClusterConfig";
        _conection.Submit(data, functionName, onResponse);
    }

}
