---
title: Ch04_Thread
date: 2022-12-22
tags:
 - Go
categories:
 - Go

---



## 协程

关键字：go

![image-20221222193420206](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222193420206.png)

```go
func main() {
	go test()
	for i := 0; i < 10; i++ {
		fmt.Println("from main", i)
		time.Sleep(time.Millisecond)
	}

}

func test() {
	for i := 0; i < 10; i++ {
		fmt.Println("from go: ", i)
		time.Sleep(time.Millisecond)
	}

```

result：

```go
from go:  0
from main 0
from main 1
from go:  1
from go:  2
from main 2
from main 3
from go:  3
from go:  4
from main 4
from main 5
from go:  5
from main 6
from go:  6
from go:  7
from main 7
from main 8
from go:  8
from go:  9
from main 9

```



## MPG 模式

![image-20221222193941131](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222193941131.png)



+ 自动挂载到非阻塞的线程执行

![image-20221222194111180](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222194111180.png)





## Channel

![image-20221222194500451](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222194500451.png)

+ 协程之间公用同一个变量的时侯会出现问题

  ```go
  func multi(i int) {
  	var result int
  	for j := 1; j < i+1; j++ {
  		result *= i
  	}
  	m[i] = result
  }
  var m = make(map[int]int)
  
  func main() {
  	for i := 0; i < 200; i++ {
  		go multi(i)
  	}
  	time.Sleep(time.Second * 10)
  
  	for k, v := range m {
  		fmt.Println("output: ", k, "-->", v)
  	}
  
  }
  ```

  + 解决办法1： 加互斥锁

  ![image-20221222195947143](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222195947143.png)

  ```go
  ```

  

  + 解决办法2： channel(线程安全)

![image-20221222200321642](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222200321642.png)

![image-20221222200456671](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222200456671.png)

![image-20221222200506714](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222200506714.png)

![image-20221222200638861](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222200638861.png)

+ 读写数据：

+ ![image-20221222201241859](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222201241859.png)

+ ![image-20221222201900762](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222201900762.png)

  ```go
  func main() {
  	//容量为3
  	var strCha = make(chan string, 3)
  	strCha <- "aaa"
  	strCha <- "bbb"
  	//strCha <- "ccc"
  	fmt.Println(len(strCha)) //2
  	fmt.Println(cap(strCha)) //3
  	str := <-strCha
  	fmt.Println(str)         // aaa
  	fmt.Println(len(strCha)) //1
  	fmt.Println(cap(strCha)) //3
  	//关闭channel，不能往里面写数据了，但是还是可以往里面读数据
  	close(strCha)
  
  }
  ```

+ 存任意数据，在取出的时候要用类型断言http://c.biancheng.net/view/4281.html![image-20221222201414049](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222201414049.png)

+ ![image-20221222201555868](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222201555868.png)





## Example：重要

当编译器看到一个管道只有写但没有读的话会报错

![image-20221222202152141](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222202152141.png)

![image-20221222202220028](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222202220028.png)







![image-20221222202936831](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222202936831.png)





![image-20221222202910476](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222202910476.png)

![image-20221222203042801](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221222203042801.png)

+ 后面 }()

