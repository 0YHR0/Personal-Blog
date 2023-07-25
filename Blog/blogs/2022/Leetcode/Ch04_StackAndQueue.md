---
title: Ch04 Stack And Queue
date: 2023-07-15
tags:
 - Stack
 - Queue
categories:
 - Leetcode
---



## Java Stack

![image-20230717232631284](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230717232631284.png)

```java
Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
while(!stack.isEmpty()) {
    System.out.println(stack.pop());
}
stack.size();
```





## Java Queue

![image-20230717233027453](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230717233027453.png)

+ Queue可以用linkedList

  ```java
  Queue<String> queue = new LinkedList<>();
  // add elements to the queue
  queue.add("apple");
  queue.add("banana");
  queue.add("cherry");
  
  // print the queue
  System.out.println("Queue: " + queue);
  
  // remove the element at the front of the queue
  String front = queue.remove();
  System.out.println("Removed element: " + front);
  // peek at the element at the front of the queue
  String peeked = queue.peek();
  queue.size();
  String poll = queue.poll(); //delete and return
  ```



## Java deque

双向队列（两边都可以入栈出栈）

```java
Deque<Integer> deque = new ArrayDeque<>();
deque.addFirst(1);
deque.addLast(2);
int first = deque.removeFirst();
int last = deque.removeLast();
// Add at the first
deque.push("Element 4 (Head)");
// Add at the last
deque.offer("Element 5 (Tail)");
deque.getFirst();
deque.getLast();
System.out.println(deque.pop());
 
System.out.println(deque.poll());
 
System.out.println(deque.pollFirst());
 
System.out.println(deque.pollLast());
```



在单调队列的应用上，它经常用来解决定长连续子区间的最值问题



### 232.用栈实现队列

![image-20230717232343183](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230717232343183.png)



+ 出栈队列只有空了才能把入栈队列元素移动过来



