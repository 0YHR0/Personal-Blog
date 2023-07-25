---
title: Ch05 BinaryTree
date: 2023-07-18
tags:
 - BinaryTree
categories:
 - Leetcode

---

## 二叉树的种类

在我们解题过程中二叉树有两种主要的形式：满二叉树和完全二叉树。

### [#](https://programmercarl.com/二叉树理论基础.html#满二叉树)满二叉树

满二叉树：如果一棵二叉树只有度为0的结点和度为2的结点，并且度为0的结点在同一层上，则这棵二叉树为满二叉树。

如图所示：

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/20200806185805576.png)

这棵二叉树为满二叉树，也可以说深度为k，有2^k-1个节点的二叉树。

### [#](https://programmercarl.com/二叉树理论基础.html#完全二叉树)完全二叉树

什么是完全二叉树？

完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层（h从1开始），则该层包含 1~ 2^(h-1) 个节点。

**大家要自己看完全二叉树的定义，很多同学对完全二叉树其实不是真正的懂了。**

我来举一个典型的例子如题：

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/20200920221638903.png)

相信不少同学最后一个二叉树是不是完全二叉树都中招了。

**之前我们刚刚讲过优先级队列其实是一个堆，堆就是一棵完全二叉树，同时保证父子节点的顺序关系。**

### [#](https://programmercarl.com/二叉树理论基础.html#二叉搜索树)二叉搜索树

前面介绍的树，都没有数值的，而二叉搜索树是有数值的了，**二叉搜索树是一个有序树**。

- 若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
- 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
- 它的左、右子树也分别为二叉排序树

下面这两棵树都是搜索树

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/20200806190304693.png)

### [#](https://programmercarl.com/二叉树理论基础.html#平衡二叉搜索树)平衡二叉搜索树

平衡二叉搜索树：又被称为AVL（Adelson-Velsky and Landis）树，且具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。

如图：

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/20200806190511967.png)

最后一棵 不是平衡二叉树，因为它的左右两个子树的高度差的绝对值超过了1。

**C++中map、set、multimap，multiset的底层实现都是平衡二叉搜索树**，所以map、set的增删操作时间时间复杂度是logn，注意我这里没有说unordered_map、unordered_set，unordered_map、unordered_set底层实现是哈希表。

**所以大家使用自己熟悉的编程语言写算法，一定要知道常用的容器底层都是如何实现的，最基本的就是map、set等等，否则自己写的代码，自己对其性能分析都分析不清楚！**





## 二叉树的存储方式

**二叉树可以链式存储，也可以顺序存储。**

那么链式存储方式就用指针， 顺序存储的方式就是用数组。

顾名思义就是顺序存储的元素在内存是连续分布的，而链式存储则是通过指针把分布在各个地址的节点串联一起。

链式存储如图：

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/2020092019554618.png)

链式存储是大家很熟悉的一种方式，那么我们来看看如何顺序存储呢？

其实就是用数组来存储二叉树，顺序存储的方式如图：

![img](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/20200920200429452.png)

用数组来存储二叉树如何遍历的呢？

**如果父节点的数组下标是 i，那么它的左孩子就是 i \* 2 + 1，右孩子就是 i \* 2 + 2。**

但是用链式表示的二叉树，更有利于我们理解，所以一般我们都是用链式存储二叉树。

**所以大家要了解，用数组依然可以表示二叉树。**



```java
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
```

![image-20230718172008813](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718172008813.png)

## 递归

**每次写递归，都按照这三要素来写，可以保证大家写出正确的递归算法！**

1. **确定递归函数的参数和返回值：** 确定哪些参数是递归的过程中需要处理的，那么就在递归函数里加上这个参数， 并且还要明确每次递归的返回值是什么进而确定递归函数的返回类型。
2. **确定终止条件：** 写完了递归算法, 运行的时候，经常会遇到栈溢出的错误，就是没写终止条件或者终止条件写的不对，操作系统也是用一个栈的结构来保存每一层递归的信息，如果递归没有终止，操作系统的内存栈必然就会溢出。
3. **确定单层递归的逻辑：** 确定每一层递归需要处理的信息。在这里也就会重复调用自己来实现递归的过程。





### [144. 二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)

![image-20230718171911279](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718171911279.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
       List<Integer> result = new ArrayList<>();
       preOrder(result, root);
       return result;

    }

    public void preOrder(List<Integer> result, TreeNode root){
         if(root == null){
            return;
        }
        result.add(root.val);
        if(root.left != null){
            preOrder(result, root.left);
        }
        if(root.right != null){
            preOrder(result, root.right);
        }

    }
}
```







### [145. 二叉树的后序遍历](https://leetcode.cn/problems/binary-tree-postorder-traversal/)

![image-20230718172106783](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718172106783.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        postOrder(result, root);
        if(root != null){
            result.add(root.val);
        }
        return result;


    }

    public void postOrder(List<Integer> result, TreeNode root){
        if(root == null){
            return;
        }
        if(root.left != null){
            postOrder(result, root.left);
            result.add(root.left.val);
        }
        if(root.right != null){
            postOrder(result, root.right);
            result.add(root.right.val);
        }

    }
}
```



