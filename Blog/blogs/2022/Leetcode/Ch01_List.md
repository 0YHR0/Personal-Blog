---
title: Ch01 List
date: 2023-07-06
tags:
 - List
categories:
 - Leetcode


---



# List



### 203. 移除链表元素

![image-20230707151351843](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230707151351843.png)

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode temp = head;
        while(temp != null && temp.val == val){
            temp = temp.next;
        }

        ListNode result = temp;

        while(temp != null  && temp.next != null){
            if(temp.next.val == val){
                temp.next = temp.next.next;
            }else{
                 temp = temp.next;

            }
           
        }
        return result;


    }
}
```



### 707. 设计链表

![image-20230707173046970](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230707173046970.png)

```java
class ListNode{
    public int val;
    public ListNode next;
    public ListNode prev;
    public ListNode(int val,ListNode prev, ListNode next){
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
    
}

class MyLinkedList {
    public ListNode head = null;

    public MyLinkedList() {
        this.head = new ListNode(0, null, null);

    }

    public int get(int index) {
        ListNode temp = head;
        for(int i = 0; i <= index; i++){
            if(temp == null){
                return -1;
            }
            temp = temp.next;
        }
        if(temp == null){
            return -1;
        }
        return temp.val;

    }

    public void addAtHead(int val) {
        ListNode addedNode = new ListNode(val, head, head.next);
        this.head.next = addedNode;
        if(addedNode.next == null){
            return;
        }
        addedNode.next.prev = addedNode;

    }

    public void addAtTail(int val) {
        ListNode temp = head;
        while(temp.next != null){
            temp = temp.next;
        }

        temp.next = new ListNode(val, temp, null);

    }

    public void addAtIndex(int index, int val) {
        if(index == 0){
            addAtHead(val);
            return;
        }
        ListNode temp = head.next;
        int i = 0;
        if(temp == null && index > 0){
            return;
        }
        while(temp.next != null && i < index){
            temp = temp.next;
            i++;
        }
        if(temp.next == null && i + 1 == index){
            addAtTail(val);
        }
        if(i < index){
            return;
        }else{
            ListNode addedNode = new ListNode(val, temp.prev, temp);
            temp.prev.next = addedNode;
            temp.prev = addedNode;
        }

    }

