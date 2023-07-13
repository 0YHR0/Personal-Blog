(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{587:function(t,a,v){"use strict";v.r(a);var _=v(2),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),a("p",[a("strong",[t._v("索引是帮助mysql高效获取数据的排好序的数据结构")])]),t._v(" "),a("p",[t._v("​       "),a("strong",[t._v("所有的数据是存在磁盘上的，当查找到了之后，会加载到内存里")])]),t._v(" "),a("ul",[a("li",[t._v("二叉树")]),t._v(" "),a("li",[t._v("红黑树")]),t._v(" "),a("li",[t._v("hash表：不常用，因为单值查找比较快，而范围查找不能实现")]),t._v(" "),a("li",[t._v("B-tree")])]),t._v(" "),a("p",[t._v("联合索引：按照字段逐个比较")]),t._v(" "),a("p",[t._v("一般都用b树或b+树")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("二叉树：不平衡")])]),t._v(" "),a("li",[a("p",[t._v("红黑树（是一种平衡二叉树）：由于一个节点只能存一组数据，还是开销太大")])]),t._v(" "),a("li",[a("p",[t._v("b树（多叉平衡树）：一个节点可以存放多个数据，数据索引从左到右依次递增"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105018405.png",alt:"image-20230425105018405"}})])]),t._v(" "),a("li",[a("p",[t._v("b+树：key值有冗余（如图，15不止一个），只有在叶子节点才存放value")]),t._v(" "),a("p",[t._v("​\t 每一个节点大小是固定的，不把数据存在非叶节点的原因是能使其存储更多的key值")]),t._v(" "),a("p",[t._v("​     多了横向指针，目的是在范围查找的时候速度更快，一次定位之后就可以查找"),a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105127062.png",alt:"image-20230425105127062"}})])]),t._v(" "),a("li",[a("p",[t._v("mysql存储引擎（表级别，非数据库级别）：")]),t._v(" "),a("ul",[a("li",[t._v("InnoDB索引实现：表数据文件本身就是按照b+树组织的一个索引文件（ibd）")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("聚集索引，叶节点本身就包含了完整的数据记录")])]),t._v(" "),a("li",[a("p",[t._v("InnoDB一定要有主键，而且推荐整型自增型主键，为什么不使用uuid")])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105228310.png",alt:"image-20230425105228310"}})]),t._v(" "),a("ul",[a("li",[t._v("mylSM索引实现：索引文件（MYI）和数据文件（MYD）是分离的（非聚集）\n"),a("ul",[a("li",[t._v("叶节点存放数据所在地址")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105414854.png",alt:"image-20230425105414854"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105516062.png",alt:"image-20230425105516062"}})]),t._v(" "),a("p",[t._v("非主键索引存储的是name以及主键的id，主键索引存储的是一行数据")]),t._v(" "),a("p",[t._v("先查name索引，后查主键索引")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425105556642.png",alt:"image-20230425105556642"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);