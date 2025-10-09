package behaviors

type QuackBehavior interface {
	Quack() string
}

type FlyBehavior interface {
	Fly() string
}

type FlyWithWings struct{}

func (f *FlyWithWings) Fly() string {
	return "I'm flying with wings!"
}

type FlyNoWay struct{}

func (f *FlyNoWay) Fly() string {
	return "I can't fly."
}

type Quack struct{}

func (q *Quack) Quack() string {
	return "Quack!"
}

type MuteQuack struct{}

func (m *MuteQuack) Quack() string {
	return "Silence..."
}
