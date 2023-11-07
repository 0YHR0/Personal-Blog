---
title: Ch27 Interview
date: 2023-11-02
tags:
 - K8s
 - Kubernetes
 - Interview
categories:
 - Kubernetes
---



# Interview



## 什么是k8s？

K8s是kubernetes的简称，其本质是一个开源的容器编排系统，主要用于管理容器化的应用，其目标是让部署容器化的应用简单并且高效（powerful）,Kubernetes提供了应用部署，规划，更新，维护的一种机制。
说简单点：k8s就是一个编排容器的系统，一个可以管理容器应用全生命周期的工具，从创建应用，应用的部署，应用提供服务，扩容缩容应用，应用更新，都非常的方便，而且还可以做到故障自愈，所以，k8s是一个非常强大的容器编排系统。



## k8s的组件有哪些，作用分别是什么？

![image-20231104112001963](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231104112001963.png)

k8s主要由master节点和node节点构成。master节点负责管理集群，node节点是容器应用真正运行的地方。
master节点包含的组件有：kube-api-server、kube-controller-manager、kube-scheduler、etcd。
node节点包含的组件有：kubelet、kube-proxy、container-runtime。

+ **kube-api-serve**r：以下简称api-server，api-server是k8s最重要的核心组件之一，它是k8s集群管理的统一访问入口，提供了RESTful API接口, 实现了认证、授权和准入控制等安全功能；api-server还是其他组件之间的数据交互和通信的枢纽，其他组件彼此之间并不会直接通信，其他组件对资源对象的增、删、改、查和监听操作都是交由api-server处理后，api-server再提交给etcd数据库做持久化存储，只有api-server才能直接操作etcd数据库，其他组件都不能直接操作etcd数据库，其他组件都是通过api-server间接的读取，写入数据到etcd。

+ **kube-controller-manager**：以下简称controller-manager，controller-manager是k8s中各种控制器的的管理者，是k8s集群内部的管理控制中心，也是k8s自动化功能的核心；controller-manager内部包含replication controller、node controller、deployment controller、endpoint controller等各种资源对象的控制器，每种控制器都负责一种特定资源的控制流程，而controller-manager正是这些controller的核心管理者。

+ **kube-scheduler**：以下简称scheduler，scheduler负责集群资源调度，其作用是将待调度的pod通过一系列复杂的调度算法计算出最合适的node节点，然后将pod绑定到目标节点上。shceduler会根据pod的信息，全部节点信息列表，过滤掉不符合要求的节点，过滤出一批候选节点，然后给候选节点打分，选分最高的就是最佳节点，scheduler就会把目标pod安置到该节点。

+ **Etcd**：etcd是一个分布式的键值对存储数据库，主要是用于保存k8s集群状态数据，比如，pod，service等资源对象的信息；etcd可以是单个也可以有多个，多个就是etcd数据库集群，etcd通常部署奇数个实例，在大规模集群中，etcd有5个或7个节点就足够了；另外说明一点，etcd本质上可以不与master节点部署在一起，只要master节点能通过网络连接etcd数据库即可。

+ **kubelet**：每个node节点上都有一个kubelet服务进程，kubelet作为连接master和各node之间的桥梁，负责维护pod和容器的生命周期，当监听到master下发到本节点的任务时，比如创建、更新、终止pod等任务，kubelet 即通过控制docker来创建、更新、销毁容器；
  每个kubelet进程都会在api-server上注册本节点自身的信息，用于定期向master汇报本节点资源的使用情况。

+ **kube-proxy**：kube-proxy运行在node节点上，在Node节点上实现Pod网络代理，维护网络规则和四层负载均衡工作，kube-proxy会监听api-server中从而获取service和endpoint的变化情况，创建并维护路由规则以提供服务IP和负载均衡功能。简单理解此进程是Service的透明代理兼负载均衡器，其核心功能是将到某个Service的访问请求转发到后端的多个Pod实例上。

+ **container-runtime**：容器运行时环境，即运行容器所需要的一系列程序，目前k8s支持的容器运行时有很多，如docker、rkt或其他，比较受欢迎的是docker，但是新版的k8s已经宣布弃用docker。



## K8s Scheduler使用哪两种算法将Pod绑定到worker节点

+ 预选（Predicates）：输入是所有节点，输出是满足预选条件的节点。kube-
  scheduler根据预选策略过滤掉不满足策略的Nodes。如果某节点的资源不足或者不满足预选策略的条件则无法通过预选。如“Node的label必须与Pod的Selector一致”。
+ 优选（Priorities）：输入是预选阶段筛选出的节点，优选会根据优先策略为通过预选的Nodes进行打分排名，选择得分最高的Node。例如，资源越富裕、负载越小的Node可能具有越高的排名。





## kubelet的功能、作用是什么？（重点，经常会问）

kubelet部署在每个node节点上的，它主要有2个功能：

1. 节点管理。kubelet启动时会向api-server进行注册，然后会定时的向api-server汇报本节点信息状态，资源使用状态等，这样master就能够知道node节点的资源剩余，节点是否失联等等相关的信息了。master知道了整个集群所有节点的资源情况，这对于 pod 的调度和正常运行至关重要。
2. pod管理。kubelet负责维护node节点上pod的生命周期，当kubelet监听到master的下发到自己节点的任务时，比如要创建、更新、删除一个pod，kubelet 就会通过CRI（容器运行时接口）插件来调用不同的容器运行时来创建、更新、删除容器；常见的容器运行时有docker、containerd、rkt等等这些容器运行时，我们最熟悉的就是docker了，但在新版本的k8s已经弃用docker了，k8s1.24版本中已经使用containerd作为容器运行时了。
3. 容器健康检查。pod中可以定义启动探针、存活探针、就绪探针等3种，我们最常用的就是存活探针、就绪探针，kubelet 会定期调用容器中的探针来检测容器是否存活，是否就绪，如果是存活探针，则会根据探测结果对检查失败的容器进行相应的重启策略；
4. Metrics Server资源监控。在node节点上部署Metrics Server用于监控node节点、pod的CPU、内存、文件系统、网络使用等资源使用情况，而kubelet则通过Metrics Server获取所在节点及容器的上的数据。



## K8s kubelet监控Worker节点资源是使用什么组件实现？

kubelet使用cAdvisor对worker节点资源进行监控。在K8s系统中，cAdvisor已被默认集成到kubelet组件内，当kubelet服务启动时，它会自动启动cAdvisor服务，然后cAdvisor会实时采集所在节点的性能指标及节点上运行的容器的性能指标。



##  K8s如何保证集群的安全性

+ 基础设施方面：保证容器与其所在宿主机的隔离；
+ 权限方面：
  + 最小权限原则：合理限制所有组件的权限，确保组件只执行它被授权的行为，通过限制单个组件的能力来限制它的权限范围。
  + 用户权限：划分普通用户和管理员的角色
+ 集群方面：
  + API Server的认证授权：Kubernetes集群中所有资源的访问和变更都是通过KubernetesAPI Server来实现的，因此需要建议采用更安全的HTTPS或Token 来识别和认证客户端身份（Authentication），以及随后访问权限的授权（Authorization）环节。
  + API Server的授权管理：通过授权策略来决定一个API调用是否合法。对合法用户进行授权并且随后在用户访问时进行鉴权，建议采用更安全的RBAC方式来提升集群安全授权。
  + 敏感数据引入Secret机制：对于集群敏感数据建议使用Secret方式进行保护。
  + AdmissionControl（准入机制）：对kubernetes api的请求过程中，顺序为：先经过认证&授权，然后执行准入操作，最后对目标对象进行操作。
    



## kube-api-server的端口是多少？各个pod是如何访问kube-api-server的？

kube-api-server的端口是8080和6443，前者是http的端口，后者是https的端口，以我本机使用kubeadm安装的k8s为例：

在命名空间的kube-system命名空间里，有一个名称为kube-api-master的pod，这个pod就是运行着kube-api-server进程，它绑定了master主机的ip地址和6443端口，但是在default命名空间下，存在一个叫kubernetes的服务，该服务对外暴露端口为443，目标端口6443，这个服务的ip地址是clusterip地址池里面的第一个地址，同时这个服务的yaml定义里面并没有指定标签选择器，也就是说这个kubernetes服务所对应的endpoint是手动创建的，该endpoint也是名称叫做kubernetes，该endpoint的yaml定义里面代理到master节点的6443端口，也就是kube-api-server的IP和端口。这样一来，其他pod访问kube-api-server的整个流程就是：pod创建后嵌入了环境变量，pod获取到了kubernetes这个服务的ip和443端口，请求到kubernetes这个服务其实就是转发到了master节点上的6443端口的kube-api-server这个pod里面。



