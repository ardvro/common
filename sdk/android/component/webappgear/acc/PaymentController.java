package ardvro.component.webappgear.acc;

import java.util.ArrayList;

import ardvro.adapter.acc.accWorkgroupPayment;
import ardvro.core.connection.IConnection;
import ardvro.core.connection.IResponseListener;

public class PaymentController
{
    private IConnection _connection;
    public PaymentController(IConnection connection)
    {
        _connection = connection;
    }

    public void GetPaymentsMethod(IResponseListener<ArrayList<accWorkgroupPayment>> callback)
    {
        _connection.Submit(null, "ardvro/component/webappgear/acc/Payment/GetPaymentsMethod", callback);
    }

    public void GetExchangeRate(String currencyFroM, String currencyTo, IResponseListener<Float> callback)
    {
        _connection.Submit(new Object[]{ currencyFroM, currencyTo}, "ardvro/component/webappgear/acc/Payment/GetExchangeRate", callback);
    }

}
