using ardvro.core.ext.connection;
using ardvro.core.lib.common;
using ardvro.sdk.net.component.sqljson;
using ardvro.sdk.net.component.sqljson.db;
using iTextSharp.text;
using MimeKit.Cryptography;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ardvro.sdk.test
{
    public class SqlQueryController
    {
        private readonly SqlJson dbcontext;

        public SqlQueryController(IConnection connection)
        {
            dbcontext = new SqlJson(connection,
                (SqlJson sqljson) =>
                {
                }
            );
        }

        public void GetProfilesByName(string name, Action<Flexible> callback)
        {
            dbcontext["pfeProfile"].Where("name like (?)", "%" + name + "%").List("*")
                .Send(
                    (Flexible result) =>
                    {
                        callback?.Invoke(result);
                    }
                );
        }

        public void SearchProfiles(string szSqlWhere, object[] parameters, string szSqlOrder, int ActivePageIndex, int PageSize, Action<List<Flexible>> callback)
        {
            DbQuery query = dbcontext["pfeProfile"];
            if (!string.IsNullOrEmpty(szSqlWhere))
            {
                query = (DbQuery)(query as DbQueryFrom).Where(szSqlWhere, parameters);
            }

            query = (query as DbQueryFrom).OrderBy("pfeProfile.Id, pfeProfile.Name, pfeProfile.Avatar");

            if (!string.IsNullOrWhiteSpace(szSqlOrder))
            {
                query = (query as DbQueryFrom).OrderBy(szSqlOrder);
            }

            if (ActivePageIndex != null && PageSize > 0)
            {
                query = (query as DbQueryFrom).Limit(ActivePageIndex, PageSize);
            }
            else if (ActivePageIndex == null && PageSize > 0)
            {
                query = (query as DbQueryFrom).Limit(PageSize);
            }

            query.PagingJsons("pfeProfile.Id, pfeProfile.Name, pfeProfile.Avatar")
                .Send((string jsonResults) =>
                    {
                        var results = JsonConvert.DeserializeObject<List<Flexible>>(jsonResults);
                        callback?.Invoke(results);
                    }
                );

        }

        public void GetContacts(int profileId, string name, int pageIndex, int pageSize, Action<List<Flexible>> callback)
        {
            name = '%' + name + '%';
            dbcontext["pfeProfileContact"].Join("pfeProfile,pfeProfileProvider")
                .Where("pfeProfileContact.pfeProfileId=? and pfeProfileContact.Name like ?", profileId, name)
                .OrderBy("pfeProfileContact.Name ASC").Limit(pageIndex, pageSize).PagingJsons("*")
                .Send((string jsonResults) =>
                {
                    var results = JsonConvert.DeserializeObject<List<Flexible>>(jsonResults);
                    callback?.Invoke(results);
                }
            );
        }

        public void GetProfile(int profileId, Action<Flexible> callback)
        {
            dbcontext["pfeProfile"].Join("pfeProfileProvider").Where("pfeProfile.Id=?", profileId).Json("*")
                .Send((string jsonResult) =>
                {
                    var result = JsonConvert.DeserializeObject<Flexible>(jsonResult);
                    callback?.Invoke(result);
                }
            );
        }

        public void GetTrending(int limit, string contentType, Action<List<Flexible>> callback)
        {
            dbcontext["sp_cmsContentTrending"].ProcedureJsons(contentType, 0, limit)
                .Send((string jsonResults) =>
                {
                    var results = JsonConvert.DeserializeObject<List<Flexible>>(jsonResults);
                    callback?.Invoke(results);
                }
            );
        }

        public void SaveContact(string username, int id, int profileIdFrom, int profileIdTo, string name, string avatar, Action<Flexible> callback)
        {
            var contact = new Flexible();
            contact["Id"] = id;
            contact["Status"] = 1;
            contact["Updated"] = DateTime.Now;
            contact["Updater"] = username;
            contact["pfeProfileId"] = profileIdFrom;
            contact["pfeProfileId2"] = profileIdTo;
            contact["Name"] = name;
            contact["Avatar"] = avatar;
            contact["Detail"] = "";

            dbcontext["pfeProfileContact"].Save(contact)
                .Send((Flexible result) =>
                {
                    if (callback != null)
                    {
                        callback(result);
                    }
                }
            );
        }

        public void SaveProfile(Flexible profile, Action<Flexible> callback)
        {
            dbcontext["pfeProfile"].Upsert(profile)
                .Send((Flexible result) =>
                {
                    if (callback != null)
                    {
                        callback(result);
                    }
                });
        }

        public void TestFuzzyQueryList(string fieldName, string operatorType, object value, Action<List<Flexible>> callback)
        {
            var criterias = new List<DbQueryFuzzyCriteria>();

            var criteria1 = new DbQueryFuzzyCriteria();
            criteria1.Field = fieldName;
            criteria1.Operator = operatorType;
            criteria1.Value = value?.ToString();
            criteria1.Compound = "AND";
            criterias.Add(criteria1);

            var criteria2 = new DbQueryFuzzyCriteria();
            criteria2.Field = "Evidence";
            criteria2.Operator = "=";
            criteria2.Value = "HIGH";
            criteria2.Compound = "AND";
            criterias.Add(criteria2);

            /*var criteria2 = new Flexible();
            criteria2["Field"] = "Evidence";
            criteria2["Operator"] = operatorType;
            criteria2["Value"] = "HIGH";
            criteria2["Compound"] = "";
            criterias.Add(criteria2);*/

            dbcontext["aknMatterLog"].Where("aknMatterLog.Status = ?", 1).Fuzzy(criterias).List("*")
                .Send((List<Flexible> results) =>
                {
                    callback?.Invoke(results);
                }
            );
        }
    
    }
}
