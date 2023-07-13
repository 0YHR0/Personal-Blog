---
title: Ch03 kubernetes集群环境搭建 云服务器
date: 2022-04-24
tags:
 - K8s
 - Kubernetes
categories:
 - Kubernetes



---

# Kubernetes集群环境搭建 云服务器

转自冰河大佬博客：https://blog.51cto.com/binghe001/5226780?b=totalstatistic

## 集群规划

| ip              | 主机名 | 节点   | 操作系统   |
| --------------- | ------ | ------ | ---------- |
| 192.168.175.101 | master | master | CentOS 7.9 |
| 192.168.175.102 | node01 | Worker | CentOS 7.9 |
| 192.168.175.103 | node02 | Worker | CentOS 7.9 |

## 基础配置

在三台服务器上的/etc/hosts文件中添加如下配置项

```sh
192.168.175.101  master
192.168.175.102  node01
192.168.175.103  node02
```



## 检查系统环境

分别在三台服务器上检查系统的环境。

1.查看服务器操作系统版本

```sh
cat /etc/redhat-release
```

安装Docker和K8S集群的服务器操作系统版本需要在CentOS 7以上。

2.查看服务器的主机名

```sh
hostname
```

##### 注意：集群中服务器的主机名不能是localhost。

3.查看服务器的CPU核数

```sh
lscpu
```

##### 注意：集群中服务器的CPU核数不能少于2个。

4.查看服务器网络

以（Master）服务器为例。在服务器上执行 ip route show命令来查看服务器的默认网卡，如下所示:

```sh
[root@binghe101 ~]# ip route show
default via 192.168.175.2 dev ens33 proto static metric 100 
172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 linkdown 
192.168.175.0/24 dev ens33 proto kernel scope link src 192.168.175.101 metric 100
```

在上面的输出信息中有如下一行标注了binghe101服务器所使用的默认网卡:

```sh
default via 192.168.175.2 dev ens33 proto static metric 100
```

可以看到，binghe101服务器使用的默认网卡为ens33。

接下来，使用ip address命令查看服务器的IP地址，如下所示:

```sh
[root@binghe101 ~]# ip address
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:0c:29:68:06:63 brd ff:ff:ff:ff:ff:ff
    inet 192.168.175.101/24 brd 192.168.175.255 scope global noprefixroute ens33
       valid_lft forever preferred_lft forever
    inet6 fe80::890f:5a92:4171:2a11/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever

```

可以看到，binghe101服务器上的默认网卡的IP地址为192.168.175.101，K8S将使用此 IP 地址与集群内的其他节点通信。集群中所有K8S所使用的IP地址必须可以互通。



## Docker安装
分别在三台服务器上安装Docker并配置阿里云镜像加速器。

1.安装Docker

新建auto_install_docker.sh脚本文件

```sh
vim auto_install_docker.sh
```

文件的内容如下所示:

```sh
export REGISTRY_MIRROR=https://registry.cn-hangzhou.aliyuncs.com
dnf install yum*
yum install -y yum-utils  device-mapper-persistent-data  lvm2
yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
dnf install https://mirrors.aliyun.com/docker-ce/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.13-3.1.el7.x86_64.rpm
yum install docker-ce docker-ce-cli -y
systemctl enable docker.service
systemctl start docker.service
docker version
```

或者指定Docker的版本进行安装，此时auto_install_docker.sh脚本文件的内容如下所示。

```sh
export REGISTRY_MIRROR=https://registry.cn-hangzhou.aliyuncs.com
dnf install yum*
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
yum install -y docker-ce-19.03.8 docker-ce-cli-19.03.8 containerd.io
systemctl enable docker.service
systemctl start docker.service
docker version
```

使用如下命令赋予auto_install_docker.sh文件可执行权限。

```sh
chmod a+x ./auto_install_docker.sh
```

接下来，直接运行auto_install_docker.sh脚本文件安装Docker即可。

```sh
./auto_install_docker.sh
```



2.配置阿里云镜像加速器

新建脚本文件aliyun_docker_images.sh

```sh
vim aliyun_docker_images.sh
```

文件内容如下所示:

```sh
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://zz3sblpi.mirror.aliyuncs.com"]
}
EOF
systemctl daemon-reload
systemctl restart docker
```

为aliyun_docker_images.sh脚本文件赋予可执行权限，如下所示

```sh
chmod a+x ./aliyun_docker_images.sh
```

执行aliyun_docker_images.sh脚本文件配置阿里云镜像加速器

