package ardvro.adapter.sub;

import java.io.Serializable;
import java.util.Date;

public class subPackagePrice implements Serializable
{
    public static String SUBPACKAGEPRICE = "subPackagePrice"; 


    public subPackagePrice() { }

    public static String ID = "subPackagePrice.Id"; 
    public int Id ;

    public static String STATUS = "subPackagePrice.Status"; 
    public byte Status ;

    public static String UPDATED = "subPackagePrice.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subPackagePrice.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subPackagePrice.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String SUBPACKAGEID1 = "subPackagePrice.subPackageId1"; 
    public int subPackageId1 ;
    public static String SUBPACKAGE = "subPackage"; 
    public subPackage subPackage ;

    public static String SUBPACKAGEID2 = "subPackagePrice.subPackageId2"; 
    public int subPackageId2 ;
    public static String SUBPACKAGE2 = "subPackage2";
    public subPackage subPackage2 ;

    public static String PRICE = "subPackagePrice.Price"; 
    public float Price ;

    public static String CURRENCYCODE = "subPackagePrice.CurrencyCode"; 
    public String CurrencyCode ;


}
