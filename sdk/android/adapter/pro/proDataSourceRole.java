package ardvro.adapter.pro;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class proDataSourceRole implements Serializable
{
    public static String PRODATASOURCEROLE = "proDataSourceRole"; 


    public proDataSourceRole() { }

    public static String ID = "proDataSourceRole.Id"; 
    public int Id ;

    public static String STATUS = "proDataSourceRole.Status"; 
    public byte Status ;

    public static String UPDATED = "proDataSourceRole.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proDataSourceRole.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proDataSourceRole.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String SSOROLEID = "proDataSourceRole.ssoRoleId"; 
    public int ssoRoleId ;

    public static String PRODATASOURCEID = "proDataSourceRole.proDataSourceId"; 
    public int proDataSourceId ;
    public static String PRODATASOURCE = "proDataSource"; 
    public proDataSource proDataSource ;

    public static String ALLOWCREATE = "proDataSourceRole.AllowCreate"; 
    public String AllowCreate ;

    public static String ALLOWREAD = "proDataSourceRole.AllowRead"; 
    public String AllowRead ;

    public static String ALLOWUPDATE = "proDataSourceRole.AllowUpdate"; 
    public String AllowUpdate ;

    public static String ALLOWDELETE = "proDataSourceRole.AllowDelete"; 
    public String AllowDelete ;


}
