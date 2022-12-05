---
title: Ch03 Docker 镜像命令
date: 2022-04-19
tags:
 - Docker
categories:
 - Docker


---

# Ch03 Docker 镜像命令



### 1.1.镜像名称

首先来看下镜像的名称组成：

- 镜名称一般分两部分组成：[repository]:[tag]。
- 在没有指定tag时，默认是latest，代表最新版本的镜像

如图：

![image-20210731155141362](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155141362.png)

这里的mysql就是repository，5.7就是tag，合一起就是镜像名称，代表5.7版本的MySQL镜像。



### 1.2.镜像命令

常见的镜像操作命令如图：

![image-20210731155649535](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155649535.png)

### 1.3.案例1-拉取、查看镜像

需求：从DockerHub中拉取一个nginx镜像并查看

1）首先去镜像仓库搜索nginx镜像，比如[DockerHub](https://hub.docker.com/):

![image-20210731155844368](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155844368.png)

2）根据查看到的镜像名称，拉取自己需要的镜像，通过命令：docker pull nginx

![image-20210731155856199](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155856199.png)

3）通过命令：docker images 查看拉取到的镜像

![image-20210731155903037](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155903037.png)



### 1.4.案例2-保存、导入镜像

需求：利用docker save将nginx镜像导出磁盘，然后再通过load加载回来

1）利用docker xx --help命令查看docker save和docker load的语法

例如，查看save命令用法，可以输入命令：

```sh
docker save --help
```

结果：

![image-20210731161104732](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731161104732.png)



命令格式：

```shell
docker save -o [保存的目标文件名称] [镜像名称]
```



2）使用docker save导出镜像到磁盘 

运行命令：

```sh
docker save -o nginx.tar nginx:latest
```

结果如图：

![image-20210731161354344](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731161354344.png)



3）使用docker load加载镜像

先删除本地的nginx镜像：

```sh
docker rmi nginx:latest
```



然后运行命令，加载本地文件：

```sh
docker load -i nginx.tar
```

结果：

![image-20210731161746245](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731161746245.png)



![image-20220418181748314](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220418181748314.png)