    public void deleteAtIndex(int index) {
        ListNode temp = head.next;
        int i = 0;
        while(temp.next != null && i < index){
            temp = temp.next;
            i++;
        }
//        System.out.println(temp.val);
//        System.out.println(i);
        if(i < index){
            return;
        }else{
            temp.prev.next = temp.next;
            if(temp.next != null){
                temp.next.prev = temp.prev;
            }
        }

    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
```



更好的代码：都是找要操作节点的前驱节点

```java
//单链表
class ListNode {
    int val;
    ListNode next;
    ListNode(){}
    ListNode(int val) {
        this.val=val;
    }
}
class MyLinkedList {
    //size存储链表元素的个数
    int size;
    //虚拟头结点
    ListNode head;

    //初始化链表
    public MyLinkedList() {
        size = 0;
        head = new ListNode(0);
    }

    //获取第index个节点的数值，注意index是从0开始的，第0个节点就是头结点
    public int get(int index) {
        //如果index非法，返回-1
        if (index < 0 || index >= size) {
            return -1;
        }
        ListNode currentNode = head;
        //包含一个虚拟头节点，所以查找第 index+1 个节点
        for (int i = 0; i <= index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.val;
    }

    //在链表最前面插入一个节点，等价于在第0个元素前添加
    public void addAtHead(int val) {
        addAtIndex(0, val);
    }

    //在链表的最后插入一个节点，等价于在(末尾+1)个元素前添加
    public void addAtTail(int val) {
        addAtIndex(size, val);
    }

    // 在第 index 个节点之前插入一个新节点，例如index为0，那么新插入的节点为链表的新头节点。
    // 如果 index 等于链表的长度，则说明是新插入的节点为链表的尾结点
    // 如果 index 大于链表的长度，则返回空
    public void addAtIndex(int index, int val) {
        if (index > size) {
            return;
        }
        if (index < 0) {
            index = 0;
        }
        size++;
        //找到要插入节点的前驱
        ListNode pred = head;
        for (int i = 0; i < index; i++) {
            pred = pred.next;
        }
        ListNode toAdd = new ListNode(val);
        toAdd.next = pred.next;
        pred.next = toAdd;
    }

    //删除第index个节点
    public void deleteAtIndex(int index) {
        if (index < 0 || index >= size) {
            return;
        }
        size--;
        if (index == 0) {
            head = head.next;
	    return;
        }
        ListNode pred = head;
        for (int i = 0; i < index ; i++) {
            pred = pred.next;
        }
        pred.next = pred.next.next;
    }
}

//双链表
class ListNode{
    int val;
    ListNode next,prev;
    ListNode() {};
    ListNode(int val){
        this.val = val;
    }
}


class MyLinkedList {  

    //记录链表中元素的数量
    int size;
    //记录链表的虚拟头结点和尾结点
    ListNode head,tail;
    
    public MyLinkedList() {
        //初始化操作
        this.size = 0;
        this.head = new ListNode(0);
        this.tail = new ListNode(0);
        //这一步非常关键，否则在加入头结点的操作中会出现null.next的错误！！！
        head.next=tail;
        tail.prev=head;
    }
    
    public int get(int index) {
        //判断index是否有效
        if(index<0 || index>=size){
            return -1;
        }
        ListNode cur = this.head;
        //判断是哪一边遍历时间更短
        if(index >= size / 2){
            //tail开始
            cur = tail;
            for(int i=0; i< size-index; i++){
                cur = cur.prev;
            }
        }else{
            for(int i=0; i<= index; i++){
                cur = cur.next; 
            }
        }
        return cur.val;
    }
    
    public void addAtHead(int val) {
        //等价于在第0个元素前添加
        addAtIndex(0,val);
    }
    
    public void addAtTail(int val) {
        //等价于在最后一个元素(null)前添加
        addAtIndex(size,val);
    }
    
    public void addAtIndex(int index, int val) {
        //index大于链表长度
        if(index>size){
            return;
        }
        //index小于0
        if(index<0){
            index = 0;
        }
        size++;
        //找到前驱
        ListNode pre = this.head;
        for(int i=0; i<index; i++){
            pre = pre.next;
        }
        //新建结点
        ListNode newNode = new ListNode(val);
        newNode.next = pre.next;
        pre.next.prev = newNode;
        newNode.prev = pre;
        pre.next = newNode;
        
    }
    
    public void deleteAtIndex(int index) {
        //判断索引是否有效
        if(index<0 || index>=size){
            return;
        }
        //删除操作
        size--;
        ListNode pre = this.head;
        for(int i=0; i<index; i++){
            pre = pre.next;
        }
        pre.next.next.prev = pre;
        pre.next = pre.next.next;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * MyLinkedList obj = new MyLinkedList();
 * int param_1 = obj.get(index);
 * obj.addAtHead(val);
 * obj.addAtTail(val);
 * obj.addAtIndex(index,val);
 * obj.deleteAtIndex(index);
 */
```



### 206. 翻转链表

![image-20230708095619873](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230708095619873.png)

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
       ListNode pre = null;
       ListNode cur = head;
       ListNode tmp = null;
       while(cur != null){
           tmp = cur.next;
           cur.next = pre;
           pre = cur;
           cur = tmp;
       }
       return pre;
    }
}
```





### 24. 两两交换链表中的节点

![image-20230711124358530](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230711124358530.png)



```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode fakehead = new ListNode(0, head);
        ListNode cur = fakehead;
        while(cur != null && cur.next != null && cur.next.next != null){
            ListNode tmp1 = cur.next;
            ListNode tmp2 = cur.next.next.next;
            cur.next = cur.next.next;
            cur.next.next = tmp1;
            cur.next.next.next = tmp2;
            cur = cur.next.next;
        }
        return fakehead.next;

    }
}
```

![image-20230711124445303](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230711124445303.png)



### 19. 删除链表中倒数第n个节点

![image-20230711140017674](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230711140017674.png)



+ 基础解法：扫描两遍

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        int length  = 0;
        ListNode ptr =  new ListNode(0, head);
        while(ptr.next != null){
            ptr = ptr.next;
            length ++;
        }
        ptr = new ListNode(0, head);
        if(n == length){
            head = head.next;
            return head;
        }
        for(int i = 0; i < length - n; i++){
            ptr = ptr.next;
        }

        ptr.next = ptr.next.next;
        return head;
    }

}
```

+ 进阶： 扫描一遍， 用快慢指针 //只要快慢指针相差 n 个结点即可

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode slow = new ListNode(0, head);
        ListNode fast = new ListNode(0, head);
        for(int i = 0; i < n; i++){
            fast = fast.next;
        }

        while(fast.next != null){
            fast = fast.next;
            slow = slow.next;
        }
        if(slow.next == head){
            return slow.next.next;
        }

        slow.next = slow.next.next;
        return head; 
    }

}
```



### 160.链表相交

![image-20230711143233173](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230711143233173.png)



+ 暴力

  ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode(int x) {
   *         val = x;
   *         next = null;
   *     }
   * }
   */
  public class Solution {
      public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
          if(headA == null || headB == null){
              return null;
          }
          ListNode ptrA = headA;
          ListNode ptrB = headB;
          while(ptrA != null){
              ptrB = headB;
              while(ptrB != null){
                  if(ptrB == ptrA){
                      return ptrA;
                  }
                  ptrB = ptrB.next;
              }
              ptrA = ptrA.next;
          }
          return null;
      }
  }
  ```

+ ![image-20230711143321706](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230711143321706.png)

  ```java
  /**
   * Definition for singly-linked list.
   * public class ListNode {
   *     int val;
   *     ListNode next;
   *     ListNode(int x) {
   *         val = x;
   *         next = null;
   *     }
   * }
   */
  public class Solution {
      public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
          ListNode ptrA = headA;
          ListNode ptrB = headB;
          int lengthA = 0;
          int lengthB = 0;
          //get length
          while(ptrA != null){
              lengthA ++;
              ptrA = ptrA.next;
          }
          while(ptrB != null){
              lengthB ++;
              ptrB = ptrB.next;
          }
  
