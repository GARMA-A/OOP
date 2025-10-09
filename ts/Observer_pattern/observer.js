var Concretesub = /** @class */ (function () {
    function Concretesub() {
        this.observers = [];
    }
    Concretesub.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Concretesub.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Concretesub.prototype.notify = function (data) {
        this.observers.forEach(function (observer) { return observer.update(data); });
    };
    return Concretesub;
}());
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
    }
    ConcreteObserver.prototype.update = function (data) {
        console.log("".concat(this.name, " received data: ").concat(data));
    };
    return ConcreteObserver;
}());
var sub = new Concretesub();
var observer1 = new ConcreteObserver('Observer 1');
var observer2 = new ConcreteObserver('Observer 2');
sub.subscribe(observer1);
sub.subscribe(observer2);
sub.notify('Initial Notification');
