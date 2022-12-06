package ardvro.adapter.sub;

import java.io.Serializable;
import java.util.Date;

public class subSsl implements Serializable
{
    public static String SUBSSL = "subSsl"; 


    public subSsl() { }

    public static String ID = "subSsl.Id"; 
    public int Id ;

    public static String STATUS = "subSsl.Status"; 
    public byte Status ;

    public static String UPDATED = "subSsl.Updated"; 
    public Date Updated ;

    public static String UPDATER = "subSsl.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "subSsl.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String SSLTYPE = "subSsl.SslType"; 
    public String SslType ;

    public static String SUBDOMAINID = "subSsl.subDomainId"; 
    public int subDomainId ;
    public static String SUBDOMAIN = "subDomain"; 
    public subDomain subDomain ;

    public String SubDomain ;

    public static String PLANID = "subSsl.PlanId"; 
    public String PlanId ;

    public static String ORDERID = "subSsl.OrderId"; 
    public String OrderId ;

    public static String CERT = "subSsl.Cert"; 
    public String Cert ;

    public static String CERTKEY = "subSsl.CertKey"; 
    public String CertKey ;

    public static String CACERT = "subSsl.CaCert"; 
    public String CaCert ;

    public static String FULLCHAIN = "subSsl.FullChain"; 
    public String FullChain ;

    public static String DETAIL = "subSsl.Detail"; 
    public String Detail ;


}
