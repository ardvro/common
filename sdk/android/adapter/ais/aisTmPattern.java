package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisTmPattern implements Serializable
{
    public static String AISTMPATTERN = "aisTmPattern"; 


    public aisTmPattern() { }

    public static String ID = "aisTmPattern.Id"; 
    public int Id ;

    public static String STATUS = "aisTmPattern.Status"; 
    public byte Status ;

    public static String UPDATED = "aisTmPattern.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisTmPattern.Updater"; 
    public String Updater ;

    public static String PATTERNTYPE = "aisTmPattern.PatternType"; 
    public String PatternType ;

    public static String REGEX = "aisTmPattern.Regex"; 
    public String Regex ;


}
