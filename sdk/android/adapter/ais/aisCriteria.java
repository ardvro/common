package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisCriteria implements Serializable
{
    public static String AISCRITERIA = "aisCriteria"; 


    public aisCriteria() { }

    public static String ID = "aisCriteria.Id"; 
    public int Id ;

    public static String STATUS = "aisCriteria.Status"; 
    public byte Status ;

    public static String UPDATED = "aisCriteria.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisCriteria.Updater"; 
    public String Updater ;

    public static String AISCRITERIAID = "aisCriteria.aisCriteriaId"; 
    public int aisCriteriaId ;
    public static String AISCRITERIA1 = "aisCriteria1"; 
    public aisCriteria aisCriteria1 ;

    public static String NAME = "aisCriteria.Name"; 
    public String Name ;

    public static String CRITERIATYPE = "aisCriteria.CriteriaType"; 
    public String CriteriaType ;

    public static String WEIGHT = "aisCriteria.Weight"; 
    public float Weight ;

    public static String SORT = "aisCriteria.Sort"; 
    public int Sort ;


    public static String AISCRITERIAS = "aisCriterias"; 
    public ArrayList<aisCriteria> aisCriterias ;

    public static String AISDSSES = "aisDsses"; 
    public ArrayList<aisDss> aisDsses ;

    public static String AISDSSITEMCRITERIAS = "aisDssItemCriterias"; 
    public ArrayList<aisDssItemCriteria> aisDssItemCriterias ;

    public static String AISESES = "aisEses"; 
    public ArrayList<aisEs> aisEses ;

    public static String AISESLOGS = "aisEsLogs"; 
    public ArrayList<aisEsLog> aisEsLogs ;

}
