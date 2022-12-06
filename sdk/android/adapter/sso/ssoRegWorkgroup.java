package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoRegWorkgroup implements Serializable
{
    public static String SSOREGWORKGROUP = "ssoRegWorkgroup"; 


    public ssoRegWorkgroup() { }

    public static String ID = "ssoRegWorkgroup.Id"; 
    public int Id ;

    public static String STATUS = "ssoRegWorkgroup.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoRegWorkgroup.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoRegWorkgroup.Updater"; 
    public String Updater ;

    public static String CREATED = "ssoRegWorkgroup.Created"; 
    public Date Created ;

    public static String SSOWORKGROUPID = "ssoRegWorkgroup.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;
    public static String SSOWORKGROUP = "ssoWorkgroup"; 
    public ssoWorkgroup ssoWorkgroup ;

    public static String WORKGROUPTYPE = "ssoRegWorkgroup.WorkgroupType"; 
    public String WorkgroupType ;

    public static String CODE = "ssoRegWorkgroup.Code"; 
    public String Code ;

    public static String NAME = "ssoRegWorkgroup.Name"; 
    public String Name ;

    public static String COUNTRYCODE = "ssoRegWorkgroup.CountryCode"; 
    public String CountryCode ;

    public static String ACTIVATIONCODE = "ssoRegWorkgroup.ActivationCode"; 
    public String ActivationCode ;

    public static String NOTE = "ssoRegWorkgroup.Note"; 
    public String Note ;

    public static String DETAIL = "ssoRegWorkgroup.Detail"; 
    public String Detail ;


}
