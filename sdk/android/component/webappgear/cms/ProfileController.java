package ardvro.component.webappgear.cms;

import com.google.gson.Gson;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;

import ardvro.adapter.pfe.pfeProfile;
import ardvro.adapter.pfe.pfeProfileContact;
import ardvro.adapter.pfe.pfeProfileProvider;
import ardvro.adapter.pfe.pfeProfileUser;
import ardvro.component.sqljson.DbQuery;
import ardvro.component.sqljson.DbQueryFrom;
import ardvro.component.sqljson.SqlJson;
import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class ProfileController
{
    private IConnection _connection;
    private SqlJson _sqljson;
    private Gson _gson;

    public ProfileController(IConnection connection)
    {
        _connection = connection;
        _gson = new Gson();
        _sqljson = new SqlJson(connection);
    }

    public void SearchProfiles(String szSqlWhere, Object[] params, String szSqlOrder, int ActivePageIndex, int PageSize, final IResponseListener<ArrayList<pfeProfile>> callback)
    {
        DbQuery query = _sqljson.Get("pfeProfile");
        if (szSqlWhere != null && szSqlWhere.isEmpty()) {
            query = ((DbQueryFrom) query).Where(szSqlWhere, params);
        }

        query = ((DbQueryFrom) query).OrderBy("pfeProfile.Id, pfeProfile.Name, pfeProfile.Avatar");

        if (szSqlOrder != null && !szSqlOrder.isEmpty()) {
            query = ((DbQueryFrom) query).OrderBy(szSqlOrder);
        }

        if (ActivePageIndex > 0 && PageSize > 0) {
            query = ((DbQueryFrom) query).Limit(ActivePageIndex, PageSize);
        } else if (ActivePageIndex > 0 && PageSize > 0) {
            query = ((DbQueryFrom) query).Limit(PageSize);
        }

        query.PagingJsons("pfeProfile.Id, pfeProfile.Name, pfeProfile.Avatar").Send(new IResponseListener<String>() {
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
                if (args == null || args.isEmpty()) {
                    callback.OnResponseReceived(new ArrayList<pfeProfile>());
                    return;
                }

                ArrayList<pfeProfile> list = _gson.fromJson(args, callback.GetObjectType());
                callback.OnResponseReceived(list);
            }
        });
    }

    public void GetContacts(int profileId, String name, int pageIndex, int pageSize, final IResponseListener<ArrayList<pfeProfileContact>> callback)
    {
        name = '%' + name + '%';
        _sqljson.Get("pfeProfileContact").Join("pfeProfile,pfeProfileProvider").Where("pfeProfileContact.pfeProfileId=? and pfeProfileContact.Name like ?", profileId, name).OrderBy("pfeProfileContact.Name ASC").Limit(pageIndex, pageSize).PagingJsons("*").Send(new IResponseListener<String>() {
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
                if (args == null || args.isEmpty()) {
                    callback.OnResponseReceived(new ArrayList<pfeProfileContact>());
                    return;
                }

                ArrayList<pfeProfileContact> list = _gson.fromJson(args, callback.GetObjectType());
                callback.OnResponseReceived(list);
            }
        });
    }

    public void GetProfile(int profileId, final IResponseListener<pfeProfile> callback)
    {
        _sqljson.Get("pfeProfile").Join("pfeProfileProvider").Where("pfeProfile.Id=?", profileId).Json("*").Send(new IResponseListener<String>() {
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
                return pfeProfile.class;
            }

            @Override
            public void OnResponseReceived(String args) {
                if (args == null || args.isEmpty()) {
                    callback.OnResponseReceived(null);
                    return;
                }

                pfeProfile item = _gson.fromJson(args, callback.GetObjectType());
                callback.OnResponseReceived(item);
            }
        });
    }

    public void GetProfileByUserId(int userId, final IResponseListener<pfeProfile> callback)
    {
        _sqljson.Get("pfeProfile").Join("pfeProfileUser,pfeProfileProvider").Where("pfeProfileUser.ssoUserId =?", userId).Json("*").Send(new IResponseListener<String>() {
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
                return pfeProfile.class;
            }

            @Override
            public void OnResponseReceived(String args) {
                if (args == null || args.isEmpty()) {
                    callback.OnResponseReceived(null);
                    return;
                }

                pfeProfile item = _gson.fromJson(args, callback.GetObjectType());
                callback.OnResponseReceived(item);
            }
        });
    }

    public void GetProfileByUserName(String username, final IResponseListener<pfeProfile> callback)
    {
        _sqljson.Get("pfeProfileProvider").Join("pfeProfile").Where("Username=?", username).Json("*").Send(new IResponseListener<String>() {
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
                return pfeProfile.class;
            }

            @Override
            public void OnResponseReceived(String args) {
                if (args == null || args.isEmpty()) {
                    callback.OnResponseReceived(null);
                    return;
                }

                pfeProfile item = _gson.fromJson(args, callback.GetObjectType());
                callback.OnResponseReceived(item);
            }
        });
    }

    public void GetProfileProviderByUserNameAndProviderType(String username, String providerType, final IResponseListener<pfeProfile> callback)
    {
        _sqljson.Get("pfeProfileProvider").Join("pfeProfile").Where("Username=? and ProviderType=?", username, providerType).Json("*").Send(new IResponseListener<String>() {
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
                return pfeProfile.class;
            }

            @Override
            public void OnResponseReceived(String args) {
                if (args == null || args.isEmpty()) {
                    callback.OnResponseReceived(null);
                    return;
                }

                pfeProfile item = _gson.fromJson(args, callback.GetObjectType());
                callback.OnResponseReceived(item);
            }
        });
    }

    public void SaveProfile(pfeProfile profile, IResponseListener callback)
    {
        _sqljson.Get("pfeProfile").Upsert(profile).Send(callback);
    }

    public void SaveContact(String username, int id, int profileIdFrom, int profileIdTo, String name, String avatar, IResponseListener callback)
    {
        pfeProfileContact contact = new pfeProfileContact();
        contact.Id = id;
        contact.Status = 1;
        contact.Updated = new Date();
        contact.Updater = username;
        contact.pfeProfileId = profileIdFrom;
        contact.pfeProfileId2 = profileIdTo;
        contact.Name = name;
        contact.Avatar = avatar;
        contact.Detail = "";

        _sqljson.Get("pfeProfileContact").Save(contact).Send(callback);
    };

    public void CreateProfile(final String name, final String email, final String providerType, final int userId, final byte profileStatus, final IResponseListener callback)
    {
        _sqljson.Get("pfeProfileProvider").Join("pfeProfile").Where("Username=?", email).Json("*").Send(new IResponseListener<String>() {
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
                if (args == null || args.isEmpty())
                {
                    callback.OnResponseReceived(args);
                    return;
                }

                if (args != null && args != "")
                {
                    pfeProfile data = _gson.fromJson(args, pfeProfile.class);
                    callback.OnResponseReceived(args);
                }
                else
                {
                    final pfeProfile profile = new pfeProfile();
                    profile.Status = profileStatus;
                    profile.Updater = name;
                    profile.Name = name;
                    profile.pfeProfileProviders = new ArrayList<pfeProfileProvider>();

                    final pfeProfileProvider provider = new pfeProfileProvider();
                    provider.Status = 1;
                    provider.Updater = name;
                    provider.Username = email;
                    provider.ProviderType = providerType;
                    provider.Credentials = "";
                    profile.pfeProfileProviders.add(provider);

                    final pfeProfileUser profileuser = new pfeProfileUser();
                    if (userId != 0)
                    {
                        profileuser.Status = 1;
                        profileuser.Updater = name;
                        profileuser.ssoUserId = userId;
                        profile.pfeProfileUsers = new ArrayList<pfeProfileUser>();
                        profile.pfeProfileUsers.add(profileuser);
                    }

                    _sqljson.Get("pfeProfile").Save(profile).Send(new IResponseListener<pfeProfile>() {
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
                            return pfeProfile.class;
                        }

                        @Override
                        public void OnResponseReceived(pfeProfile result) {
                            provider.pfeProfileId = result.Id;
                            profileuser.pfeProfileId = result.Id;
                            if (result.pfeProfileUsers != null && result.pfeProfileUsers.size() > 0)
                            {
                                profile.pfeProfileUsers = result.pfeProfileUsers;
                            }
                            if (result.pfeProfileProviders != null && result.pfeProfileProviders.size() > 0)
                            {
                                profile.pfeProfileProviders = result.pfeProfileProviders;
                            }

                            if (callback != null)
                            {
                                callback.OnResponseReceived(result);
                            }
                        }
                    });
                }
            }
        });
    }

}
