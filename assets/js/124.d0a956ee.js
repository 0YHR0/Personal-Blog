(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{519:function(a,r,e){"use strict";e.r(r);var t=e(2),s=Object(t.a)({},(function(){var a=this,r=a._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"内存管理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#内存管理"}},[a._v("#")]),a._v(" 内存管理")]),a._v(" "),r("p",[a._v("ref ： https://www.zhihu.com/question/439047319/answer/2875425681")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162046989.png",alt:"image-20230903162046989"}})]),a._v(" "),r("ul",[r("li",[a._v("操作系统中通常会将虚拟内存和物理内存切割成固定的尺寸，于虚拟内存而言叫作“页”，于物理内存而言叫作“帧”")])]),a._v(" "),r("p",[a._v("go语言")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903161927470.png",alt:"image-20230903161927470"}})]),a._v(" "),r("ul",[r("li",[a._v("mheap：全局的内存起源，访问要加"),r("a",{attrs:{href:"https://www.zhihu.com/search?q=%E5%85%A8%E5%B1%80%E9%94%81&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2875425681%7D",target:"_blank",rel:"noopener noreferrer"}},[a._v("全局锁"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("mcentral：每种对象大小规格（全局共划分为 68 种）对应的缓存，锁的粒度也仅限于同一种规格以内")]),a._v(" "),r("li",[a._v("mcache：每个 P（正是 GMP 中的 P）持有一份的内存缓存，访问时无锁")])]),a._v(" "),r("h3",{attrs:{id:"page-mspan"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#page-mspan"}},[a._v("#")]),a._v(" page & mspan")]),a._v(" "),r("p",[a._v("（1）page：最小的存储单元.")]),a._v(" "),r("p",[a._v("Golang 借鉴操作系统分页管理的思想，每个最小的存储单元也称之为页 page，但大小为 8 KB")]),a._v(" "),r("p",[a._v("（2）mspan：最小的管理单元.")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://www.zhihu.com/search?q=mspan&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2875425681%7D",target:"_blank",rel:"noopener noreferrer"}},[a._v("mspan"),r("OutboundLink")],1),a._v(" 大小为 page 的整数倍，且从 8B 到 80 KB 被划分为 67 种不同的规格，分配对象时，会根据大小映射到不同规格的 mspan，从中获取空间."),r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162123490.png",alt:"image-20230903162123490"}})]),a._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162222818.png",alt:"image-20230903162222818"}})]),a._v(" "),r("ul",[r("li",[a._v("mspan 是 Golang 内存管理的最小单元")]),a._v(" "),r("li",[a._v("mspan 大小是 page 的整数倍（Go 中的 page 大小为 8KB），且内部的页是连续的（至少在虚拟内存的视角中是这样）")]),a._v(" "),r("li",[a._v("每个 mspan 根据空间大小以及面向分配对象的大小，会被划分为不同的等级")]),a._v(" "),r("li",[a._v("同等级的 mspan 会从属同一个 mcentral，最终会被组织成链表，因此带有前后指针（prev、next）")]),a._v(" "),r("li",[a._v("由于同等级的 mspan 内聚于同一个 mcentral，所以会基于同一把"),r("a",{attrs:{href:"https://www.zhihu.com/search?q=%E4%BA%92%E6%96%A5%E9%94%81&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2875425681%7D",target:"_blank",rel:"noopener noreferrer"}},[a._v("互斥锁"),r("OutboundLink")],1),a._v("管理")]),a._v(" "),r("li",[a._v("mspan 会基于 bitMap 辅助快速找到空闲内存块（块大小为对应等级下的 object 大小），此时需要使用到 Ctz64 算法.")])]),a._v(" "),r("h3",{attrs:{id:"线程缓存-mcache"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线程缓存-mcache"}},[a._v("#")]),a._v(" 线程缓存 mcache")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162523372.png",alt:"image-20230903162523372"}})]),a._v(" "),r("ul",[r("li",[a._v("mcache 是每个 P 独有的缓存，因此交互无锁")]),a._v(" "),r("li",[a._v("mcache 将每种 spanClass 等级的 mspan 各缓存了一个，总数为 2（nocan 维度） * 68（大小维度）= 136")]),a._v(" "),r("li",[a._v('mcache 中还有一个为对象分配器 [tiny allocator](https://www.zhihu.com/search?q=tiny allocator&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A2875425681})，用于处理小于 16B 对象的内存分配')])]),a._v(" "),r("h3",{attrs:{id:"中心缓存-mcentral"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#中心缓存-mcentral"}},[a._v("#")]),a._v(" 中心缓存 mcentral")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162832162.png",alt:"image-20230903162832162"}})]),a._v(" "),r("ul",[r("li",[a._v("每个 mcentral 对应一种 spanClass")]),a._v(" "),r("li",[a._v("每个 mcentral 下聚合了该 spanClass 下的 mspan")]),a._v(" "),r("li",[a._v("mcentral 下的 mspan 分为两个链表，分别为有空间 mspan 链表 partial 和满空间 mspan 链表 full")]),a._v(" "),r("li",[a._v("每个 mcentral 一把锁")])]),a._v(" "),r("h3",{attrs:{id:"全局堆缓存-mheap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#全局堆缓存-mheap"}},[a._v("#")]),a._v(" 全局堆缓存 mheap")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("对于 Golang 上层应用而言，堆是操作系统虚拟内存的抽象")])]),a._v(" "),r("li",[r("p",[a._v("以页（8KB）为单位，作为最小内存存储单元")])]),a._v(" "),r("li",[r("p",[a._v("负责将连续页组装成 mspan")])]),a._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://www.zhihu.com/search?q=%E5%85%A8%E5%B1%80%E5%86%85%E5%AD%98&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2875425681%7D",target:"_blank",rel:"noopener noreferrer"}},[a._v("全局内存"),r("OutboundLink")],1),a._v("基于 bitMap 标识其使用情况，每个 bit 对应一页，为 0 则自由，为 1 则已被 mspan 组装")])]),a._v(" "),r("li",[r("p",[a._v("通过 heapArena 聚合页，记录了页到 mspan 的映射信息")])]),a._v(" "),r("li",[r("p",[a._v("建立空闲页"),r("a",{attrs:{href:"https://www.zhihu.com/search?q=%E5%9F%BA%E6%95%B0%E6%A0%91&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2875425681%7D",target:"_blank",rel:"noopener noreferrer"}},[a._v("基数树"),r("OutboundLink")],1),a._v("索引 radix tree index，辅助快速寻找空闲页")])]),a._v(" "),r("li",[r("p",[a._v("是 mcentral 的持有者，持有所有 spanClass 下的 mcentral，作为自身的缓存")])]),a._v(" "),r("li",[r("p",[a._v("内存不够时，向操作系统申请，申请单位为 heapArena（64M）")])])]),a._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903162142652.png",alt:"image-20230903162142652"}})]),a._v(" "),r("h1",{attrs:{id:"对象分配流程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对象分配流程"}},[a._v("#")]),a._v(" 对象分配流程")]),a._v(" "),r("p",[a._v("Golang 中，依据 object 的大小，会将其分为下述三类：")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903163207581.png",alt:"image-20230903163207581"}})]),a._v(" "),r("p",[a._v("对于微对象的分配流程：")]),a._v(" "),r("p",[a._v("（1）从 P 专属 mcache 的 tiny 分配器取内存（无锁）")]),a._v(" "),r("p",[a._v("（2）根据所属的 spanClass，从 P 专属 mcache 缓存的 mspan 中取内存（无锁）")]),a._v(" "),r("p",[a._v("（3）根据所属的 spanClass 从对应的 mcentral 中取 mspan 填充到 mcache，然后从 mspan 中取内存（spanClass 粒度锁）")]),a._v(" "),r("p",[a._v("（4）根据所属的 spanClass，从 mheap 的页分配器 pageAlloc 取得足够数量空闲页组装成 mspan 填充到 mcache，然后从 mspan 中取内存（全局锁）")]),a._v(" "),r("p",[a._v("（5）mheap 向操作系统申请内存，更新页分配器的索引信息，然后重复（4）.")]),a._v(" "),r("p",[a._v("对于小对象的分配流程是跳过（1）步，执行上述流程的（2）-（5）步；")]),a._v(" "),r("p",[a._v("对于大对象的分配流程是跳过（1）-（3）步，执行上述流程的（4）-（5）步.")]),a._v(" "),r("p",[r("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230903163720223.png",alt:"image-20230903163720223"}})])])}),[],!1,null,null,null);r.default=s.exports}}]);