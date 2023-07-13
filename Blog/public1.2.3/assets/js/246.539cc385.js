(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{648:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ch09-feign-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch09-feign-config"}},[t._v("#")]),t._v(" Ch09 Feign config")]),t._v(" "),a("h2",{attrs:{id:"自定义配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义配置"}},[t._v("#")]),t._v(" 自定义配置")]),t._v(" "),a("p",[t._v("Feign可以支持很多的自定义配置，如下表所示：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("作用")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[t._v("feign.Logger.Level")])]),t._v(" "),a("td",[t._v("修改日志级别")]),t._v(" "),a("td",[t._v("包含四种不同的级别：NONE、BASIC、HEADERS、FULL")])]),t._v(" "),a("tr",[a("td",[t._v("feign.codec.Decoder")]),t._v(" "),a("td",[t._v("响应结果的解析器")]),t._v(" "),a("td",[t._v("http远程调用的结果做解析，例如解析json字符串为java对象")])]),t._v(" "),a("tr",[a("td",[t._v("feign.codec.Encoder")]),t._v(" "),a("td",[t._v("请求参数编码")]),t._v(" "),a("td",[t._v("将请求参数编码，便于通过http请求发送")])]),t._v(" "),a("tr",[a("td",[t._v("feign. Contract")]),t._v(" "),a("td",[t._v("支持的注解格式")]),t._v(" "),a("td",[t._v("默认是SpringMVC的注解")])]),t._v(" "),a("tr",[a("td",[t._v("feign. Retryer")]),t._v(" "),a("td",[t._v("失败重试机制")]),t._v(" "),a("td",[t._v("请求失败的重试机制，默认是没有，不过会使用Ribbon的重试")])])])]),t._v(" "),a("p",[t._v("一般情况下，默认值就能满足我们使用，如果要自定义时，只需要创建自定义的@Bean覆盖默认Bean即可。")]),t._v(" "),a("p",[t._v("下面以日志为例来演示如何自定义配置")]),t._v(" "),a("h3",{attrs:{id:"_1-配置文件方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置文件方式"}},[t._v("#")]),t._v(" 1.配置文件方式")]),t._v(" "),a("p",[t._v("基于配置文件修改feign的日志级别可以针对单个服务：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("feign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("userservice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 针对某个微服务的配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loggerLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FULL "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  日志级别 ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("也可以针对所有服务：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("feign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里用default就是全局配置，如果是写服务名称，则是针对某个微服务的配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loggerLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" FULL "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  日志级别 ")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("而日志的级别分为四种：")]),t._v(" "),a("ul",[a("li",[t._v("NONE：不记录任何日志信息，这是默认值。")]),t._v(" "),a("li",[t._v("BASIC：仅记录请求的方法，URL以及响应状态码和执行时间")]),t._v(" "),a("li",[t._v("HEADERS：在BASIC的基础上，额外记录了请求和响应的头信息")]),t._v(" "),a("li",[t._v("FULL：记录所有请求和响应的明细，包括头信息、请求体、元数据。")])]),t._v(" "),a("h3",{attrs:{id:"_2-java代码方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-java代码方式"}},[t._v("#")]),t._v(" 2.Java代码方式")]),t._v(" "),a("p",[t._v("也可以基于Java代码来修改日志级别，先声明一个类，然后声明一个Logger.Level的对象：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultFeignConfiguration")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Level")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("feignLogLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASIC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 日志级别为BASIC")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("如果要"),a("strong",[t._v("全局生效")]),t._v("，将其放到启动类的@EnableFeignClients这个注解中：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableFeignClients")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("defaultConfiguration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultFeignConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果是"),a("strong",[t._v("局部生效")]),t._v("，则把它放到对应的@FeignClient这个注解中：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@FeignClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"userservice"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" configuration "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefaultFeignConfiguration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220416232959287.png",alt:"image-20220416232959287"}})]),t._v(" "),a("h2",{attrs:{id:"_3-feign使用优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-feign使用优化"}},[t._v("#")]),t._v(" 3.Feign使用优化")]),t._v(" "),a("p",[t._v("Feign底层发起http请求，依赖于其它的框架。其底层客户端实现包括：")]),t._v(" "),a("p",[t._v("•URLConnection：默认实现，不支持连接池")]),t._v(" "),a("p",[t._v("•Apache HttpClient ：支持连接池")]),t._v(" "),a("p",[t._v("•OKHttp：支持连接池")]),t._v(" "),a("p",[t._v("因此提高Feign的性能主要手段就是使用"),a("strong",[t._v("连接池")]),t._v("代替默认的URLConnection。")]),t._v(" "),a("p",[t._v("这里我们用Apache的HttpClient来演示。")]),t._v(" "),a("p",[t._v("1）引入依赖")]),t._v(" "),a("p",[t._v("在order-service的pom文件中引入Apache的HttpClient依赖：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--httpClient的依赖 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.github.openfeign"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("feign-httpclient"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("2）配置连接池")]),t._v(" "),a("p",[t._v("在order-service的application.yml中添加配置：")]),t._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("feign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# default全局的配置")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loggerLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" BASIC "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 日志级别，BASIC就是基本的请求和响应信息")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("httpclient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开启feign对HttpClient的支持")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-connections")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大的连接数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max-connections-per-route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个路径的最大连接数")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220416233838710.png",alt:"image-20220416233838710"}})]),t._v(" "),a("h2",{attrs:{id:"_4-最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-最佳实践"}},[t._v("#")]),t._v(" 4.最佳实践")]),t._v(" "),a("p",[t._v("所谓最近实践，就是使用过程中总结的经验，最好的一种使用方式。")]),t._v(" "),a("p",[t._v("自习观察可以发现，Feign的客户端与服务提供者的controller代码非常相似：")]),t._v(" "),a("p",[t._v("feign客户端：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714190542730.png",alt:"image-20210714190542730"}})]),t._v(" "),a("p",[t._v("UserController：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714190528450.png",alt:"image-20210714190528450"}})]),t._v(" "),a("p",[t._v("有没有一种办法简化这种重复的代码编写呢？")]),t._v(" "),a("h3",{attrs:{id:"_1-继承方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-继承方式"}},[t._v("#")]),t._v(" 1.继承方式")]),t._v(" "),a("p",[t._v("一样的代码可以通过继承来共享：")]),t._v(" "),a("p",[t._v("1）定义一个API接口，利用定义方法，并基于SpringMVC注解做声明。")]),t._v(" "),a("p",[t._v("2）Feign客户端和Controller都集成改接口")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714190640857.png",alt:"image-20210714190640857"}})]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("简单")]),t._v(" "),a("li",[t._v("实现了代码共享")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("服务提供方、服务消费方紧耦合")])]),t._v(" "),a("li",[a("p",[t._v("参数列表中的注解映射并不会继承，因此Controller中必须再次声明方法、参数列表、注解")])])]),t._v(" "),a("h3",{attrs:{id:"_2-抽取方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-抽取方式"}},[t._v("#")]),t._v(" 2.抽取方式")]),t._v(" "),a("p",[t._v("将Feign的Client抽取为独立模块，并且把接口有关的POJO、默认的Feign配置都放到这个模块中，提供给所有消费者使用。")]),t._v(" "),a("p",[t._v("例如，将UserClient、User、Feign的默认配置都抽取到一个feign-api包中，所有微服务引用该依赖包，即可直接使用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714214041796.png",alt:"image-20210714214041796"}})]),t._v(" "),a("p",[t._v("缺点：会依赖很多用不到的方法")]),t._v(" "),a("h3",{attrs:{id:"_3-实现基于抽取的最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实现基于抽取的最佳实践"}},[t._v("#")]),t._v(" 3.实现基于抽取的最佳实践")]),t._v(" "),a("h4",{attrs:{id:"_1-抽取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-抽取"}},[t._v("#")]),t._v(" 1）抽取")]),t._v(" "),a("p",[t._v("首先创建一个module，命名为feign-api：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714204557771.png",alt:"image-20210714204557771"}})]),t._v(" "),a("p",[t._v("项目结构：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714204656214.png",alt:"image-20210714204656214"}})]),t._v(" "),a("p",[t._v("在feign-api中然后引入feign的starter依赖")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-starter-openfeign"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("然后，order-service中编写的UserClient、User、DefaultFeignConfiguration都复制到feign-api项目中")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714205221970.png",alt:"image-20210714205221970"}})]),t._v(" "),a("h4",{attrs:{id:"_2-在order-service中使用feign-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-在order-service中使用feign-api"}},[t._v("#")]),t._v(" 2）在order-service中使用feign-api")]),t._v(" "),a("p",[t._v("首先，删除order-service中的UserClient、User、DefaultFeignConfiguration等类或接口。")]),t._v(" "),a("p",[t._v("在order-service的pom文件中中引入feign-api的依赖：")]),t._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("cn.itcast.demo"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("feign-api"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("修改order-service中的所有与上述三个组件有关的导包部分，改成导入feign-api中的包")]),t._v(" "),a("h4",{attrs:{id:"_3-重启测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-重启测试"}},[t._v("#")]),t._v(" 3）重启测试")]),t._v(" "),a("p",[t._v("重启后，发现服务报错了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20210714205623048.png",alt:"image-20210714205623048"}})]),t._v(" "),a("p",[t._v("这是因为UserClient现在在cn.itcast.feign.clients包下，")]),t._v(" "),a("p",[t._v("而order-service的@EnableFeignClients注解是在cn.itcast.order包下，不在同一个包，无法扫描到UserClient。")]),t._v(" "),a("h4",{attrs:{id:"_4-解决扫描包问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-解决扫描包问题"}},[t._v("#")]),t._v(" 4）解决扫描包问题")]),t._v(" "),a("p",[t._v("方式一：")]),t._v(" "),a("p",[t._v("指定Feign应该扫描的包：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableFeignClients")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basePackages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cn.itcast.feign.clients"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("方式二：")]),t._v(" "),a("p",[t._v("指定需要加载的Client接口：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableFeignClients")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("clients "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);