---
title: Ch10 More
date: 2023-08-22
tags:
 - Stack
categories:
 - Leetcode


---

# 

### [1365. 有多少小于当前数字的数字](https://leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number/)

![image-20230822234623167](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230822234623167.png)

+ 暴力

```java
class Solution {
    public int[] smallerNumbersThanCurrent(int[] nums) {
        int[] result = new int[nums.length];
        int tmp = 0;
        for(int i = 0; i < nums.length; i++){
            for(int j = 0; j < nums.length; j++){
                if(nums[j] < nums[i]) tmp ++;
            }
            result[i] = tmp;
            tmp = 0;
        }

        return result;

    }
}
```

+ Hash

```java
public int[] smallerNumbersThanCurrent(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>(); // 记录数字 nums[i] 有多少个比它小的数字
        int[] res = Arrays.copyOf(nums, nums.length);
        Arrays.sort(res);
        for (int i = 0; i < res.length; i++) {
            if (!map.containsKey(res[i])) { // 遇到了相同的数字，那么不需要更新该 number 的情况
                map.put(res[i], i);
            }
        }

        for (int i = 0; i < nums.length; i++) {
            res[i] = map.get(nums[i]);
        }

        return res;
    }
```

