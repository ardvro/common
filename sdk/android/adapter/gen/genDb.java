package ardvro.adapter.gen;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class genDb implements Serializable
{
    public static String GENDB = "genDb"; 


    public genDb() { }

    public static String ID = "genDb.Id"; 
    public int Id ;

    public static String STATUS = "genDb.Status"; 
    public byte Status ;

    public static String UPDATED = "genDb.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genDb.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "genDb.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String NAME = "genDb.Name"; 
    public String Name ;

    public static String SYNCTYPE = "genDb.SyncType"; 
    public String SyncType ;

    public static String TABLESOURCE = "genDb.TableSource"; 
    public String TableSource ;

    public static String TABLESOURCECOLUMNS = "genDb.TableSourceColumns"; 
    public String TableSourceColumns ;

    public static String TABLESOURCEFLAGCOLUMNS = "genDb.TableSourceFlagColumns"; 
    public String TableSourceFlagColumns ;

    public static String TABLESOURCEWHEREPREDICATES = "genDb.TableSourceWherePredicates"; 
    public String TableSourceWherePredicates ;

    public static String TABLESOURCECREDENTIALS = "genDb.TableSourceCredentials"; 
    public String TableSourceCredentials ;

    public static String TABLETARGET = "genDb.TableTarget"; 
    public String TableTarget ;

    public static String TABLETARGETCOLUMNS = "genDb.TableTargetColumns"; 
    public String TableTargetColumns ;

    public static String TABLETARGETCREDENTIALS = "genDb.TableTargetCredentials"; 
    public String TableTargetCredentials ;

    public static String CUSTOMSQLSOURCE = "genDb.CustomSqlSource"; 
    public String CustomSqlSource ;

    public static String CUSTOMSQLTARGET = "genDb.CustomSqlTarget"; 
    public String CustomSqlTarget ;

    public static String NOTE = "genDb.Note"; 
    public String Note ;


}