```java
// 后序遍历·递归·LC145_二叉树的后序遍历
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        postorder(root, res);
        return res;
    }

    void postorder(TreeNode root, List<Integer> list) {
        if (root == null) {
            return;
        }
        postorder(root.left, list);
        postorder(root.right, list);
        list.add(root.val);             // 注意这一句
    }
}
```





### [94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

![image-20230718172749616](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230718172749616.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> res = new ArrayList<>();
        inorder(root, res);
        return res;
    }

    void inorder(TreeNode root, List<Integer> list) {
        if (root == null) {
            return;
        }
        inorder(root.left, list);
        list.add(root.val);             // 注意这一句
        inorder(root.right, list);
        
    }
}
```





### 三种遍历方法不使用递归, 代码模板基本一样，入栈顺序是遍历顺序倒过来，中间节点加null

```java
// 前序遍历顺序：中-左-右
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new LinkedList<>();
        Stack<TreeNode> st = new Stack<>();
        if (root != null) st.push(root);
        while (!st.empty()) {
            TreeNode node = st.peek();
            if (node != null) {
                st.pop(); // 将该节点弹出，避免重复操作，下面再将右中左节点添加到栈中
                if (node.right!=null) st.push(node.right);  // 添加右节点（空节点不入栈）
                if (node.left!=null) st.push(node.left);    // 添加左节点（空节点不入栈）
                st.push(node);                          // 添加中节点
                st.push(null); // 中节点访问过，但是还没有处理，加入空节点做为标记。
                
            } else { // 只有遇到空节点的时候，才将下一个节点放进结果集
                st.pop();           // 将空节点弹出
                node = st.peek();    // 重新取出栈中元素
                st.pop();
                result.add(node.val); // 加入到结果集
            }
        }
        return result;
    }
}

// 中序遍历顺序: 左-中-右
class Solution {
public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new LinkedList<>();
    Stack<TreeNode> st = new Stack<>();
    if (root != null) st.push(root);
    while (!st.empty()) {
        TreeNode node = st.peek();
        if (node != null) {
            st.pop(); // 将该节点弹出，避免重复操作，下面再将右中左节点添加到栈中
            if (node.right!=null) st.push(node.right);  // 添加右节点（空节点不入栈）
            st.push(node);                          // 添加中节点
            st.push(null); // 中节点访问过，但是还没有处理，加入空节点做为标记。

            if (node.left!=null) st.push(node.left);    // 添加左节点（空节点不入栈）
        } else { // 只有遇到空节点的时候，才将下一个节点放进结果集
            st.pop();           // 将空节点弹出
            node = st.peek();    // 重新取出栈中元素
            st.pop();
            result.add(node.val); // 加入到结果集
        }
    }
    return result;
}
}

// 后序遍历顺序 左-右-中
class Solution {
   public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> result = new LinkedList<>();
        Stack<TreeNode> st = new Stack<>();
        if (root != null) st.push(root);
        while (!st.empty()) {
            TreeNode node = st.peek();
            if (node != null) {
                st.pop(); // 将该节点弹出，避免重复操作，下面再将右中左节点添加到栈中
                st.push(node);                          // 添加中节点
                st.push(null); // 中节点访问过，但是还没有处理，加入空节点做为标记。
                if (node.right!=null) st.push(node.right);  // 添加右节点（空节点不入栈）
                if (node.left!=null) st.push(node.left);    // 添加左节点（空节点不入栈）         
                               
            } else { // 只有遇到空节点的时候，才将下一个节点放进结果集
                st.pop();           // 将空节点弹出
                node = st.peek();    // 重新取出栈中元素
                st.pop();
                result.add(node.val); // 加入到结果集
            }
        }
        return result;
   }
}
```



### [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

![image-20230719142821358](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230719142821358.png)

+ 使用队列，在加入下一层元素之前先把上一层的size拿到

  ```java
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode() {}
   *     TreeNode(int val) { this.val = val; }
   *     TreeNode(int val, TreeNode left, TreeNode right) {
   *         this.val = val;
   *         this.left = left;
   *         this.right = right;
   *     }
   * }
   */
  class Solution {
      public List<List<Integer>> levelOrder(TreeNode root) {
          if (root == null) return new ArrayList<List<Integer>>();
          List<List<Integer>> result = new ArrayList<>();
          Queue<TreeNode> queue = new LinkedList<>();
          queue.offer(root);
  
          while(queue.size() != 0){
  
              //在加入新元素之前先把size拿到
              int size = queue.size();
              List<Integer> addList = new ArrayList<>();
              while(size > 0){
                  TreeNode node1 = queue.poll();
                  addList.add(node1.val);
                  if(node1.left != null){
                      queue.offer(node1.left);
                  }
                  if(node1.right != null){
                      queue.offer(node1.right);
                  }
                  size --;
              }
  
              result.add(addList);
          }
  
          return result;
  
      }
  }
  ```





### [107. 二叉树的层序遍历 II](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)

![image-20230719143036876](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230719143036876.png)



+ ArrayList就是一个可扩容的数组，可以有get和set方法
+ 就是上一题的结果再翻转一下



```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        List<List<Integer>> result = new ArrayList<>();
        if(root == null) return result;
        queue.offer(root);
        while(queue.size() > 0){
            int size = queue.size();
            List<Integer> added = new ArrayList<>();
            while(size > 0){
                TreeNode node = queue.poll();
                added.add(node.val);
                if(node.left != null){
                    queue.offer(node.left);
                }
                if(node.right != null){
                    queue.offer(node.right);
                }
                size --;
            }

            result.add(added);
        }

        for(int i = 0; i < result.size() / 2; i++){
            List<Integer> tmp = new ArrayList<>();
            tmp = result.get(i);
            result.set(i, result.get(result.size() - i - 1));
            result.set(result.size() - i - 1, tmp);
        }

        return result;

    }
}
```





### [199. 二叉树的右视图](https://leetcode.cn/problems/binary-tree-right-side-view/)

![image-20230719144409774](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230719144409774.png)

+ 也是层序遍历问题，每层遍历到最后一个的时候，加到result里
+ 注意：不要用捷径，当左右树的高度不一样的情况下会出错

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        TreeNode node = root;
        Queue<TreeNode> queue = new LinkedList<>();
        if(root == null) return result;
        queue.offer(root);
        while(queue.size() > 0){
            int size = queue.size();
            while(size > 0){
                TreeNode tmpNode = queue.poll();
                if(tmpNode.left != null){
                    queue.offer(tmpNode.left);
                }
                if(tmpNode.right != null){
                    queue.offer(tmpNode.right);
                }
                size --;
                if(size == 0) result.add(tmpNode.val);
            }
        }

        
        return result;

    }
}
```



