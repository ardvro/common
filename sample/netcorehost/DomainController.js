var DomainController = function DomainController(cfg)
{
    let ctrl = {};

    ctrl.CheckDomain = function (domainName, onResponse)
    {
        cfg.Connector.Submit(domainName, "ardvro/component/netcorehost/Domain/CheckDomain", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.CheckDomainNs = function (domainName, onResponse)
    {
        cfg.Connector.Submit(domainName, "ardvro/component/netcorehost/Domain/CheckDomainNs", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    return ctrl;
};
