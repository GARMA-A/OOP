abstract class pizza {

	protected _name!: string;
	get name(): string {
		return this._name;
	}

	prepare(): void {
		console.log(`Preparing ${this._name}`);
	}

	bake(): void {
		console.log(`Baking ${this._name}`);
	}

	cut(): void {
		console.log(`Cutting ${this._name}`);
	}

	box(): void {
		console.log(`Boxing ${this._name}`);
	}

}


class CheesePizza extends Pizza {
	constructor() {
		super();
		this._name = "Cheese Pizza 🧀";
	}
}
class PepperoniPizza extends Pizza {
	constructor() {
		super();
		this._name = "Pepperoni Pizza 🍕";
	}
}


class SimplePizzaFactory {
	createPizza(type: string): Pizza | null {
		let pizza: Pizza | null = null;

		if (type === "cheese") {
			pizza = new CheesePizza();
		} else if (type === "pepperoni") {
			pizza = new PepperoniPizza();
		}

		return pizza;
	}
}

class PizzaStore {
	constructor(private factory: SimplePizzaFactory) { }

	orderPizza(type: string): Pizza | null {
		const pizza = this.factory.createPizza(type);
		if (!pizza) {
			console.log(`❌ Sorry, we don't have ${type} pizza.`);
			return null;
		}

		pizza.prepare();
		pizza.bake();
		pizza.cut();
		pizza.box();

		console.log(`✅ ${pizza.name} is ready!\n`);
		return pizza;
	}
}



const store = new PizzaStore(new SimplePizzaFactory());

store.orderPizza("cheese");
store.orderPizza("pepperoni");



