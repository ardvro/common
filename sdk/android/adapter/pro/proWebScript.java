package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.Date;

public class proWebScript implements Serializable
{
    public static String PROWEBSCRIPT = "proWebScript"; 


    public proWebScript() { }

    public static String ID = "proWebScript.Id"; 
    public int Id ;

    public static String STATUS = "proWebScript.Status"; 
    public byte Status ;

    public static String UPDATED = "proWebScript.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proWebScript.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proWebScript.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proWebScript.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String NAME = "proWebScript.Name"; 
    public String Name ;

    public static String FILETYPE = "proWebScript.FileType"; 
    public String FileType ;

    public static String CONTENT = "proWebScript.Content"; 
    public String Content ;

    public static String NOTE = "proWebScript.Note"; 
    public String Note ;


}
