namespace ardvro.sdk.net.component.sqljson.controller;

using ardvro.core.ext.connection;
using ardvro.core.lib.common;

public class EmailController
{
    private IConnection _conection;

    public EmailController(IConnection connection)
    {
        _conection = connection;
    }

    public void SendEmail(String to, String subject, String content, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Email/SendEmail";
        _conection.Submit(new Object[]{ to, subject, content }, functionName, onResponse);
    }

    public void SendEmailWithAttachment(String to, String subject, String content, String filename, String filecontent, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Email/SendEmailWithAttachment";
        _conection.Submit(new Object[]{ to, subject, content, filename, filecontent }, functionName, onResponse);
    }

    public void ContactUs(String fromEmail, String fromName, String subject, String content, Action<int> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Email/SendEmailWithAttachment";
        _conection.Submit(new Object[]{ fromEmail, fromName, subject, content }, functionName, onResponse);
    }

    public void ReadEmail(Action<List<Flexible>> onResponse)
    {
        String functionName = "ardvro/component/sqljson/Email/ReadEmail";
        _conection.Submit(new Object[]{  }, functionName, onResponse);
    }

}
