namespace ardvro.sdk.net.component.sqljson.controller;

using System.Text.Json;
using ardvro.sdk.net.component.sqljson.db;
using ardvro.sdk.net.component.sqljson;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;
using ardvro.adapter.sso.ent;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using ardvro.adapter.sso;

public class AuthenticationController
{
    private IConnection _conection;

    public AuthenticationController(IConnection connection)
    {
        _conection = connection;
    }

    public void ChangePassword(String username, String password, String newPassword, String repassword, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/ChangePassword";
        _conection.Submit(new Object[]{ username, password, newPassword, repassword }, functionName, onResponse);
    }

    public void ResetPassword(String email, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/ResetPassword";
        _conection.Submit(new Object[]{ email }, functionName, onResponse);
    }

    public void ResetPasswordConfirmation(String code, String password, String repassword, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/ResetPasswordConfirmation";
        _conection.Submit(new Object[]{ code, password, repassword }, functionName, onResponse);
    }

    public void RequestOtp(String email, String securityType, Action<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/RequestOtp";
        _conection.Submit(new Object[]{ email, securityType }, functionName, onResponse);
    }

    public void SaveUserSetting(String name, String value, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/SaveUserSetting";
        _conection.Submit(new Object[]{ name, value }, functionName, onResponse);
    }

