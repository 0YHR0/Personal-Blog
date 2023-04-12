---
title: Ch02_Function
date: 2022-12-14
tags:
 - Go
categories:
 - Go


---

### 

### 函数定义

![image-20221214162832299](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214162832299.png)

```go
/* 函数返回两个数的最大值 */
func max(num1, num2 int) int {
   /* 声明局部变量 */
   var result int

   if (num1 > num2) {
      result = num1
   } else {
      result = num2
   }
   return result
}
```



### 函数返回多个值

```go
package main

import "fmt"

func swap(x, y string) (string, string) {
   return y, x
}

func main() {
   a, b := swap("Google", "Runoob")
   fmt.Println(a, b)
}
```



### 传引用

```go
func main() {
   /* 定义局部变量 */
   var a int = 100
   var b int= 200

   fmt.Printf("交换前，a 的值 : %d\n", a )
   fmt.Printf("交换前，b 的值 : %d\n", b )

   /* 调用 swap() 函数
   * &a 指向 a 指针，a 变量的地址
   * &b 指向 b 指针，b 变量的地址
   */
   swap(&a, &b)

   fmt.Printf("交换后，a 的值 : %d\n", a )
   fmt.Printf("交换后，b 的值 : %d\n", b )
}

func swap(x *int, y *int) {
   var temp int
   temp = *x    /* 保存 x 地址上的值 */
   *x = *y      /* 将 y 值赋给 x */
   *y = temp    /* 将 temp 值赋给 y */
}
```



### 函数作为实参

```go
package main

import (
   "fmt"
   "math"
)

func main(){
   /* 声明函数变量 */
   getSquareRoot := func(x float64) float64 {
      return math.Sqrt(x)
   }

   /* 使用函数 */
   fmt.Println(getSquareRoot(9))

}
```



### 闭包

![image-20221214171420662](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214171420662.png)

![image-20221214171511975](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214171511975.png)

```go
package main

import "fmt"

func getSequence() func() int {
   i:=0
   return func() int {
      i+=1
     return i  
   }
}

func main(){
   /* nextNumber 为一个函数，函数 i 为 0 */
   nextNumber := getSequence()  

   /* 调用 nextNumber 函数，i 变量自增 1 并返回 */
   fmt.Println(nextNumber())
   fmt.Println(nextNumber())
   fmt.Println(nextNumber())
   
   /* 创建新的函数 nextNumber1，并查看结果 */
   nextNumber1 := getSequence()  
   fmt.Println(nextNumber1())
   fmt.Println(nextNumber1())
}
```



### 类中的方法

```go
package main

import (
   "fmt"  
)

/* 定义结构体 */
type Circle struct {
  radius float64
}

func main() {
  var c1 Circle
  c1.radius = 10.00
  fmt.Println("圆的面积 = ", c1.getArea())
}

//该 method 属于 Circle 类型对象中的方法
func (c *Circle) getArea() float64 {
  //c.radius 即为 Circle 类型对象中的属性
  return 3.14 * c.radius * c.radius
}
```



### 可变参数

![image-20221214165332406](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214165332406.png)





### defer延迟执行

![image-20221214165631972](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214165631972.png)

![image-20221214165758970](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214165758970.png)







### 匿名函数

![image-20221214170316645](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214170316645.png)

![image-20221214170529844](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214170529844.png)



### init函数

每个源文件都可以包含一个init函数，该函数会在main函数之前执行

![image-20221222150820516](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222150820516.png)

![image-20221222150852540](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222150852540.png)

![image-20221222151047620](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222151047620.png)