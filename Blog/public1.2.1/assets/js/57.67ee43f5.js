(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{448:function(a,t,e){"use strict";e.r(t);var r=e(2),c=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"logical-data-warehouse-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logical-data-warehouse-design"}},[a._v("#")]),a._v(" Logical Data warehouse design")]),a._v(" "),t("h2",{attrs:{id:"logical-schema-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logical-schema-types"}},[a._v("#")]),a._v(" Logical schema types")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/52ed9a7f-2d92-43a8-b26f-4cec2099b24b-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("Star schema"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/df0f0637-cdc2-4cc0-a50f-d201281ecf7d-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("其中junk dimension table一般记录了qualities（不可被聚合，表示一个状态）")])])]),a._v(" "),t("li",[a._v("Snowflake schema"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/68b7dece-9bd2-4645-bae9-bd0e18a174ee-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("3NF：列只被主关键字标识，与其他列无关")])])]),a._v(" "),t("li",[a._v("Informix schema"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/03dcb7cc-25c8-4617-a4d9-4c309f2fbbcd-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("一个dimension table，多个attribute table")])])]),a._v(" "),t("li",[a._v("Compare"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/78cac3b0-3b4e-4dda-93e2-1c64a76a4430-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9a60d2f0-93f0-4f6d-bf22-590c3b0b1801-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/01fff83f-5313-4940-afac-064658bb8a12-14899999.jpg",alt:"img"}})])]),a._v(" "),t("h2",{attrs:{id:"extended-dimension-table-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extended-dimension-table-design"}},[a._v("#")]),a._v(" Extended dimension table design")]),a._v(" "),t("ul",[t("li",[a._v("Production key(用在source中)，Surrogate key（用在数据仓库中）"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b7de66be-80b5-492d-9cee-e8eb7dc0cc7e-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("bridge table: dimension与fact表多对多的关系"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/0f9560e2-8fa6-441d-8323-c1c55316b550-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("slowly changing dimensions，如：一个产品的属性值发生改变\n"),t("ul",[t("li",[a._v("type1：直接替换原来的属性值")]),a._v(" "),t("li",[a._v("type2：创建一个新的产品，有新的id，并赋值")]),a._v(" "),t("li",[a._v("type3：产品多一个属性，用来存放旧的属性值，当新的属性值来的时候，就把旧的属性值存到旧属性中")]),a._v(" "),t("li",[a._v("比较："),t("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d6ab8205-ca77-441a-8479-51829401ea68-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("Time stamp ：员工合同表（R1右表，R2,R3左表）"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/6a42acaa-2b66-46f9-b01e-abbc9700cd3d-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("Large dimensions with frequent changes:"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/7089352e-b4d2-46fb-94d5-fd680fa3d391-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("新建一张表，把频繁要改变的字段放进去")]),a._v(" "),t("li",[a._v("使用band来表示一些离散的值，比如工资1000-2000的为一段")]),a._v(" "),t("li",[a._v("新的表的主键是主表的外键")])])]),a._v(" "),t("li",[a._v("多对多问题：如一个病人有很多症状"),t("img",{staticStyle:{zoom:"25%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/41ac3f9c-e934-4c84-b19e-d30f490ef52d-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("使用bridge table"),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/951d6d07-bd69-4bbe-b998-cc1056452ac5-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("关于时间的处理方式：每分每秒有一个记录就用dateTime字段，也可以以一天为基准拆成2个字段"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/27777fbb-49d3-4aab-8194-c4c2d474dfef-14899999.jpg",alt:"img"}})])])])]),a._v(" "),t("h3",{attrs:{id:"extended-fact-table-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extended-fact-table-design"}},[a._v("#")]),a._v(" Extended fact table design")]),a._v(" "),t("ul",[t("li",[a._v("多国："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/fe7976f5-1a8e-4812-bec7-5d05c4e9e446-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("当一个fact有多种measure(取决于多个因素),并且有多种估值单位的时候"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ab96914d-1d71-465c-b9db-d675130abb5b-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("一种解决方案：可以把measure和估值单位都放在product的维表中")]),a._v(" "),t("li",[a._v("但是另一种解决方案更好"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b86391f4-8eea-4ce1-8954-4866025576d0-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("Model events&model coverage：如学生上课表，由一系列键组成（时间，学生，老师，地点...）"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b19eaa4b-f73b-4ff4-86f0-cb0121d28e71-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/aefbfb90-51f2-4788-8809-24048343ac5b-14899999.jpg",alt:"img"}})])])])}),[],!1,null,null,null);t.default=c.exports}}]);