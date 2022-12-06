package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoUser implements Serializable
{
    public static String SSOUSER = "ssoUser"; 


    public ssoUser() { }

    public static String ID = "ssoUser.Id"; 
    public int Id ;

    public static String STATUS = "ssoUser.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoUser.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoUser.Updater"; 
    public String Updater ;

    public static String CREATED = "ssoUser.Created"; 
    public Date Created ;

    public static String NAME = "ssoUser.Name"; 
    public String Name ;

    public static String PASSWORD = "ssoUser.Password"; 
    public String Password ;

    public static String SALT = "ssoUser.Salt"; 
    public String Salt ;


    public static String SSOUSERSECURITIES = "ssoUserSecurities"; 
    public ArrayList<ssoUserSecurity> ssoUserSecurities ;

    public static String SSOUSERSETTINGS = "ssoUserSettings"; 
    public ArrayList<ssoUserSetting> ssoUserSettings ;

    public static String SSOUSERWORKGROUPS = "ssoUserWorkgroups"; 
    public ArrayList<ssoUserWorkgroup> ssoUserWorkgroups ;

}