## k8s中命名空间的作用是什么？

namespace是kubernetes系统中的一种非常重要的资源，namespace的主要作用是用来实现多套环境的资源隔离，或者说是多租户的资源隔离。
k8s通过将集群内部的资源分配到不同的namespace中，可以形成逻辑上的隔离，以方便不同的资源进行隔离使用和管理。不同的命名空间可以存在同名的资源，命名空间为资源提供了一个作用域。
可以通过k8s的授权机制，将不同的namespace交给不同的租户进行管理，这样就实现了多租户的资源隔离，还可以结合k8s的资源配额机制，限定不同的租户能占用的资源，例如CPU使用量、内存使用量等等来实现租户可用资源的管理。



## k8s提供了大量的REST接口，其中有一个是Kubernetes Proxy API接口，简述一下这个Proxy接口的作用，已经怎么使用。

好的。kubernetes proxy api接口，从名称中可以得知，proxy是代理的意思，其作用就是代理rest请求；Kubernets API server 将接收到的rest请求转发到某个node上的kubelet守护进程的rest接口，由该kubelet进程负责响应。我们可以使用这种Proxy接口来直接访问某个pod，这对于逐一排查pod异常问题很有帮助。
下面是一些简单的例子：

```sh
http://<kube-api-server>:<api-sever-port>/api/v1/nodes/node名称/proxy/pods  	#查看指定node的所有pod信息
http://<kube-api-server>:<api-sever-port>/api/v1/nodes/node名称/proxy/stats  	#查看指定node的物理资源统计信息
http://<kube-api-server>:<api-sever-port>/api/v1/nodes/node名称/proxy/spec  	#查看指定node的概要信息

http://<kube-api-server>:<api-sever-port>/api/v1/namespace/命名名称/pods/pod名称/pod服务的url/  	#访问指定pod的程序页面
http://<kube-api-server>:<api-sever-port>/api/v1/namespace/命名名称/servers/svc名称/url/  	#访问指定server的url程序页面

```



## pod是什么？

在kubernetes的世界中，k8s并不直接处理容器，而是使用多个容器共存的理念，这组容器就叫做pod。pod是k8s中可以创建和管理的最小单元，是资源对象模型中由用户创建或部署的最小资源对象模型，其他的资源对象都是用来支撑pod对象功能的，比如，pod控制器就是用来管理pod对象的，service或者imgress资源对象是用来暴露pod引用对象的，persistentvolume资源是用来为pod提供存储等等，简而言之，k8s不会直接处理容器，而是pod，pod才是k8s中可以创建和管理的最小单元，也是基本单元。



## pod的原理是什么？

在微服务的概念里，一般的，一个容器会被设计为运行一个进程，除非进程本身产生子进程，这样，由于不能将多个进程聚集在同一个单独的容器中，所以需要一种更高级的结构将容器绑定在一起，并将它们作为一个单元进行管理，这就是k8s中pod的背后原理。



## pod有什么特点？

1. 每个pod就像一个独立的逻辑机器，k8s会为每个pod分配一个集群内部唯一的IP地址，所以每个pod都拥有自己的IP地址、主机名、进程等；
2. 一个pod可以包含1个或多个容器，1个容器一般被设计成只运行1个进程，1个pod只可能运行在单个节点上，即不可能1个pod跨节点运行，pod的生命周期是短暂，也就是说pod可能随时被消亡（如节点异常，pod异常等情况）；
3. 每一个pod都有一个特殊的被称为"根容器"的pause容器，也称info容器，pause容器对应的镜像属于k8s平台的一部分，除了pause容器，每个pod还包含一个或多个跑业务相关组件的应用容器；
4. 一个pod中的容器共享network命名空间；
5. 一个pod里的多个容器共享pod IP，这就意味着1个pod里面的多个容器的进程所占用的端口不能相同，否则在这个pod里面就会产生端口冲突；既然每个pod都有自己的IP和端口空间，那么对不同的两个pod来说就不可能存在端口冲突；
6. 应该将应用程序组织到多个pod中，而每个pod只包含紧密相关的组件或进程；
7. pod是k8s中扩容、缩容的基本单位，也就是说k8s中扩容缩容是针对pod而言而非容器。



## pause容器作用是什么？

每个pod里运行着一个特殊的被称之为pause的容器，也称根容器，而其他容器则称为业务容器；创建pause容器主要是为了为业务容器提供 Linux命名空间，共享基础：包括 pid、icp、net 等，以及启动 init 进程，并收割僵尸进程；这些业务容器共享pause容器的网络命名空间和volume挂载卷，当pod被创建时，pod首先会创建pause容器，从而把其他业务容器加入pause容器，从而让所有业务容器都在同一个命名空间中，这样可以就可以实现网络共享。pod还可以共享存储，在pod级别引入数据卷volume，业务容器都可以挂载这个数据卷从而实现持久化存储。



## pod的重启策略有哪些？

pod重启容器策略是指针对pod内所有容器的重启策略，不是重启pod，其可以通过restartPolicy字段配置pod重启容器的策略，如下：

```yaml
Always: 当容器终止退出后，总是重启容器，默认策略就是Always。
OnFailure: 当容器异常退出，退出状态码非0时，才重启容器。
Never: 当容器终止退出，不管退出状态码是什么，从不重启容器。
```





## pod的镜像拉取策略有哪几种？

pod镜像拉取策略可以通过imagePullPolicy字段配置镜像拉取策略，主要有3中镜像拉取策略，如下：

```yaml
IfNotPresent: 默认值，镜像在node节点宿主机上不存在时才拉取。
Always: 总是重新拉取，即每次创建pod都会重新从镜像仓库拉取一次镜像。
Never: 永远不会主动拉取镜像，仅使用本地镜像，需要你手动拉取镜像到node节点，如果node节点不存在镜像则pod启动失败。
```



## Pod的常见调度方式

+ Deployment或RC：该调度策略主要功能就是自动部署一个容器应用的多份副本，以及持续监控副本的数量，在集群内始终维持用户指定的副本数量。
+ NodeSelector：定向调度，当需要手动指定将Pod调度到特定Node上，可以通过Node的标签（Label）和Pod的nodeSelector属性相匹配。
+ NodeAffinity：亲和性调度，扩展了Pod的调度能力，目前有两种节点亲和力表达
  + requiredDuringSchedulingIgnoredDuringExecution：硬规则，必须满足指定的规则，调度器才可以调度Pod至Node上（类似nodeSelector，语法不同）
  + preferredDuringSchedulingIgnoredDuringExecution：软规则，优先调度至满足的Node的节点，但不强求，多个优先级规则还可以设置权重值。
+ Taints和Tolerations（污点和容忍）
  + Taint：使Node拒绝特定Pod运行
  + Toleration：为Pod的属性，表示Pod能容忍（运行）标注了Taint的Node



## pod的存活探针有哪几种？（必须记住3重探测方式，重点，经常问）

kubernetes可以通过存活探针检查容器是否还在运行，可以为pod中的每个容器单独定义存活探针，kubernetes将定期执行探针，如果探测失败，将杀死容器，并根据restartPolicy策略来决定是否重启容器，kubernetes提供了3种探测容器的存活探针，如下：

```yaml
httpGet：通过容器的IP、端口、路径发送http 请求，返回200-400范围内的状态码表示成功。
exec：在容器内执行shell命令，根据命令退出状态码是否为0进行判断，0表示健康，非0表示不健康。
TCPSocket：与容器的IP、端口建立TCP Socket链接，能建立则说明探测成功，不能建立则说明探测失败。
```



## 存活探针的属性参数有哪几个？

存活探针的附加属性参数有以下几个：