### 637.二叉树的层平均值

![image-20230719145840126](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230719145840126.png)

+ 层序遍历 + 取平均值

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Double> averageOfLevels(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        List<Double> result = new ArrayList<>();
        queue.offer(root);
        while(queue.size() > 0){
            int size = queue.size();
            double size1 = queue.size();
            double sum = 0;
            while(size > 0){
                TreeNode tmpNode = queue.poll();
                sum = sum + tmpNode.val;
                if(tmpNode.left != null) queue.offer(tmpNode.left);
                if(tmpNode.right != null) queue.offer(tmpNode.right);
                size --;
            }
            result.add(sum / size1);
        }

        return result;

    }
}
```





### [429. N 叉树的层序遍历](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/)

![image-20230719150541681](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230719150541681.png)



+ 也是类似层序遍历

```java
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/

class Solution {
    public List<List<Integer>> levelOrder(Node root) {
        List<List<Integer>> result = new ArrayList<>();
        Queue<Node> queue = new LinkedList<>();
        if(root == null) return result;
        queue.offer(root);
        while(queue.size() > 0){
            int size = queue.size();
            List<Integer> list = new ArrayList<>();
            while(size > 0){
                Node node = queue.poll();
                list.add(node.val);
                if(node.children.size() != 0){
                    for(Node child: node.children){
                        queue.add(child);
                    }
                }
                size --;
            }
            result.add(list);
        }

        return result;
    }
}
```



### 515.在每个树行中找最大值

![image-20230719151425640](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230719151425640.png)

+ 也是层序遍历

```java
    /**
    * Definition for a binary tree node.
    * public class TreeNode {
    *     int val;
    *     TreeNode left;
    *     TreeNode right;
    *     TreeNode() {}
    *     TreeNode(int val) { this.val = val; }
    *     TreeNode(int val, TreeNode left, TreeNode right) {
    *         this.val = val;
    *         this.left = left;
    *         this.right = right;
    *     }
    * }
    */
    class Solution {
        public List<Integer> largestValues(TreeNode root) {
            Queue<TreeNode> queue = new LinkedList<>();
            List<Integer> result = new ArrayList<>();
            if(root == null) return result;
            queue.offer(root);
            while(queue.size() > 0){
                int size = queue.size();
                int max = queue.peek().val;
                while(size > 0){
                    TreeNode node = queue.poll();
                    max = node.val > max ? node.val : max;
                    if(node.left != null) queue.offer(node.left);
                    if(node.right != null) queue.offer(node.right);
                    size --;
                }
                result.add(max);
            }

            return result;

        }
    }
