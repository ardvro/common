package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoRole implements Serializable
{
    public static String SSOROLE = "ssoRole"; 


    public ssoRole() { }

    public static String ID = "ssoRole.Id"; 
    public int Id ;

    public static String STATUS = "ssoRole.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoRole.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoRole.Updater"; 
    public String Updater ;

    public static String NAME = "ssoRole.Name"; 
    public String Name ;

    public static String NOTE = "ssoRole.Note"; 
    public String Note ;


    public static String SSOMENUROLES = "ssoMenuRoles"; 
    public ArrayList<ssoMenuRole> ssoMenuRoles ;

    public static String SSOOBJECTWORKGROUPROLES = "ssoObjectWorkgroupRoles"; 
    public ArrayList<ssoObjectWorkgroupRole> ssoObjectWorkgroupRoles ;

    public static String SSOUSERWORKGROUPROLES = "ssoUserWorkgroupRoles"; 
    public ArrayList<ssoUserWorkgroupRole> ssoUserWorkgroupRoles ;

}
