---
title: Ch00_Intro
date: 2022-12-22
tags:
 - Gin
 - Web
 - Go
categories:
 - Go

---

# 

```go
 go get github.com/gin-gonic/gin
```

```go
package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	//create a server
	ginServer := gin.Default()

	//request
	ginServer.GET("/hello", func(context *gin.Context) {
		context.JSON(200, gin.H{"msg": "hello from go"})
	})

	//run
	ginServer.Run(":8080")
}

```

https://github.com/0YHR0/Gin-Study

英文文档template：https://pkg.go.dev/html/template

中文翻译版： https://colobu.com/2019/11/05/Golang-Templates-Cheatsheet/#if/else_%E8%AF%AD%E5%8F%A5

# Gorm+Mysql

```go
//安装MySQL驱动
go get -u gorm.io/driver/mysql
//安装gorm包
go get -u gorm.io/gorm
```



