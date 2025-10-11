package main

import (
	"strategy/behaviors"
)

type Duck struct {
	flyBehavior   behaviors.FlyBehavior
	quackBehavior behaviors.QuackBehavior
}

func (d *Duck) performFly() {
	d.flyBehavior.Fly()
}

func (d *Duck) performQuack() {
	d.quackBehavior.Quack()
}

type MuteQuack struct {
	Duck
}

func NewMuteQuack() *MuteQuack {
	return &MuteQuack{
		Duck{
			flyBehavior:   &behaviors.FlyNoWay{},
			quackBehavior: &behaviors.MuteQuack{},
		},
	}
}

type MallardDuck struct {
	Duck
}

func NewMallardDuck() *MallardDuck {
	return &MallardDuck{
		Duck{
			flyBehavior:   &behaviors.FlyWithWings{},
			quackBehavior: &behaviors.Quack{},
		},
	}
}

func main() {
	mallard := NewMallardDuck()
	mallard.performFly()
	mallard.performQuack()

	mute := NewMuteQuack()
	mute.performFly()
	mute.performQuack()
}
