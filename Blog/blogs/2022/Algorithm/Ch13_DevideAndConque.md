---
title: Ch13 DevideAndConque
date: 2020-04-02
tags:
 - Algorithm
categories:
 - Algorithm



---

# DevideAndConque

**汉诺塔问题：**

- 如果只有一个盘，可以直接移动
- 如果不是一个盘，总归可以把它看成两个部分，第一部分1为最低下那个盘，第二部分2为剩下的盘

设共有柱子ABC，需要把A柱移动到C柱

1. 先把2移动到B
2. 再把1移动到C
3. 再把2移动到C

```java
 public class Hanoitower {

	public static void main(String[] args) {
		Han(5, 'A' , 'B', 'C');

	}
	/**
	 * 
	 * @param num: 要移动的数目
	 * @param a：第一个柱子
	 * @param b：第二个柱子
	 * @param c：第三个柱子
	 */
	public static void Han(int num, char a, char b, char c) {
		if(num == 1) {
			System.out.println(a + "=>" + c);
		}
		else {
			//先把上面那部分移动到b
			Han(num - 1, a, c, b);
			//再把下面那部分移动到c
			System.out.println(a + "=>" + c);
			//再把剩下的从b移动到c
			Han(num - 1,b,a,c);
		}
	}

}
```