```yaml
initialDelaySeconds：表示在容器启动后延时多久秒才开始探测；
periodSeconds：表示执行探测的频率，即间隔多少秒探测一次，默认间隔周期是10秒，最小1秒；
timeoutSeconds：表示探测超时时间，默认1秒，最小1秒，表示容器必须在超时时间范围内做出响应，否则视为本次探测失败；
successThreshold：表示最少连续探测成功多少次才被认定为成功，默认是1，对于liveness必须是1，最小值是1；
failureThreshold：表示连续探测失败多少次才被认定为失败，默认是3，连续3次失败，k8s 将根据pod重启策略对容器做出决定；

注意：定义存活探针时，一定要设置initialDelaySeconds属性，该属性为初始延时，如果不设置，默认容器启动时探针就开始探测了，这样可能会存在
应用程序还未启动就绪，就会导致探针检测失败，k8s就会根据pod重启策略杀掉容器然后再重新创建容器的莫名其妙的问题。
在生产环境中，一定要定义一个存活探针。
```



## pod的就绪探针有哪几种？（必须记住3重探测方式，重点，经常问）

我们知道，当一个pod启动后，就会立即加入service的endpoint ip列表中，并开始接收到客户端的链接请求，假若此时pod中的容器的业务进程还没有初始化完毕，那么这些客户端链接请求就会失败，为了解决这个问题，kubernetes提供了就绪探针来解决这个问题的。
在pod中的容器定义一个就绪探针，就绪探针周期性检查容器，如果就绪探针检查失败了，说明该pod还未准备就绪，不能接受客户端链接，则该pod将从endpoint列表中移除，被剔除了service就不会把请求分发给该pod，然后就绪探针继续检查，如果随后容器就绪，则再重新把pod加回endpoint列表。k8s提供了3种就绪探针，如下：

```
httpGet：通过容器的IP、容器的端口以及路径来发送http get请求，返回200-400范围内的状态码表示请求成功。
exec：在容器内执行shell命令，它根据shell命令退出状态码是否为0进行判断，0表示健康，非0表示不健康。
TCPSocket：通过容器的IP、端口建立TCP Socket链接，能正常建立链接，则说明探针成功，不能正常建立链接，则探针失败。
```





## 就绪探针的属性参数有哪些

就绪探针的附加属性参数有以下几个：

```yaml
initialDelaySeconds：延时秒数，即容器启动多少秒后才开始探测，不写默认容器启动就探测；
periodSeconds ：执行探测的频率（秒），默认为10秒，最低值为1；
timeoutSeconds ：超时时间，表示探测时在超时时间内必须得到响应，负责视为本次探测失败，默认为1秒，最小值为1；
failureThreshold ：连续探测失败的次数，视为本次探测失败，默认为3次，最小值为1次；
successThreshold ：连续探测成功的次数，视为本次探测成功，默认为1次，最小值为1次；

```



## 就绪探针与存活探针区别是什么？

两者作用不一样，存活探针是将检查失败的容器杀死，创建新的启动容器来保持pod正常工作；
就绪探针是，当就绪探针检查失败，并不重启容器，而是将pod移出endpoint，就绪探针确保了service中的pod都是可用的，确保客户端只与正常的pod交互并且客户端永远不会知道系统存在问题。



## 简单讲一下 pod创建过程

```yaml
情况一、如果面试官问的是使用kubectl run命令创建的pod，可以这样说：
#注意：kubectl run 在旧版本中创建的是deployment，但在新的版本中创建的是pod则其创建过程不涉及deployment
如果是单独的创建一个pod，则其创建过程是这样的：
1、首先，用户通过kubectl或其他api客户端工具提交需要创建的pod信息给apiserver；
2、apiserver验证客户端的用户权限信息，验证通过开始处理创建请求生成pod对象信息，并将信息存入etcd，然后返回确认信息给客户端；
3、apiserver开始反馈etcd中pod对象的变化，其他组件使用watch机制跟踪apiserver上的变动；
4、scheduler发现有新的pod对象要创建，开始调用内部算法机制为pod分配最佳的主机，并将结果信息更新至apiserver；
5、node节点上的kubelet通过watch机制跟踪apiserver发现有pod调度到本节点，尝试调用docker启动容器，并将结果反馈apiserver；
6、apiserver将收到的pod状态信息存入etcd中。
至此，整个pod创建完毕。

情况二、如果面试官说的是使用deployment来创建pod，则可以这样回答：
1、首先，用户使用kubectl create命令或者kubectl apply命令提交了要创建一个deployment资源请求；
2、api-server收到创建资源的请求后，会对客户端操作进行身份认证，在客户端的~/.kube文件夹下，已经设置好了相关的用户认证信息，这样api-server会知道我是哪个用户，并对此用户进行鉴权，当api-server确定客户端的请求合法后，就会接受本次操作，并把相关的信息保存到etcd中，然后返回确认信息给客户端。
3、apiserver开始反馈etcd中过程创建的对象的变化，其他组件使用watch机制跟踪apiserver上的变动。
4、controller-manager组件会监听api-server的信息，controller-manager是有多个类型的，比如Deployment Controller, 它的作用就是负责监听Deployment，此时Deployment Controller发现有新的deployment要创建，那么它就会去创建一个ReplicaSet，一个ReplicaSet的产生，又被另一个叫做ReplicaSet Controller监听到了，紧接着它就会去分析ReplicaSet的语义，它了解到是要依照ReplicaSet的template去创建Pod, 它一看这个Pod并不存在，那么就新建此Pod，当Pod刚被创建时，它的nodeName属性值为空，代表着此Pod未被调度。
5、调度器Scheduler组件开始介入工作，Scheduler也是通过watch机制跟踪apiserver上的变动，发现有未调度的Pod，则根据内部算法、节点资源情况，pod定义的亲和性反亲和性等等，调度器会综合的选出一批候选节点，在候选节点中选择一个最优的节点，然后将pod绑定该该节点，将信息反馈给api-server。
6、kubelet组件布署于Node之上，它也是通过watch机制跟踪apiserver上的变动，监听到有一个Pod应该要被调度到自身所在Node上来，kubelet首先判断本地是否在此Pod，如果不存在，则会进入创建Pod流程，创建Pod有分为几种情况，第一种是容器不需要挂载外部存储，则相当于直接docker run把容器启动，但不会直接挂载docker网络，而是通过CNI调用网络插件配置容器网络，如果需要挂载外部存储，则还要调用CSI来挂载存储。kubelet创建完pod，将信息反馈给api-server，api-servier将pod信息写入etcd。
7、Pod建立成功后，ReplicaSet Controller会对其持续进行关注，如果Pod因意外或被我们手动退出，ReplicaSet Controller会知道，并创建新的Pod，以保持replicas数量期望值。

以上即使pod的调度过程。

```





## 简单描述一下pod的终止过程

```yaml
1、用户向apiserver发送删除pod对象的命令；
2、apiserver中的pod对象信息会随着时间的推移而更新，在宽限期内（默认30s），pod被视为dead；
3、将pod标记为terminating状态；
4、kubectl在监控到pod对象为terminating状态了就会启动pod关闭过程；
5、endpoint控制器监控到pod对象的关闭行为时将其从所有匹配到此endpoint的server资源endpoint列表中删除；
6、如果当前pod对象定义了preStop钩子处理器，则在其被标记为terminating后会意同步的方式启动执行；
7、pod对象中的容器进程收到停止信息；
8、宽限期结束后，若pod中还存在运行的进程，那么pod对象会收到立即终止的信息；
9、kubelet请求apiserver将此pod资源的宽限期设置为0从而完成删除操作，此时pod对用户已不可见。
```



## pod的生命周期有哪几种？

pod生命周期有的5种状态（也称5种相位），如下：

```
Pending（挂起）：API server已经创建pod，但是该pod还有一个或多个容器的镜像没有创建，包括正在下载镜像的过程；
Running（运行中）：Pod内所有的容器已经创建，且至少有一个容器处于运行状态、正在启动括正在重启状态；
Succeed（成功）：Pod内所有容器均已退出，且不会再重启；
Failed（失败）：Pod内所有容器均已退出，且至少有一个容器为退出失败状态
Unknown（未知）：某于某种原因apiserver无法获取该pod的状态，可能由于网络通行问题导致；
```



## pod一致处于pending状态一般有哪些情况，怎么排查？（重点，持续更新）

一个pod一开始创建的时候，它本身就是会处于pending状态，这时可能是正在拉取镜像，正在创建容器的过程。
如果等了一会发现pod一直处于pending状态，那么我们可以使用kubectl describe命令查看一下pod的Events详细信息。一般可能会有这么几种情况导致pod一直处于pending状态：

