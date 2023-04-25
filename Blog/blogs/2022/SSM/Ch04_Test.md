---
title: Ch04 Test
date: 2019-12-21
tags:
 - Java
 - Spring
categories:
 - Spring Cloud

---

# **Controller**

![image-20230425185402901](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185402901.png)



**首页jsp跳转注意：**

![image-20230425185412368](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185412368.png)



bootstrap美化界面

重定向可以防止重复提交表单

**新增学生：addstudent.jsp(****注意input要指定name属性，和实体类属性名相对应)**

```jsp
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>Add student</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 引入 Bootstrap -->
    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container">

    <div class="row clearfix">
        <div class="col-md-12 column">
            <div class="page-header">
                <h1>
                    <small>Add student</small>
                </h1>
            </div>
        </div>
    </div>
    <form action="${pageContext.request.contextPath}/student/addStudentAction" method="post">
        <div class="form-group">
            <label for="studentName">Student name:</label>
            <input type="text" class="form-control" id="studentName" placeholder="name" name="name"required>
        </div>
        <div class="form-group">
            <label for="studentEmail">Student email address:</label>
            <input type="email" class="form-control" id="studentEmail" placeholder="e-mail" name="email" required>
        </div>
        <div class="form-group">
            <label for="studentAge">Student Age:</label>
            <input type="number" class="form-control" id="studentAge" placeholder="age" name="age" required>
        </div>
        <button type="submit" class="btn btn-default">Add!</button>
    </form>
</div>
```



Controller：

![image-20230425185436382](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185436382.png)



**删除：**

![image-20230425185445593](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185445593.png)

![image-20230425185452027](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185452027.png)





# 常见异常

```java
java.lang.ClassCastException: class com.sun.proxy.$Proxy29 cannot be cast to class
```



![image-20230425185524888](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185524888.png)