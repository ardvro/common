namespace ardvro.sdk.net.component.kenviro;

public class GenerateExpertSystemData
{
    public string Name { get; set; }
    public string InferenceType { get; set; }
    public string InformationExtractionType { get; set; }
    public bool AutomatedFromFiles { get; set; }
    public bool AutomatedFromGoogle { get; set; }
    public bool AutomatedFromUrls { get; set; }
    public bool FromTextContent { get; set; }
    public bool FromExistingCriteria { get; set; }
    public bool ImportFromTextMined { get; set; }
    public bool ManualInput { get; set; }

    public string GoogleKeywords { get; set; }
    public string GoogleSearchKey { get; set; }
    public string GoogleCxKey { get; set; }
    public string Urls { get; set; }

    public int aisTmId { get; set; }
    public int aisCriteriaId { get; set; }

}
