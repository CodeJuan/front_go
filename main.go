package main

import (
	"fmt"
	"net/http"
	"log"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func createHandler() http.Handler {
	var mux = http.NewServeMux()
	var fileHandler = http.FileServer(http.Dir("./assets"))

	mux.Handle("/", fileHandler)
	return mux
}

func main(){
	handler := createHandler()
	if err := http.ListenAndServe("0.0.0.0:80", handler); err != nil {
		log.Fatal(err)
	}
}