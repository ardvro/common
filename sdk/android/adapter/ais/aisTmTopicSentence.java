package ardvro.adapter.ais;

import java.io.Serializable;
import java.util.Date;

public class aisTmTopicSentence implements Serializable
{
    public static String AISTMTOPICSENTENCE = "aisTmTopicSentence"; 


    public aisTmTopicSentence() { }

    public static String ID = "aisTmTopicSentence.Id"; 
    public int Id ;

    public static String STATUS = "aisTmTopicSentence.Status"; 
    public byte Status ;

    public static String UPDATED = "aisTmTopicSentence.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisTmTopicSentence.Updater"; 
    public String Updater ;

    public static String AISTMTOPICID = "aisTmTopicSentence.aisTmTopicId"; 
    public int aisTmTopicId ;
    public static String AISTMTOPIC = "aisTmTopic"; 
    public aisTmTopic aisTmTopic ;

    public static String AISTMSENTENCEID = "aisTmTopicSentence.aisTmSentenceId"; 
    public int aisTmSentenceId ;
    public static String AISTMSENTENCE = "aisTmSentence"; 
    public aisTmSentence aisTmSentence ;

    public static String SENTENCETYPE = "aisTmTopicSentence.SentenceType"; 
    public String SentenceType ;

    public static String NAME = "aisTmTopicSentence.Name"; 
    public String Name ;


}
