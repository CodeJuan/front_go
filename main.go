package main

import (
	"net/http"
	_ "log"
	"github.com/gin-gonic/gin"
)

func pingPong(c *gin.Context){
	c.JSON(http.StatusOK, gin.H{"message":"pong"})
}

func name(c *gin.Context){
	name := c.Param("name")
	c.JSON(http.StatusOK, gin.H{"name":name, "age":12})
}

func main(){
	s := gin.Default()

	s.StaticFile("/", "./index.html")
	s.StaticFS("/assets", http.Dir("./assets"))

	v1 := s.Group("/v1")
	{
		v1.GET("/ping", pingPong)
		v1.GET("/user/:name", name)
	}
	s.Run("0.0.0.0:80")
}