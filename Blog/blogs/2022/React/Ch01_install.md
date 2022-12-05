---
title: Ch01 install react
date: 2022-05-11
tags:
 - react
categories:
 - React

---

# Install react

首先要装有nvm和nodejs

先安装nvm，再在nvm安装目录下新建一个nodejs文件夹，再用nvm install安装

修改环境变量到新建的nodejs目录下

![image-20220511104143293](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220511104143293.png)



```pow
nvm install node版本包
nvm ls 查看安装了哪些node版本包
nvm use node版本包（指定使用哪个版本的node）
记住一定要先修改环境变量再安装node包
```





使用脚手架工具安装react

```power
npx create-react-app demo
```



+ 查看新项目如何运行，看package.json文件的scripts 部分

+ package-lock.json是索引到本机上的一些包的

+ public放的是静态文件，所有的东西都会被注入到root里面![image-20220511115210536](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220511115210536.png)

+ src文件夹下所有的文件都可以删除，新建一个index.js， 按照模板写

+ ```jsx
  import ReactDOM from 'react-dom'
  
  // ReactDOM.render(组件名称，要注入的元素)
  ReactDOM.render(
      <h2> hello </h2>,
      document.getElementById("root")
  )
  ```
  
+ 在vscode中如果保存文件有问题，会自动格式化和红线

  + **禁用vscode里面的JS-CSS-HTML Formatter的插件， 然后重启vscode就不报错了**
  
    ![image-20220511142627179](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220511142627179.png)



+ 使用npm run start来启动项目
