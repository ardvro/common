package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoUserSecurity implements Serializable
{
    public static String SSOUSERSECURITY = "ssoUserSecurity"; 


    public ssoUserSecurity() { }

    public static String ID = "ssoUserSecurity.Id"; 
    public int Id ;

    public static String STATUS = "ssoUserSecurity.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoUserSecurity.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoUserSecurity.Updater"; 
    public String Updater ;

    public static String SSOUSERID = "ssoUserSecurity.ssoUserId"; 
    public int ssoUserId ;
    public static String SSOUSER = "ssoUser"; 
    public ssoUser ssoUser ;

    public static String SECURITYTYPE = "ssoUserSecurity.SecurityType"; 
    public String SecurityType ;

    public static String VALUE = "ssoUserSecurity.Value"; 
    public String Value ;


    public static String SSOUSERRESETS = "ssoUserResets"; 
    public ArrayList<ssoUserReset> ssoUserResets ;

}