```sh
./aliyun_docker_images.sh
```



## 系统设置

分别在三台服务器上进行系统设置。

1.安装nfs-utils

```sh
yum install -y nfs-utils
yum install -y wget
```

2.关闭防火墙

```SH
systemctl stop firewalld
systemctl disable firewalld
```

3.关闭 SeLinux

```SH
setenforce 0
sed -i "s/SELINUX=enforcing/SELINUX=disabled/g" /etc/selinux/config
```

4.关闭 swap

```SH
swapoff -a
yes | cp /etc/fstab /etc/fstab_bak
cat /etc/fstab_bak |grep -v swap > /etc/fstab
```

5.修改 /etc/sysctl.conf

新建sys_config.sh脚本文件。

```SH
vim sys_config.sh
```

sys_config.sh脚本文件的内容如下所示，

```SH
# 如果有配置，则修改
sed -i "s#^net.ipv4.ip_forward.*#net.ipv4.ip_forward=1#g"  /etc/sysctl.conf
sed -i "s#^net.bridge.bridge-nf-call-ip6tables.*#net.bridge.bridge-nf-call-ip6tables=1#g"  /etc/sysctl.conf
sed -i "s#^net.bridge.bridge-nf-call-iptables.*#net.bridge.bridge-nf-call-iptables=1#g"  /etc/sysctl.conf
sed -i "s#^net.ipv6.conf.all.disable_ipv6.*#net.ipv6.conf.all.disable_ipv6=1#g"  /etc/sysctl.conf
sed -i "s#^net.ipv6.conf.default.disable_ipv6.*#net.ipv6.conf.default.disable_ipv6=1#g"  /etc/sysctl.conf
sed -i "s#^net.ipv6.conf.lo.disable_ipv6.*#net.ipv6.conf.lo.disable_ipv6=1#g"  /etc/sysctl.conf
sed -i "s#^net.ipv6.conf.all.forwarding.*#net.ipv6.conf.all.forwarding=1#g"  /etc/sysctl.conf
# 可能没有，追加
echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf
echo "net.bridge.bridge-nf-call-ip6tables = 1" >> /etc/sysctl.conf
echo "net.bridge.bridge-nf-call-iptables = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.all.disable_ipv6 = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.default.disable_ipv6 = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.lo.disable_ipv6 = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.all.forwarding = 1"  >> /etc/sysctl.conf
# 执行命令以应用
sysctl -p
```

执行如下命令赋予sys_config.sh文件可执行权限。

```SH
chmod a+x ./sys_config.sh
```

执行sys_config.sh脚本文件。

```SH
./sys_config.sh
```

安装K8S

分别在三台服务器上安装K8S。

1.配置K8S yum源

新建k8s_yum.sh脚本文件。

```SH
vim k8s_yum.sh
```

文件的内容如下所示。

```SH
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

```

赋予k8s_yum.sh脚本文件的可执行权限。

```SH
chmod a+x ./k8s_yum.sh
```

执行k8s_yum.sh文件。

```SH
./k8s_yum.sh
```

2.卸载旧版本的K8S

```SH
yum remove -y kubelet kubeadm kubectl
```

3.安装kubelet、kubeadm、kubectl

```SH
yum install -y kubelet-1.18.2 kubeadm-1.18.2 kubectl-1.18.2
```

4.修改docker Cgroup Driver为systemd

```SH
sed -i "s#^ExecStart=/usr/bin/dockerd.*#ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --exec-opt native.cgroupdriver=systemd#g" /usr/lib/systemd/system/docker.service
```

5.重启 docker，并启动 kubelet

```SH
systemctl daemon-reload
systemctl restart docker
systemctl enable kubelet && systemctl start kubelet
```

综合安装脚本

综上，上述安装Docker、进行系统设置，安装K8S的操作可以统一成auto_install_docker_k8s.sh脚本。脚本的内容如下所示:

