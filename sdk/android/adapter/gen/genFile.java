package ardvro.adapter.gen;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class genFile implements Serializable
{
    public static String GENFILE = "genFile"; 


    public genFile() { }

    public static String ID = "genFile.Id"; 
    public int Id ;

    public static String STATUS = "genFile.Status"; 
    public byte Status ;

    public static String UPDATED = "genFile.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genFile.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "genFile.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String NAME = "genFile.Name"; 
    public String Name ;

    public static String ITEMTYPE = "genFile.ItemType"; 
    public String ItemType ;

    public static String FILETYPE = "genFile.FileType"; 
    public String FileType ;

    public static String FILEPATH = "genFile.FilePath"; 
    public String FilePath ;

    public static String URL = "genFile.Url"; 
    public String Url ;

    public static String CONTENT = "genFile.Content"; 
    public String Content ;

    public static String NOTE = "genFile.Note"; 
    public String Note ;


}
