package duck

import "strategy/behaviors"

type Duck struct {
	FlyBehavior   behaviors.FlyBehavior
	QuackBehavior behaviors.QuackBehavior
}

func (d *Duck) PerformFly() string {
	return d.FlyBehavior.Fly()
}

func (d *Duck) PerformQuack() string {
	return d.QuackBehavior.Quack()
}

func (d *Duck) SetFlyBehavior(fb behaviors.FlyBehavior) {
	d.FlyBehavior = fb
}
