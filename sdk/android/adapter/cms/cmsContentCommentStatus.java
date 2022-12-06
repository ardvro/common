package ardvro.adapter.cms;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class cmsContentCommentStatus implements Serializable
{
    public static String CMSCONTENTCOMMENTSTATUS = "cmsContentCommentStatus"; 


    public cmsContentCommentStatus() { }

    public static String ID = "cmsContentCommentStatus.Id"; 
    public int Id ;

    public static String STATUS = "cmsContentCommentStatus.Status"; 
    public byte Status ;

    public static String UPDATED = "cmsContentCommentStatus.Updated"; 
    public Date Updated ;

    public static String UPDATER = "cmsContentCommentStatus.Updater"; 
    public String Updater ;

    public static String CMSCONTENTCOMMENTID = "cmsContentCommentStatus.cmsContentCommentId"; 
    public int cmsContentCommentId ;
    public static String CMSCONTENTCOMMENT = "cmsContentComment"; 
    public cmsContentComment cmsContentComment ;

    public static String PFEPROFILEID = "cmsContentCommentStatus.pfeProfileId"; 
    public int pfeProfileId ;


}
