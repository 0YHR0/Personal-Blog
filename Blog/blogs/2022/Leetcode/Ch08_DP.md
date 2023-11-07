---
title: Ch08 DP
date: 2023-08-09
tags:
 - DP
categories:
 - Leetcode
---

## 

+ 01背包：用一维数组（长度为背包大小）的情况下，for最外层的肯定是物品数量，内层循环倒序
+ 完全背包：内层正序循环
+ 如果是排列问题（可以1， 2， 也可 2，1）,则两层for循环顺序颠倒



# 背包总结

![image-20230816231425490](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230816231425490.png)

![image-20230816231446078](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230816231446078.png)

## 背包递推公式

问能否能装满背包（或者最多装多少）：dp[j] = max(dp[j], dp[j - nums[i]] + nums[i]); ，对应题目如下：

- [动态规划：416.分割等和子集(opens new window)](https://programmercarl.com/0416.分割等和子集.html)
- [动态规划：1049.最后一块石头的重量 II(opens new window)](https://programmercarl.com/1049.最后一块石头的重量II.html)

问装满背包有几种方法：dp[j] += dp[j - nums[i]] ，对应题目如下：

- [动态规划：494.目标和(opens new window)](https://programmercarl.com/0494.目标和.html)
- [动态规划：518. 零钱兑换 II(opens new window)](https://programmercarl.com/0518.零钱兑换II.html)
- [动态规划：377.组合总和Ⅳ(opens new window)](https://programmercarl.com/0377.组合总和Ⅳ.html)
- [动态规划：70. 爬楼梯进阶版（完全背包）(opens new window)](https://programmercarl.com/0070.爬楼梯完全背包版本.html)

问背包装满最大价值：dp[j] = max(dp[j], dp[j - weight[i]] + value[i]); ，对应题目如下：

- [动态规划：474.一和零(opens new window)](https://programmercarl.com/0474.一和零.html)

问装满背包所有物品的最小个数：dp[j] = min(dp[j - coins[i]] + 1, dp[j]); ，对应题目如下：

- [动态规划：322.零钱兑换(opens new window)](https://programmercarl.com/0322.零钱兑换.html)
- [动态规划：279.完全平方数(opens new window)](https://programmercarl.com/0279.完全平方数.html)

## [#](https://programmercarl.com/背包总结篇.html#遍历顺序)遍历顺序

### [#](https://programmercarl.com/背包总结篇.html#_01背包)01背包

在[动态规划：关于01背包问题，你该了解这些！ (opens new window)](https://programmercarl.com/背包理论基础01背包-1.html)中我们讲解二维dp数组01背包先遍历物品还是先遍历背包都是可以的，且第二层for循环是从小到大遍历。

和[动态规划：关于01背包问题，你该了解这些！（滚动数组） (opens new window)](https://programmercarl.com/背包理论基础01背包-2.html)中，我们讲解一维dp数组01背包只能先遍历物品再遍历背包容量，且第二层for循环是从大到小遍历。

**一维dp数组的背包在遍历顺序上和二维dp数组实现的01背包其实是有很大差异的，大家需要注意！**

### [#](https://programmercarl.com/背包总结篇.html#完全背包)完全背包

说完01背包，再看看完全背包。

在[动态规划：关于完全背包，你该了解这些！ (opens new window)](https://programmercarl.com/背包问题理论基础完全背包.html)中，讲解了纯完全背包的一维dp数组实现，先遍历物品还是先遍历背包都是可以的，且第二层for循环是从小到大遍历。

但是仅仅是纯完全背包的遍历顺序是这样的，题目稍有变化，两个for循环的先后顺序就不一样了。

**如果求组合数就是外层for循环遍历物品，内层for遍历背包**。

**如果求排列数就是外层for遍历背包，内层for循环遍历物品**。

相关题目如下：

- 求组合数：[动态规划：518.零钱兑换II(opens new window)](https://programmercarl.com/0518.零钱兑换II.html)
- 求排列数：[动态规划：377. 组合总和 Ⅳ (opens new window)](https://mp.weixin.qq.com/s/Iixw0nahJWQgbqVNk8k6gA)、[动态规划：70. 爬楼梯进阶版（完全背包）(opens new window)](https://programmercarl.com/0070.爬楼梯完全背包版本.html)

如果求最小数，那么两层for循环的先后顺序就无所谓了，相关题目如下：

- 求最小数：[动态规划：322. 零钱兑换 (opens new window)](https://programmercarl.com/0322.零钱兑换.html)、[动态规划：279.完全平方数(opens new window)](https://programmercarl.com/0279.完全平方数.html)

**对于背包问题，其实递推公式算是容易的，难是难在遍历顺序上，如果把遍历顺序搞透，才算是真正理解了**。





### [509. 斐波那契数](https://leetcode.cn/problems/fibonacci-number/)

![image-20230809212338949](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809212338949.png)

![image-20230809213642249](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809213642249.png)

![image-20230809213649626](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809213649626.png)

+ 递归

```java
class Solution {
    public int fib(int n) {
        if(n == 0) return 0;
        if(n == 1) return 1;
        return fib(n - 1) + fib(n - 2);


    }
}
```

+ 非递归

```java
class Solution {
    public int fib(int n) {
       int[] dp = new int[n + 1];
       if(n == 0) return 0;
       if(n == 1) return 1;
       dp[0] = 0;
       dp[1] = 1;
       for(int i = 2; i <= n; i++){
           dp[i] = dp[i - 1] + dp[i - 2];
       }
       return dp[n];


    }
}
```





### [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)

![image-20230809220158745](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809220158745.png)

![image-20230809220216751](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809220216751.png)

![image-20230809220243992](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809220243992.png)

![image-20230809220314715](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809220314715.png)

![image-20230809220329428](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809220329428.png)



```java
class Solution {
    public int climbStairs(int n) {
        int[] dp = new int[n + 1];
        if(n <= 2) return n;
        dp[1] = 1;
        dp[2] = 2;
        for(int i = 3; i <= n; i++){
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];

    }
}
```





### [746. 使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)

![image-20230809221648679](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809221648679.png)

![image-20230809221730257](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809221730257.png)

![image-20230809221744000](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809221744000.png)

```java
class Solution {
    public int minCostClimbingStairs(int[] cost) {
        int[] dp = new int[cost.length + 1];
        if(cost.length < 2) return 0;
        dp[0] = 0;
        dp[1] = 0;
        for(int i = 2; i < dp.length; i++){
            dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
        }
        return dp[dp.length - 1];


    }
}
```



### [62. 不同路径](https://leetcode.cn/problems/unique-paths/)

![image-20230809222923572](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809222923572.png)

![image-20230809222958334](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809222958334.png)

![image-20230809223015886](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809223015886.png)



```java
class Solution {
    public int uniquePaths(int m, int n) {
        if(m <= 1 || n <= 1) return 1;
        //路径数量
        int[][] dp = new int[m][n];
        for(int i = 0; i < m ; i++){ 
            for(int j = 0; j < n; j++){
                if(j == 0 || i == 0){
                    dp[i][j] = 1;
                    continue;
                }
                //左边的路径数量加上面的路径数量
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }

        return dp[m - 1][n - 1];

    }
}
```





### [63. 不同路径 II](https://leetcode.cn/problems/unique-paths-ii/)

![image-20230809223100142](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809223100142.png)

+ 和上一题差不多，初始化的时候遇到障碍就全是0，先把左边一列和上边一列给赋值

```java
class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int[][] dp = new int[obstacleGrid.length][obstacleGrid[0].length];
        //初始化
        for (int i = 0; i < obstacleGrid.length; i++) {
            if(obstacleGrid[i][0] == 1){
                break;
            } 
            else{
                dp[i][0] = 1;
            }
            
        }
        for (int i = 0; i < obstacleGrid[0].length; i++) {
            if(obstacleGrid[0][i] == 1){
                break;
            } 
            else{
                dp[0][i] = 1;
            } 
        }

        for (int i = 1; i < obstacleGrid.length; i++) {
            for (int j = 1; j < obstacleGrid[0].length; j++) {
                if(obstacleGrid[i][j] == 0) dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
        return dp[obstacleGrid.length - 1][obstacleGrid[0].length -1];

    }
}
```



### [343. 整数拆分](https://leetcode.cn/problems/integer-break/)

![image-20230809223816428](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230809223816428.png)

![image-20230810221548307](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230810221548307.png)





```java
class Solution {
    public int integerBreak(int n) {
        //dp意思是i的最大拆分乘积
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 1;
        for(int i = 3; i <= n; i++){
            for(int j = 1; j < i; j++){
                //j * (i - j) --> 拆分两个
                //j * dp[i - j] --> 拆分两个以上
                dp[i] = Math.max(dp[i], Math.max(j * dp[i - j], j * (i - j)));
            }
        }
        return dp[n];
    }
}
```





### [96. 不同的二叉搜索树](https://leetcode.cn/problems/unique-binary-search-trees/)

![image-20230810224857712](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230810224857712.png)

![image-20230810224811352](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230810224811352.png)

![image-20230810224823502](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230810224823502.png)

![image-20230810224842894](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230810224842894.png)

从哪个是头节点开始思考

```java
class Solution {
    public int numTrees(int n) {
        if(n <= 2) return n;
        //dp表示数量
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        dp[2] = 2;
        for(int i = 3; i <= n; i++){
            //以j为根节点的左子树数量和右子树数量
            for(int j = 1; j <= i; j++){
                dp[i] += (dp[j - 1] * dp[i - j]); 
            }
        }

        return dp[n];
        


    }
}
```




### 背包问题

![image-20230811100421228](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811100421228.png)

![image-20230811100434678](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811100434678.png)

![image-20230811100542760](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811100542760.png)

![image-20230811100600317](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811100600317.png)

![image-20230811100613449](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811100613449.png)

![image-20230811100627949](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811100627949.png)

![image-20230811100647756](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811100647756.png)

![image-20230811104120345](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811104120345.png)

![image-20230811105014021](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811105014021.png)

![image-20230811105649537](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811105649537.png)

![image-20230811105706004](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811105706004.png)

+ 注意倒序遍历





### [416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/)

![image-20230811105936109](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811105936109.png)

+ 本题要求集合里能否出现总和为 sum / 2 的子集。
+ 先遍历背包



二维dp数组，易理解

```java
class Solution {
    public boolean canPartition(int[] nums) {
        int sum = 0;
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
        }
        if(sum % 2 == 1) return false; 
        int cap = sum / 2;

        //[背包容量][物品重量]
        int[][] dp = new int[cap + 1][nums.length];

        //初始化
        for(int i = 0; i < nums.length; i++){
            dp[0][i] = 0;
        }

        for(int i = 0; i <= cap; i++){
            if(nums[0] <= i)  dp[i][0] = nums[0];
        }
        //开始
        //背包
        for(int i = 1; i <= cap; i++){
            //物品
            for(int j = 1; j < nums.length; j++){
                if(i < nums[j]){
                    dp[i][j] = dp[i][j - 1];
                }else{
                    //放第j个物品，不放第j个物品
                    dp[i][j] = Math.max(nums[j] + dp[i - nums[j]][j - 1], dp[i][j - 1]);
                }
               
            }
        }
        return dp[cap][nums.length - 1] == cap;

    }
}
```



+ 一维滚动数组

```java
class Solution {
    public boolean canPartition(int[] nums) {
        if(nums == null || nums.length == 0) return false;
        int n = nums.length;
        int sum = 0;
        for(int num : nums) {
            sum += num;
        }
        //总和为奇数，不能平分
        if(sum % 2 != 0) return false;
        int target = sum / 2;
        int[] dp = new int[target + 1];
        for(int i = 0; i < n; i++) {
            for(int j = target; j >= nums[i]; j--) {
                //物品 i 的重量是 nums[i]，其价值也是 nums[i]
                dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
            }
           
            //剪枝一下，每一次完成內層的for-loop，立即檢查是否dp[target] == target，優化時間複雜度（26ms -> 20ms）
            if(dp[target] == target)
                return true;
        }
        return dp[target] == target;
    }
}
```



### [1049. 最后一块石头的重量 II](https://leetcode.cn/problems/last-stone-weight-ii/)

![image-20230811211708487](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811211708487.png)

+ 本题其实就是尽量让石头分成重量相同的两堆，相撞之后剩下的石头最小，**这样就化解成01背包问题了**。

```java
class Solution {
    public int lastStoneWeightII(int[] stones) {
        int sum = 0;
        for(int i = 0; i < stones.length; i++){
            sum += stones[i];
        }
        int cap = sum / 2;
        //[物品重量][背包容量]
        int[][] dp = new int[stones.length][cap + 1];

        for(int i = 0; i < stones.length; i++){
            dp[i][0] = 0;
        }

        for(int i = 0; i <= cap; i++){
            dp[0][i] = stones[0] <= i ? stones[0] : 0; 
        }

        //背包
        for(int i = 1; i <= cap; i++){
            //物品
            for(int j = 1; j < stones.length; j++){
                //记住这边必须要判断
                if(i < stones[j]){
                    //j肯定放不进
                    dp[j][i] = dp[j - 1][i];
                }else{
                    //放第j个，不放第j个
                    dp[j][i] = Math.max(stones[j] + dp[j - 1][i - stones[j]], dp[j - 1][i]);
                }
                
            }
        }

        return Math.abs(sum - dp[stones.length - 1][cap] - dp[stones.length - 1][cap]);

    }
}
```







### [494. 目标和](https://leetcode.cn/problems/target-sum/)

![image-20230811220809813](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811220809813.png)

![image-20230811220823575](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811220823575.png)

![image-20230811223812932](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230811223812932.png)

+ 初始化顺序不能变

```java
class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        int sum = 0;
        for(int i = 0; i < nums.length; i++){
            sum += nums[i];
        }
        if((target + sum) % 2 == 1) return 0;
        int left = (target + sum) / 2;

        // 注意nums[i] >= 0的题目条件，意味着sum也是所有nums[i]的绝对值之和
        // 这里保证了sum + target一定是大于等于零的，也就是left大于等于零（毕竟我们定义left大于right）
        if(sum < Math.abs(target)){
            return 0;
        }
        
        //[背包容量][物品大小]
        int[][] dp = new int[left + 1][nums.length]; 


        for(int i = 0; i <= left; i++){
            if(i == nums[0]){
                dp[i][0] = 1;
            }

        }

        //当从nums数组的索引0到i的部分有n个0时（n > 0)，每个0可以取+/-，因此有2的n次方中可以取到j = 0的方案
        int zeroNum = 0;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] == 0){
                zeroNum++;
            } 
            dp[0][i] = (int) Math.pow(2, zeroNum);
        }

        
        // dp[nums[0]][0] = 1;

        
        //背包
        for(int i = 1; i <= left; i++){
            //物品
            for(int j = 1; j < nums.length; j++){
                if(i < nums[j]){
                    dp[i][j] = dp[i][j - 1];
                }else{
                    //取第j个，不取第j个
                    dp[i][j] = dp[i - nums[j]][j - 1] + dp[i][j - 1];   
                }
                
            }
        }

        return dp[left][nums.length - 1];

    }
}
```




### [474. 一和零](https://leetcode.cn/problems/ones-and-zeroes/)

![image-20230813220537570](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230813220537570.png)

+ 此题变成了背包容量是个二维数组

```java
class Solution {
    public int findMaxForm(String[] strs, int m, int n) {
        //[0][1]
        int[][] dp = new int[m + 1][n + 1];
        //物品数量
        for(int i = 0; i < strs.length; i++){

            int zeroNum = 0;
            int oneNum = 0;
            for(int x = 0; x < strs[i].length(); x++){
                if(strs[i].charAt(x) == '0'){
                    zeroNum ++;
                }else{
                    oneNum ++;
                }
            }
            //1
            for(int j = n; j >= oneNum; j--){
                //0
                for(int k = m; k >= zeroNum; k--){
                    dp[k][j] = Math.max(dp[k][j], dp[k - zeroNum][j - oneNum] + 1);
                }
            }
        }

        return dp[m][n]; 

    }
}
```







### 完全背包（每个物品可以被拿多次）

![image-20230814225452132](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230814225452132.png)





### [518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-ii/)

![image-20230814225547635](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230814225547635.png)

![image-20230814231940124](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230814231940124.png)

![image-20230814232130719](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230814232130719.png)

```java
class Solution {
    public int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        dp[0] = 1;

        //注意这里与二维数组不同的是从0开始遍历
        for(int i = 0; i < coins.length; i++){
            //背包容量
            for(int j = coins[i]; j <= amount; j++){
                //不取第j个 + 取第j个
                dp[j] = dp[j] + dp[j - coins[i]];
            }

        }

        return dp[amount];

    }
}
```



### [377. 组合总和 Ⅳ](https://leetcode.cn/problems/combination-sum-iv/)

![image-20230815112821009](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230815112821009.png)



+ 先遍历背包在遍历物品就是求得排列数



```java
class Solution {
    public int combinationSum4(int[] nums, int target) {
        int[] dp = new int[target + 1];
        dp[0] = 1;

        for(int j = 0; j <= target; j++){
            //不取就没有变
            for(int i = 0; i < nums.length; i++){
                //取i
                if(j >= nums[i]) dp[j] = dp[j] + dp[j - nums[i]];
            }
        }

        return dp[target];

    }
}
```





### [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)

![image-20230815155001474](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230815155001474.png)

![image-20230815155041652](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230815155041652.png)

```java
class Solution {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        //init
        for(int i  = 1; i < dp.length; i++){
            dp[i] = Integer.MAX_VALUE;
        }

        for(int i = 0; i < coins.length; i++){
            for(int j = coins[i]; j <= amount; j++){
                //这边必须要判断，否则会超过最大值
                if(dp[j - coins[i]] != Integer.MAX_VALUE) {
                    dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
                }
                
            }
        }

        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];

    }
}
```



### [139. 单词拆分](https://leetcode.cn/problems/word-break/)

![image-20230816224543389](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230816224543389.png)

![image-20230816224634176](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230816224634176.png)

![image-20230816224710358](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230816224710358.png)

+ 注意遍历顺序！！

```java
class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        //dp表示到i为止，是否可以在字典里找到
        boolean[] dp = new boolean[s.length() + 1];
        
        dp[0] = true;
        for(int i = 1; i < dp.length; i++){
            dp[i] = false;
        }
        
        for(int i = 0; i < s.length() + 1; i++){
            for(String word: wordDict){
                int len = word.length();
                if(i >= len && dp[i - len] == true && s.substring(i - len, i).equals(word)){
                    dp[i] = true;
                }
            }
        }

        return dp[s.length()];

    }
}
```

+ 顺序有所谓就是排列
+ 顺序无所谓（不影响结果）就是组合



### 多重背包

![image-20230816231304838](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230816231304838.png)



### [198. 打家劫舍](https://leetcode.cn/problems/house-robber/)

![image-20230817232703739](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230817232703739.png)

```java
class Solution {
    public int rob(int[] nums) {
        //有n个房屋的时候最大值
        int[] dp = new int[nums.length + 1];
        if(nums.length == 1) return nums[0];
        dp[0] = 0;
        dp[1] = nums[0];
        // dp[2] = Math.max(nums[0], nums[1]);
        for(int i = 2; i < nums.length + 1; i++){
            //不偷i，偷i
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
        }

        return dp[nums.length];




    }
}
```



### [213. 打家劫舍 II](https://leetcode.cn/problems/house-robber-ii/)

![image-20230817235252071](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230817235252071.png)





![image-20230817235146563](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230817235146563.png)

+ 可以正着偷一次，反着偷一次，看看谁大

```java
class Solution {
    public int rob(int[] nums) {
        //有n个房屋的时候最大值
        int[] dp = new int[nums.length];
        int[] dp2 = new int[nums.length];
        if(nums.length == 1) return nums[0];
        dp[0] = 0;
        dp[1] = nums[0];
        dp2[0] = 0;
        dp2[1] = nums[nums.length - 1];
        // dp[2] = Math.max(nums[0], nums[1]);
        for(int i = 2; i < nums.length; i++){
            //不偷i，偷i
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
        }
         for(int i = 2; i < nums.length; i++){
            //不偷i，偷i
            dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[nums.length - i]);
        }


        return Math.max(dp[nums.length - 1], dp2[nums.length - 1]);




    }
}
```



### [337. 打家劫舍 III](https://leetcode.cn/problems/house-robber-iii/)

![image-20230817235314679](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230817235314679.png)

+ 树形DP，看最后一种解法

```java
class Solution {
    // 1.递归去偷，超时
    public int rob(TreeNode root) {
        if (root == null)
            return 0;
        int money = root.val;
        if (root.left != null) {
            money += rob(root.left.left) + rob(root.left.right);
        }
        if (root.right != null) {
            money += rob(root.right.left) + rob(root.right.right);
        }
        return Math.max(money, rob(root.left) + rob(root.right));
    }

    // 2.递归去偷，记录状态
    // 执行用时：3 ms , 在所有 Java 提交中击败了 56.24% 的用户
    public int rob1(TreeNode root) {
        Map<TreeNode, Integer> memo = new HashMap<>();
        return robAction(root, memo);
    }

    int robAction(TreeNode root, Map<TreeNode, Integer> memo) {
        if (root == null)
            return 0;
        if (memo.containsKey(root))
            return memo.get(root);
        int money = root.val;
        if (root.left != null) {
            money += robAction(root.left.left, memo) + robAction(root.left.right, memo);
        }
        if (root.right != null) {
            money += robAction(root.right.left, memo) + robAction(root.right.right, memo);
        }
        int res = Math.max(money, robAction(root.left, memo) + robAction(root.right, memo));
        memo.put(root, res);
        return res;
    }

    // 3.状态标记递归
    // 执行用时：0 ms , 在所有 Java 提交中击败了 100% 的用户
    // 不偷：Max(左孩子不偷，左孩子偷) + Max(又孩子不偷，右孩子偷)
    // root[0] = Math.max(rob(root.left)[0], rob(root.left)[1]) +
    // Math.max(rob(root.right)[0], rob(root.right)[1])
    // 偷：左孩子不偷+ 右孩子不偷 + 当前节点偷
    // root[1] = rob(root.left)[0] + rob(root.right)[0] + root.val;
    public int rob3(TreeNode root) {
        int[] res = robAction1(root);
        return Math.max(res[0], res[1]);
    }

    //返回值为   0: 偷root，1: 不偷root
    int[] robAction1(TreeNode root) {
        int res[] = new int[2];
        if (root == null)
            return res;

        int[] left = robAction1(root.left);
        int[] right = robAction1(root.right);

        res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        res[1] = root.val + left[0] + right[0];
        return res;
    }
}
```





### [121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)

![image-20230818175851509](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818175851509.png)

![image-20230818175904057](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818175904057.png)

![image-20230818175909866](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818175909866.png)

```java
class Solution {
    public int maxProfit(int[] prices) {
        //第i天
        //0: 持有，1: 不持有 身上的现金
       int[][] dp = new int[prices.length][2];
       dp[0][0] = -prices[0];
       dp[0][1] = 0;
       for(int i = 1; i < prices.length; i++){
           //持有: 要么前一天已经持有，要么今天买入
           dp[i][0] = Math.max(dp[i - 1][0], 0 - prices[i]);
           //不持有：要么前一天也不持有, 要么前一天持有，今天卖了
           dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
       }
       return Math.max(dp[prices.length - 1][0],dp[prices.length - 1][1]);
    }
}
```

+ 能买多次的情况

![image-20230818192021232](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818192021232.png)

只有递推公式需要改变

![image-20230818192055308](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818192055308.png)



### [123. 买卖股票的最佳时机 III](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii/)

![image-20230818192456354](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818192456354.png)

```java
class Solution {
    public int maxProfit(int[] prices) {
        //dp数组下标为状态，一共有5种状态
        //dp数组值为最大持有现金
        //0：第一次不持有股票
        //1：第一次持有股票
        //2：第一次卖了，不持有股票
        //3：第二次持有股票
        //4：第二次卖了，不持有股票
        int[][] dp = new int[prices.length][5];
        dp[0][0] = 0;
        dp[0][1] = 0 - prices[0];
        dp[0][2] = 0;
        dp[0][3] = 0 - prices[0];
        dp[0][4] = 0;

        for(int i = 1; i < prices.length; i++){
            dp[i][0] = 0;
            //要么之前一天已经持有，要么今天买入
            dp[i][1] = Math.max(dp[i - 1][1], 0 - prices[i]);
            //要么之前一天已经卖了，要么今天卖
            dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
            //要么之前一天已经第二次持有，要么今天买
            dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
            ///要么之前一天已经第二次卖了，要么今天卖
            dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
        }

        return dp[prices.length - 1][4];

    }
}
```



### [188. 买卖股票的最佳时机 IV](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/)

![image-20230818200620944](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818200620944.png)

+ 根据上一题推算得出，找规律

```java
class Solution {
    public int maxProfit(int k, int[] prices) {
        //dp数组下标为状态，一共有k种状态
        //dp数组值为最大持有现金
        //0：第一次不持有股票
        //1：第一次持有股票
        //2：第一次卖了，不持有股票
        //3：第二次持有股票
        //4：第二次卖了，不持有股票
        int[][] dp = new int[prices.length][2 * k + 1];
        //init
        for(int i = 0; i < 2 * k + 1; i++){
            if(i % 2 == 1){
                dp[0][i] = 0 - prices[0];
            }
            
        }

        for(int i = 1; i < prices.length; i++){
            dp[i][0] = 0;
            for(int j = 1; j < 2 * k + 1; j++){
                if(j % 2 == 1){
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i]);
                }else{
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i]);
                }
                
            }
            
            //要么之前一天已经持有，要么今天买入
            //dp[i][1] = Math.max(dp[i - 1][1], 0 - prices[i]);
            //要么之前一天已经卖了，要么今天卖
            //dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
            //要么之前一天已经第二次持有，要么今天买
            //dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
            ///要么之前一天已经第二次卖了，要么今天卖
            //dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
        }

        return dp[prices.length - 1][2 * k];


    }
}
```



### [309. 买卖股票的最佳时机含冷冻期](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/)

![image-20230818211112230](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818211112230.png)



![image-20230818211057938](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818211057938.png)

+ 自己根据题目给的例子推断有哪几个状态

```java
class Solution {
    public int maxProfit(int[] prices) {
        //0: 今天持有
        //1: 今天卖，不持有
        //2：今天持续不持有
        //3: 冷冻, 不持有
        int[][] dp = new int[prices.length][4];
        dp[0][0] = 0 - prices[0];

        for(int i = 1; i < prices.length; i++){
            //要么昨天已经持有，要么昨天是冷冻今天买，要么昨天不是冷冻(持续不持有)今天买
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][3] - prices[i]);
            dp[i][0] = Math.max(dp[i][0], dp[i - 1][2] - prices[i]);

            //昨天持有
            dp[i][1] = dp[i - 1][0] + prices[i];

            //昨天是冷冻，昨天不持有,
            dp[i][2] = Math.max(dp[i - 1][3], dp[i - 1][2]);

            //昨天卖
            dp[i][3] = dp[i - 1][1]; 
        }

        int re = Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2]);
        re = Math.max(re, dp[prices.length - 1][3]);

        return re;

    }
}
```





### [714. 买卖股票的最佳时机含手续费](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)

![image-20230818214813648](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230818214813648.png)

+ 就是在卖出的时候算上手续费就行

```java
class Solution {
    public int maxProfit(int[] prices, int fee) {
        //0： 持有， 1： 不持有
        int[][] dp = new int[prices.length][2];

        dp[0][0] = 0 - prices[0];

        for(int i = 1; i < prices.length; i++){
            //今天持有：昨天持有，或者今天买入
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);

            //今天不持有：昨天不持有，今天卖出
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee);
        }

        return dp[prices.length - 1][1];

    }
}
```





### [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)

![image-20230819113317972](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230819113317972.png)

```java
class Solution {
    public int lengthOfLIS(int[] nums) {
        //dp[i]表示i之前包括i的  **以nums[i]结尾的最长递增子序列**  的长度
        int[] dp = new int[nums.length];
        //初始化，每个元素都至少是1
        for(int i = 0; i < nums.length; i++){
            dp[i] = 1;
        }

        int result = 1;

        for(int i = 1; i < nums.length; i++){
            for(int j = 0; j < i; j++){
                //这里不是要比较dp[i] dp[j]，而是取dp[j] 的最大值
                //看后一个元素能不能接到前面最大子序列的末尾，注意dp的定义
                if(nums[i] > nums[j]){
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                    if(dp[i] > result) result = dp[i];
                }
            }
        }

        return result;
       


    }
}
```





### [674. 最长连续递增序列](https://leetcode.cn/problems/longest-continuous-increasing-subsequence/)

![image-20230819113346536](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230819113346536.png)



+ DP

```java
class Solution {
    public int findLengthOfLCIS(int[] nums) {
        //以i为结尾的最长连续递增序列
        int[] dp = new int[nums.length];
        dp[0] = 1;
        int result = 1;
        for(int i = 1; i < dp.length; i++){
            if(nums[i] > nums[i - 1]){
                dp[i] = dp[i - 1] + 1;
                result = Math.max(dp[i], result);
            }else{
                dp[i] = 1;
            }

        }

        return result;

    }
}
```

+ 贪心

```java
class Solution {
    public int findLengthOfLCIS(int[] nums) {
       int count = 1;
       int result = 1;
       for(int i = 1; i < nums.length; i++){
           if(nums[i] > nums[i - 1]){
               count ++;
               result = Math.max(count, result);
           }else{
               count = 1;
           }
       }

       return result;

    }
}
```



### [718. 最长重复子数组](https://leetcode.cn/problems/maximum-length-of-repeated-subarray/)

![image-20230819140354133](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230819140354133.png)

```java
class Solution {
    public int findLength(int[] nums1, int[] nums2) {
        //以i j结尾的最长公共子串长度
        int[][] dp = new int[nums1.length][nums2.length];

        //init
        int result = 0;
        for(int i = 0; i < nums2.length; i++){
            if(nums1[0] == nums2[i]){
                dp[0][i] = 1;
                result = 1;
            }
        }

        for(int i = 0; i < nums1.length; i++){
            if(nums1[i] == nums2[0]){
                dp[i][0] = 1;
                result = 1;
            }
            
        }

        
        //dp
        for(int i = 1; i < nums1.length; i++){
            for(int j = 1; j < nums2.length; j++){
                if(nums1[i] == nums2[j]){
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    result = Math.max(dp[i][j], result); 
                }
            }
        }

        return result;

    }
}
```





### [1143. 最长公共子序列](https://leetcode.cn/problems/longest-common-subsequence/)

![image-20230819141248521](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230819141248521.png)

```java
class Solution {
    public int longestCommonSubsequence(String text1, String text2) {
        //以i，j为结尾的序列的子序列长度
        int[][] dp = new int[text1.length()][text2.length()];

        //init
        int tmp = -1;
        for(int i = 0; i < text2.length(); i++){
            if(text1.charAt(0) == text2.charAt(i)){
                dp[0][i] = 1;
                tmp = i;
                break;
            }
        }
        while(tmp >= 0 && tmp < text2.length()){
            dp[0][tmp] = 1;
            tmp++;
        }

        tmp = -1;
        for(int i = 0; i < text1.length(); i++){
            if(text1.charAt(i) == text2.charAt(0)){
                dp[i][0] = 1;
                tmp = i;
                break;
            }
        }
        while(tmp >= 0 && tmp < text1.length()){
            dp[tmp][0] = 1;
            tmp++;
        }


        //dp
        for(int i = 1; i < text1.length(); i++){
            for(int j = 1; j < text2.length(); j++){
                //一样，子序列长度+1
                if(text1.charAt(i) == text2.charAt(j)){
                    dp[i][j] = dp[i - 1][j - 1] + 1; 
                }else{
                    //不一样，取之前的最大值
                    dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
                }
            }
        }

        return dp[text1.length() - 1][text2.length() - 1];



    }
}
```





### [1035. 不相交的线](https://leetcode.cn/problems/uncrossed-lines/)

![image-20230820114157896](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820114157896.png)

![image-20230820114207206](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820114207206.png)

![image-20230820120319468](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820120319468.png)

+ 其实跟上一题一样

```java
class Solution {
    public int maxUncrossedLines(int[] nums1, int[] nums2) {
       //以i，j为结尾的序列的子序列长度
        int[][] dp = new int[nums1.length][nums2.length];

        //init
        if(nums1[0] == nums2[0]) dp[0][0] = 1;
        int tmp = -1;
        for(int i = 1; i < nums2.length; i++){  
            if(nums1[0] == nums2[i]){
                tmp = 1;
            }
            dp[0][i] = Math.max(tmp, dp[0][i - 1]);
        }
        tmp = -1;
        for(int i = 1; i < nums1.length; i++){  
            if(nums1[i] == nums2[0]){
                tmp = 1;
            }
            dp[i][0] = Math.max(tmp, dp[i - 1][0]);
        }


        //dp
        for(int i = 1; i < nums1.length; i++){
            for(int j = 1; j < nums2.length; j++){
                //一样，子序列长度+1
                if(nums1[i] == nums2[j]){
                    dp[i][j] = dp[i - 1][j - 1] + 1; 
                }else{
                    //不一样，取之前的最大值
                    dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
                }
            }
        }

        return dp[nums1.length - 1][nums2.length - 1];


    }
}
```




### [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)

![image-20230820133840650](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820133840650.png)

+ 贪心

```java
class Solution {
    public static int maxSubArray(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        int res = nums[0];
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            res = res > sum ? res : sum;
            if(sum < 0) sum = 0;
        }
        return res;
    }
}
```

+ DP

```java
class Solution {
       /**
     * 1.dp[i]代表当前下标对应的最大值
     * 2.递推公式 dp[i] = max (dp[i-1]+nums[i],nums[i]) res = max(res,dp[i])
     * 3.初始化 都为 0
     * 4.遍历方向，从前往后
     * 5.举例推导结果。。。
     *
     * @param nums
     * @return
     */
    public static int maxSubArray(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        int res = nums[0];
        int[] dp = new int[nums.length];
        dp[0] = nums[0];
        for (int i = 1; i < nums.length; i++) {
            //是自己大还是前面加过来的大
            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
            res = res > dp[i] ? res : dp[i];
        }
        return res;
    }
}
```




### [392. 判断子序列](https://leetcode.cn/problems/is-subsequence/)

![image-20230820150300270](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820150300270.png)

+ 暴力

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        if(s.length() == 0) return true;
        if(t.length() == 0) return false;
        int j = 0;
        for(int i = 0; i < t.length(); i++){
            if(t.charAt(i) == s.charAt(j)){
                j++;
            }
            if(j >= s.length()) return true;
        }
        return false;

    }
}
```

+ DP

```java
class Solution {
    public boolean isSubsequence(String s, String t) {
        int length1 = s.length(); int length2 = t.length();
        int[][] dp = new int[length1+1][length2+1];
        for(int i = 1; i <= length1; i++){
            for(int j = 1; j <= length2; j++){
                if(s.charAt(i-1) == t.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1] + 1;
                }else{
                    dp[i][j] = dp[i][j-1];
                }
            }
        }
        if(dp[length1][length2] == length1){
            return true;
        }else{
            return false;
        }
    }
}
```





### [115. 不同的子序列](https://leetcode.cn/problems/distinct-subsequences/)

![image-20230820173056282](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820173056282.png)



```java
class Solution {
    public int numDistinct(String s, String t) {
        char[] sc = s.toCharArray();
        char[] tc = t.toCharArray();
        int[][] dp = new int[sc.length][tc.length];

        //init
        int tmp = 0;
        for(int i = 0; i < sc.length; i++){
            if(sc[i] == tc[0]) tmp++;
            dp[i][0] = tmp;
        }

        for(int i = 0; i < tc.length; i++){
            if(sc[0] == tc[0])  dp[0][0] = 1;
            
        }

        //dp
        for(int i = 1; i < sc.length; i++){
            for(int j = 1; j < tc.length; j++){
                if(sc[i] == tc[j]){
                    //用sc[i] 来匹配，不用sc[i] 来匹配
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
                }else{
                    //不用sc[i] 来匹配
                    dp[i][j] = dp[i - 1][j];
                }
                
            }   
        }

        return dp[sc.length - 1][tc.length - 1];


    }
}
```



### [583. 两个字符串的删除操作](https://leetcode.cn/problems/delete-operation-for-two-strings/)

![image-20230820173222096](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820173222096.png)



```java
class Solution {
    public int minDistance(String word1, String word2) {
        //最长匹配字符
        int[][] dp = new int[word1.length()][word2.length()];

        char[] w1s = word1.toCharArray();
        char[] w2s = word2.toCharArray();

        int tmp = 0;
        for(int i = 0; i < w1s.length; i++){
            if(w1s[i] == w2s[0]){
                dp[i][0] = 1;
                tmp = 1;
            }else{
                dp[i][0] = tmp;
            }
            
        }
        
        tmp = 0;
        for(int i = 0; i < w2s.length; i++){
            if(w2s[i] == w1s[0]){
                dp[0][i] = 1;
                tmp = 1;
            }else{
                dp[0][i] = tmp;
            }
             
        }



        for(int i = 1; i < w1s.length; i++){
            for(int j = 1; j < w2s.length; j++){
                if(w1s[i] == w2s[j]){
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }else{
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return (w1s.length - dp[w1s.length - 1][w2s.length - 1]) + (w2s.length - dp[w1s.length - 1][w2s.length - 1]);

    }
}
```



### [72. 编辑距离](https://leetcode.cn/problems/edit-distance/)

![image-20230820175407895](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820175407895.png)

+ 注意 长度 + 1， 比较的时候就和 -1 比

![image-20230820191253989](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820191253989.png)

![image-20230820191307934](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820191307934.png)

![image-20230820191342781](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820191342781.png)

```java
class Solution {
    public int minDistance(String word1, String word2) {
        //最少操作数
        int[][] dp = new int[word1.length() + 1][word2.length() + 1];

        char[] w1 = word1.toCharArray();
        char[] w2 = word2.toCharArray();

        //init
        for(int i = 1; i <= w1.length; i++){
            dp[i][0] = i;
        }

        for(int i = 1; i <= w2.length; i++){
            dp[0][i] = i;
        }

        //dp
        for(int i = 1; i <= w1.length; i++){
            for(int j = 1; j <= w2.length; j++){
                if(w1[i - 1] == w2[j - 1]){
                    dp[i][j] = dp[i - 1][j - 1];
                }else{
                    //替换
                    int a = dp[i - 1][j - 1] + 1;
                    //删除word1
                    int b = dp[i - 1][j] + 1;
                    //增加word1(即删除word2)
                    int c = dp[i][j - 1] + 1;
                    //取最小值
                    b = Math.min(a, b);
                    c = Math.min(b, c);
                    dp[i][j] = c;
                }
            }
        }

        return dp[word1.length()][word2.length()];


    }
}
```



### [647. 回文子串](https://leetcode.cn/problems/palindromic-substrings/)

![image-20230820192256881](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820192256881.png)

![image-20230820194008902](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820194008902.png)

![image-20230820194028197](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820194028197.png)

![image-20230820194049667](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820194049667.png)

![image-20230820194812378](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820194812378.png)

+ dp

```java
class Solution {
    public int countSubstrings(String s) {
        boolean[][] dp = new boolean[s.length()][s.length()];

        int result = 0;
        for(int i = s.length() - 1; i >= 0; i--){
            for(int j = i; j < s.length(); j++){
                if(s.charAt(i) == s.charAt(j)){
                    //'a'
                    if(i == j){
                        dp[i][j] = true;
                    }
                    //'aa'
                    if((j - i) == 1){
                        dp[i][j] = true;
                    }
                    //'a....a'
                    if(j - i > 1){
                        dp[i][j] = dp[i + 1][j - 1];
                    }

                    if(dp[i][j] == true){
                        result ++;
                    }

                }
                //因为默认是false，所以 ！= 可以不用写
            }
        }


        return result;

    }
}
```

+ 中心扩散法![image-20230820195405777](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820195405777.png)

```java
class Solution {
    public int countSubstrings(String s) {
        int len, ans = 0;
        if (s == null || (len = s.length()) < 1) return 0;
        //总共有2 * len - 1个中心点
        for (int i = 0; i < 2 * len - 1; i++) {
            //通过遍历每个回文中心，向两边扩散，并判断是否回文字串
            //有两种情况，left == right，right = left + 1，这两种回文中心是不一样的
            int left = i / 2, right = left + i % 2;
            while (left >= 0 && right < len && s.charAt(left) == s.charAt(right)) {
                //如果当前是一个回文串，则记录数量
                ans++;
                left--;
                right++;
            }
        }
        return ans;
    }
}
```





### [516. 最长回文子序列](https://leetcode.cn/problems/longest-palindromic-subsequence/)

![image-20230820201534922](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820201534922.png)

+ dp 是 i ，j范围内最大的回文子串长度

![image-20230820202746680](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820202746680.png)

![image-20230820202754290](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820202754290.png)

![image-20230820202823764](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230820202823764.png)

```java
class Solution {
    public int longestPalindromeSubseq(String s) {

        int[][] dp = new int[s.length()][s.length()];

        for(int i = s.length() - 1; i >= 0; i--){
            //初始化
            dp[i][i] = 1;
            //这边j< s.length()避免了越界异常
            for(int j = i + 1; j < s.length(); j++){
                 if(s.charAt(i) == s.charAt(j)){
                    //所以i从下到上，j从左到右
                    dp[i][j] = dp[i + 1][j - 1] + 2;
                }else{
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[0][s.length() - 1]; 
    }
}
```





