---
title: Ch06 HashTable
date: 2019-07-02
tags:
 - Data structure
categories:
 - Data structure

---

**哈希表**

-   **经典实现：数组 + 链表**



```java

public class HashTab {

	public static void main(String[] args) {
		HashTable table = new HashTable(6);
		table.add(new Emp(6,"yang",20));
		table.add(new Emp(7,"b",19));
		table.add(new Emp(10,"ccc", 22));
		//table.print();
		System.out.println(table.find(6));

	}

}

class HashTable{
	int size;
	LinkedListEmp [] arr;
	public HashTable(int size) {
		this.size = size;
		arr = new LinkedListEmp[size];
		//!!!这边别忘了初始化各个链表，否则可能会出空指针异常！！！
		for(int i = 0; i < size; i++) {
			arr[i] = new LinkedListEmp();
		}
		
	}
	//在哈希表中加入元素
	public void add(Emp emp) {
		int num = emp.id % size; //使用哈希函数定位应该增加到哪个链表
		arr[num].add(emp);
	}
	//遍历所有链表，输出
	public void print() {
		for(int i = 0; i < arr.length; i++) {
			arr[i].print(i);
		}
	}
	//查找雇员
	public Emp find(int id) {
		Emp result = null;
		for(int i = 0; i < arr.length; i++) {
			if(result != null) return result;
			result = arr[i].find(id, i);
		}
		if(result == null) {
			System.out.println("没有此id");
		}
		return result;
		
	}
}
//定义横向链表
class LinkedListEmp{
	public Emp head = null;
	//加入元素
	public void add(Emp emp) {
		//当加入的为第一个元素
		if(head == null) {
			head = emp;
			return;
		}
		Emp p = head;
		while(p.next != null) {
			p = p.next;
		}
		p.next = emp;
		
	}
	//遍历链表,输出
	public void print(int i ) {//这边的参数表示第几个链表
		Emp p = head;
		if(p == null) {
			System.out.println(i + " 链表为空");
			return;
			}
		System.out.println("开始打印第 " + i + " 链表");
		while(p != null) {
			System.out.println("id: " + p.id + "   name: " + p.name + "   age: " + p.age);
			p = p.next;
		}
	
	}
	//查找雇员
	public Emp find(int id, int i) {
		Emp p = head;//辅助指针
		if(head == null) {
			System.out.println("第 " + i + "链表为空");
			return null;
		}
		while(p != null) {
			if(p.id == id) return p;
			p = p.next;
		}
		return null;
	}
}

//定义要存放进去的元素
class Emp{
	public int id;
	public String name;
	public int age;
	public Emp next;
	public Emp(int id, String name, int age) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
	}
	@Override
	public String toString() {
		return "Emp [id=" + id + ", name=" + name + ", age=" + age + "]";
	}
	
}
```

