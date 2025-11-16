package main

import "fmt"

type IObserver interface {
	update()
}
type IObservable interface {
	add()
	remove()
	notify()
}

type YoutubeChannel struct {
	Subscripers []IObserver
}

type Subscriper struct {
	name string
}

func (sb *Subscriper) update() {
	fmt.Println(sb.name, "notified")
}

func (yt *YoutubeChannel) notify() {
	for idx := range yt.Subscripers {
		yt.Subscripers[idx].update()
	}
}

func (yt *YoutubeChannel) add(newOb IObserver) {
	yt.Subscripers = append(yt.Subscripers, newOb)
}

func (yt *YoutubeChannel) remove(Ob IObserver) {
	for idx := range yt.Subscripers {
		if yt.Subscripers[idx] == Ob {
			yt.Subscripers = append(yt.Subscripers[:idx], yt.Subscripers[idx+1:]...)
			break
		}
	}
}

func main() {
	channel := &YoutubeChannel{}
	sub1 := &Subscriper{name: "sub1"}
	sub2 := &Subscriper{name: "sub2"}
	channel.add(sub1)
	channel.add(sub2)
	channel.notify()
}
