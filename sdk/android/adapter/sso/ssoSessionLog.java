package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoSessionLog implements Serializable
{
    public static String SSOSESSIONLOG = "ssoSessionLog"; 


    public ssoSessionLog() { }

    public static String ID = "ssoSessionLog.Id"; 
    public int Id ;

    public static String STATUS = "ssoSessionLog.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoSessionLog.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoSessionLog.Updater"; 
    public String Updater ;

    public static String CODE = "ssoSessionLog.Code"; 
    public String Code ;

    public static String USERNAME = "ssoSessionLog.Username"; 
    public String Username ;

    public static String LOGINTYPE = "ssoSessionLog.LoginType"; 
    public String LoginType ;

    public static String DEVICEINFO = "ssoSessionLog.DeviceInfo"; 
    public String DeviceInfo ;

    public static String IP = "ssoSessionLog.Ip"; 
    public String Ip ;

    public static String COUNTRY = "ssoSessionLog.Country"; 
    public String Country ;

    public static String CONNECTIONID = "ssoSessionLog.ConnectionId"; 
    public String ConnectionId ;

    public static String LOGIN = "ssoSessionLog.Login"; 
    public Date Login ;

    public static String LOGOUT = "ssoSessionLog.Logout"; 
    public Date Logout ;

    public static String EXPIRED = "ssoSessionLog.Expired"; 
    public Date Expired ;


}
