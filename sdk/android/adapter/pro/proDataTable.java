package ardvro.adapter.pro;

import java.io.Serializable;
import java.util.Date;

public class proDataTable implements Serializable
{
    public static String PRODATATABLE = "proDataTable"; 


    public proDataTable() { }

    public static String ID = "proDataTable.Id"; 
    public int Id ;

    public static String STATUS = "proDataTable.Status"; 
    public byte Status ;

    public static String UPDATED = "proDataTable.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proDataTable.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proDataTable.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proDataTable.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String PRODATASOURCEID = "proDataTable.proDataSourceId"; 
    public int proDataSourceId ;
    public static String PRODATASOURCE = "proDataSource"; 
    public proDataSource proDataSource ;

    public static String NAME = "proDataTable.Name"; 
    public String Name ;

    public static String FRAMETYPE = "proDataTable.FrameType"; 
    public String FrameType ;

    public static String STATUSTYPE = "proDataTable.StatusType"; 
    public String StatusType ;

    public static String PAGESIZE = "proDataTable.PageSize"; 
    public int PageSize ;

    public static String ICON = "proDataTable.Icon"; 
    public String Icon ;

    public static String LABEL = "proDataTable.Label"; 
    public String Label ;

    public static String SHOWLABEL = "proDataTable.ShowLabel"; 
    public boolean ShowLabel ;

    public static String ENABLESEARCH = "proDataTable.EnableSearch"; 
    public boolean EnableSearch ;

    public static String QUERYMODE = "proDataTable.QueryMode"; 
    public String QueryMode ;

    public static String QUERYFUNCTION = "proDataTable.QueryFunction"; 
    public String QueryFunction ;

    public static String ONSCHEMALOAD = "proDataTable.OnSchemaLoad"; 
    public String OnSchemaLoad ;

    public static String ONLOAD = "proDataTable.OnLoad"; 
    public String OnLoad ;

    public static String DEFAULTSORT = "proDataTable.DefaultSort"; 
    public String DefaultSort ;

    public static String PROJECTITEMTYPE = "proDataTable.ProjectItemType"; 
    public String ProjectItemType ;

    public static String PROJECTITEMID = "proDataTable.ProjectItemId"; 
    public int ProjectItemId ;

    public static String CONTENT = "proDataTable.Content"; 
    public String Content ;

    public static String NOTE = "proDataTable.Note"; 
    public String Note ;


}
