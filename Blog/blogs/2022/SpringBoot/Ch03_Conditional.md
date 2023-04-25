---
title: Ch03 Conditional
date: 2021-08-11
tags:
 - Java
 - Spring
categories:
 - Springboot
---

**@Conditional**

条件装配， 满足一定的条件进行组件装配：

![image-20230425175146003](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175146003.png)

例子：

@ConditionalonBean：表示bean之间的依赖，只有容器中有指定的bean才会创建

yxb只有dog的bean被创建了才会创建

![image-20230425175208965](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175208965.png)



也可以把该注解放在配置类之上

![image-20230425175220022](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175220022.png)



**反向：意思是容器中没有指定bean的时候创建bean**

![image-20230425175231003](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175231003.png)



扩展：控制bean的加载顺序：

https://blog.csdn.net/qianshangding0708/article/details/107373538

1. @DependsOn	

   <img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175255042.png" alt="image-20230425175255042" style="zoom:33%;" />

2. 参数注入![image-20230425175316078](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425175316078.png)