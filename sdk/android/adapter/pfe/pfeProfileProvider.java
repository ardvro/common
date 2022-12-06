package ardvro.adapter.pfe;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class pfeProfileProvider implements Serializable
{
    public static String PFEPROFILEPROVIDER = "pfeProfileProvider"; 


    public pfeProfileProvider() { }

    public static String ID = "pfeProfileProvider.Id"; 
    public int Id ;

    public static String STATUS = "pfeProfileProvider.Status"; 
    public byte Status ;

    public static String UPDATED = "pfeProfileProvider.Updated"; 
    public Date Updated ;

    public static String UPDATER = "pfeProfileProvider.Updater"; 
    public String Updater ;

    public static String PFEPROFILEID = "pfeProfileProvider.pfeProfileId"; 
    public int pfeProfileId ;
    public static String PFEPROFILE = "pfeProfile"; 
    public pfeProfile pfeProfile ;

    public static String PROVIDERTYPE = "pfeProfileProvider.ProviderType"; 
    public String ProviderType ;

    public static String USERNAME = "pfeProfileProvider.Username"; 
    public String Username ;

    public static String CREDENTIALS = "pfeProfileProvider.Credentials"; 
    public String Credentials ;


}
