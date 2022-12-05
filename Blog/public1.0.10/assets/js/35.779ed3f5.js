(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{437:function(a,s,e){"use strict";e.r(s);var t=e(2),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ch04-docker容器命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ch04-docker容器命令"}},[a._v("#")]),a._v(" Ch04 Docker容器命令")]),a._v(" "),s("h3",{attrs:{id:"_1-容器相关命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-容器相关命令"}},[a._v("#")]),a._v(" 1.容器相关命令")]),a._v(" "),s("p",[a._v("容器操作的命令如图：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731161950495.png",alt:"image-20210731161950495"}})]),a._v(" "),s("p",[a._v("容器保护三个状态：")]),a._v(" "),s("ul",[s("li",[a._v("运行：进程正常运行")]),a._v(" "),s("li",[a._v("暂停：进程暂停，CPU不再运行，并不释放内存")]),a._v(" "),s("li",[a._v("停止：进程终止，回收进程占用的内存、CPU等资源")])]),a._v(" "),s("p",[a._v("其中：")]),a._v(" "),s("ul",[s("li",[a._v("docker run：创建并运行一个容器，处于运行状态")]),a._v(" "),s("li",[a._v("docker pause：让一个运行的容器暂停")]),a._v(" "),s("li",[a._v("docker unpause：让一个容器从暂停状态恢复运行")]),a._v(" "),s("li",[a._v("docker stop：停止一个运行的容器")]),a._v(" "),s("li",[a._v("docker start：让一个停止的容器再次运行")]),a._v(" "),s("li",[a._v("docker rm：删除一个容器")])]),a._v(" "),s("h3",{attrs:{id:"_2-案例-创建并运行一个容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-案例-创建并运行一个容器"}},[a._v("#")]),a._v(" 2.案例-创建并运行一个容器")]),a._v(" "),s("p",[a._v("创建并运行nginx容器的命令：查看docker hub官网，看后面参数怎么写，不同的不一样")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" containerName "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" nginx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("命令解读：")]),a._v(" "),s("ul",[s("li",[a._v("docker run ：创建并运行一个容器")]),a._v(" "),s("li",[a._v("--name : 给容器起一个名字，比如叫做mn")]),a._v(" "),s("li",[a._v("-p ：将宿主机端口与容器端口映射，冒号左侧是宿主机端口，右侧是容器端口")]),a._v(" "),s("li",[a._v("-d：后台运行容器")]),a._v(" "),s("li",[a._v("nginx：镜像名称，例如nginx")])]),a._v(" "),s("p",[a._v("这里的"),s("code",[a._v("-p")]),a._v("参数，是将容器端口映射到宿主机端口。")]),a._v(" "),s("p",[a._v("默认情况下，容器是隔离环境，我们直接访问宿主机的80端口，肯定访问不到容器中的nginx。")]),a._v(" "),s("p",[a._v("现在，将容器的80与宿主机的80关联起来，当我们访问宿主机的80端口时，就会被映射到容器的80，这样就能访问到nginx了：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731163255863.png",alt:"image-20210731163255863"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220418231557918.png",alt:"image-20220418231557918"}})]),a._v(" "),s("p",[a._v("docker ps只能查看运行时的容器，可以-a 查看所有容器")]),a._v(" "),s("h3",{attrs:{id:"_3-案例-进入容器-修改文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-案例-进入容器-修改文件"}},[a._v("#")]),a._v(" 3.案例-进入容器，修改文件")]),a._v(" "),s("p",[s("strong",[a._v("需求")]),a._v("：进入Nginx容器，修改HTML文件内容，添加“YHR”")]),a._v(" "),s("p",[s("strong",[a._v("提示")]),a._v("：进入容器要用到docker exec命令。")]),a._v(" "),s("p",[s("strong",[a._v("步骤")]),a._v("：")]),a._v(" "),s("p",[a._v("1）进入容器。进入我们刚刚创建的nginx容器的命令为：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" mn "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("命令解读：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("docker exec ：进入容器内部，执行一个命令")])]),a._v(" "),s("li",[s("p",[a._v("-it : 给当前进入的容器创建一个标准输入、输出终端，允许我们与容器交互")])]),a._v(" "),s("li",[s("p",[a._v("mn ：要进入的容器的名称")])]),a._v(" "),s("li",[s("p",[a._v("bash：进入容器后执行的命令，bash是一个linux终端交互命令")])])]),a._v(" "),s("p",[a._v("2）进入nginx的HTML所在目录 /usr/share/nginx/html")]),a._v(" "),s("p",[a._v("容器内部会模拟一个独立的Linux文件系统，看起来如同一个linux服务器一样：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731164159811.png",alt:"image-20210731164159811"}})]),a._v(" "),s("p",[a._v("nginx的环境、配置、运行文件全部都在这个文件系统中，包括我们要修改的html文件。")]),a._v(" "),s("p",[a._v("查看DockerHub网站中的nginx页面，可以知道nginx的html目录位置在"),s("code",[a._v("/usr/share/nginx/html")])]),a._v(" "),s("p",[a._v("我们执行命令，进入该目录：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/share/nginx/html\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("查看目录下文件：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210731164455818.png",alt:"image-20210731164455818"}})]),a._v(" "),s("p",[a._v("3）修改index.html的内容")]),a._v(" "),s("p",[a._v("容器内没有vi命令，无法直接修改，我们用下面的命令来修改：")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s#Welcome to nginx#WELCOME\tYHR#g'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s#<head>#<head><meta charset=\"utf-8\">#g'")]),a._v(" index.html\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220418232919950.png",alt:"image-20220418232919950"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);