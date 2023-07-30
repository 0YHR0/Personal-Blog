---
title: Ch07 Greedy
date: 2023-07-30
tags:
 - BinaryTree
categories:
 - Leetcode

---

## Greedy





### [455. 分发饼干](https://leetcode.cn/problems/assign-cookies/)![](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730154100846.png)

```java
//遍历饼干
class Solution {
    public int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int sum = 0;
        int pointer = 0;//小孩
        for(int i = 0; i < s.length; i++){
            if(pointer < g.length && s[i] >= g[pointer]){
                pointer ++;
                sum++;
            }
            
        }
        return sum;

    }
}
```





### 376. 摆动序列

![image-20230730155804212](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730155804212.png)

![image-20230730155755026](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730155755026.png)



![image-20230730155911397](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730155911397.png)



```java
class Solution {
    public int wiggleMaxLength(int[] nums) {

        if (nums.length <= 1) {
            return nums.length;
        }

        int result = 1;
        //上一个差值
        int preDif = 0;

        for(int i = 1; i < nums.length; i++){
            int dif = nums[i] - nums[i-1];
            //这边等于号表示的是初始情况
            if((dif > 0 && preDif <= 0) || (dif < 0 && preDif >= 0)){
                result++;
                preDif = dif;
            }        
        }
        return result;


    }
}
```



### [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

![image-20230730165351301](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730165351301.png)

![image-20230730170703516](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730170703516.png)



+ 从代码角度上来讲：遍历 nums，从头开始用 count 累积，如果 count 一旦加上 nums[i]变为负数，那么就应该从 nums[i+1]开始从 0 累积 count 了，因为已经变为负数的 count，只会拖累总和。
+ **贪心的思路为局部最优：当前“连续和”为负数的时候立刻放弃，从下一个元素重新计算“连续和”，因为负数加上下一个元素 “连续和”只会越来越小。从而推出全局最优：选取最大“连续和”**



```java
class Solution {
    public int maxSubArray(int[] nums) {
        int result = nums[0];
        
        int left = 0;
        int i = 0;
        int tmp = 0;
        while(left < nums.length){
            for(i = left; i < nums.length; i++){
                tmp = tmp + nums[i];
                if(tmp > result) result = tmp;
                if(tmp < 0){
                    left = i + 1;
                    tmp = 0;
                    break;
                }
            }
            if(i == nums.length) break;
        }

        return result;
        

    }
}
```



### [122. 买卖股票的最佳时机 II](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/)

![image-20230730173821594](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730173821594.png)

```java
//求所有的上升阶段的和
class Solution {
    public int maxProfit(int[] prices) {
        int result = 0;
        for(int i = 1; i < prices.length; i++){
            if(prices[i] > prices[i - 1]){
                result = result + (prices[i] - prices[i - 1]);
            }
        }

        return result;

    }
}
```





### [55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)

![image-20230730175648096](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730175648096.png)

+ 算覆盖范围

```java
class Solution {
    public boolean canJump(int[] nums) {
        int max = nums[0];
        for(int i = 0; i <= max; i++){
            max = max < i + nums[i] ? i + nums[i] : max;
            if(max >= nums.length - 1){
            return true;
            }
        }
        if(max >= nums.length - 1){
            return true;
        }
        return false;
        

    }
}
```





### [45. 跳跃游戏 II](https://leetcode.cn/problems/jump-game-ii/)

![image-20230730205311254](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730205311254.png)

![image-20230730213209145](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730213209145.png)

+ 注意和上面一题不一样，不是每次扩大范围都步数+1
+ 在扩大范围之后，在扩大的范围里搜索可达的最远值，相当于多一个tmp

```java
class Solution {
    public int jump(int[] nums) {
        if(nums.length <= 1) return 0;
        int max = nums[0];
        int next = max;
        int step = 1;
        for(int i = 0; i <= max && max < nums.length - 1; i++){
            if(nums[i] + i > next){
                next = nums[i] + i;
            }
            if(i == max){
                max = next;
                step++;
            }
        }
        return step;
    }
    
}
```





### [1005. K 次取反后最大化的数组和](https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations/)

![image-20230730215726671](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730215726671.png)

```java
class Solution {
    public int largestSumAfterKNegations(int[] nums, int k) {
        int t = k;
        Arrays.sort(nums);
        //处理小于0的部分
        for(int i = 0; i < nums.length && nums[i] < 0 && t > 0; i++){
                nums[i] = 0 - nums[i];
                t--;
            }
        
        if(t % 2 == 1){
            Arrays.sort(nums);
            nums[0] = 0 - nums[0];
        }
        

        int sum = 0;
        for(int num: nums){
            sum += num;
        }
        return sum;

    }
}
```



### [134. 加油站](https://leetcode.cn/problems/gas-station/)

![image-20230730221723094](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730221723094.png)



![image-20230730223628336](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730223628336.png)



+ 只能从curSum负数的右边开始，理由如下：

![image-20230730223700832](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230730223700832.png)

```java
class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int[] net = new int[gas.length];
        for(int i = 0; i < gas.length; i++){
            net[i] = gas[i] - cost[i];
        }

        int sum = 0;
        int cursum = 0;
        int start = 0;
        for(int i = 0; i < net.length; i++){
            sum += net[i];
            cursum += net[i];
            if(cursum < 0){
                start = i + 1;
                cursum = 0;
            }
        }

        //总油不够
        if(sum < 0) return -1;

       
        return start;



    }
}
```



继续贪心12