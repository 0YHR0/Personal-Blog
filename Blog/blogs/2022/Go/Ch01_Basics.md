---
title: Ch01_Basics
date: 2022-12-12
tags:
 - Go
categories:
 - Go

---

### 字符串连接

```go
fmt.Println("Google" + "Runoob")
```



### 格式化字符串

Go 语言中使用 **fmt.Sprintf** 或 **fmt.Printf** 格式化字符串并赋值给新串：

- **Sprintf** 根据格式化参数生成格式化的字符串并返回该字符串。
- **Printf** 根据格式化参数生成格式化的字符串并写入标准输出。
- 打印地址 %P， &a
- 打印数据类型 %T， str

```go
package main

import (
    "fmt"
)

func main() {
   // %d 表示整型数字，%s 表示字符串
    var stockcode=123
    var enddate="2020-12-31"
    var url="Code=%d&endDate=%s"
    var target_url=fmt.Sprintf(url,stockcode,enddate)
    fmt.Println(target_url)
}
```

![image-20221214164958810](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214164958810.png)

### 包

关于包，根据本地测试得出以下几点：

- 文件名与包名没有直接关系，不一定要将文件名与包名定成同一个。
- 文件夹名与包名没有直接关系，并非需要一致。
- 同一个文件夹下的文件只能有一个包名，否则编译报错。

**为了让其他包访问到本包的函数，函数名要大写，类似public**



### 变量声明

![image-20221212214450833](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221212214450833.png)

```go
var a string = "Runoob"
fmt.Println(a)

var b, c int = 1, 2
fmt.Println(b, c)

// 声明一个变量并初始化
var a = "RUNOOB"
fmt.Println(a)

// 没有初始化就为零值
var b int
fmt.Println(b)

// bool 零值为 false
var c bool
fmt.Println(c)
```

- 数值类型（包括complex64/128）为 **0**

- 布尔类型为 **false**

- 字符串为 **""**（空字符串）

- 单引号是整形，‘A’就是65，会根据ASCII映射，v1:= 'A' //类型是int32，值是65

- 以下几种类型为 **nil**：

  - ```go
    var a *int
    var a []int
    var a map[string] int
    var a chan int
    var a func(string) int
    var a error // error 是接口
    ```

```go
var x, y int
var (  // 这种因式分解关键字的写法一般用于声明全局变量
    a int
    b bool
)

var c, d int = 1, 2
var e, f = 123, "hello"


var i int
var f float64
var b bool
var s string
fmt.Printf("%v %v %v %q\n", i, f, b, s)
```

intVal := 1 相等于：

```go
var intVal int 
intVal =1 
```



### 数据类型转换

![image-20221215230503051](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221215230503051.png)

String转基本数据类型用strconv



### 匿名变量在函数返回值时的使用：

```go
package main

import "fmt"

func main() {
  _,numb,strs := numbers() //只获取函数返回值的后两个
  fmt.Println(numb,strs)
}

//一个可以返回多个值的函数
func numbers()(int,int,string){
  a , b , c := 1 , 2 , "str"
  return a,b,c
}
```



### 常量

```go
 const b string = "abc"
```

常量可以用len(), cap(), unsafe.Sizeof()函数计算表达式的值。常量表达式中，函数必须是内置函数，否则编译不过：

```go
package main

import "unsafe"
const (
    a = "abc"
    b = len(a)
    c = unsafe.Sizeof(a)
)

func main(){
    println(a, b, c)
}
```



### iota

第一个 iota 等于 0，每当 iota 在新的一行被使用时，它的值都会自动加 1；所以 a=0, b=1, c=2 可以简写为如下形式：

```go
const (
    a = iota
    b
    c
)
```

```go
package main

import "fmt"

func main() {
    const (
            a = iota   //0
            b          //1
            c          //2
            d = "ha"   //独立值，iota += 1
            e          //"ha"   iota += 1
            f = 100    //iota +=1
            g          //100  iota +=1
            h = iota   //7,恢复计数
            i          //8
    )
    fmt.Println(a,b,c,d,e,f,g,h,i)
}
```



