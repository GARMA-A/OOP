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
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log("I'm flying with wings!");
    };
    return FlyWithWings;
}());
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log("I can't fly.");
    };
    return FlyNoWay;
}());
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log("Quack!");
    };
    return Quack;
}());
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        console.log("Squeak!");
    };
    return Squeak;
}());
var Duck = /** @class */ (function () {
    function Duck(flyBehavior, quackBehavior) {
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
        this.quackBehavior = quackBehavior;
    }
    Duck.prototype.performFly = function () {
        this.flyBehavior.fly();
    };
    Duck.prototype.performQuack = function () {
        this.quackBehavior.quack();
    };
    Duck.prototype.setFlyBehavior = function (fb) {
        this.flyBehavior = fb;
    };
    Duck.prototype.setQuackBehavior = function (qb) {
        this.quackBehavior = qb;
    };
    return Duck;
}());
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        return _super.call(this, new FlyWithWings(), new Quack()) || this;
    }
    MallardDuck.prototype.display = function () {
        console.log("I'm a real Mallard duck");
    };
    return MallardDuck;
}(Duck));
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        return _super.call(this, new FlyNoWay(), new Squeak()) || this;
    }
    RubberDuck.prototype.display = function () {
        console.log("I'm a rubber duck");
    };
    return RubberDuck;
}(Duck));
var md = new MallardDuck();
md.display();
md.performFly();
md.performQuack();
var rd = new RubberDuck();
rd.display();
rd.performFly();
rd.performQuack();
