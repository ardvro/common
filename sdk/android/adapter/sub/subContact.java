package ardvro.adapter.sub;

import java.io.Serializable;
import java.util.Date;

public class subContact implements Serializable
{
    public static String SUBCONTACT = "subContact"; 


    public subContact() { }

    public static String ID = "subContact.Id"; 
    public int Id ;

    public static String STATUS = "subContact.Status"; 
    public byte Status ;

    public static String UPDATED = "subContact.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subContact.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subContact.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String SUBDOMAINID = "subContact.subDomainId"; 
    public int subDomainId ;
    public static String SUBDOMAIN = "subDomain"; 
    public subDomain subDomain ;

    public static String CONTACTTYPE = "subContact.ContactType"; 
    public String ContactType ;

    public static String NAME = "subContact.Name"; 
    public String Name ;

    public static String ORGANIZATION = "subContact.Organization"; 
    public String Organization ;

    public static String COUNTRY = "subContact.Country"; 
    public String Country ;

    public static String STATE = "subContact.State"; 
    public String State ;

    public static String CITY = "subContact.City"; 
    public String City ;

    public static String ADDRESS = "subContact.Address"; 
    public String Address ;

    public static String POSTALCODE = "subContact.PostalCode"; 
    public String PostalCode ;

    public static String EMAIL = "subContact.Email"; 
    public String Email ;

    public static String PHONE = "subContact.Phone"; 
    public String Phone ;

    public static String CONTACTID = "subContact.ContactId"; 
    public String ContactId ;

    public static String NOTE = "subContact.Note"; 
    public String Note ;


}
