package ardvro.adapter.sub;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class subPackage implements Serializable
{
    public static String SUBPACKAGE = "subPackage"; 


    public subPackage() { }

    public static String ID = "subPackage.Id"; 
    public int Id ;

    public static String STATUS = "subPackage.Status"; 
    public byte Status ;

    public static String UPDATED = "subPackage.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subPackage.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subPackage.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String SUBPACKAGEID = "subPackage.subPackageId"; 
    public int subPackageId ;
    public static String SUBPACKAGE1 = "subPackage1"; 
    public subPackage subPackage1 ;

    public static String PACKAGETYPE = "subPackage.PackageType"; 
    public String PackageType ;

    public static String NAME = "subPackage.Name"; 
    public String Name ;

    public static String CURRENCYCODE = "subPackage.CurrencyCode"; 
    public String CurrencyCode ;

    public static String PRICE = "subPackage.Price"; 
    public float Price ;

    public static String DURATIONTYPE = "subPackage.DurationType"; 
    public String DurationType ;

    public static String PROVIDERID = "subPackage.ProviderId"; 
    public String ProviderId ;

    public static String NOTE = "subPackage.Note"; 
    public String Note ;


    public static String SUBORDERITEMS = "subOrderItems"; 
    public ArrayList<subOrderItem> subOrderItems ;

    public static String SUBPACKAGES = "subPackages"; 
    public ArrayList<subPackage> subPackages ;

    public static String SUBPACKAGEITEMS = "subPackageItems"; 
    public ArrayList<subPackageItem> subPackageItems ;

    public static String SUBPACKAGEPRICES = "subPackagePrices"; 
    public ArrayList<subPackagePrice> subPackagePrices ;

    public static String SUBPACKAGEPRICES1 = "subPackagePrices1";
    public ArrayList<subPackagePrice> subPackagePrices1 ;

}