          ptrA = headA;
          ptrB = headB;
          //let A the longer list
          if(lengthB > lengthA){
              int tmp = lengthA;
              lengthA = lengthB;
              lengthB = tmp;
              
              ListNode tmpNode = ptrA;
              ptrA = ptrB;
              ptrB = tmpNode;
  
          }
  
          int gap = lengthA - lengthB;
          for(int i = 0; i < gap; i++){
              ptrA = ptrA.next;
          }
  
          //in parallel
          while(ptrA != null){
              if(ptrB == ptrA){
                  return ptrB;
              }
              ptrB = ptrB.next;
              ptrA = ptrA.next;
          }
          
          return null;
  
      }
  }
  ```





### 142.环形链表II

![image-20230711154240740](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230711154240740.png)

![image-20230711154306368](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230711154306368.png)





+ 先用快慢指针判断是否有环，如果有环就再走一圈求出环的长度

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode detectCycle(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;
        int round = 0;
        int ringLen = 0;
        while(fast != null && fast.next != null && slow != null){
            fast = fast.next.next;
            slow = slow.next;
            if(round == 1){
                ringLen ++;
            }
            if(fast == slow){
                //has ring
                round ++;
                if(round == 2){
                    //got ring length
                    ListNode front = head;
                    ListNode end = head;
                    for(int i = 0; i < ringLen; i++){
                        front = front.next;
                    }
                    while(front != end){
                        front = front.next;
                        end = end.next;
                    }
                    return front;

                }
                continue;

            }


        }

        return null;

    }
}
```

+ 需要计算的另一种方法：![image-20230711154435055](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230711154435055.png)

