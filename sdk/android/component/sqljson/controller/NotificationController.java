package ardvro.component.sqljson.controller;

import com.google.gson.internal.LinkedTreeMap;

import java.util.ArrayList;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;
import ardvro.core.transceiver.Box;

public class NotificationController
{
    private IConnection _conection;

    public NotificationController(IConnection connection)
    {
        _conection = connection;
    }

    /*public void Send(String receiver, String message, String url, String note, String type, IResponseListener onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/Send";
        _conection.Submit(new Object[]{ receiver, message, type, url, note }, functionName, onResponse);
    }*/

    public void UpdateStatus(Object id, String status, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/UpdateStatus";
        _conection.Submit(new Object[]{ id, status }, functionName, onResponse);
    }

    public void CountUserNotification(IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/CountUserNotification";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

    public void GetUserNotifications(int pageIndex, int pageSize, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/GetUserNotifications";
        _conection.Submit(new Object[]{ pageIndex, pageSize }, functionName, onResponse);
    }

    public void Broadcast(LinkedTreeMap<String, Object> data, IResponseListener<ArrayList<Box>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/Broadcast";
        _conection.Submit(data, functionName, onResponse);
    }

    public void IsOnline(String username, IResponseListener<Boolean> onResponse)
    {
        String functionName = "ardvro/component/sqljson/notification/IsOnline";
        _conection.Submit(new Object[]{ }, functionName, onResponse);
    }

}
