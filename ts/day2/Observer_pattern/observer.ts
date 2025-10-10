
interface Observer {
	update(temperature: number, humidity: number, pressure: number): void;
}

interface Subject {
	registerObserver(o: Observer): void;
	removeObserver(o: Observer): void;
	notifyObservers(): void;
}

class WeatherData implements Subject {
	private observers: Observer[] = [];
	private temperature: number = 0;
	private humidity: number = 0;
	private pressure: number = 0;

	registerObserver(o: Observer): void {
		this.observers.push(o);
	}

	removeObserver(o: Observer): void {
		const index = this.observers.indexOf(o);
		if (index >= 0) {
			this.observers.splice(index, 1);
		}
	}
	notifyObservers(): void {
		for (const observer of this.observers) {
			observer.update(this.temperature, this.humidity, this.pressure);
		}
	}
}


class CurrentConditionsDisplay implements Observer {
	private temperature: number = 0
	private humidity: number = 0


	update(temperature: number, humidity: number, pressure: number): void {
		this.temperature = temperature;
		this.humidity = humidity;
		this.display();
	}

	display(): void {
		console.log(`Current conditions: ${this.temperature}F degrees and ${this.humidity}% humidity`);
	}
}




const weatherData = new WeatherData();

const currentDisplay = new CurrentConditionsDisplay();


weatherData.registerObserver(currentDisplay);

weatherData.notifyObservers();

