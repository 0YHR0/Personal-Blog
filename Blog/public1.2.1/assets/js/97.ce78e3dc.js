(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{490:function(t,a,r){"use strict";r.r(a);var s=r(2),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"watermark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#watermark"}},[t._v("#")]),t._v(" Watermark")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529111901673.png",alt:"image-20220529111901673"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529111919730.png",alt:"image-20220529111919730"}}),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529111933287.png",alt:"image-20220529111933287"}}),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529111943851.png",alt:"image-20220529111943851"}})]),t._v(" "),a("p",[a("strong",[t._v("Flink处理乱序数据的三个保证：")])]),t._v(" "),a("p",[a("strong",[t._v("1. watermark水位线，使得整体的数据变慢(结束之后先输出一个结果)")])]),t._v(" "),a("p",[a("strong",[t._v("2.window设置允许数据迟到（来一个迟到数据聚合一次，输出结果）")])]),t._v(" "),a("p",[a("strong",[t._v("3.侧输出流")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112016937.png",alt:"image-20220529112016937"}})]),t._v(" "),a("p",[a("strong",[t._v("数据来了之后，放到对应的桶中，并计算插入的waterMark来判断窗口需不需要关闭，如果需要关闭，则触发计算，关闭窗口和桶")])]),t._v(" "),a("p",[a("strong",[t._v("比如如下图，5秒（时间戳）的数据来了之后，系统认为现在的时间进行到了5-3=2秒，所以把三秒的时间窗口关闭了，等8秒的数据来了之后才关闭5秒的窗口。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112036016.png",alt:"image-20220529112036016"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112048572.png",alt:"image-20220529112048572"}})]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" "),a("strong",[t._v("应用")])]),t._v(" "),a("p",[t._v("如果数据没有带时间戳，则时间戳默认为Long.MIN_VALUE")]),t._v(" "),a("p",[t._v("前提是规定好事件语义：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStreamTimeCharacteristic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeCharacteristic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("提取时间戳+设定waterMark【一般都是周期性生成】")]),t._v(" "),a("p",[a("strong",[t._v("乱序数据：")])]),t._v(" "),a("p",[t._v("参数为设定waterMark的延迟为999毫秒，重写的方法的返回值是从数据中提取时间戳")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112127238.png",alt:"image-20220529112127238"}})]),t._v(" "),a("p",[t._v("原理为周期性生成waterMark，第一个waterMark为了防止数据溢出（由于数据溢出【小于最小值】之后会变成一个超大的值）为Long.MIN_VALUE+waterMark延迟时间")]),t._v(" "),a("p",[a("strong",[t._v("非乱序数据")]),t._v("：不用设置延迟时间：【也是周期性生成】"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112149521.png",alt:"image-20220529112149521"}})]),t._v(" "),a("p",[t._v("也可以自定义函数设置waterMark")]),t._v(" "),a("p",[a("strong",[t._v("周期：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112214657.png",alt:"image-20220529112214657"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("易错："),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220529112233587.png",alt:"image-20220529112233587"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);