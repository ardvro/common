package ardvro.adapter.pfe;

import java.io.Serializable;
import java.util.Date;

public class pfeProfileContact implements Serializable
{
    public static String PFEPROFILECONTACT = "pfeProfileContact"; 


    public pfeProfileContact() { }

    public static String ID = "pfeProfileContact.Id"; 
    public int Id ;

    public static String STATUS = "pfeProfileContact.Status"; 
    public byte Status ;

    public static String UPDATED = "pfeProfileContact.Updated"; 
    public Date Updated ;

    public static String UPDATER = "pfeProfileContact.Updater"; 
    public String Updater ;

    public static String PFEPROFILEID = "pfeProfileContact.pfeProfileId"; 
    public int pfeProfileId ;
    public static String PFEPROFILE = "pfeProfile"; 
    public pfeProfile pfeProfile ;

    public static String PFEPROFILEID2 = "pfeProfileContact.pfeProfileId2"; 
    public int pfeProfileId2 ;
    public static String PFEPROFILE1 = "pfeProfile1";
    public pfeProfile pfeProfile1 ;

    public static String NAME = "pfeProfileContact.Name"; 
    public String Name ;

    public static String AVATAR = "pfeProfileContact.Avatar"; 
    public String Avatar ;

    public static String DETAIL = "pfeProfileContact.Detail"; 
    public String Detail ;


}
