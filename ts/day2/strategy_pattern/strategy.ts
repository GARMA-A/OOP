interface FlyBehavior {
	fly(): void;
}

interface QuackBehavior {
	quack(): void;
}

class FlyWithWings implements FlyBehavior {
	fly(): void {
		console.log("I'm flying with wings!");
	}
}

class FlyNoWay implements FlyBehavior {
	fly(): void {
		console.log("I can't fly.");
	}
}

class Quack implements QuackBehavior {
	quack(): void {
		console.log("Quack!");
	}
}

class Squeak implements QuackBehavior {
	quack(): void {
		console.log("Squeak!");
	}
}

abstract class Duck {
	constructor(public flyBehavior: FlyBehavior, public quackBehavior: QuackBehavior) {
		this.flyBehavior = flyBehavior;
		this.quackBehavior = quackBehavior;
	}
	abstract display(): void;
	performFly(): void {
		this.flyBehavior.fly();
	}
	performQuack(): void {
		this.quackBehavior.quack();
	}
	setFlyBehavior(fb: FlyBehavior): void {
		this.flyBehavior = fb;
	}
	setQuackBehavior(qb: QuackBehavior): void {
		this.quackBehavior = qb;
	}

}


class MallardDuck extends Duck {
	constructor() {
		super(new FlyWithWings(), new Quack());
	}
	display(): void {
		console.log("I'm a real Mallard duck");
	}
}

class RubberDuck extends Duck {
	constructor() {
		super(new FlyNoWay(), new Squeak());
	}
	display(): void {
		console.log("I'm a rubber duck");
	}
}



const md = new MallardDuck();
md.display();
md.performFly();
md.performQuack();

const rd = new RubberDuck();
rd.display();
rd.performFly();
rd.performQuack();

