---
title: Ch00 Basic
date: 2023-07-09
tags:
 - K8s operator
 - Go
categories:
 - K8s

---

# ![image-20230930230856684](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230930230856684.png)

![image-20231107172328968](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107172328968.png)

# ClientGo

![image-20230930231408661](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230930231408661.png)

![image-20230930231422631](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230930231422631.png)

![image-20230930232002685](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230930232002685.png)

![image-20231001212053481](C:\Users\YHR\AppData\Roaming\Typora\typora-user-images\image-20231001212053481.png)







# windows本机minikube环境安装

1. 先开启Hyper-V

https://zhuanlan.zhihu.com/p/610918019?utm_id=0&wd=&eqid=ca2904790000c5f90000000664789158

新建这个bat脚本，以管理员身份运行，并重启电脑

```bash
pushd "%~dp0"

dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hv.txt

for /f %%i in ('findstr /i . hv.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"

del hv.txt

Dism /online /enable-feature /featurename:Microsoft-Hyper-V -All /LimitAccess /ALL

Pause
```

![image-20231001144123585](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001144123585.png)

这就安装完成了，可以在搜索命令中使用hyper-v管理器



2. 安装minikube

   ref： https://learnku.com/articles/71840

#### [下载 kubectl1.25](https://dl.k8s.io/release/v1.25.0/bin/windows/amd64/kubectl.exe) (连接和操作 k8s 系统的控制终端)[#](https://learnku.com/articles/71840#2ec29b)

下载文件的位置配置到环境变量

![image-20231001144338314](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001144338314.png)

#### [点击下载 minicube-1.25.exe (双击安装即可)](https://github.com/kubernetes/minikube/releases/download/v1.25.2/minikube-installer.exe)[#](https://learnku.com/articles/71840#c1ea7a)

同样安装位置配置到环境变量



3. #### 使用管理员打开命令行，执行下面命令 开启 Hyper-V

记住要用powershell，不是cmd

```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

#### 继续执行命令，使用 minikube 安装 k8s

```powershell
minikube start --driver=hyperv --memory=4096m --cpus=4 --image-mirror-country=cn
```



![image-20231001144456317](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001144456317.png)



若安装失败

```powershell
minikube delete --purge --all
```

![image-20231001144529445](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231001144529445.png)



测试：

```sh
minikube status

# 输出
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```



```sh
minikube dashboard # 打开面板
```





# 在Goland新建项目并下载go依赖

```sh
go get k8s.io/client-go@v0.23.3
```





