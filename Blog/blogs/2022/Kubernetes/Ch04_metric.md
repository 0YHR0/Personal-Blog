---
title: Ch04 K8s安装metric监控性能（云服务器）
date: 2022-04-25
tags:
 - K8s
 - Kubernetes
 - metric
categories:
 - Kubernetes
---

# 部署Metrics-Server服务

## 1.下载并解压Metrics-Server

```sh
https://github.com/kubernetes-sigs/metrics-server/archive/v0.3.6.tar.gz
tar -zxvf v0.3.6.tar.gz
```



## 2.修改Metrics-Server配置文件

```sh
cd metrics-server-0.3.6/deploy/1.8+/
vim metrics-server-deployment.yaml
```

vim metrics-server-deployment.yaml文件原有的内容如下所示

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: metrics-server
  namespace: kube-system
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: metrics-server
  namespace: kube-system
  labels:
    k8s-app: metrics-server
spec:
  selector:
    matchLabels:
      k8s-app: metrics-server
  template:
    metadata:
      name: metrics-server
      labels:
        k8s-app: metrics-server
    spec:
      serviceAccountName: metrics-server
      volumes:
      # mount in tmp so we can safely use from-scratch images and/or read-only containers
      - name: tmp-dir
        emptyDir: {}
      containers:
      - name: metrics-server
        image: k8s.gcr.io/metrics-server-amd64:v0.3.6
        imagePullPolicy: Always
        volumeMounts:
        - name: tmp-dir
          mountPath: /tmp
```

修改后的文件内容如下所示。

```yaml
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: metrics-server
  namespace: kube-system
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: metrics-server
  namespace: kube-system
  labels:
    k8s-app: metrics-server
spec:
  selector:
    matchLabels:
      k8s-app: metrics-server
  template:
    metadata:
      name: metrics-server
      labels:
        k8s-app: metrics-server
    spec:
      serviceAccountName: metrics-server
      volumes:
      # mount in tmp so we can safely use from-scratch images and/or read-only containers
      - name: tmp-dir
        emptyDir: {}
      containers:
      - name: metrics-server
        # 修改image 和 imagePullPolicy
        image: mirrorgooglecontainers/metrics-server-amd64:v0.3.6
        imagePullPolicy: IfNotPresent
        # 新增command配置
        command:
        - /metrics-server
        - --kubelet-insecure-tls
        - --kubelet-preferred-address-types=InternalDNS,InternalIP,ExternalDNS,ExternalIP,Hostname
        volumeMounts:
        - name: tmp-dir
          mountPath: /tmp
        # 新增resources配置
        resources:
          limits:
            cpu: 300m
            memory: 200Mi
          requests:
            cpu: 200m
            memory: 100Mi
```



修改完metrics-server-deployment.yaml文件后保存退出。



## 3.安装Metrics-Server
执行如下命令安装Metrics-Server

```sh
kubectl apply -f metrics-server-0.3.6/deploy/1.8+/
```

```sh
#给与权限
kubectl create clusterrolebinding system:anonymous  --clusterrole=cluster-admin  --user=system:anonymous
```



## 4.查看node信息
安装完Metrics-Server之后，查看node信息，如下所示。

```sh
[root@binghe101 ~]# kubectl top node
NAME        CPU(cores)   CPU%   MEMORY(bytes)   MEMORY%   
binghe101   141m         7%     1113Mi          65%       
binghe102   62m          3%     549Mi           32% 
binghe103   100m         5%     832Mi           48%
```



可以看到，使用Metrics-Server收集到节点信息，说明Metrics-Server安装成功。