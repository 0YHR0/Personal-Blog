(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{573:function(t,a,e){"use strict";e.r(a);var n=e(2),s=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"动态代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态代理"}},[t._v("#")]),t._v(" 动态代理")]),t._v(" "),a("p",[t._v("比如有100个class中，一共有10000个方法需要在执行之前加上“开始执行”，在执行结束之后加上“方法执行完毕”，就可以使用动态代理。")]),t._v(" "),a("p",[t._v("被动态代理的方法必须写在接口内，而实体类不支持动态代理")]),t._v(" "),a("p",[t._v("具体步骤为：")]),t._v(" "),a("ol",[a("li",[t._v("把被动态代理的方法写在接口内，并由一个真实的类class实现这个接口interface")]),t._v(" "),a("li",[t._v("新建一个代理对象类proxyclass，实现接口InvocationHandler，成员变量为Object，将来传入被代理的类，并且提供传入参数的方法")]),t._v(" "),a("li",[t._v("实现InvocationHandler中的invoke方法（将来method调用invoke方法时会自动跳转到此方法执行）【方法参数为：被代理的对象类；被代理的Method对象；方法参数】")]),t._v(" "),a("li",[t._v("在方法体内写需要如何代理，先写被代理方法执行前需要添加的语句，再写method.invoke方法，第一个参数为被代理对象，第二个参数为被代理方法的参数，以便来确定唯一的一个方法。最后写被代理方法执行之后需要添加的语句。")]),t._v(" "),a("li",[t._v("在main方法内创建一个被代理对象的interface上转型实例a，再创建一个代理对象的InvocationHandler接口的上转型实例，调用Proxy.newProxyInstance方法，返回值为interface实例（需要强制转换）【参数为：代理对象的类加载器；被代理对象的接口（使用getclass.getinterfaces（）方法）；代理对象】")]),t._v(" "),a("li",[t._v("最后使用a.方法名调用方法")])]),t._v(" "),a("p",[t._v("详情：https://blog.csdn.net/Dream_Weave/article/details/84183247")]),t._v(" "),a("p",[t._v("代码如下："),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426223908163.png",alt:"image-20230426223908163"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426223921771.png",alt:"image-20230426223921771"}})])])}),[],!1,null,null,null);a.default=s.exports}}]);