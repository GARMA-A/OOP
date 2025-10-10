abstract class Beverage {
	protected _description: string = "Unknown Beverage";
	get description(): string {
		return this._description;
	}
	abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
	abstract get description(): string;
}

class Espresso extends Beverage {
	constructor() {
		super();
		this._description = "Espresso";
	}
	cost(): number {
		return 1.99;
	}
}

class HouseBlend extends Beverage {
	constructor() {
		super();
		this._description = "House Blend Coffee";
	}
	cost(): number {
		return 0.89;
	}
}

class Mocha extends CondimentDecorator {
	constructor(private beverage: Beverage) {
		super();
	}
	get description(): string {
		return this.beverage.description + ", Mocha";
	}
	cost(): number {
		return this.beverage.cost() + 0.20;
	}
}

class Whip extends CondimentDecorator {
	constructor(private beverage: Beverage) {
		super();
	}
	get description(): string {
		return this.beverage.description + ", Whip";
	}
	cost(): number {
		return this.beverage.cost() + 0.10;
	}
}

const es = new Espresso();
console.log(es.description + " $" + es.cost().toFixed(2));

const es2 = new Mocha(es);

console.log(es2.description + " $" + es2.cost().toFixed(2));

const es3 = new Whip(es2);

console.log(es3.description + " $" + es3.cost().toFixed(2));

const hb = new HouseBlend();
console.log(hb.description + " $" + hb.cost().toFixed(2));

const hb2 = new Mocha(hb);
console.log(hb2.description + " $" + hb2.cost().toFixed(2));


