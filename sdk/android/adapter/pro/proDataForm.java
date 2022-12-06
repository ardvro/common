package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.Date;

public class proDataForm implements Serializable
{
    public static String PRODATAFORM = "proDataForm"; 


    public proDataForm() { }

    public static String ID = "proDataForm.Id"; 
    public int Id ;

    public static String STATUS = "proDataForm.Status"; 
    public byte Status ;

    public static String UPDATED = "proDataForm.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proDataForm.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proDataForm.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proDataForm.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String PRODATASOURCEID = "proDataForm.proDataSourceId"; 
    public int proDataSourceId ;
    public static String PRODATASOURCE = "proDataSource"; 
    public proDataSource proDataSource ;

    public static String NAME = "proDataForm.Name"; 
    public String Name ;

    public static String FRAMETYPE = "proDataForm.FrameType"; 
    public String FrameType ;

    public static String STATUSTYPE = "proDataForm.StatusType"; 
    public String StatusType ;

    public static String FORMCOLUMNS = "proDataForm.FormColumns"; 
    public byte FormColumns ;

    public static String ICON = "proDataForm.Icon"; 
    public String Icon ;

    public static String LABEL = "proDataForm.Label"; 
    public String Label ;

    public static String SHOWLABEL = "proDataForm.ShowLabel"; 
    public boolean ShowLabel ;

    public static String ENABLEASSOCIATION = "proDataForm.EnableAssociation"; 
    public boolean EnableAssociation ;

    public static String QUERYMODE = "proDataForm.QueryMode"; 
    public String QueryMode ;

    public static String QUERYFUNCTION = "proDataForm.QueryFunction"; 
    public String QueryFunction ;

    public static String ONSCHEMALOAD = "proDataForm.OnSchemaLoad"; 
    public String OnSchemaLoad ;

    public static String ONLOAD = "proDataForm.OnLoad"; 
    public String OnLoad ;

    public static String ONASSOCIATIONSCHEMALOAD = "proDataForm.OnAssociationSchemaLoad"; 
    public String OnAssociationSchemaLoad ;

    public static String ONSAVE = "proDataForm.OnSave"; 
    public String OnSave ;

    public static String CONTENT = "proDataForm.Content"; 
    public String Content ;

    public static String NOTE = "proDataForm.Note"; 
    public String Note ;


}