    public void GetUserSettings(Action<List<ssoUserSetting>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetUserSettings";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void Register(String username, String password, String repassword, String email, Action<int> onResponse)
    {
        var emailObj = new Flexible();
        emailObj.Add("Email", email);
        var jsonEmail = JsonSerializer.Serialize(email);

        String functionName = "ardvro/component/sqljson/Authentication/Register";
        _conection.Submit(new Object[]{ username, password, repassword, jsonEmail }, functionName, onResponse);
    }

    public void RegisterActivateLogin(String username, String password, String repassword, String email, Action<String> onResponse)
    {
        var emailObj = new Flexible();
        emailObj.Add("Email", email);
        var jsonEmail = JsonSerializer.Serialize(email);

        String functionName = "ardvro/component/sqljson/Authentication/RegisterActivateLogin";
        _conection.Submit(new Object[]{ username, password, repassword, jsonEmail }, functionName, onResponse);
    }

    public void SaveUserSecurity(String securityType, String securityValue, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/SaveUserSecurity";
        _conection.Submit(new Object[]{ securityType, securityValue }, functionName, onResponse);
    }

    public void GetUserSecurities(Action<List<ssoUserSecurity>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetUserSecurities";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void ActivateUserAndWorkgroup(
            String activationCode,
            String workgroupCode,
            String workgroupName,
            String countryCode,
            String workgroupCity,
            String workgroupZipCode,
            String workgroupAddress,
            String workgroupPhone,
            String workgroupEmail,
            String workgroupWebsite,
            String workgroupIdentityNumber,
            String mailServer,
            int smtpPort,
            int imapPort,
            String mailUsername,
            String mailPassword,
            String workgroupNote,
            Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/ActivateUserAndWorkgroup";
        Object[] args = new Object[]{
                activationCode,
                workgroupCode,
                workgroupName,
                countryCode,
                workgroupCity,
                workgroupZipCode,
                workgroupAddress,
                workgroupPhone,
                workgroupEmail,
                workgroupWebsite,
                workgroupIdentityNumber,
                mailServer,
                smtpPort,
                imapPort,
                mailUsername,
                mailPassword,
                workgroupNote
        };
        _conection.Submit(args, functionName, onResponse);
    }

    public void SaveWorkgroup(
            String id,
            String workgroupType,
            String workgroupCode,
            String workgroupName,
            String countryCode,
            String workgroupCity,
            String workgroupZipCode,
            String workgroupAddress,
            String workgroupPhone,
            String workgroupEmail,
            String workgroupWebsite,
            String workgroupIdentityNumber,
            String mailServer,
            int smtpPort,
            int imapPort,
            String mailUsername,
            String mailPassword,
            String workgroupNote,
            Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/SaveWorkgroup";
        Object[] args = new Object[]{
                id,
                workgroupType,
                workgroupCode,
                workgroupName,
                countryCode,
                workgroupCity,
                workgroupZipCode,
                workgroupAddress,
                workgroupPhone,
                workgroupEmail,
                workgroupWebsite,
                workgroupIdentityNumber,
                mailServer,
                smtpPort,
                imapPort,
                mailUsername,
                mailPassword,
                workgroupNote
        };
        _conection.Submit(args, functionName, onResponse);
    }

    public void IsWorkgroupCodeAvailable(String code, Action<Boolean> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/IsWorkgroupCodeAvailable";
        _conection.Submit(new Object[]{ code }, functionName, onResponse);
    }

    public void GetUserWorkgroups(Action<List<ssoWorkgroup>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetUserWorkgroups";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GetUsersByWorkgroup(Action<List<ssoWorkgroup>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetUsersByWorkgroup";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GetRoles(Action<List<Flexible>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetRoles";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GetUserRoles(String username, String workgroup, Action<List<Flexible>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetUserRoles";
        _conection.Submit(new Object[]{ username, workgroup }, functionName, onResponse);
    }

    public void UpdateUserWorkgroupRoles(String id, String roles, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/UpdateUserWorkgroupRoles";
        _conection.Submit(new Object[]{ id, roles }, functionName, onResponse);
    }

    public void AddWorkgroupUsers(String workgroupId, String usernames, String roles, Action<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/AddWorkgroupUsers";
        _conection.Submit(new Object[]{ workgroupId, workgroupId, usernames, roles }, functionName, onResponse);
    }

    public void SetPrimaryWorkgroup(String workgroupName, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/SetPrimaryWorkgroup";
        _conection.Submit(new Object[]{ workgroupName }, functionName, onResponse);
    }

    public void GetAdministrationsMenu(Action<List<ssoMenu>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetAdministrationsMenu";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void RegisterDbaObjectAccess(int workgroupId, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/RegisterDbaObjectAccess";
        _conection.Submit(new Object[]{ workgroupId }, functionName, onResponse);
    }

    public void RegisterDbaObjectAccessAllWorkgroups(Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/RegisterDbaObjectAccessAllWorkgroups";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

    public void ImportUsers(List<Flexible> list, Action<int> onResponse)
    {
        var args = new Flexible();
        args.Add("List", list);

        String functionName = "ardvro/component/sqljson/Authentication/ImportUsers";
        _conection.Submit(args, functionName, onResponse);
    }

    public void RemoveUserWorkgroup(String id, Action<Object> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/RemoveUserWorkgroup";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }


    public JwtSecurityToken ReadToken(string token)
    {
        var handler = new JwtSecurityTokenHandler();
        var jsonToken = handler.ReadToken(token);
        if (jsonToken == null)
        {
            return null;
        }

        if (!(jsonToken is JwtSecurityToken tokens))
        {
            return null;
        }

        if (tokens.ValidTo < DateTime.Now)
        {
            return null;
        }

        return tokens;
    }

    public void Login(string username, string password, Action<UserData> callback)
    {
        String functionName = "ardvro/component/sqljson/Authentication/Login";

        _conection.Submit(new Object[] { username, password }, functionName, 
            (string tokenString) => 
            {
                var token = ReadToken(tokenString);
                var userDataJson = token.Claims.FirstOrDefault(x => x.Type == "Data")?.Value;
                if (!string.IsNullOrWhiteSpace(userDataJson))
                {
                    var userData = JsonSerializer.Deserialize<UserData>(userDataJson);
                    callback?.Invoke(userData);
                }
            }
         );
    }

    public void LoginToken(string token, Action<UserData> callback)
    {
        String functionName = "ardvro/component/sqljson/Authentication/LoginToken";
        _conection.Submit(new Object[] { token }, functionName, (string tokenString) =>
           {
               var token = ReadToken(tokenString);
               var userDataJson = token.Claims.FirstOrDefault(x => x.Type == "Data")?.Value;
               if (!string.IsNullOrWhiteSpace(userDataJson))
               {
                   var userData = JsonSerializer.Deserialize<UserData>(userDataJson);
                   callback?.Invoke(userData);
               }
           }
        );
    }

    public void OtpLogin(String code, bool saveLogin, Action<UserData> callback)
    {
        String functionName = "ardvro/component/sqljson/Authentication/OtpLogin";
        _conection.Submit(new Object[]{ code, saveLogin }, functionName, (string tokenString) =>
            {
                var token = ReadToken(tokenString);
                var userDataJson = token.Claims.FirstOrDefault(x => x.Type == "Data")?.Value;
                if (!string.IsNullOrWhiteSpace(userDataJson))
                {
                    var userData = JsonSerializer.Deserialize<UserData>(userDataJson);
                    callback?.Invoke(userData);
                }
            }
        );
    }

    public void GuestLogin(String name, String email, String id, Action<UserData> callback)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GuestLogin";
        _conection.Submit(new Object[]{ name, email, id }, functionName, (string tokenString) =>
            {
                var token = ReadToken(tokenString);
                var userDataJson = token.Claims.FirstOrDefault(x => x.Type == "Data")?.Value;
                if (!string.IsNullOrWhiteSpace(userDataJson))
                {
                    var userData = JsonSerializer.Deserialize<UserData>(userDataJson);
                    callback?.Invoke(userData);
                }
            }
        );
    }

    public void TwoFactorsLogin(String username, String password, String code, bool saveLogin, Action<UserData> callback)
    {
        String functionName = "ardvro/component/sqljson/Authentication/TwoFactorsLogin";
        _conection.Submit(new Object[]{ username, password, code }, functionName, (string tokenString) =>
            {
                var token = ReadToken(tokenString);
                var userDataJson = token.Claims.FirstOrDefault(x => x.Type == "Data")?.Value;
                if (!string.IsNullOrWhiteSpace(userDataJson))
                {
                    var userData = JsonSerializer.Deserialize<UserData>(userDataJson);
                    callback?.Invoke(userData);
                }
            }
        );
    }

    public void ActivateUser(String code, bool saveLogin, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/ActivateUser";
        _conection.Submit(new Object[] { code, saveLogin }, functionName, onResponse);
    }

    public void Logout(Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/Logout";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

}
