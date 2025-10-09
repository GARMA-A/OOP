package main

import (
	"strategy/mallard_duck"
	"strategy/weak_duck"
)

func main() {
	myDuck := mallardduck.NewMallardDuck()
	println(myDuck.Duck.PerformFly(), myDuck.Duck.PerformQuack())
	anotherDuck := weakduck.NewWeakDuck()
	println(anotherDuck.Duck.PerformFly(), anotherDuck.Duck.PerformQuack())
}
