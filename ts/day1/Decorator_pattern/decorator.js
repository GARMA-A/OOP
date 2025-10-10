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
        this._description = "Unknown";
    }
    Object.defineProperty(Beverage.prototype, "description", {
        get: function () {
            return this._description;
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
        _this._description = "Espresso";
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
        _this._description = "House Blend Coffee";
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
    Object.defineProperty(Mocha.prototype, "description", {
        get: function () {
            return this.beverage.description + ", Mocha";
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
    Object.defineProperty(ExtraMilk.prototype, "description", {
        get: function () {
            return this.beverage.description + ",Extra Milk";
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
console.log(beverage.description
    + " $" + beverage.cost());
var moca = new Mocha(beverage);
console.log(moca.description + " $" + moca.cost());
var beverage2 = new HouseBlend();
var mocha = new Mocha(beverage2);
console.log(mocha.description + " $" + mocha.cost());
var extraMilk = new ExtraMilk(beverage2);
console.log(extraMilk.description + " $" + extraMilk.cost());