1. 调度器调度失败。Scheduer调度器无法为pod分配一个合适的node节点。而这又会有很多种情况，比如，node节点处在cpu、内存压力，导致无节点可调度；pod定义了资源请求，没有node节点满足资源请求；node节点上有污点而pod没有定义容忍；pod中定义了亲和性或反亲和性而没有节点满足这些亲和性或反亲和性；以上是调度器调度失败的几种情况。
2. pvc、pv无法动态创建。如果因为pvc或pv无法动态创建，那么pod也会一直处于pending状态，比如要使用StatefulSet 创建redis集群，因为粗心大意，定义的storageClassName名称写错了，那么会造成无法创建pvc，这种情况pod也会一直处于pending状态，或者，即使pvc是正常创建了，但是由于某些异常原因导致动态供应存储无法正常创建pv，那么这种情况pod也会一直处于pending状态。



## pod的初始化容器是干什么的？

init container，初始化容器用于在启动应用容器之前完成应用容器所需要的前置条件，初始化容器本质上和应用容器是一样的，但是初始化容器是仅允许一次就结束的任务，初始化容器具有两大特征：

```
1、初始化容器必须运行完成直至结束，若某初始化容器运行失败，那么kubernetes需要重启它直到成功完成；
2、初始化容器必须按照定义的顺序执行，当且仅当前一个初始化容器成功之后，后面的一个初始化容器才能运行；
```

![image-20231102202511228](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231102202511228.png)



## Pause容器

pause container作为pod 里其他所有container的 parent container，主要有两个职责：

- 是pod里其他容器共享Linux namespace的基础
- 扮演PID1的角色，负责处理僵尸进程



## pod的资源请求、限制如何定义？

pod的资源请求、资源限制可以直接在pod中定义，主要包括两块内容，limits，限制pod能使用的最大cpu和内存，requests，pod启动时申请的cpu和内存。

```yaml
 resources:					#资源配额
      limits:					#限制最大资源，上限
        cpu: 2					#CPU限制，单位是code数
        memory: 2G				#内存最大限制
      requests:					#请求资源（最小，下限）
        cpu: 1					#CPU请求，单位是code数
        memory: 500G			#内存最小请求
```



## pod的定义中有个command和args参数，这两个参数不会和docker镜像的entrypointc冲突吗？

不会。
在pod中定义的command参数用于指定容器的启动命令列表，如果不指定，则默认使用Dockerfile打包时的启动命令，args参数用于容器的启动命令需要的参数列表；
特别说明：
kubernetes中的command、args其实是实现覆盖dockerfile中的ENTRYPOINT的功能的。当

```
1、如果command和args均没有写，那么使用Dockerfile的配置；
2、如果command写了但args没写，那么Dockerfile默认的配置会被忽略，执行指定的command；
3、如果command没写但args写了，那么Dockerfile中的ENTRYPOINT的会被执行，使用当前args的参数；
4、如果command和args都写了，那么Dockerfile会被忽略，执行输入的command和args。
```



## 标签及标签选择器是什么，如何使用？

标签是键值对类型，标签可以附加到任何资源对象上，主要用于管理对象，查询和筛选。标签常被用于标签选择器的匹配度检查，从而完成资源筛选；一个资源可以定义一个或多个标签在其上面。

标签选择器，标签要与标签选择器结合在一起，标签选择器允许我们选择标记有特定标签的资源对象子集，如pod，并对这些特定标签的pod进行查询，删除等操作。
标签和标签选择器最重要的使用之一在于，在deployment中，在pod模板中定义pod的标签，然后在deployment定义标签选择器，这样就通过标签选择器来选择哪些pod是受其控制的，service也是通过标签选择器来关联哪些pod最后其服务后端pod。



## service是如何与pod关联的？

答案是通过标签选择器，每一个由deployment创建的pod都带有标签，这样，service就可以定义标签选择器来关联哪些pod是作为其后端了，就是这样，service就与pod管联在一起了。



## service的域名解析格式、pod的域名解析格式

service的DNS域名表示格式为`<servicename>.<namespace>.svc.<clusterdomain>`，servicename是service的名称，namespace是service所处的命名空间，clusterdomain是k8s集群设置的域名后缀，一般默认为 cluster.local，一般的，我们不会去改k8s集群设置的域名后缀，同时，当pod要链接的svc处于同一个命名空间时，可以省略`<namespace>`以及后面的.svc不写，这样，就可以有下面三种方式来表示svc的域名：

```
#查看k8s集群设置的域名后缀
cat /opt/kubernetes/config/kubelet-config.yml  | grep -i clusterDomain			#二进制安装的k8s集群，可以这样查看
cat  /etc/kubernetes/kubelet.conf 					#kubeadm安装的k8s集群，各个节点的kubelet.conf文件中的字段clusterDomain
kubectl  -n kube-system get cm coredns -oyaml		#coredns cm里面也可以看到
kubectl  exec -it deployment-busybox-567674bd67-lmrgw --  cat /etc/resolv.conf	#直接看pod里面的resolv.conf文件亦可
svc-nginx.default.svc.cluster.local				#完整的写法
svc-nginx.default								#带命名空间写法,省略了后面的.svc.<clusterdomain>
svc-nginx										#如果pod与svc在同一个命名空间，可以将命名空间省略不写

#于是，svc域名+svc的端口，我们就可以在pod里面访问svc对应的应用了，如下
wget http://svc-deployment-nginx.default.svc.cluster.local:80		#完整的写法
wget http://svc-deployment-nginx.default:80							#带命名空间写法
wget http://svc-deployment-nginx:80									#如果pod与svc在同一个命名空间，可以将命名空间省略不写
```

pod的DNS域名格式为：`<pod-ip>.<namespace>.pod.<clusterdomain>` ，其中，pod-ip需要使用-将ip直接的点替换掉，namespace为pod所在的命名空间，clusterdomain是k8s集群设置的域名后缀，一般默认为 cluster.local ，如果没有改变k8s集群默认的域名后缀，则可以省略该后缀不写。除此之外，其他的均不可省略，这一点与svc域名有所不同。
演示如下：

```
#进入default命名空间的busybox pod里面，测试下载文件
kubectl -n default exec -it deployment-busybox-567674bd67-lmrgw -- sh
wget 10-244-166-167.helm.pod.cluster.local:80		#可以正常下载，这里下载的是helm命名空间里的IP为10.244.166.167的pod
wget 10-244-166-167.helm.pod:80						#可以正常下载，这里把k8s集群设置的域名后缀默认省略了		
wget 10-244-166-143.default.pod:80					#可以正常下载，这里下载的是default命名空间里的IP为10.244.166.143的pod
wget 10-244-166-143.default:80						#报错了，错误写法，说明不能省略pod关键字
wget 10-244-166-143:80								#报错了，错误写法，说明不能省略命名空间和pod关键字
```

对于deployment、daemonsets等创建的无状态的pod，还还可以通过`<pod-ip>.<deployment-name>.<namespace>.svc.<clusterdomain>` 这样的域名访问。（这点存疑，一直测试失败，不指定是书中写错了还是什么）

对于StatefulSet创建的pod，statefulset.spec.serviceName字段解释如下：

```
[root@matser ~]# kubectl explain  statefulset.spec.serviceName
KIND:     StatefulSet
VERSION:  apps/v1
FIELD:    serviceName <string>
DESCRIPTION:
     serviceName is the name of the service that governs this StatefulSet. This
     service must exist before the StatefulSet, and is responsible for the
     network identity of the set. Pods get DNS/hostnames that follow the
     pattern: pod-specific-string.serviceName.default.svc.cluster.local where
     "pod-specific-string" is managed by the StatefulSet controller.
[root@matser ~]#
```

也就是说StatefulSet创建的pod，其pod的域名为：`pod-specific-string.serviceName.default.svc.cluster.local`，而pod-specific-string就是pod的名称。
例如：`redis-sts-0.redis-svc.default.svc.cluster.local:6379,redis-sts-1.redis-svc.default.svc.cluster.local:6379,redis-sts-2.redis-svc.default.svc.cluster.local:6379,redis-sts-3.redis-svc.default.svc.cluster.local:6379,redis-sts-4.redis-svc.default.svc.cluster.local:6379,redis-sts-5.redis-svc.default.svc.cluster.local:6379`，pod里面的应用程序就可以拿这串字符串去连接Redis集群了。



## service的类型有哪几种

service的类型一般有4中，分别是：

