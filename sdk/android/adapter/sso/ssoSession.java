package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoSession implements Serializable
{
    public static String SSOSESSION = "ssoSession"; 


    public ssoSession() { }

    public static String ID = "ssoSession.Id"; 
    public int Id ;

    public static String STATUS = "ssoSession.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoSession.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoSession.Updater"; 
    public String Updater ;

    public static String CODE = "ssoSession.Code"; 
    public String Code ;

    public static String USERNAME = "ssoSession.Username"; 
    public String Username ;

    public static String LOGINTYPE = "ssoSession.LoginType"; 
    public String LoginType ;

    public static String DEVICEINFO = "ssoSession.DeviceInfo"; 
    public String DeviceInfo ;

    public static String IP = "ssoSession.Ip"; 
    public String Ip ;

    public static String COUNTRY = "ssoSession.Country"; 
    public String Country ;

    public static String CONNECTIONID = "ssoSession.ConnectionId"; 
    public String ConnectionId ;

    public static String LOGIN = "ssoSession.Login"; 
    public Date Login ;

    public static String EXPIRED = "ssoSession.Expired"; 
    public Date Expired ;


}
