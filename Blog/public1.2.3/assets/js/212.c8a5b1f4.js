(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{609:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#controller"}},[s._v("#")]),s._v(" "),a("strong",[s._v("Controller")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185402901.png",alt:"image-20230425185402901"}})]),s._v(" "),a("p",[a("strong",[s._v("首页jsp跳转注意：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185412368.png",alt:"image-20230425185412368"}})]),s._v(" "),a("p",[s._v("bootstrap美化界面")]),s._v(" "),a("p",[s._v("重定向可以防止重复提交表单")]),s._v(" "),a("p",[s._v("**新增学生：addstudent.jsp(**"),a("strong",[s._v("注意input要指定name属性，和实体类属性名相对应)")])]),s._v(" "),a("div",{staticClass:"language-jsp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>\n<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n\n<html>\n<head>\n    <title>Add student</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    \x3c!-- 引入 Bootstrap --\x3e\n    <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">\n</head>\n<body>\n<div class="container">\n\n    <div class="row clearfix">\n        <div class="col-md-12 column">\n            <div class="page-header">\n                <h1>\n                    <small>Add student</small>\n                </h1>\n            </div>\n        </div>\n    </div>\n    <form action="${pageContext.request.contextPath}/student/addStudentAction" method="post">\n        <div class="form-group">\n            <label for="studentName">Student name:</label>\n            <input type="text" class="form-control" id="studentName" placeholder="name" name="name"required>\n        </div>\n        <div class="form-group">\n            <label for="studentEmail">Student email address:</label>\n            <input type="email" class="form-control" id="studentEmail" placeholder="e-mail" name="email" required>\n        </div>\n        <div class="form-group">\n            <label for="studentAge">Student Age:</label>\n            <input type="number" class="form-control" id="studentAge" placeholder="age" name="age" required>\n        </div>\n        <button type="submit" class="btn btn-default">Add!</button>\n    </form>\n</div>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("p",[s._v("Controller：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185436382.png",alt:"image-20230425185436382"}})]),s._v(" "),a("p",[a("strong",[s._v("删除：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185445593.png",alt:"image-20230425185445593"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185452027.png",alt:"image-20230425185452027"}})]),s._v(" "),a("h1",{attrs:{id:"常见异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见异常"}},[s._v("#")]),s._v(" 常见异常")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lang"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("ClassCastException")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Proxy29")]),s._v(" cannot be cast "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425185524888.png",alt:"image-20230425185524888"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);