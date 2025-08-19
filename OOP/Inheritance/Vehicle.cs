
public class Vehicle : Car
{
    private int numberOfWheels;
    private string make;

    public Vehicle(string model, int year, string make) : base(model, year)
    {
        this.make = make;
        numberOfWheels = 4;

    }
    public override void Drive(double distance)
    {
        Console.WriteLine($"The Vehicle class is driving {distance} miles.");

    }


}
