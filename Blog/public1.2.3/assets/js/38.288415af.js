(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{435:function(t,a,s){"use strict";s.r(a);var r=s(2),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),a("h2",{attrs:{id:"process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[t._v("#")]),t._v(" Process")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101215408262.png",alt:"image-20221101215408262"}})]),t._v(" "),a("ul",[a("li",[t._v("process内部的语句是顺序执行的（并且会循环）")]),t._v(" "),a("li",[t._v("但是process A 和 process B的语句是并发执行的"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101215918766.png",alt:"image-20221101215918766"}})]),t._v(" "),a("li",[t._v("只有在process run完一次之后，signal才会更新数值")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101220320401.png",alt:"image-20221101220320401"}})]),t._v(" "),a("li",[t._v("要么有sensitivity list，要么有wait语句")]),t._v(" "),a("li",[t._v("process里的参数必须要是可以读的，比如说A是output就不能作为sensitivity list")]),t._v(" "),a("li",[t._v("process会一直重复执行，如果sensitivity list中有人的值被改变了")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101220837615.png",alt:"image-20221101220837615"}})]),t._v(" "),a("li")]),t._v(" "),a("h2",{attrs:{id:"if"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if"}},[t._v("#")]),t._v(" If")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101221007048.png",alt:"image-20221101221007048"}}),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101221958714.png",alt:"image-20221101221958714"}})]),t._v(" "),a("ul",[a("li",[t._v("优先级")]),t._v(" "),a("li",[t._v("可以被嵌套")])]),t._v(" "),a("h2",{attrs:{id:"case"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#case"}},[t._v("#")]),t._v(" case")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101221718841.png",alt:"image-20221101221718841"}}),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101221939750.png",alt:"image-20221101221939750"}})]),t._v(" "),a("ul",[a("li",[t._v("无优先级")]),t._v(" "),a("li",[t._v("即使是并发执行的，但是statements还是顺序执行的")]),t._v(" "),a("li",[t._v("不能有重复，并且要覆盖所有的情况"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101222105020.png",alt:"image-20221101222105020"}})])]),t._v(" "),a("h2",{attrs:{id:"有两种process-第一种不一定一定给一个sequential的-logic-如图-combinational-logic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有两种process-第一种不一定一定给一个sequential的-logic-如图-combinational-logic"}},[t._v("#")]),t._v(" 有两种process，第一种不一定一定给一个sequential的 logic，如图，combinational logic")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101222638204.png",alt:"image-20221101222638204"}})]),t._v(" "),a("h2",{attrs:{id:"clock-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clock-process"}},[t._v("#")]),t._v(" Clock process")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101223127287.png",alt:"image-20221101223127287"}})]),t._v(" "),a("ul",[a("li",[t._v("图中是上升沿的描述，记得加‘")]),t._v(" "),a("li",[a("strong",[t._v("所有在时钟事件下的的assignment语句，都会生成一个flip-flop")])]),t._v(" "),a("li",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221101223818080.png",alt:"image-20221101223818080"}})]),t._v(" "),a("li",[t._v("在clock process中，if event必须要写在process最后，在if中可以嵌套别的if，但是不能写对应if event的else语句")]),t._v(" "),a("li",[t._v("clk不是关键字，可以取任何名字")]),t._v(" "),a("li",[t._v("clock event可以是else中的，下图中右边红色字是对的"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104102812579.png",alt:"image-20221104102812579"}})])]),t._v(" "),a("h2",{attrs:{id:"synchronize-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronize-reset"}},[t._v("#")]),t._v(" Synchronize reset")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104103046553.png",alt:"image-20221104103046553"}})]),t._v(" "),a("ul",[a("li",[t._v("rst在clock的if内部： 在时钟上升沿读取reset的值")])]),t._v(" "),a("h2",{attrs:{id:"asynchronize-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asynchronize-reset"}},[t._v("#")]),t._v(" Asynchronize reset")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104103242741.png",alt:"image-20221104103242741"}})]),t._v(" "),a("ul",[a("li",[t._v("reset变了之后不用等上升沿下降沿")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104103625167.png",alt:"image-20221104103625167"}})]),t._v(" "),a("ul",[a("li",[t._v("两个assignment只生成一个ff（例外），a and b在ff的输入生成一个combination gate")]),t._v(" "),a("li",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104103902930.png",alt:"image-20221104103902930"}})]),t._v(" "),a("li",[t._v("如果if else赋值给了同一个信号，则会首先生成左边圈里的电路")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104133441521.png",alt:"image-20221104133441521"}})]),t._v(" "),a("ul",[a("li",[t._v("如果if条件语句不完整（比如没有else），则会生成一个latch"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104134020244.png",alt:"image-20221104134020244"}})]),t._v(" "),a("li",[t._v("clock' event and clock=1 也可以写成 rising_edge(clk)"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104141435639.png",alt:"image-20221104141435639"}})]),t._v(" "),a("li",[t._v("一个<=生成一个flip-flop，所以用variable，可以不生成"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221104141954712.png",alt:"image-20221104141954712"}})])]),t._v(" "),a("h3",{attrs:{id:"for"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for"}},[t._v("#")]),t._v(" For")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104122543296.png",alt:"image-20230104122543296"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104122836634.png",alt:"image-20230104122836634"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230104122735037.png",alt:"image-20230104122735037"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);