```





### [116. 填充每个节点的下一个右侧节点指针](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/)

![image-20230719164329859](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230719164329859.png)

+ 先把第一个处理完并且记录下来

+ 也是层序遍历

  ```java
  /*
  // Definition for a Node.
  class Node {
      public int val;
      public Node left;
      public Node right;
      public Node next;
  
      public Node() {}
      
      public Node(int _val) {
          val = _val;
      }
  
      public Node(int _val, Node _left, Node _right, Node _next) {
          val = _val;
          left = _left;
          right = _right;
          next = _next;
      }
  };
  */
  
  class Solution {
      public Node connect(Node root) {
          if(root == null) return root;
          Queue<Node> queue = new LinkedList<>();
          queue.offer(root);
          while(queue.size() > 0){
              int size = queue.size();
              Node cur = queue.poll();
              if(cur.left != null) queue.offer(cur.left);
              if(cur.right != null) queue.offer(cur.right);
              size --;
              while(size > 0){
                  cur.next = queue.poll();
                  if(cur.next.left != null) queue.offer(cur.next.left);
                  if(cur.next.right != null) queue.offer(cur.next.right);
                  cur = cur.next;
                  size--;
              }
          }
  
          return root;
          
      }
  }
  ```



### [117. 填充每个节点的下一个右侧节点指针 II](https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/)

跟上一题一样



### [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

![image-20230719164613513](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230719164613513.png)

+ 一样的层序遍历

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        if(root == null) return 0;
        queue.offer(root);

        int result = 0;

        while(queue.size() > 0){
            int size = queue.size();
            while(size > 0){
               TreeNode node = queue.poll();
               if(node.left != null) queue.offer(node.left);
               if(node.right != null) queue.offer(node.right);
               size --;
            }
            result ++;
        }
        return result;

    }
}
```





### [111. 二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

![image-20230719170212736](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230719170212736.png)

+ 注意判断语句，只有左右孩子都空才返回



```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int minDepth(TreeNode root) {
        if(root == null) return 0;
        int depth = 1;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while(queue.size() > 0){
            int size = queue.size();
            while(size > 0){
                TreeNode node = queue.poll();
                if(node.left == null && node.right == null){
                    return depth;
                }
                if(node.left != null) queue.offer(node.left);
                if(node.right != null) queue.offer(node.right);
                
                size --;
            }
            depth ++;
        }

        return depth;

    }
}
```





### [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)

![image-20230720235949620](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230720235949620.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode invertTree(TreeNode root) {
        if(root == null) return null;
        TreeNode tmp = root.left;
        root.left = root.right;
        root.right = tmp;
        invertTree(root.left);
        invertTree(root.right);
        return root;

    }
}
```





### [101. 对称二叉树](https://leetcode.cn/problems/symmetric-tree/)

![image-20230721001433703](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230721001433703.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        if(root.left == null && root.right == null) return true;
        if(root.left != null && root.right != null) return subTreeSymmetric(root.left, root.right);
        return false;

    }

    public boolean subTreeSymmetric(TreeNode root1, TreeNode root2){
        if(root1 == null && root2 == null) return true;
        if(root1 != null && root2 != null) {
            if(root1.val != root2.val) return false;

            return subTreeSymmetric(root1.left, root2.right)&& subTreeSymmetric(root1.right, root2.left);

        }
        return false;
    }
}
```



### [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

![image-20230721002056239](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230721002056239.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int maxDepth(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        if(root == null) return 0;
        queue.offer(root);

        int result = 0;

        while(queue.size() > 0){
            int size = queue.size();
            while(size > 0){
               TreeNode node = queue.poll();
               if(node.left != null) queue.offer(node.left);
               if(node.right != null) queue.offer(node.right);
               size --;
            }
            result ++;
        }
        return result;

    }
}
```

+ 之前做过了

+ 递归法c++代码

  ```java
  class solution {
  public:
      int getdepth(TreeNode* node) {
          if (node == NULL) return 0;
          int leftdepth = getdepth(node->left);       // 左
          int rightdepth = getdepth(node->right);     // 右
          int depth = 1 + max(leftdepth, rightdepth); // 中
          return depth;
      }
      int maxDepth(TreeNode* root) {
          return getdepth(root);
      }
  };
  ```



### [111. 二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

![image-20230721002829068](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230721002829068.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int minDepth(TreeNode root) {
        if(root == null) return 0;
        int depth = 1;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while(queue.size() > 0){
            int size = queue.size();
            while(size > 0){
                TreeNode node = queue.poll();
                if(node.left == null && node.right == null){
                    return depth;
                }
                if(node.left != null) queue.offer(node.left);
                if(node.right != null) queue.offer(node.right);
                
                size --;
            }
            depth ++;
        }

        return depth;

    }
}
```

+ 之前做过了






### [222. 完全二叉树的节点个数](https://leetcode.cn/problems/count-complete-tree-nodes/)

