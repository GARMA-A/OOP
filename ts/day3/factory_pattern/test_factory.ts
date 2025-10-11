class Pizza {
	protected _name: string = "pizza";
	get name() {
		return this.name;
	}

	prepare(): void {
		console.log(`prepare the ${this._name}`);
	}

	cook(): void {
		console.log(`cook the ${this._name}`);
	}


}


class PizzWithCheez extends Pizza {
	constructor() {
		super();
		this._name = "Cheez Pizza";
	}

}
class PizzaWithMilk extends Pizza {
	constructor() {
		super();
		this._name = "Milk Pizza";
	}

}

class factory {
	createPizza(type: "milkPizza" | "Pizza" | "ChezPizza"): Pizza {
		let pizza: Pizza | null = null
		if (type == "milkPizza") {
			pizza = new PizzaWithMilk()
		} else if (type == "ChezPizza") {
			pizza = new PizzWithCheez()

		} else {
			throw new Error("type of pizza is unknown")
		}
		return pizza
	}
}

class Store {
	constructor(private factory: factory) { }
	orderPizz(type: "milkPizza" | "Pizza" | "ChezPizza") {
		let pizza = this.factory.createPizza(type)
		pizza.prepare()
		pizza.cook()
	}

}


const store = new Store(new factory())
store.orderPizz("milkPizza")