例子：

```go
package main

import "fmt"
const (
    i=1<<iota
    j=3<<iota
    k
    l
)

func main() {
    fmt.Println("i=",i)
    fmt.Println("j=",j)
    fmt.Println("k=",k)
    fmt.Println("l=",l)
}

输出：
i= 1
j= 6
k= 12
l= 24
```

iota 表示从 0 开始自动加 1，所以 **i=1<<0**, **j=3<<1**（**<<** 表示左移的意思），即：i=1, j=6，这没问题，关键在 k 和 l，从输出结果看 **k=3<<2**，**l=3<<3**



### 强制类型转换

![image-20221212215547836](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221212215547836.png)



### 指针

![image-20221214124929118](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214124929118.png)



### 获取键盘输入输出

```go
package main

import "fmt"

func main() {
	var str1 string
	var str2 string
	//输入的时候用空格分割，这边参数是指针
	fmt.Scanln(&str1, &str2)
	fmt.Println(str1)
	fmt.Println(str2)
}
```



### 条件判断

if... else

```go
var str1 string = "111"
if str1 == "123" {
		fmt.Println("kong")
	} else if str1 == "456" {
		fmt.Println("you")
	} else {
		fmt.Println("mei")
	}
```

+ else 必须不能单开一行写



switch

```go
func main() {
   /* 定义局部变量 */
   var grade string = "B"
   var marks int = 90

   switch marks {
      case 90: grade = "A"
      case 80: grade = "B"
      case 50,60,70 : grade = "C"
      default: grade = "D"  
   }

   switch {
      case grade == "A" :
         fmt.Printf("优秀!\n" )    
      case grade == "B", grade == "C" :
         fmt.Printf("良好\n" )      
      case grade == "D" :
         fmt.Printf("及格\n" )      
      case grade == "F":
         fmt.Printf("不及格\n" )
      default:
         fmt.Printf("差\n" );
   }
   fmt.Printf("你的等级是 %s\n", grade );      
}
```



type switch

![image-20221214131545756](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214131545756.png)

```go
package main

import "fmt"

func main() {
   var x interface{}
     
   switch i := x.(type) {
      case nil:  
         fmt.Printf(" x 的类型 :%T",i)                
      case int:  
         fmt.Printf("x 是 int 型")                      
      case float64:
         fmt.Printf("x 是 float64 型")          
      case func(int) float64:
         fmt.Printf("x 是 func(int) 型")                      
      case bool, string:
         fmt.Printf("x 是 bool 或 string 型" )      
      default:
         fmt.Printf("未知型")    
   }  
}
```

### fallthrough

使用 fallthrough 会强制执行后面的 case 语句，fallthrough 不会判断下一条 case 的表达式结果是否为 true

```go
package main

import "fmt"

func main() {

    switch {
    case false:
            fmt.Println("1、case 条件语句为 false")
            fallthrough
    case true:
            fmt.Println("2、case 条件语句为 true")
            fallthrough
    case false:
            fmt.Println("3、case 条件语句为 false")
            fallthrough
    case true:
            fmt.Println("4、case 条件语句为 true")
    case false:
            fmt.Println("5、case 条件语句为 false")
            fallthrough
    default:
            fmt.Println("6、默认 case")
    }
}
```

result:

```go
2、case 条件语句为 true
3、case 条件语句为 false
4、case 条件语句为 true
```



### break

![image-20221214131940361](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214131940361.png)

![image-20221214154250750](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221214154250750.png)

```go
sum := 0
for i := 0; i <= 10; i++ {
    sum += i
}
fmt.Println(sum)


func main() {
   sum := 1
   for ; sum <= 10; {
      sum += sum
   }
   fmt.Println(sum)

   // 这样写也可以，更像 While 语句形式
   for sum <= 10{
      sum += sum
   }
   fmt.Println(sum)
}
```



