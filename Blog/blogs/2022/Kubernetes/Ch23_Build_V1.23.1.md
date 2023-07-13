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





kubeadm join 192.168.221.207:6443 --token nzk3d0.vb8c9wfni629snw5 \
	--discovery-token-ca-cert-hash sha256:d6ae16b75d4689a21745cd6d0fd19b7585d3815f0f2a6cc2797d44b8c54e5a9b



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





# k8s v1.27

ref: https://www.linkedin.com/pulse/kubernetes-cluster-setup-ubuntu-2204-using-kubeadm-calico-md-sajjad/



mistake: sudo sysctl --system



docker & k8s key:

```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt update

```



```sh
kubeadm init --pod-network-cidr=10.244.0.0/16
```

