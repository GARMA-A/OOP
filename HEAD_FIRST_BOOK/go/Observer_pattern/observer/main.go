package main

type Observer interface {
	update()
}

type Subject struct {
	observers []Observer
}

func (s *Subject) Subscripe(o Observer) {
	s.observers = append(s.observers, o)
}

func (s *Subject) Notify() {
	for _, observer := range s.observers {
		observer.update()
	}
}

func (s *Subject) Unsubscribe(o Observer) {
	for i, observer := range s.observers {
		if observer == o {
			s.observers = append(s.observers[:i], s.observers[i+1:]...)
			break
		}
	}
}

type emplyee1 struct {
	name string
}

func (e *emplyee1) update() {
	print("Observer updated", e.name, "\n")
}

type emplyee2 struct {
	name string
}

func (e *emplyee2) update() {
	print("Observer updated", e.name, "\n")
}

func main() {
	subject := &Subject{}
	emp1 := &emplyee1{name: "emp1"}
	emp2 := &emplyee2{name: "emp2"}
	subject.Subscripe(emp1)
	subject.Subscripe(emp2)
	subject.Notify()
}
