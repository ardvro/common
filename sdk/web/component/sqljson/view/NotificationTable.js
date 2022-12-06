var NotificationTable = function NotificationTable(cfg)
{
    let noticationCtrl = new NotificationController({ Connector: cfg.Connector });

    let frm = new FrameTable(
        {
            Id: cfg.Id,
            Code: cfg.Code,
            Label: "Notifications",
            Theme: cfg.Theme,
            StatusType: StatusType.View,
            ShowLabel: false,
            AddDefaultOption: true,
            AllowSelectParent: false,
            AllowSort: true,
            Schema: new genNotification(),
            PageSize: DEFAULT_PAGE_SIZE,
            FrameType: FrameType.Bordered,
            ReferenceType: ReferenceType.Flat,
            Connector: cfg.Connector,
            EnableSearch: true,
            Desktop: cfg.Desktop,
            User: cfg.User,
            WebsiteSetting: cfg.WebsiteSetting,
            ContentUrl: cfg.CdnUrl.concat('/ardvro/component/sqljson/view/NotificationTable.js.html'),
            PrintUrl: cfg.CdnUrl.concat('/ardvro/component/sqljson/view/NotificationTable.js.html'),
            Routes: cfg.Routes,
            WebBaseUrl: cfg.WebBaseUrl,
            CdnUrl: cfg.CdnUrl,
            GetServerTime: cfg.GetServerTime,
            QueryMode: QueryMode.Json,
            GetDataFunction: function (ctrlArg, onLoaded)
            {
            //    noticationCtrl.GetUserNotifications(function (results)
            //    {
                //getData(frm);
            //    });

                noticationCtrl.GetUserNotifications(frm.GetPageIndex(), frm.GetPageSize(), function (results) {
                    onLoaded(results);
                });

            },
            //QueryFunction: function (ctrl, table, grid)
            //{
            //    return createCustomQuery(ctrl, table, grid);
            //},
            //DefaultSort: "Created DESC",
            OnItemRowClick: function (e, tr, td, item, schitem)
            {
                if (cfg.Routes != null)
                {
                    let menu = cfg.Routes.find(x => Utils.RouteMatch(x.Path, item.Url));
                    if (menu != null)
                    {
                        window.history.pushState({ "html": "" }, "", item.Url);
                        menu.Load(menu);
                        if (cfg.Desktop.GetTypeName() === DesktopType.WebDesk)
                        {
                            window.history.pushState({ "html": "" }, "", cfg.WebBaseUrl);
                        }
                    }
                    else
                    {
                        let subject = item.Created.concat(' | ', item.Sender, ' | ', item.Receiver);
                        let msg = item.Message.concat('<br><br>', item.Url);
                        MsgBox.ShowTitleMessage(subject, msg);
                    }
                }

                if (item.Status != 1)
                {
                    noticationCtrl.UpdateStatus(item.Id, 1, function (data)
                    {
                        cfg.Notificator.SetNumber(data);
                    });
                    tr.classList.remove('notificationtable_0');
                    tr.classList.add('notificationtable_1');
                }
            },
        }

    );
    getData(frm);

    function getData(frm)
    {
        noticationCtrl.GetUserNotifications(frm.GetPageIndex() * frm.GetPageSize(), frm.GetPageSize(), function (results)
        {
            frm.LoadData(results);
        });
    }

    //function createCustomQuery(ctrl, table, grid)
    //{
    //    let pageIndex = grid.GetPageIndex();
    //    let pageSize = grid.GetPageSize();

    //    let szSqlJoin = "";
    //    let szSqlSelect = "*";

    //    let szSqlOrder = "Created DESC, Status ASC";
    //    let szSqlWhere = "Receiver = ?";
    //    let params = [];
    //    params.push(cfg.User.Name);

    //    let joins = { JoinType: "LeftJoin", Joins: szSqlJoin };
    //    let wheres = { Where: szSqlWhere, Parameters: params };

    //    let query = ctrl.Query(table, joins, wheres, "", szSqlOrder, pageSize, pageIndex);

    //    query = query.PagingJsons(szSqlSelect);

    //    return query;
    //}


    return frm;
};