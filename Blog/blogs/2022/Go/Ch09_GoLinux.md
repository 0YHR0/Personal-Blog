---
title: Ch09 GoLinux
date: 2023-08-24
tags:
 - Go
categories:
 - Go

---

Go命令行有常用的这几个命令：

- go build 编译包和依赖
- go run 编译和运行go程序
- go install 编译并安装包和依赖
- go get 将依赖下载到当前依赖并安装

![image-20230930232612233](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230930232612233.png)



运行go build命令时加入标记-x，这样可以看到go build命令具体都执行了哪些操作，查看具体构建过程

```go
go build -x hello_main.go 
WORK=/var/folders/js/pmxyyt3s2693n8_dk137t8l80000gn/T/go-build580263953
mkdir -p $WORK/b001/
cat >$WORK/b001/importcfg.link << 'EOF' # internal
packagefile command-line-arguments=/Users/XXX/Library/Caches/go-build/66/66f8de4622b8ffa394c623ca185ac616e298e56b0922df729b6a595f48eafac7-d
packagefile fmt=/usr/local/go/pkg/darwin_amd64/fmt.a
...
packagefile internal/race=/usr/local/go/pkg/darwin_amd64/internal/race.a
EOF
mkdir -p $WORK/b001/exe/
cd .
/usr/local/go/pkg/tool/darwin_amd64/link -o $WORK/b001/exe/a.out -importcfg $WORK/b001/importcfg.link -buildmode=exe -buildid=dvpJi7I5grdSogBnCMbW/lvYsRrpuUSUL86UZI79H/GF71-1TyEJxjFQJjlqbi/dvpJi7I5grdSogBnCMbW -extld=clang /Users/XXX/Library/Caches/go-build/66/66f8de4622b8ffa394c623ca185ac616e298e56b0922df729b6a595f48eafac7-d
/usr/local/go/pkg/tool/darwin_amd64/buildid -w $WORK/b001/exe/a.out # internal
mv $WORK/b001/exe/a.out hello_main
rm -r $WORK/b001/
```



## go build

`go build`是这几个命令的基础，`go build <命令源码文件/.>`会生成目标系统的可执行文件



## go run

`go run`命令编译构建后直接运行，不会在项目目录或GOPATH目录下生成可执行文件。
 传入`-x`参数查看详细执行过程可以看出对比`go build`，`go run`省略了`mv $WORK/b001/exe/a.out hello_main`搬移可执行文件，而是直接执行输出结果。



## go install

`go install`大概等于`go build`+安装，所谓安装就是将命令源码生成的可执行文件或者库源码文件生成的归档文件放入GOPATH/bin或GOPATH/pkg中。
 go install可执行文件从打印的详细步骤可以看出主要区别就是`mv $WORK/b001/exe/a.out /Users/XXX/go/bin/hello_main`，将可执行文件放入GOPATH/bin而不是当前目录下。



## go get

命令go get会自动从一些主流公用代码仓库（比如 GitHub）下载目标代码包，并把它们安装到环境变量GOPATH相应目录中。



ref: https://www.jianshu.com/p/d6e2184a5a4f