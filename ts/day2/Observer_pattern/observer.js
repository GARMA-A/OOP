var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
        this.temperature = 0;
        this.humidity = 0;
        this.pressure = 0;
    }
    WeatherData.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherData.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        if (index >= 0) {
            this.observers.splice(index, 1);
        }
    };
    WeatherData.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    };
    return WeatherData;
}());
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay() {
        this.temperature = 0;
        this.humidity = 0;
    }
    CurrentConditionsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("Current conditions: ".concat(this.temperature, "F degrees and ").concat(this.humidity, "% humidity"));
    };
    return CurrentConditionsDisplay;
}());
var weatherData = new WeatherData();
var currentDisplay = new CurrentConditionsDisplay();
weatherData.registerObserver(currentDisplay);
weatherData.notifyObservers();
