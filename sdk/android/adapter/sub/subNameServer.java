package ardvro.adapter.sub;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class subNameServer implements Serializable
{
    public static String SUBNAMESERVER = "subNameServer"; 


    public subNameServer() { }

    public static String ID = "subNameServer.Id"; 
    public int Id ;

    public static String STATUS = "subNameServer.Status"; 
    public byte Status ;

    public static String UPDATED = "subNameServer.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subNameServer.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subNameServer.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String SUBDOMAINID = "subNameServer.subDomainId"; 
    public int subDomainId ;
    public static String SUBDOMAIN = "subDomain"; 
    public subDomain subDomain ;

    public static String NAMESERVERTYPE = "subNameServer.NameServerType"; 
    public String NameServerType ;

    public static String NAMESERVER = "subNameServer.NameServer"; 
    public String NameServer ;

    public static String IPADDRESS = "subNameServer.IpAddress"; 
    public String IpAddress ;

    public static String NOTE = "subNameServer.Note"; 
    public String Note ;


}
