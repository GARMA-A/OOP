abstract class Beverage {
	protected _description: string = "Unknown"

	get description(): string {
		return this._description
	}

	public abstract cost(): number;
}

abstract class Decerator extends Beverage {
	public abstract get description(): string;
}

class Espresso extends Beverage {
	constructor() {
		super()
		this._description = "Espresso";
	}
	public cost(): number {
		return 1.99;
	}
}

class HouseBlend extends Beverage {
	constructor() {
		super()
		this._description = "House Blend Coffee";
	}
	public cost(): number {
		return 0.89;

	}
}

class Mocha extends Decerator {
	constructor(public beverage: Beverage) { super() }

	public get description(): string {
		return this.beverage.description + ", Mocha";
	}
	public cost() {
		return .20 + this.beverage.cost();
	}
}

class ExtraMilk extends Decerator {
	constructor(public beverage: Beverage) { super() }
	public get description() {
		return this.beverage.description + ",Extra Milk"
	}
	public cost(): number {
		return this.beverage.cost() + 0.30
	}

}


const beverage = new Espresso();

console.log(beverage.description
	+ " $" + beverage.cost());


const moca = new Mocha(beverage);
console.log(moca.description + " $" + moca.cost());

const beverage2 = new HouseBlend();
const mocha = new Mocha(beverage2)

console.log(mocha.description + " $" + mocha.cost());

const extraMilk = new ExtraMilk(beverage2)

console.log(extraMilk.description + " $" + extraMilk.cost());