```
ClusterIP：表示service仅供集群内部使用，默认值就是ClusterIP类型
NodePort：表示service可以对外访问应用，会在每个节点上暴露一个端口，这样外部浏览器访问地址为：任意节点的IP：NodePort就能连上service了
LoadBalancer：表示service对外访问应用，这种类型的service是公有云环境下的service，此模式需要外部云厂商的支持，需要有一个公网IP地址
ExternalName：这种类型的service会把集群外部的服务引入集群内部，这样集群内直接访问service就可以间接的使用集群外部服务了

一般情况下，service都是ClusterIP类型的，通过ingress接入的外部流量。
```

+ External Service 的示例用法：

  <img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231104191457636.png" alt="image-20231104191457636" style="zoom:33%;" />

  <img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231104191532724.png" alt="image-20231104191532724" style="zoom:33%;" />



## 一个应用pod是如何发现service的，或者说，pod里面的容器用于是如何连接service的？

有两种方式，一种是通过环境变量，另一种是通过service的dns域名方式。

1. 环境变量：当pod被创建之后，k8s系统会自动为容器注入集群内有效的service名称和端口号等信息为环境变量的形式，这样容器应用直接通过取环境变量值就能访问service了，如`curl http://${WEBAPP_SERVICE_HOST}:{WEBAPP_SERVICE_PORT}`
2. DNS方式：使用dns域名解析的前提是k8s集群内有DNS域名解析服务器，默认k8s中会有一个CoreDNS作为k8s集群的默认DNS服务器提供域名解析服务器；service的DNS域名表示格式为`<servicename>.<namespace>.svc.<clusterdomain>`，servicename是service的名称，namespace是service所处的命名空间，clusterdomain是k8s集群设置的域名后缀，一般默认为 cluster.local ，这样容器应用直接通过service域名就能访问service了，如`wget http://svc-deployment-nginx.default.svc.cluster.local:80`，另外，service的port端口如果定义了名称，那么port也可以通过DNS进行解析，格式为：`_<portname>._<protocol>.<servicename>.<namespace>.svc.<clusterdomain>`





## K8s Service分发后端的策略

Service负载分发的策略有：RoundRobin和SessionAffinity

+ RoundRobin：默认为轮询模式，即轮询将请求转发到后端的各个Pod上。
+ SessionAffinity：基于客户端IP地址进行会话保持的模式，即第1次将某个客户端发起的请求转发到后端的某个Pod上，之后从相同的客户端发起的请求都将被转发到后端相同的Pod上。



## K8s ingress

+ Kubernetes的Ingress资源对象，用于将不同URL的访问请求转发到后端不同的Service，以实现HTTP层的业务路由机制。
+ Kubernetes 使用了Ingress策略和Ingress Controller，两者结合并实现了一个完整的Ingress负载均衡器。使用Ingress进行负载分发时，Ingress Controller基于Ingress 规则将客户端请求直接转发到Service对应的后端Endpoint（Pod）上，从而跳过kube-proxy的转发功能，kube-proxy不再起作用，全过程为：ingress controller +ingress 规则---->services。
+ 同时当Ingress Controller提供的是对外服务，则实际上实现的是边缘路由器的功能。
  
  



## 如何创建一个service代理外部的服务，或者换句话来说，在k8s集群内的应用如何访问外部的服务，如数据库服务，缓存服务等?

答：可以通过创建一个没有标签选择器的service来代理集群外部的服务。

1. 创建service时不指定selector标签选择器，但需要指定service的port端口、端口的name、端口协议等，这样创建出来的service因为没有指定标签选择器就不会自动创建endpoint；

2. 手动创建一个与service同名的endpoint，endpoint中定义外部服务的IP和端口，endpoint的名称一定要与service的名称一样，端口协议也要一样，端口的name也要与service的端口的name一样，不然endpoint不能与service进行关联。

   

   完成以上两步，k8s会自动将service和同名的endpoint进行关联，这样，k8s集群内的应用服务直接访问这个service就可以相当于访问外部的服务了。



## service、endpoint、kube-proxys三种的关系是什么？

+ **service** ：在kubernetes中，service是一种为一组功能相同的pod提供单一不变的接入点的资源。当service被建立时，service的IP和端口不会改变，这样外部的客户端（也可以是集群内部的客户端）通过service的IP和端口来建立链接，这些链接会被路由到提供该服务的任意一个pod上。通过这样的方式，客户端不需要知道每个单独提供服务的pod地址，这样pod就可以在集群中随时被创建或销毁。
+ **endpoint** ：service维护一个叫endpoint的资源列表，endpoint资源对象保存着service关联的pod的ip和端口。从表面上看，当pod消失，service会在endpoint列表中剔除pod，当有新的pod加入，service就会将pod ip加入endpoint列表；但是正在底层的逻辑是，endpoint的这种自动剔除、添加、更新pod的地址其实底层是由`endpoint controller`控制的，`endpoint controller`负责监听service和对应的pod副本的变化，如果监听到service被删除，则删除和该service同名的endpoint对象，如果监听到新的service被创建或者修改，则根据该service信息获取得相关pod列表，然后创建或更新service对应的endpoint对象，如果监听到pod事件，则更新它所对应的service的endpoint对象。
+ **kube-proxy** ：kube-proxy运行在node节点上，在Node节点上实现Pod网络代理，维护网络规则和四层负载均衡工作，`kube-proxy`会监听`api-server`中从而获取service和endpoint的变化情况，创建并维护路由规则以提供服务IP和负载均衡功能。简单理解此进程是Service的透明代理兼负载均衡器，其核心功能是将到某个Service的访问请求转发到后端的多个Pod实例上。



## kube-proxy的三种工作模式和原理

1. userspace模式

   + 该模式下kube-proxy会为每一个Service创建一个监听端口。发向Cluster IP的请求被lptables规则重定向到Kube-proxy监听的端口上，Kube-proxy根据LB算法选择一个提供服务的Pod并和其建立链接，以将请求转发到Pod上。

   + 该模式下，Kube-proxy 充当了一个四层Load balancer的角色。由于kube-proxy运行在userspace中，在进行转发处理时会增加两次内核和用户空间之间的数据拷贝，效率较另外两种模式低一些；好处是当后端的Pod不可用时，kube-proxy可以重试其他Pod。

2. iptables模式

   + 为了避免增加内核和用户空间的数据拷贝操作，提高转发效率，Kube-proxy提供了iptables模式。在该模式下，Kube-proxy为service后端的每个Pod创建对应的iptables规则，直接将发向ClusterIP的请求重定向到一个Pod IP。

   + 该模式下Kube-proxy不承担四层代理的角色，只负责创建iptables规则。该模式的优点是较userspace模式效率更高，但不能提供灵活的LB策略，当后端Pod不可用时也无法进行重试。

3. IPVS：该模式和iptables类似，kube-proxy监控Pod的变化并创建相应的ipvs rules。
   + ipvs也是在kernel模式下通过netfitter实现的，但采用了hash table来存储规则，因此在规则较多的情况下，lpvs相对iptables转发效率更高。除此以外，ipvs支持更多的LB算法。如果要设置kube-proxy为ipvs模式，必须在操作系统中安装IPVS内核模块。







## 无头service和普通的service有什么区别，无头service使用场景是什么？

+ 无头service没有cluster ip，在定义service时将 `service.spec.clusterIP：None`，就表示创建的是无头service。
+ 普通的service是用于为一组后端pod提供请求连接的负载均衡，让客户端能通过固定的service ip地址来访问pod，这类的pod是没有状态的，同时service还具有负载均衡和服务发现的功能。普通service跟我们平时使用的nginx反向代理很相识。
+ 但是，试想这样一种情况，有6个redis pod ,它们相互之间要通信并要组成一个redis集群，不在需要所谓的service负载均衡，这时无头service就是派上用场了，无头service由于没有cluster ip，kube-proxy就不会处理它也就不会对它生成规则负载均衡，无头service直接绑定的是pod 的ip。无头service仍会有标签选择器，有标签选择器就会有endpoint资源。
+ 使用场景：无头service一般用于有状态的应用场景，如Kaka集群、Redis集群等，这类pod之间需要相互通信相互组成集群，不在需要所谓的service负载均衡。



以下是一个具体的例子：

**场景**：假设你正在运行一个有状态的数据库集群，该集群包括多个数据库 Pod。这些数据库 Pod 需要相互复制数据以保持同步。你希望在数据库集群中的每个 Pod 之间建立直接的连接以进行数据复制。

