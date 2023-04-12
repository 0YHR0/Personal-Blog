---
title: Ch03 Array&Queue
date: 2019-06-13
tags:
 - Data structure
categories:
 - Data structure

---

# Array&Queue

**稀疏数组：当一个数组大部分都是0，或者为同一个值的时候**

- 记录数组的大小，几行几列，有多少个不同的值（3列）
- 把具有不同值的元素的行列及值记录在一个小规模数组中，从而缩小存储规模

二维数组转稀疏数组的思路：

1. 遍历二维数组，得到有效的数据个数sum

   2.创建稀疏数组：sparseArr int [ sum+1 ][ 3 ]

   3.将二维数组的有效数据存入稀疏数组

稀疏数组转换二维数组：

   1.先读取稀疏数组的第一行（包含原数组的行和列），创建二维数组

   2.再读取稀疏数组的后几行数据，再赋值给二维数组即可



例：存放一个棋盘，上面有两种颜色的棋子

```java
public class SparseArr {

	public static void main(String[] args) {
		//创建原始二维数组，11*11的棋盘
		int chessArr[][] = new int [11][11];
		chessArr[2][3] = 1;
		chessArr[3][4] = 2;
		System.out.println("-------------------原始数组---------------------------");
		for(int [] row:chessArr) {
			for(int data:row) {
				System.out.printf("%d\t",data);
			}
			System.out.println();
		}
		//根据原始二维数组创建稀疏数组
		//1.遍历二维数组，得到非零个数
		int sum = 0;
		for(int i = 0 ; i < chessArr.length; i++) {//二维数组的行数
			for(int j = 0; j < chessArr[0].length; j++) {//二维数组的列数
				if(chessArr[i][j] != 0) sum++;
			}
		}
		//2.创建对应的稀疏数组
		int sparseArr [][] = new int[sum + 1][3];
		sparseArr[0][0] = chessArr.length;
		sparseArr[0][1] = chessArr[0].length;
		sparseArr[0][2] = sum;
		//3.遍历二维数组，将非零值存放到稀疏数组里
		int k = 1;
		System.out.println("---------------------------稀疏数组-----------------------------------");
		System.out.println(sparseArr[0][0] + "\t" + sparseArr[0][1] + "\t" + sparseArr[0][2]);//输出第一行
		for(int i = 0 ; i < chessArr.length; i++) {
			for(int j = 0; j < chessArr[0].length;j++) {
				if(chessArr[i][j] != 0 ) {
					sparseArr[k][0] = i;
					sparseArr[k][1] = j;
					sparseArr[k][2] = chessArr[i][j];
					System.out.println(sparseArr[k][0] + "\t" + sparseArr[k][1] + "\t" + sparseArr[k++][2]);
				}
			}
		}
		
		//转换为原始数组
		//1.读取第一行，创建二维数组
		int chess[][] = new int[sparseArr[0][0]][sparseArr[0][1]];
		//2.读取剩余的行数，赋值
		for(int m = 0; m < sparseArr.length - 1; m++) {
			chess[sparseArr[m + 1][0]][sparseArr[m + 1][1]] = sparseArr[m + 1][2];
		}
		for(int i = 0; i < sparseArr[0][0]; i++) {
			for(int j = 0; j < sparseArr[0][1]; j++) {
				//if(chess[i][j] == 0) chess[i][j] = 9;
			}
		}
		//输出
		System.out.println("-----------原始----------------");
		for(int [] row:chess) {
			for(int data:row) {
				System.out.printf("%d\t",data);
			}
			System.out.println();
		}
		

	}

}
```



# 队列

**1.用数组实现队列，问题：浪费空间，没有复用效果**

```java
//用数组实现队列
class ArrayQueue{
	private int maxsize;
	private int front;//指向队列头部的前一个位置
	private int rear;//指向队列最后一个数据
	private int arr[];
	public ArrayQueue(int arrmaxsize) {
		maxsize = arrmaxsize;
		arr = new int[maxsize];
		front = -1;
		rear = -1;
	}
	//判断队列是否满
	public boolean isFull() {
		return rear == maxsize - 1;
	}
	//判断队列是否为空
	public boolean isEmpty() {
		return rear == front;
	}
	//添加数据到队列
	public void add(int data) {
		if(isFull()) System.out.println("Full");
		else {
			arr[++rear] = data; 
			maxsize++;
		}
	}
	//取出数据到队列
	public int next() {
		if(isEmpty()) {
			throw new RuntimeException("队列空，不能取数据");
			}
		else {
			maxsize--;
			return arr[++front];
		}
	}
	//显示队列的所有数据
	public void show(){
		if(isEmpty()) {
			System.out.println("队列为空");
			return;
		}
		else {
			for(int i = front + 1; i <= rear; i++) {
				System.out.println(arr[i]);
			}
		}
	}
	
}

```



**2.使用环形队列：**

- **front指向第一个元素，初始值为0**
- **rear指向最后一个元素的后一个位置，初始值为0**
- **当（rear + 1）% maxsize =  front 时，表示队列已满**
- **当rear = front时，表示队列为空**
- **会默认空出一个位置**

```java
//用数组实现环形队列
class CycleArrQueue {
	private int maxsize;
	private int front;
	private int rear;
	private int data[];
	public CycleArrQueue(int max) {
		maxsize = max;
		data = new int[maxsize];
		front = 0;
		rear = 0;
	}
	public boolean isEmpty() {
		return front == rear;
	}
	public boolean isFull() {
		return (rear + 1) % maxsize == front;
	}
	public void add(int num) {
		if(isFull()) System.out.println("Full");
		else {
			data[(rear) % maxsize] = num;
			rear ++;
			}
	}
	public int next() {
		if(isEmpty()) throw new RuntimeException("Empty");
		int j = data[(front) % maxsize];
		front ++;
		return j;
	}
	public int getsize() {
		return rear - front;
	}
	public void show() {
		for(int i = front; i < rear; i++) {
			System.out.println(data[i % maxsize]);
		}
	}
}
```

