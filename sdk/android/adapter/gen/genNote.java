package ardvro.adapter.gen;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class genNote implements Serializable
{
    public static String GENNOTE = "genNote"; 


    public genNote() { }

    public static String ID = "genNote.Id"; 
    public int Id ;

    public static String STATUS = "genNote.Status"; 
    public byte Status ;

    public static String UPDATED = "genNote.Updated"; 
    public Date Updated ;

    public static String UPDATER = "genNote.Updater"; 
    public String Updater ;

    public static String NAME = "genNote.Name"; 
    public String Name ;

    public static String CONTENT = "genNote.Content"; 
    public String Content ;


}
