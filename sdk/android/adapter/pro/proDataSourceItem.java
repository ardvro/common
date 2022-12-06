package ardvro.adapter.pro;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class proDataSourceItem implements Serializable
{
    public static String PRODATASOURCEITEM = "proDataSourceItem"; 


    public proDataSourceItem() { }

    public static String ID = "proDataSourceItem.Id"; 
    public int Id ;

    public static String STATUS = "proDataSourceItem.Status"; 
    public byte Status ;

    public static String UPDATED = "proDataSourceItem.Updated"; 
    public Date Updated ;

    public static String UPDATER = "proDataSourceItem.Updater"; 
    public String Updater ;

    public static String SSOWORKGROUPID = "proDataSourceItem.ssoWorkgroupId"; 
    public int ssoWorkgroupId ;

    public static String PRODATASOURCEID = "proDataSourceItem.proDataSourceId"; 
    public int proDataSourceId ;
    public static String PRODATASOURCE = "proDataSource"; 
    public proDataSource proDataSource ;

    public static String NAME = "proDataSourceItem.Name"; 
    public String Name ;

    public static String INPUTTYPE = "proDataSourceItem.InputType"; 
    public String InputType ;

    public static String STATUSTYPE = "proDataSourceItem.StatusType"; 
    public String StatusType ;

    public static String REQUIRED = "proDataSourceItem.Required"; 
    public boolean Required ;

    public static String KEYTYPE = "proDataSourceItem.KeyType"; 
    public String KeyType ;

    public static String MINIMUMVALUE = "proDataSourceItem.MinimumValue"; 
    public String MinimumValue ;

    public static String MAXIMUMVALUE = "proDataSourceItem.MaximumValue"; 
    public String MaximumValue ;

    public static String DECIMALPOINT = "proDataSourceItem.DecimalPoint"; 
    public byte DecimalPoint ;

    public static String DEFAULTVALUE = "proDataSourceItem.DefaultValue"; 
    public String DefaultValue ;

    public static String LABEL = "proDataSourceItem.Label"; 
    public String Label ;

    public static String ORDINAL = "proDataSourceItem.Ordinal"; 
    public byte Ordinal ;

    public static String PRODATASOURCEITEMID = "proDataSourceItem.proDataSourceItemId"; 
    public int proDataSourceItemId ;
    public static String PRODATASOURCEITEM1 = "proDataSourceItem1"; 
    public proDataSourceItem proDataSourceItem1 ;

    public static String PRODATASOURCEITEMIDNAME = "proDataSourceItem.proDataSourceItemIdName"; 
    public int proDataSourceItemIdName ;
    public static String PRODATASOURCEITEM2 = "proDataSourceItem2";
    public proDataSourceItem proDataSourceItem2 ;

    public static String NOTE = "proDataSourceItem.Note"; 
    public String Note ;


    public static String PRODATASOURCEITEMS = "proDataSourceItems"; 
    public ArrayList<proDataSourceItem> proDataSourceItems ;

    public static String PRODATASOURCEITEMS1 = "proDataSourceItems1";
    public ArrayList<proDataSourceItem> proDataSourceItems1 ;

}
