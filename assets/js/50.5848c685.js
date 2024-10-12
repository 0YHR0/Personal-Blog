(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{447:function(t,a,m){"use strict";m.r(a);var r=m(2),s=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"fsm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fsm"}},[t._v("#")]),t._v(" FSM")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110190819685.png",alt:"image-20230110190819685"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110190828800.png",alt:"image-20230110190828800"}})]),t._v(" "),a("ul",[a("li",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110190904439.png",alt:"image-20230110190904439"}})]),t._v(" "),a("li",[t._v("第一个moore，第二个mealy"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111103146932.png",alt:"image-20230111103146932"}})]),t._v(" "),a("li",[t._v("右边是moore，因为和input无关"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111103247311.png",alt:"image-20230111103247311"}})])]),t._v(" "),a("h5",{attrs:{id:"给状态编码的时候-可能有多余的状态-就会引起异常-比如红绿灯-而且不会返回正确的状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给状态编码的时候-可能有多余的状态-就会引起异常-比如红绿灯-而且不会返回正确的状态"}},[t._v("#")]),t._v(" 给状态编码的时候，可能有多余的状态，就会引起异常，比如红绿灯，而且不会返回正确的状态")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220410232.png",alt:"image-20230110220410232"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220422886.png",alt:"image-20230110220422886"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220428781.png",alt:"image-20230110220428781"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220438117.png",alt:"image-20230110220438117"}})]),t._v(" "),a("ul",[a("li",[t._v("解决方案1：把状态图画完整"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230110220538205.png",alt:"image-20230110220538205"}})]),t._v(" "),a("li",[t._v("解决方案2：重新选择状态编码"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111000825044.png",alt:"image-20230111000825044"}})])]),t._v(" "),a("p",[t._v("门电路会有延迟，为了避免出现不想要的状态可以在输出的地方加一个Flipflop，但是这样就会要把时钟信号设计的非常大"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111000850909.png",alt:"image-20230111000850909"}})]),t._v(" "),a("p",[t._v("寄存器有好多D flipflop产生"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111001100908.png",alt:"image-20230111001100908"}})]),t._v(" "),a("p",[t._v("FSM可以用State diagram或者ASM来表达")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111095743048.png",alt:"image-20230111095743048"}})]),t._v(" "),a("ul",[a("li",[t._v("在state里面的是moore，在线上的是mealy")])]),t._v(" "),a("p",[t._v("ASM")]),t._v(" "),a("ul",[a("li",[t._v("一个框框是一个状态")]),t._v(" "),a("li",[t._v("因为moore只和输入有关系，所以在状态改变的一开始，但是mealy会根据输入做一些判断")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111104536733.png",alt:"image-20230111104536733"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111105022241.png",alt:"image-20230111105022241"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111105218046.png",alt:"image-20230111105218046"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111105402179.png",alt:"image-20230111105402179"}})]),t._v(" "),a("ul",[a("li",[t._v("框把状态和两条输出边给框起来"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111105531568.png",alt:"image-20230111105531568"}})])]),t._v(" "),a("p",[t._v("state的方框里是register：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111111150162.png",alt:"image-20230111111150162"}})]),t._v(" "),a("p",[t._v("控制状态转换是transitions"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111111217760.png",alt:"image-20230111111217760"}})]),t._v(" "),a("p",[t._v("输出与状态之间是moore"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230111111256256.png",alt:"image-20230111111256256"}})]),t._v(" "),a("ul",[a("li",[t._v("Distriburted RAM 不同步读，同步写、\n"),a("ul",[a("li",[t._v("要实现同步读可以加一个FF")])])]),t._v(" "),a("li",[t._v("Block RAM 同步读，同步写")])])])}),[],!1,null,null,null);a.default=s.exports}}]);