var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProSwim = /** @class */ (function () {
    function ProSwim() {
    }
    ProSwim.prototype.swim = function () {
        console.log("i can swim like a pro");
    };
    return ProSwim;
}());
var NoSwim = /** @class */ (function () {
    function NoSwim() {
    }
    NoSwim.prototype.swim = function () {
        console.log("i cannot swim at all");
    };
    return NoSwim;
}());
var proRider = /** @class */ (function () {
    function proRider() {
    }
    proRider.prototype.rideACar = function () {
        console.log("i can ride a car");
    };
    return proRider;
}());
var cannotRide = /** @class */ (function () {
    function cannotRide() {
    }
    cannotRide.prototype.rideACar = function () {
        console.log("i cannot ride a car");
    };
    return cannotRide;
}());
var Person = /** @class */ (function () {
    function Person(canRideCar, canSwim) {
        this.canRideCar = canRideCar;
        this.canSwim = canSwim;
    }
    Person.prototype.performRider = function () {
        this.canRideCar.rideACar();
    };
    Person.prototype.performSwim = function () {
        this.canSwim.swim();
    };
    return Person;
}());
var adult = /** @class */ (function (_super) {
    __extends(adult, _super);
    function adult() {
        return _super.call(this, new proRider(), new ProSwim()) || this;
    }
    return adult;
}(Person));
var baby = /** @class */ (function (_super) {
    __extends(baby, _super);
    function baby() {
        return _super.call(this, new cannotRide(), new NoSwim()) || this;
    }
    return baby;
}(Person));
var a = new adult();
a.performRider();
a.performSwim();
var b = new baby();
b.performSwim();
b.performRider();
