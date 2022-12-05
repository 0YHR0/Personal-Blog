---
title: Ch06 Dockerfile
date: 2022-04-20
tags:
 - Dockerfile
categories:
 - Docker


---

# Ch06 Dockerfile

## 1.镜像结构

镜像是将应用程序及其需要的系统函数库、环境、配置、依赖打包而成。

我们以MySQL为例，来看看镜像的组成结构：

![image-20210731175806273](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731175806273.png)



简单来说，镜像就是在系统函数库、运行环境基础上，添加应用程序文件、配置文件、依赖文件等组合，然后编写好启动脚本打包在一起形成的文件。





## 2.Dockerfile语法

构建自定义的镜像时，并不需要一个个文件去拷贝，打包。

我们只需要告诉Docker，我们的镜像的组成，需要哪些BaseImage、需要拷贝什么文件、需要安装什么依赖、启动脚本是什么，将来Docker会帮助我们构建镜像。



而描述上述信息的文件就是Dockerfile文件。



**Dockerfile**就是一个文本文件，其中包含一个个的**指令(Instruction)**，用指令来说明要执行什么操作来构建镜像。每一个指令都会形成一层Layer。

![image-20210731180321133](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731180321133.png)



更新详细语法说明，请参考官网文档： https://docs.docker.com/engine/reference/builder



```dockerfile
# 指定基础镜像
FROM ubuntu:16.04
# 配置环境变量，JDK的安装目录
ENV JAVA_DIR=/usr/local

# 拷贝jdk和java项目的包
COPY ./jdk8.tar.gz $JAVA_DIR/
COPY ./docker-demo.jar /tmp/app.jar

# 安装JDK
RUN cd $JAVA_DIR \
 && tar -xf ./jdk8.tar.gz \
 && mv ./jdk1.8.0_144 ./java8

# 配置环境变量,:意思时在原先的环境变量之上再添加新的环境变量
ENV JAVA_HOME=$JAVA_DIR/java8
ENV PATH=$PATH:$JAVA_HOME/bin

# 暴露端口
EXPOSE 8090
# 入口，java项目的启动命令
ENTRYPOINT java -jar /tmp/app.jar
```



### 例子：

把java项目打包成jar包，把jdk8.tar.gz和jar包一起拷贝进云服务器上的某个目录

![image-20220419215943042](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220419215943042.png)



进入该目录中运行：-t表示镜像名称：版本，后面的 . 表示dockerfile所在目录

```sh
docker build -t javaweb:1.0 .
```

```sh
docker run --name javaweb -p 90:8090 -d javaweb:1.0
```





### 基于java8构建Java项目

虽然我们可以基于Ubuntu基础镜像，添加任意自己需要的安装包，构建镜像，但是却比较麻烦。所以大多数情况下，我们都可以在一些安装了部分软件的基础镜像上做改造。

例如，构建java项目的镜像，可以在已经准备了JDK的基础镜像基础上构建。

基于java:8-alpine镜像，将一个Java项目构建为镜像

```doc
FROM java:8-alpine
COPY ./app.jar /tmp/app.jar
EXPOSE 8090
ENTRYPOINT java -jar /tmp/app.jar
```



![image-20220419221721501](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220419221721501.png)



