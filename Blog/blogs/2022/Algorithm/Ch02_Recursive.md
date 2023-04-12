---
title: Ch02 Recursive
date: 2019-07-02
tags:
 - Algorithm
categories:
 - Algorithm

---

# Recursive



**设计递归时要考虑好basecase（递归结束条件）**

**输出问题：**

```java
public class Test {

	public static void main(String[] args) {
		test(4);

	}
	public static void test(int n) {
		if(n > 2 ) test(n-1);
		System.out.println("n = " + n);
	}

}
```

程序输出：

```java
n = 2
n = 3
n = 4
```

JVM栈中：每个线程会开辟一个栈，线程中的方法执行时会开辟一个栈帧，是一个独立的空间

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230412122839390.png" alt="image-20230412122839390" style="zoom: 50%;" />

**阶乘问题：**

```java
public static int fac(int i) {
		if(i ==1) return 1;
		else {
			return fac(i -1) * i;
		}
	}
```

**迷宫回溯问题：**

```java
/**
	 * 寻路回溯算法（无论最终找到没路，返回值都是false）
	 * @param map：迷宫
	 * @param i：起点
	 * @param j：起点
	 * @return：是否到终点
	 */
	public static boolean findway(int[][]map, int i, int j) {
		if(map[5][6] == 2) {//如果到终点就返回true
			return true;
		}
		if(map[i][j] == 0) {
			map[i][j] = 2;
			//开始对下一个点试探性侦测
			if(findway(map, i + 1, j)) {//向下
				return false;//为了在整个递归完成后结束递归
			}
			else if(findway(map, i , j + 1)) {//向右
				return false;//为了在整个递归完成后结束递归
			}
			else if(findway(map, i - 1 , j)) {//向上
				return false;//为了在整个递归完成后结束递归
			}
			else if(findway(map, i , j - 1)) {//向左
				return false;//为了在整个递归完成后结束递归
			}
			else {
				map[i][j] = 3;//某个方向下一个点走不通
				return false;//换另一个方向
			}
		}
		else {//探测到该地为1,2,3，则表示都不通
			return false;//开始另一个方向的侦测
		}
	}
```

**八皇后问题：在8\*8的格子上放上8个棋子，使其不能再同一行或者同一列或者同一斜线**

```java
public class EightQueen {
	int max = 8;
	int[] queen = new int[max];
	public static void main(String[] args) {
		EightQueen q = new EightQueen();
		q.print();
		System.out.println("--------------------------");
		q.check(0);
		
	}
	/**
	 * 测试数组的某行是否冲突
	 * @param m:表示第几行
	 * @return :是否起冲突
	 */
	public boolean isConflict(int m) {
		for(int i = 0; i < m; i++) {
			//第一个条件判断是否在一条斜线上
			//第二个条件判断是否在同一列上
			if(Math.abs(queen[m] - queen[i]) == Math.abs(m - i) || queen[m] == queen[i]) {
				return true;
			}
		}
		return false;
	}
	/**
	 * 测试第m行是否会冲突
	 * @param m :第m行
	 */
	public void check(int m) {
		if(m >= max) {
			print();
			return;}
		//第m行一个一个位置试
		for(int i = 0; i < max; i++) {
			queen[m] = i;
			if(!isConflict(m)) {
				check(m + 1);
				//这里不加ruturn是为了回溯，也就是得出所有情况，而不是一种
				//return;
			}
		}
	}
	public void print() {
		for(int i: queen) {
			System.out.printf(i + " ");
		}
		System.out.println();
	}

}
```









