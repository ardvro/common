package ardvro.adapter.sub;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class subVoucher implements Serializable
{
    public static String SUBVOUCHER = "subVoucher"; 


    public subVoucher() { }

    public static String ID = "subVoucher.Id"; 
    public int Id ;

    public static String STATUS = "subVoucher.Status"; 
    public byte Status ;

    public static String UPDATED = "subVoucher.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subVoucher.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subVoucher.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String CODE = "subVoucher.Code"; 
    public String Code ;

    public static String NAME = "subVoucher.Name"; 
    public String Name ;

    public static String VOUCHERTYPE = "subVoucher.VoucherType"; 
    public String VoucherType ;

    public static String AMOUNT = "subVoucher.Amount"; 
    public float Amount ;

    public static String MINAMOUNT = "subVoucher.MinAmount"; 
    public float MinAmount ;

    public static String MAXAMOUNT = "subVoucher.MaxAmount"; 
    public float MaxAmount ;

    public static String TAX = "subVoucher.Tax"; 
    public float Tax ;

    public static String QTY = "subVoucher.Qty"; 
    public int Qty ;

    public static String EXPIRED = "subVoucher.Expired"; 
    public Date Expired ;

    public static String VALUE = "subVoucher.Value"; 
    public String Value ;

    public static String NOTE = "subVoucher.Note"; 
    public String Note ;


    public static String SUBORDERS = "subOrders"; 
    public ArrayList<subOrder> subOrders ;

}
