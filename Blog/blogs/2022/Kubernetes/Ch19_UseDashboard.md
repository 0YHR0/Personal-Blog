---
title: Ch19 UseDashboard
date: 2022-05-25
tags:
 - K8s
 - Kubernetes
categories:
 - Kubernetes

---

# UseDashboard

**查看**

选择指定的命名空间`dev`，然后点击`Deployments`，查看dev空间下的所有deployment

![image-20220522215623363](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220522215623363.png)

**扩缩容**

在`Deployment`上点击`规模`，然后指定`目标副本数量`，点击确定

![image-20220522215646404](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220522215646404.png)

**编辑**

在`Deployment`上点击`编辑`，然后修改`yaml文件`，点击确定

![image-20220522215704032](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220522215704032.png)

**操作Pod**

选中某个Pod，可以对其执行日志（logs）、进入执行（exec）、编辑、删除操作



使用右上角+号可以新建资源

![image-20220522215807029](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220522215807029.png)