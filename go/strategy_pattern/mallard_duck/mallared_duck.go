package mallardduck

import (
	"strategy/behaviors"
	"strategy/duck"
)

type mallardDuck struct {
	Duck duck.Duck
}

func NewMallardDuck() *mallardDuck {
	d := mallardDuck{}
	d.Duck.FlyBehavior = &behaviors.FlyWithWings{}
	d.Duck.QuackBehavior = &behaviors.Quack{}
	return &d
}
