var AuthenticationController = function authenticationController(props)
{
    let user = {};

    let CookieDays = 7;

    function getPrimaryWorkgroupOption(userinfo)
    {
        let optionWorkgroups = [];

        let option = userinfo.Data.Workgroups.find(x => x.Status == 1);
        optionWorkgroups.push(option);

        return optionWorkgroups;
    }

    function loginFailed()
    {
        Utils.DeleteCookie(Constant.Login);
        Utils.DeleteCookie(Constant.Language);
    }

    function prepareUser(token, onResponse)
    {
        let usr = Utils.ParseJwt(token);
        if (usr == null)
        {
            onResponse != null ? onResponse(null) : null;
            return;
        }

        let userdata = JSON.parse(usr.Data);
        usr.Data = userdata;

        usr.PrimaryWorkgroupOption = getPrimaryWorkgroupOption(usr);
        if (usr.Language != null && usr.PrimaryWorkgroupCountry != null && usr.Language != "" && usr.PrimaryWorkgroupCountry != "") 
        {
            usr.CountryLanguage = usr.Language + '-' + usr.PrimaryWorkgroupCountry;
        }
        else
        {
            usr.CountryLanguage = 'en-US';
        }

        usr.Token = "Bearer " + token;

        usr.IsInRoles = function (roles)
        {
            for (let i = 0; i < roles.length; i++)
            {
                if (typeof usr.Roles === "string")
                {
                    if (usr.Roles == usr.HostWorkgroupCode.toLowerCase().concat('.', roles[i]))
                    {
                        return true;
                    }
                }
                else
                {
                    let workgrouprole = usr.Roles.find(x => x == usr.HostWorkgroupCode.toLowerCase().concat('.', roles[i]));
                    if (workgrouprole != null)
                    {
                        return true;
                    }
                }
            }
            return false;
        };

        return usr;
    }

    user.GetUser = function ()
    {
        let encryptedsession = Utils.GetCookie(Constant.Login);
        if (encryptedsession == null || encryptedsession == "")
        {
            return null;
        }

        let compressedToken = aescrypto.DecryptFromBase64(encryptedsession, props.AesSecretKey, props.AesInitVector);
        if (compressedToken == null || compressedToken == "")
        {
            return null;
        }

        let token = GzipCompression.DecompressedText(compressedToken);
        if (token == null || token == "")
        {
            return null;
        }

        let usr = prepareUser(token);

        return usr;
    };

    user.Logout = function (onResponse)
    {
        let args = [];

        Utils.DeleteCookie(Constant.Login, props.SingleSubDomain);
        Utils.DeleteCookie(Constant.Language, props.SingleSubDomain);
        Utils.DeleteAllCookies(props.SingleSubDomain);
        localStorage.clear();
        sessionStorage.clear();
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/Logout");

        onResponse != null ? onResponse(null) : null;
    };

    user.SaveLoginCookies = function (data)
    {
        let compressedData = GzipCompression.CompressedText(data);
        let compressedToken = aescrypto.EncryptToBase64(compressedData, props.AesSecretKey, props.AesInitVector);
        Utils.SetCookie(Constant.Login, compressedToken, CookieDays, props.SingleSubDomain);
   };

    user.LoginToken = function (onLogin, onError)
    {
        let encryptedsession = Utils.GetCookie(Constant.Login);
        if (encryptedsession == null || encryptedsession == "")
        {
            //Utils.DeleteCookie(Constant.Login);
            //Utils.DeleteCookie(Constant.Language);
            Utils.DeleteAllCookies();
            //localStorage.clear();
            if (onError != null)
            {
                onError();
            }
            return;
        }

        let compressedToken = aescrypto.DecryptFromBase64(encryptedsession, props.AesSecretKey, props.AesInitVector);
        if (compressedToken == null || compressedToken == "")
        {
            if (onError != null)
            {
                onError();
            }
            return;
        }

        let token = GzipCompression.DecompressedText(compressedToken);
        if (token == null || token == "")
        {
            if (onError != null)
            {
                onError();
            }
            return;
        }

        //MsgLoading.Show();
        let args = [token];
        props.Connector.Submit(args, "ardvro/component/sqljson/authentication/logintoken", function (box)
        {
            //MsgLoading.Close();

            if (box == null)
            {
                loginFailed();
                if (onError != null)
                {
                    onError();
                }
                document.location.href = props.WebBaseUrl;
                return;
            }

            let obj = box.Data;
            if (obj == null || obj == "")
            {
                loginFailed();
                if (onError != null)
                {
                    onError();
                }
                document.location.href = props.WebBaseUrl;
                return;
            }

            //2020-12-17 15:27 to prevent forbidden error by browser, coz browser detect that the cookies was re-written by other subdomain.
            //user.SaveLoginCookies(box.Data);

            let usr = prepareUser(box.Data, onLogin);

            if (onLogin != null)
            {
                onLogin(usr);
            }

        });
    };

    user.TwoFactorsLogin = function (username, password, code, saveLogin, onResponse)
    {
        let args = [username, password, code];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/TwoFactorsLogin", function (box)
        {
            if (box != null && box.Data != null && box.Data != "")
            {
                let usr = prepareUser(box.Data, onResponse);

                if (saveLogin)
                {
                    user.SaveLoginCookies(box.Data);
                    Utils.SetCookie(Constant.Language, usr.Language, CookieDays, props.SingleSubDomain);
                }

                onResponse != null ? onResponse(usr) : null;
                return;
            }

            onResponse != null ? onResponse(null) : null;

        });
    };

    user.Login = function (username, password, saveLogin, onResponse)
    {
        let args = [username, password];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/login", function (box)
        {
            if (box != null && box.Data != null && box.Data != "")
            {
                let usr = prepareUser(box.Data, onResponse);

                if (saveLogin)
                {
                    user.SaveLoginCookies(box.Data);
                    Utils.SetCookie(Constant.Language, usr.Language, CookieDays, props.SingleSubDomain);
                }

                onResponse != null ? onResponse(usr) : null;
                return;
            }

            onResponse != null ? onResponse(null) : null;

        });
    };

    user.SaveLoginData = function (userData)
    {
        let usr = prepareUser(userData);

        user.SaveLoginCookies(userData);
        Utils.SetCookie(Constant.Language, usr.Language, CookieDays, props.SingleSubDomain);
    }

    user.GuestLogin = function (name, email, id, onResponse)
    {
        let args = [name, email, id];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/GuestLogin", function (box)
        {
            if (box != null && box.Data != null && box.Data != "")
            {
                let usr = prepareUser(box.Data, onResponse);

                user.SaveLoginCookies(box.Data);
                Utils.SetCookie(Constant.Language, usr.Language, CookieDays, props.SingleSubDomain);

                onResponse != null ? onResponse(usr) : null;
                return;
            }

            onResponse != null ? onResponse(null) : null;
        });
    };

    user.ChangePassword = function (username, password, newPassword, repassword, onResponse)
    {
        let args = [username, password, newPassword, repassword];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/ChangePassword", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.OtpLogin = function (code, saveLogin, onResponse)
    {
        let args = [code];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/OtpLogin", function (box)
        {
            if (box != null && box.Data != null && box.Data != "")
            {
                if (saveLogin)
                {
                    user.SaveLoginCookies(box.Data);
                }

                let usr = prepareUser(box.Data, onResponse);
                Utils.SetCookie(Constant.Language, usr.Language, 1, props.SingleSubDomain);

                onResponse != null ? onResponse(usr) : null;
                return;
            }

            onResponse != null ? onResponse(null) : null;
        });
    };

    user.RequestOtp = function (email, securityType, onResponse)
    {
        let args = [email, securityType];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/RequestOtp", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.ResetPasswordConfirmation = function (code, password, repassword, onResponse)
    {
        let args = [code, password, repassword];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/ResetPasswordConfirmation", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.ResetPassword = function (email, onResponse)
    {
        let args = [email];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/resetpassword", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.ActivateUser = function (code, saveLogin, onResponse)
    {
        let args = [code];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/ActivateUser", function (box)
        {
            if (box != null && box.Data != null && box.Data != "")
            {
                if (saveLogin)
                {
                    user.SaveLoginCookies(box.Data);
                }

                usr = Utils.ParseJwt(box.Data);
                if (usr == null)
                {
                    onResponse != null ? onResponse(null) : null;
                    return;
                }

                usr.PrimaryWorkgroupOption = getPrimaryWorkgroupOption();
                if (usr.Language != null && usr.PrimaryWorkgroupCountry != null && usr.Language != "" && usr.PrimaryWorkgroupCountry != "") 
                {
                    usr.CountryLanguage = usr.Language + '-' + usr.PrimaryWorkgroupCountry;
                }
                else
                {
                    usr.CountryLanguage = 'en-US';
                }

                onResponse != null ? onResponse(usr) : null;
                return;
            }

            onResponse != null ? onResponse(null) : null;
        });
    };

    user.SaveUserSetting = function (name, value, onResponse)
    {
        let args = [name, value];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/SaveUserSetting", function (box)
        {
            if (box != null && box.Data != null)
            {
                user.LoginToken();
            }

            if (name.Name == Constant.Language && usr.Language != null)
            {
                Utils.SetCookie(Constant.Language, usr.Language, 1, props.SingleSubDomain);
            }
            
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.GetUserSettings = function (onResponse)
    {
        let args = [];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/GetUserSettings", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.Register = function (username, password, repassword, email, onResponse)
    {
        let emailobj = { Email: email };
        let args = [username, password, repassword, JSON.stringify(emailobj)];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/register", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.RegisterActivateLogin = function (username, password, repassword, email, onResponse)
    {
        let emailobj = { Email: email };
        let args = [username, password, repassword, JSON.stringify(emailobj)];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/RegisterActivateLogin", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.SaveUserSecurity = function (securityType, securityValue, onResponse)
    {
        let args = [securityType, securityValue];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/SaveUserSecurity", function (box)
        {
            if (box != null && box.Data != null)
            {
                user.LoginToken();
            }

            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.GetUserSecurities = function (onResponse)
    {
        let args = [];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/GetUserSecurities", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.ActivateUserAndWorkgroup = function (activationCode,
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
        workgroupNote,
        onResponse)
    {
        let args = [
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
        ];

        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/activateUserandworkgroup", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.SaveWorkgroup = function (
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
        workgroupNote,
        onResponse)
    {
        let args = [
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
            Number(smtpPort),
            Number(imapPort),
            mailUsername,
            mailPassword,
            workgroupNote
        ];

        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/SaveWorkgroup", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.GetUserWorkgroups = function (onResponse)
    {
        let args = [];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/GetUserWorkgroups", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    }; 

    user.IsWorkgroupCodeAvailable = function (code, onResponse)
    {
        props.Connector.Submit(code, "ardvro/component/sqljson/Authentication/IsWorkgroupCodeAvailable", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.GetUsersByWorkgroup = function (onResponse)
    {
        let args = [];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/GetUsersByWorkgroup", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.GetRoles = function (onResponse)
    {
        let args = [];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/GetRoles", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.GetUserRoles = function (username, workgroup, onResponse)
    {
        let args = [username, workgroup];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/GetUserRoles", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.UpdateUserWorkgroupRoles = function (id, roles, onResponse)
    {
        let args = [id, roles];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/UpdateUserWorkgroupRoles", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.RemoveUserWorkgroup = function (id, onResponse)
    {
        let args = [id];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/RemoveUserWorkgroup", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.AddWorkgroupUsers = function (workgroupId, usernames, roles, onResponse)
    {
        let args = [workgroupId, usernames, roles];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/AddWorkgroupUsers", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.SetPrimaryWorkgroup = function (workgroupName, onResponse)
    {
        let args = [workgroupName];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/SetPrimaryWorkgroup", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.GetAdministrationsMenu = function (onResponse)
    {
        props.Connector.Submit([], "ardvro/component/sqljson/Authentication/GetAdministrationsMenu", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.RegisterDbaObjectAccess = function (workgroupId, onResponse)
    {
        let args = [workgroupId];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/RegisterDbaObjectAccess", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.RegisterDbaObjectAccessAllWorkgroups = function (onResponse)
    {
        let args = [];
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/RegisterDbaObjectAccessAllWorkgroups", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    user.ImportUsers = function (list, onResponse)
    {
        let args = {
            List: list
        };
        props.Connector.Submit(args, "ardvro/component/sqljson/Authentication/ImportUsers", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    return user;
};
