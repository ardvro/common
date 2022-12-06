package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisEs implements Serializable
{
    public static String AISES = "aisEs"; 


    public aisEs() { }

    public static String ID = "aisEs.Id"; 
    public int Id ;

    public static String STATUS = "aisEs.Status"; 
    public byte Status ;

    public static String UPDATED = "aisEs.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisEs.Updater"; 
    public String Updater ;

    public static String AISCRITERIAID = "aisEs.aisCriteriaId"; 
    public int aisCriteriaId ;
    public static String AISCRITERIA = "aisCriteria"; 
    public aisCriteria aisCriteria ;

    public static String NAME = "aisEs.Name"; 
    public String Name ;

    public static String INFERENCETYPE = "aisEs.InferenceType"; 
    public String InferenceType ;

    public static String KNOWLEDGEACQUISITIONTYPES = "aisEs.KnowledgeAcquisitionTypes"; 
    public String KnowledgeAcquisitionTypes ;

    public static String NOTE = "aisEs.Note"; 
    public String Note ;


}
