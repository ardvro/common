package ardvro.adapter.sub;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class subPackageItem implements Serializable
{
    public static String SUBPACKAGEITEM = "subPackageItem"; 


    public subPackageItem() { }

    public static String ID = "subPackageItem.Id"; 
    public int Id ;

    public static String STATUS = "subPackageItem.Status"; 
    public byte Status ;

    public static String UPDATED = "subPackageItem.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subPackageItem.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subPackageItem.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String SUBPACKAGEID = "subPackageItem.subPackageId"; 
    public int subPackageId ;
    public static String SUBPACKAGE = "subPackage"; 
    public subPackage subPackage ;

    public static String SUBITEMID = "subPackageItem.subItemId"; 
    public int subItemId ;
    public static String SUBITEM = "subItem"; 
    public subItem subItem ;

    public static String VALUE = "subPackageItem.Value"; 
    public String Value ;


}
