(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{502:function(s,e,t){"use strict";t.r(e);var a=t(2),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("考： https://blog.csdn.net/weixin_43501172/article/details/125869017")]),s._v(" "),e("p",[s._v("主要参考： https://blog.csdn.net/weixin_43501172/article/details/125869017")]),s._v(" "),e("h2",{attrs:{id:"k8s-metrics-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#k8s-metrics-server"}},[s._v("#")]),s._v(" K8s Metrics Server")]),s._v(" "),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" ~/metrics\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载metrics配置文件")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改文件")]),s._v("\ncontainers:\n      - args:\n        - --cert-dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp\n        - --secure-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4443")]),s._v("\n        - --kubelet-preferred-address-types"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("InternalIP,ExternalIP,Hostname\n        - --kubelet-use-node-status-port\n        - --metric-resolution"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("15s\n        - --kubelet-insecure-tls "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入参数 ")]),s._v("\n        image: registry.aliyuncs.com/google_containers/metrics-server:v0.6.1 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换成国内镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用")]),s._v("\nkubectl apply "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" components.yaml\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("div",{staticClass:"language-sh line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载安装文件")]),s._v("\nkubectl apply "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);