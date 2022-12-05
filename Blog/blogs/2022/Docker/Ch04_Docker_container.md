---
title: Ch04 Docker 容器命令
date: 2022-04-19
tags:
 - Docker
categories:
 - Docker
---

# Ch04 Docker容器命令

### 1.容器相关命令

容器操作的命令如图：

![image-20210731161950495](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731161950495.png)

容器保护三个状态：

- 运行：进程正常运行
- 暂停：进程暂停，CPU不再运行，并不释放内存
- 停止：进程终止，回收进程占用的内存、CPU等资源



其中：

- docker run：创建并运行一个容器，处于运行状态
- docker pause：让一个运行的容器暂停
- docker unpause：让一个容器从暂停状态恢复运行
- docker stop：停止一个运行的容器
- docker start：让一个停止的容器再次运行
- docker rm：删除一个容器



### 2.案例-创建并运行一个容器

创建并运行nginx容器的命令：查看docker hub官网，看后面参数怎么写，不同的不一样

```sh
docker run --name containerName -p 80:80 -d nginx
```

命令解读：

- docker run ：创建并运行一个容器
- --name : 给容器起一个名字，比如叫做mn
- -p ：将宿主机端口与容器端口映射，冒号左侧是宿主机端口，右侧是容器端口
- -d：后台运行容器
- nginx：镜像名称，例如nginx



这里的`-p`参数，是将容器端口映射到宿主机端口。

默认情况下，容器是隔离环境，我们直接访问宿主机的80端口，肯定访问不到容器中的nginx。

现在，将容器的80与宿主机的80关联起来，当我们访问宿主机的80端口时，就会被映射到容器的80，这样就能访问到nginx了：

![image-20210731163255863](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731163255863.png)

![image-20220418231557918](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220418231557918.png)

docker ps只能查看运行时的容器，可以-a 查看所有容器



### 3.案例-进入容器，修改文件

**需求**：进入Nginx容器，修改HTML文件内容，添加“YHR”

**提示**：进入容器要用到docker exec命令。



**步骤**：

1）进入容器。进入我们刚刚创建的nginx容器的命令为：

```sh
docker exec -it mn bash
```

命令解读：

- docker exec ：进入容器内部，执行一个命令

- -it : 给当前进入的容器创建一个标准输入、输出终端，允许我们与容器交互

- mn ：要进入的容器的名称

- bash：进入容器后执行的命令，bash是一个linux终端交互命令



2）进入nginx的HTML所在目录 /usr/share/nginx/html

容器内部会模拟一个独立的Linux文件系统，看起来如同一个linux服务器一样：

![image-20210731164159811](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731164159811.png)

nginx的环境、配置、运行文件全部都在这个文件系统中，包括我们要修改的html文件。

查看DockerHub网站中的nginx页面，可以知道nginx的html目录位置在`/usr/share/nginx/html`

我们执行命令，进入该目录：

```sh
cd /usr/share/nginx/html
```

 查看目录下文件：

![image-20210731164455818](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731164455818.png)





3）修改index.html的内容

容器内没有vi命令，无法直接修改，我们用下面的命令来修改：

```sh
sed -i -e 's#Welcome to nginx#WELCOME	YHR#g' -e 's#<head>#<head><meta charset="utf-8">#g' index.html
```



![image-20220418232919950](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220418232919950.png)



