---
title: Ch01 Note
date: 2021-04-25
tags:
 - Android
categories:
 - Android
---

# Note

### 找不到Intent类

```java
import android.content.Intent;
```

### textview 走马灯：

```java
android:ellipsize="marquee"
android:focusable="true"
android:focusableInTouchMode="true"
android:marqueeRepeatLimit="marquee_forever"
```

### 跳转以及下划线：

```java
public class MainActivity extends AppCompatActivity {
    public TextView tv;
    public Button btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        tv = findViewById(R.id.view_1);
//        tv.getPaint().setFlags(Paint.STRIKE_THRU_TEXT_FLAG);//中划线
        tv.getPaint().setFlags(Paint.UNDERLINE_TEXT_FLAG);//下划线
        tv.getPaint().setAntiAlias(true);//抗锯齿
        btn = findViewById(R.id.btn_1);
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //跳转
                Intent intent  = new Intent(MainActivity.this,ButtonActivity.class);
                startActivity(intent);
            }
        });
    }
}
```

### 按钮圆角以及按压变色实现：

在drawable下新建文件，类型为selector

```xml
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item
        android:state_pressed="true">
        <shape>
        <solid
            android:color="#5DC5EC"></solid>
        <corners
            android:radius="5dp"></corners>
        </shape>
    </item>

    <item android:state_pressed="false">
        <shape>
        <solid
            android:color="#2657CE"></solid>
        <corners
            android:radius="5dp"></corners>
    </shape>
    </item>

</selector>
```

按钮按下后跳出提示：

```java
btn = findViewById(R.id.btn_1);
btn.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        Toast.makeText(MainActivity.this,"pressed",Toast.LENGTH_SHORT).show();
        
    }
});
```

### 文字居中：

```java
android:gravity="center"
```

### 取消自动大写：

```java
android:textAllCaps="false"
```

### 登录界面：设置提示与暗文：

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".TextViewActivity"
    android:background="#009688">
    <TextView
        android:id="@+id/tv_3"
        android:layout_width="match_parent"
        android:layout_height="100dp"
        android:text="Login window"
        android:gravity="center"
        android:textSize="20sp"
        android:background="#DFD9C62A"
        ></TextView>
    <EditText
    android:id="@+id/et_1"
    android:layout_width="match_parent"
    android:layout_height="100dp"
    android:textSize="16sp"
    android:layout_below="@id/tv_3"
    android:layout_marginLeft="10dp"
    android:layout_marginRight="10dp"
    android:hint="username"
    ></EditText>
    <EditText
        android:id="@+id/et_2"
        android:layout_width="match_parent"
        android:layout_height="100dp"
        android:layout_below="@id/et_1"
        android:layout_marginLeft="10dp"
        android:layout_marginRight="10dp"
        android:inputType="textPassword"
        android:textSize="16sp"
        android:hint="password"
        ></EditText>

</RelativeLayout>
```

登录界面onclick解耦：

```java
package com.example.hashtag;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class LoginActivity extends AppCompatActivity {
    public Button btn_login;
    public Button btn_register;
    public Onclick onclick = new Onclick();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        btn_login = findViewById(R.id.btn_login);
        btn_register = findViewById(R.id.btn_register);
        setListener();


    }
    public void setListener(){
        btn_login.setOnClickListener(onclick);
        btn_register.setOnClickListener(onclick);
    }
    private class Onclick implements View.OnClickListener{

        @Override
        public void onClick(View v) {
            Intent intent;
            switch (v.getId()){
                case R.id.btn_login:
                    Toast.makeText(LoginActivity.this,"press login",Toast.LENGTH_SHORT).show();
                    break;
                case R.id.btn_register:
                    intent = new Intent(LoginActivity.this,RegisterActivity.class);
                    startActivity(intent);
                    break;
            }
        }
    }
}

```

---

### ImageView：

src设置图片路径

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/clipboard.png)

glide图片库,github

先导入Gradle依赖：build.gradle（有两个文件，内部的这个文件）

https://muyangmin.github.io/glide-docs-cn/doc/download-setup.html

```json
repositories {
    mavenCentral()
    maven { url 'https://maven.google.com' }
}
dependencies {
    compile 'com.github.bumptech.glide:glide:4.11.0'
    annotationProcessor 'com.github.bumptech.glide:compiler:4.11.0'
}
```

要在AndroidManefist中设置联网权限：

```xml
<uses-permission android:name="android.permission.INTERNET"></uses-permission>
```

代码：

```java
imageView = findViewById(R.id.img_01);
Glide.with(this)
        .load("$url")
        .into(imageView);
```

