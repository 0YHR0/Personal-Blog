---
title: Ch20 Helm
date: 2022-06-12
tags:
 - K8s
 - Kubernetes
 - Helm
categories:
 - Kubernetes


---

# Ch20 Helm

Helm是 kubernetes的包管理器，包管理器类似于我们在ubuntu中使用的apt，在centos中使用的yum 或者python中的pip一样，能够快速查找，下载和安装软件包。helm由客户端组件helm和服务端组件Tiller组成，能够将一组众多分散的k8s资源打包统一管理，是查找、共享和使用为kubernetes构建软件的最佳方式



### centos7环境 的 k8s安装helm 3.7.1

helm的官方网址：

https://helm.sh/

heml需要在k8s的主节点上安装。

下载安装包进行安装，helm发布的版本地址如下：

https://github.com/helm/helm/releases

centos7环境，则选择  Linux amd64 这个版本，下载地址如下：

https://get.helm.sh/helm-v3.7.1-linux-amd64.tar.gz

```sh
mkdir myhelm
cd myhelm
curl -SLO https://get.helm.sh/helm-v3.7.1-linux-amd64.tar.gz
tar -zxvf  helm-v3.7.1-linux-amd64.tar.gz
mv  linux-amd64/helm  /usr/local/bin/helm
helm version
```



例：安装solr operator

https://apache.github.io/solr-operator/docs/local_tutorial#install-the-solr-operator



使用docker安装solr

https://hub.docker.com/_/solr

