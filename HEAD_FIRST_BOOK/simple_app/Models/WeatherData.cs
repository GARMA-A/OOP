namespace simple_app;

public class WeatherData : Subject
{
    private List<Observer> observers;
    private float temperature;
    private float humidity;
    private float pressure;
    public WeatherData()
    {
        observers = new List<Observer>();
    }

    public void registerObserver(Observer o)
    {
        observers.Add(o);
    }
    public void removeObserver(Observer o)
    {
        int i = observers.IndexOf(o);
        if (i >= 0)
            observers.Remove(o);
    }
    public void notifyObservers()
    {
        foreach (Observer observer in observers)
        {
            observer.update(temperature, humidity, pressure);
        }
    }

    public void mesurementsChanged()
    {
        notifyObservers();
    }
    public void setMeasurements(float temperature, float humidity, float pressure)
    {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        mesurementsChanged();
    }



}
