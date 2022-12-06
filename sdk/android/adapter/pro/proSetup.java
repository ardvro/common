package ardvro.adapter.pro;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class proSetup implements Serializable
{
    public static String PROSETUP = "proSetup"; 


    public proSetup() { }

    public static String ID = "proSetup.Id"; 
    public int Id ;

    public static String STATUS = "proSetup.Status"; 
    public byte Status ;

    public static String UPDATED = "proSetup.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proSetup.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proSetup.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proSetup.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String NAME = "proSetup.Name"; 
    public String Name ;

    public static String INPUTTYPE = "proSetup.InputType"; 
    public String InputType ;

    public static String STATUSTYPE = "proSetup.StatusType"; 
    public String StatusType ;

    public static String REQUIRED = "proSetup.Required"; 
    public boolean Required ;

    public static String KEYTYPE = "proSetup.KeyType"; 
    public String KeyType ;

    public static String MINIMUMVALUE = "proSetup.MinimumValue"; 
    public String MinimumValue ;

    public static String MAXIMUMVALUE = "proSetup.MaximumValue"; 
    public String MaximumValue ;

    public static String DECIMALPOINT = "proSetup.DecimalPoint"; 
    public byte DecimalPoint ;

    public static String DEFAULTVALUE = "proSetup.DefaultValue"; 
    public String DefaultValue ;

    public static String LABEL = "proSetup.Label"; 
    public String Label ;

    public static String REFERENCESCHEMA = "proSetup.ReferenceSchema"; 
    public String ReferenceSchema ;

    public static String REFERENCECOLUMN = "proSetup.ReferenceColumn"; 
    public String ReferenceColumn ;

    public static String REFERENCENAME = "proSetup.ReferenceName"; 
    public String ReferenceName ;

    public static String OPTIONS = "proSetup.Options"; 
    public String Options ;

    public static String ORDINAL = "proSetup.Ordinal"; 
    public byte Ordinal ;

    public static String NOTE = "proSetup.Note"; 
    public String Note ;


}
