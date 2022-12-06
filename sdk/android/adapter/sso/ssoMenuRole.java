package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoMenuRole implements Serializable
{
    public static String SSOMENUROLE = "ssoMenuRole"; 


    public ssoMenuRole() { }

    public static String ID = "ssoMenuRole.Id"; 
    public int Id ;

    public static String STATUS = "ssoMenuRole.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoMenuRole.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoMenuRole.Updater"; 
    public String Updater ;

    public static String SSOMENUID = "ssoMenuRole.ssoMenuId"; 
    public int ssoMenuId ;
    public static String SSOMENU = "ssoMenu"; 
    public ssoMenu ssoMenu ;

    public static String SSOROLEID = "ssoMenuRole.ssoRoleId"; 
    public int ssoRoleId ;
    public static String SSOROLE = "ssoRole"; 
    public ssoRole ssoRole ;


}