**解决方案**：你可以使用无头 Service 来解决这个问题。在这个案例中，Service 不提供负载均衡，而是直接将 DNS 解析指向每个数据库 Pod 的 IP 地址。这样，你的应用程序可以通过无头 Service 的 DNS 来查找数据库 Pod 的 IP 地址，并与特定的数据库 Pod 建立连接。



## K8s DaemonSet类型的资源特性

DaemonSet资源对象会在每个K8s集群中的节点上运行，并且每个节点只能运行一个pod，这是它和deployment资源对象的最大也是唯一的区别。因此，在定义yaml文件中，不支持定义replicas。

它的一般使用场景如下：

+ 在去做每个节点的日志收集工作。
+ 监控每个节点的运行状态



## K8s自动扩容机制HPA

K8s使用Horizontal Pod Autoscaler（HPA）的控制器实现基于CPU使用率进行自动Pod扩缩容的功能。HPA控制器周期性地监测目标Pod的资源性能指标，并与HPA资源对象中的扩缩容条件进行对比，在满足条件时对Pod副本数量进行调整。

HPA原理
K8s中的某个Metrics Server持续采集所有pod副本的指标数据。HPA控制器通过Metric Server的API获取这些数据，基于用户定义的扩缩容规则进行计算，得到目标Pod副本数量。
当目标Pod副本数量与当前副本数量不同时，HPA控制器就会向Pod的副本控制器（Deployment、RC或ReplicaSet）发起scale操作，调整Pod的副本数量，完成扩缩容操作。



## deployment怎么扩容或缩容？

直接修改pod副本数即可，可以通过下面的方式来修改pod副本数：

1. 直接修改yaml文件的replicas字段数值，然后`kubectl<span> </span>apply<span> </span>-f xxx.yaml`来实现更新；
2. 使用`kubectl edit deployment xxx` 修改replicas来实现在线更新；
3. 使用`kubectl scale --replicas=5 deployment/deployment-nginx`命令来扩容缩容。



## deployment的更新升级策略有哪些？

deployment的升级策略主要有两种。

1. Recreate 重建更新：这种更新策略会杀掉所有正在运行的pod，然后再重新创建的pod；
2. rollingUpdate 滚动更新：这种更新策略，deployment会以滚动更新的方式来逐个更新pod，同时通过设置滚动更新的两个参数`maxUnavailable、maxSurge`来控制更新的过程。



## StatefulSet 和 Deployment的区别

Kubernetes 中的 StatefulSet 和 Deployment 都是控制器（Controller）类型，用于管理容器化应用程序的部署，但它们在有状态和无状态应用程序方面有一些关键区别。以下是 StatefulSet 和 Deployment 的主要区别：



**StatefulSet：**

1. **有状态应用程序**：StatefulSet 专为有状态应用程序设计。它提供了对每个 Pod 的稳定标识、稳定的网络标识符和持久卷的支持，这对于数据库、消息队列等有状态应用程序非常重要。
2. **Pod 的唯一性**：StatefulSet 为每个 Pod 提供唯一的名称，通常采用 `name-0`、`name-1` 的格式，以确保有状态应用程序的每个实例具有稳定的标识。
3. **滚动更新**：StatefulSet 支持有序的滚动更新，确保在升级应用程序版本时，Pod 按顺序启动和终止，以保持数据的完整性和可用性。
4. **稳定的网络标识符**：每个 Pod 在 DNS 中都有稳定的网络标识符，允许其他应用程序以可预测的方式与这些 Pod 通信。
5. **持久卷**：StatefulSet 允许将持久卷（Persistent Volumes）与 Pod 绑定，确保数据在 Pod 重新部署或故障切换时不会丢失。



**Deployment：**

1. **无状态应用程序**：Deployment 用于管理无状态应用程序，例如 Web 服务器、微服务等。它不提供有状态应用程序所需的稳定标识和网络标识符。
2. **副本数量控制**：Deployment 用于控制 Pod 的副本数量，以确保指定数量的 Pod 在运行。它负责自动扩展或缩减副本数量，以维持所需的状态。
3. **滚动更新**：Deployment 支持滚动更新，允许你在不中断服务的情况下升级应用程序版本。
4. **可伸缩性**：Deployment 允许你根据负载情况自动调整 Pod 的数量，以应对流量变化。



总之，StatefulSet 用于有状态应用程序，提供了稳定的标识、网络标识符和持久卷的支持，以确保数据完整性和可用性。Deployment 用于无状态应用程序，主要用于自动管理副本数量和滚动更新应用程序。在选择 StatefulSet 或 Deployment 时，要根据应用程序的特性和需求来确定哪个控制器更适合你的用例。



## deployment的滚动更新策略有两个特别主要的参数，解释一下它们是什么意思？

deployment的滚动更新策略，rollingUpdate 策略，主要有两个参数，maxUnavailable、maxSurge。

```yaml
maxUnavailable：最大不可用数，maxUnavailable用于指定deployment在更新的过程中不可用状态的pod的最大数量，maxUnavailable的值可以是一个整数值，也可以是pod期望副本的百分比，如25%，计算时向下取整。

maxSurge：最大激增数，maxSurge指定deployment在更新的过程中pod的总数量最大能超过pod副本数多少个，maxUnavailable的值可以是一个整数值，也可以是pod期望副本的百分比，如25%，计算时向上取整。
```



## deployment更新的命令有哪些？

可以通过三种方式来实现更新deployment。

1. 直接修改yaml文件的镜像版本，然后kubectl<span> </span>apply<span> </span>-f xxx.yaml来实现更新；
2. 使用kubectl<span> </span>edit<span> </span>deployment xxx 实现在线更新；
3. 使用kubectl<span> </span>set<span> </span>image deployment/nginx<span> </span>busybox=busybox<span> </span>nginx=nginx:1.9.1 命令来更新。





## deployment的更新过程?

deployment是通过控制replicaset来实现，由replicaset真正创建pod副本，每更新一次deployment，都会创建新的replicaset，下面来举例deployment的更新过程：

假设要升级一个nginx-deployment的版本镜像为nginx:1.9，deployment的定义滚动更新参数如下：

```
replicas: 3
deployment.spec.strategy.type: RollingUpdate
maxUnavailable：25%
maxSurge：25%
```



通过计算我们得出，3*25%=0.75，maxUnavailable是向下取整，则maxUnavailable=0，maxSurge是向上取整，则maxSurge=1，所以我们得出在整个deployment升级镜像过程中，不管旧的pod和新的pod是如何创建消亡的，pod总数最大不能超过3+maxSurge=4个，最大pod不可用数3-maxUnavailable=3个。



现在具体讲一下deployment的更新升级过程：
使用`kubectl set image deployment/nginx nginx=nginx:1.9 --record` 命令来更新；

1. deployment创建一个新的replaceset，先新增1个新版本pod，此时pod总数为4个，不能再新增了，再新增就超过pod总数4个了；旧=3，新=1，总=4；
2. 减少一个旧版本的pod，此时pod总数为3个，这时不能再减少了，再减少就不满足最大pod不可用数3个了；旧=2，新=1，总=3；
3. 再新增一个新版本的pod，此时pod总数为4个，不能再新增了；旧=2，新=2，总=4；
4. 减少一个旧版本的pod，此时pod总数为3个，这时不能再减少了；旧=1，新=2，总=3；
5. 再新增一个新版本的pod，此时pod总数为4个，不能再新增了；旧=1，新=3，总=4；
6. 减少一个旧版本的pod，此时pod总数为3个，更新完成，pod都是新版本了；旧=0，新=3，总=3；



## deployment的回滚使用什么命令

+ 在升级deployment时kubectl set image 命令加上 --record 参数可以记录具体的升级历史信息

+ 使用`kubectl rollout history deployment/deployment-nginx` 命令来查看指定的deployment升级历史记录，如果需要回滚到某个指定的版本，可以使用`kubectl rollout undo deployment/deployment-nginx --to-revision=2` 命令来实现。



## 有哪些PV，作用分别是什么?

