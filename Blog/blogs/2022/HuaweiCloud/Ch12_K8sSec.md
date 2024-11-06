---
title: Ch12 K8s Sec
date: 2024-10-24
tags:
 - HuaweiCloud
categories:
 - HuaweiCloud


---


# K8s 安全


# 集群准入机制详解
![image-20241025215451781](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215451781.png)

## K8s API 访问控制
![image-20241025215514327](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215514327.png)
+ 分为认证，鉴权，控制三部分

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/Knative-%E8%B1%86%E5%8C%85%20(2).png" alt="Knative-豆包 (2)" style="zoom:33%;" />

### 控制（Admission controller） 
![image-20241025215648345](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215648345.png)

![image-20241025215705279](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215705279.png)


### 认证
+ 拿到什么证书的用户，就可以以什么样的身份访问k8s
![image-20241025215717115](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215717115.png)
+ ![image-20241025215734458](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215734458.png)


#### service account
+ 在 Kubernetes（K8s）中，Service Account（服务账户）是一种用于为运行在集群中的进程（通常是 Pod 中的容器）提供身份标识的账户。它类似于传统操作系统中的用户账户，但专门用于在 K8s 环境中进行身份验证和授权。
	+ 访问 Kubernetes API：
        服务账户的主要用途之一是允许 Pod 中的容器以安全的方式访问 Kubernetes API。例如，一个监控工具以 Pod 的形式运行在 K8s 集群中，它需要访问 Kubernetes API 来获取集群中各个资源（如节点状态、Pod 状态等）的信息。通过使用服务账户，这个监控工具可以进行身份验证并获得授权，以合法地获取所需的数据。
    + 与其他资源交互：
	  除了访问 Kubernetes API，服务账户还可以用于与其他 K8s 资源进行交互。例如，在使用存储卷（Volume）时，某些存储提供商会要求进行身份验证。服务账户可以作为一种身份凭证，使 Pod 能够以授权的方式挂载和使用存储资源。

![image-20241025215751119](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215751119.png)

![image-20241025215757978](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215757978.png)

![image-20241025215808852](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215808852.png)

![image-20241025215818845](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215818845.png)

![image-20241025215834903](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215834903.png)

![image-20241025215842528](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215842528.png)



### 鉴权
![image-20241025215852727](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215852727.png)

![image-20241025215901931](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215901931.png)

![image-20241025215915209](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215915209.png)

![image-20241025215927653](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215927653.png)

![image-20241025215941770](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215941770.png)

![image-20241025215948996](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025215948996.png)


# 示例

+ 总结：比如我要创建一个deployment，那么我在其中的pod template中可以绑定一个service account，其中service account又可以通过多个role binding或者cluster role binding和多个 role绑定，其中每个role指定了对k8s中各种资源的操作权限。
![image-20241025220002612](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241025220002612.png)