```SH
#安装Docker 19.03.8
export REGISTRY_MIRROR=https://registry.cn-hangzhou.aliyuncs.com
dnf install yum*
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
yum install -y docker-ce-19.03.8 docker-ce-cli-19.03.8 containerd.io
systemctl enable docker.service
systemctl start docker.service
docker version

#配置阿里云镜像加速器
mkdir -p /etc/docker
tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://zz3sblpi.mirror.aliyuncs.com"]
}
EOF
systemctl daemon-reload
systemctl restart docker

#安装nfs-utils
yum install -y nfs-utils
yum install -y wget

#关闭防火墙
systemctl stop firewalld
systemctl disable firewalld

#关闭SeLinux
setenforce 0
sed -i "s/SELINUX=enforcing/SELINUX=disabled/g" /etc/selinux/config

# 关闭 swap
swapoff -a
yes | cp /etc/fstab /etc/fstab_bak
cat /etc/fstab_bak |grep -v swap > /etc/fstab

#修改 /etc/sysctl.conf
# 如果有配置，则修改
sed -i "s#^net.ipv4.ip_forward.*#net.ipv4.ip_forward=1#g"  /etc/sysctl.conf
sed -i "s#^net.bridge.bridge-nf-call-ip6tables.*#net.bridge.bridge-nf-call-ip6tables=1#g"  /etc/sysctl.conf
sed -i "s#^net.bridge.bridge-nf-call-iptables.*#net.bridge.bridge-nf-call-iptables=1#g"  /etc/sysctl.conf
sed -i "s#^net.ipv6.conf.all.disable_ipv6.*#net.ipv6.conf.all.disable_ipv6=1#g"  /etc/sysctl.conf
sed -i "s#^net.ipv6.conf.default.disable_ipv6.*#net.ipv6.conf.default.disable_ipv6=1#g"  /etc/sysctl.conf
sed -i "s#^net.ipv6.conf.lo.disable_ipv6.*#net.ipv6.conf.lo.disable_ipv6=1#g"  /etc/sysctl.conf
sed -i "s#^net.ipv6.conf.all.forwarding.*#net.ipv6.conf.all.forwarding=1#g"  /etc/sysctl.conf
# 可能没有，追加
echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.conf
echo "net.bridge.bridge-nf-call-ip6tables = 1" >> /etc/sysctl.conf
echo "net.bridge.bridge-nf-call-iptables = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.all.disable_ipv6 = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.default.disable_ipv6 = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.lo.disable_ipv6 = 1" >> /etc/sysctl.conf
echo "net.ipv6.conf.all.forwarding = 1"  >> /etc/sysctl.conf
# 执行命令以应用
sysctl -p

# 配置K8S的yum源
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=0
repo_gpgcheck=0
gpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg
       http://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
EOF

# 卸载旧版本K8S
yum remove -y kubelet kubeadm kubectl

# 安装kubelet、kubeadm、kubectl，这里我安装的是1.18.2版本，你也可以安装1.17.2版本
yum install -y kubelet-1.18.2 kubeadm-1.18.2 kubectl-1.18.2

# 修改docker Cgroup Driver为systemd
# # 将/usr/lib/systemd/system/docker.service文件中的这一行 ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
# # 修改为 ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --exec-opt native.cgroupdriver=systemd
# 如果不修改，在添加 worker 节点时可能会碰到如下错误
# [WARNING IsDockerSystemdCheck]: detected "cgroupfs" as the Docker cgroup driver. The recommended driver is "systemd". 
# Please follow the guide at https://kubernetes.io/docs/setup/cri/
sed -i "s#^ExecStart=/usr/bin/dockerd.*#ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock --exec-opt native.cgroupdriver=systemd#g" /usr/lib/systemd/system/docker.service

# 设置 docker 镜像，提高 docker 镜像下载速度和稳定性
# 如果您访问 https://hub.docker.io 速度非常稳定，亦可以跳过这个步骤
# curl -sSL https://kuboard.cn/install-script/set_mirror.sh | sh -s ${REGISTRY_MIRROR}

# 重启 docker，并启动 kubelet
systemctl daemon-reload
systemctl restart docker
systemctl enable kubelet && systemctl start kubelet

docker version
```

##### 注意：我安装的K8S版本是1.18.2，大家在安装K8S时，也可以选择其他版本进行安装

赋予auto_install_docker_k8s.sh脚本文件可执行权限。

```SH
chmod a+x ./auto_install_docker_k8s.sh
```

执行auto_install_docker_k8s.sh脚本文件。

```SH
./auto_install_docker_k8s.sh
```

##### 注意：需要在每台服务器上执行auto_install_docker_k8s.sh脚本文件。

## 初始化Master节点

只在MASTER服务器上执行的操作。

1.初始化Master节点的网络环境

```SH
# 只在 master 节点执行
# export 命令只在当前 shell 会话中有效，开启新的 shell 窗口后，如果要继续安装过程，请重新执行此处的 export 命令
export MASTER_IP=192.168.175.101
# 替换 k8s.master 为 您想要的 dnsName
export APISERVER_NAME=k8s.master
# Kubernetes 容器组所在的网段，该网段安装完成后，由 kubernetes 创建，事先并不存在于您的物理网络中
export POD_SUBNET=172.18.0.1/16
echo "${MASTER_IP}    ${APISERVER_NAME}" >> /etc/hosts
```

