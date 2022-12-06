package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisEsLog implements Serializable
{
    public static String AISESLOG = "aisEsLog"; 


    public aisEsLog() { }

    public static String ID = "aisEsLog.Id"; 
    public int Id ;

    public static String STATUS = "aisEsLog.Status"; 
    public byte Status ;

    public static String UPDATED = "aisEsLog.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisEsLog.Updater"; 
    public String Updater ;

    public static String AISCRITERIAID = "aisEsLog.aisCriteriaId"; 
    public int aisCriteriaId ;
    public static String AISCRITERIA = "aisCriteria"; 
    public aisCriteria aisCriteria ;

    public static String PFEPROFILEID = "aisEsLog.pfeProfileId"; 
    public int pfeProfileId ;

    public static String QUESTION = "aisEsLog.Question"; 
    public String Question ;

    public static String ANSWER = "aisEsLog.Answer"; 
    public String Answer ;

    public static String VALUE = "aisEsLog.Value"; 
    public float Value ;


}
