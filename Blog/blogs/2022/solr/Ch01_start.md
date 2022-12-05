---
title: Ch01 docker安装(有问题，待解决)
date: 2022-04-19
tags:
 - Solr
categories:
 - Solr

---

# Ch01 docker安装(有问题，待解决)

## install

根据docker官网，在服务器的docker中安装solr

https://hub.docker.com/_/solr



```sh
docker pull solr
docker volume create solrVolume
docker volume inspect solrVolume
# /var/lib/docker/volumes/solrVolume/_data
# docker run -d --name solr -p 8983:8983  -e SOLR_OPTS="$SOLR_OPTS -Dsolr.allowPaths=*" -v # solrVolume:/opt/solr-8.11.1 solr
docker run -d --name solr -p 8983:8983 -v solrVolume:/opt/solr-8.11.1 solr
```



在启动的时候通过命令改配置文件solr.in.sh：

![image-20220617114424607](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220617114424607.png)





使用服务器ip+端口可以访问solr admin



## Solr文件结构

![image-20220615221836029](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220615221836029.png)



## 新建一个core

找到配置文件的位置：

物理机：

/var/lib/docker/volumes/solrVolumn/_data/server/solr/configsets/sample_techproducts_configs



docker容器内：

/opt/solr-8.11.1/server/solr/configsets/sample_techproducts_configs







使用容器内的位置作为instanceDir：

> 有问题，待解决







