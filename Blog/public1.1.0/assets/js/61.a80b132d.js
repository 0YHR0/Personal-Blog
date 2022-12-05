(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{462:function(a,t,s){"use strict";s.r(t);var n=s(2),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"runningtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#runningtime"}},[a._v("#")]),a._v(" RunningTime")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202722926.png",alt:"image-20220528202722926"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202729469.png",alt:"image-20220528202729469"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202736409.png",alt:"image-20220528202736409"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202746414.png",alt:"image-20220528202746414"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202755918.png",alt:"image-20220528202755918"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528202809843.png",alt:"image-20220528202809843"}})]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("TweetKeyValue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setParallelism")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("也可以全局指定并行度。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("setParallelism")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("三个位置可以配置并行度")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("flink配置文件中")])]),a._v(" "),t("li",[t("p",[a._v("代码里")])]),a._v(" "),t("li",[t("p",[a._v("flink任务提交时")])])]),a._v(" "),t("p",[a._v("优先级：")]),a._v(" "),t("p",[a._v("代码>提交>配置文件")]),a._v(" "),t("p",[a._v("代码里算子单独设置优先级高于全局设置优先级")]),a._v(" "),t("h3",{attrs:{id:"任务链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务链"}},[a._v("#")]),a._v(" "),t("strong",[a._v("任务链")])]),a._v(" "),t("p",[a._v("合理的设置并行度")]),a._v(" "),t("ul",[t("li",[a._v("减少本地通信的开销")]),a._v(" "),t("li",[a._v("减少序列化和反序列化")])]),a._v(" "),t("p",[a._v("把多个算子合并为一个task，原本的算子成为里面的subtask")]),a._v(" "),t("p",[a._v("满足任务链需要以下条件：")]),a._v(" "),t("ul",[t("li",[a._v("算子具有相同并行度(具有相同的分区数)")]),a._v(" "),t("li",[a._v("算子属于one-to-one")])]),a._v(" "),t("p",[t("strong",[a._v("one-to-one")]),a._v("：stream维护着分区以及元素的顺序（比如source和map之间）。这意味着map 算子的子任务看到的元素的个数以及顺序跟 source 算子的子任务生产的元素的个数、顺序相同。map、fliter、flatMap等算子都是one-to-one的对应关系。")]),a._v(" "),t("p",[t("strong",[a._v("Redistributing")]),a._v("：stream的分区会发生改变。每一个算子的子任务依据所选择的transformation发送数据到不同的目标任务。例如，keyBy 基于 hashCode 重分区、而 broadcast 和 rebalance 会随机重新分区，这些算子都会引起redistribute过程，而 redistribute 过程就类似于 Spark 中的 shuffle 过程。")]),a._v(" "),t("p",[a._v("并行度不同的算子之前传递数据会进行重分区，Redistributing类型的算子也会进行重分区。")]),a._v(" "),t("p",[a._v("当然还可以禁止掉合成任务链：")]),a._v(" "),t("ol",[t("li",[a._v("单个算子不参与合成任务链")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("disableChaining")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("从单个算子开启一个新的任务链")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("startNewChain")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("全局不合成任务链")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("disableOperatorChaining")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220528203002169.png",alt:"image-20220528203002169"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);