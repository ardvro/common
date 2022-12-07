var _connector;

function openConnection() {

    log("Get the connection key.");
    const webcfg = new WebsiteConfig();
    const cfg = webcfg.WebApps[0];
    const wsdata = {
        ClientRsaKey: cfg.ClientRsaKey,
        ServerRsaKey: cfg.ServerRsaKey,
        AppCode: cfg.AppCode,
        WebSocketUrl: cfg.WebSocketUrl,
        AppName: cfg.AppName
    };

    log("Creating WebSocketProtocol Object.");
    _connector = new WebSocketClient(wsdata);

    _connector.Open(onConnectionConfirmed, onUnrequestedDataReceived, onConnectionClosed);
}

function onConnectionConfirmed(connectInfo) {

    log("Connected to server : ");
    log("creating Controller");
    let profileCtrl = new ProfileController({
        Connector: _connector,
        OnLoad: function (ctrl) {
            log("querying profiles");
            ctrl.GetProfilesByName("test contact", function (results) {
                log("Profiles results:");
                log(results);
            });
        }
    });

}

//notification can ben handle here
function onUnrequestedDataReceived(box) {

}

function onConnectionClosed(e) {

}

var ProfileController = function ProfileController(cfg) {
    let ctrl = {};

    log("initializing Controller");

    let dbcontext;

    ctrl.GetProfilesByName = function (name, callback) {
        dbcontext.pfeProfile.Where("name like (?)", "%" + name + "%").List("*").Send(function (results) {
            if (callback != null) {
                callback(results);
            }
        });
    };

    ctrl.SearchProfiles = function (szSqlWhere, params, szSqlOrder, ActivePageIndex, PageSize, callback) {
        let query = dbcontext.pfeProfile;
        if (/\S/.test(szSqlWhere)) {
            query = query.Where(szSqlWhere, params);
        }

        query = query.OrderBy("pfeProfile.Id, pfeProfile.Name, pfeProfile.Avatar");

        if (/\S/.test(szSqlOrder)) {
            query = query.OrderBy(szSqlOrder);
        }

        if (ActivePageIndex != null && PageSize > 0) {
            query = query.Limit(ActivePageIndex, PageSize);
        }
        else if (ActivePageIndex == null && PageSize > 0) {
            query = query.Limit(PageSize);
        }

        query.PagingJsons("pfeProfile.Id, pfeProfile.Name, pfeProfile.Avatar").Send(function (jsons) {
            if (callback != null) {
                let list = [];
                if (jsons != null && jsons != "") {
                    list = JSON.parse(jsons);
                }
                callback(list);
            }
        });
    };

    ctrl.GetContacts = function (profileId, name, pageIndex, pageSize, callback) {
        name = '%' + name + '%';
        dbcontext.pfeProfileContact.Join("pfeProfile,pfeProfileProvider").Where("pfeProfileContact.pfeProfileId=? and pfeProfileContact.Name like ?", profileId, name).OrderBy("pfeProfileContact.Name ASC").Limit(pageIndex, pageSize).PagingJsons("*").Send(function (jsons) {
            if (callback != null) {
                let list = [];
                if (jsons != null && jsons != "") {
                    list = JSON.parse(jsons);
                }
                callback(list);
            }
        });
    };

    ctrl.GetProfile = function (profileId, callback) {
        dbcontext.pfeProfile.Join("pfeProfileProvider").Where("pfeProfile.Id=?", Number(profileId)).Json("*").Send(function (json) {
            if (callback != null) {
                let list = [];
                if (json != null && json != "") {
                    list = JSON.parse(json);
                }
                callback(list);
            }
        });
    };

    ctrl.GetProfileByUserId = function (userId, callback) {
        dbcontext.pfeProfile.Join("pfeProfileUser,pfeProfileProvider").Where("pfeProfileUser.ssoUserId =?", userId).Json("*").Send(function (jsons) {
            if (callback != null) {
                let profile;
                if (jsons != null && jsons != "") {
                    profile = JSON.parse(jsons);
                }
                callback(profile);
            }
        });
    };

    ctrl.SaveContact = function (username, id, profileIdFrom, profileIdTo, name, avatar, callback) {
        let contact = {};
        contact.Id = id;
        contact.Status = 1;
        contact.Updated = cfg.GetServerTime().Format('yyyy-MM-dd HH:mm:ss');
        contact.Updater = username;
        contact.pfeProfileId = profileIdFrom;
        contact.pfeProfileId2 = profileIdTo;
        contact.Name = name;
        contact.Avatar = avatar;
        contact.Detail = "";

        dbcontext.pfeProfileContact.Save(contact).Send(function (result) {
            if (callback != null) {
                callback(result);
            }
        });
    };

    ctrl.GetProfileProviderByUserName = function (username, onResponse) {
        dbcontext.pfeProfileProvider.Join("pfeProfile").Where("Username=?", username).Json("*").Send(function (json) {
            if (json != null && json != "") {
                let data = JSON.parse(json);
                if (onResponse != null) {
                    onResponse(data.pfeProfile);
                }
            }
            else {
                if (onResponse != null) {
                    onResponse(null);
                }
            }
        });
    };

    ctrl.GetProfileProviderByUserNameAndProviderType = function (username, providerType, onResponse) {
        dbcontext.pfeProfileProvider.Join("pfeProfile").Where("Username=? and ProviderType=?", username, providerType).Json("*").Send(function (json) {
            if (json != null && json != "") {
                let data = JSON.parse(json);
                if (onResponse != null) {
                    onResponse(data.pfeProfile);
                }
            }
            else {
                if (onResponse != null) {
                    onResponse(null);
                }
            }
        });
    };

    ctrl.CreateProfile = function (name, email, providerType, userId, profileStatus, onResponse) {
        dbcontext.pfeProfileProvider.Join("pfeProfile").Where("Username=?", email).Json("*").Send(function (json) {
            if (json != null && json != "") {
                let data = JSON.parse(json);
                if (onResponse != null) {
                    onResponse(data.pfeProfile);
                }
            }
            else {
                let profile = {};
                profile = {};
                profile.Status = profileStatus;
                profile.Updater = name;
                profile.Name = name;
                profile.pfeProfileProviders = [];

                let provider = {};
                provider.Status = 1;
                provider.Updater = name;
                provider.Username = email;
                provider.ProviderType = providerType;
                provider.Credentials = "";
                profile.pfeProfileProviders.push(provider);

                let profileuser = {};
                if (userId != null && userId != 0 && userId != "") {
                    profileuser.Status = 1;
                    profileuser.Updater = name;
                    profileuser.ssoUserId = userId;
                    profile.pfeProfileUsers = [];
                    profile.pfeProfileUsers.push(profileuser);
                }

                dbcontext.pfeProfile.Save(profile).Send(function (result) {
                    provider.pfeProfileId = result.Id;
                    profileuser.pfeProfileId = result.Id;
                    if (result.pfeProfileUsers != null && result.pfeProfileUsers.length > 0) {
                        profile.pfeProfileUsers = result.pfeProfileUsers;
                    }
                    if (result.pfeProfileProviders != null && result.pfeProfileProviders.length > 0) {
                        profile.pfeProfileProviders = result.pfeProfileProviders;
                    }

                    if (onResponse != null) {
                        onResponse(result);
                    }
                });
            }
        });
    };

    ctrl.SaveProfile = function (profile, callback) {
        dbcontext.pfeProfile.Upsert(profile).Send(function (result) {
            if (callback != null) {
                callback(result);
            }
        });
    };

    function construct() {
        dbcontext = new SqlJson({
            Connector: cfg.Connector,
            OnLoad: function (db) {
                dbcontext = db;
                log("Controller finished inizializing");
                if (cfg.OnLoad != null) {
                    cfg.OnLoad(ctrl);
                }
            }
        });
    }

    construct();

    return ctrl;
};
