(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{463:function(a,t,r){"use strict";r.r(t);var c=r(2),o=Object(c.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"olap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#olap"}},[a._v("#")]),a._v(" OLAP")]),a._v(" "),t("h3",{attrs:{id:"online-analytic-processing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#online-analytic-processing"}},[a._v("#")]),a._v(" Online Analytic Processing")]),a._v(" "),t("ul",[t("li",[a._v("一种临时分析技术，不要求用户有programming language要求")]),a._v(" "),t("li",[a._v("用户可以自己建立分析，而不是局限于限定的报告"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/232f976b-7364-4df6-abd7-2bc242c5cc80-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("Slice：restrict one dimension to a range of values"),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e648f057-ab68-4ba6-8ff8-cd4e15098795-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("Dice: restrict on several dimensions"),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/5805853e-0034-465b-b4d6-89d5191cf647-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("Roll up and drill down"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ac676a9d-abeb-49f2-a515-c2b16da33b4b-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("Pivot and rotate"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/0c469085-9afd-4c3c-89a9-c2d0c4a18f4a-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("drill through: 回归原始表来获取更详细的信息"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/80f08cd2-be2b-406f-a9aa-a65a956a9472-14899999.jpg",alt:"img"}})])]),a._v(" "),t("h3",{attrs:{id:"evaluation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#evaluation"}},[a._v("#")]),a._v(" Evaluation")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/dca3472d-c53b-4319-a2fd-df1c850b0b34-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a190b455-2c66-4878-a6a5-dcb564d0e85b-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("OLAP cube的存储：如：一个cube（Table a[n][m][p]）就是某天，某家商店，某个商品的销售数据集合"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a33465c8-514f-48f9-8520-2f22b9835208-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("relational：把一个cube view映射到star 或 snowflake schema，用户查询的时候要先把请求映射成sql，然后查询结果映射到cube structure，用户才能看见")]),a._v(" "),t("li",[a._v("multidimensional：直接把数据存储到一个n维数组中，可以不用映射到star shema等中，但是可能会出现稀疏cube，并且需要query查询语法才能查询")])]),a._v(" "),t("p",[a._v("使用relational storage：哪一个部分的商品的销量在某个月（用户选择）比上个月高出最多？")]),a._v(" "),t("ul",[t("li",[a._v("第一步：当月的销量"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/1561fec4-c0e9-4323-8900-61cafe6686a0-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("第二步：前一个月的销量"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/31e0bdc3-9eaa-4980-8dc9-404d1e5a1ddd-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("第三步：比较"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d4ddaa09-f13d-4f77-8a4f-aab602ef1039-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("第四步：展示"),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/9b2feeb8-56d0-457e-908d-e1bc1d85dcac-14899999.jpg",alt:"img"}})])]),a._v(" "),t("p",[a._v("使用multidimensional arrays，会有high storage，high processing的问题，因为有conformed dimension"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/3a1c12b0-769d-4cdb-9414-a4d4bb1406aa-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("measure: 是被totalled的东西，比如销量"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/f2def006-2f89-44b1-baad-c4434f5b5a18-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("计算存储的下标值：|Di|是维度的大小"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/192b0c64-d57e-4096-94d8-9e566258ec9c-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("使用Query查询Multidimensional arrays：\n"),t("ul",[t("li",[a._v("维度排列对查询性能很重要"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/ec3d6a14-09f2-40f6-8bc5-52e0b0b6df3b-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("direct access 只要读5个")]),a._v(" "),t("li",[a._v("sequencial access 要读10个")])])])])]),a._v(" "),t("li",[a._v("partitioning: 对某个区间的值感兴趣，可以把cube分割成多个subcube"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/94cd7f18-d0d5-4d2c-9ea4-157e3e8f73e0-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("l 表示 low bound")]),a._v(" "),t("li",[a._v("u 表示 upper bound")]),a._v(" "),t("li",[a._v("有几种定义partitioning的方式：第二种partitioning比如按照地区"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/6756ae75-f14d-4938-8691-971965f2ee30-14899999.jpg",alt:"img"}})])])]),a._v(" "),t("li",[a._v("Sparse cubes："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/2110690f-d64d-43ca-8a9a-6d07121d4d95-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("先用partitioning分割成很多subcube，然后用索引结构，如B树 来存储稀疏的维度，用array来存储密集的维度，只指向存在的subcube")])])]),a._v(" "),t("li",[a._v("Multidimensional Query Language： MDX"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/89fc6bc9-6eba-4e26-a2f8-22741da797bb-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("where选的dimension不会出现在最终结果中https://blog.csdn.net/hc1017/article/details/108410110"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/3a48326e-8b1c-4251-b9e5-e440ba074d92-14899999.jpg",alt:""}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/063a677d-6757-4576-af9f-b2139af40be9-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b75986eb-24dd-4666-acb7-9af09209c6b0-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/70a2b6d3-2c3b-4b41-8934-becec79afe6f-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/09953428-e95c-4743-9cf3-4f1a630ce406-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/51e269aa-ee15-4ac3-b668-79b3394a28af-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/1dcd758a-f91a-40ed-ad9b-e9165d49cd5d-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/35e9ac0e-56c4-420d-ba0f-4a611d75bc30-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("where内交外并"),t("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/6752093f-b693-4642-b2ea-b8f8c8f2a0f6-14899999.jpg",alt:"img"}})]),a._v(" "),t("li",[a._v("结果自动aggregate")])])])]),a._v(" "),t("h3",{attrs:{id:"olap-data存储和处理-sql只能用在relational-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#olap-data存储和处理-sql只能用在relational-database"}},[a._v("#")]),a._v(" OLAP data存储和处理：SQL只能用在relational database")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/07810237-627d-4dda-b91c-821e4b1c7ab3-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("服务端的存储方式的三种结构：注意方向"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/be4bea48-d892-4626-9273-81405d2458f9-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b2b0e5ef-9057-4abf-aa7a-c99bf75ba0ca-14899999.jpg",alt:"img"}}),a._v(" "),t("ul",[t("li",[a._v("MOLAP: 把数据extract过来之后进行处理，存储方式：multidimensional DBMS")]),a._v(" "),t("li",[a._v("ROLAP：对数据进行query来获取结果，展示给用户, 存储方式：relational DBMS")]),a._v(" "),t("li",[a._v("HOLAP：Hybird，对于详细的数据在relational DBMS中，对于聚合过的数据在multidimensional DBMS中")])])]),a._v(" "),t("li",[a._v("对比："),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/f091148f-6aa1-41e8-8af1-95d31a902b6e-14899999.jpg",alt:"img"}})])]),a._v(" "),t("h3",{attrs:{id:"olap-整合-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#olap-整合-sql"}},[a._v("#")]),a._v(" OLAP 整合 sql")]),a._v(" "),t("h4",{attrs:{id:"roll-up-操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#roll-up-操作"}},[a._v("#")]),a._v(" roll up 操作")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b5408f69-07d3-4d8e-a1f7-3c366a152b4a-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/f9ff1119-e676-42c7-97b6-56fe5bd9449f-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("roll up 和 grouping sets最后的结果都是一样的，表示方法不一样（不是随意组合，有顺序的！！）\n"),t("ul",[t("li",[a._v("1的结果是黄色的行")]),a._v(" "),t("li",[a._v("2的结果是每块蓝色的第一行")]),a._v(" "),t("li",[a._v("3的结果是把2的结果再aggregate一下，是每块蓝色的第二行")]),a._v(" "),t("li",[a._v("4的结果是把3的结果再aggregate一下，是每块蓝色的第三行")])])])]),a._v(" "),t("h4",{attrs:{id:"grouping关键字-null值一般来自aggregation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grouping关键字-null值一般来自aggregation"}},[a._v("#")]),a._v(" Grouping关键字：Null值一般来自aggregation")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/de65062e-1dfc-4c2c-97eb-6fc43d952363-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("为了区别null值是否来自源数据，可以使用grouping 关键字，多加两列，如果是aggregate的结果，那么值为1，不是的话值为0")])]),a._v(" "),t("h4",{attrs:{id:"cube关键字-把所有group的排列组合都算一遍-有2的n次方种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cube关键字-把所有group的排列组合都算一遍-有2的n次方种"}},[a._v("#")]),a._v(" Cube关键字：把所有group的排列组合都算一遍，有2的n次方种")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/3244c477-f4c6-48c7-899f-c86312387ebc-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/570de67d-a66f-4d17-b7ce-d5cc52f5a309-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/fea02ff0-b98d-450a-ba94-82da67dd94a4-14899999.jpg",alt:"img"}})]),a._v(" "),t("h4",{attrs:{id:"window关键字-https-blog-csdn-net-xishining-article-details-116408314"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#window关键字-https-blog-csdn-net-xishining-article-details-116408314"}},[a._v("#")]),a._v(" window关键字：https://blog.csdn.net/xishining/article/details/116408314")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/bcf6a961-ff0a-46a9-9127-de0e9707ecca-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/de4bd0f1-fe21-4f10-9965-94279c141879-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("定义：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/b1545972-5d40-4148-950d-c93e0c9eba4c-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("order by：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/91cd8e64-1dac-4c7f-9bdb-04f047f82997-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("window framing：有两种")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/e20f5b95-bc74-4e9e-9f61-c53804bd8db1-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d4ff8204-bb62-4817-a85d-8e2755280e5c-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("example：")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/45fac353-4981-4e63-bf9a-a1f67f88060a-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("rank，Percent_rank(6 个里面排第二名：(2-1)/(6-1))，CUME_DIST（6个里面排第二名：2/6）"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/a0cc9818-08c1-4398-92bf-813b8660fc8a-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/00f04c7c-1ae7-47b3-8810-aae537ea0220-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d55f08ae-e79c-4ba8-a06f-9cf7aabe0981-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("dense_rank(), row_number()")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/743610c3-2570-4c95-834b-1c400f7eeb7f-14899999.jpg",alt:"img"}})]),a._v(" "),t("p",[a._v("聚合窗口函数：可以不用sum，用其他的函数")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/7814e867-ea33-43e7-a259-14f1109554e5-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/90499c14-8705-41b7-8940-2f6fe86d1828-14899999.jpg",alt:"img"}})]),a._v(" "),t("ul",[t("li",[a._v("例：当前行与前面n行一起算平均值，n=2的话总共算3行"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/4a930b30-ee9c-4510-91f2-a6725a226c9a-14899999.jpg",alt:"img"}})])]),a._v(" "),t("p",[a._v("Filter: 在聚合之前对数据进行筛选")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/d1ca1e89-3780-4b2f-a0fe-367e74259952-14899999.jpg",alt:"img"}})])])}),[],!1,null,null,null);t.default=o.exports}}]);