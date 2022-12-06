package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

public class proSolutionApplication implements Serializable
{
    public static String PROSOLUTIONAPPLICATION = "proSolutionApplication"; 


    public proSolutionApplication() { }

    public static String ID = "proSolutionApplication.Id"; 
    public int Id ;

    public static String STATUS = "proSolutionApplication.Status"; 
    public byte Status ;

    public static String UPDATED = "proSolutionApplication.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proSolutionApplication.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proSolutionApplication.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROSOLUTIONID = "proSolutionApplication.proSolutionId"; 
    public int proSolutionId ;
    public static String PROSOLUTION = "proSolution"; 
    public proSolution proSolution ;

    public static String PROPROJECTID = "proSolutionApplication.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String CODE = "proSolutionApplication.Code"; 
    public String Code ;

    public static String BASEKEY = "proSolutionApplication.BaseKey"; 
    public String BaseKey ;

    public static String NAME = "proSolutionApplication.Name"; 
    public String Name ;

    public static String WEBBASEURL = "proSolutionApplication.WebBaseUrl"; 
    public String WebBaseUrl ;

    public static String SERVERRSAKEY = "proSolutionApplication.ServerRsaKey"; 
    public String ServerRsaKey ;

    public static String CLIENTRSAKEY = "proSolutionApplication.ClientRsaKey"; 
    public String ClientRsaKey ;

    public static String SETTING = "proSolutionApplication.Setting"; 
    public String Setting ;

    public static String NOTE = "proSolutionApplication.Note"; 
    public String Note ;


    public static String PROSUBSCRIPTIONS = "proSubscriptions"; 
    public ArrayList<proSubscription> proSubscriptions ;

}
