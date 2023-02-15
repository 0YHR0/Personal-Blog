---
title: Ch23 kubernetes集群环境搭建 云服务器 Ubuntu22.04LTS v1.25.4版本
date: 2022-11-23
tags:
 - K8s
 - Kubernetes
categories:
 - Kubernetes

---





主要参考： https://blog.csdn.net/weixin_43501172/article/details/125869017



b步骤不用cri-docker， 用containerd代替

https://blog.csdn.net/weixin_43501172/article/details/125869017

https://serverfault.com/questions/1118051/failed-to-run-kubelet-validate-service-connection-cri-v1-runtime-api-is-not-im

## 



## K8s Metrics Server



```sh
mkdir ~/metrics
# 下载metrics配置文件
wget https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
# 修改文件
containers:
      - args:
        - --cert-dir=/tmp
        - --secure-port=4443
        - --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname
        - --kubelet-use-node-status-port
        - --metric-resolution=15s
        - --kubelet-insecure-tls # 加入参数 
        image: registry.aliyuncs.com/google_containers/metrics-server:v0.6.1 # 替换成国内镜像
# 应用
kubectl apply -f components.yaml

```

```sh
# 下载安装文件
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml

```

