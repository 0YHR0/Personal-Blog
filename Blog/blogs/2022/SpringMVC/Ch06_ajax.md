---
title: Ch06 Ajax
date: 2020-01-28
tags:
 - Java
 - Spring
categories:
 - SpringMVC

---

# Ajax

![image-20230426154151935](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426154151935.png)



```js
jQuery.ajax(...)
      部分参数：
            url：请求地址
            type：请求方式，GET、POST（1.9.0之后用method）
        headers：请求头
            data：要发送的数据
    contentType：即将发送信息至服务器的内容编码类型(默认: "application/x-www-form-urlencoded; charset=UTF-8")
          async：是否异步
        timeout：设置请求超时时间（毫秒）
      beforeSend：发送请求前执行的函数(全局)
        complete：完成之后执行的回调函数(全局)
        success：成功之后执行的回调函数(全局)
          error：失败之后执行的回调函数(全局)
        accepts：通过请求头发送给服务器，告诉服务器当前客户端可接受的数据类型
        dataType：将服务器端返回的数据转换成指定类型
          "xml": 将服务器端返回的内容转换成xml格式
          "text": 将服务器端返回的内容转换成普通文本格式
          "html": 将服务器端返回的内容转换成普通文本格式，在插入DOM中时，如果包含JavaScript标签，则会尝试去执行。
        "script": 尝试将返回值当作JavaScript去执行，然后再将服务器端返回的内容转换成普通文本格式
          "json": 将服务器端返回的内容转换成相应的JavaScript对象
        "jsonp": JSONP 格式使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数
```



jsp

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>AJAX</title>
    <script src="${pageContext.request.contextPath}/statics/js/jquery-3.6.0.js"></script>
</head>
<body>
<script>
    function a(){
        $.ajax({
            method:"post",
            url:"${pageContext.request.contextPath}/ajax",
            data:{"name": $("#username").val()},
            success: function (data){
                alert(data);
            }

        })
    }
</script>
<%--失去焦点的时候发起请求--%>
<input id="username" type="text" onblur="a()">

</body>
</html>
```



Controller![image-20230426154223783](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426154223783.png)



**注意js入口函数，在页面加载完成后执行：**

传对象：

前端jsp：

![image-20230426154236028](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426154236028.png)

![image-20230426154244447](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426154244447.png)

controller：

![image-20230426154254554](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426154254554.png)



前端：

```html
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>User</title>
    <script src="${pageContext.request.contextPath}/statics/js/jquery-3.6.0.js"></script>
</head>
<body>
<script>
    $(function (){
        $("#btn").click(function (){
        alert("go--->");
        $.post({
            url:"${pageContext.request.contextPath}/getuser",
            success: function (data, status){
                alert("data-->" + data);
                console.log(data);
                alert("status--->" + status);
                var html = "";
                for(let i = 0; i < data.length;i++){
                    html+= "<tr>"
                        +"<td>" +data[i].username  + "</td>"
                        +"<td>" +data[i].age  + "</td>"
                        +"<td>" +data[i].email  + "</td>"
                        + "</tr>"
                }
                $("#content").html(html);
            }
        });
    })
                })
</script>
<button id="btn" >Get user!</button>
<table>
    <tr>
        <td>username</td>
        <td>age</td>
        <td>email</td>
    </tr>
    <tbody id="content">
<%--    后台数据--%>
    </tbody>
</table>


</body>
</html>
```



设置css：

![image-20230426154318320](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426154318320.png)