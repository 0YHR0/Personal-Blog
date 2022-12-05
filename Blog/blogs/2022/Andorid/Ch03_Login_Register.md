---
title: Ch03 Login_Register
date: 2021-05-07
tags:
 - Android
categories:
 - Android

---

# Login_Register

### register

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".LoginActivity"
    android:background="#009688">
    <TextView
        android:id="@+id/tv_title"
        android:layout_width="match_parent"
        android:layout_height="100dp"
        android:text="Register window"
        android:gravity="center"
        android:textSize="25sp"
        android:background="#DFD9C62A"
        ></TextView>
    <EditText
        android:id="@+id/et_username"
        android:layout_width="match_parent"
        android:layout_height="50dp"
        android:textSize="18sp"
        android:layout_below="@id/et_phone"
        android:layout_marginLeft="10dp"
        android:layout_marginRight="10dp"
        android:layout_marginTop="10dp"
        android:hint="username"
        android:background="@drawable/stroke"
        android:paddingLeft="10dp"
        android:paddingRight="10dp"
        ></EditText>
    <EditText
        android:id="@+id/et_password"
        android:layout_width="match_parent"
        android:layout_height="50dp"
        android:layout_below="@id/et_username"
        android:layout_marginLeft="10dp"
        android:layout_marginRight="10dp"
        android:layout_marginTop="10dp"
        android:inputType="textPassword"
        android:textSize="18sp"
        android:hint="password"
        android:background="@drawable/stroke"
        android:paddingLeft="10dp"
        android:paddingRight="10dp"
        ></EditText>
    <EditText
        android:id="@+id/et_phone"
        android:layout_width="match_parent"
        android:layout_height="50dp"
        android:layout_below="@id/tv_title"
        android:hint="phone number"
        android:inputType="number"
        android:textSize="18sp"
        android:layout_marginLeft="10dp"
        android:layout_marginRight="10dp"
        android:layout_marginTop="10dp"
        android:background="@drawable/stroke"
        android:paddingLeft="10dp"
        android:paddingRight="10dp"
        ></EditText>
    <Button
        android:id="@+id/btn_register"
        android:layout_width="200dp"
        android:layout_height="60dp"
        android:layout_below="@id/sex_group"
        android:layout_centerHorizontal="true"
        android:layout_marginTop="28dp"
        android:text="Register"
        android:textColor="#D9C37B"
        android:background="@drawable/btn_press"
        ></Button>
    <RadioGroup
        android:id="@+id/sex_group"
        android:layout_width="match_parent"
        android:layout_height="60dp"
        android:layout_below="@id/et_password"
        android:orientation="horizontal">
        <RadioButton
            android:id="@+id/sex_male"
            android:layout_width="match_parent"
            android:layout_height="60dp"
            android:text="male"
            android:textSize="20sp"
            android:textColor="#3F3F47"
            android:layout_marginLeft="10dp"
            android:layout_marginRight="10dp"
            android:layout_marginTop="5dp"
            android:layout_weight="1">

        </RadioButton>
        <RadioButton
            android:id="@+id/sex_female"
            android:layout_width="match_parent"
            android:layout_height="60dp"
            android:text="female"
            android:textSize="20sp"
            android:textColor="#3F3F47"
            android:layout_marginLeft="10dp"
            android:layout_marginRight="10dp"
            android:layout_marginTop="5dp"
            android:layout_weight="1">

        </RadioButton>


    </RadioGroup>

</RelativeLayout>
```



### login

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:background="#009688"

    tools:context=".LoginActivity">

    <TextView
        android:id="@+id/tv_title"
        android:layout_width="match_parent"
        android:layout_height="100dp"
        android:background="#DFD9C62A"
        android:gravity="center"
        android:text="Login window"
        android:textSize="25sp"></TextView>

    <EditText
        android:id="@+id/et_username"
        android:layout_width="match_parent"
        android:layout_height="50dp"
        android:layout_below="@id/tv_title"
        android:layout_marginLeft="20dp"
        android:layout_marginTop="20dp"
        android:layout_marginRight="20dp"
        android:background="@drawable/stroke"
        android:hint="username"
        android:paddingLeft="20dp"
        android:paddingRight="20dp"
        android:textSize="18sp"></EditText>

    <EditText
        android:id="@+id/et_password"
        android:layout_width="match_parent"
        android:layout_height="50dp"
        android:layout_below="@id/et_username"
        android:layout_marginLeft="20dp"
        android:layout_marginTop="20dp"
        android:layout_marginRight="20dp"
        android:background="@drawable/stroke"
        android:hint="password"
        android:inputType="textPassword"
        android:paddingLeft="20dp"
        android:paddingRight="20dp"
        android:textSize="18sp"></EditText>

    <Button
        android:id="@+id/btn_login"
        android:layout_width="200dp"
        android:layout_height="60dp"
        android:layout_below="@id/et_password"
        android:layout_centerHorizontal="true"
        android:layout_marginTop="48dp"
        android:background="@drawable/btn_press"

        android:text="Login"
        android:textColor="#D9C37B"></Button>
    <Button
        android:id="@+id/btn_register"
        android:layout_width="200dp"
        android:layout_height="60dp"
        android:layout_below="@id/btn_login"
        android:layout_centerHorizontal="true"
        android:layout_marginTop="28dp"
        android:text="Register"
        android:textColor="#D9C37B"
        android:background="@drawable/btn_press"
        ></Button>


</RelativeLayout>
```

