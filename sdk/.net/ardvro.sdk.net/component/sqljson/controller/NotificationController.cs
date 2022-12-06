namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.adapter.gen.ent;
using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class NotificationController
{
    private IConnection _conection;

    public NotificationController(IConnection connection)
    {
        _conection = connection;
    }

    public void UpdateStatus(Object id, String status, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/UpdateStatus";
        _conection.Submit(new Object[]{ id, status }, functionName, onResponse);
    }

    public void CountUserNotification(Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/CountUserNotification";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GetUserNotifications(int pageIndex, int pageSize, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/GetUserNotifications";
        _conection.Submit(new Object[]{ pageIndex, pageSize }, functionName, onResponse);
    }

    public void Broadcast(Flexible data, Action<List<Box>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/Broadcast";
        _conection.Submit(data, functionName, onResponse);
    }

    public void IsOnline(String username, Action<Boolean> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/IsOnline";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

}
