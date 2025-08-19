using OOP.Encapsulation;

class Program
{
    static void Main(string[] args)
    {
        Vehicle vehicle = new Vehicle("Toyota", 2020, "black");
        vehicle.numberOfWheels = 4;
        Console.WriteLine($"Vehicle Make: {vehicle.Model}, Model: {vehicle.Mileage}, Year: {vehicle.Year}, Wheels: {vehicle.numberOfWheels}");

    }

}
