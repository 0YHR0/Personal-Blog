---
title: Ch13 K8s Application Management
date: 2024-10-24
tags:
 - HuaweiCloud
categories:
 - HuaweiCloud



---

# K8s Application Management




# K8s应用管理
![image-20241106191331993](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191331993.png)

## Helm
![image-20241106191308026](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191308026.png)

![image-20241106191409364](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191409364.png)

![image-20241106191423525](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191423525.png)

### Chart包示例
![image-20241106191431641](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191431641.png)
+ Chart.yaml: chart包的一些元数据，比如版本号，名称或者描述
+ requirements.yaml: helm可以针对chart包的一些依赖管理，比如Kafaka服务必须要zookeeper做一些消息同步
+ charts目录就会同步zookeeper包的内容
+ templates：k8s的一些资源模板，可以把中间，在不同环境有所差异的字段属性，抽象成参数，用占位符进行一些引用，这样在不同环境就可以用不同配置
+ values.schema可以对values的格式进行一些校验

#### chart.yaml示例
![image-20241106191441448](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191441448.png)

#### Template-Value示例
![image-20241106191448604](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191448604.png)
chart：就是chart包概念
config：一份模板+一份配置文件，就是一份config
release：通过上面的config，用install等命令，做一次应用的部署，就是一次release

要改变参数的两种方式
+ 一种是可以直接改配置文件
+ 一种是在install命令的时候传一些参数进来


##### 内置对象（模板里面的值可选的一些来源）
![image-20241106191504339](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191504339.png)

##### 子模板（类似定义函数）
+ 减少了重复编写相同代码的工作量
![image-20241106191512841](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191512841.png)


### Hook机制
<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/%E4%BA%91%E8%AE%A1%E7%AE%97%E4%B8%AD%20XDS-%E8%B1%86%E5%8C%85.png" alt="云计算中 XDS-豆包" style="zoom:33%;" />

![image-20241106191525207](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191525207.png)



### 依赖管理
![image-20241106191708132](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191708132.png)
+ 如果是在线环境可以像图中一样配置，但如果是离线环境，需要手动将包下下来放在charts目录中

## Operator
![image-20241106191357516](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191357516.png)

![image-20241106191724015](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191724015.png)

+ CRD：可以自定义一些资源对象，然后k8s就能和其他资源对象一样去操作他

### K8s Controller机制
![image-20241106191741623](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191741623.png)

![image-20241106191750239](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191750239.png)

+ operator就跟k8s的controller差不多，区别就是controller监控的是通用的资源对象并操作，operator监控的是CRD，并进行一些操作

#### redis例子
![image-20241106191806407](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191806407.png)
+ 在启动的时候做一些事情，比如配置主备等


+ 比如redis扩缩容的时候

![image-20241106191826956](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191826956.png)
+ 除了基础的生命周期管理，还可以搞一些增量的功能，比如备份

![image-20241106191839277](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191839277.png)

#### Operator Framework

![image-20241106191852155](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241106191852155.png)

怎么开发operator---比如红帽提供了一种sdk，可以很快的帮你把operator框架给构建出来
基本上是通过operator做一些有状态应用在配置改变的时候要做得一些操作，以及提交的时候创建资源，然后再通过helm打包其他要用到的资源一起发布，这样用户可以直接用helm部署
