---
title: Ch04 Ribbon负载均衡
date: 2022-04-12
tags:
 - Java
 - Spring Cloud
 - Ribbon
categories:
 - Spring Cloud

---

# Ch04 Ribbon负载均衡



原理：![image-20220412001639210](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220412001639210.png)

Ctrl+shift+F在英文輸入法下全局搜索，中文输入法下切换简体繁体

Ctrl+H查找实现类

那么我们发出的请求明明是http://userservice/user/1，怎么变成了http://localhost:8081的呢？

显然有人帮我们根据service名称，获取到了服务实例的ip和端口。它就是`LoadBalancerInterceptor`，这个类会在对RestTemplate的请求进行拦截，然后从Eureka根据服务id获取服务列表，随后利用负载均衡算法得到真实的服务地址信息，替换服务id。

我们进行源码跟踪：

### 1）LoadBalancerIntercepor

![1525620483637](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1525620483637.png)

可以看到这里的intercept方法，拦截了用户的HttpRequest请求，然后做了几件事：

- `request.getURI()`：获取请求uri，本例中就是 http://user-service/user/8
- `originalUri.getHost()`：获取uri路径的主机名，其实就是服务id，`user-service`
- `this.loadBalancer.execute()`：处理服务id，和用户请求。

这里的`this.loadBalancer`是`LoadBalancerClient`类型，我们继续跟入。



### 2）LoadBalancerClient

继续跟入execute方法：

![1525620787090](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1525620787090.png)

代码是这样的：

- getLoadBalancer(serviceId)：根据服务id获取ILoadBalancer，而ILoadBalancer会拿着服务id去eureka中获取服务列表并保存起来。
- getServer(loadBalancer)：利用内置的负载均衡算法，从服务列表中选择一个。本例中，可以看到获取了8082端口的服务



放行后，再次访问并跟踪，发现获取的是8081：

 ![1525620835911](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1525620835911.png)

果然实现了负载均衡。



### 3）负载均衡策略IRule

在刚才的代码中，可以看到获取服务使通过一个`getServer`方法来做负载均衡:

 ![1525620835911](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1525620835911.png)

我们继续跟入：

![1544361421671](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1544361421671.png)

继续跟踪源码chooseServer方法，发现这么一段代码：

 ![1525622652849](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1525622652849.png)

我们看看这个rule是谁：

 ![1525622699666](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1525622699666.png)

这里的rule默认值是一个`RoundRobinRule`，看类的介绍：

 ![1525622754316](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/1525622754316.png)

轮询



### 4）总结

SpringCloudRibbon的底层采用了一个拦截器，拦截了RestTemplate发出的请求，对地址做了修改。用一幅图来总结一下：

![image-20210713224724673](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210713224724673.png)



基本流程如下：

- 拦截我们的RestTemplate请求http://userservice/user/1
- RibbonLoadBalancerClient会从请求url中获取服务名称，也就是user-service
- DynamicServerListLoadBalancer根据user-service到eureka拉取服务列表
- eureka返回列表，localhost:8081、localhost:8082
- IRule利用内置负载均衡规则，从列表中选择一个，例如localhost:8081
- RibbonLoadBalancerClient修改请求地址，用localhost:8081替代userservice，得到http://localhost:8081/user/1，发起真实请求



## 负载均衡策略

负载均衡的规则都定义在IRule接口中，而IRule有很多不同的实现类：

![image-20210713225653000](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210713225653000.png)

不同规则的含义如下：

| **内置负载均衡规则类**    | **规则描述**                                                 |
| ------------------------- | ------------------------------------------------------------ |
| RoundRobinRule            | 简单轮询服务列表来选择服务器。它是Ribbon默认的负载均衡规则。 |
| AvailabilityFilteringRule | 对以下两种服务器进行忽略：   （1）在默认情况下，这台服务器如果3次连接失败，这台服务器就会被设置为“短路”状态。短路状态将持续30秒，如果再次连接失败，短路的持续时间就会几何级地增加。  （2）并发数过高的服务器。如果一个服务器的并发连接数过高，配置了AvailabilityFilteringRule规则的客户端也会将其忽略。并发连接数的上限，可以由客户端的<clientName>.<clientConfigNameSpace>.ActiveConnectionsLimit属性进行配置。 |
| WeightedResponseTimeRule  | 为每一个服务器赋予一个权重值。服务器响应时间越长，这个服务器的权重就越小。这个规则会随机选择服务器，这个权重值会影响服务器的选择。 |
| **ZoneAvoidanceRule**     | 以区域可用的服务器为基础进行服务器的选择。使用Zone对服务器进行分类，这个Zone可以理解为一个机房、一个机架等。而后再对Zone内的多个服务做轮询。优先选择和自己靠近的服务器上的服务 |
| BestAvailableRule         | 忽略那些短路的服务器，并选择并发数较低的服务器。             |
| RandomRule                | 随机选择一个可用的服务器。                                   |
| RetryRule                 | 重试机制的选择逻辑                                           |



默认的实现就是ZoneAvoidanceRule，是一种轮询方案



### 自定义负载均衡策略

通过定义IRule实现可以修改负载均衡规则，有两种方式：

1. 代码方式：在order-service中的OrderApplication类中，定义一个新的IRule：不管访问哪个微服务都使用这个规则

```java
@Bean
public IRule randomRule(){
    return new RandomRule();
}
```



2. 配置文件方式：在order-service的application.yml文件中，添加新的配置也可以修改规则：可以指定某个具体的微服务使用这个规则

```yaml
userservice: # 给某个微服务配置负载均衡规则，这里是userservice服务
  ribbon:
    NFLoadBalancerRuleClassName: com.netflix.loadbalancer.RandomRule # 负载均衡规则 
```



> **注意**，一般用默认的负载均衡规则，不做修改。



## 饥饿加载

Ribbon默认是采用懒加载，即第一次访问时才会去创建LoadBalanceClient，请求时间会很长。

而饥饿加载则会在项目启动时创建，降低第一次访问的耗时，通过下面配置开启饥饿加载：

```yaml
ribbon:
  eager-load:
    enabled: true
    clients:  #指定饥饿加载的服务名称，是一个list
    	- userservice
    	- xxservice	   
```



## 总结

![image-20220412004958615](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220412004958615.png)
