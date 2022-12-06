package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoWorkgroup implements Serializable
{
    public static String SSOWORKGROUP = "ssoWorkgroup"; 


    public ssoWorkgroup() { }

    public static String ID = "ssoWorkgroup.Id"; 
    public int Id ;

    public static String STATUS = "ssoWorkgroup.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoWorkgroup.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoWorkgroup.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "ssoWorkgroup.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;
    public static String SSOWORKGROUP1 = "ssoWorkgroup1"; 
    public ssoWorkgroup ssoWorkgroup1 ;

    public static String WORKGROUPTYPE = "ssoWorkgroup.WorkgroupType"; 
    public String WorkgroupType ;

    public static String CODE = "ssoWorkgroup.Code"; 
    public String Code ;

    public static String NAME = "ssoWorkgroup.Name"; 
    public String Name ;

    public static String COUNTRY = "ssoWorkgroup.Country"; 
    public String Country ;

    public static String PHONE = "ssoWorkgroup.Phone"; 
    public String Phone ;

    public static String POSTALCODE = "ssoWorkgroup.PostalCode"; 
    public String PostalCode ;

    public static String ADDRESS = "ssoWorkgroup.Address"; 
    public String Address ;

    public static String CITY = "ssoWorkgroup.City"; 
    public String City ;

    public static String WEBSITE = "ssoWorkgroup.Website"; 
    public String Website ;

    public static String EMAIL = "ssoWorkgroup.Email"; 
    public String Email ;

    public static String IDENTITYNUMBER = "ssoWorkgroup.IdentityNumber"; 
    public String IdentityNumber ;

    public static String MAILSERVER = "ssoWorkgroup.MailServer"; 
    public String MailServer ;

    public static String SMTPPORT = "ssoWorkgroup.SmtpPort"; 
    public int SmtpPort ;

    public static String IMAPPORT = "ssoWorkgroup.ImapPort"; 
    public int ImapPort ;

    public static String MAILUSERNAME = "ssoWorkgroup.MailUsername"; 
    public String MailUsername ;

    public static String MAILPASSWORD = "ssoWorkgroup.MailPassword"; 
    public String MailPassword ;

    public static String NOTE = "ssoWorkgroup.Note"; 
    public String Note ;


    public static String SSOOBJECTWORKGROUPS = "ssoObjectWorkgroups"; 
    public ArrayList<ssoObjectWorkgroup> ssoObjectWorkgroups ;

    public static String SSOREGWORKGROUPS = "ssoRegWorkgroups"; 
    public ArrayList<ssoRegWorkgroup> ssoRegWorkgroups ;

    public static String SSOUSERWORKGROUPS = "ssoUserWorkgroups"; 
    public ArrayList<ssoUserWorkgroup> ssoUserWorkgroups ;

    public static String SSOWORKGROUPS = "ssoWorkgroups"; 
    public ArrayList<ssoWorkgroup> ssoWorkgroups ;

}
