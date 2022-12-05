(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{528:function(a,s,t){"use strict";t.r(s);var n=t(2),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ch05-nacos配置中心"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ch05-nacos配置中心"}},[a._v("#")]),a._v(" Ch05 Nacos配置中心")]),a._v(" "),s("p",[a._v("Nacos除了可以做注册中心，同样可以做配置管理来使用")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220415112632146.png",alt:"image-20220415112632146"}})]),a._v(" "),s("p",[a._v("除了统一配置管理，还能实现服务的热更新，不用每次都重启服务")]),a._v(" "),s("h3",{attrs:{id:"在nacos中添加配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在nacos中添加配置文件"}},[a._v("#")]),a._v(" 在nacos中添加配置文件")]),a._v(" "),s("p",[a._v("如何在nacos中管理配置？")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714164742924.png",alt:"image-20210714164742924"}})]),a._v(" "),s("p",[a._v("然后在弹出的表单中，填写配置信息：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714164856664.png",alt:"image-20210714164856664"}})]),a._v(" "),s("blockquote",[s("p",[a._v("注意：项目的核心配置，需要热更新的配置才有放到nacos管理的必要。基本不会变更的一些配置还是保存在微服务本地比较好。")])]),a._v(" "),s("h3",{attrs:{id:"从微服务拉取配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从微服务拉取配置"}},[a._v("#")]),a._v(" 从微服务拉取配置")]),a._v(" "),s("p",[a._v("微服务要拉取nacos中管理的配置，并且与本地的application.yml配置合并，才能完成项目启动。")]),a._v(" "),s("p",[a._v("但如果尚未读取application.yml，又如何得知nacos地址呢？")]),a._v(" "),s("p",[a._v("因此spring引入了一种新的配置文件：bootstrap.yaml文件，会在application.yml之前被读取，流程如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/L0iFYNF.png",alt:"img"}})]),a._v(" "),s("p",[a._v("1）引入nacos-config依赖")]),a._v(" "),s("p",[a._v("首先，在user-service服务中，引入nacos-config的客户端依赖：")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!--nacos配置管理依赖--\x3e")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.alibaba.cloud"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("spring-cloud-starter-alibaba-nacos-config"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("2）添加bootstrap.yaml")]),a._v(" "),s("p",[a._v("然后，在user-service中添加一个bootstrap.yml文件，内容如下："),s("strong",[a._v("这里一定要把application.yml中的重复配置删掉")])]),a._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("application")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" userservice "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 服务名称")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("active")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" dev "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#开发环境，这里是dev ")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cloud")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nacos")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("server-addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8848")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Nacos地址")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("file-extension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" yaml "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 文件后缀名")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("p",[a._v("这里会根据spring.cloud.nacos.server-addr获取nacos地址，再根据")]),a._v(" "),s("p",[s("code",[a._v("${spring.application.name}-${spring.profiles.active}.${spring.cloud.nacos.config.file-extension}")]),a._v("作为文件id，来读取配置。")]),a._v(" "),s("p",[a._v("本例中，就是去读取"),s("code",[a._v("userservice-dev.yaml")]),a._v("：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714170845901.png",alt:"image-20210714170845901"}})]),a._v(" "),s("p",[a._v("3）读取nacos配置")]),a._v(" "),s("p",[a._v("在user-service中的UserController中添加业务逻辑，读取pattern.dateformat配置：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714170337448.png",alt:"image-20210714170337448"}})]),a._v(" "),s("h3",{attrs:{id:"配置热更新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置热更新"}},[a._v("#")]),a._v(" 配置热更新")]),a._v(" "),s("p",[a._v("我们最终的目的，是修改nacos中的配置后，微服务中无需重启即可让配置生效，也就是"),s("strong",[a._v("配置热更新")]),a._v("。")]),a._v(" "),s("p",[a._v("要实现配置热更新，可以使用两种方式：")]),a._v(" "),s("h4",{attrs:{id:"方式一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[a._v("#")]),a._v(" 方式一")]),a._v(" "),s("p",[a._v("在@Value注入的变量所在类上添加注解@RefreshScope：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714171036335.png",alt:"image-20210714171036335"}})]),a._v(" "),s("h4",{attrs:{id:"方式二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[a._v("#")]),a._v(" 方式二")]),a._v(" "),s("p",[a._v("使用@ConfigurationProperties注解代替@Value注解。这样就可以不用refreshScope了")]),a._v(" "),s("p",[a._v("在user-service服务中，添加一个类，读取patterrn.dateformat属性：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("cn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("itcast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("lombok"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Data")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("boot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("properties"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConfigurationProperties")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token import"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("org"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("springframework"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("stereotype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Component")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Component")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Data")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@ConfigurationProperties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("prefix "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pattern"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("PatternProperties")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" dateformat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("在UserController中使用这个类代替@Value：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20210714171316124.png",alt:"image-20210714171316124"}})]),a._v(" "),s("p",[a._v("如果在配置类中报错的话："),s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220415235004161.png",alt:"image-20220415235004161"}})]),a._v(" "),s("p",[a._v("在该模块的pom.xml文件里面加入：")]),a._v(" "),s("div",{staticClass:"language-xm line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("<dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-configuration-processor</artifactId>\n            <optional>true</optional>\n        </dependency>\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220415235139895.png",alt:"image-20220415235139895"}})]),a._v(" "),s("h2",{attrs:{id:"nacos配置共享"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nacos配置共享"}},[a._v("#")]),a._v(" Nacos配置共享")]),a._v(" "),s("p",[a._v("其实微服务启动时，会去nacos读取多个配置文件，例如：")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("[spring.application.name]-[spring.profiles.active].yaml")]),a._v("，例如：userservice-dev.yaml")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("[spring.application.name].yaml")]),a._v("，例如：userservice.yaml")])])]),a._v(" "),s("p",[a._v("而"),s("code",[a._v("[spring.application.name].yaml")]),a._v("不包含环境，因此可以被多个环境共享。")])])}),[],!1,null,null,null);s.default=e.exports}}]);