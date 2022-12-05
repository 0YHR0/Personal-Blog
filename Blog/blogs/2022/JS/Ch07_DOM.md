---
title: Ch07 DOM
date: 2019-09-30
tags:
 - dom
categories:
 - JS

---

# DOM

浏览器提供了一个document对象

注意：script标签一定要写在被修改对象之后，因为顺序读取执行

或者写在window.onload()函数内部，表示页面加载完成之后再执行

查找对象：

```js
var btn = document.getElementById("btn");//通过ID获取html中的btn对象
var btn1 = document.getElementsByTagName("button");//通过标签名来获取对象
var btn2 = document.getElementsByName("yhr");//通过标签中的name属性来获取对象
btn.innerHTML = "newnewnew";//把button的文字设置成新值，用innerHTML可以返回标签中的html代码
btn.onclick = function () {//给按钮绑定单击响应事件
    alert("click");
}
alert(btn == btn1[0] &&  btn == btn2[0]);//true
alert(btn2.name);//可以直接获取标签的属性名，除了class属性要用className
```

也可以通过元素查其子节点：

![image-20220529214350779](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529214350779.png)

实现图片上一张，下一张功能

```js
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var i = document.getElementsByTagName("img");
var img = i[0];
var count = 1;
pre.onclick = function () {
    if(count <= 1) {
        count = 1;
        img.src = "img/" + count + ".jpg";
        return;
    }
    img.src = "img/" + (--count) + ".jpg";

}
next.onclick = function () {
    if(count >= 3){
        count = 3;
        img.src = "img/" + count + ".jpg";
        return;
    }
    img.src = "img/" + (++count) + ".jpg";

}
```

```html
<div>
    <img src="img/1.jpg">
    <button id = "pre">UP</button>
    <button id = "next">DOWN</button>
</div>
```

功能强大：可以通过css选择器来获取元素，注意quarySelectorAll可以返回所有查询到的元素

```js
window.onload = function (){
    var div  = document.querySelector(".C div");//通过css选择器来获取元素
    div  = document.querySelectorAll(".C div");//可以返回所有查到的元素
    alert(div.innerHTML);
}
```

![image-20220529214434468](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529214434468.png)

```js
var li = document.createElement("li");//创建一个标签li
var t = document.createTextNode("TESTTT");//创建一个文本节点
li.appendChild(t);//把文本节点设置为li的子节点
var city = document.getElementById("city");//获取id为city的标签
city.appendChild(li);//把li设置到city节点下
li.parentNode.removeChild(li);//删除自己
city.innerHTML+="<li>newnewnew</li>";//也可以直接操作innerHTML，但是动作太大，建议结合使用
```

**用script修改样式值：使用sytle属性只能操作，获取内联样式**![image-20220529214454395](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529214454395.png)