package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoObjectWorkgroupRole implements Serializable
{
    public static String SSOOBJECTWORKGROUPROLE = "ssoObjectWorkgroupRole"; 


    public ssoObjectWorkgroupRole() { }

    public static String ID = "ssoObjectWorkgroupRole.Id"; 
    public int Id ;

    public static String STATUS = "ssoObjectWorkgroupRole.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoObjectWorkgroupRole.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoObjectWorkgroupRole.Updater"; 
    public String Updater ;

    public static String SSOOBJECTWORKGROUPID = "ssoObjectWorkgroupRole.ssoObjectWorkgroupId"; 
    public int ssoObjectWorkgroupId ;
    public static String SSOOBJECTWORKGROUP = "ssoObjectWorkgroup"; 
    public ssoObjectWorkgroup ssoObjectWorkgroup ;

    public static String SSOROLEID = "ssoObjectWorkgroupRole.ssoRoleId"; 
    public int ssoRoleId ;
    public static String SSOROLE = "ssoRole"; 
    public ssoRole ssoRole ;

    public static String ALLOWCREATE = "ssoObjectWorkgroupRole.AllowCreate"; 
    public boolean AllowCreate ;

    public static String ALLOWREAD = "ssoObjectWorkgroupRole.AllowRead"; 
    public boolean AllowRead ;

    public static String ALLOWUPDATE = "ssoObjectWorkgroupRole.AllowUpdate"; 
    public boolean AllowUpdate ;

    public static String ALLOWDELETE = "ssoObjectWorkgroupRole.AllowDelete"; 
    public boolean AllowDelete ;


}
