(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{473:function(e,t,i){"use strict";i.r(t);var v=i(2),a=Object(v.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"coordination"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coordination"}},[e._v("#")]),e._v(" Coordination")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("前提条件"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/3f53fa35-48e0-4821-88b6-6b7e521e7ac2-14899999.jpg",alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("分布式互斥访问的三种方法")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Token based approaches：只有一个token，只有拿到token的进程才能访问临界资源，访问完之后释放token")])]),e._v(" "),t("li",[t("p",[e._v("Non-Token based approaches：没有token，例如所有人投票，谁能进入临界区")])]),e._v(" "),t("li",[t("p",[e._v("Quorum-based approaches：明确有多少人投票，大部分得票的可以进入临界区")])])])]),e._v(" "),t("li",[t("p",[e._v("Requirements"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/7984240b-2608-4880-b7a3-3232bd6eafd9-14899999.jpg",alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("评价算法的四条准则：cs=critical section（应该very short，因为会block everything）")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Message complexity：多个进程协调需要发送多少消息")])]),e._v(" "),t("li",[t("p",[e._v("Synchronization delay：一个进程离开临界区到下一个进程进入临界区的上下文切换时间")])]),e._v(" "),t("li",[t("p",[e._v("Response time：一个进程要求进入临界区到临界区执行完毕")])]),e._v(" "),t("li",[t("p",[e._v("System Throughput：处理对临界区请求的速度= 1/（Synchronization delay+平均临界区运行时间）")])])])]),e._v(" "),t("li",[t("p",[e._v("使用一个中心server来分发token：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("server把要token的进程排成队列（取决于server收到请求的顺序），当有进程执行完临界区，归还token时，把token给队首的哪个进程，")])]),e._v(" "),t("li",[t("p",[e._v("问题：单点问题，并且并发量很小"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/859e915e-0ca9-4e9b-8710-49102ac33dfc-14899999.jpg",alt:"img"}})])])])]),e._v(" "),t("li",[t("p",[e._v("每个进程在释放token之后传给ring中的下一个进程")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("ordering不保证，因为取决于这个ring，并不是请求的顺序")])]),e._v(" "),t("li",[t("p",[e._v("progress保证，因为总会传到自己这边，不会发生饥饿")])]),e._v(" "),t("li",[t("p",[e._v("safety保证，因为只有一个token，意味着只有一个进程可以访问临界区")])])])]),e._v(" "),t("li",[t("p",[e._v("Lamport 算法（non-token based）需要FIFO channel")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Pi进程向其他所有进程发送自己的request，自己的id，自己的timestamp，并且把自己的request放到自己的request queue中")])]),e._v(" "),t("li",[t("p",[e._v("Pj进程在收到这个request之后，把它放到自己的request queue中，并且回应Pi自己的timestamp（我在这个时刻收到了你的request）")])]),e._v(" "),t("li",[t("p",[e._v("Pi会进入临界区当且仅当他收到了其他所有进程的timestamp都比自己的请求大")])]),e._v(" "),t("li",[t("p",[e._v("Pi的请求在自己的request queue的最上面")])]),e._v(" "),t("li",[t("p",[e._v("当执行完毕之后，Pi会把自己的请求remove掉，并且通知其他的进程")])]),e._v(" "),t("li",[t("p",[e._v("其他的进程收到pi执行完毕的消息后，在自己的request queue中remove掉Pi的请求")])]),e._v(" "),t("li",[t("p",[e._v("Example：在timestamp相同的情况下，会把process id 小的排在前面")]),e._v(" "),t("ul",[t("li",[e._v("（1，1）标识进程号是1，timestamp是1"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/fe7e1e21-e6bd-4e42-a452-6588917d0b0e-14899999.jpg",alt:"img"}})])])]),e._v(" "),t("li",[t("p",[e._v("Correctness： Yes")])]),e._v(" "),t("li",[t("p",[e._v("Liveliness： Yes，因为在queue中的请求迟早会被执行")])]),e._v(" "),t("li",[t("p",[e._v("Faireness：No，因为在例子中，P2先产生了请求但是晚执行临界区")])])])]),e._v(" "),t("li",[t("p",[e._v("Ricart and Agrawala算法")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Released：不需要进入临界资源")])]),e._v(" "),t("li",[t("p",[e._v("Wanted：需要进入临界资源")])]),e._v(" "),t("li",[t("p",[e._v("Held：在临界资源中，并保持临界资源")])]),e._v(" "),t("li",[t("p",[e._v("把自己要访问临界区的请求发给别的进程，和自己的timestamp一起")])]),e._v(" "),t("li",[t("p",[e._v("当收到n-1个回复之后，访问临界区")])]),e._v(" "),t("li",[t("p",[e._v("当进程收到别的进程要访问临界区的请求之后")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("如果自己的状态是held，即在访问临界区，或者自己的状态是wanted，并且自己的timestamp小于请求中的timestamp，那么把这个请求存到队列中，并且不回复")])]),e._v(" "),t("li",[t("p",[e._v("否则马上回复")])])])]),e._v(" "),t("li",[t("p",[e._v("当进程访问完临界区之后，会通知队列中所有的其他进程")])]),e._v(" "),t("li",[t("p",[e._v("example"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/820d8444-3ef2-4990-a008-3d0f09e34627-14899999.jpg",alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("分析：公平based on logical time"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/af707b76-04fc-4907-971d-0424e108bce1-14899999.jpg",alt:"img"}})])])])]),e._v(" "),t("li",[t("p",[e._v("Maekawa's algorithm：（可能会有死锁）")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("每个进程维护一个voting set，并且自己也在这个voting set中，因为这样投票给别人之后自己就不能执行了，只有在被投票的那个进程执行完之后，才能投票给别的进程"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/bffc6ab3-77b3-4426-a27d-9c2cd7d34240-14899999.jpg",alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("当进程想要进入临界区的时候，问voting set中的其他进程，当都收到vote之后进入临界区")])]),e._v(" "),t("li",[t("p",[e._v("当其他进程收到request时")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("如果自己以及为其他进程投过票或者自己在临界区的时候，把request放到队列中，不回复")])]),e._v(" "),t("li",[t("p",[e._v("否则给这个进程vote并把自己的voted设为true")])])])]),e._v(" "),t("li",[t("p",[e._v("当结束了自己访问临界区，把自己设置为released，并且通知所有的进程自己以及released，在其他进程收到released消息时，会给队列中第一个request投票"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/57f5c8f7-b291-4f79-8cf5-802d81835914-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/44e65dcd-2f7c-4462-b28d-d63247b95723-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/c4ee0244-57e0-4f7e-80dc-4102bf5466cc-14899999.jpg",alt:"img"}}),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/1792e0ff-e8ad-4758-a4f9-7ace5cd67e63-14899999.jpg",alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("建立voting set的方法：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("是一个完全二叉树")])]),e._v(" "),t("li",[t("p",[e._v("在树中寻找自己的voting set")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("如果树中的一个节点同意成为voting set中的一员，那么继续从他的左子树或者右子树中寻找")])]),e._v(" "),t("li",[t("p",[e._v("如果一个节点不同意成为voting set中的一员，那么同时从他的左右子树中开始找，并把最后的结果并起来")])]),e._v(" "),t("li",[t("p",[e._v("所以父节点可以fail，但是叶子节点必须在"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/064e376f-4640-47ec-bd42-ac178cbcb3c6-14899999.jpg",alt:"img"}})])])])]),e._v(" "),t("li",[t("p",[e._v("当一个进程收到了timestamp比请求队列首进程造早的请求，则询问队列首进程的请求发起人，请求发起人如果已经接受到了所有的投票，那么进入临界区，忽略此询问，否则等新请求先执行，把它放到队列自己之前的位置"),t("img",{attrs:{src:"https://api2.mubu.com/v3/document_image/2a0dc87e-9289-4c82-9094-c4405b3ea214-14899999.jpg",alt:"img"}})])]),e._v(" "),t("li",[t("p",[e._v("example：3完成之后会通知5和6，然后4又实现了5和6的互斥访问"),t("img",{attrs:{src:"https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/b0f30a10-a411-4ce0-b433-a0e7b4a933cc-14899999.jpg",alt:"img"}})])])])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);