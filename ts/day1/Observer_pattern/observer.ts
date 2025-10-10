interface Observer {
	update(data: any): void;
}

interface Subject {
	subscribe(observer: Observer): void;
	unsubscribe(observer: Observer): void;
	notify(data: any): void;
}


class Concretesub implements Subject {
	private observers: Observer[] = [];

	subscribe(observer: Observer): void {
		this.observers.push(observer);
	}

	unsubscribe(observer: Observer): void {
		this.observers = this.observers.filter(obs => obs !== observer);
	}
	notify(data: string): void {
		this.observers.forEach(observer => observer.update(data));
	}
}


class ConcreteObserver implements Observer {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}
	update(data: any): void {
		console.log(`${this.name} received data: ${data}`);
	}
}



const sub = new Concretesub();
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');

sub.subscribe(observer1);
sub.subscribe(observer2);

sub.notify('Initial Notification');



