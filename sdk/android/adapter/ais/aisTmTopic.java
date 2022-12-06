package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisTmTopic implements Serializable
{
    public static String AISTMTOPIC = "aisTmTopic"; 


    public aisTmTopic() { }

    public static String ID = "aisTmTopic.Id"; 
    public int Id ;

    public static String STATUS = "aisTmTopic.Status"; 
    public byte Status ;

    public static String UPDATED = "aisTmTopic.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisTmTopic.Updater"; 
    public String Updater ;

    public static String AISTMID = "aisTmTopic.aisTmId"; 
    public int aisTmId ;
    public static String AISTM = "aisTm"; 
    public aisTm aisTm ;

    public static String TAGTYPE = "aisTmTopic.TagType"; 
    public String TagType ;

    public static String NAME = "aisTmTopic.Name"; 
    public String Name ;

    public static String DF = "aisTmTopic.Df"; 
    public float Df ;

    public static String IDF = "aisTmTopic.Idf"; 
    public float Idf ;


    public static String AISTMTOPICDOCUMENTS = "aisTmTopicDocuments"; 
    public ArrayList<aisTmTopicDocument> aisTmTopicDocuments ;

    public static String AISTMTOPICSENTENCES = "aisTmTopicSentences"; 
    public ArrayList<aisTmTopicSentence> aisTmTopicSentences ;

}
