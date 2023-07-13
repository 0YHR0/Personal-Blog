---
title: Ch00 Array
date: 2023-07-06
tags:
 - Array
categories:
 - Leetcode

---



+ **递归算法的空间复杂度 = 每次递归的空间复杂度 \* 递归深度**
+ 内存对齐



### 704.二分查找

![image-20230623122007123](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230623122007123.png)

```java
class Solution {
    public int search(int[] nums, int target) {
       int left = 0;
       int right = nums.length - 1;
       while (left <= right){
           int middle = (left + right) / 2;
           if(nums[middle] == target){
               return middle;
           }
           if(nums[middle] < target){
               left = middle + 1;
           }else{
               right = middle - 1;
           }

       }
       return -1;

    }
}
```





### 27. 移除元素



![image-20230623163950201](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230623163950201.png)

```java
class Solution {
    public int removeElement(int[] nums, int val) {


        int right = nums.length - 1;
        if(right == 0){
            if(nums[0] == val){
                return 0;
            }
        }
        int i = 0;
        while(i <= right){
            if(nums[i] == val){
                nums[i] = nums[right];
                right --;
            }else{
                i++;
            }
        }
        return i;

    }
}
```





### 977. 有序数组的平方

![image-20230623165434483](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230623165434483.png)



双指针

```java
class Solution {
    public int[] sortedSquares(int[] nums) {
       int left = 0;
       int right = nums.length - 1;
       int[] result = new int[nums.length];
       int resultPointer = nums.length - 1;
       while(left <= right){
           if(Math.abs(nums[left]) < Math.abs(nums[right])){
               result[resultPointer--] = nums[right] * nums[right];
               right --;
            }else{
                result[resultPointer--] = nums[left] * nums[left];
                left ++;
            }
       }
       return result;
       
    }
}
```



### 209. 长度最小子数组

![image-20230624113032386](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230624113032386.png)



双指针滑动窗口

```java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0;
        int result = Integer.MAX_VALUE;
        int sum = 0;
        for(int right = 0; right < nums.length; right ++){
            sum += nums[right];
            while (sum >= target){
                result = Math.min(result, right - left + 1);
                sum -= nums[left++];
            }
        }
        return result == Integer.MAX_VALUE ? 0:result;
    }
}
```





### 59.螺旋矩阵II

![image-20230627163106616](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230627163106616.png)

```java
class Solution {
    public int[][] generateMatrix(int n) {
        int[] resultOne = new int[n*n];
        for(int i = 1; i <= n * n; i++){
            resultOne[i - 1] = i;
        }

        int[][] result = new int[n][n];
        int i = 0;
        int x = 0;
        int y = 0;
        int xMinBound = 0;
        int xMaxBound = n - 1;
        int yMinBound = 0;
        int yMaxBound = n - 1;
        while(x >= xMinBound && x <= xMaxBound && y >= yMinBound && y <= yMaxBound){
            if(i >= resultOne.length){
                break;
            }
            while(y >= yMinBound && y <= yMaxBound){
                if(result[x][y] == 0){
                    result[x][y] = resultOne[i++];
                }   
                y++;
            }
            xMinBound ++;
            y--;
            x++;
            while(x >= xMinBound && x <= xMaxBound){
                if(result[x][y] == 0){
                    result[x][y] = resultOne[i++];
                }   
                x++;
            }
            yMaxBound --;
            x--;
            y--;
            while(y >= yMinBound && y <= yMaxBound){
                if(result[x][y] == 0){
                    result[x][y] = resultOne[i++];
                }
                y--;
            }
            xMaxBound --;
            y++;
            x--;
            while(x >= xMinBound && x <= xMaxBound){
                if(result[x][y] == 0){
                    result[x][y] = resultOne[i++];
                }
                x--;
            }
            yMinBound ++;
            x++;
            y++;
        }
        return result;
    }
}
```



