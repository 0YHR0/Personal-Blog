(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{481:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ch05-docker数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch05-docker数据卷"}},[s._v("#")]),s._v(" Ch05 Docker数据卷")]),s._v(" "),a("p",[s._v("容器与数据（容器内文件）耦合")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731172440275.png",alt:"image-20210731172440275"}})]),s._v(" "),a("p",[s._v("**数据卷（volume）**是一个虚拟目录，指向宿主机文件系统中的某个目录。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731173541846.png",alt:"image-20210731173541846"}})]),s._v(" "),a("p",[s._v("一旦完成数据卷挂载，对容器的一切操作都会作用在数据卷对应的宿主机目录了。")]),s._v(" "),a("p",[s._v("这样，我们操作宿主机的/var/lib/docker/volumes/html目录，就等于操作容器内的/usr/share/nginx/html目录了")]),s._v(" "),a("h3",{attrs:{id:"_1-数据集操作命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据集操作命令"}},[s._v("#")]),s._v(" 1.数据集操作命令")]),s._v(" "),a("p",[s._v("数据卷操作的基本语法如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMAND"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("docker volume命令是数据卷操作，根据命令后跟随的command来确定下一步的操作：")]),s._v(" "),a("ul",[a("li",[s._v("create 创建一个volume")]),s._v(" "),a("li",[s._v("inspect 显示一个或多个volume的信息")]),s._v(" "),a("li",[s._v("ls 列出所有的volume")]),s._v(" "),a("li",[s._v("prune 删除未使用的volume")]),s._v(" "),a("li",[s._v("rm 删除一个或多个指定的volume")])]),s._v(" "),a("h3",{attrs:{id:"_2-创建和查看数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建和查看数据卷"}},[s._v("#")]),s._v(" 2.创建和查看数据卷")]),s._v(" "),a("p",[a("strong",[s._v("需求")]),s._v("：创建一个数据卷，并查看数据卷在宿主机的目录位置")]),s._v(" "),a("p",[s._v("① 创建数据卷")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume create html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("② 查看所有数据")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("结果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731173746910.png",alt:"image-20210731173746910"}})]),s._v(" "),a("p",[s._v("③ 查看数据卷详细信息卷")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume inspect html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("结果：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731173809877.png",alt:"image-20210731173809877"}})]),s._v(" "),a("p",[s._v("可以看到，我们创建的html这个数据卷关联的宿主机目录为"),a("code",[s._v("/var/lib/docker/volumes/html/_data")]),s._v("目录。")]),s._v(" "),a("h3",{attrs:{id:"_3-挂载数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-挂载数据卷"}},[s._v("#")]),s._v(" 3.挂载数据卷")]),s._v(" "),a("p",[s._v("我们在创建容器时，可以通过 -v 参数来挂载一个数据卷到某个容器内目录，命令格式如下：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mn "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" html:/root/html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":80\n  nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("这里的-v就是挂载数据卷的命令：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("-v html:/root/htm")]),s._v(" ：把html数据卷挂载到容器内的/root/html这个目录中")])]),s._v(" "),a("h3",{attrs:{id:"_3-1-案例-给nginx挂载数据卷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-案例-给nginx挂载数据卷"}},[s._v("#")]),s._v(" 3.1.案例-给nginx挂载数据卷")]),s._v(" "),a("p",[a("strong",[s._v("需求")]),s._v("：创建一个nginx容器，修改容器内的html目录内的index.html内容")]),s._v(" "),a("p",[s._v("步骤：")]),s._v(" "),a("p",[s._v("① 创建容器并挂载数据卷到容器内的HTML目录")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" mn "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" html:/usr/share/nginx/html "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":80 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("② 进入html数据卷所在位置，并修改HTML内容")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看html数据卷的位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" volume inspect html\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入该目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /var/lib/docker/volumes/html/_data\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" index.html\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_3-2-案例-给mysql挂载本地目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-案例-给mysql挂载本地目录"}},[s._v("#")]),s._v(" 3.2.案例-给MySQL挂载本地目录")]),s._v(" "),a("p",[s._v("容器不仅仅可以挂载数据卷，也可以直接挂载到宿主机目录上。关联关系如下：")]),s._v(" "),a("ul",[a("li",[s._v("带数据卷模式：宿主机目录 --\x3e 数据卷 ---\x3e 容器内目录")]),s._v(" "),a("li",[s._v("直接挂载模式：宿主机目录 ---\x3e 容器内目录（会覆盖容器内目录）")])]),s._v(" "),a("p",[s._v("如图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731175155453.png",alt:"image-20210731175155453"}})]),s._v(" "),a("p",[a("strong",[s._v("语法")]),s._v("：")]),s._v(" "),a("p",[s._v("目录挂载与数据卷挂载的语法是类似的：")]),s._v(" "),a("ul",[a("li",[s._v("-v [宿主机目录]:[容器内目录]")]),s._v(" "),a("li",[s._v("-v [宿主机文件]:[容器内文件]")])]),s._v(" "),a("p",[a("strong",[s._v("需求")]),s._v("：创建并运行一个MySQL容器，将宿主机目录直接挂载到容器")]),s._v(" "),a("p",[s._v("实现思路如下：")]),s._v(" "),a("p",[s._v("1）将mysql.tar文件上传到虚拟机，通过load命令加载为镜像")]),s._v(" "),a("p",[s._v("2）创建目录/tmp/mysql/data")]),s._v(" "),a("p",[s._v("3）创建目录/tmp/mysql/conf，将课前资料提供的hmy.cnf文件上传到/tmp/mysql/conf")]),s._v(" "),a("p",[s._v("4）去DockerHub查阅资料，创建并运行MySQL容器，要求：")]),s._v(" "),a("p",[s._v("① 挂载/tmp/mysql/data到mysql容器内数据存储目录")]),s._v(" "),a("p",[s._v("② 挂载/tmp/mysql/conf/hmy.cnf到mysql容器的配置文件(多个数据卷挂载就多个-v)")]),s._v(" "),a("p",[s._v("③ 设置MySQL密码")]),s._v(" "),a("h3",{attrs:{id:"_3-3-小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-小结"}},[s._v("#")]),s._v(" 3.3.小结")]),s._v(" "),a("p",[s._v("数据卷挂载与目录直接挂载的")]),s._v(" "),a("ul",[a("li",[s._v("数据卷挂载耦合度低，由docker来管理目录，但是目录较深，不好找")]),s._v(" "),a("li",[s._v("目录挂载耦合度高，需要我们自己管理目录，不过目录容易寻找查看")])])])}),[],!1,null,null,null);a.default=n.exports}}]);