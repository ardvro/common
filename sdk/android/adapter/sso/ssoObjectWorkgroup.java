package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoObjectWorkgroup implements Serializable
{
    public static String SSOOBJECTWORKGROUP = "ssoObjectWorkgroup"; 


    public ssoObjectWorkgroup() { }

    public static String ID = "ssoObjectWorkgroup.Id"; 
    public int Id ;

    public static String STATUS = "ssoObjectWorkgroup.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoObjectWorkgroup.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoObjectWorkgroup.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "ssoObjectWorkgroup.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;
    public static String SSOWORKGROUP = "ssoWorkgroup"; 
    public ssoWorkgroup ssoWorkgroup ;

    public static String SSOOBJECTID = "ssoObjectWorkgroup.ssoObjectId"; 
    public int ssoObjectId ;
    public static String SSOOBJECT = "ssoObject"; 
    public ssoObject ssoObject ;


    public static String SSOOBJECTWORKGROUPROLES = "ssoObjectWorkgroupRoles"; 
    public ArrayList<ssoObjectWorkgroupRole> ssoObjectWorkgroupRoles ;

}
