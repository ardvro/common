package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoApplication implements Serializable
{
    public static String SSOAPPLICATION = "ssoApplication"; 


    public ssoApplication() { }

    public static String ID = "ssoApplication.Id"; 
    public int Id ;

    public static String STATUS = "ssoApplication.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoApplication.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoApplication.Updater"; 
    public String Updater ;

    public static String CODE = "ssoApplication.Code"; 
    public String Code ;

    public static String NAME = "ssoApplication.Name"; 
    public String Name ;

    public static String BASEKEY = "ssoApplication.BaseKey"; 
    public String BaseKey ;

    public static String CLIENTRSAKEY = "ssoApplication.ClientRsaKey"; 
    public String ClientRsaKey ;

    public static String SERVERRSAKEY = "ssoApplication.ServerRsaKey"; 
    public String ServerRsaKey ;

    public static String AESSECRETKEY = "ssoApplication.AesSecretKey"; 
    public String AesSecretKey ;

    public static String AESINITVECTOR = "ssoApplication.AesInitVector"; 
    public String AesInitVector ;

    public static String URL = "ssoApplication.Url"; 
    public String Url ;


    public static String SSOMENUS = "ssoMenus"; 
    public ArrayList<ssoMenu> ssoMenus ;

}
