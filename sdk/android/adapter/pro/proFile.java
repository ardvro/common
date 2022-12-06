package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.Date;

public class proFile implements Serializable
{
    public static String PROFILE = "proFile"; 


    public proFile() { }

    public static String ID = "proFile.Id"; 
    public int Id ;

    public static String STATUS = "proFile.Status"; 
    public byte Status ;

    public static String UPDATED = "proFile.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proFile.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proFile.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proFile.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String NAME = "proFile.Name"; 
    public String Name ;

    public static String FILETYPE = "proFile.FileType"; 
    public String FileType ;

    public static String CONTENT = "proFile.Content"; 
    public String Content ;

    public static String NOTE = "proFile.Note"; 
    public String Note ;


}
