---
title: Ch01 Client
date: 2023-07-19
tags:
 - K8s operator
 - Go
categories:
 - K8s


---

# RestClient

![image-20230930232030187](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230930232030187.png)

k8s中所有的资源在go中都实现了runtime.object

![image-20231001151300935](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001151300935.png)

```go
package main

import (
	"context"
	v1 "k8s.io/api/core/v1"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
)

func main() {
	//config, 用来连接k8s
	//master url指定为空的话，会从kubeconfig里获取
	config, err := clientcmd.BuildConfigFromFlags("", "C:\\Users\\YHR\\.kube\\config")
	if err != nil {
		panic(err)
	}
	config.GroupVersion = &v1.SchemeGroupVersion
	config.NegotiatedSerializer = scheme.Codecs
	config.APIPath = "/api"

	//client
	restClient, err := rest.RESTClientFor(config)
	if err != nil {
		panic(err)
	}

	//get data
	//拼接http请求的url，获取集群里的pod
	pod := v1.Pod{}
	err = restClient.Get().Namespace("kubernetes-dashboard").Resource("pods").Name("dashboard-metrics-scraper-6ccbc78cd8-5xx8f").Do(context.TODO()).Into(&pod)

	if err != nil {
		println(err)
	} else {
		println(pod.Name)
	}

}

```





# ClientSet

![image-20231001211622111](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001211622111.png)

```sh
go mod tidy
```

```go
//client Set
	config, err := clientcmd.BuildConfigFromFlags("", "C:\\Users\\YHR\\.kube\\config")
	if err != nil {
		panic(err)
	}
	clientset, err := kubernetes.NewForConfig(config)
	if err != nil {
		panic(err)
	}
	coreV1 := clientset.CoreV1()
	pod, err := coreV1.Pods("kubernetes-dashboard").Get(context.TODO(), "dashboard-metrics-scraper-6ccbc78cd8-5xx8f", v1.GetOptions{})
	if err != nil {
		println(err)
	} else {
		println(pod.Name)
	}
```



# Other Client

![image-20231001211911830](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001211911830.png)

![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001212053481.png)



# Reflecter



![image-20231001214907936](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001214907936.png)

+ 可以通过kubectl proxy来在外部访问k8s内的API

+ 列出所有的pod

  ![image-20231001215421160](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001215421160.png)

+ 监听pod事件![image-20231001215554717](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001215554717.png)



![image-20231001223322103](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001223322103.png)

![image-20231001223826661](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001223826661.png)



# Store

delta FIFO

+ clientgo的存储类型

![image-20231001224221514](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001224221514.png)

+ etcd中key是pod的名字，value是对应的yaml文件

![image-20231001230127277](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001230127277.png)

![image-20231001230254449](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001230254449.png)

![image-20231001230804720](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001230804720.png)

