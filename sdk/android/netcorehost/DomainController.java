package ardvro.component.netcorehost;

import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class DomainController
{
    private IConnection _connection;
    public DomainController(IConnection connection)
    {
        _connection = connection;
    }

    public void CheckDomain(String domainName, IResponseListener<Boolean> callback)
    {
        _connection.Submit(domainName, "ardvro/component/netcorehost/Domain/CheckDomain", callback);
    }

    public void CheckDomainNs(String domainName, IResponseListener<String> callback)
    {
        _connection.Submit(domainName, "ardvro/component/netcorehost/Domain/CheckDomainNs", callback);
    }


}
