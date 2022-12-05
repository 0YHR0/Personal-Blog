---
title: Ch02 Class
date: 2019-09-10
tags:
 - JS
categories:
 - JS

---

# Class

注意：函数最好不要随意定义在外部，会污染命名空间

![image-20220529115329128](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529115329128.png)

```js
var obj = {name : "yhr"};
```



1. 可以用构造函数创建对象

   ```js
   function Person(name, age) {
       this.name = name;
       this.age = age;
       this.say = function a() {
           alert("aaa");
       }
   }
   ```

2. 可以用工厂方法创建函数

   ```js
   function fac(name, age) {
       var obj = new Object();
       obj.name = name;
       obj.age = age;
       return obj;
   }
   ```

3. 原型对象：当创建一个函数，解析器会自动向函数添加一个原型对象，对于普通函数，没用，对于构造函数，任何同一个构造函数new出来的对象所指向的原型对象是同一个，也就是一个公共空间，可以把公共的属性或函数写入原型对象中：

   ```js
   function pro(name, age){//构造函数
       this.name = name;
       this.age = age;
   }
   pro.prototype.a = 999;//向构造函数的原型对象中写入一个属性a的值为999
   pro.prototype.say = function () {//向原型对象中写入一个函数
       alert("sayyyy");
   
   }
   var p1 = new pro("aaa", 20);
   var p2 = new pro("bbb", 11);
   console.log(p1.a);//当访问属性时，如果对象内不存在，就会往原型对象里找
   console.log(p2.a);
   console.log(pro.prototype == p1.__proto__);//结果为true，注意访问方式不同
   p1.say();//调用原型对象中的方法
   ```

   一般修改原型对象的toString方法：

   ```js
   pro.prototype.toString = function () {
       return "age:  " + this.age + "  name: " + this.name;
   }
   ```

获取对象属性时可以用两个方法：

   1.对象名.属性名（固定）

2. 对象名[属性名] （常用来传递参数）

![image-20220529115502051](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529115502051.png)

遍历对象：

![image-20220529115514144](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529115514144.png)