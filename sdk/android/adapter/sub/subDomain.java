package ardvro.adapter.sub;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class subDomain implements Serializable
{
    public static String SUBDOMAIN = "subDomain"; 


    public subDomain() { }

    public static String ID = "subDomain.Id"; 
    public int Id ;

    public static String STATUS = "subDomain.Status"; 
    public byte Status ;

    public static String UPDATED = "subDomain.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subDomain.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subDomain.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String NAME = "subDomain.Name"; 
    public String Name ;

    public static String EXPIRED = "subDomain.Expired"; 
    public Date Expired ;

    public static String EPPCODE = "subDomain.EppCode"; 
    public String EppCode ;

    public static String LOCKED = "subDomain.Locked"; 
    public boolean Locked ;

    public static String PROTECTION = "subDomain.Protection"; 
    public boolean Protection ;

    public static String ORDERID = "subDomain.OrderId"; 
    public String OrderId ;

    public static String DETAIL = "subDomain.Detail"; 
    public String Detail ;


    public static String SUBCONTACTS = "subContacts"; 
    public ArrayList<subContact> subContacts ;

    public static String SUBNAMESERVERS = "subNameServers"; 
    public ArrayList<subNameServer> subNameServers ;

    public static String SUBSSLS = "subSsls"; 
    public ArrayList<subSsl> subSsls ;

}
