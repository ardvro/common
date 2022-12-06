package ardvro.adapter.pro;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class proTemplate implements Serializable
{
    public static String PROTEMPLATE = "proTemplate"; 


    public proTemplate() { }

    public static String ID = "proTemplate.Id"; 
    public int Id ;

    public static String STATUS = "proTemplate.Status"; 
    public byte Status ;

    public static String UPDATED = "proTemplate.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proTemplate.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proTemplate.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proTemplate.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String NAME = "proTemplate.Name"; 
    public String Name ;

    public static String TEMPLATETYPE = "proTemplate.TemplateType"; 
    public String TemplateType ;

    public static String URL = "proTemplate.Url"; 
    public String Url ;

    public static String SCREENSHOT = "proTemplate.Screenshot"; 
    public String Screenshot ;

    public static String PRICE = "proTemplate.Price"; 
    public float Price ;

    public static String RATING = "proTemplate.Rating"; 
    public float Rating ;

    public static String SETTING = "proTemplate.Setting"; 
    public String Setting ;

    public static String NOTE = "proTemplate.Note"; 
    public String Note ;


}
