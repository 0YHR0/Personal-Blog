---
title: Ch01 Create Project
date: 2019-10-18
tags:
 - Java
 - Mybatis
categories:
 - Mybatis

---



![image-20230426004331885](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426004331885.png)

![image-20230426004356369](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426004356369.png)



# **依赖：**

- mybatis依赖：

  ```xml
  <dependency>
          <groupId>org.mybatis</groupId>
          <artifactId>mybatis</artifactId>
          <version>3.5.6</version>
  </dependency>
  ```

+ mysql connector依赖：

  ```xml
  <dependency>
              <groupId>mysql</groupId>
              <artifactId>mysql-connector-java</artifactId>
              <version>8.0.15</version>
  </dependency>
  ```

+ junit依赖：

  ```xml
  <dependency>
             <groupId>junit</groupId>
             <artifactId>junit</artifactId>
             <version>4.11 </version>
             <scope>test</scope>
  </dependency>
  ```

+ 资源过滤：

  ```xml
  <build>
      <resources>
          <resource>
              <directory>src/main/java</directory><!--所在的目录-->
              <includes><!--包括目录下的.properties,.xml 文件都会扫描到-->
                  <include>**/*.properties</include>
                  <include>**/*.xml</include>
              </includes>
              <filtering>false</filtering>
          </resource>
      </resources>
  </build>
  ```

+ 指定jdk版本：在<build></build>中加入

  ```xml
  <plugins>
      <plugin>
          <artifactId>maven-compiler-plugin</artifactId>
          <version>3.1</version>
          <configuration>
              <source>1.8</source>
              <target>1.8</target>
          </configuration>
      </plugin>
  </plugins>
  ```

  

根据数据库表的设计创建实体类：

```xml
<dependencies>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.20</version>
    </dependency>
</dependencies>
```

![image-20230426004558257](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426004558257.png)



创建一个xml文件，一般对应接口的名字，也在dao目录下（以下为模板）dtd为约束文件，定义可以使用的标签，属性以及顺序等

- mapper是根标签，其中的属性namespace必须有值，不能为空，推荐使用接口的全限定名称，作用是参与识别sql语句
- mapper的里面可以写像Insert，update，delete，select等标签，里面是对应的语句
- id建议使用方法名
- resultType负责告诉Mybatis应该把返回的值赋值给哪个java对象，使用Java对象的全限定名称
- 注意sql语句不要加分号

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="org.mybatis.example.BlogMapper">
    <select id="selectBlog" resultType="Blog">
        select * from Blog where id = #{id}
    </select>
</mapper>
```

![image-20230426004627594](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426004627594.png)

创建Mybatis主配置文件：

放在resource目录下mybatis.xml（主要设置数据库链接和mapper对象的映射）

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
<!--            配置数据源-->
            <dataSource type="POOLED">
<!--                配置驱动-->
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/ssm?serverTimezone=GMT%2B8&amp;characterEncoding=utf-8&amp;useSSL=false"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>
    </environments>
<!--    指定其他mapper文件的位置,用于查找sql语句
        从target/classes开始的目录
        可以写多个mapper
-->
    <mappers>
        <mapper resource="com/yang/dao/StudentDao.xml"/>
    </mappers>
</configuration>
```

使用测试类来测试连接数据库



![image-20230426004716403](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426004716403.png)





# 日志

Mybatis官方文档：https://mybatis.org/mybatis-3/zh/getting-started.html

在mybatis主文件中配置日志：

在configuration中添加

```xml
<settings>
    <setting name="logImpl" value="STDOUT_LOGGING"/>
</settings>
```

![image-20230426004816465](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426004816465.png)



使用Log4j日志，可以通过配置文件修改日志的展示方式，更常用

1. 在主配置文件中设置日志

```xml
<setting name="logImpl" value="LOG4J"/>
```

2. 导入Log4j的包

```xml
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

3. 创建log4j的配置文件log4j.properties

```xml
#将等级为DEBUG的日志信息输出到console和file这两个目的地，console和file的定义在下面的代码
log4j.rootLogger=DEBUG,console,file

#控制台输出的相关设置
log4j.appender.console = org.apache.log4j.ConsoleAppender
log4j.appender.console.Target = System.out
log4j.appender.console.Threshold=DEBUG
log4j.appender.console.layout = org.apache.log4j.PatternLayout
log4j.appender.console.layout.ConversionPattern=[%c]-%m%n

#文件输出的相关设置
log4j.appender.file = org.apache.log4j.RollingFileAppender
log4j.appender.file.File=./log/kuang.log
log4j.appender.file.MaxFileSize=10mb
log4j.appender.file.Threshold=DEBUG
log4j.appender.file.layout=org.apache.log4j.PatternLayout
log4j.appender.file.layout.ConversionPattern=[%p][%d{yy-MM-dd}][%c]%m%n

#日志输出级别
log4j.logger.org.mybatis=DEBUG
log4j.logger.java.sql=DEBUG
log4j.logger.java.sql.Statement=DEBUG
log4j.logger.java.sql.ResultSet=DEBUG
log4j.logger.java.sql.PreparedStatement=DEBUG
```

4. 在要使用log4j的包中导入：**注意是log4j中的Logger！**

![image-20230426004923566](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426004923566.png)

```java
logger.info("info:");
logger.debug("debug:");
logger.error("error:");
```

![image-20230426004939384](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426004939384.png)



# 工具类：

```java
public class MybatisUtil {
    public static SqlSessionFactory factory = null;
    static{
        String config = "mybatis.xml";
        InputStream input = null;
        try {
            input = Resources.getResourceAsStream(config);
        } catch (IOException e) {
            e.printStackTrace();
        }
        factory = new SqlSessionFactoryBuilder().build(input);
    }

    public static SqlSession getSqlSession(){
        SqlSession session = null;
        if(factory != null) session = factory.openSession();
        //factory.openSession(true); 每执行完一条sql语句自动提交事务。
        return session;
    }
}
```



Test:

![image-20230426005354341](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005354341.png)



# Dao代理

![image-20230426005431412](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005431412.png)

![image-20230426005438967](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005438967.png)



# 封装Mybatis输出结果+别名

![image-20230426005803643](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005803643.png)

![image-20230426005810620](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005810620.png)



# ResultMap

resultType：查询出来的列名必须要和java对象属性名一样

resultMap: 自定义列名和java对象属性的对应关系

用法：先定义再使用

在mapper文件中定义：

type是java对象的全限定名称

![image-20230426005835958](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005835958.png)



也可以在sql语句中使用列别名来达到效果，但是不推荐

![image-20230426005849983](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005849983.png)

![image-20230426005856384](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426005856384.png)



