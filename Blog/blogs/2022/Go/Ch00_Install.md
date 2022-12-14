---
title: Ch00_Install
date: 2022-12-04
tags:
 - Go
categories:
 - Go
---

# 环境配置

下载依赖：https://go.dev/dl/

配置环境变量：

```shell
GOROOT=go的安装目录
GOPATH=go的依赖下载目录
```





只有main package下的main函数才会被执行

HelloWorld.go

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, I am bubu!")
}

```

