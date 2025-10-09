package weakduck

import (
	"strategy/behaviors"
	"strategy/duck"
)

type WeakDuck struct {
	duck.Duck
}

func NewWeakDuck() *WeakDuck {
	return &WeakDuck{
		Duck: duck.Duck{
			FlyBehavior:   &behaviors.FlyNoWay{},
			QuackBehavior: &behaviors.MuteQuack{},
		},
	}
}
