package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoUserWorkgroup implements Serializable
{
    public static String SSOUSERWORKGROUP = "ssoUserWorkgroup"; 


    public ssoUserWorkgroup() { }

    public static String ID = "ssoUserWorkgroup.Id"; 
    public int Id ;

    public static String STATUS = "ssoUserWorkgroup.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoUserWorkgroup.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoUserWorkgroup.Updater"; 
    public String Updater ;

    public static String SSOUSERID = "ssoUserWorkgroup.ssoUserId"; 
    public int ssoUserId ;
    public static String SSOUSER = "ssoUser"; 
    public ssoUser ssoUser ;

    public static String SSOWORKGROUPID = "ssoUserWorkgroup.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;
    public static String SSOWORKGROUP = "ssoWorkgroup"; 
    public ssoWorkgroup ssoWorkgroup ;


    public static String SSOUSERWORKGROUPROLES = "ssoUserWorkgroupRoles"; 
    public ArrayList<ssoUserWorkgroupRole> ssoUserWorkgroupRoles ;

}
