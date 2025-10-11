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
    }
    Object.defineProperty(Pizza.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Pizza.prototype.prepare = function () {
        console.log("Preparing ".concat(this._name));
    };
    Pizza.prototype.bake = function () {
        console.log("Baking ".concat(this._name));
    };
    Pizza.prototype.cut = function () {
        console.log("Cutting ".concat(this._name));
    };
    Pizza.prototype.box = function () {
        console.log("Boxing ".concat(this._name));
    };
    return Pizza;
}());
var CheesePizza = /** @class */ (function (_super) {
    __extends(CheesePizza, _super);
    function CheesePizza() {
        var _this = _super.call(this) || this;
        _this._name = "Cheese Pizza 🧀";
        return _this;
    }
    return CheesePizza;
}(Pizza));
var PepperoniPizza = /** @class */ (function (_super) {
    __extends(PepperoniPizza, _super);
    function PepperoniPizza() {
        var _this = _super.call(this) || this;
        _this._name = "Pepperoni Pizza 🍕";
        return _this;
    }
    return PepperoniPizza;
}(Pizza));
var SimplePizzaFactory = /** @class */ (function () {
    function SimplePizzaFactory() {
    }
    SimplePizzaFactory.prototype.createPizza = function (type) {
        var pizza = null;
        if (type === "cheese") {
            pizza = new CheesePizza();
        }
        else if (type === "pepperoni") {
            pizza = new PepperoniPizza();
        }
        return pizza;
    };
    return SimplePizzaFactory;
}());
var PizzaStore = /** @class */ (function () {
    function PizzaStore(factory) {
        this.factory = factory;
    }
    PizzaStore.prototype.orderPizza = function (type) {
        var pizza = this.factory.createPizza(type);
        if (!pizza) {
            console.log("\u274C Sorry, we don't have ".concat(type, " pizza."));
            return null;
        }
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        console.log("\u2705 ".concat(pizza.name, " is ready!\n"));
        return pizza;
    };
    return PizzaStore;
}());
var store = new PizzaStore(new SimplePizzaFactory());
store.orderPizza("cheese");
store.orderPizza("pepperoni");
