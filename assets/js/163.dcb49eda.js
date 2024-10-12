(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{560:function(t,r,a){"use strict";a.r(r);var i=a(2),e=Object(i.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"filter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" Filter")]),t._v(" "),r("p",[t._v("是一个接口，作用是拦截请求，过滤响应")]),t._v(" "),r("p",[t._v("过滤器常见的场景有：")]),t._v(" "),r("p",[t._v("1.权限检查")]),t._v(" "),r("p",[t._v("2.日志操作")]),t._v(" "),r("p",[t._v("3.事务管理....."),r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161442960.png",alt:"image-20230426161442960"}})]),t._v(" "),r("p",[t._v("Example：")]),t._v(" "),r("p",[t._v("要求：在web项目下新建一个admin文件夹，使得里面的文件（html文件，jsp文件等等）只有在用户登录之后才能访问。")]),t._v(" "),r("p",[t._v("由于用户登录后会把登录信息都保存到session域中，所以要检查用户是否登录，可以判断session中是否包含用户的信息即可。")]),t._v(" "),r("p",[t._v("配置web.xml文件")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161456326.png",alt:"image-20230426161456326"}})]),t._v(" "),r("h2",{attrs:{id:"filter的生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filter的生命周期"}},[t._v("#")]),t._v(" Filter的生命周期：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("构造器方法")])]),t._v(" "),r("li",[r("p",[t._v("init初始化方法")])])]),t._v(" "),r("p",[t._v("​    第1,2步在web工程被创建的时候就被执行")]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("doFilter过滤方法")])]),t._v(" "),r("p",[t._v("​    第三步每次拦截到请求就会执行")]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("destory销毁")])]),t._v(" "),r("p",[t._v("​    第4步，停止web工程的时候就会销毁")]),t._v(" "),r("p",[t._v("FilterConfig类：")]),t._v(" "),r("p",[t._v("tomcat每次创建一个filter时，也会创建一个FilterConfig类，用来存放filter配置信息（在init方法中可以在使用）")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("获取Filter的名称")])]),t._v(" "),r("li",[r("p",[t._v("获取Filter的init-para初始化参数（在web.xml中）")])]),t._v(" "),r("li",[r("p",[t._v("获取servletContext对象"),r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161518360.png",alt:"image-20230426161518360"}})])])]),t._v(" "),r("h2",{attrs:{id:"filterchain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filterchain"}},[t._v("#")]),t._v(" FilterChain")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426161542522.png",alt:"image-20230426161542522"}})])])}),[],!1,null,null,null);r.default=e.exports}}]);