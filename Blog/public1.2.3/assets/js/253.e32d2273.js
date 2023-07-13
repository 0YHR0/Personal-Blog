(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{655:function(t,r,n){"use strict";n.r(r);var a=n(2),e=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153011412.png",alt:"image-20230426153011412"}})]),t._v(" "),r("p",[t._v("使用步骤：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153239481.png",alt:"image-20230426153239481"}})]),t._v(" "),r("p",[t._v("拦截器执行时间：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153248662.png",alt:"image-20230426153248662"}})]),t._v(" "),r("p",[r("strong",[t._v("实现两个拦截器：")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153302523.png",alt:"image-20230426153302523"}})]),t._v(" "),r("p",[r("strong",[t._v("在springmvc配置文件中配置拦截器")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153314548.png",alt:"image-20230426153314548"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"C:%5CUsers%5CYHR%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20230426153321641.png",alt:"image-20230426153321641"}})]),t._v(" "),r("p",[r("strong",[t._v("prehandle：预处理")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153337531.png",alt:"image-20230426153337531"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153347656.png",alt:"image-20230426153347656"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153401628.png",alt:"image-20230426153401628"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153412030.png",alt:"image-20230426153412030"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153423192.png",alt:"image-20230426153423192"}})]),t._v(" "),r("h1",{attrs:{id:"initbinder"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#initbinder"}},[t._v("#")]),t._v(" @initbinder")]),t._v(" "),r("p",[r("strong",[t._v("首先,该注解被解析的时机，是该匹配Controller的请求执行映射的方法之前; 同时 @InitBinder标注的方法执行是多次的，一次请求来就执行一次。")])]),t._v(" "),r("p",[r("strong",[t._v("当某个Controller上的第一次请求由SpringMvc前端控制器匹配到该Controller之后，根据Controller的 class 类型 查找 所有方法上标注了@InitBinder的方法，并且存入RequestMappingHandlerAdapter的 initBinderCache，下次一请求执行对应业务方法之前时,可以走initBinderCache缓存,而不用再去解析@InitBinder; 所以 initBinder是controller级别的，一个controller实例中的所有@initBinder 只对该controller有效；")])]),t._v(" "),r("p",[r("strong",[t._v("功能一：注册Controller级别的MCV属性编辑器（将web请求中的属性转换为我们需要的类型）")])]),t._v(" "),r("p",[t._v("@InitBinder唯一的一个属性value,作用是限制对哪些 @RequestMapping 方法起作用,具体筛选条件就是通过@RequestMapping方法入参来筛选，默认不写就代表对所有@RequestMapping的方法起作用;")]),t._v(" "),r("p",[t._v("@InitBinder标注的方法, 方法入参和 @RequestMapping方法入参可选范围一样(这里指的是比如"),r("strong",[t._v("HttpServletRequest")]),t._v("、"),r("strong",[t._v("ModelMap")]),t._v("这些)， 通常一个入参 "),r("strong",[t._v("WebDataBinder")]),t._v(" 就够我们使用了； @InitBinder标注的方法返回值, 必须为null，这里我理解的是运行期的返回值;如果运行时返回值不为null,抛出异常 "),r("a",{attrs:{href:"mailto:%E2%80%9C@InitBinder"}},[t._v("“@InitBinder")]),t._v(" methods should return void:”，编译时IDEA会提示@InitBinder应该返回null,但是不影响编译通过;")])])}),[],!1,null,null,null);r.default=e.exports}}]);