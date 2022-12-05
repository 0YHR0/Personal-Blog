(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{467:function(s,e,a){"use strict";a.r(e);var t=a(2),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes集群环境搭建-虚拟机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes集群环境搭建-虚拟机"}},[s._v("#")]),s._v(" Kubernetes集群环境搭建 虚拟机")]),s._v(" "),e("h4",{attrs:{id:"前置知识点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前置知识点"}},[s._v("#")]),s._v(" 前置知识点")]),s._v(" "),e("p",[s._v("目前生产部署Kubernetes 集群主要有两种方式：")]),s._v(" "),e("p",[e("strong",[s._v("kubeadm")])]),s._v(" "),e("p",[s._v("Kubeadm 是一个K8s 部署工具，提供kubeadm init 和kubeadm join，用于快速部署Kubernetes 集群。")]),s._v(" "),e("p",[s._v("官方地址："),e("a",{attrs:{href:"https://gitee.com/link?target=https%3A%2F%2Fkubernetes.io%2Fdocs%2Freference%2Fsetup-tools%2Fkubeadm%2Fkubeadm%2F",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/"),e("OutboundLink")],1)]),s._v(" "),e("p",[e("strong",[s._v("二进制包")])]),s._v(" "),e("p",[s._v("从github 下载发行版的二进制包，手动部署每个组件，组成Kubernetes 集群。")]),s._v(" "),e("p",[s._v("Kubeadm 降低部署门槛，但屏蔽了很多细节，遇到问题很难排查。如果想更容易可控，推荐使用二进制包部署Kubernetes 集群，虽然手动部署麻烦点，期间可以学习很多工作原理，也利于后期维护。")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20200404094800622.png",alt:"image-20200404094800622"}})]),s._v(" "),e("h4",{attrs:{id:"_2-kubeadm-部署方式介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-kubeadm-部署方式介绍"}},[s._v("#")]),s._v(" 2 kubeadm 部署方式介绍")]),s._v(" "),e("p",[s._v("kubeadm 是官方社区推出的一个用于快速部署kubernetes 集群的工具，这个工具能通过两条指令完成一个kubernetes 集群的部署：")]),s._v(" "),e("ul",[e("li",[s._v("创建一个Master 节点kubeadm init")]),s._v(" "),e("li",[s._v("将Node 节点加入到当前集群中$ kubeadm join <Master 节点的IP 和端口>")])]),s._v(" "),e("h4",{attrs:{id:"_3-安装要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装要求"}},[s._v("#")]),s._v(" 3 安装要求")]),s._v(" "),e("p",[s._v("在开始之前，部署Kubernetes 集群机器需要满足以下几个条件：")]),s._v(" "),e("ul",[e("li",[s._v("一台或多台机器，操作系统CentOS7.x-86_x64")]),s._v(" "),e("li",[s._v("硬件配置：2GB 或更多RAM，2 个CPU 或更多CPU，硬盘30GB 或更多")]),s._v(" "),e("li",[s._v("集群中所有机器之间网络互通")]),s._v(" "),e("li",[s._v("可以访问外网，需要拉取镜像")]),s._v(" "),e("li",[s._v("禁止swap 分区")])]),s._v(" "),e("h4",{attrs:{id:"_4-最终目标"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-最终目标"}},[s._v("#")]),s._v(" 4 最终目标")]),s._v(" "),e("ul",[e("li",[s._v("在所有节点上安装Docker 和kubeadm")]),s._v(" "),e("li",[s._v("部署Kubernetes Master")]),s._v(" "),e("li",[s._v("部署容器网络插件")]),s._v(" "),e("li",[s._v("部署Kubernetes Node，将节点加入Kubernetes 集群中")]),s._v(" "),e("li",[s._v("部署Dashboard Web 页面，可视化查看Kubernetes 资源")])]),s._v(" "),e("h4",{attrs:{id:"_5-准备环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-准备环境"}},[s._v("#")]),s._v(" 5 准备环境")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210609000002940.png",alt:"image-20210609000002940"}})]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("角色")]),s._v(" "),e("th",[s._v("IP地址")]),s._v(" "),e("th",[s._v("组件")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("master01")]),s._v(" "),e("td",[s._v("192.168.5.3")]),s._v(" "),e("td",[s._v("docker，kubectl，kubeadm，kubelet")])]),s._v(" "),e("tr",[e("td",[s._v("node01")]),s._v(" "),e("td",[s._v("192.168.5.4")]),s._v(" "),e("td",[s._v("docker，kubectl，kubeadm，kubelet")])]),s._v(" "),e("tr",[e("td",[s._v("node02")]),s._v(" "),e("td",[s._v("192.168.5.5")]),s._v(" "),e("td",[s._v("docker，kubectl，kubeadm，kubelet")])])])]),s._v(" "),e("h4",{attrs:{id:"_6-环境初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-环境初始化"}},[s._v("#")]),s._v(" 6 环境初始化")]),s._v(" "),e("h5",{attrs:{id:"_6-1-检查操作系统的版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-检查操作系统的版本"}},[s._v("#")]),s._v(" 6.1 检查操作系统的版本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 此方式下安装kubernetes集群要求Centos版本要在7.5或之上\n[root@master ~]# cat /etc/redhat-release\nCentos Linux 7.5.1804 (Core)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h5",{attrs:{id:"_6-2-主机名解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-主机名解析"}},[s._v("#")]),s._v(" 6.2 主机名解析")]),s._v(" "),e("p",[s._v("为了方便集群节点间的直接调用，在这个配置一下主机名解析，企业中推荐使用内部DNS服务器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 主机名成解析 编辑三台服务器的/etc/hosts文件，添加下面内容\n192.168.90.100 master\n192.168.90.106 node1\n192.168.90.107 node2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h5",{attrs:{id:"_6-3-时间同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-时间同步"}},[s._v("#")]),s._v(" 6.3 时间同步")]),s._v(" "),e("p",[s._v("kubernetes要求集群中的节点时间必须精确一直，这里使用chronyd服务从网络同步时间")]),s._v(" "),e("p",[s._v("企业中建议配置内部的会见同步服务器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 启动chronyd服务\n[root@master ~]# systemctl start chronyd\n[root@master ~]# systemctl enable chronyd\n[root@master ~]# date\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h5",{attrs:{id:"_6-4-禁用iptable和firewalld服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-禁用iptable和firewalld服务"}},[s._v("#")]),s._v(" 6.4 禁用iptable和firewalld服务")]),s._v(" "),e("p",[s._v("kubernetes和docker 在运行的中会产生大量的iptables规则，为了不让系统规则跟它们混淆，直接关闭系统的规则")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 1 关闭firewalld服务\n[root@master ~]# systemctl stop firewalld\n[root@master ~]# systemctl disable firewalld\n# 2 关闭iptables服务\n[root@master ~]# systemctl stop iptables\n[root@master ~]# systemctl disable iptables\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h5",{attrs:{id:"_6-5-禁用selinux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-禁用selinux"}},[s._v("#")]),s._v(" 6.5 禁用selinux")]),s._v(" "),e("p",[s._v("selinux是linux系统下的一个安全服务，如果不关闭它，在安装集群中会产生各种各样的奇葩问题")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 编辑 /etc/selinux/config 文件，修改SELINUX的值为disable\n# 注意修改完毕之后需要重启linux服务\nSELINUX=disabled\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h5",{attrs:{id:"_6-6-禁用swap分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-6-禁用swap分区"}},[s._v("#")]),s._v(" 6.6 禁用swap分区")]),s._v(" "),e("p",[s._v("swap分区指的是虚拟内存分区，它的作用是物理内存使用完，之后将磁盘空间虚拟成内存来使用，启用swap设备会对系统的性能产生非常负面的影响，因此kubernetes要求每个节点都要禁用swap设备，但是如果因为某些原因确实不能关闭swap分区，就需要在集群安装过程中通过明确的参数进行配置说明")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 编辑分区配置文件/etc/fstab，注释掉swap分区一行\n# 注意修改完毕之后需要重启linux服务\nvim /etc/fstab\n注释掉 /dev/mapper/centos-swap swap\n# /dev/mapper/centos-swap swap\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h5",{attrs:{id:"_6-7-修改linux的内核参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-7-修改linux的内核参数"}},[s._v("#")]),s._v(" 6.7 修改linux的内核参数")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 修改linux的内核采纳数，添加网桥过滤和地址转发功能\n# 编辑/etc/sysctl.d/kubernetes.conf文件，添加如下配置：\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nnet.ipv4.ip_forward = 1\n\n# 重新加载配置\n[root@master ~]# sysctl -p\n# 加载网桥过滤模块\n[root@master ~]# modprobe br_netfilter\n# 查看网桥过滤模块是否加载成功\n[root@master ~]# lsmod | grep br_netfilter\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h5",{attrs:{id:"_6-8-配置ipvs功能"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-8-配置ipvs功能"}},[s._v("#")]),s._v(" 6.8 配置ipvs功能")]),s._v(" "),e("p",[s._v("在Kubernetes中Service有两种带来模型，一种是基于iptables的，一种是基于ipvs的两者比较的话，ipvs的性能明显要高一些，但是如果要使用它，需要手动载入ipvs模块")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1.安装ipset和ipvsadm")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yum install ipset ipvsadm -y")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2.添加需要加载的模块写入脚本文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat <<EOF> /etc/sysconfig/modules/ipvs.modules")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\nmodprobe -- ip_vs\nmodprobe -- ip_vs_rr\nmodprobe -- ip_vs_wrr\nmodprobe -- ip_vs_sh\nmodprobe -- nf_conntrack_ipv4\nEOF\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3.为脚本添加执行权限")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod +x /etc/sysconfig/modules/ipvs.modules")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4.执行脚本文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /bin/bash /etc/sysconfig/modules/ipvs.modules")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.查看对应的模块是否加载成功")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lsmod | grep -e ip_vs -e nf_conntrack_ipv4")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h5",{attrs:{id:"_6-9-安装docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-9-安装docker"}},[s._v("#")]),s._v(" 6.9 安装docker")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 1、切换镜像源\n[root@master ~]# wget https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O /etc/yum.repos.d/docker-ce.repo\n\n# 2、查看当前镜像源中支持的docker版本\n[root@master ~]# yum list docker-ce --showduplicates\n\n# 3、安装特定版本的docker-ce\n# 必须制定--setopt=obsoletes=0，否则yum会自动安装更高版本\n[root@master ~]# yum install --setopt=obsoletes=0 docker-ce-18.06.3.ce-3.el7 -y\n\n# 4、添加一个配置文件\n#Docker 在默认情况下使用Vgroup Driver为cgroupfs，而Kubernetes推荐使用systemd来替代cgroupfs\n[root@master ~]# mkdir /etc/docker\n[root@master ~]# cat <<EOF> /etc/docker/daemon.json\n{\n\t"exec-opts": ["native.cgroupdriver=systemd"],\n\t"registry-mirrors": ["https://kn0t2bca.mirror.aliyuncs.com"]\n}\nEOF\n\n# 5、启动dokcer\n[root@master ~]# systemctl restart docker\n[root@master ~]# systemctl enable docker\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("h5",{attrs:{id:"_6-10-安装kubernetes组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-10-安装kubernetes组件"}},[s._v("#")]),s._v(" 6.10 安装Kubernetes组件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('# 1、由于kubernetes的镜像在国外，速度比较慢，这里切换成国内的镜像源\n# 2、编辑/etc/yum.repos.d/kubernetes.repo,添加下面的配置\n[kubernetes]\nname=Kubernetes\nbaseurl=http://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64\nenabled=1\ngpgchech=0\nrepo_gpgcheck=0\ngpgkey=http://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg\n\t\t\thttp://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\n\n# 3、安装kubeadm、kubelet和kubectl\n[root@master ~]# yum install --setopt=obsoletes=0 kubeadm-1.17.4-0 kubelet-1.17.4-0 kubectl-1.17.4-0 -y\n\n# 4、配置kubelet的cgroup\n#编辑/etc/sysconfig/kubelet, 添加下面的配置\nKUBELET_CGROUP_ARGS="--cgroup-driver=systemd"\nKUBE_PROXY_MODE="ipvs"\n\n# 5、设置kubelet开机自启\n[root@master ~]# systemctl enable kubelet\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h5",{attrs:{id:"_6-11-准备集群镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-11-准备集群镜像"}},[s._v("#")]),s._v(" 6.11 准备集群镜像")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 在安装kubernetes集群之前，必须要提前准备好集群需要的镜像，所需镜像可以通过下面命令查看\n[root@master ~]# kubeadm config images list\n\n# 下载镜像\n# 此镜像kubernetes的仓库中，由于网络原因，无法连接，下面提供了一种替换方案\nimages=(\n\tkube-apiserver:v1.17.4\n\tkube-controller-manager:v1.17.4\n\tkube-scheduler:v1.17.4\n\tkube-proxy:v1.17.4\n\tpause:3.1\n\tetcd:3.4.3-0\n\tcoredns:1.6.5\n)\n\nfor imageName in ${images[@]};do\n\tdocker pull registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName\n\tdocker tag registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName k8s.gcr.io/$imageName\n\tdocker rmi registry.cn-hangzhou.aliyuncs.com/google_containers/$imageName \ndone\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h5",{attrs:{id:"_6-11-集群初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-11-集群初始化"}},[s._v("#")]),s._v(" 6.11 集群初始化")]),s._v(" "),e("blockquote",[e("p",[s._v("下面的操作只需要在master节点上执行即可")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 创建集群\n[root@master ~]# kubeadm init \\\n\t--apiserver-advertise-address=81.68.160.217 \\   自己服务器的ip\n\t--image-repository registry.aliyuncs.com/google_containers \\\n\t--kubernetes-version=v1.17.4 \\\n\t--service-cidr=10.96.0.0/12 \\\n\t--pod-network-cidr=10.244.0.0/16\n# 创建必要文件\n[root@master ~]# mkdir -p $HOME/.kube\n[root@master ~]# sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n[root@master ~]# sudo chown $(id -u):$(id -g) $HOME/.kube/config\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("blockquote",[e("p",[s._v("下面的操作只需要在node节点上执行即可")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubeadm join 192.168.0.100:6443 --token awk15p.t6bamck54w69u4s8 \\\n    --discovery-token-ca-cert-hash sha256:a94fa09562466d32d29523ab6cff122186f1127599fa4dcd5fa0152694f17117 \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("在master上查看节点信息")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@master ~]# kubectl get nodes\nNAME    STATUS   ROLES     AGE   VERSION\nmaster  NotReady  master   6m    v1.17.4\nnode1   NotReady   <none>  22s   v1.17.4\nnode2   NotReady   <none>  19s   v1.17.4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h5",{attrs:{id:"_6-13-安装网络插件-只在master节点操作即可"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-13-安装网络插件-只在master节点操作即可"}},[s._v("#")]),s._v(" 6.13 安装网络插件，只在master节点操作即可")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("wget https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("由于外网不好访问，如果出现无法访问的情况，可以直接用下面的 记得文件名是kube-flannel.yml，位置：/root/kube-flannel.yml内容：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("https://github.com/flannel-io/flannel/tree/master/Documentation/kube-flannel.yml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("也可手动拉取指定版本 docker pull quay.io/coreos/flannel:v0.14.0 #拉取flannel网络，三台主机 docker images #查看仓库是否拉去下来")]),s._v(" "),e("p",[e("code",[s._v("个人笔记")]),s._v(" 若是集群状态一直是 notready,用下面语句查看原因， journalctl -f -u kubelet.service 若原因是： cni.go:237] Unable to update cni config: no networks found in /etc/cni/net.d mkdir -p /etc/cni/net.d #创建目录给flannel做配置文件 vim /etc/cni/net.d/10-flannel.conf #编写配置文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('{\n "name":"cbr0",\n "cniVersion":"0.3.1",\n "type":"flannel",\n "deledate":{\n    "hairpinMode":true,\n    "isDefaultGateway":true\n  }\n\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h5",{attrs:{id:"_6-14-使用kubeadm-reset重置集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-14-使用kubeadm-reset重置集群"}},[s._v("#")]),s._v(" 6.14 使用kubeadm reset重置集群")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#在master节点之外的节点进行操作\nkubeadm reset\nsystemctl stop kubelet\nsystemctl stop docker\nrm -rf /var/lib/cni/\nrm -rf /var/lib/kubelet/*\nrm -rf /etc/cni/\nifconfig cni0 down\nifconfig flannel.1 down\nifconfig docker0 down\nip link delete cni0\nip link delete flannel.1\n##重启kubelet\nsystemctl restart kubelet\n##重启docker\nsystemctl restart docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("h5",{attrs:{id:"_6-15-重启kubelet和docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-15-重启kubelet和docker"}},[s._v("#")]),s._v(" 6.15 重启kubelet和docker")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 重启kubelet\nsystemctl restart kubelet\n# 重启docker\nsystemctl restart docker\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("使用配置文件启动fannel")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl apply -f kube-flannel.yml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("等待它安装完毕 发现已经是 集群的状态已经是Ready")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/2232696-20210621233106024-1676033717.png",alt:"img"}})]),s._v(" "),e("h5",{attrs:{id:"_6-16-kubeadm中的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-16-kubeadm中的命令"}},[s._v("#")]),s._v(" 6.16 kubeadm中的命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 生成 新的token\n[root@master ~]# kubeadm token create --print-join-command\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_7-集群测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-集群测试"}},[s._v("#")]),s._v(" 7 集群测试")]),s._v(" "),e("h5",{attrs:{id:"_7-1-创建一个nginx服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-创建一个nginx服务"}},[s._v("#")]),s._v(" 7.1 创建一个nginx服务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl create deployment nginx  --image=nginx:1.14-alpine\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"_7-2-暴露端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-暴露端口"}},[s._v("#")]),s._v(" 7.2 暴露端口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl expose deploy nginx  --port=80 --target-port=80  --type=NodePort\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"_7-3-查看服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-查看服务"}},[s._v("#")]),s._v(" 7.3 查看服务")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl get pod,svc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"_7-4-查看pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-查看pod"}},[s._v("#")]),s._v(" 7.4 查看pod")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/2232696-20210621233130477-111035427.png",alt:"img"}})]),s._v(" "),e("p",[s._v("浏览器测试结果：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/2232696-20210621233157075-1117518703.png",alt:"img"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);