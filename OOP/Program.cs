

List<Object> objects = new List<Object>();
objects.Add(new Car("Object1", 10));
objects.Add(new Vehicle("Object2", 20, "Toyota"));

foreach (var obj in objects)
{

    if (obj is Vehicle vehicle)
    {
        vehicle.Drive(200);
    }
    else if (obj is Car car)
    {
        car.Drive(100);
    }
}

foreach (var obj in objects)
{

    if (obj is Car car)
    {
        car.Drive(100);
    }
    else if (obj is Vehicle vehicle)
    {
        vehicle.Drive(200);
    }
}


