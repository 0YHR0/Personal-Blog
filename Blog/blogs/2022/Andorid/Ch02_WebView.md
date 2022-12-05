---
title: Ch02 Webview
date: 2021-05-07
tags:
 - Android
categories:
 - Android
---

# Webview

```java
webView = findViewById(R.id.web_01);
//加载本地HTML
//webView.loadUrl("file:///android_asset/echarts.html");
        //加载网络url
        webView.getSettings().setJavaScriptEnabled(true);
        webView.loadUrl("https://m.baidu.com");
```

