package ardvro.component.sqljson.controller;

import com.google.gson.Gson;
import com.google.gson.internal.LinkedTreeMap;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.UUID;

import ardvro.adapter.sso.ssoMenu;
import ardvro.adapter.sso.ssoUserSecurity;
import ardvro.adapter.sso.ssoUserSetting;
import ardvro.adapter.sso.ssoWorkgroup;
import ardvro.component.sqljson.UserData;
import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;
import ardvro.core.lib.util.Base64;

public class AuthenticationController
{
    private IConnection _conection;

    public AuthenticationController(IConnection connection)
    {
        _conection = connection;
    }

    public void ChangePassword(String username, String password, String newPassword, String repassword, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/ChangePassword";
        _conection.Submit(new Object[]{ username, password, newPassword, repassword }, functionName, onResponse);
    }

    public void ResetPassword(String email, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/ResetPassword";
        _conection.Submit(new Object[]{ email }, functionName, onResponse);
    }

    public void ResetPasswordConfirmation(String code, String password, String repassword, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/ResetPasswordConfirmation";
        _conection.Submit(new Object[]{ code, password, repassword }, functionName, onResponse);
    }

    public void RequestOtp(String email, String securityType, IResponseListener<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/RequestOtp";
        _conection.Submit(new Object[]{ email, securityType }, functionName, onResponse);
    }

    public void SaveUserSetting(String name, String value, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/SaveUserSetting";
        _conection.Submit(new Object[]{ name, value }, functionName, onResponse);
    }

