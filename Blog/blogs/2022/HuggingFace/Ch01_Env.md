---
title: Ch01_Env
date: 2023-11-22
tags:
 - HuggingFace
categories:
 - NLP
---

# Env

+ 在windows上因为下载的模型默认放到c盘，我们可以修改路径
+ 设置缓存地址的方法，也就是设置TRANSFORMERS_CACHE环境变量，我将其设置在了用户环境变量里面：![image-20231122105829182](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231122105829182.png)
+ 接下来关键的一步：
  在用户环境变量Path或者系统环境变零PATH中添加：
  **%TRANSFORMERS_CACHE%**



## python下载依赖 PT-CPU

```sh
pip install torch==1.10.1+cpu torchvision==0.11.2+cpu torchaudio==0.10.1 -f https://download.pytorch.org/whl/cpu/torch_stable.html

#安装transformers
#pip安装
pip install transformers==4.18.0

#安装datasets
#pip安装
pip install datasets==2.4.0

#安装torchtext
pip install torchtext==0.11.2
```

