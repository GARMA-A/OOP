abstract class Beverage {
	protected description: string = "Unknown"

	get Description(): string {
		return this.description
	}

	public abstract cost(): number;
}

abstract class Decerator extends Beverage {
	public abstract get Description(): string;
}

class Espresso extends Beverage {
	constructor() {
		super()
		this.description = "Espresso";
	}
	public cost(): number {
		return 1.99;
	}
}

class HouseBlend extends Beverage {
	constructor() {
		super()
		this.description = "House Blend Coffee";
	}
	public cost(): number {
		return 0.89;

	}
}

class Mocha extends Decerator {
	constructor(public beverage: Beverage) { super() }

	public get Description(): string {
		return this.beverage.Description + ", Mocha";
	}
	public cost() {
		return .20 + this.beverage.cost();
	}
}

class ExtraMilk extends Decerator {
	constructor(public beverage: Beverage) { super() }
	public get Description() {
		return this.beverage.Description + ",Extra Milk"
	}
	public cost(): number {
		return this.beverage.cost() + 0.30
	}

}


const beverage = new Espresso();

console.log(beverage.Description
	+ " $" + beverage.cost());


const moca = new Mocha(beverage);
console.log(moca.Description + " $" + moca.cost());

const beverage2 = new HouseBlend();
const mocha = new Mocha(beverage2)

console.log(mocha.Description + " $" + mocha.cost());

const extraMilk = new ExtraMilk(beverage2)

console.log(extraMilk.Description + " $" + extraMilk.cost());







