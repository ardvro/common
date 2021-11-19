var DomainController = function DomainController(cfg)
{
    let ctrl = {};

    ctrl.CheckDomain = function (domainName, onResponse)
    {
        cfg.Connector.Submit(domainName, "ardvro/wf/netcorehost/DomainWorkflow/CheckDomain", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    ctrl.CheckDomainNs = function (domainName, onResponse)
    {
        cfg.Connector.Submit(domainName, "ardvro/wf/netcorehost/DomainWorkflow/CheckDomainNs", function (box)
        {
            onResponse != null ? onResponse(box == null ? null : box.Data) : null;
        });
    };

    return ctrl;
};
