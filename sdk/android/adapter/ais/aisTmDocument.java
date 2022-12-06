package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisTmDocument implements Serializable
{
    public static String AISTMDOCUMENT = "aisTmDocument"; 


    public aisTmDocument() { }

    public static String ID = "aisTmDocument.Id"; 
    public int Id ;

    public static String STATUS = "aisTmDocument.Status"; 
    public byte Status ;

    public static String UPDATED = "aisTmDocument.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisTmDocument.Updater"; 
    public String Updater ;

    public static String AISTMID = "aisTmDocument.aisTmId"; 
    public int aisTmId ;
    public static String AISTM = "aisTm"; 
    public aisTm aisTm ;

    public static String TITLE = "aisTmDocument.Title"; 
    public String Title ;

    public static String TEXTCONTENT = "aisTmDocument.TextContent"; 
    public String TextContent ;

    public static String SOURCE = "aisTmDocument.Source"; 
    public String Source ;

    public static String SUMMARY = "aisTmDocument.Summary"; 
    public String Summary ;

    public static String NOTE = "aisTmDocument.Note"; 
    public String Note ;


    public static String AISTMSENTENCES = "aisTmSentences"; 
    public ArrayList<aisTmSentence> aisTmSentences ;

    public static String AISTMTOPICDOCUMENTS = "aisTmTopicDocuments"; 
    public ArrayList<aisTmTopicDocument> aisTmTopicDocuments ;

}
