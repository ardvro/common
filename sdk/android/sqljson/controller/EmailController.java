package ardvro.component.sqljson.controller;

import com.google.gson.internal.LinkedTreeMap;

import java.util.ArrayList;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class EmailController
{
    private IConnection _conection;

    public EmailController(IConnection connection)
    {
        _conection = connection;
    }

    public void SendEmail(String to, String subject, String content, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Email/SendEmail";
        _conection.Submit(new Object[]{ to, subject, content }, functionName, onResponse);
    }

    public void SendEmailWithAttachment(String to, String subject, String content, String filename, String filecontent, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Email/SendEmailWithAttachment";
        _conection.Submit(new Object[]{ to, subject, content, filename, filecontent }, functionName, onResponse);
    }

    public void ContactUs(String fromEmail, String fromName, String subject, String content, IResponseListener<Integer> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Email/SendEmailWithAttachment";
        _conection.Submit(new Object[]{ fromEmail, fromName, subject, content }, functionName, onResponse);
    }

    public void ReadEmail(IResponseListener<ArrayList<LinkedTreeMap<String, Object>>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Email/ReadEmail";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

}