2.初始化Master节点

在MASTER服务器上创建init_master.sh脚本文件，文件内容如下所示。

```SH
#!/bin/bash
# 脚本出错时终止执行
set -e

if [ ${#POD_SUBNET} -eq 0 ] || [ ${#APISERVER_NAME} -eq 0 ]; then
  echo -e "\033[31;1m请确保您已经设置了环境变量 POD_SUBNET 和 APISERVER_NAME \033[0m"
  echo 当前POD_SUBNET=$POD_SUBNET
  echo 当前APISERVER_NAME=$APISERVER_NAME
  exit 1
fi


# 查看完整配置选项 https://godoc.org/k8s.io/kubernetes/cmd/kubeadm/app/apis/kubeadm/v1beta2
rm -f ./kubeadm-config.yaml
cat <<EOF > ./kubeadm-config.yaml
apiVersion: kubeadm.k8s.io/v1beta2
kind: ClusterConfiguration
kubernetesVersion: v1.18.2
imageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers
controlPlaneEndpoint: "${APISERVER_NAME}:6443"
networking:
  serviceSubnet: "10.96.0.0/16"
  podSubnet: "${POD_SUBNET}"
  dnsDomain: "cluster.local"
EOF

# kubeadm init
# 根据您服务器网速的情况，您需要等候 3 - 10 分钟
kubeadm init --config=kubeadm-config.yaml --upload-certs

# 配置 kubectl
rm -rf /root/.kube/
mkdir /root/.kube/
cp -i /etc/kubernetes/admin.conf /root/.kube/config

# 安装 calico 网络插件
# 参考文档 https://docs.projectcalico.org/v3.13/getting-started/kubernetes/self-managed-onprem/onpremises
echo "安装calico-3.13.1"
rm -f calico-3.13.1.yaml
wget https://kuboard.cn/install-script/calico/calico-3.13.1.yaml

```

赋予init_master.sh脚本文件可执行权限。

```SH
chmod a+x ./init_master.sh
```

执行init_master.sh脚本文件。

```SH
./init_master.sh
```

修改calico.yaml中内容（踩坑）

```yaml
vim calico-3.13.1.yaml
```

在

```
- name: CLUSTER_TYPE
  value: "k8s,bgp" 
```

下增加两行

```
- name: IP_AUTODETECTION_METHOD
  value: "can-reach=#MASTER_IP master地址#"
```

执行：

```sh
kubectl apply -f calico-3.13.1.yaml
```

kubeadm init --pod-network-cidr=10.244.0.0/16

3.查看Master节点的初始化结果

（1）确保所有容器组处于Running状态

```SH
# 执行如下命令，等待 3-10 分钟，直到所有的容器组处于 Running 状态
watch kubectl get pod -n kube-system -o wide
```

如下所示:

```SH
[root@binghe101 ~]# watch kubectl get pod -n kube-system -o wide
Every 2.0s: kubectl get pod -n kube-system -o wide                                                                                                                          binghe101: Sat May  2 23:40:33 2020

NAME                                       READY   STATUS    RESTARTS   AGE     IP                NODE        NOMINATED NODE   READINESS GATES
calico-kube-controllers-5b8b769fcd-l2tmm   1/1     Running   0          3m59s   172.18.203.67     binghe101   <none>           <none>
calico-node-8krsl                          1/1     Running   0          3m59s   192.168.175.101   binghe101   <none>           <none>
coredns-546565776c-rd2zr                   1/1     Running   0          3m59s   172.18.203.66     binghe101   <none>           <none>
coredns-546565776c-x8r7l                   1/1     Running   0          3m59s   172.18.203.65     binghe101   <none>           <none>
etcd-binghe101                             1/1     Running   0          4m14s   192.168.175.101   binghe101   <none>           <none>
kube-apiserver-binghe101                   1/1     Running   0          4m14s   192.168.175.101   binghe101   <none>           <none>
kube-controller-manager-binghe101          1/1     Running   0          4m14s   192.168.175.101   binghe101   <none>           <none>
kube-proxy-qnffb                           1/1     Running   0          3m59s   192.168.175.101   binghe101   <none>           <none>
kube-scheduler-binghe101                   1/1     Running   0          4m14s   192.168.175.101   binghe101   <none>           <none>
```

