---
title: Ch07 Yaml
date: 2021-08-16
tags:
 - Java
 - Spring
categories:
 - Springboot

---

# YAML

基本语法：

- key: value；kv之间有空格
- 大小写敏感

- 使用缩进表示层级关系
- 缩进不允许使用tab，只允许空格

- 缩进的空格数不重要，只要相同层级的元素左对齐即可
- '#'表示注释

- 字符串无需加引号，如果要加，''与""表示字符串内容 会被 转义/不转义

数据类型：![image-20230425180159002](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180159002.png)

示例：

 注意只有@Component的组件才可以用配置注入

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180235318.png" alt="image-20230425180235318" style="zoom:33%;" />

![image-20230425180248223](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180248223.png)

yaml：

![image-20230425180301910](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180301910.png)



使用controller输出：

![image-20230425180314141](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180314141.png)



在springboot中，可以使用application.yml或application.yaml来配置属性

有多个属性文件时会同时生效，其中优先级properties>yml>yaml

开启配置自动提示功能：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>
```

并且在打包的时候不把这个依赖打包进去

```xml
<configuration>
  <excludes>
    <exclude>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-configuration-processor</artifactId>
     </exclude>
   </excludes>
</configuration>
```

![image-20230425180346038](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425180346038.png)