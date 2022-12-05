---
title: Ch01_Introduction
date: 2022-09-19
tags:
 - Jenkins
categories:
 - Jenkins

---

# Introduction

![image-20220806210421666](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220806210421666.png)



## k8s install jenkins

https://blog.csdn.net/qq_34285557/article/details/124763695

https://www.jenkins.io/doc/book/installing/kubernetes/#install-jenkins-with-yaml-files



## deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: jenkins
spec:
  replicas: 1
  selector:
    matchLabels:
      app: jenkins
  template:
    metadata:
      labels:
        app: jenkins
    spec:
      containers:
      - name: jenkins
        image: jenkins/jenkins:lts-jdk11
        ports:
        - containerPort: 8080
        volumeMounts:
        - name: jenkins-home
          mountPath: /var/jenkins_home
      volumes:
      - name: jenkins-home
        emptyDir: { }
```



## Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: jenkins
spec:
  type: NodePort
  ports:
  - port: 7096
    targetPort: 8080
  selector:
    app: jenkins
```

