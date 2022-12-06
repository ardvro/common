package ardvro.adapter.pfe;

import java.io.Serializable;
import java.util.Date;

public class pfeProfileUser implements Serializable
{
    public static String PFEPROFILEUSER = "pfeProfileUser"; 


    public pfeProfileUser() { }

    public static String ID = "pfeProfileUser.Id"; 
    public int Id ;

    public static String STATUS = "pfeProfileUser.Status"; 
    public byte Status ;

    public static String UPDATED = "pfeProfileUser.Updated"; 
    public Date Updated ;

    public static String UPDATER = "pfeProfileUser.Updater"; 
    public String Updater ;

    public static String PFEPROFILEID = "pfeProfileUser.pfeProfileId"; 
    public int pfeProfileId ;
    public static String PFEPROFILE = "pfeProfile"; 
    public pfeProfile pfeProfile ;

    public static String SSOUSERID = "pfeProfileUser.ssoUserId"; 
    public int ssoUserId ;


}
