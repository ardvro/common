package ardvro.adapter.pfe;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class pfeProfile implements Serializable
{
    public static String PFEPROFILE = "pfeProfile"; 


    public pfeProfile() { }

    public static String ID = "pfeProfile.Id"; 
    public int Id ;

    public static String STATUS = "pfeProfile.Status"; 
    public byte Status ;

    public static String UPDATED = "pfeProfile.Updated"; 
    public Date Updated ;

    public static String UPDATER = "pfeProfile.Updater"; 
    public String Updater ;

    public static String NAME = "pfeProfile.Name"; 
    public String Name ;

    public static String AVATAR = "pfeProfile.Avatar"; 
    public String Avatar ;

    public static String DETAIL = "pfeProfile.Detail"; 
    public String Detail ;


    public static String PFEPROFILECONTACTS = "pfeProfileContacts"; 
    public ArrayList<pfeProfileContact> pfeProfileContacts ;

    public static String PFEPROFILECONTACTS1 = "pfeProfileContacts1";
    public ArrayList<pfeProfileContact> pfeProfileContacts1 ;

    public static String PFEPROFILEPROVIDERS = "pfeProfileProviders"; 
    public ArrayList<pfeProfileProvider> pfeProfileProviders ;

    public static String PFEPROFILEUSERS = "pfeProfileUsers"; 
    public ArrayList<pfeProfileUser> pfeProfileUsers ;

}
