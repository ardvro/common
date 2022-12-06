package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoRegUser implements Serializable
{
    public static String SSOREGUSER = "ssoRegUser"; 


    public ssoRegUser() { }

    public static String ID = "ssoRegUser.Id"; 
    public int Id ;

    public static String STATUS = "ssoRegUser.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoRegUser.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoRegUser.Updater"; 
    public String Updater ;

    public static String CREATED = "ssoRegUser.Created"; 
    public Date Created ;

    public static String CODE = "ssoRegUser.Code"; 
    public String Code ;

    public static String NAME = "ssoRegUser.Name"; 
    public String Name ;

    public static String PASSWORD = "ssoRegUser.Password"; 
    public String Password ;

    public static String SALT = "ssoRegUser.Salt"; 
    public String Salt ;

    public static String SECURITIES = "ssoRegUser.Securities"; 
    public String Securities ;


}
