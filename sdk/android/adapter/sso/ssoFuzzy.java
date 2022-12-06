package ardvro.adapter.sso;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class ssoFuzzy implements Serializable
{
    public static String SSOFUZZY = "ssoFuzzy"; 


    public ssoFuzzy() { }

    public static String ID = "ssoFuzzy.Id"; 
    public int Id ;

    public static String STATUS = "ssoFuzzy.Status"; 
    public byte Status ;

    public static String UPDATED = "ssoFuzzy.Updated"; 
    public Date Updated ;

    public static String UPDATER = "ssoFuzzy.Updater"; 
    public String Updater ;

    public static String SSOFUZZYID = "ssoFuzzy.ssoFuzzyId"; 
    public int ssoFuzzyId ;
    public static String SSOFUZZY1 = "ssoFuzzy1"; 
    public ssoFuzzy ssoFuzzy1 ;

    public static String NAME = "ssoFuzzy.Name"; 
    public String Name ;

    public static String INFERENCETYPE = "ssoFuzzy.InferenceType"; 
    public String InferenceType ;

    public static String MEMBERSHIPTYPE = "ssoFuzzy.MembershipType"; 
    public String MembershipType ;

    public static String DEFUZZYFICATIONTYPE = "ssoFuzzy.DefuzzyficationType"; 
    public String DefuzzyficationType ;

    public static String CRITERIATYPE = "ssoFuzzy.CriteriaType"; 
    public String CriteriaType ;

    public static String WEIGHT = "ssoFuzzy.Weight"; 
    public float Weight ;

    public static String SORT = "ssoFuzzy.Sort"; 
    public int Sort ;


    public static String SSOFUZZIES = "ssoFuzzies"; 
    public ArrayList<ssoFuzzy> ssoFuzzies ;

}
