---
title: Ch00 Tensorflow basics
date: 2022-06-21
tags:
 - Tensorflow
categories:
 - Tensorflow
---

# Ch00 Tensorflow basics

![image-20220621213510643](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621213510643.png)



### 安装TF环境(不使用anaconda)

打开nvidia控制面板-->系统信息  查看CUDA版本

![image-20220621214415907](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621214415907.png)

一般安装的cuda工具低于等于自己驱动的版本就可以了。如果自己驱动版本太低，可以去官网下载新版的驱动装一下。（tensorflow-gpu版本2.0最低也要cuda版本10）



以下操作要在管理员权限下操作



```sh
如果只想专用cpu加速，安装
pip install --upgrade tensorflow
如果想使用gpu加速，还需要安装
pip install --upgrade tensorflow-gpu
```



安装以后还需要cuda显卡驱动

安装适合自己版本的cuda：https://developer.nvidia.com/cuda-11.1.1-download-archive?target_os=Windows&target_arch=x86_64&target_version=10&target_type=exenetwork



在这里选择自定义，点击下一步![image-20220621234457349](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621234457349.png)

选择第一个组件即可

![image-20220621234509039](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621234509039.png)

点击下一步继续安装（建议不要更换默认的自定义位置，如果系统盘内存实在不足，更改也没关系，记住安装的位置即可）



根据cuda版本下载对应的cudnn


解压下载下来的cudnn压缩包

![image-20220621234624771](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220621234624771.png)



ref：https://zhuanlan.zhihu.com/p/290670392



### 使用Anoconda

官网安装anoconda

查看显卡支持的cuda版本

![image-20220701215738033](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701215738033.png)

在此链接中看清cuda和cudnn版本

https://tensorflow.google.cn/install/source_windows#gpu

![image-20220701215822895](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701215822895.png)

对于我来说 我可以安装的CUDA是11.6以下的所有版本

+ 安装matplotlib

+ 使用prompt命令行工具，激活环境

  ```sh
  conda create -n TC2 python=3.7  //新建一个python3.7的环境，命名为TC2
  activate TC2
  conda install tensorflow-gpu //这里也可以指定版本,比如conda install tensorflow-gpu==2.1.0
  ```

  ![image-20220701222110092](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220701222110092.png)

+ 输入y确认。我们不需要再额外安装cuda和cudnn，因为他已经包含在安装的列表里了

  ```py
  conda list  //查看当前环境下安装的包
  ```

  已经成功安装了tensorflow-gpu2.1.0的版本

  ```py
  import tensorflow as tf
  tf.__version__  
  print("Num GPUs Available: ", len(tf.config.experimental.list_physical_devices('GPU')))
  ```

+ ref: https://www.cnblogs.com/jshmztl/p/13306837.html



修改CUDA cache size, 修改C盘模型缓存地点：

环境变量：

![image-20220702012259178](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220702012259178.png)



>  在GPU训练模型时可以加入以下代码：

```py
config = tf.compat.v1.ConfigProto(gpu_options = tf.compat.v1.GPUOptions(per_process_gpu_memory_fraction=0.8)
#device_count = {'GPU': 1}
)
config.gpu_options.allow_growth = True
session = tf.compat.v1.Session(config=config)
tf.compat.v1.keras.backend.set_session(session)

```

