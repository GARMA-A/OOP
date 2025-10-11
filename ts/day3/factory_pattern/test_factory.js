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
var Pizza = /** @class */ (function () {
    function Pizza() {
        this._name = "pizza";
    }
    Object.defineProperty(Pizza.prototype, "name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Pizza.prototype.prepare = function () {
        console.log("prepare the ".concat(this._name));
    };
    Pizza.prototype.cook = function () {
        console.log("cook the ".concat(this._name));
    };
    return Pizza;
}());
var PizzWithCheez = /** @class */ (function (_super) {
    __extends(PizzWithCheez, _super);
    function PizzWithCheez() {
        var _this = _super.call(this) || this;
        _this._name = "Cheez Pizza";
        return _this;
    }
    return PizzWithCheez;
}(Pizza));
var PizzaWithMilk = /** @class */ (function (_super) {
    __extends(PizzaWithMilk, _super);
    function PizzaWithMilk() {
        var _this = _super.call(this) || this;
        _this._name = "Milk Pizza";
        return _this;
    }
    return PizzaWithMilk;
}(Pizza));
var factory = /** @class */ (function () {
    function factory() {
    }
    factory.prototype.createPizza = function (type) {
        var pizza = null;
        if (type == "milkPizza") {
            pizza = new PizzaWithMilk();
        }
        else if (type == "ChezPizza") {
            pizza = new PizzWithCheez();
        }
        else {
            throw new Error("type of pizza is unknown");
        }
        return pizza;
    };
    return factory;
}());
var Store = /** @class */ (function () {
    function Store(factory) {
        this.factory = factory;
    }
    Store.prototype.orderPizz = function (type) {
        var pizza = this.factory.createPizza(type);
        pizza.prepare();
        pizza.cook();
    };
    return Store;
}());
var store = new Store(new factory());
store.orderPizz("milkPizza");
