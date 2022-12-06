package ardvro.adapter.wfe;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class wfeItem implements Serializable
{
    public static String WFEITEM = "wfeItem"; 


    public wfeItem() { }

    public static String ID = "wfeItem.Id"; 
    public int Id ;

    public static String STATUS = "wfeItem.Status"; 
    public byte Status ;

    public static String UPDATED = "wfeItem.Updated"; 
    public Date Updated ;

    public static String UPDATER = "wfeItem.Updater"; 
    public String Updater ;

    public static String NAME = "wfeItem.Name"; 
    public String Name ;

    public static String WORKFLOWITEMTYPE = "wfeItem.WorkflowItemType"; 
    public String WorkflowItemType ;

    public static String FULLYQUALIFIEDASSEMBLYNAME = "wfeItem.FullyQualifiedAssemblyName"; 
    public String FullyQualifiedAssemblyName ;

    public static String METHODNAME = "wfeItem.MethodName"; 
    public String MethodName ;

    public static String ASSEMBLYFILE = "wfeItem.AssemblyFile"; 
    public String AssemblyFile ;

    public static String CONSTRUCTORS = "wfeItem.Constructors"; 
    public String Constructors ;

    public static String PROPERTIES = "wfeItem.Properties"; 
    public String Properties ;

    public static String ICON = "wfeItem.Icon"; 
    public String Icon ;

    public static String COLOR = "wfeItem.Color"; 
    public String Color ;

    public static String NOTE = "wfeItem.Note"; 
    public String Note ;


}