| 卷          | 作用                                                         | 常用场景                                                     |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| emptyDir    | 用于存储临时数据的简单空目录                                 | 一个pod中的多个容器需要共享彼此的数据 ，emptyDir的数据随着容器的消亡也会销毁 |
| hostPath    | 用于将目录从工作节点的文件系统挂载到pod中                    | 不常用，缺点是，pod的调度不是固定的，也就是当pod消失后deployment重新创建一个pod，而这pod如果不是被调度到之前pod的节点，那么该pod就不能访问之前的数据 |
| configMap   | 用于将非敏感的数据保存到键值对中，使用时可以使用作为环境变量、命令行参数arg，存储卷被pods挂载使用 | 将应用程序的不敏感配置文件创建为configmap卷，在pod中挂载configmap卷，可是实现热更新 |
| secret      | 主要用于存储和管理一些敏感数据，然后通过在 Pod 的容器里挂载 Volume 的方式或者环境变量的方式访问到这些 Secret 里保存的信息了，pod会自动解密Secret 的信息 | 将应用程序的账号密码等敏感信息通过secret卷的形式挂载到pod中使用 |
| downwardApi | 主要用于暴露pod元数据，如pod的名字                           | pod中的应用程序需要指定pod的name等元数据，就可以通过downwardApi 卷的形式挂载给pod使用 |
| projected   | 这是一种特殊的卷，用于将上面这些卷一次性的挂载给pod使用      | 将上面这些卷一次性的挂载给pod使用                            |
| pvc         | pvc是存储卷声明                                              | 通常会创建pvc表示对存储的申请，然后在pod中使用pvc            |
| 网络存储卷  | pod挂载网络存储卷，这样就能将数据持久化到后端的存储里        | 常见的网络存储卷有nfs存储、glusterfs 卷、ceph rbd存储卷      |



## pv的访问模式有哪几种

pv的访问模式有3种，如下：

```
ReadWriteOnce，简写：RWO	表示，只仅允许单个节点以读写方式挂载；
ReadOnlyMany，简写：ROX	表示，可以被许多节点以只读方式挂载；
ReadWriteMany，简写：RWX	表示，可以被多个节点以读写方式挂载；
```



## pv的回收策略有哪几种

主要有2中回收策略：retain 保留、delete 删除。

+ Retain：保留，该策略允许手动回收资源，当删除PVC时，PV仍然存在，PV被视为已释放，管理员可以手动回收卷。
+ Delete：删除，如果Volume插件支持，删除PVC时会同时删除PV，动态卷默认为Delete，目前支持Delete的存储后端包括AWS EBS，GCE PD，Azure Disk，OpenStack Cinder等。
+ Recycle：回收，如果Volume插件支持，Recycle策略会对卷执行rm -rf清理该PV，并使其可用于下一个新的PVC，但是本策略将来会被弃用，目前只有NFS和HostPath支持该策略。（这种策略已经被废弃，不用记）\



## 在pv的生命周期中，一般有几种状态

+ Available: 表示pv已经创建正常，处于可用状态；
+ Bound: 表示pv已经被某个pvc绑定，注意，一个pv一旦被某个pvc绑定，那么该pvc就独占该pv，其他pvc不能再与该pv绑定；
+ Released: 表示pvc被删除了，pv状态就会变成已释放；
+ Failed: 表示pv的自动回收失败；





## 存储类的资源回收策略:

+ Retain：保留，该策略允许手动回收资源，当删除PVC时，PV仍然存在，PV被视为已释放，管理员可以手动回收卷。
+ Delete (默认)：删除，如果Volume插件支持，删除PVC时会同时删除PV，动态卷默认为Delete，目前支持Delete的存储后端包括AWS EBS，GCE PD，Azure Disk，OpenStack Cinder等。

注意：使用存储类动态创建的pv默认继承存储类的回收策略，当然当pv创建后你也可以手动修改pv的回收策略。



## 怎么使一个node脱离集群调度，比如要停机维护单又不能影响业务应用

crodon背后的原理其实就是打污点
使用kubectl drain 命令



## pv存储空间不足怎么扩容?

一般的，我们会使用动态分配存储资源，在创建storageclass时指定参数 allowVolumeExpansion：true，表示允许用户通过修改pvc申请的存储空间自动完成pv的扩容，当增大pvc的存储空间时，不会重新创建一个pv，而是扩容其绑定的后端pv。这样就能完成扩容了。但是allowVolumeExpansion这个特性只支持扩容空间不支持减少空间。



## PV中的claimref是什么意思

![image-20231104194309977](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231104194309977.png)





## K8s网络模型

Kubernetes网络模型中每个Pod都拥有一个独立的IP地址，并假定所有Pod都在一个可以直接连通的、扁平的网络空间中。所以不管它们是否运行在同一个Node（宿主机）中，都要求它们可以直接通过对方的IP进行访问。设计这个原则的原因是，用户不需要额外考虑如何建立Pod之间的连接，也不需要考虑如何将容器端口映射到主机端口等问题。

+ ### CNI模型

  + CNI提供了一种应用容器的插件化网络解决方案，定义==对容器网络进行操作和配置的规范==，通过插件的形式对CNI接口进行实现。CNI仅关注在创建容器时分配网络资源，和在销毁容器时删除网络资源。在CNI模型中只涉及两个概念：容器和网络。

    容器（Container）：是拥有独立Linux网络命名空间的环境，例如使用Docker或rkt创建的容器。容器需要拥有自己的Linux网络命名空间，这是加入网络的必要条件。
    网络（Network）：表示可以互连的一组实体，这些实体拥有各自独立、唯一的IP地址，可以是容器、物理机或者其他网络设备（比如路由器）等。
    对容器网络的设置和操作都通过插件（Plugin）进行具体实现，CNI插件包括两种类型：CNI Plugin 和IPAM（IPAddress Management）Plugin。CNI Plugin负责为容器配置网络资源，IPAM Plugin 负责对容器的IP地址进行分配和管理。IPAM Plugin作为CNI PLugin的一部分，与CNIPlugin协同工作。

+ ### Kubernetes网络策略

  + 为实现细粒度的容器间网络访问隔离策略，Kubernetes 引入Network Policy。
    Network Policy的主要功能是对Pod间的网络通信进行限制和准入控制，设置允许访问或禁止访问的客户端Pod列表。Network Policy 定义网络策略，配合策略控制器（Policy Controller）进行策略的实现。
  + Network Policy的工作原理主要为：policy controller 需要实现一个API Listener，监听用户设置的Network Policy定义，并将网络访问规则通过各Node的Agent进行实际设置（Agent则需要通过CNI网络插件实现）。



## K8s中flannel的作用

Flannel可以用于Kubernetes底层网络的实现，主要作用有：

+ 它能协助Kubernetes，给每一个Node上的Docker容器都分配互相不冲突的IP地址。
+ 它能在这些IP地址之间建立一个覆盖网络（Overlay Network），通过这个覆盖网络，将数据包原封不动地传递到目标容器内。



> 覆盖网络：简单说来覆盖网络就是应用层网络，它是面向应用层的，不考虑或很少考虑网络层，物理层的问题。
> 详细说来，覆盖网络是指建立在另一个网络上的网络。该网络中的结点可以看作通过虚拟或逻辑链路而连接起来的



+ **也就是将TCP数据包装在另一种网络包里面进行路由转发和通信**，目前已经支持UDP、VXLAN、AWS VPC和GCE路由等数据转发方式。

+ 默认的节点间数据通信方式是UDP转发。

+ 工作原理：

  + 数据从源容器中发出后，经由所在主机的 dockero虚拟网卡转发到ftannel0虚拟网卡（先可以不经过dockero网卡，使用cni模式），这是个P2P的虚拟网卡，flanneld服务监听在网卡的另外一端。
  + Flannel通过Etcd服务维护了一张节点间的路由表，详细记录了各节点子网网段。
  + 源主机的flanneld服务将原本的数据内容UDP封装后根据自己的路由表投递给目的节点的flanneld服务，数据到达以后被解包，然后直接进入目的节点的flannel0虚拟网卡，然后被转发到目的主机的dockero虚拟网卡，最后就像本机容器通信一下的有docker0路由到达目标容器。

  flannel在进行路由转发的基础上进行了封包解包的操作，这样浪费了CPU的计算资源。
  





## K8s Calico网络组建实现原理

