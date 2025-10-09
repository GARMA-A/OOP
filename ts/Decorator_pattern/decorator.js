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
var Beverage = /** @class */ (function () {
    function Beverage() {
        this.description = "Unknown";
    }
    Object.defineProperty(Beverage.prototype, "Description", {
        get: function () {
            return this.description;
        },
        enumerable: false,
        configurable: true
    });
    return Beverage;
}());
var Decerator = /** @class */ (function (_super) {
    __extends(Decerator, _super);
    function Decerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Decerator;
}(Beverage));
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.description = "Espresso";
        return _this;
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
}(Beverage));
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        var _this = _super.call(this) || this;
        _this.description = "House Blend Coffee";
        return _this;
    }
    HouseBlend.prototype.cost = function () {
        return 0.89;
    };
    return HouseBlend;
}(Beverage));
var Mocha = /** @class */ (function (_super) {
    __extends(Mocha, _super);
    function Mocha(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Object.defineProperty(Mocha.prototype, "Description", {
        get: function () {
            return this.beverage.Description + ", Mocha";
        },
        enumerable: false,
        configurable: true
    });
    Mocha.prototype.cost = function () {
        return .20 + this.beverage.cost();
    };
    return Mocha;
}(Decerator));
var ExtraMilk = /** @class */ (function (_super) {
    __extends(ExtraMilk, _super);
    function ExtraMilk(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Object.defineProperty(ExtraMilk.prototype, "Description", {
        get: function () {
            return this.beverage.Description + ",Extra Milk";
        },
        enumerable: false,
        configurable: true
    });
    ExtraMilk.prototype.cost = function () {
        return this.beverage.cost() + 0.30;
    };
    return ExtraMilk;
}(Decerator));
var beverage = new Espresso();
console.log(beverage.Description
    + " $" + beverage.cost());
var moca = new Mocha(beverage);
console.log(moca.Description + " $" + moca.cost());
var beverage2 = new HouseBlend();
var mocha = new Mocha(beverage2);
console.log(mocha.Description + " $" + mocha.cost());
var extraMilk = new ExtraMilk(beverage2);
console.log(extraMilk.Description + " $" + extraMilk.cost());
