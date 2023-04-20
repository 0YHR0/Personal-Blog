---
title: Ch05 ChessBoard
date: 2019-07-23
tags:
 - Algorithm
categories:
 - Algorithm

---

# 马踏棋盘（骑士周游问题）

将马随机放在国际象棋的 8×8 棋盘 Board[0～7]的某个方格中，马按走棋规则(马走日字)进行移动。要求 每个方格只进入一次，走遍棋盘上全部 64 个方格

![image-20230420230924219](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230420230924219.png)

```java
import java.awt.Point;
import java.util.ArrayList;
import java.util.Comparator;

public class ChessDemo {
	public static int X;//棋盘大小
	public static int Y;//棋盘大小
	public static int Visited[][] = new int[6][6];//记录此点为第几个访问的节点
	public static boolean fin = false;//表示算法结束的标志

	public static void main(String[] args) {
		X = 6;
		Y = 6;
		ChessDemo chess = new ChessDemo();
		chess.travel(3, 1, 1);
		for(int i = 0; i < X ; i++) {
			for(int j = 0; j < Y;j++) {
				System.out.printf("%4d", Visited[i][j]);
			}
			System.out.println();
		}

		

	}
	/**
	 * 该算法为马踏棋盘
	 * @param x：表示起始点的位置
	 * @param y：表示起始点的位置
	 * @param step：表示步数
	 */
	public void travel(int x, int y, int step) {
		Visited[x][y] = step;
		ArrayList<Point> list = next(new Point(x,y));
		//使用贪心算法优化算法
		sort(list);
		//递归开始
		for(Point p: list) {
			if(Visited[p.x][p.y] == 0) {
				travel(p.x, p.y, step + 1);
			}
		}
		//棋盘没走完，处于回溯状态
		if(step < X*Y && !fin) {
			Visited[x][y] = 0;
		}
		else {
			fin = true;
		}
		
	}
	//把接下来所有能走的步数都存在链表中
	public static ArrayList<Point> next(Point point){
		ArrayList<Point> list = new ArrayList<Point>();
		Point temp = new Point();
		//8种走法
		if((temp.x = point.x - 2) >= 0 && (temp.y = point.y + 1) < Y) {
			list.add(new Point(temp.x, temp.y));
		}
		if((temp.x = point.x + 2) < X && (temp.y = point.y + 1) < Y) {
			list.add(new Point(temp.x, temp.y));
		}
		if((temp.x = point.x - 1) >= 0 && (temp.y = point.y + 2) < Y) {
			
			list.add(new Point(temp.x, temp.y));
		}
		if((temp.x = point.x + 1) < X && (temp.y = point.y + 2) < Y) {
			
			list.add(new Point(temp.x, temp.y));
		}
		if((temp.x = point.x - 2) >= 0 && (temp.y = point.y - 1) >= 0) {
			
			list.add(new Point(temp.x, temp.y));
		}
		if((temp.x = point.x + 2) < X && (temp.y = point.y - 1) >= 0) {
			
			list.add(new Point(temp.x, temp.y));
		}
		if((temp.x = point.x - 1) >= 0 && (temp.y = point.y - 2) >= 0) {
			
			list.add(new Point(temp.x, temp.y));
		}
		if((temp.x = point.x + 1) < X && (temp.y = point.y - 2) >= 0) {
			
			list.add(new Point(temp.x, temp.y));
		}

		return list;
	}
	//算法优化，使用递增排序，在算法中优先迭代选择少的情况
	public static void sort(ArrayList<Point> arr) {
		arr.sort(new Comparator<Point>() {

			@Override
			public int compare(Point o1, Point o2) {
				if(next(o1).size() < next(o2).size()) {
					return -1;
				}
				else if (next(o1).size() > next(o2).size()) {
					return 1;
				}
				else {
					return 0;
				}
				
			}
		});
	}

}
```



## 