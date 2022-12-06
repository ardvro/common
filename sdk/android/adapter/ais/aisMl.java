package ardvro.adapter.ais;

import java.util.Date;
import java.util.ArrayList;
import java.io.Serializable;

public class aisMl implements Serializable
{
    public static String AISML = "aisMl"; 


    public aisMl() { }

    public static String ID = "aisMl.Id"; 
    public int Id ;

    public static String STATUS = "aisMl.Status"; 
    public byte Status ;

    public static String UPDATED = "aisMl.Updated"; 
    public Date Updated ;

    public static String UPDATER = "aisMl.Updater"; 
    public String Updater ;

    public static String NAME = "aisMl.Name"; 
    public String Name ;

    public static String TASKTYPE = "aisMl.TaskType"; 
    public String TaskType ;

    public static String DATATYPE = "aisMl.DataType"; 
    public String DataType ;

    public static String NEURALNETWORKTYPE = "aisMl.NeuralNetworkType"; 
    public String NeuralNetworkType ;

    public static String ACTIVATIONTYPE = "aisMl.ActivationType"; 
    public String ActivationType ;

    public static String INPUTCOUNT = "aisMl.InputCount"; 
    public int InputCount ;

    public static String HIDDENCOUNT = "aisMl.HiddenCount"; 
    public int HiddenCount ;

    public static String OUTPUTCOUNT = "aisMl.OutputCount"; 
    public int OutputCount ;

    public static String LEARNINGRATE = "aisMl.LearningRate"; 
    public float LearningRate ;

    public static String LEARNINGRADIUS = "aisMl.LearningRadius"; 
    public float LearningRadius ;

    public static String ERRORTARGET = "aisMl.ErrorTarget"; 
    public float ErrorTarget ;

    public static String EPOCH = "aisMl.Epoch"; 
    public int Epoch ;

    public static String LAYERSNEURONS = "aisMl.LayersNeurons"; 
    public String LayersNeurons ;

    public static String WEIGHTS = "aisMl.Weights"; 
    public String Weights ;

    public static String BIASES = "aisMl.Biases"; 
    public String Biases ;

    public static String ERROR = "aisMl.Error"; 
    public float Error ;


    public static String AISMLDATASETS = "aisMlDatasets"; 
    public ArrayList<aisMlDataset> aisMlDatasets ;

    public static String AISMLLOGS = "aisMlLogs"; 
    public ArrayList<aisMlLog> aisMlLogs ;

}
