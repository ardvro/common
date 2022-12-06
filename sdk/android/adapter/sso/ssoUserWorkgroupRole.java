package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoUserWorkgroupRole implements Serializable
{
    public static String SSOUSERWORKGROUPROLE = "ssoUserWorkgroupRole"; 


    public ssoUserWorkgroupRole() { }

    public static String ID = "ssoUserWorkgroupRole.Id"; 
    public int Id ;

    public static String STATUS = "ssoUserWorkgroupRole.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoUserWorkgroupRole.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoUserWorkgroupRole.Updater"; 
    public String Updater ;

    public static String SSOUSERWORKGROUPID = "ssoUserWorkgroupRole.ssoUserWorkgroupId"; 
    public int ssoUserWorkgroupId ;
    public static String SSOUSERWORKGROUP = "ssoUserWorkgroup"; 
    public ssoUserWorkgroup ssoUserWorkgroup ;

    public static String SSOROLEID = "ssoUserWorkgroupRole.ssoRoleId"; 
    public int ssoRoleId ;
    public static String SSOROLE = "ssoRole"; 
    public ssoRole ssoRole ;


}
