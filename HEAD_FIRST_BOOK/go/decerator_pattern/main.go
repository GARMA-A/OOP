package main

import (
	"fmt"
	"time"
)

func main() {
	startTime := time.Now()
	var x float64 = 0

	for i := range 1000000000 {
		x *= float64(i)
	}
	duration := time.Since(startTime).Seconds()
	fmt.Printf("the time taken in sec = %f", duration)
}
