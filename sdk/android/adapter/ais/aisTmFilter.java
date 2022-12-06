package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisTmFilter implements Serializable
{
    public static String AISTMFILTER = "aisTmFilter"; 


    public aisTmFilter() { }

    public static String ID = "aisTmFilter.Id"; 
    public int Id ;

    public static String STATUS = "aisTmFilter.Status"; 
    public byte Status ;

    public static String UPDATED = "aisTmFilter.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisTmFilter.Updater"; 
    public String Updater ;

    public static String WORD = "aisTmFilter.Word"; 
    public String Word ;

    public static String FILTERTYPE = "aisTmFilter.FilterType"; 
    public String FilterType ;


}
