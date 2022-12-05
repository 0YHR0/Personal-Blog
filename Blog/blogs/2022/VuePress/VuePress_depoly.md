---
title: Vuepress搭建博客+云服务器部署
date: 2020-12-25
tags:
 - Blog
 - Docker
 - Cloud server
categories:
 - Vuepress

---

# Vuepress搭建博客+云服务器部署

+ 安装 vuepress，最好不要用npm安装，因为依赖树会出错，截至2021/12/23，按照官方文档中使用yarn安装未发现问题https://vuepress.vuejs.org/zh/guide/getting-started.html![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/4cc9c0e8-7da9-4050-bad7-f569c62896a7-14899999.jpg)
+ 安装脚手架工具：npm install @vuepress-reco/theme-cli -g  
+ 创建项目：theme-cli init my-blog  #my-blog可替换成自己需要的项目名称AIA![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a38d9a29-0596-4827-902f-c867b9dca7bb-14899999.jpg)
+ 启动项目![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9521949d-c903-4cd5-9401-b31e8561f9fa-14899999.jpg)
+ 打包项目：npm run build(每次修改完笔记之后重新打包并部署)
+ 把打包好的public文件夹下的项目部署到nginx上
+ md中的图片必须复制到服务器上并且改成相对路径
+ 文件名不能有中文
+ 文件名不能带空格

