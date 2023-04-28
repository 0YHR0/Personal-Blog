(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{465:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ch06-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ch06-dockerfile"}},[a._v("#")]),a._v(" Ch06 Dockerfile")]),a._v(" "),s("h2",{attrs:{id:"_1-镜像结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-镜像结构"}},[a._v("#")]),a._v(" 1.镜像结构")]),a._v(" "),s("p",[a._v("镜像是将应用程序及其需要的系统函数库、环境、配置、依赖打包而成。")]),a._v(" "),s("p",[a._v("我们以MySQL为例，来看看镜像的组成结构：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731175806273.png",alt:"image-20210731175806273"}})]),a._v(" "),s("p",[a._v("简单来说，镜像就是在系统函数库、运行环境基础上，添加应用程序文件、配置文件、依赖文件等组合，然后编写好启动脚本打包在一起形成的文件。")]),a._v(" "),s("h2",{attrs:{id:"_2-dockerfile语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-dockerfile语法"}},[a._v("#")]),a._v(" 2.Dockerfile语法")]),a._v(" "),s("p",[a._v("构建自定义的镜像时，并不需要一个个文件去拷贝，打包。")]),a._v(" "),s("p",[a._v("我们只需要告诉Docker，我们的镜像的组成，需要哪些BaseImage、需要拷贝什么文件、需要安装什么依赖、启动脚本是什么，将来Docker会帮助我们构建镜像。")]),a._v(" "),s("p",[a._v("而描述上述信息的文件就是Dockerfile文件。")]),a._v(" "),s("p",[s("strong",[a._v("Dockerfile")]),a._v("就是一个文本文件，其中包含一个个的"),s("strong",[a._v("指令(Instruction)")]),a._v("，用指令来说明要执行什么操作来构建镜像。每一个指令都会形成一层Layer。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731180321133.png",alt:"image-20210731180321133"}})]),a._v(" "),s("p",[a._v("更新详细语法说明，请参考官网文档： https://docs.docker.com/engine/reference/builder")]),a._v(" "),s("div",{staticClass:"language-dockerfile line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定基础镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" ubuntu:16.04")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置环境变量，JDK的安装目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" JAVA_DIR=/usr/local")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 拷贝jdk和java项目的包")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v(" ./jdk8.tar.gz "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_DIR")]),a._v("/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("COPY")]),a._v(" ./docker-demo.jar /tmp/app.jar")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 安装JDK")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("RUN")]),a._v(" cd "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_DIR")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),a._v("\n && tar -xf ./jdk8.tar.gz "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("\\")]),a._v("\n && mv ./jdk1.8.0_144 ./java8")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 配置环境变量,:意思时在原先的环境变量之上再添加新的环境变量")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" JAVA_HOME="),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_DIR")]),a._v("/java8")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENV")]),a._v(" PATH="),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PATH")]),a._v(":"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$JAVA_HOME")]),a._v("/bin")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 暴露端口")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("EXPOSE")]),a._v(" 8090")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 入口，java项目的启动命令")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token instruction"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ENTRYPOINT")]),a._v(" java -jar /tmp/app.jar")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br")])]),s("h3",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[a._v("#")]),a._v(" 例子：")]),a._v(" "),s("p",[a._v("把java项目打包成jar包，把jdk8.tar.gz和jar包一起拷贝进云服务器上的某个目录")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220419215943042.png",alt:"image-20220419215943042"}})]),a._v(" "),s("p",[a._v("进入该目录中运行：-t表示镜像名称：版本，后面的 . 表示dockerfile所在目录")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" javaweb:1.0 "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" javaweb "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("90")]),a._v(":8090 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" javaweb:1.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"基于java8构建java项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于java8构建java项目"}},[a._v("#")]),a._v(" 基于java8构建Java项目")]),a._v(" "),s("p",[a._v("虽然我们可以基于Ubuntu基础镜像，添加任意自己需要的安装包，构建镜像，但是却比较麻烦。所以大多数情况下，我们都可以在一些安装了部分软件的基础镜像上做改造。")]),a._v(" "),s("p",[a._v("例如，构建java项目的镜像，可以在已经准备了JDK的基础镜像基础上构建。")]),a._v(" "),s("p",[a._v("基于java:8-alpine镜像，将一个Java项目构建为镜像")]),a._v(" "),s("div",{staticClass:"language-doc line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("FROM java:8-alpine\nCOPY ./app.jar /tmp/app.jar\nEXPOSE 8090\nENTRYPOINT java -jar /tmp/app.jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220419221721501.png",alt:"image-20220419221721501"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);