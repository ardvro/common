package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoUserReset implements Serializable
{
    public static String SSOUSERRESET = "ssoUserReset"; 


    public ssoUserReset() { }

    public static String ID = "ssoUserReset.Id"; 
    public int Id ;

    public static String STATUS = "ssoUserReset.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoUserReset.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoUserReset.Updater"; 
    public String Updater ;

    public static String CODE = "ssoUserReset.Code"; 
    public String Code ;

    public static String SSOUSERSECURITYID = "ssoUserReset.ssoUserSecurityId"; 
    public int ssoUserSecurityId ;
    public static String SSOUSERSECURITY = "ssoUserSecurity"; 
    public ssoUserSecurity ssoUserSecurity ;

    public static String EXPIRED = "ssoUserReset.Expired"; 
    public Date Expired ;


}
