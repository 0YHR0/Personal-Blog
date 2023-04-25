---
title: Ch11 k8s deployment
date: 2022-04-17
tags:
 - Java
 - Spring Cloud
 - K8s
categories:
 - Spring Cloud

---



# Ch11 k8s部署springCloud

https://zhuanlan.zhihu.com/p/448297704

### git

```sh
git clone xxx
```



安装maven, java

```sh
sudo apt install maven
```



使用maven构建项目

```sh
mvn clean package -D maven.test.skip=true -P prod

mvn clean package：清除目录中生成的结果，做一个清除，重新打新的包。
-D maven.test.skip: 跳过单元测试，写的测试用例，如果写的有问题，是编译不过去的
-P prod: 使用哪一套配置文件

[root@k8s-master simple-microservice-dev1]# mvn clean package -D maven.test.skip=true

```

**构建完成会多出一个target，在源码中是没有这个target**

target里面有一个jar包，这个就是我们部署的包，打包到镜像中部署到k8s中

![image-20220820234226913](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220820234226913.png)



Dockerfile:

```dockerfile
FROM java:8-jdk-alpine
COPY ./target/app.jar ./
EXPOSE 8088
CMD java -jar /app.jar
```



```sh
docker build -t dbservice:1.0.0 .

```



在dockerhub上创建仓库：https://hub.docker.com/repository/docker/0yhr0/informationsystem/general

登录·：账号不是邮箱，是用户名0yhr0

```docker
docker login
```



```
docker tag dbservice:1.0.0 0yhr0/informationsystem:1.0.0
docker push 0yhr0/informationsystem:1.0.0
```



dbservice.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: dbservice
  namespace: dev
spec:
  replicas: 2
  selector:
    matchLabels:
      run: dbservice
  template:
    metadata:
      labels:
        run: dbservice
    spec:
      containers:
        - image: 0yhr0/informationsystem:1.0.0
          name: dbservice
          ports:
            - containerPort: 8088
              protocol: TCP
---
kind: Service
apiVersion: v1
metadata:
  name: dbservice
  namespace: dev
spec:
  selector:
    run: dbservice
  type: NodePort
  sessionAffinity: ClientIP
  ports: # 端口信息
    - protocol: TCP
      port: 8088  # service端口
      targetPort: 8088 # pod端口
      nodePort: 31000 # 主机端口
```

