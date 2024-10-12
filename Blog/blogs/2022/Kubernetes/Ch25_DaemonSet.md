---
title: Ch25 DaemonSet
date: 2023-06-23
tags:
 - K8s
 - Kubernetes
categories:
 - Kubernetes
---



## **DaemonSet 简介**

DaemonSet 的主要作用，是在 Kubernetes 集群里，运行一个 Daemon Pod。 DaemonSet 只管理 Pod 对象，然后通过 nodeAffinity 和 Toleration 这两个调度器参数的功能，保证了每个节点上有且只有一个 Pod。

DaemonSet 是一种面向特定应用场景的 Pod 控制器，尽管它也可以管理 Pod 的多个副本，但它主要用于保证一个 Node 上只运行一个 Pod 的场景：



## **DaemonSet 使用场景**

每个节点上只有一个这样的 Daemon Pod 实例，然后当有新的节点加入 Kubernetes 集群后，该 Pod 会自动地在新节点上被创建出来。当旧节点被删除后，它上面的 Pod 也会相应地被回收掉。

Daemon Pod 的意义确实是非常重要的。比如的作用：

- 网络插件的 Agent 组件，都必须运行在每一个节点上，用来处理这个节点上的容器网络。
- 存储插件的 Agent 组件，也必须运行在每一个节点上，用来在这个节点上挂载远程存储目录，操作容器的 Volume 目录，比如：glusterd、ceph。
- 监控组件和日志组件，也必须运行在每一个节点上，负责这个节点上的监控信息和日志搜集，比如：fluentd、logstash、Prometheus 等。

![image-20241011191456939](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241011191456939.png)

![image-20241011191507044](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241011191507044.png)

![image-20241011191516056](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241011191516056.png)

![image-20241011191547652](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20241011191547652.png)

## **DaemonSet 创建**

一个简单的 DaemonSet 配置如下：

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: nginx-daemonset
  labels:
    app: nginx
spec:
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.17.0
```

初步看，这份配置跟 Deployment 基本类似，唯一一个显著的差异是 DaemonSet 不需要指定副本数，因为它的副本数取决于工作节点数。



## **查看 DaemonSet**

首先查看刚刚创建的 DaemonSet 对象：

```sh
[root@k8s-master]# kubectl get daemonset
NAME  DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
nginx-daemonset     3     3     3     3     3      <none>          1m3s
```

命令行输出中各字段含义如下：

- NAME: DaemonSet 对象名称，同配置中的 metadata.name；
- DESIRED：需求副本个数，由于没有刻意筛选节点，所以副本个数等同于节点个数(默认)；
- CURRENT：当前已创建的副本个数；
- READY：处于 Ready 状态的副本个数；
- UP-TO-DATE：已按最新 Pod 模版创建的 Pod 个数；
- AVAILABLE：可用的副本个数；
- NODE SELECTOR：节点选择器，本例中我们没有选择，值为空；
- AGE：创建至今经历的时间。

上面的字段中，除了 NODE SELECTOR 以外，我们已在前面的章节中介绍过。其实 Node Selector 并不是 DaemonSet 对象特有的配置，它是 Pod 模版中用于为 Pod 匹配节点的配置，DaemonSet 控制器使用该 Node Selector 来筛选需要创建副本的节点，如果没有指定，则默认选择全部节点。

接着，查看 DaemonSet 控制器所创建的 Pod 副本信息：

```sh
[root@k8s-master]# kubectl get pods -o wide
NAME                    READY   STATUS    RESTARTS   AGE     IP           NODE           NOMINATED NODE   READINESS GATES
nginx-daemonset-66dbc   1/1     Running   0          5m13s   10.135.3.2   k8s-master   <none>           <none>
nginx-daemonset-akpdg   1/1     Running   0          5m13s   10.135.1.2   k8s-node1   <none>           <none>
nginx-daemonset-l3wnd   1/1     Running   0          5m13s   10.135.2.2   k8s-node2    <none>           <none>
```

可以看到，在每个节点上均创建了一个副本，是符合预期的。





## **更新 DaemonSet**

下面我们适当的调整下 Pod 部署策略，只希望 Pod 运行在名为 k8s-node 的节点上，这样我们只需要配置 DaemonSet 对象的 spec.template.spec.nodeSelector 来选择节点即可。

在 k8s-node 的节点中存在一个标识节点的 label：

```sh
kubernetes.io/hostname: k8s-node1
```

使用 kubectl edit 命令修改配置的 spec.template.spec.nodeSelector 参数如下：

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  ...
spec:
  ...
  template:
    ...
    spec:
      ...
      nodeSelector:
        kubernetes.io/hostname: k8s-node1
```



然后再次观察 DaemonSet 对象和 Pod 副本：

```sh
[root@k8s-master]# kubectl get daemonsets
NAME              DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                        AGE
nginx-daemonset   1         1         1       1            1           kubernetes.io/hostname=k8s-node1   37m

[root@k8s-master]# kubectl get pods -o wide
NAME                    READY   STATUS    RESTARTS   AGE   IP           NODE          NOMINATED NODE   READINESS GATES
nginx-daemonset-66gk2   1/1     Running   0          10s   10.135.2.3   k8s-node1   <none>           <none>
```



可以发现 DaemonSet 状态中，NODE SELECTOR 正确地展示了上面的修改，而且需求的 Pod 副本数也变成了 1 个，符合预期。

原来运行的 3 个 Pod 副本减少到 1 个，而且只在我们配置选定的节点（k8s-node1）上运行。



## **删除 DaemonSet**

像其他 Pod 控制器一样，当删除 DaemonSet 对象时，其所管理的 Pod 默认也会被删除，操作如下所示：

```sh
[root@k8s-master ~]# kubectl delete daemonsets nginx-daemonset
daemonset.apps "nginx-daemonset" deleted
[root@k8s-master ~]# kubectl get pods
No resources found in default namespace.
```













ref: https://zhuanlan.zhihu.com/p/561595005

