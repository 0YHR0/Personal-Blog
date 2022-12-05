---
title: Ch22 NFS
date: 2022-07-08
tags:
 - K8s
 - Kubernetes
 - NFS
categories:
 - Kubernetes
---

# Ch22 NFS



deploy a NFS service on one machine





新建一个目录，把它暴露给其他主机--->ch17



查看nfs：![image-20220710215237216](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220710215237216.png)

then![image-20220708231120026](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220708231120026.png)

![image-20220710215518257](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220710215518257.png)

```yaml
```



## 使用nfs做pv报错：

ref：https://blog.csdn.net/m0_46090675/article/details/122276216

```sh
[root@k8s-master ~]# kubectl logs nfs-9cf648dcf-c7w65
2022-01-02 06:19:36+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 5.7.36-1debian10 started.
chown: changing ownership of '/var/lib/mysql/': Operation not permitted

```

解决：

![image-20220711011648194](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220711011648194.png)
