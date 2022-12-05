(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{470:function(r,t,v){"use strict";v.r(t);var s=v(2),a=Object(s.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"jvm架构图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm架构图"}},[r._v("#")]),r._v(" JVM架构图")]),r._v(" "),t("ul",[t("li",[t("p",[t("strong",[r._v("本地方法栈")]),r._v("：存储一些本地方法，与系统调用有关")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("栈（线程）")]),r._v("：栈中存的局部变量，比如对象，存的是对象的引用。指向堆中的对象。每一个对象创建一个栈，每个方法为一个栈帧")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("堆")]),r._v("：存储对象的值")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("方法区（元空间）")]),r._v("：存储一些常量，静态变量以及类的信息。同样静态对象存的是引用，指向堆中的对象")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("程序计数器")]),r._v("：存储线程运行到的位置，以便中断后继续运行"),t("img",{attrs:{src:"C:%5CUsers%5CYHR%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20211225211032148.png",alt:"image-20211225211032148"}})])])]),r._v(" "),t("h1",{attrs:{id:"jvm垃圾回收机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm垃圾回收机制"}},[r._v("#")]),r._v(" JVM垃圾回收机制")]),r._v(" "),t("p",[t("strong",[r._v("堆中创建的对象存放空间：（在执行GC的时候会STW（stop the world，停止应用程序的所有线程））")])]),r._v(" "),t("ul",[t("li",[t("p",[r._v("对象创建先放在Eden区，等Eden区放满之后会进行一次minor GC，判断哪些对象没有引用指向它（使用可达性算法【从root开始找】并遍历堆中的所有对象），就删除对象并且把剩下的对象存入Survivor区中的一个，并把这些对象的年龄+1.")])]),r._v(" "),t("li",[t("p",[r._v("当第二次Eden区放满之后，相同的算法会回收Eden以及上一个Survivor区，并把剩下的对象放入另一个Survivor区，并年龄+1。如此往复，直到某个对象的年龄到达15，就把他放入老年代。（若文件过大【对象大于surviver区域的百分之50】，则直接放入老年代）")])]),r._v(" "),t("li",[t("p",[r._v("当老年代满了（或剩余空间小于minorgc时的平均内存大小）之后会执行full GC，相比minor GC，他会花费大量的时间。所以性能调优的时候首要缩短full GC 的次数。")])])]),r._v(" "),t("p",[t("strong",[r._v("对象结构")]),r._v("：")]),r._v(" "),t("p",[t("img",{attrs:{src:"C:%5CUsers%5CYHR%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20211225211307621.png",alt:"image-20211225211307621"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);