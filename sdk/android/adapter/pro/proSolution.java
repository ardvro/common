package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class proSolution implements Serializable
{
    public static String PROSOLUTION = "proSolution"; 


    public proSolution() { }

    public static String ID = "proSolution.Id"; 
    public int Id ;

    public static String STATUS = "proSolution.Status"; 
    public byte Status ;

    public static String UPDATED = "proSolution.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proSolution.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proSolution.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String CODE = "proSolution.Code"; 
    public String Code ;

    public static String NAME = "proSolution.Name"; 
    public String Name ;

    public static String WEBSOCKETURL = "proSolution.WebSocketUrl"; 
    public String WebSocketUrl ;

    public static String CDNURL = "proSolution.CdnUrl"; 
    public String CdnUrl ;

    public static String LOCALPORT = "proSolution.LocalPort"; 
    public int LocalPort ;

    public static String HOSTINGTYPE = "proSolution.HostingType"; 
    public String HostingType ;

    public static String WEBPANELUSERNAME = "proSolution.WebPanelUsername"; 
    public String WebPanelUsername ;

    public static String WEBPANELPASSWORD = "proSolution.WebPanelPassword"; 
    public String WebPanelPassword ;

    public static String AESSECRETKEY = "proSolution.AesSecretKey"; 
    public String AesSecretKey ;

    public static String AESINITVECTOR = "proSolution.AesInitVector"; 
    public String AesInitVector ;

    public static String LABEL = "proSolution.Label"; 
    public String Label ;

    public static String NOTE = "proSolution.Note"; 
    public String Note ;


    public static String PROSOLUTIONAPPLICATIONS = "proSolutionApplications"; 
    public ArrayList<proSolutionApplication> proSolutionApplications ;

}
