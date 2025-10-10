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
        this._description = "Unknown Beverage";
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
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
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
        return this.beverage.cost() + 0.20;
    };
    return Mocha;
}(CondimentDecorator));
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Object.defineProperty(Whip.prototype, "description", {
        get: function () {
            return this.beverage.description + ", Whip";
        },
        enumerable: false,
        configurable: true
    });
    Whip.prototype.cost = function () {
        return this.beverage.cost() + 0.10;
    };
    return Whip;
}(CondimentDecorator));
var es = new Espresso();
console.log(es.description + " $" + es.cost().toFixed(2));
var es2 = new Mocha(es);
console.log(es2.description + " $" + es2.cost().toFixed(2));
var es3 = new Whip(es2);
console.log(es3.description + " $" + es3.cost().toFixed(2));
var hb = new HouseBlend();
console.log(hb.description + " $" + hb.cost().toFixed(2));
var hb2 = new Mocha(hb);
console.log(hb2.description + " $" + hb2.cost().toFixed(2));
