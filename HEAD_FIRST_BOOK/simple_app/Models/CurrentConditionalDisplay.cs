namespace simple_app;

public class CurrentConditionalDisplay
{
    private float temperature;
    private float humidity;
    private Subject weatherData;

    public CurrentConditionalDisplay(Subject weatherData)
    {
        this.weatherData = weatherData;
        weatherData.registerObserver((Observer)this);
    }

    public void update(float temperature, float humidity, float pressure)
    {
        this.temperature = temperature;
        this.humidity = humidity;
        display();
    }

    public void display()
    {
        Console.WriteLine("Current conditions: " + temperature + "F degrees and " + humidity + "% humidity");
    }

}
