---
title: Ch12 KMP
date: 2020-04-02
tags:
 - Algorithm
categories:
 - Algorithm


---

# KMP

**两个字符串匹配问题，返回匹配到的第一个字符串的下标**

暴力匹配法：

```java
public class ViolanceMatch {

	public static void main(String[] args) {
		String a = "abcbcbcd";
		String b = "bcd";
		int i = violance(a, b);
		System.out.println(i);

	}
	
	public static int violance(String a,String b) {
		char[] c1 = a.toCharArray();
		char[] c2 = b.toCharArray();
		
		int i = 0;
		int j = 0;
		
		while(i < c1.length && j < c2.length) {
			if(c1[i] == c2[j]) {
				i++;
				j++;
			}
			else {
				i = i - j + 1;
				j = 0;
			}
		}
		if(j == c2.length) {
			return i - j;
		}
		else {
			return -1;
		}
	}

}

```



KMP

https://www.cnblogs.com/zzuuoo666/p/9028287.html

KMP算法关键在于，每次匹配失败不是往后移一位，而是根据部分匹配表来决定后移的位数，故效率比较高

部分匹配表的生成原理：

![image-20230425012800701](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230425012800701.png)



因为模式串中首尾可能会有重复的字符，故可得出下述结论：

> 失配时，模式串向右移动的位数为：已匹配字符数 - 失配字符的上一位字符所对应的最大长度值



直接用表算

```java
public class KMP {
    //部分匹配表
    static int next[];

    public static void main(String[] args) {
        String a = "BBCABCDABABCDABCDABDE";
        String b = "ABCDABD";
        next = new int[b.length()];
        System.out.println("部分匹配表：");
        int result = kmp(a,b);
        for(int i: next) {
            System.out.print(i + " ");
        }
        System.out.println("匹配结果： " + result);

    }
    //kmp算法
    public static int kmp(String a,String b) {
        char[] c = a.toCharArray();
        char[] d = b.toCharArray();
        //获取部分匹配表
        for(int i = 1; i <= d.length;i++) {
            getNext(b.substring(0, i));
        }
        //匹配算法
        int i = 0;
        int j = 0;
        while(i < c.length && j < d.length) {
            if(c[i] == d[j]) {
                i++;
                j++;
                System.out.println("success  j = " + j);
            }
            else {
                i ++;
                System.out.println("fail  i = " + i);
                System.out.println("fail  j = " + j);
                if (j == 0) {
                    continue;
                }
                j = next[j - 1];
            }
        }
        if(j == d.length) return i - j;
        else {
            return -1;
        }

    }
    //获取部分匹配表中的一项
    public static void getNext(String a) {
        int max = 0;
        for(int i = 1; i < a.length(); i++) {
            String x = a.substring(0, i);//获取前缀
            String y = a.substring(a.length() - i);//获取后缀
            if(x.equals(y)) {
                if(max < x.length()) {
                    max = x.length();//获取前缀等于后缀的最大位数
                }
            }
        }
        next[a.length() - 1] =  max;//
    }

}
```