+ Calico是一个基于BGP的纯三层的网络方案，与OpenStack、Kubernetes、AwS、GCE等云平台都能够良好地集成。
+ Calico在每个计算节点都利用Linux Kernel实现了一个高效的vRouter 来负责数据转发。每个vRouter都通过BGP协议把在本节点上运行的容器的路由信息向整个Calico网络广播，并自动设置到达其他节点的路由转发规则。
+ Calico 保证所有容器之间的数据流量都是通过IP路由的方式完成互联互通的。Calico节点组网时可以直接利用数据中心的网络结构（L2或者L3），不需要额外的NAT、隧道或者Overlay Network，没有额外的封包解包，能够节约CPU运算，提高网络效率。
+ 工作原理
  + calico根据iptables规则进行路由转发，并没有进行封包，解包的过程，这和flannel比起来效率就会快多
    calico 包括如下重要组件：Felix，etcd，BGP Client，BGP Route Reflector。下面分别说明一下这些组件。
  + Felix：主要负责路由配置以及ACLs规则的配置以及下发，它存在在每个node节点
  + etcd：分布式键值存储，主要负责网络元数据一致性，确保Calico网络状态的准确性，可以与kubernetes共用；
  + BGPClient（BIRD），主要负责把Felix写入kernel的路由信息分发到当前 Calico网络，确保 workload间的通信的有效性；
  + BGPRoute Reflector（BIRD），大规模部署时使用，摒弃所有节点互联的mesh模式，通过一个或者多个BGPRoute Reftector来完成集中式的路由分发
    

## 如何使用EFK实现日志的统一管理

在K8s集群环境中，通常一个完整的应用或服务涉及组件过多，建议对日志系统进行集中化管理，通常采用EFK实现。

EFK是Elasticsearch、Fluentd和Kibana的组合，其各组件功能如下：

+ Elasticsearch：是一个搜索引擎，负责存储日志并提供查询接口。
+ Fluentd（或使用filebeat）：负责从K8s搜集日志，每个node节点上面的fluentd监控并收集该节点上面的系统日志，并将处理过后的日志信息发送给Elasticsearch。
+ Kibana：提供了一个Web GUI，用户可以浏览和搜索存储在Elasticsearch中的日志。



通过在每台node上部署一个以DaemonSet方式运行的fluentd 来收集每台node上的日志。Fluentd将docker日志目录/var/lib/docker/containers和/var/log目录挂载到Pod中，然后Pod会在node节点的/var/log/pods目录中创建新的目录，可以区别不同的容器日志输出，该目录下有一个日志文件链接到
/var/lib/docker/contianers目录下的容器日志输出。



## K8s如何进行优雅的节点关机维护

由于K8s节点运行大量Pod，因此在进行关机维护之前，**建议先使用kubectl drain将该节点的Pod进行驱逐**，然后进行关机维护。



## Helm及其优势

Helm是Kubernetes的软件包管理工具。类似Ubuntu中使用的apt、Centos中使用的yum或者Python中的pip一样。

Helm能够将一组K8S资源打包统一管理，是查找、共享和使用为Kubernetes构建的软件的最佳方式。

Helm中通常每个包称为一个Chart，一个Chart是一个目录（一般情况下会将目录进行打包压缩，形成name-version.tgz格式的单一文件，方便传输和存储）。



在Kubernetes中部署一个可以使用的应用，需要涉及到很多的Kubernetes资源的共同协作。使用helm则具有如下优势：

+ 统一管理、配置和更新这些分散的k8s的应用资源文件；
+ 分发和复用一套应用模板；
+ 将应用的一系列资源当做一个软件包管理。
+ 对于应用发布者而言，可以通过Helm打包应用、管理应用依赖关系、管理应用版本并发布应用到软件仓库。
  对于使用者而言，使用Helm后不需要编写复杂的应用部署文件，可以以简单的方式在K8s上查找、安装、升级、回滚、卸载应用程序。





## 项目中遇到的问题

### 记录1：

> 测试环境二进制搭建etcd集群，etcd集群出现2个leader的现象。
>
> 1. 问题现象就是：刚搭建的k8s集群，是测试环境的，搭建完成之后发现，使用kubectl get nodes 显示没有资源，kubectl get namespace 一会能正常显示全部的命名空间，一会又显示不了命名空间，这种奇怪情况。
> 2. 当时经验不是很足，第一点想到的是不是因为网络插件calico没装导致的，但是想想，即使没有安装网络插件，最多是node节点状态是notready，也不可能是没有资源发现呀；
> 3. 然后想到etcd数据库，k8s的资源都是存储在etcd数据库中的；
> 4. 查看etcd进程服务的启动状态，发现etcd服务状态是处于running状态，但是日志有大量的报错信息，日志大概报错信息就是集群节点的id不匹配，存在冲突等等报错信息；
> 5. 使用etcdctl命令查看etcd集群的健康状态，发现集群是health状态，但是居然显示有2个leader，这很奇怪（当初安装etcd的时候其实也只是简单看到了集群是健康状态，然后没注意到有2个leader，也没太关注etcd服务进程的日志报错信息，以为etcd集群状态是health状态就可以了）
> 6. 现在etcd出现了2个leader，肯定是存在问题的；
> 7. 全部检测一遍etcd的各个节点的配置文件，确认配置文件里面各个参数配置都没有问题，重启etcd集群，报错信息仍未解决，仍然存在2个leader；
> 8. 尝试把其中一个leader节点踢出集群，然后再重新添加它进入集群，仍然是报错，仍然显示有2个leader；
> 9. 尝试重新生成etcd的证书，重新颁发etcd的证书，问题仍然存在，仍然显示有2个leader；日志仍是报错集群节点的id不匹配，存在冲突；
> 10. 计算etcd命令的MD5值，确保各个节点的etcd命令是相同的，确保在scp传输的时候没有损耗等等，问题仍未解决；
> 11. 无解，请求同事，架构师介入帮忙排查问题，仍未解决；
> 12. 删除全部etcd相关的文件，重新部署etcd集群，etcd集群正常了，现在只有一个leader，使用命令kubectl get nodes 查看节点，也能正常显示了；
> 13. 最终问题的原因也没有定位出来，只能怀疑是环境问题了，由于是刚部署的k8s测试环境，etcd里面没有数据，所以可以删除重新创建etcd集群，如果是线上环境的etcd集群出现这种问题，就不能随便删除etcd集群了，必须要先进行数据备份才能进行其他方法的处理。



### 记录2：

> pod一直在pending，比如kafka对cpu有最低需求，无解
>
> pvc pending之后PVC问题，用nfs-provisionor，比如装nfs忘记从node上也装
>
> 比如k8s版本问题，装的时候多一步，弃用docker
>
> 比如有时候服务器官方的镜像拉取不到，自己上传dockerhub
>
> 比如连带的openstack的问题

![image-20231103150714290](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231103150714290.png)





## 为什么分布式要偶数个节点

![image-20230826004304620](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230826004304620.png)



## 简述etcd适应的场景

+ **服务发现**（Service Discovery）：服务发现主要解决在同一个分布式集群中的进程或服务，要如何才能找到对方并建立连接。本质上来说，服务发现就是想要了解集群中是否有进程在监听udp或tcp端口，并且通过名字就可以查找和连接。
+ **消息发布与订阅**：在分布式系统中，最适用的一种组件间通信方式就是消息发布与订阅。即构建一个配置共享中心，数据提供者在这个配置中心发布消息，而消息使用者则订阅他们关心的主题，一旦主题有消息发布，就会实时通知订阅者。通过这种方式可以做到分布式系统配置的集中式管理与动态更新。应用中用到的一些配置信息放到etcd上进行集中管理。
+ **负载均衡**：在分布式系统中，为了保证服务的高可用以及数据的一致性，通常都会把数据和服务部署多分，以此达到对等服务，即使其中的某一个服务失效了，也不影响使用。etcd本身分布式架构存储的信息访问支持负载均衡。etcd集群化以后，每个etcd的核心节点都可以处理用户的请求。所以，把数据量小但是访问频繁的消息数据直接存储到etcd中也可以实现负载均衡的效果。
+ **分布式通知与协调**：与消息发布和订阅类似，都用到了etcd中的watcher机制，通过注册与异步通知机制，实现分布式环境下不同系统之间的通知与协调，从而对数据变更做到实时处理。
+ **分布式锁**：因为etcd使用Raft算法保持了数据的强一致性，某次操作存储到集群中的值必然是全局一致的，所以很容易实现分布式锁。锁服务有两种使用方式，一是保持独占，二是控制时序。
  集群监控与Leader竞选：通过etcd来进行监控实现起来非常简单并且实时性强。





