---
title: Ch07 LinkedList
date: 2019-07-22
tags:
 - Data structure
categories:
 - Data structure

---

**链表：**

- 以节点来存放
- 每个节点包括数据+指向下一个节点的引用

head节点：不存放数据，只存放第一个引用，表示链表头

### 1.单向链表：

```java
public class SinglelistDemo {

	public static void main(String[] args) {
		Singlelist list = new Singlelist();
		list.add(new Node(1, "a"));
		list.add(new Node(2, "b"));
		list.add(new Node(4, "c"));
		list.addByOrder(new Node(3, "zzzzz"));
		list.delete(6);
		list.show();

	}

}
class Singlelist{
	private Node head = new Node(0, "");
	public void add(Node node) {
		Node temp = head;
		while(true) {
			if(temp.next == null) {
				temp.next = node;
				break;
			}
			else {
				temp = temp.next;
			}
		}
	}
	public void addByOrder(Node node) {
		Node temp = head;
		while(true) {
			if(temp.next == null) break;
			else if(temp.next.number >= node.number ) {
				node.next = temp.next;//这两行顺序不能反！！
				temp.next = node;
				break;
			}
			else temp = temp.next;
		}
		
	}
	public void delete(int num) {
		Node temp = head;
		while(true) {
		    if(temp.next == null) {
		    	System.out.println("没有此节点");
		    	break;
		    }
		    else if (temp.next.number == num ) {
		    	temp.next = temp.next.next;
		    	break;
		    }
		    else {
		    	temp = temp.next;
		    }
		}
	}
	public void show() {
		Node temp = head;
		while(true) {
			if(temp == null) {
				break;
			}
			else {
				System.out.println(temp);
				temp = temp.next;
			}
		}
	}
	
}
class Node{
	public int number;
	private String name;
	public Node next;
	public Node(int num, String name) {
		number = num;
		this.name = name;
	}
	@Override
	public String toString() {
		return "node [number=" + number + ", name=" + name + ", next=" + next + "]";
	}
	
}

```





获取单链表节点个数:

```java
public int getnodenum() {
		int i = 0;
		Node temp = head;
		while(true) {
			if(temp.next == null) break;
			else {
				temp = temp.next;
				i++;
			}
		}
		return i;
	}
```



获取倒数第几个节点：

```java
public Node getlast(int num) {
		int size = this.getnodenum();
		Node temp = head;
		for(int i = 0 ; i <= size - num; i++) {
			temp = temp.next;
		}
		return temp;
	}
```



逆向存放单链表：

```java
//逆向存放单链表
	public void reverse() {
		Node current = head.next;
		Node reverse = new Node(0,"");//重新定义一个节点
		while(current!= null) {
			Node temp = current.next;//用于标记当前节点的后一个节点，方便循环，因为下面代码会改变当前节点的下一个节点的值
			current.next = reverse.next;
			reverse.next = current;
			current = temp;
		}
		head.next = reverse.next;
		
	}
```



从尾到头打印单链表:

```java
//从尾到头打印链表
	//可以使用栈的数据结构
	public void reverseshow() {
		Stack<Node> stack = new Stack<Node>();
		Node temp = head.next;
		while(temp != null) {
			stack.add(temp);
			temp = temp.next;
		}
		while(!stack.isEmpty()) {
			System.out.println(stack.pop());
		}
	}
```

### **2.双向链表**

- 单链表查找只能是单个方向的

```java
class DoubleLinkList{
	public DoubleNode head = new DoubleNode(0, "");
	public void add(DoubleNode node) {
		DoubleNode temp = head;
	    while(temp.next != null) {
				temp = temp.next;
			}
			temp.next = node;
			node.pre = temp;
	}
	public void show() {
		DoubleNode temp = head;
		while(temp != null) {
			System.out.println(temp);
			temp = temp.next;
		}
	}
	public void delete(int num) {
		DoubleNode temp = head;
		while(temp.number != num && temp != null) {
				temp = temp.next;
		}
		if(temp == null) {
			System.out.println("没有此数");
			return;
		}
		if(temp == head) {
			System.out.println("不能删除头节点");
			return;
		}
		temp.pre.next = temp.next;
		if(temp.next != null) temp.next.pre = temp.pre;//判断是否为最后一个节点
		
	}
	
	
}
class DoubleNode{
	public int number;
	private String name;
	public DoubleNode pre;
	public DoubleNode next;
	public DoubleNode(int num, String name) {
		number = num;
		this.name = name;
	}
	@Override
	public String toString() {
		return "DoubleNode [number=" + number + ", name=" + name + "]";
	}
	
	
}
```



### **3.环形链表：解决约瑟夫问题**

- 约瑟夫问题：n个人坐成一个圈，从第k个人开始往后数m个人出列，以此类推，求最后出列的顺序

```java
class SingleCycleList {
	public CycleNode head = new CycleNode(0, "");

	public void add(CycleNode node) {
		if (head.next == null) {
			head.next = node;
			node.next = node;
		} else {
			CycleNode temp = head.next;
			while (temp.next != head.next) {
				temp = temp.next;
			}
			temp.next = node;
			node.next = head.next;
		}
	}

	public void show() {
		CycleNode temp = head.next;
		if (temp != null) {
			while (temp.next != head.next) {
				System.out.println(temp);
				temp = temp.next;
			}
			System.out.println(temp);
		}
	}

	public void delete(int num) {
		if (num == 0) {
			System.out.println("头结点不能删除");
			return;
		}

		CycleNode temp = head;// temp装的是要删除节点的前一个节点
		if (head.next != null) {//判断是否为空链表
			while (num != temp.next.num) {//正常循环遍历
				System.out.println("进入while");
				if (temp.next.next == head.next) {// 遍历结束条件
					System.out.println("不存在此节点");
					return;
				}
				temp = temp.next;
			}
			if (head.next.next == head.next) {// 删除链表中最后一个节点
				System.out.println("删除链表中最后一个节点");
				head.next = null;
				return;
			}
			if (temp == head) {// 删除头节点指向的节点
				System.out.println("删除头节点指向的节点");
				CycleNode temp0 = head.next;
				while (temp0.next != head.next) {//循环遍历，直到指向链表末尾
					temp0 = temp0.next;
				}
				temp0.next = head.next.next;
				head.next = temp0.next;
				return;
			}
			temp.next = temp.next.next;//正常删除节点
		}

	}

	public void john(int start, int num) {
		CycleNode temp = head;
		// 先找到start的位置，存在temp里
		for (int i = 0; i < start; i++) {
			temp = temp.next;
		}
		while (head.next != null) {
			for (int j = 0; j < num - 1; j++) {
				temp = temp.next;
			}
			System.out.println(temp.next);
			this.delete(temp.next.num);
		}

	}
}

class CycleNode {
	public int num;
	public String name;
	public CycleNode next;

	public CycleNode(int num, String name) {
		super();
		this.num = num;
		this.name = name;
	}

	@Override
	public String toString() {
		return "Node [num=" + num + ", name=" + name + "]";
	}

}
```



