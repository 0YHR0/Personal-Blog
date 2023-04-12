---
title: Ch04 Time Complexity
date: 2019-06-30
tags:
 - Data structure
categories:
 - Data structure


---

**时间复杂度：**

- 忽略常数项
- 忽略低次项
- 忽略系数

以下时间复杂度从小到大排列：

常数阶：O(1)

```java
int c =a+b;
a++;
```

对数阶：O(logN)

```java
int i = 1;
while(i < n){
    i = i * 2;
}
```

线性阶：O(n)

```java
for(int i = 0; i < n; i++){
    a = a + 1;
}
```

线性对数阶：O(nlogN)

```java
for(int i = 1 ; i < n; i++){
    while(m < k){
        m = m * 2;
    }
}
```

平方阶：O(n2)

```java
for(int i = 1; i < n; i++){
    for(int j = 1; j < n; j++){
        n = n + 1;
    }
}
```