![image-20230721003127345](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230721003127345.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

    int count = 0;

    public int countNodes(TreeNode root) {
        count(root);
        return count;

    }

    public void count(TreeNode root){
        if(root == null) return;
        count++;
        count(root.left);
        count(root.right);
    }
}
```

+ 前序遍历



+ 针对完全二叉树的解法

  ```java
  class Solution {
      /**
       * 针对完全二叉树的解法
       *
       * 满二叉树的结点数为：2^depth - 1
       */
      public int countNodes(TreeNode root) {
          if (root == null) return 0;
          TreeNode left = root.left;
          TreeNode right = root.right;
          int leftDepth = 0, rightDepth = 0; // 这里初始为0是有目的的，为了下面求指数方便
          while (left != null) {  // 求左子树深度
              left = left.left;
              leftDepth++;
          }
          while (right != null) { // 求右子树深度
              right = right.right;
              rightDepth++;
          }
          if (leftDepth == rightDepth) {
              return (2 << leftDepth) - 1; // 注意(2<<1) 相当于2^2，所以leftDepth初始为0
          }
          return countNodes(root.left) + countNodes(root.right) + 1;
      }
  }
  ```

  ![image-20230721004209320](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230721004209320.png)



### [110. 平衡二叉树](https://leetcode.cn/problems/balanced-binary-tree/)

![image-20230721004232509](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230721004232509.png)

+ 高度：距离叶子节点，后序遍历 (这道题使用后序遍历)
+ 深度：距离根节点，前序遍历

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean isBalanced(TreeNode root) {
        return getHeight(root) != -1;


    }

    public int getHeight(TreeNode root){
        if(root == null) return 0;
        int rightHeight = getHeight(root.right);
        int leftHeight = getHeight(root.left);

        // -1 代表右子树已经不是一个平衡二叉树了
        if(rightHeight == -1) return -1;
        if(leftHeight == -1) return -1;

        //处理一般情况
        if(Math.abs(rightHeight - leftHeight) > 1) return -1;

        int result;
        result = Math.max(rightHeight, leftHeight) + 1;
        return result;
    }
}
```





### [257. 二叉树的所有路径](https://leetcode.cn/problems/binary-tree-paths/)

![image-20230722003125031](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230722003125031.png)



+ 递归：

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        if(root == null) return new ArrayList<String>();

        List<String> left = binaryTreePaths(root.left);
        List<String> right = binaryTreePaths(root.right);

        

        List<String> result = new ArrayList<String>();

        if(left.size() == 0 && right.size() == 0){
            result.add(root.val + "");
            return result;
        } 

        
        for(int i = 0; i < left.size(); i++){
            result.add(root.val + "->" + left.get(i));
        }
        for(int i = 0; i < right.size(); i++){
            result.add(root.val + "->" + right.get(i));
        }

        return result;

    }
}
```



递归回溯

![image-20230724220604452](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724220604452.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
// 有几个叶子节点就代表有几条路径，所以在遍历到叶子节点的时候收获结果, 在左边遍历完之后回溯，开始遍历右子树
//根节点到叶子节点只有一条唯一的路径
class Solution {
    public List<String> binaryTreePaths(TreeNode root) {
        List<Integer> path = new ArrayList<>();
        List<String> res = new ArrayList<>();

        traversal(path, res, root);

        return res;

    }

    public void traversal(List<Integer> path, List<String> res, TreeNode node){
        path.add(node.val);
        if(node.left == null && node.right == null){
           
            StringBuilder str = new StringBuilder();
            for(int i = 0; i < path.size() - 1; i++){
                str.append(path.get(i));
                str.append("->");
            }
            str.append(path.get(path.size() - 1));
            res.add(str.toString());
            return;
        }

        if(node.left != null){
            traversal(path, res, node.left);
            path.remove(path.size() - 1);
        }
        if(node.right != null){
            traversal(path, res, node.right);
            path.remove(path.size() - 1);
        }

    }
}
```



### [404. 左叶子之和](https://leetcode.cn/problems/sum-of-left-leaves/)

![image-20230724220839709](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724220839709.png)



```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int sum = 0;
    public int sumOfLeftLeaves(TreeNode root) {
        getSum(root);
        return sum;


    }
    public void getSum(TreeNode root){
        if(root == null){
            return;
        }
        //没有左节点，求右节点的结果
        if(root.left == null) {
            getSum(root.right);
            return;
        }

        //左节点是叶子节点，加上结果之后求右节点的结果
        if(root.left.left == null && root.left.right == null){
            sum += root.left.val;
            getSum(root.right);
            return;
            
        }
        //左节点不是叶子节点，求左右节点的结果
        getSum(root.left);
        getSum(root.right);
        

    }
}
```

+ 更简单的解法：实际上就是后序遍历，求本节点的左叶子节点的值

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int sumOfLeftLeaves(TreeNode root) {
        if(root == null) return 0;


        int mid = 0;
        if(root.left != null && root.left.left == null && root.left.right == null){
            mid = root.left.val;
        }


        int leftSum = sumOfLeftLeaves(root.left);
        int rightSum = sumOfLeftLeaves(root.right);
        return leftSum + rightSum + mid;


    }
}
```





### [513. 找树左下角的值](https://leetcode.cn/problems/find-bottom-left-tree-value/)

![image-20230724221124911](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724221124911.png)

```java
//层序遍历
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int findBottomLeftValue(TreeNode root) {
        //层序遍历
        Queue<TreeNode> queue = new LinkedList<>();

        //记录每一层的value
        List<Integer> arrayHelp = new ArrayList<>();
        arrayHelp.add(root.val);
        queue.offer(root);

        int tmp = 1;
        while(queue.size() > 0){
            int size = queue.size();
            tmp = queue.size();
            arrayHelp.clear();
            while(size > 0){
                TreeNode node = queue.poll();
                arrayHelp.add(node.val);
                if(node.left != null) queue.offer(node.left);
                if(node.right != null) queue.offer(node.right);
                size --;
            }
        }
        return arrayHelp.get(0);

        


    }
}
```

+ 实际上是最先到达最大深度的节点

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int maxDepth = 1;
    int result = 0;
    public int findBottomLeftValue(TreeNode root) {
        result = root.val;
        preOrder(root, 0);
        return result;


    }

    public void preOrder(TreeNode root, int depth){
        if(root == null) return;

        int newDepth = depth + 1;
        //我们要取的是最先到达最大深度的节点
        if(newDepth > maxDepth) {
            maxDepth = newDepth;
            result = root.val;
        }
        preOrder(root.left, newDepth);
        preOrder(root.right, newDepth);


    }
}
```