### for-each range

```go
package main
import "fmt"

func main() {
   strings := []string{"google", "runoob"}
   for i, s := range strings {
      fmt.Println(i, s)
   }


   numbers := [6]int{1, 2, 3, 5}
   for i,x:= range numbers {
      fmt.Printf("第 %d 位 x 的值 = %d\n", i,x)
   }  
}
```

result:

```go
0 google
1 runoob
第 0 位 x 的值 = 1
第 1 位 x 的值 = 2
第 2 位 x 的值 = 3
第 3 位 x 的值 = 5
第 4 位 x 的值 = 0
第 5 位 x 的值 = 0
```



```go
package main
import "fmt"

func main() {
    map1 := make(map[int]float32)
    map1[1] = 1.0
    map1[2] = 2.0
    map1[3] = 3.0
    map1[4] = 4.0
   
    // 读取 key 和 value
    for key, value := range map1 {
      fmt.Printf("key is: %d - value is: %f\n", key, value)
    }

    // 读取 key
    for key := range map1 {
      fmt.Printf("key is: %d\n", key)
    }

    // 读取 value
    for _, value := range map1 {
      fmt.Printf("value is: %f\n", value)
    }
}
```

result

```go
key is: 4 - value is: 4.000000
key is: 1 - value is: 1.000000
key is: 2 - value is: 2.000000
key is: 3 - value is: 3.000000
key is: 1
key is: 2
key is: 3
key is: 4
value is: 1.000000
value is: 2.000000
value is: 3.000000
value is: 4.000000
```



### break 标记退出多重循环

```go
func main() {

   // 不使用标记
   fmt.Println("---- break ----")
   for i := 1; i <= 3; i++ {
      fmt.Printf("i: %d\n", i)
      for i2 := 11; i2 <= 13; i2++ {
         fmt.Printf("i2: %d\n", i2)
         break
      }
   }

   // 使用标记
   fmt.Println("---- break label ----")
   re:
      for i := 1; i <= 3; i++ {
         fmt.Printf("i: %d\n", i)
         for i2 := 11; i2 <= 13; i2++ {
         fmt.Printf("i2: %d\n", i2)
         break re
      }
   }
}
```



result

```go
---- break ----
i: 1
i2: 11
i: 2
i2: 11
i: 3
i2: 11
---- break label ----
i: 1
i2: 11    
```



### continue 

```go
func main() {

    // 不使用标记
    fmt.Println("---- continue ---- ")
    for i := 1; i <= 3; i++ {
        fmt.Printf("i: %d\n", i)
            for i2 := 11; i2 <= 13; i2++ {
                fmt.Printf("i2: %d\n", i2)
                continue
            }
    }

    // 使用标记
    fmt.Println("---- continue label ----")
    re:
        for i := 1; i <= 3; i++ {
            fmt.Printf("i: %d\n", i)
                for i2 := 11; i2 <= 13; i2++ {
                    fmt.Printf("i2: %d\n", i2)
                    continue re
                }
        }
}
```

result:

```go
---- continue ---- 
i: 1
i2: 11
i2: 12
i2: 13
i: 2
i2: 11
i2: 12
i2: 13
i: 3
i2: 11
i2: 12
i2: 13
---- continue label ----
i: 1
i2: 11
i: 2
i2: 11
i: 3
i2: 11
```



### goto

```go
func main() {
   /* 定义局部变量 */
   var a int = 10

   /* 循环 */
   LOOP: for a < 20 {
      if a == 15 {
         /* 跳过迭代 */
         a = a + 1
         goto LOOP
      }
      fmt.Printf("a的值为 : %d\n", a)
      a++    
   }  
}
```

result

```go
a的值为 : 10
a的值为 : 11
a的值为 : 12
a的值为 : 13
a的值为 : 14
a的值为 : 16
a的值为 : 17
a的值为 : 18
a的值为 : 19
```



### 无限循环

```go
for true {...}
```

