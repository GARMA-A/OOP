interface swimBehavior {
	swim(): void;
}
interface rideACarBehavior {
	rideACar(): void;
}

class ProSwim implements swimBehavior {

	swim(): void {
		console.log("i can swim like a pro")
	}

}
class NoSwim implements swimBehavior {

	swim(): void {
		console.log("i cannot swim at all")
	}
}

class proRider implements rideACarBehavior {

	rideACar(): void {
		console.log("i can ride a car")
	}

}

class cannotRide implements rideACarBehavior {
	rideACar(): void {
		console.log("i cannot ride a car")
	}
}


class Person {
	protected canRideCar: rideACarBehavior;
	protected canSwim: swimBehavior;

	constructor(canRideCar: rideACarBehavior, canSwim: swimBehavior) {
		this.canRideCar = canRideCar;
		this.canSwim = canSwim
	}

	performRider(): void {
		this.canRideCar.rideACar()

	}
	performSwim(): void {
		this.canSwim.swim()
	}

}



class adult extends Person {
	constructor() {
		super(new proRider(), new ProSwim())
	}
}

class baby extends Person {

	constructor() {
		super(new cannotRide(), new NoSwim())
	}

}


const a = new adult()
a.performRider()
a.performSwim()

const b = new baby()
b.performSwim()
b.performRider()





