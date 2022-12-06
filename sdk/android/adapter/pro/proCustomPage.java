package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.Date;

public class proCustomPage implements Serializable
{
    public static String PROCUSTOMPAGE = "proCustomPage"; 


    public proCustomPage() { }

    public static String ID = "proCustomPage.Id"; 
    public int Id ;

    public static String STATUS = "proCustomPage.Status"; 
    public byte Status ;

    public static String UPDATED = "proCustomPage.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proCustomPage.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proCustomPage.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proCustomPage.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String NAME = "proCustomPage.Name"; 
    public String Name ;

    public static String PAGETYPE = "proCustomPage.PageType"; 
    public String PageType ;

    public static String CONTENT = "proCustomPage.Content"; 
    public String Content ;

    public static String NOTE = "proCustomPage.Note"; 
    public String Note ;


}
