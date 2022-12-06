package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoSetting implements Serializable
{
    public static String SSOSETTING = "ssoSetting"; 


    public ssoSetting() { }

    public static String ID = "ssoSetting.Id"; 
    public int Id ;

    public static String STATUS = "ssoSetting.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoSetting.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoSetting.Updater"; 
    public String Updater ;

    public static String TYPE = "ssoSetting.Type"; 
    public String Type ;

    public static String NAME = "ssoSetting.Name"; 
    public String Name ;

    public static String VALUE = "ssoSetting.Value"; 
    public String Value ;


}
