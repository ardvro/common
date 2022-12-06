package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoUserSetting implements Serializable
{
    public static String SSOUSERSETTING = "ssoUserSetting"; 


    public ssoUserSetting() { }

    public static String ID = "ssoUserSetting.Id"; 
    public int Id ;

    public static String STATUS = "ssoUserSetting.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoUserSetting.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoUserSetting.Updater"; 
    public String Updater ;

    public static String SSOUSERID = "ssoUserSetting.ssoUserId"; 
    public int ssoUserId ;
    public static String SSOUSER = "ssoUser"; 
    public ssoUser ssoUser ;

    public static String NAME = "ssoUserSetting.Name"; 
    public String Name ;

    public static String VALUE = "ssoUserSetting.Value"; 
    public String Value ;


}
