---
title: Ch02 二进制文件安装
date: 2022-06-10
tags:
 - Solr
categories:
 - Solr


---

# Ch02 二进制文件安装

在官网下载binary releases：https://solr.apache.org/downloads.html

上传到服务器并解压, -C后面的参数是解压位置

```sh
tar -xvzf ./solr-8.11.1.tgz -C /home/haoran/solr
```

设置solr_home, 

```sh
# 只对当前shell生效
export solr_home=/home/haoran/solr/solr-8.11.1


# 或者切换到root下修改环境变量，对所有用户生效
vim /etc/profile
添加 export solr_home=/home/haoran/solr/solr-8.11.1
#运行以下代码重新加载环境变量
source /etc/profile
```



开启solr

```ps
cd $solr_home
bin/solr start -p 8983
```



之后就可以通过服务器ip:端口访问到solradmin

创建一个solrCore![image-20220617160104349](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220617160104349.png)

instanceDir设置为： /home/haoran/solr/solr-8.11.1/server/solr/configsets/sample_techproducts_configs



在$solr_home/example/exampledocs使用post.jar下载一些示例文件：

```sh
java -jar -Dc=solr_test_collection post.jar *.xml
```





