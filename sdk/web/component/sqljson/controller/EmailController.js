var EmailController = function EmailController(cfg)
{
    let ctrl = {};
    
    ctrl.ReadEmail = function (onResponse)
    {
        cfg.Connector.Submit(format, "ardvro/component/sqljson/Common/ReadEmail", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SendEmail = function (to, subject, content, onResponse)
    {
        let args = [to, subject, content];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Email/SendEmail", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.SendEmailWithAttachment = function (to, subject, content, filename, filecontent, onResponse)
    {
        let args = [to, subject, content, filename, filecontent];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Email/SendEmailWithAttachment", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.ContactUs = function (fromEmail, fromName, subject, content, onResponse)
    {
        content = "".concat(fromName, " ", fromEmail, " <br><br>", content);
        let args = [fromEmail, fromName, subject, content];
        cfg.Connector.Submit(args, "ardvro/component/sqljson/Email/ContactUs", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    return ctrl;
};