package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoObject implements Serializable
{
    public static String SSOOBJECT = "ssoObject"; 


    public ssoObject() { }

    public static String ID = "ssoObject.Id"; 
    public int Id ;

    public static String STATUS = "ssoObject.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoObject.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoObject.Updater"; 
    public String Updater ;

    public static String NAME = "ssoObject.Name"; 
    public String Name ;

    public static String LABEL = "ssoObject.Label"; 
    public String Label ;

    public static String DBTYPE = "ssoObject.DbType"; 
    public String DbType ;

    public static String OBJECTTYPE = "ssoObject.ObjectType"; 
    public String ObjectType ;

    public static String SECURITYCOLUMN = "ssoObject.SecurityColumn"; 
    public String SecurityColumn ;

    public static String SECURITYVALUETYPE = "ssoObject.SecurityValueType"; 
    public String SecurityValueType ;

    public static String NOTE = "ssoObject.Note"; 
    public String Note ;


    public static String SSOOBJECTWORKGROUPS = "ssoObjectWorkgroups"; 
    public ArrayList<ssoObjectWorkgroup> ssoObjectWorkgroups ;

}
