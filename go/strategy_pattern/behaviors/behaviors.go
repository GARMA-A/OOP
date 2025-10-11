package behaviors

type FlyBehavior interface {
	Fly()
}
type QuackBehavior interface {
	Quack()
}

type FlyWithWings struct{}

func (f *FlyWithWings) Fly() {
	println("I'm flying with wings!")
}

type FlyNoWay struct{}

func (f *FlyNoWay) Fly() {
	println("I can't fly.")
}

// Quack behaviors
type Quack struct{}

func (q *Quack) Quack() {
	println("Quack!")
}

type Squeak struct{}

func (s *Squeak) Quack() {
	println("Squeak!")
}

type MuteQuack struct{}

func (m *MuteQuack) Quack() {
	println("<< Silence >>")
}
