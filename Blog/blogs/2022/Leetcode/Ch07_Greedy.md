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



### [135. 分发糖果](https://leetcode.cn/problems/candy/)

![image-20230731201129847](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230731201129847.png)

![image-20230801212706074](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230801212706074.png)

```java
class Solution {
    public int candy(int[] ratings) {
        int sum = 1;
        int num = 1;
        int pre = ratings[0];
        boolean isFirstBottom = false;
        for(int i = 1; i <  ratings.length; i++){
            if(ratings[i] > ratings[i - 1]){
                isFirstBottom = true;
                num ++;
            }else if(isFirstBottom == false){
                isFirstBottom = true;
                for(int j = i; j > 0; j--){
                    sum = sum + j + 1;
                }
                sum = sum - 1;
                num = 1;

            }else{
                num = 1;
            }
            sum += num;
        }

        return sum;

    }
}
```





### [860. 柠檬水找零](https://leetcode.cn/problems/lemonade-change/)

![image-20230801212758109](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230801212758109.png)

```java
class Solution {
    public boolean lemonadeChange(int[] bills) {
        int five = 0;
        int ten = 0;
        for(int i = 0; i < bills.length; i++){
            if(bills[i] == 5) five++;
            if(bills[i] == 10) {
                ten ++;
                five --;
            }
            if(bills[i] == 20){
                if(ten == 0) {
                    five = five - 3;
                }
                else{
                    ten --;
                    five --;
                }
                
            }
            if(ten < 0 || five < 0){
                return false;
            }
        }

        return true;

    }
}
```





### [406. 根据身高重建队列](https://leetcode.cn/problems/queue-reconstruction-by-height/)

![image-20230801212840888](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230801212840888.png)

![image-20230801221142975](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230801221142975.png)

```java
class Solution {
    public int[][] reconstructQueue(int[][] people) {
        LinkedList<int[]> result = new LinkedList<>();
        Arrays.sort(people, (a, b) -> {
            //升序
            if(a[0] == b[0]) return a[1] - b[1];
            //降序
            return b[0] - a[0];
        });

        for(int i = 0; i < people.length; i++){
            result.add(people[i][1], people[i]);
        }

        int[][] resultArr = new int[people.length][];
        for(int i = 0; i < resultArr.length; i++){
            resultArr[i] = result.get(i);
        }

        return resultArr;



    }
}
```



### [452. 用最少数量的箭引爆气球](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)

![image-20230801224900814](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230801224900814.png)

![image-20230801231445685](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230801231445685.png)

+ 每次重叠就更新气球的最小右边界，比如气球2的边界变为2，6

```java
class Solution {
    public int findMinArrowShots(int[][] points) {

        //先按照左边界排序
        Arrays.sort(points, (a , b) ->{
            //为了避免溢出，否则a[0] - b[0]即可
            return Integer.compare(a[0], b[0]);
        });

        int count = 0;
        //每次更新最小右边界
        for(int i = 1; i < points.length; i++){
            if(points[i - 1][1] >= points[i][0]){
                points[i][1] = Math.min(points[i - 1][1], points[i][1]);
            }else{
                count++;
            }

        }

        return count + 1;

    }
}
```



### [435. 无重叠区间](https://leetcode.cn/problems/non-overlapping-intervals/)

![image-20230807225535860](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230807225535860.png)

+ 思路和上一题类似

```java
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> {
            return Integer.compare(a[0], b[0]);
        });

        int result = 0;

        for(int i = 1; i < intervals.length; i++){
            if(intervals[i - 1][1] > intervals[i][0]){
                result ++;
                intervals[i][1] = Math.min(intervals[i - 1][1], intervals[i][1]);
            }
        }

        return result;

    }
}
```



### [763. 划分字母区间](https://leetcode.cn/problems/partition-labels/)

![image-20230807230219242](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230807230219242.png)

![image-20230807235008128](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230807235008128.png)

```java
class Solution {
    public List<Integer> partitionLabels(String S) {
        List<Integer> list = new LinkedList<>();
        //右边界
        int[] edge = new int[26];
        char[] chars = S.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            edge[chars[i] - 'a'] = i;
        }
        int idx = 0;
        //双指针
        int last = -1;
        for (int i = 0; i < chars.length; i++) {
            idx = Math.max(idx,edge[chars[i] - 'a']);
            if (i == idx) {
                list.add(i - last);
                last = i;
            }
        }
        return list;
    }
}
```



### [56. 合并区间](https://leetcode.cn/problems/merge-intervals/)

![image-20230808123346789](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230808123346789.png)

```java
class Solution {
    public int[][] merge(int[][] intervals) {
        List<int[]> list = new ArrayList<>();
        Arrays.sort(intervals, (a, b) -> {
            return Integer.compare(a[0], b[0]);
        });

        int start = intervals[0][0];
        int end = intervals[0][1];
        for(int i = 0; i < intervals.length; i++){
            if(intervals[i][0] > end){
                list.add(new int[]{start, end});
                start = intervals[i][0];
                end = intervals[i][1];
            }else{
                end = Math.max(end, intervals[i][1]);
            }
        }
        list.add(new int[]{start, end});

        int[][] result = new int[list.size()][]; 
        for(int i = 0; i < list.size(); i++){
            result[i] = list.get(i);
        }

        return result;

    }
}
```





### [738. 单调递增的数字](https://leetcode.cn/problems/monotone-increasing-digits/)

![image-20230808123437326](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230808123437326.png)

```java
class Solution {
    public int monotoneIncreasingDigits(int n) {
        //当后一位比前一位小的时候，前一位-1，后面全变成9， 0其实不需要单独判断（思考）
        String str = n + "";
        char[] ch = str.toCharArray();
        int startNine = ch.length;
        for(int i = ch.length - 1; i > 0; i--){
            if(ch[i] < ch[i - 1]){
                startNine = i;
                ch[i - 1] --;
            }
        }

        for(int i = startNine; i < ch.length; i++){
            ch[i] = '9';
        }

        return Integer.parseInt(String.valueOf(ch));


    }
}
```





### [968. 监控二叉树](https://leetcode.cn/problems/binary-tree-cameras/)

![image-20230808123523792](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230808123523792.png)

![image-20230808214801556](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230808214801556.png)

![image-20230808214730432](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230808214730432.png)

![image-20230808214748263](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230808214748263.png)



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
    int result = 0;
    public int minCameraCover(TreeNode root) {
        if(root.left == null && root.right == null) return 1;
        //最后处理一下根节点
        if(post(root) == 0) result++;
        return result;
        


    }

    //0: 无覆盖 1：摄像头 2：有覆盖
    public int post(TreeNode root){
        if(root == null) return 2;
        int left = post(root.left);
        int right = post(root.right);
        //子节点有摄像头
        if(left == 1 || right == 1){
            root.val = 2;
        }
        //加摄像头
        if(left == 0 || right == 0){
            result++;
            root.val = 1; 
        }
        return root.val;

    }
}
```



