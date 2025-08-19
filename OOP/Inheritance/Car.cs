
public class Car
{
    public string Model { get; set; }
    public int Year { get; set; }
    public double Mileage { get; private set; }

    public Car(string model, int year)
    {
        Model = model;
        Year = year;
        Mileage = 0.0;
    }

    public virtual void Drive(double distance)
    {
        Console.WriteLine($"the Car class is driving {distance} miles.");
    }

    public override string ToString()
    {
        return $"{Year} {Model} with {Mileage} miles";
    }


}
