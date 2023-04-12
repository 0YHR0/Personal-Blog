---
title: Ch01 Dutch Flag
date: 2019-07-01
tags:
 - Algorithm
categories:
 - Algorithm
---

# Dutch Flag

荷兰国旗是由红白蓝3种颜色的条纹拼接而成，如下图所示：

![image-20230412115317305](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230412115317305.png)

我们把荷兰国旗问题用数组的形式表达一下是这样的：

给定一个整数数组，给定一个值K，这个值在原数组中一定存在，要求把数组中小于K的元素放到数组的左边，大于K的元素放到数组的右边，等于K的元素放到数组的中间，最终返回一个整数数组，其中只有两个值，分别是等于K的数组部分的左右两个下标值。

例如，给定数组：[2, 3, 1, 9, 7, 6, 1, 4, 5]，给定一个值4，那么经过处理原数组可能得一种情况是：[2, 3, 1, 1, 4, 9, 7, 6, 5]，需要注意的是，小于4的部分不需要有序，大于4的部分也不需要有序，返回等于4部分的左右两个下标，即[4, 4]

- less 用于记录小于 4 的区域的右下标，初始为-1，代表不存在
- more 用于记录大于 4 区域的左下标，初始为9，代表不存在
- L 用于正在遍历的元素的下标，初始值为0
- 从 arr[L] 即 arr[0] 开始遍历数组

​                    如果 arr[L] > 4, 交换 arr[++ less] 和 arr[L++] 的值

​                    如果 arr[L] < 4, 交换 arr[--more] 和 arr[L] 的值

​                    如果 arr[L] = 4, 不交换，L++，直接遍历下一个值

- 当 L >= more，退出循环。

```java
public static int[] partition(int[] arr, int L, int R, int p) {
    int less = L - 1;
    int more = R + 1;
    while(L < more) {
        if(arr[L] < p) {
            swap(arr, ++less, L++);
        } else if (arr[L] > p) {
            swap(arr, --more, L);//注意这边l不需要加，因为是单向扫描
        } else {
            L++;
        }
    }
    return new int[] { less + 1, more - 1 };
}

public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```

