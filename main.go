package main

import (
	"net/http"
	_ "log"
	"github.com/gin-gonic/gin"
)

func pingPong(c *gin.Context){
	c.JSON(200, gin.H{"message":"pong"})
}

func main(){
	s := gin.Default()

	s.StaticFile("/", "./index.html")
	s.StaticFS("/assets", http.Dir("./assets"))

	v1 := s.Group("/v1")
	{
		v1.GET("/ping", pingPong)
	}
	s.Run("0.0.0.0:80")
}