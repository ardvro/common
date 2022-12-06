package ardvro.adapter.sub;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class subItem implements Serializable
{
    public static String SUBITEM = "subItem"; 


    public subItem() { }

    public static String ID = "subItem.Id"; 
    public int Id ;

    public static String STATUS = "subItem.Status"; 
    public byte Status ;

    public static String UPDATED = "subItem.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subItem.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subItem.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String ITEMTYPE = "subItem.ItemType"; 
    public String ItemType ;

    public static String NAME = "subItem.Name"; 
    public String Name ;

    public static String NOTE = "subItem.Note"; 
    public String Note ;


    public static String SUBPACKAGEITEMS = "subPackageItems"; 
    public ArrayList<subPackageItem> subPackageItems ;

}
