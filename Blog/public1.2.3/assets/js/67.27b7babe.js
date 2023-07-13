(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{464:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ch03-docker-镜像命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ch03-docker-镜像命令"}},[a._v("#")]),a._v(" Ch03 Docker 镜像命令")]),a._v(" "),s("h3",{attrs:{id:"_1-1-镜像名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-镜像名称"}},[a._v("#")]),a._v(" 1.1.镜像名称")]),a._v(" "),s("p",[a._v("首先来看下镜像的名称组成：")]),a._v(" "),s("ul",[s("li",[a._v("镜名称一般分两部分组成：[repository]:[tag]。")]),a._v(" "),s("li",[a._v("在没有指定tag时，默认是latest，代表最新版本的镜像")])]),a._v(" "),s("p",[a._v("如图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155141362.png",alt:"image-20210731155141362"}})]),a._v(" "),s("p",[a._v("这里的mysql就是repository，5.7就是tag，合一起就是镜像名称，代表5.7版本的MySQL镜像。")]),a._v(" "),s("h3",{attrs:{id:"_1-2-镜像命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-镜像命令"}},[a._v("#")]),a._v(" 1.2.镜像命令")]),a._v(" "),s("p",[a._v("常见的镜像操作命令如图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155649535.png",alt:"image-20210731155649535"}})]),a._v(" "),s("h3",{attrs:{id:"_1-3-案例1-拉取、查看镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-案例1-拉取、查看镜像"}},[a._v("#")]),a._v(" 1.3.案例1-拉取、查看镜像")]),a._v(" "),s("p",[a._v("需求：从DockerHub中拉取一个nginx镜像并查看")]),a._v(" "),s("p",[a._v("1）首先去镜像仓库搜索nginx镜像，比如"),s("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("DockerHub"),s("OutboundLink")],1),a._v(":")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155844368.png",alt:"image-20210731155844368"}})]),a._v(" "),s("p",[a._v("2）根据查看到的镜像名称，拉取自己需要的镜像，通过命令：docker pull nginx")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155856199.png",alt:"image-20210731155856199"}})]),a._v(" "),s("p",[a._v("3）通过命令：docker images 查看拉取到的镜像")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731155903037.png",alt:"image-20210731155903037"}})]),a._v(" "),s("h3",{attrs:{id:"_1-4-案例2-保存、导入镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-案例2-保存、导入镜像"}},[a._v("#")]),a._v(" 1.4.案例2-保存、导入镜像")]),a._v(" "),s("p",[a._v("需求：利用docker save将nginx镜像导出磁盘，然后再通过load加载回来")]),a._v(" "),s("p",[a._v("1）利用docker xx --help命令查看docker save和docker load的语法")]),a._v(" "),s("p",[a._v("例如，查看save命令用法，可以输入命令：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("结果：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731161104732.png",alt:"image-20210731161104732"}})]),a._v(" "),s("p",[a._v("命令格式：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("保存的目标文件名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("镜像名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("2）使用docker save导出镜像到磁盘")]),a._v(" "),s("p",[a._v("运行命令：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" nginx.tar nginx:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("结果如图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731161354344.png",alt:"image-20210731161354344"}})]),a._v(" "),s("p",[a._v("3）使用docker load加载镜像")]),a._v(" "),s("p",[a._v("先删除本地的nginx镜像：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" rmi nginx:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("然后运行命令，加载本地文件：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" load "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" nginx.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("结果：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731161746245.png",alt:"image-20210731161746245"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220418181748314.png",alt:"image-20220418181748314"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);