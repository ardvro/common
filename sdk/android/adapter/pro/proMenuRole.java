package ardvro.adapter.pro;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class proMenuRole implements Serializable
{
    public static String PROMENUROLE = "proMenuRole"; 


    public proMenuRole() { }

    public static String ID = "proMenuRole.Id"; 
    public int Id ;

    public static String STATUS = "proMenuRole.Status"; 
    public byte Status ;

    public static String UPDATED = "proMenuRole.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proMenuRole.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proMenuRole.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROMENUID = "proMenuRole.proMenuId"; 
    public int proMenuId ;
    public static String PROMENU = "proMenu"; 
    public proMenu proMenu ;

    public static String SSOROLEID = "proMenuRole.ssoRoleId"; 
    public int ssoRoleId ;


}
