package ardvro.adapter.cms;

import java.io.Serializable;
import java.util.Date;

public class cmsContentVote implements Serializable
{
    public static String CMSCONTENTVOTE = "cmsContentVote"; 


    public cmsContentVote() { }

    public static String ID = "cmsContentVote.Id"; 
    public int Id ;

    public static String STATUS = "cmsContentVote.Status"; 
    public byte Status ;

    public static String UPDATED = "cmsContentVote.Updated"; 
    public Date Updated ;

    public static String UPDATER = "cmsContentVote.Updater"; 
    public String Updater ;

    public static String CMSCONTENTID = "cmsContentVote.cmsContentId"; 
    public int cmsContentId ;
    public static String CMSCONTENT = "cmsContent"; 
    public cmsContent cmsContent ;

    public static String PFEPROFILEID = "cmsContentVote.pfeProfileId"; 
    public int pfeProfileId ;

    public static String VOTETYPE = "cmsContentVote.VoteType"; 
    public String VoteType ;

    public static String VALUE = "cmsContentVote.Value"; 
    public float Value ;


}
