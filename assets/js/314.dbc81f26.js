(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{711:function(t,a,s){"use strict";s.r(a);var n=s(2),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"aop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[t._v("#")]),t._v(" AOP")]),t._v(" "),a("p",[t._v("底层使用动态代理实现:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184123612.png",alt:"image-20230425184123612"}})]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184141623.png",alt:"image-20230425184141623"}}),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184157253.png",alt:"image-20230425184157253"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184211673.png",alt:"image-20230425184211673"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184221117.png",alt:"image-20230425184221117"}})]),t._v(" "),a("p",[t._v("aspectj:在编译器或类加载的时候植入，不会创建一个全新的类")]),t._v(" "),a("p",[t._v("加入maven依赖：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.aspectj"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("aspectjweaver"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.9.7"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("使用aop步骤：")]),t._v(" "),a("p",[t._v("要代理的方法必须放在接口里，除非使用cglib（通过子类）")]),t._v(" "),a("ol",[a("li",[t._v("被代理的类：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184255055.png",alt:"image-20230425184255055"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("切面类："),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184312988.png",alt:"image-20230425184312988"}})]),t._v(" "),a("li",[t._v("xml配置文件："),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184324641.png",alt:"image-20230425184324641"}})])]),t._v(" "),a("p",[a("strong",[t._v("注意使用接口类接受bean")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184336133.png",alt:"image-20230425184336133"}})]),t._v(" "),a("p",[t._v("前置通知在方法执行之前被执行")]),t._v(" "),a("p",[t._v("后置通知在方法执行之后被执行（无论发不发生异常都会执行），还不能访问方法运行的结果")]),t._v(" "),a("ul",[a("li",[t._v("返回通知：可以获取运行的结果：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184349409.png",alt:"image-20230425184349409"}})]),t._v(" "),a("ul",[a("li",[t._v("异常通知：可以访问到异常:"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184406033.png",alt:"image-20230425184406033"}})]),t._v(" "),a("li",[t._v("环绕通知：类似于动态代理:"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184420890.png",alt:"image-20230425184420890"}})])]),t._v(" "),a("p",[t._v("切面优先级：")]),t._v(" "),a("p",[t._v("可以通过注解@order设置，值越小，优先级越高")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184432314.png",alt:"image-20230425184432314"}})]),t._v(" "),a("p",[t._v("可以使用@PointCut来声明切入点表达式：一般方法体内不写内容")]),t._v(" "),a("p",[t._v("后面其他通知直接引用切入点表达式来声明方法名")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184443263.png",alt:"image-20230425184443263"}})]),t._v(" "),a("p",[t._v("用xml配置文件来配置aop：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425184452594.png",alt:"image-20230425184452594"}})]),t._v(" "),a("p",[t._v("aop：config中必须包含pointcut和aspect")]),t._v(" "),a("p",[t._v("https://blog.csdn.net/u014785687/article/details/76861150")])])}),[],!1,null,null,null);a.default=r.exports}}]);