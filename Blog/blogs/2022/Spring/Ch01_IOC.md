---
title: Ch01 IOC
date: 2019-07-19
tags:
 - Spring
 - Java
categories:
 - Spring

---

# IOC

例：需要实现以下效果

![image-20230425181458073](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181458073.png)



使用Spring框架：

1.前两步可以交给spring来完成，即通过beans来创建对象（反射机制）

   以下为配置bean的方法，类名为包名.类名

   自动调用set方法赋值，此称作为一个ioc容器

![image-20230425181512458](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181512458.png)

2. 使用ioc容器创建对象

   ![image-20230425181530228](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181530228.png)



Bean的配置：

通过全类名反射的方式在IOC容器中配置bean，所以要求bean有无参构造方法

id： 标识容器的id

初始化IOC容器对象：用ApplicationContext（接口，底层是beanFactory）。

​    -- ClassPathXMLApplicationContext(类路径下的xml配置文件)

​    -- FileSystemXMLApplicationContext(从文件系统中加载配置文件)

​    最好使用id来getbean，使用反射的话要确保bean中class的唯一

引入其他bean配置文件：![image-20230425181550690](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181550690.png)



依赖注入的方式： （Car类）

   --属性注入：setter方法（最常用）<property></property>

   --构造器注入：构造器中赋值 <constructor -arg></constructor -arg>

如果字面值有特殊字符可以用![CDATA[XXX]]进行包裹

![image-20230425181604776](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181604776.png)

![image-20230425181614288](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181614288.png)

![image-20230425181624785](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181624785.png)



bean之间相互引用：（Person类，其中属性为Car类）

value只能表示基本数据类型，引用要用ref，值为别的bean的id

![image-20230425181638513](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181638513.png)

也可以使用内部bean：（可以不写id， 不能被外部bean引用）

![image-20230425181650077](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181650077.png)

使用级联赋值必须要在大类里面有get小类的方法：

![image-20230425181703852](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425181703852.png)



# 特殊类型的注入，c，p

![image-20230425182307764](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182307764.png)

![image-20230425182316913](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182316913.png)



**Property类（键值对，用来存放配置文件）的使用****：**

https://blog.csdn.net/bo123_/article/details/89059799

bean配置：

![image-20230425182333708](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182333708.png)



可以使用p命名空间来简化bean配置（需要导入命名空间p）：

**p命名**空间为通过set方法注入的简化版

**c命名**空间为通过构造器属性注入的简化版

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:c="http://www.springframework.org/schema/c"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="yhr" class="User">
        <property name="id" value="123"></property>
        <property name="name" value="yhr"></property>
    </bean>
    <bean id="zm" class="User" p:name="zm" p:id="456" ></bean>
    <bean id="yxb" class="User" c:id="444" c:name="yxb"></bean>

</beans>
```

Spring4.x可以泛型注入引用：

在父类中注解自动装配，可以为子类注入子类对应的泛型类型的成员变量的引用 ![image-20230425182356059](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182356059.png)



https://www.cnblogs.com/xiximayou/p/12161517.html



# Bean



bean 生命周期：https://www.cnblogs.com/zrtqsk/p/3735273.html

![image-20230425182508668](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182508668.png)



**XML:**

bean的自动装配：会自动装配所有属性，不够灵活，一般不用，只有在整合第三方框架时会用

Person类中包含属性：Car 和 Address

1. 使用byName自动装配：当bean的id与属性名一样时可以使用

![image-20230425182521565](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182521565.png)

2. 使用byType自动装配：必须要是唯一的类型

![image-20230425182538957](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182538957.png)

3. 不推荐使用constructor



**使用注解自动装配：**

1. 导入约束

2. 配置注解的支持

```java
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:c="http://www.springframework.org/schema/c" 
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd 
       http://www.springframework.org/schema/context 
       https://www.springframework.org/schema/context/spring-context.xsd">

    <bean id="yhr" class="User">
        <property name="id" value="123"></property>
        <property name="name" value="yhr"></property>
    </bean>
    <bean id="zm" class="User" p:name="zm" p:id="456" ></bean>
    <bean id="yxb" class="User" c:id="444" c:name="yxb"></bean>

    <context:annotation-config></context:annotation-config>

</beans>
```

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182613885.png" alt="image-20230425182613885" style="zoom:25%;" />

![image-20230425182625019](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182625019.png)



**@Autowired默认ByType，在相同类型有多个类的时候byname**

![image-20230425182641334](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182641334.png)



![image-20230425182700242](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182700242.png)



## bean作用域，继承，依赖，创建

![image-20230425182722628](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182722628.png)



bean之间的关系：

**继承**：使用bean中的parent属性, 可以覆盖父bean中的属性

![image-20230425182736251](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182736251.png)



可以在父bean中设置属性abstract = “true” 来表示该bean不能被实例化，只能作为模板给别的        bean继承

若一个bean中的class属性没有被指定，那么该bean必须被指定为一个抽象bean

**依赖**：使用bean中的depends-on属性，若没有依赖bean，则在初始化的时候会报错

![image-20230425182749524](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182749524.png)



前置依赖的bean会在本bean创建之前被创建好，若依赖于多个bean，则可以用逗号或者空格隔开。

用静态工厂方法来创建bean

1. 创建一个静态工厂类：

![image-20230425182809556](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182809556.png)

2. .配置bean![image-20230425182822915](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182822915.png)

3. 使用bean

   ![image-20230425182835423](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182835423.png)



用实例工厂方法来创建bean：

1.  创建一个实例工厂类：

![image-20230425182850388](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425182850388.png)

2.  配置文件：

![image-20230425183303335](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183303335.png)



使用Spring自带的接口，FactoryBean来配置bean：

1.创建一个FactoryBean，实现接口FactoryBean

![image-20230425183317034](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183317034.png)



2.配置文件：

![image-20230425183328861](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425183328861.png)



# **IOC容器中bean的生命周期管理：**

1. 调用构造器或者工厂方法来创建bean

2. 为bean中的属性赋值，以及对其他bean的引用

3. 调用bean的初始化方法

4. bean可以使用了

5. 当容器关闭时，调用destroy-method方法

before和after方法定义在Car类中

可以在bean的初始化时给属性inti-method和destory-method赋值：

![image-20230425184000914](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184000914.png)



创建bean的后置处理器：可以对bean中所有的对象进行处理，而不是对单一对象，可以在初始化前后进行操作，实现的接口为：postbefore（after）initialization

作用：检查bean的赋值是否正确以及按照一定的标准给bean的属性赋值

需要实现BeanPostProcessor接口，不需要配置id，IOC会自动识别

参数：bean即为创建的bean，beanName即为bean的id

返回值：程序拿到的bean（可以在实现的两个方法中设置返回的bean，甚至返回新的bean）

![image-20230425184015180](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184015180.png)

![image-20230425184031964](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184031964.png)
