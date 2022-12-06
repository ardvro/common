package ardvro.adapter.pro;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class proDataSource implements Serializable
{
    public static String PRODATASOURCE = "proDataSource"; 


    public proDataSource() { }

    public static String ID = "proDataSource.Id"; 
    public int Id ;

    public static String STATUS = "proDataSource.Status"; 
    public byte Status ;

    public static String UPDATED = "proDataSource.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proDataSource.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proDataSource.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PROPROJECTID = "proDataSource.proProjectId"; 
    public int proProjectId ;
    public static String PROPROJECT = "proProject"; 
    public proProject proProject ;

    public static String NAME = "proDataSource.Name"; 
    public String Name ;

    public static String LABEL = "proDataSource.Label"; 
    public String Label ;

    public static String DBTYPE = "proDataSource.DbType"; 
    public String DbType ;

    public static String OBJECTTYPE = "proDataSource.ObjectType"; 
    public String ObjectType ;

    public static String SECURITYCOLUMN = "proDataSource.SecurityColumn"; 
    public String SecurityColumn ;

    public static String CONTENT = "proDataSource.Content"; 
    public String Content ;

    public static String NOTE = "proDataSource.Note"; 
    public String Note ;


    public static String PRODATAFORMS = "proDataForms"; 
    public ArrayList<proDataForm> proDataForms ;

    public static String PRODATASOURCEITEMS = "proDataSourceItems"; 
    public ArrayList<proDataSourceItem> proDataSourceItems ;

    public static String PRODATASOURCEROLES = "proDataSourceRoles"; 
    public ArrayList<proDataSourceRole> proDataSourceRoles ;

    public static String PRODATATABLES = "proDataTables"; 
    public ArrayList<proDataTable> proDataTables ;

}
