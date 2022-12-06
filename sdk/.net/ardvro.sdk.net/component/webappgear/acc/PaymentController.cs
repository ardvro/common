namespace ardvro.sdk.net.component.webappgear.acc;

using ardvro.adapter.acc.ent;
using ardvro.core.ext.connection;

public class PaymentController
{
    private IConnection _connection;
    public PaymentController(IConnection connection)
    {
        _connection = connection;
    }

    public void GetPaymentsMethod(Action<List<accWorkgroupPayment>> callback)
    {
        _connection.Submit(null, "ardvro/component/webappgear/acc/Payment/GetPaymentsMethod", callback);
    }

    public void GetExchangeRate(String currencyFroM, String currencyTo, Action<decimal> callback)
    {
        _connection.Submit(new Object[]{ currencyFroM, currencyTo}, "ardvro/component/webappgear/acc/Payment/GetExchangeRate", callback);
    }

}