    public void GetUserSettings(IResponseListener<ArrayList<ssoUserSetting>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetUserSettings";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void Register(String username, String password, String repassword, String email, IResponseListener<Integer> onResponse)
    {
        LinkedTreeMap<String, Object> emailObj = new LinkedTreeMap<String, Object>();
        emailObj.put("Email", email);
        Gson gson = new Gson();
        String jsonEmail = gson.toJson(emailObj);

        String functionName = "ardvro/component/sqljson/Authentication/Register";
        _conection.Submit(new Object[]{ username, password, repassword, jsonEmail }, functionName, onResponse);
    }

    public void RegisterActivateLogin(String username, String password, String repassword, String email, IResponseListener<String> onResponse)
    {
        LinkedTreeMap<String, Object> emailObj = new LinkedTreeMap<String, Object>();
        emailObj.put("Email", email);
        Gson gson = new Gson();
        String jsonEmail = gson.toJson(emailObj);

        String functionName = "ardvro/component/sqljson/Authentication/RegisterActivateLogin";
        _conection.Submit(new Object[]{ username, password, repassword, jsonEmail }, functionName, onResponse);
    }

    public void SaveUserSecurity(String securityType, String securityValue, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/SaveUserSecurity";
        _conection.Submit(new Object[]{ securityType, securityValue }, functionName, onResponse);
    }

    public void GetUserSecurities(IResponseListener<ArrayList<ssoUserSecurity>> onResponse)
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
            IResponseListener<Integer> onResponse)
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
            IResponseListener<Integer> onResponse)
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

    public void IsWorkgroupCodeAvailable(String code, IResponseListener<Boolean> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/IsWorkgroupCodeAvailable";
        _conection.Submit(new Object[]{ code }, functionName, onResponse);
    }

    public void GetUserWorkgroups(IResponseListener<ArrayList<ssoWorkgroup>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetUserWorkgroups";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GetUsersByWorkgroup(IResponseListener<ArrayList<ssoWorkgroup>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetUsersByWorkgroup";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GetRoles(IResponseListener<ArrayList<LinkedTreeMap<String, Object>>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetRoles";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GetUserRoles(String username, String workgroup, IResponseListener<ArrayList<LinkedTreeMap<String, Object>>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetUserRoles";
        _conection.Submit(new Object[]{ username, workgroup }, functionName, onResponse);
    }

    public void UpdateUserWorkgroupRoles(String id, String roles, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/UpdateUserWorkgroupRoles";
        _conection.Submit(new Object[]{ id, roles }, functionName, onResponse);
    }

    public void AddWorkgroupUsers(String workgroupId, String usernames, String roles, IResponseListener<String> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/AddWorkgroupUsers";
        _conection.Submit(new Object[]{ workgroupId, workgroupId, usernames, roles }, functionName, onResponse);
    }

    public void SetPrimaryWorkgroup(String workgroupName, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/SetPrimaryWorkgroup";
        _conection.Submit(new Object[]{ workgroupName }, functionName, onResponse);
    }

    public void GetAdministrationsMenu(IResponseListener<ArrayList<ssoMenu>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GetAdministrationsMenu";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void RegisterDbaObjectAccess(int workgroupId, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/RegisterDbaObjectAccess";
        _conection.Submit(new Object[]{ workgroupId }, functionName, onResponse);
    }

    public void RegisterDbaObjectAccessAllWorkgroups(IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/RegisterDbaObjectAccessAllWorkgroups";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

    public void ImportUsers(ArrayList<LinkedTreeMap<String, Object>> list, IResponseListener<Integer> onResponse)
    {
        LinkedTreeMap<String, ArrayList<LinkedTreeMap<String, Object>>> args = new LinkedTreeMap<String, ArrayList<LinkedTreeMap<String, Object>>>();
        args.put("List", list);

        String functionName = "ardvro/component/sqljson/Authentication/ImportUsers";
        _conection.Submit(args, functionName, onResponse);
    }

    public void RemoveUserWorkgroup(String id, IResponseListener<Object> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/RemoveUserWorkgroup";
        _conection.Submit(new Object[]{ id }, functionName, onResponse);
    }


    public void Login(String username, String password, final IResponseListener onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/Login";
        _conection.Submit(new Object[]{username, password}, functionName, new IResponseListener<String>() {
            @Override
            public String get_Code() {
                return UUID.randomUUID().toString();
            }

            @Override
            public boolean get_IsRemoveAfterCalled() {
                return false;
            }

            @Override
            public Type GetObjectType() {
                return String.class;
            }

            @Override
            public void OnResponseReceived(String args) {
                String a = args.toString();
                UserData userData = parseJwtToUserdata(a);
                onResponse.OnResponseReceived(userData);
            }
        });
    }

    private UserData parseJwtToUserdata(String jwtToken){
        //String jwtToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOiJST0xFX0FETUlOIiwiaXNzIjoibXlzZWxmIiwiZXhwIjoxNDcxMDg2MzgxfQ.1EI2haSz9aMsHjFUXNVz2Z4mtC0nMdZo6bo3-x-aRpw";
        System.out.println("------------ Decode JWT ------------");
        String[] split_string = jwtToken.split("\\.");
        String base64EncodedHeader = split_string[0];
        String base64EncodedBody = split_string[1];
        String base64EncodedSignature = split_string[2];

        System.out.println("~~~~~~~~~ JWT Header ~~~~~~~");

        byte[] bytes0 = Base64.decode(base64EncodedHeader, 0);
        String header = new String(bytes0);

        byte[] bytes1 = Base64.decode(base64EncodedBody, 0);
        String body = new String(bytes1);

        byte[] bytes2 = Base64.decode(base64EncodedSignature, 0);
        String signature = new String(bytes2);

        Gson gson = new Gson();
        LinkedTreeMap<String, Object> userAll = gson.fromJson(body, new LinkedTreeMap<String, Object>().getClass());
        String userdatajson = userAll.get("Data").toString();
        UserData user = gson.fromJson(userdatajson, UserData.class);
        user.Token = jwtToken;
        System.out.println("~~~~~~~~~ User ~~~~~~~");

        return  user;
    }


    public void LoginToken(String token, final IResponseListener<UserData> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/LoginToken";
        _conection.Submit(new Object[]{token}, functionName, new IResponseListener<String>() {
            @Override
            public String get_Code() {
                return UUID.randomUUID().toString();
            }

            @Override
            public boolean get_IsRemoveAfterCalled() {
                return true;
            }

            @Override
            public Type GetObjectType() {
                return String.class;
            }

            @Override
            public void OnResponseReceived(String args) {
                UserData userData = parseJwtToUserdata(args);
                onResponse.OnResponseReceived(userData);
            }
        });
    }

    public void OtpLogin(String code, boolean saveLogin, final IResponseListener<UserData> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/OtpLogin";
        _conection.Submit(new Object[]{ code, saveLogin }, functionName, new IResponseListener<String>() {
            @Override
            public String get_Code() {
                return UUID.randomUUID().toString();
            }

            @Override
            public boolean get_IsRemoveAfterCalled() {
                return false;
            }

            @Override
            public Type GetObjectType() {
                return String.class;
            }

            @Override
            public void OnResponseReceived(String args) {
                UserData userData = parseJwtToUserdata(args);
                onResponse.OnResponseReceived(userData);
            }
        });
    }

    public void GuestLogin(String name, String email, String id, final IResponseListener<UserData> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/GuestLogin";
        _conection.Submit(new Object[]{ name, email, id }, functionName, new IResponseListener<String>() {
            @Override
            public String get_Code() {
                return UUID.randomUUID().toString();
            }

            @Override
            public boolean get_IsRemoveAfterCalled() {
                return false;
            }

            @Override
            public Type GetObjectType() {
                return String.class;
            }

            @Override
            public void OnResponseReceived(String args) {
                UserData userData = parseJwtToUserdata(args);
                onResponse.OnResponseReceived(userData);
            }
        });
    }

    public void TwoFactorsLogin(String username, String password, String code, boolean saveLogin, final IResponseListener<UserData> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/TwoFactorsLogin";
        _conection.Submit(new Object[]{ username, password, code }, functionName, new IResponseListener<String>() {
            @Override
            public String get_Code() {
                return UUID.randomUUID().toString();
            }

            @Override
            public boolean get_IsRemoveAfterCalled() {
                return false;
            }

            @Override
            public Type GetObjectType() {
                return String.class;
            }

            @Override
            public void OnResponseReceived(String args) {
                UserData userData = parseJwtToUserdata(args);
                onResponse.OnResponseReceived(userData);
            }
        });
    }

    public void ActivateUser(String code, boolean saveLogin, final IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/ActivateUser";
        _conection.Submit(new Object[]{ code, saveLogin }, functionName, new IResponseListener<Integer>() {
            @Override
            public String get_Code() {
                return null;
            }

            @Override
            public boolean get_IsRemoveAfterCalled() {
                return false;
            }

            @Override
            public Type GetObjectType() {
                return null;
            }

            @Override
            public void OnResponseReceived(Integer args) {
                onResponse.OnResponseReceived(args);
            }
        });
    }

    public void Logout(IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Authentication/Logout";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

}
