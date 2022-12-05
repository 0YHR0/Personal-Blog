(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{519:function(t,a,i){"use strict";i.r(a);var c=i(2),e=Object(c.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ch11-policies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ch11-policies"}},[t._v("#")]),t._v(" Ch11 Policies")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Policy：requestor说我有什么条件，service说我需要什么条件才能提供服务，再由中间机构选择https://blog.csdn.net/yuwenruli/article/details/6675444")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ed56e6e1-45a5-4a07-809a-85c893405547-14899999.jpg",alt:"img"}})]),t._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/9ae09dae-88c8-497e-8497-f8389f5d9db0-14899999.jpg",alt:"img"}})])])]),t._v(" "),a("li",[a("p",[t._v("重要！policy what the quality of the service(QOS) ensured"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/2d3fe7db-e916-4bd6-9e6f-3c637df30edf-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/4b5a7fbf-9439-4efd-8f4a-3b159f8823f2-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("例子："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/e68f5c8f-31e5-40cf-af7e-be3be0b26909-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("Policy是一些Policy alternative，它可以包含0个或多个policy assertion，用户可以选择一个policy alternative，但是必须满足里面的所有条件才能享受服务")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("vocabulary of policy是policy中所有的assertion types")])]),t._v(" "),a("li",[a("p",[t._v("vocabulary of policy alternative是policy alternative中所有的assertion types")])]),t._v(" "),a("li",[a("p",[t._v("不能直接在policy中写assertion，只能写在其中的policy alternative中")])])])]),t._v(" "),a("li",[a("p",[t._v("Policy assertion是一个单一的要求")])]),t._v(" "),a("li",[a("p",[t._v("Policy assertion type是 policy assertion的一个抽象，一类policy")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Policy assertion type只能识别Qname，就是namespace：name，所以以下两个是相同的"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/a7d52e71-672f-4f8c-93fc-d9f4ea16a10f-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("只有在assertion里面的policy expression才会被识别，所以以下灰色的不会被识别，"),a("a",{attrs:{href:"fl:PaymentMethod"}},[t._v("fl:PaymentMethod")]),t._v("是一个assertion"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/95cc44d7-848b-44e1-9659-9c8e75e6e73f-14899999.jpg",alt:"img"}})])])])]),t._v(" "),a("li",[a("p",[t._v("Policy vocabulary是在一个policy中Policy assertion type的集合"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/9277f7ec-338e-42c9-98ca-197e825552dd-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("normal form的policy格式：第一个元素必须是ExactlyOne，不能引用别的")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/0f5c4966-651d-45bb-95de-572b34a6be25-14899999.jpg",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("例子："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/8b950e8c-6bc8-4491-9e2c-eb55a049fb25-14899999.jpg",alt:"img"}})])])]),t._v(" "),a("li",[a("p",[t._v("可以在一个policy中include其他的policy;")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("policy可以用name来标识他的uri"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/3b6da296-8170-4392-aa77-7f849047c9ba-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("用reference URI来引用"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/b39be4fe-b054-46d5-98fb-33c6403e5a10-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("引入后，会变成"),a("a",{attrs:{href:"wsp:All"}},[t._v("wsp:All")]),t._v("，其中的child和引入的一样，不能自己引用自己")])]),t._v(" "),a("li",[a("p",[t._v("例子：在同一个xml文档中用id表示并引用policy："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/808d810b-f971-4b2d-8e7b-1565130938bd-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("一个assertion中，只有直系child的第一个policy才生效"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/8b544f1f-ebc7-4d86-9b0a-f0880ed1b334-14899999.jpg",alt:"img"}})])])])]),t._v(" "),a("li",[a("p",[t._v("Compact form的policy格式："),a("a",{attrs:{href:"wsp:policy"}},[t._v("wsp:policy")]),t._v("=="),a("a",{attrs:{href:"wsp:All"}},[t._v("wsp:All")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("assertion默认是都要实现的，但是也可以用Optional属性表示某一个assertion可以是可选的，可实现也可以不实现"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/d3cdcdb6-b99a-4713-b590-d6c4ed3b1f9e-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("一样的意思，compact form和normal form的实现区别："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/4b8ed732-34d7-4d4a-882d-525da0ec4517-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("第一个表示所有都行，第二个表示所有都不行"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/6a8a85cb-c6ec-4874-97df-0e9a771e8f89-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("交换律：assertion没有顺序，可以随便交换")])]),t._v(" "),a("li",[a("p",[t._v("结合律："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/7006e579-9680-44d6-b56e-e4b2fd480e97-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("All中如果是空的，那么这行等于没写"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f476551d-e8ad-4986-9e05-4cd6d3771192-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("一样的嵌套也可以化简："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/fb4630b2-4ddc-4565-8d3a-9345fe03d197-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("分配律：")]),t._v(" "),a("p",[a("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b30f83af-35ce-4727-a0cf-673b60762392-14899999.jpg",alt:"img"}}),a("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9f0819e2-0471-4f28-9aa7-6370680a0cca-14899999.jpg",alt:"img"}}),a("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/171b0202-a031-4a0e-860c-e084cad53621-14899999.jpg",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("3表示不能访问，no interaction")])])]),t._v(" "),a("li",[a("p",[t._v("compact form转换为normal form例子：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("compact form："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/82dd8348-06cd-4db1-831e-1106ee5171d3-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("normal form："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/7ecfb2a8-ac08-4fd7-9a1d-66f82b27ff6f-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/67f86bd5-e9e4-4ec7-954c-f15c3009ce4d-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f4ab4c2a-0a9e-44f9-85d8-83960439dc50-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/5ac4ef6a-382c-46cb-aee1-7f511c634bec-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/cacef972-494f-4934-80a2-d149ea71bf61-14899999.jpg",alt:"img"}})])])])])])]),t._v(" "),a("li",[a("p",[t._v("Intersecting Policies：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("两个assertions是compatible的条件："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/7511bba0-8dae-47c9-9d7b-20371c76be3a-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("两个policy alternative是compatible的条件："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/5cf36e68-87ec-4108-9693-5cff0dcdd215-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("两个policy是compatible的条件："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/99a2dbc0-903e-4a6a-a312-48956c5103a7-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("WS-policy只关心Qname来判断是否是compatible的，而domain-specific compatibility processing关心Qname和attribute")])]),t._v(" "),a("li",[a("p",[t._v("Intersection类似assertion的交集，例子：只有compatible才能intersection"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/3cb4ab67-3753-4383-9f72-ce2eb7e1f6f3-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("最后的结果就叫Effective policy，他会被放在soap消息的头部，而且需要DSP"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/3f8d1363-bb6f-4ddf-b114-abcce2b06302-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("但是需要sementic post processing，否则如下图，单位不能又是美元又是欧元"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/dbb6606a-57cd-485d-bf8d-e9159e0058d6-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("例子：没有可以结合的就是incompatible"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/bb2fc5d2-78ce-498d-bedd-a02d62975958-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("例子：不用post processing，因为是不同的assertion"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/89ac81ff-b0a4-4072-9aa6-c092cc862b83-14899999.jpg",alt:"img"}})])])])]),t._v(" "),a("li",[a("p",[t._v("Policy attachment：把policy和subject绑定起来的方法：")]),t._v(" "),a("ul",[a("li",[a("ol",[a("li",[t._v("在subject的定义中加上")])])]),t._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[t._v("policy在外部定义，并external binding到subject上"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/7bec7cd2-6a90-4b6f-84cb-8c5bb0e33739-14899999.jpg",alt:"img"}})])])]),t._v(" "),a("li",[a("p",[t._v("可以这样绑定，例子："),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/5f3c7760-29ce-4c4e-a94a-f1ac0ae20936-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/80dd76d5-fdce-48d8-96e0-9e31e44ba4e3-14899999.jpg",alt:"img"}})])]),t._v(" "),a("li",[a("p",[t._v("merge：把多个policy合成一个，相当于笛卡尔积，规则如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/870d8dbc-bff4-464c-98f0-aabd2c9d9dc6-14899999.jpg",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("例子：P1和P2 merge"),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/54f34b23-cb2b-4826-ba57-e5a1c93c6031-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/19d43729-4d60-4604-854a-624b670b82c0-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/797f246a-f33c-49d1-a7ce-561569597d32-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/0b140331-64f7-4f9f-a340-da300a5fda62-14899999.jpg",alt:"img"}}),a("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/f4665e4c-c37b-4995-a2f6-b8587b21715e-14899999.jpg",alt:"img"}})])])]),t._v(" "),a("li",[a("p",[t._v("port type的policy只可以是与binding无关的，因为port type是binding的接口")])]),t._v(" "),a("li",[a("p",[t._v("message的policy也只可以是与binding无关的，因为message可能被多个port type引用")])]),t._v(" "),a("li",[a("p",[t._v("input, output, fault也是")])]),t._v(" "),a("li",[a("p",[t._v("policy可以attach到wsdl文件中的port type， binding， port中")])]),t._v(" "),a("li",[a("p",[t._v("在一个特定port的operation是两个policy的merge（port type：operation和binding：operation）")])])])]),t._v(" "),a("li",[a("p",[t._v("在一个已经部署好的资源上添加policy：用external attachments，不用改变他的definition，即开闭原则：以下文件就表示把一个policy attach到一个资源上，而不用改变原有代码")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/08a8ee7b-a4e5-4021-9241-18902f288926-14899999.jpg",alt:"img"}})]),t._v(" "),a("ul",[a("li",[t._v("例子：所有在这个uri下的文件都attach上这个policy"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/999750eb-8d8a-4ef8-999c-f5dfba5e8ff4-14899999.jpg",alt:"img"}})])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);