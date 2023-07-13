---
title: Ch24 kubernetes集群环境搭建 Ubuntu22.04LTS v1.27.2
date: 2023-06-11
tags:
 - K8s
 - Kubernetes
categories:
 - Kubernetes


---



ref: https://www.linkedin.com/pulse/kubernetes-cluster-setup-ubuntu-2204-using-kubeadm-calico-md-sajjad/

```shell
# install docker

# remove old versions
sudo apt-get remove docker docker-engine docker.io containerd runc

# Set up the repository
sudo apt-get update
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
    
# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
# set up the stable repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  
# Install Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo service docker start

# Verify
sudo docker run hello-world

# check the version
sudo docker -v


# install k8s
sudo vim /etc/hosts

# add all the node and its address
192.168.221.173  master
192.168.221.143  node01
192.168.221.208  node02


swapoff -a   
# Also edit /etc/fstab and comment swap partition entry 
# to avoid enable swap after reboot

cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# sysctl params required by setup, params persist across reboot

cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# Apply sysctl params without reboot

sudo sysctl --system

sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl


# Download the Google Cloud public signing key
sudo mkdir /etc/apt/keyrings
sudo curl -fsSLo /etc/apt/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg

# Add the Kubernetes apt repository
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list

# Update apt package index, install kubelet, kubeadm, kubectl and docker.io, and pin their version
sudo apt-get update
sudo apt-get install -y kubelet=1.27.2-00 kubeadm=1.27.2-00 kubectl=1.27.2-00 docker.io
sudo apt-mark hold kubelet kubeadm kubectl docker.io

# Set the cgroup driver for runc to systemd required for the kubelet
sudo mkdir /etc/containerd
sudo containerd config default > /etc/containerd/config.toml
sudo sed -i 's/            SystemdCgroup = false/            SystemdCgroup = true/' /etc/containerd/config.toml
sudo systemctl restart containerd
sudo systemctl restart kubelet

# Initialize k8s cluster with user defined network (Network must be /16, and must NOT match underlying LAN CIDR)
kubeadm config images pull
kubeadm init --pod-network-cidr=10.244.0.0/16

# Setup kubectl for user on master node
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# Setup Calico SDN
# if pod network in "kubeadm init" is not =192.168.0.0/16, then edit downloaded custom-resources.yaml file accordingly (edit cidr= entry, default is 192.168.0.0/16)
kubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.25.1/manifests/tigera-operator.yaml
curl https://raw.githubusercontent.com/projectcalico/calico/v3.25.1/manifests/custom-resources.yaml -O
kubectl create -f custom-resources.yaml

# Join worker node(s)
kubeadm join 10.0.0.2:6443 --token ndi3ae.ujwfcuais8zm2cyn --discovery-token-ca-cert-hash sha256:fc6c1094159833bf95a3fcb7d49960026e4ddad56f8648b94240cd1c867b2f6b
```





### Create registry container

```sh
# create registry directory
sudo mkdir -p /opt/data/registry

# run registry container
sudo docker run -d --restart=always -p 5000:5000 -v /opt/data/registry:/tmp/registry --name db2-operator-registry registry

```