### [112. 路径总和](https://leetcode.cn/problems/path-sum/)

![image-20230724221327798](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724221327798.png)

![image-20230724221335424](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724221335424.png)



```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        if(root == null){
            return false;
        }
        //是叶子节点
        if(root.left == null && root.right == null){
            return (targetSum - root.val) == 0;
        }
        int sum = targetSum - root.val;
        boolean b1 = false;
        boolean b2 = false;
        if(root.left != null){
            b1 = hasPathSum(root.left, sum);
        }
        if(root.right != null){
            b2 = hasPathSum(root.right, sum);
        }
        return  b1 || b2;
    }
}
```

+ 可以不用判断空，因为有孩子就不算叶子节点，直接返回false不影响结果



### [113. 路径总和 II](https://leetcode.cn/problems/path-sum-ii/)

![image-20230724221558959](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724221558959.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    List<List<Integer>> result = new ArrayList<>();
    List<Integer> path = new ArrayList<>();
    public List<List<Integer>> pathSum(TreeNode root, int targetSum) {
        if(root == null){
            return result;
        }
        sum(root, targetSum);
        return result;



    }

    public void sum(TreeNode root, int targetSum){
        path.add(root.val);
        if(root.left == null && root.right == null){
           // 找到了和为 targetsum 的路径
            if (targetSum - root.val == 0) {
                //必须要new，因为不然传的指针
                result.add(new ArrayList<>(path));
            }
            return; // 如果和不为 targetsum，返回
        }

        if(root.left != null){
            sum(root.left, targetSum - root.val);
            path.remove(path.size() - 1);
        }

        if(root.right != null){
            sum(root.right, targetSum - root.val);
            path.remove(path.size() - 1);
        }


        
    }
}
```



### [106. 从中序与后序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

注意循环不变量：也就是所有的逻辑都是前闭后开

![image-20230724222410114](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724222410114.png)

![image-20230724222446316](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724222446316.png)

![image-20230724222357234](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724222357234.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    //为了在数组中用元素的值找到元素的下标
    Map<Integer, Integer> map = new HashMap<>();
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        for(int i = 0; i < inorder.length; i++){
            map.put(inorder[i], i);
        }
        return build(inorder, 0, inorder.length, postorder, 0, postorder.length);

    }

    public TreeNode build(int[] inorder,int startIn, int endIn, int[] postorder, int startPost, int endPost){
        //这里注意判断
        if(endIn <= startIn || endPost <= startPost) return null;
        TreeNode root = new TreeNode(postorder[endPost - 1]);
        root.left = build(inorder, startIn, map.get(postorder[endPost - 1]), postorder, startPost ,startPost + map.get(postorder[endPost - 1]) - startIn);
        root.right = build(inorder, map.get(postorder[endPost - 1]) + 1, endIn, postorder, startPost + map.get(postorder[endPost - 1]) - startIn, endPost - 1);

        return root;
    }
}
```





### [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

![image-20230724234814064](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230724234814064.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    Map<Integer, Integer> map = new HashMap<>();
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        for(int i = 0; i < inorder.length; i++){
            map.put(inorder[i], i);
        }

        return build(preorder, 0, preorder.length, inorder, 0, inorder.length);

    }

    public TreeNode build(int[] preorder, int startPre, int endPre, int[] inorder, int startIn, int endIn){
        if(endPre <= startPre || endIn <= startIn){
            return null;
        }

        TreeNode root = new TreeNode(preorder[startPre]);

        int length = map.get(preorder[startPre]) - startIn;
        root.left = build(preorder,startPre + 1, startPre + 1 + length, inorder, startIn, map.get(preorder[startPre]));
        root.right = build(preorder, startPre + 1 + length, endPre, inorder, map.get(preorder[startPre]) + 1, endIn);

        return root;
    }
}
```





### [654. 最大二叉树](https://leetcode.cn/problems/maximum-binary-tree/)

![image-20230725003555851](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725003555851.png)





```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode constructMaximumBinaryTree(int[] nums) {
        return build(nums, 0, nums.length);

    }

    public TreeNode build(int[] nums, int start, int end){
        if(end <= start) return null;
        // if(end - start == 1) return new TreeNode(nums[start]);
        int max = nums[start];
        int index = start;
        for(int i = start; i < end; i++){
            if(nums[i] > max){
                max = nums[i];
                index = i;
            }
        }

        TreeNode root = new TreeNode(max);

        root.left =  build(nums, start, index);
        root.right = build(nums, index + 1, end);

        return root;
       
    }
}
```





### [617. 合并二叉树](https://leetcode.cn/problems/merge-two-binary-trees/)

![image-20230725003656546](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725003656546.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if(root1 == null && root2 == null) return null;

        TreeNode root = new TreeNode();
        if(root1 != null && root2 != null){
            root.val = root1.val + root2.val;
            root.left = mergeTrees(root1.left, root2.left);
            root.right = mergeTrees(root1.right, root2.right);
        } 
        if(root1 == null && root2 != null){
            root.val = root2.val;
            root.left = root2.left;
            root.right = root2.right;
        }
        if(root2 == null && root1 != null){
            root.val = root1.val;
            root.left = root1.left;
            root.right = root1.right;
        } 
        return root;
       

    }
}
```



