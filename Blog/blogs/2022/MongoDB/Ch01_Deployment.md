---
title: Ch01 Deployment
date: 2022-11-13
tags:
 - MongoDB
 - DB
categories:
 - MongoDB

---

## 安装HELM

```sh
wget https://get.helm.sh/helm-v3.8.0-linux-amd64.tar.gz
tar xf helm-v3.8.0-linux-amd64.tar.gz
mv linux-amd64/helm /usr/local/bin/helm
helm repo add bitnami https://charts.bitnami.com/bitnami
```



## 单机部署：

https://github.com/0YHR0/Deployment-of-Mongodb-and-Mongo-Express-UI-on-Kubernetes/blob/master/mongo-secret.yaml



https://www.bogotobogo.com/DevOps/Docker/Docker_Kubernetes_MongoDB_MongoExpress.php



记得把service改成node port



## K8s部署：

https://github.com/mongodb/mongodb-kubernetes-operator



