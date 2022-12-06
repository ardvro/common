package ardvro.adapter.sub;

import java.io.Serializable;
import java.util.Date;

public class subOrderItem implements Serializable
{
    public static String SUBORDERITEM = "subOrderItem"; 


    public subOrderItem() { }

    public static String ID = "subOrderItem.Id"; 
    public int Id ;

    public static String STATUS = "subOrderItem.Status"; 
    public byte Status ;

    public static String UPDATED = "subOrderItem.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subOrderItem.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subOrderItem.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String SUBORDERID = "subOrderItem.subOrderId"; 
    public int subOrderId ;
    public static String SUBORDER = "subOrder"; 
    public subOrder subOrder ;

    public static String SUBPACKAGEID = "subOrderItem.subPackageId"; 
    public int subPackageId ;
    public static String SUBPACKAGE = "subPackage"; 
    public subPackage subPackage ;

    public static String DURATIONTYPE = "subOrderItem.DurationType"; 
    public String DurationType ;

    public static String DURATION = "subOrderItem.Duration"; 
    public int Duration ;

    public static String STARTDATE = "subOrderItem.StartDate"; 
    public Date StartDate ;

    public static String ENDDATE = "subOrderItem.EndDate"; 
    public Date EndDate ;

    public static String VALUE = "subOrderItem.Value"; 
    public String Value ;

    public static String PRICE = "subOrderItem.Price"; 
    public float Price ;

    public static String DISC = "subOrderItem.Disc"; 
    public float Disc ;

    public static String TAX = "subOrderItem.Tax"; 
    public float Tax ;

    public static String CHARGE = "subOrderItem.Charge"; 
    public float Charge ;

    public static String TOTAL = "subOrderItem.Total"; 
    public float Total ;

    public static String NOTE = "subOrderItem.Note"; 
    public String Note ;


}
