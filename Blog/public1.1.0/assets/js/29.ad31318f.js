(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{430:function(a,t,e){"use strict";e.r(t);var i=e(2),s=Object(i.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"conceptual-data-warehouse-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conceptual-data-warehouse-design"}},[a._v("#")]),a._v(" Conceptual Data warehouse design")]),a._v(" "),t("h2",{attrs:{id:"data-warehouse-design-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-warehouse-design-process"}},[a._v("#")]),a._v(" Data warehouse design process")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e104a620-00a9-48fd-8d22-5abef15e0133-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("Requirements analysis")]),a._v(" "),t("li",[a._v("Conceptual design")]),a._v(" "),t("li",[a._v("Logical design")]),a._v(" "),t("li",[a._v("Physical design")])]),a._v(" "),t("h3",{attrs:{id:"multidimensional-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multidimensional-model"}},[a._v("#")]),a._v(" Multidimensional model：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("从三个维度看销量，每个维度又可以细分"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/293318e2-52c4-4534-995b-313882a6d09e-14899999.jpg",alt:"img"}})])]),a._v(" "),t("li",[t("p",[a._v("DataCube"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/11db4ec2-bd76-48c6-ba00-19f6ad3e492f-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("一个n维的base cube叫做 base cuboid")]),a._v(" "),t("li",[a._v("最上面的0-D cuboid，叫做 apex cuboid，有最高的总结度，如总销量")]),a._v(" "),t("li",[a._v("图中的线称为lattice，构成了这个datacube")]),a._v(" "),t("li",[a._v("图中越往下越多维，越详细")]),a._v(" "),t("li",[a._v("在一个n维的base cube中一共有2的n次方个单元")])])])]),a._v(" "),t("h3",{attrs:{id:"basic-elements-of-a-conceptual-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-elements-of-a-conceptual-model"}},[a._v("#")]),a._v(" Basic Elements of a Conceptual Model："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408232907564.png",alt:"image-20220408232907564"}})]),a._v(" "),t("ul",[t("li",[a._v("Fact data")]),a._v(" "),t("li",[a._v("Attributes")]),a._v(" "),t("li",[a._v("Qualities")]),a._v(" "),t("li",[a._v("Dimensions")])]),a._v(" "),t("h3",{attrs:{id:"conformed-dimensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conformed-dimensions"}},[a._v("#")]),a._v(" Conformed Dimensions")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233000497.png",alt:"image-20220408233000497"}})]),a._v(" "),t("h3",{attrs:{id:"dimensional-fact-model-dfm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dimensional-fact-model-dfm"}},[a._v("#")]),a._v(" Dimensional fact model（DFM）"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233533242.png",alt:"image-20220408233533242"}})]),a._v(" "),t("ul",[t("li",[a._v("basic elements of a fact schema: f=(M,A,N,R,O,S)")]),a._v(" "),t("li",[a._v("quasi-tree")]),a._v(" "),t("li",[a._v("Facts and measures")])]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/528d8773-2884-4127-bc96-5ac512cfae0a-14899999.jpg",alt:"image"}}),a._v(" "),t("ul",[t("li",[a._v("Attributes and dimensions")])]),a._v(" "),t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ff04f578-3421-48bc-8c98-62354c985882-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("attributes 分为dimensional和non-dimensional")]),a._v(" "),t("li",[a._v("图中左边方框是一个Fact，例如sale")]),a._v(" "),t("li",[a._v("Hierarchies"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/92f794f1-3a2d-42f5-bf48-a928abd28da8-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("Aggregation: 图中mj是method，di是dimension"),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/0b188699-48cd-4a7a-b1f9-163d70029e51-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("图中如果sum操作不在可聚合的范围之内，那么就要连线（虚线），并且写上可聚合的操作\n"),t("ul",[t("li",[a._v("如果连线上什么也没写，那么就表示不能sum")])])]),a._v(" "),t("li",[a._v("如果只有sum操作，那么不需要连线")]),a._v(" "),t("li",[a._v("如果有包括sum的各种操作，那么在连线（虚线）上写上‘+’跟着其他聚合操作")])])])]),a._v(" "),t("h3",{attrs:{id:"starer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#starer"}},[a._v("#")]),a._v(" StarER")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233559369.png",alt:"image-20220408233559369"}})]),a._v(" "),t("h3",{attrs:{id:"uml-profile-for-multidimensional-modelling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uml-profile-for-multidimensional-modelling"}},[a._v("#")]),a._v(" UML Profile for Multidimensional Modelling")]),a._v(" "),t("ul",[t("li",[a._v("Three levels of detail\n"),t("ul",[t("li",[a._v("Model definition"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233625364.png",alt:"image-20220408233625364"}})]),a._v(" "),t("li",[a._v("Star schema definition"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233634092.png",alt:"image-20220408233634092"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233647249.png",alt:"image-20220408233647249"}})]),a._v(" "),t("li",[a._v("Dimension definition  fact definition\n"),t("ul",[t("li",[a._v("Dimension definition"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233746241.png",alt:"image-20220408233746241"}}),a._v(" "),t("ul",[t("li",[a._v("Types of Classification Hierarchies\n"),t("ul",[t("li",[a._v("Strict Hierarchy")]),a._v(" "),t("li",[a._v("Non-strict Hierarchy")]),a._v(" "),t("li",[a._v("Completeness for drill down")]),a._v(" "),t("li",[a._v("Completeness for roll up"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/7cf09208-5e10-457c-83e2-f846c801f2f5-14899999.jpg",alt:"img"}})])])])])]),a._v(" "),t("li",[a._v("Fact definition\n"),t("ul",[t("li",[a._v("Degenerate fact--\x3e辅助表示m：n关系")]),a._v(" "),t("li",[a._v("Degenerate dimension：没有维度表的维度"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220408233934945.png",alt:"image-20220408233934945"}})])])])])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);