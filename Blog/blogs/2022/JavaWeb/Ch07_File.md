---
title: Ch07_File
date: 2019-06-02
tags:
 - Java
categories:
 - JavaWeb
---

# File

文件上传：

1. 要有一个form标签，method=post请求

2. form标签的encType标签必须为multipart/form-data值

3. 在form中使用input type=“file”添加上传的文件

4. 编写服务器代码来处理上传的数据  

![image-20230426161811775](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161811775.png)



```html
<form action="http://localhost:8080/Webtest/file" method="post" enctype="multipart/form-data">
    username:<input type="text" name="username">
    photo:<input type="file" name="photo">
    <input type="submit" value="upload">
</form>
```



服务端处理：输出传入的文件

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//        System.out.println("12313");
//        获取表单数据的输入流
        ServletInputStream inputStream = request.getInputStream();
        //新建一个buffer，用来接收从流中读到的数据
        byte[] buffer = new byte[1024000];
        int len = inputStream.read(buffer);
        System.out.println(new String(buffer,0,len));

    }
```

https://www.bilibili.com/video/BV1Y7411K7zz?p=216&spm_id_from=pageDriver（P213-221）



![image-20230426161847438](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161847438.png)