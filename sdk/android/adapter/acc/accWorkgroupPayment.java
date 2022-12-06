package ardvro.adapter.acc;

import java.io.Serializable;
import java.util.Date;

public class accWorkgroupPayment implements Serializable
{
    public static String ACCWORKGROUPPAYMENT = "accWorkgroupPayment"; 


    public accWorkgroupPayment() { }

    public static String ID = "accWorkgroupPayment.Id"; 
    public int Id ;

    public static String STATUS = "accWorkgroupPayment.Status"; 
    public byte Status ;

    public static String UPDATED = "accWorkgroupPayment.Updated"; 
    public Date Updated ;

    public static String UPDATER = "accWorkgroupPayment.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "accWorkgroupPayment.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PAYMENTTYPE = "accWorkgroupPayment.PaymentType"; 
    public String PaymentType ;

    public static String CURRENCYCODE = "accWorkgroupPayment.CurrencyCode"; 
    public String CurrencyCode ;

    public static String NAME = "accWorkgroupPayment.Name"; 
    public String Name ;

    public static String DESCRIPTION = "accWorkgroupPayment.Description"; 
    public String Description ;

    public static String CHARGE = "accWorkgroupPayment.Charge"; 
    public float Charge ;

    public static String PAYMENTURL = "accWorkgroupPayment.PaymentUrl"; 
    public String PaymentUrl ;

    public static String PAYMENTID = "accWorkgroupPayment.PaymentId"; 
    public String PaymentId ;

    public static String PAYMENTKEY = "accWorkgroupPayment.PaymentKey"; 
    public String PaymentKey ;

    public static String ROUND = "accWorkgroupPayment.Round"; 
    public byte Round ;

    public static String NOTE = "accWorkgroupPayment.Note"; 
    public String Note ;


}
