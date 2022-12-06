namespace ardvro.sdk.net.component.netcorehost.controller;

using ardvro.core.ext.connection;

public class DomainController
{
    private IConnection _connection;
    public DomainController(IConnection connection)
    {
        _connection = connection;
    }

    public void CheckDomain(String domainName, Action<bool> callback)
    {
        _connection.Submit(domainName, "ardvro/component/netcorehost/Domain/CheckDomain", callback);
    }

    public void CheckDomainNs(String domainName, Action<bool> callback)
    {
        _connection.Submit(domainName, "ardvro/component/netcorehost/Domain/CheckDomainNs", callback);
    }


}
