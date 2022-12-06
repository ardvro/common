package ardvro.adapter.sub;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class subOrder implements Serializable
{
    public static String SUBORDER = "subOrder"; 


    public subOrder() { }

    public static String ID = "subOrder.Id"; 
    public int Id ;

    public static String STATUS = "subOrder.Status"; 
    public byte Status ;

    public static String UPDATED = "subOrder.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subOrder.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subOrder.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String ACCWORKGROUPPAYMENTID = "subOrder.accWorkgroupPaymentId"; 
    public int accWorkgroupPaymentId ;

    public static String SUBVOUCHERID = "subOrder.subVoucherId"; 
    public int subVoucherId ;
    public static String SUBVOUCHER = "subVoucher"; 
    public subVoucher subVoucher ;

    public static String SUBORDERID = "subOrder.subOrderId"; 
    public int subOrderId ;
    public static String SUBORDER1 = "subOrder1"; 
    public subOrder subOrder1 ;

    public static String CODE = "subOrder.Code"; 
    public String Code ;

    public static String HOSTWORKGROUP = "subOrder.HostWorkgroup"; 
    public String HostWorkgroup ;

    public static String CREATED = "subOrder.Created"; 
    public Date Created ;

    public static String DUEDATE = "subOrder.DueDate"; 
    public Date DueDate ;

    public static String CONFIRMDATE = "subOrder.ConfirmDate"; 
    public Date ConfirmDate ;

    public static String PAYMENTDATE = "subOrder.PaymentDate"; 
    public Date PaymentDate ;

    public static String PAYMENTCODE = "subOrder.PaymentCode"; 
    public float PaymentCode ;

    public static String PAIDAMOUNT = "subOrder.PaidAmount"; 
    public float PaidAmount ;

    public static String GRANDTOTAL = "subOrder.GrandTotal"; 
    public float GrandTotal ;

    public static String ATTACHMENT = "subOrder.Attachment"; 
    public String Attachment ;

    public static String NOTE = "subOrder.Note"; 
    public String Note ;


    public static String SUBORDERS = "subOrders"; 
    public ArrayList<subOrder> subOrders ;

    public static String SUBORDERITEMS = "subOrderItems"; 
    public ArrayList<subOrderItem> subOrderItems ;

}