+ 精简版本

```java
class Solution {
    // 递归
    public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
        if (root1 == null) return root2;
        if (root2 == null) return root1;

        root1.val += root2.val;
        root1.left = mergeTrees(root1.left,root2.left);
        root1.right = mergeTrees(root1.right,root2.right);
        return root1;
    }
}
```





### [700. 二叉搜索树中的搜索](https://leetcode.cn/problems/search-in-a-binary-search-tree/)

![image-20230725004615325](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725004615325.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode searchBST(TreeNode root, int val) {
        if(root == null) return null;
        if(val == root.val) return root;
        if(val < root.val) return searchBST(root.left, val);
        if(val > root.val) return searchBST(root.right, val);
        return null;

    }
}
```



### [98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/)

![image-20230725004845770](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725004845770.png)

+ **不能单纯的比较左节点小于中间节点，右节点大于中间节点就完事了**。要整棵树
+ 思路是中序遍历，全放到数组里，然后检查元素是否是单调递增的
+ 可以用最大值用递归

![image-20230725121550686](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725121550686.png)

pre（中序遍历，指向上一个节点）的顺序是5，10，6，15，20

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    //pre 的值会慢慢变大
    TreeNode pre = null;
    public boolean isValidBST(TreeNode root) {
        if(root == null) return true;
        //left
        boolean left = isValidBST(root.left);
        
        //mid
        if(pre != null){
            if(root.val > pre.val){
                pre = root;
            }else{
                return false;
            }
            //起始条件
        }else{
            pre = root;
        }

        //right
        boolean right = isValidBST(root.right);

        return left && right;

    }
}
```







### [530. 二叉搜索树的最小绝对差](https://leetcode.cn/problems/minimum-absolute-difference-in-bst/)

![image-20230725122954002](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725122954002.png)

+ 也是中序遍历+双指针法

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    TreeNode pre = null;
    int result = Integer.MAX_VALUE;
    public int getMinimumDifference(TreeNode root) {
        inOrder(root);
        return result;


    }

    void inOrder(TreeNode root){
        if(root == null) return;

        //left
        inOrder(root.left);

        //mid
        if(pre != null){
            result = (root.val - pre.val) < result ? (root.val - pre.val) : result;
        }
        pre = root;

        //right
        inOrder(root.right);

    }
}
```





### [501. 二叉搜索树中的众数](https://leetcode.cn/problems/find-mode-in-binary-search-tree/)

![image-20230725123104779](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725123104779.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int count = 1;
    int maxCount = 0;
    TreeNode pre = null;
    ArrayList<Integer> result = new ArrayList<>();
    public int[] findMode(TreeNode root) {
        maxCount = 1;
        inOrder(root);
        

        int[] finalResult = new int[result.size()];
        int i = 0;
        for(int num: result){
            finalResult[i++] = num;
        }

        return finalResult;


    }

    void inOrder(TreeNode root){
        if(root == null) return;

        //left
        inOrder(root.left);

        //mid, 除了这种情况，其他全都变成初始化
        if(pre != null && pre.val == root.val){
            count++;
        }else{
            count = 1;
        }

        if(count > maxCount){
            maxCount = count;
            result.clear();
            result.add(pre.val);
        }else if(count == maxCount){
            result.add(root.val);
        }

        pre = root;


        //right
        inOrder(root.right);
    }
}
```






### [236. 二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)

![image-20230725175851199](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725175851199.png)



+ 自己的解法, 把p，q的路径找到

  ```java
  /**
   * Definition for a binary tree node.
   * public class TreeNode {
   *     int val;
   *     TreeNode left;
   *     TreeNode right;
   *     TreeNode(int x) { val = x; }
   * }
   */
  class Solution {
      ArrayList<TreeNode> resultp = new ArrayList<>();
      ArrayList<TreeNode> resultq = new ArrayList<>();
      boolean p1 = false;
      boolean q1 = false;
      public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
          preOrder(root, p, q);
          TreeNode result = root;
          int min = Math.min(resultp.size(), resultq.size());
          for(int i = 0; i < min; i++){
              if(resultp.get(i) != resultq.get(i)){
                  break;
              }
              result = resultp.get(i);
          }
  
          return result;
  
          
      }
  
      void preOrder(TreeNode root, TreeNode p, TreeNode q){
  
          //mid
          if(p1 == false) resultp.add(root);
          if(q1 == false) resultq.add(root);
          if(root == p) {
              // resultp.add(root);
              p1 = true;
          }
          if(root == q){
              // resultp.add(root);
              q1 = true;
          } 
          if(p1 && q1) {
              // resultp.add(root);
              return;
          }
  
  
          //left
          if(root.left != null){
              preOrder(root.left, p, q);
              if(p1 == false && resultp.size() > 0) resultp.remove(resultp.size() - 1);
              if(q1 == false && resultq.size() > 0) resultq.remove(resultq.size() - 1);
          }
          
  
          //right
          if(root.right != null){
               preOrder(root.right,p ,q);
              if(p1 == false  && resultp.size() > 0) resultp.remove(resultp.size() - 1);
              if(q1 == false && resultq.size() > 0) resultq.remove(resultq.size() - 1);
          }
         
  
      }
  }
  ```