![](https://code-thinking.cdn.bcebos.com/gifs/232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97%E7%89%88%E6%9C%AC2.gif)

```java
class MyQueue {

    Stack<Integer> stackIn;
    Stack<Integer> stackOut;



    public MyQueue() {
        stackIn = new Stack<Integer>();
        stackOut = new Stack<Integer>();
    }
    
    public void push(int x) {
        stackIn.push(x);
    }
    
    public int pop() {
        if(!stackOut.isEmpty()){
            return stackOut.pop();
        }
        while(!stackIn.isEmpty()){
            stackOut.push(stackIn.pop());
        }
        return stackOut.pop();
    }
    
    public int peek() {
        if(!stackOut.isEmpty()){
            return stackOut.peek();
        }
         while(!stackIn.isEmpty()){
            stackOut.push(stackIn.pop());
        }
        return stackOut.peek();

    }
    
    public boolean empty() {
        return stackOut.isEmpty() && stackIn.isEmpty();

    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
```





### 225. 用队列实现栈

![image-20230717234031038](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230717234031038.png)

```java
class MyStack {

    Queue<Integer> queue1;
    Queue<Integer> queue2;

    public MyStack() {
        queue1 = new LinkedList<Integer>();
        queue2 = new LinkedList<Integer>();
    }
    
    public void push(int x) {
        queue1.offer(x);
    }
    
    public int pop() {
        while(queue1.size() > 1){
            queue2.offer(queue1.poll());
        }
        int result = queue1.poll();
        while(!queue2.isEmpty()){
            queue1.offer(queue2.poll());
        }

        return result;

    }
    
    public int top() {

        while(queue1.size() > 1){
            queue2.offer(queue1.poll());
        }
        int result = queue1.peek();
        queue2.offer(queue1.poll());

        queue1 = queue2;
        queue2 = new LinkedList<Integer>();

        return result;

    }
    
    public boolean empty() {
        return queue1.isEmpty();

    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
```

![](https://code-thinking.cdn.bcebos.com/gifs/225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.gif)



一下代码更简单，在push的时候就搞定顺序

```java
class MyStack {

    Queue<Integer> queue1; // 和栈中保持一样元素的队列
    Queue<Integer> queue2; // 辅助队列

    /** Initialize your data structure here. */
    public MyStack() {
        queue1 = new LinkedList<>();
        queue2 = new LinkedList<>();
    }
    
    /** Push element x onto stack. */
    public void push(int x) {
        queue2.offer(x); // 先放在辅助队列中
        while (!queue1.isEmpty()){
            queue2.offer(queue1.poll());
        }
        Queue<Integer> queueTemp;
        queueTemp = queue1;
        queue1 = queue2;
        queue2 = queueTemp; // 最后交换queue1和queue2，将元素都放到queue1中
    }
    
    /** Removes the element on top of the stack and returns that element. */
    public int pop() {
        return queue1.poll(); // 因为queue1中的元素和栈中的保持一致，所以这个和下面两个的操作只看queue1即可
    }
    
    /** Get the top element. */
    public int top() {
        return queue1.peek();
    }
    
    /** Returns whether the stack is empty. */
    public boolean empty() {
        return queue1.isEmpty();
    }
}
```





### 20. 有效的括号

![image-20230717234545730](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230717234545730.png)





```java
class Solution {
    public boolean isValid(String s) {
        Map<Character, Character> map = new HashMap<Character, Character>();
        map.put('(', ')');
        map.put(')','%');
        map.put(']','%');
        map.put('}','%');
        map.put('[', ']');
        map.put('{', '}');
        Stack<Character> stack = new Stack<Character>();
        for(int i = 0; i < s.length(); i++){
            if(stack.size() == 0){
                stack.push(s.charAt(i));
                continue;
            }
            if(map.get(stack.peek()) != s.charAt(i)){
                stack.push(s.charAt(i));
            }else{
                stack.pop();
            }
        }

        return stack.size() == 0;




    }
}
```





### 1047. 删除字符串中的所有相邻重复项

![image-20230717234645013](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230717234645013.png)



+ 用队列实现的话最后不用翻转



```java
class Solution {
    public String removeDuplicates(String s) {
        Stack<Character> stack = new Stack<Character>();
        for(int i = 0; i < s.length(); i++){
            if(stack.isEmpty()){
                stack.push(s.charAt(i));
                continue;
            }
            if(s.charAt(i) == stack.peek()){
                stack.pop();
            }else{
                stack.push(s.charAt(i));
            }
        }
        char[] tmp = new char[stack.size()];
        int j = 0;
        while(!stack.isEmpty()){
            tmp[j++] = stack.pop();
        }
        for(int i = 0; i < tmp.length / 2; i++){
            char t = tmp[i];
            tmp[i] = tmp[tmp.length - 1 - i];
            tmp[tmp.length - 1 - i] = t;
        }
        return new String(tmp);


    }
}
```




### 150. 逆波兰表达式求值

![image-20230717234831942](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230717234831942.png)

```java
class Solution {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<Integer>();
        for(int i = 0; i < tokens.length; i++){
            if(tokens[i].equals("+")){
                stack.push(stack.pop() + stack.pop());
            }else if(tokens[i].equals("-")){
                int a = stack.pop();
                int b = stack.pop();
                stack.push(b - a);
            }else if(tokens[i].equals("*")){
                stack.push(stack.pop() * stack.pop());
            }else if(tokens[i].equals("/")){
               int a = stack.pop();
                int b = stack.pop();
                stack.push(b / a);
            }else{
                stack.push(Integer.parseInt(tokens[i]));
            }
        }

        return stack.peek();


    }

   
}
```





### 239. 滑动窗口最大值

![image-20230717234902712](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230717234902712.png)

+ 永远保持最新鲜的最大值（至多两个），单调队列



![](https://code-thinking.cdn.bcebos.com/gifs/239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC.gif)

![](https://code-thinking.cdn.bcebos.com/gifs/239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC-2.gif)

```java
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int[] result = new int[nums.length - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        for(int j = 0; j < k; j++){
            add(deque, nums[j]);
        }
        result[0] = deque.getFirst();
        int m = 1;
        for(int i = k; i < nums.length; i++){
            remove(deque, nums[i - k]);
            add(deque, nums[i]);
            result[m++] = deque.getFirst();
        }

        return result;



    }

    public void add(Deque<Integer> deque, int i){
        while(deque.size() > 0 && i > deque.getLast()){
            deque.removeLast();
        }
        deque.addLast(i);
    }

    public void remove(Deque<Integer> deque, int i){
        if(i == deque.getFirst()){
            deque.removeFirst();
        }
    }

}
```





### 347.前 K 个高频元素

![image-20230718001547114](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718001547114.png)



+ 暴力法

```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            if(map.containsKey(nums[i])){
                map.put(nums[i], map.get(nums[i]) + 1);
            }else{
                map.put(nums[i], 1);
            }
        }

        Stack<Integer> stack = new Stack<>();
        Stack<Integer> tmp = new Stack<>();
        for(int key: map.keySet()){
            while(stack.size() != 0 && map.get(stack.peek()) > map.get(key)){
                tmp.push(stack.pop());
            }
            stack.push(key);
            while(tmp.size() > 0){
                stack.push(tmp.pop());
            }
        }
        int[] result = new int[k];
        for(int i = 0; i < k; i++){
            result[i] = stack.pop();
        }

        return result;

    }
}
```

+ 

![image-20230718001909949](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718001909949.png)

![image-20230718001928339](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718001928339.png)

+ PriorityQueue会在add的时候自动排序

![image-20230718003958108](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718003958108.png)

![image-20230718004040462](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718004040462.png)

```java
 //解法1：基于大顶堆实现
    public int[] topKFrequent1(int[] nums, int k) {
        Map<Integer,Integer> map = new HashMap<>();//key为数组元素值,val为对应出现次数
        for(int num:nums){
            map.put(num,map.getOrDefault(num,0)+1);
        }
        //在优先队列中存储二元组(num,cnt),cnt表示元素值num在数组中的出现次数
        //出现次数按从队头到队尾的顺序是从大到小排,出现次数最多的在队头(相当于大顶堆)
        PriorityQueue<int[]> pq = new PriorityQueue<>((pair1, pair2)->pair2[1]-pair1[1]);
        for(Map.Entry<Integer,Integer> entry:map.entrySet()){//大顶堆需要对所有元素进行排序
            pq.add(new int[]{entry.getKey(),entry.getValue()});
        }
        int[] ans = new int[k];
        for(int i=0;i<k;i++){//依次从队头弹出k个,就是出现频率前k高的元素
            ans[i] = pq.poll()[0];
        }
        return ans;
    }
```

#### lamda表达式用法

![image-20230718005120163](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718005120163.png)

