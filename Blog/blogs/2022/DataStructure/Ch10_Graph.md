---
title: Ch10 Graph
date: 2019-08-05
tags:
 - Data structure
categories:
 - Data structure
---



**图的表示方式：**

- **邻接表：不会造成空间浪费，只表示直连路径**
- **邻接矩阵：可能会有空间浪费，只表示直连路径**

**图的初始化：边使用矩阵存储**

```java
package graph;

import java.util.ArrayList;
import java.util.Arrays;

public class GraphDemo {
	public ArrayList<String> vertexList;
	public int[][] link;
	public int numberOfEdges;
	public GraphDemo(int n) {
		link = new int[n][n];
		vertexList = new ArrayList<String>();
	}
	
	//添加节点
	public void addVertex(String vertex) {
		vertexList.add(vertex);
	}
	//添加边
	public void addlink(int a, int b, int weight) {
		link[a][b] = weight;
		link[b][a] = weight;
		numberOfEdges ++;
	}
	//根据索引返回节点
	public String getVertex(int i) {
		return vertexList.get(i);
	}
	//显示图
	public void showGraph() {
		for(int[] vertex: link) {
			System.out.println(Arrays.toString(vertex));
		}
	}

	public static void main(String[] args) {
		GraphDemo graph = new GraphDemo(4);
		String vertex[] = new String[] {"A","B","C","D"};
		for(String ver: vertex) {
			graph.vertexList.add(ver);
		}
		graph.addlink(0, 1, 3);
		graph.showGraph();
		System.out.println(graph.getVertex(3));

	}
	

}

```



**图的遍历：深度优先，广度优先**

深度遍历DFS

![image-20230420005414196](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230420005414196.png)

```java
//深度优先遍历DFS,参数为第一个要访问的节点
	public void dfs(int a) {
		System.out.print(getVertex(a) + "-->");
		isVisited[a] = true;
		//获取第一个要访问的节点
		int w = getFirstVertex(a);
		while(w != -1) {
			if(isVisited[w] == false) {
				dfs(w);
			}
			w = getNextVertex(a, w);
		}
	}
	//为了处理从一个节点到达不了的其他节点的遍历问题
	public void dfs() {
		for(int i = 0; i < getVertexNum(); i++) {
			if(isVisited[i] == false) {
				dfs(i);
			}
		}
	}
```

广度优先遍历（BFS）

![image-20230420005428654](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230420005428654.png)

```java
//BFS广度优先遍历(非递归)
	public void bfs(int a) {
		LinkedList<Integer> queue = new LinkedList<Integer>();
		int u;
		int w;
		if(isVisited[a] == false) {
			System.out.print(getVertex(a) + "=>");
			isVisited[a] = true;
		}
		u = getFirstVertex(a);
		while(u != -1) {
			System.out.print(getVertex(u) + "=>");
			queue.addLast(u);
			isVisited[u] = true;
			u = getNextVertex(a, u);
		}
		while(!queue.isEmpty()) {
			w = queue.removeFirst();
			u = getFirstVertex(w);
			while(u != -1) {
				System.out.print(getVertex(u) + "=>");
				queue.addLast(u);
				isVisited[u] = true;
				u = getNextVertex(w, u);
			}
		}
	}
	//为了防止不连通的节点没有被遍历
	public void bfs() {
		for(int i = 0; i < getVertexNum(); i++) {
			if(isVisited[i] == false) {
				bfs(i);
			}
		}
	}
```

