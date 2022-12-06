package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoOtp implements Serializable
{
    public static String SSOOTP = "ssoOtp"; 


    public ssoOtp() { }

    public static String ID = "ssoOtp.Id"; 
    public int Id ;

    public static String STATUS = "ssoOtp.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoOtp.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoOtp.Updater"; 
    public String Updater ;

    public static String EXPIRED = "ssoOtp.Expired"; 
    public Date Expired ;

    public static String NAME = "ssoOtp.Name"; 
    public String Name ;

    public static String SECURITYTYPE = "ssoOtp.SecurityType"; 
    public String SecurityType ;

    public static String SECURITYCODE = "ssoOtp.SecurityCode"; 
    public String SecurityCode ;


}