+ 更好的解法(注意： 本身是祖先的话也可以，因为直接返回)

![image-20230725182105027](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725182105027.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        return postOrder(root, p ,q);
        
    }

    TreeNode postOrder(TreeNode root, TreeNode p, TreeNode q){
        if(root == null) return null;
        //找到的情况
        if(root == p || root == q) return root;

        //后序遍历
        TreeNode left = postOrder(root.left, p, q);
        TreeNode right = postOrder(root.right, p, q);

        //中间的逻辑
        if(left != null && right != null) return root;
        if(left == null && right != null) return right;
        if(left != null && right == null) return left;

        return null;

      
       

    }
}
```




### [235. 二叉搜索树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)

![image-20230725182432440](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725182432440.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if(root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q); 
        if(root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q); 
        return root;
        

        
    }
}
```



### [701. 二叉搜索树中的插入操作](https://leetcode.cn/problems/insert-into-a-binary-search-tree/)

![image-20230725211337313](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725211337313.png)

+ ![image-20230725215606473](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725215606473.png)
+ 因为二叉搜索树并不唯一，所以插入新节点即可，不用旋转等操作

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if(root == null) return new TreeNode(val);
        if(root.val > val) {
            if(root.left != null){
                insertIntoBST(root.left, val);
            }else{
                root.left = new TreeNode(val);
            }
        }

        if(root.val < val) {
            if(root.right != null){
                insertIntoBST(root.right, val);
            }else{
                root.right = new TreeNode(val);
            }
        }


        return root;

    }
}
```





### [450. 删除二叉搜索树中的节点](https://leetcode.cn/problems/delete-node-in-a-bst/)

![image-20230725222223372](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725222223372.png)

![image-20230725222244429](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725222244429.png)

![](https://code-thinking.cdn.bcebos.com/gifs/450.%E5%88%A0%E9%99%A4%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9.gif)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {

    //返回的是处理完之后的节点
    public TreeNode deleteNode(TreeNode root, int key) {
        if(root == null) return root;
        if(root.val > key){
            root.left = deleteNode(root.left, key);  
            return root;
        }

        if(root.val < key){       
            root.right = deleteNode(root.right, key); 
            return  root;  
        }

        if(root.val == key){
            if(root.left == null){
                root = root.right;
                return root;
            }
            if(root.right == null){
                root = root.left;
                return root;
            }
            if(root.left != null && root.right != null){
                TreeNode tmp = root.right;
                while(tmp.left != null){
                    tmp = tmp.left;
                }
                tmp.left = root.left;
                root = root.right;
                return root;
            }           
        }


        
        return root;
    }

    
}
```





### [669. 修剪二叉搜索树](https://leetcode.cn/problems/trim-a-binary-search-tree/)

![image-20230725231909249](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725231909249.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    //返回值为处理完之后的节点
    public TreeNode trimBST(TreeNode root, int low, int high) {
        if(root == null) return null;
        if(root.val >= low && root.val <= high){
            root.left = trimBST(root.left, low, high);
            root.right = trimBST(root.right, low, high);
        }

        if(root.val < low){
            //这里其实就修剪了
            return trimBST(root.right, low, high);
        }
        if(root.val > high){
            //这里其实就修剪了
            return trimBST(root.left, low, high);
        }
        return root;

    }
}
```





### [108. 将有序数组转换为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)

![image-20230725232833088](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230725232833088.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        if(nums.length == 0) return null;
        TreeNode root = new TreeNode(nums[nums.length / 2]);
        int[] left = Arrays.copyOfRange(nums, 0, nums.length / 2);
        int[] right = Arrays.copyOfRange(nums, nums.length / 2 + 1, nums.length);
        root.left = sortedArrayToBST(left);
        root.right = sortedArrayToBST(right);
        return root;

    }
}
```





### [538. 把二叉搜索树转换为累加树](https://leetcode.cn/problems/convert-bst-to-greater-tree/)

![image-20230726001336198](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230726001336198.png)

![image-20230726001348375](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230726001348375.png)

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    int sum = 0;
    //求自己和自己右边的所有节点的和，右中左
    public TreeNode convertBST(TreeNode root) {
        sum(root);
        return root;

    }

    void sum(TreeNode root){
        if(root == null) return;
        sum(root.right);
        sum += root.val;
        root.val = sum;
        sum(root.left);
    }
}
```

