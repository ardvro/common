namespace ardvro.sdk.net.component.kenviro;

public class Criteria
{
    public int Id { get; set; } = 0;

    public string Name { get; set; } = "";

    public double Value { get; set; } = 0;

    public double Weight { get; set; } = 0;

    public double Output { get; set; } = 0;

    public int Sort { get; set; } = 0;

    public  Criteria Matter { get; set; }

    public List<Criteria> Criterias { get; set; } = new List<Criteria>();

}