(2） 查看 Master 节点初始化结果:

```SH
kubectl get nodes -o wide
```

如下所示。

```SH
[root@binghe101 ~]# kubectl get nodes -o wide
NAME        STATUS   ROLES    AGE     VERSION   INTERNAL-IP       EXTERNAL-IP   OS-IMAGE                KERNEL-VERSION         CONTAINER-RUNTIME
binghe101   Ready    master   5m43s   v1.18.2   192.168.175.101   <none>        CentOS Linux 8 (Core)   4.18.0-80.el8.x86_64   docker://19.3.8

```



## 初始化Worker节点

1.获取join命令参数

在Master节点上执行如下命令获取join命令参数。

```SH
kubeadm token create --print-join-command
```

具体执行如下所示。

```SH
[root@binghe101 ~]# kubeadm token create --print-join-command
W0502 23:44:55.218947   59318 configset.go:202] WARNING: kubeadm cannot validate component configs for API groups [kubelet.config.k8s.io kubeproxy.config.k8s.io]
kubeadm join k8s.master:6443 --token s0hoh1.2cwyf1fyyjl2h04a     --discovery-token-ca-cert-hash sha256:6d78e360dc64d84762611ac6beec8ac0f0fe9f72a5c2cca008df949e07827c19
```



其中，有如下一行输出:

```SH
kubeadm join k8s.master:6443 --token s0hoh1.2cwyf1fyyjl2h04a     --discovery-token-ca-cert-hash sha256:6d78e360dc64d84762611ac6beec8ac0f0fe9f72a5c2cca008df949e07827c19
```

这行代码就是获取到的join命令。

##### 注意：join命令中的token的有效时间为 2 个小时，2小时内，可以使用此 token 初始化任意数量的 worker 节点。

2.初始化Worker节点

针对所有的 worker 节点执行，在这里，就是在binghe102服务器和binghe103服务器上执行。

创建init_worker.sh脚本文件，文件内容如下所示。

```SH
# 只在 worker 节点执行
# 192.168.175.101 为 master 节点的内网 IP
export MASTER_IP=192.168.175.101
# 替换 k8s.master 为初始化 master 节点时所使用的 APISERVER_NAME
export APISERVER_NAME=k8s.master
echo "${MASTER_IP}    ${APISERVER_NAME}" >> /etc/hosts

# 替换为 master 节点上 kubeadm token create 命令输出的join
kubeadm join k8s.master:6443 --token s0hoh1.2cwyf1fyyjl2h04a     --discovery-token-ca-cert-hash sha256:6d78e360dc64d84762611ac6beec8ac0f0fe9f72a5c2cca008df949e07827c19
```

其中，kubeadm join…就是master 节点上 kubeadm token create 命令输出的join。

赋予init_worker.sh脚本文件文件可执行权限，并执行init_worker.sh脚本文件。

```SH
chmod a+x ./init_worker.sh
./init_worker.sh
```



3.查看初始化结果

在Master节点执行如下命令查看初始化结果。

```SH
kubectl get nodes -o wide
```

如下所示。

```SH
[root@binghe101 ~]# kubectl get nodes
NAME        STATUS   ROLES    AGE     VERSION
binghe101   Ready    master   20m     v1.18.2
binghe102   Ready    <none>   2m46s   v1.18.2
binghe103   Ready    <none>   2m46s   v1.18.2
```

注意：kubectl get nodes命令后面加上-o wide参数可以输出更多的信息。



## 重启K8S集群引起的问题
#### 1.Worker节点故障不能启动
Master 节点的 IP 地址发生变化，导致 worker 节点不能启动。需要重新安装K8S集群，并确保所有节点都有固定的内网 IP 地址。

#### 2.Pod崩溃或不能正常访问
重启服务器后使用如下命令查看Pod的运行状态。

```SH
kubectl get pods --all-namespaces
```

发现很多 Pod 不在 Running 状态，此时，需要使用如下命令删除运行不正常的Pod。

```SH
kubectl delete pod <pod-name> -n <pod-namespece>
```

##### 注意：如果Pod 是使用 Deployment、StatefulSet 等控制器创建的，K8S 将创建新的 Pod 作为替代，重新启动的 Pod 通常能够正常工作。





# 测试：

##### 创建一个nginx服务

```sh
kubectl create deployment nginx  --image=nginx:1.14-alpine
```



##### 暴露端口

```sh
kubectl expose deploy nginx  --port=88 --target-port=80  --type=NodePort
```



##### 查看服务

```
kubectl get pod,svc
```









