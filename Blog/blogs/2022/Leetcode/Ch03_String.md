---
title: Ch03 String
date: 2023-07-13
tags:
 - String
categories:
 - Leetcode

---



### 344.反转字符串

![image-20230713173224189](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230713173224189.png)

```java
class Solution {
    public void reverseString(char[] s) {
        for(int i = 0; i < s.length; i++){
            if(i < s.length - 1 - i){
                char tmp = s[i];
                s[i] = s[s.length - 1 - i];
                s[s.length - 1 - i] = tmp;
            }
            
        }

    }
}
```



char[] 转 String

String s  = new String(char[]);



### 541. 反转字符串II

![image-20230713232418803](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230713232418803.png)

```java
class Solution {
    public String reverseStr(String s, int k) {
        String result = "";
        for(int i = k; i <= s.length(); i += k){
            if((i / k) % 2 == 1){
                result += myReverse(s.substring(i - k, i));
            }else{
                result += s.substring(i - k, i);
            }
        }

        //末尾
        
        String last = s.substring((s.length() / k) * k);
        if((s.length() / k) % 2 == 1){
            //不反转
            result += last;

        }else{
            result += myReverse(last);

        }
        return result;


    }

    private String myReverse(String s){
        char[] tmp = new char[s.length()];
        for(int i = 0; i < s.length(); i++){
            tmp[s.length() - i - 1] = s.charAt(i);
        }
        return new String(tmp);
    }
}
```

![image-20230714000408520](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230714000408520.png)





### 剑指offer 05. 替换空格

![image-20230714112100132](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230714112100132.png)

暴力方法

```java
class Solution {
    public String replaceSpace(String s) {
        char[] tmp = s.toCharArray();
        String result = "";
        for(int i = 0; i < tmp.length; i++){
            if(tmp[i] != ' '){
                result += String.valueOf(tmp[i]);
            }else{
                result += "%20";
            }
        }
        return result;

    }
}
```

![image-20230714113335290](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230714113335290.png)

```java
class Solution {
    public String replaceSpace(String s) {
       //统计空格个数
       int count = 0;
       for(int i = 0; i < s.length(); i++){
           if(s.charAt(i) == ' '){
               count++;
           }
       }

        String result = s;
       //扩容
       for(int i = 0; i < count; i++){
           result += "  ";
       }

       //双指针填充
       int left = s.length() - 1;
       int right = result.length() - 1;
       char[] tmp = result.toCharArray();
       while(left < right){
           if(tmp[left] == ' '){
               tmp[right --] = '0';
               tmp[right --] = '2';
               tmp[right --] = '%';
           }else{
               tmp[right --] = tmp[left];
           }
           left --;
       }

       return new String(tmp);

    }
}
```





### 151.翻转字符串里的单词

![image-20230714115612867](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230714115612867.png)

![image-20230715134532953](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230715134532953.png)

```java
class Solution {
    public String reverseWords(String s) {
        String[] tmp = s.split(" ");
        if(tmp.length == 0){
            return "";
        }
        StringBuilder result = new StringBuilder();
        for(int i = tmp.length - 1; i >= 0; i--){
            //注意这边要判断
            if(tmp[i] != ""){
                result.append(tmp[i]);
                result.append(" ");
            }
            
        }

        String finalResult = result.toString();
        return finalResult.substring(0, finalResult.length() - 1);

    }
}
```



不使用库函数

```java
class Solution {
   /**
     * 不使用Java内置方法实现
     * <p>
     * 1.去除首尾以及中间多余空格
     * 2.反转整个字符串
     * 3.反转各个单词
     */
    public String reverseWords(String s) {
        // System.out.println("ReverseWords.reverseWords2() called with: s = [" + s + "]");
        // 1.去除首尾以及中间多余空格
        StringBuilder sb = removeSpace(s);
        // 2.反转整个字符串
        reverseString(sb, 0, sb.length() - 1);
        // 3.反转各个单词
        reverseEachWord(sb);
        return sb.toString();
    }

    private StringBuilder removeSpace(String s) {
        // System.out.println("ReverseWords.removeSpace() called with: s = [" + s + "]");
        int start = 0;
        int end = s.length() - 1;
        while (s.charAt(start) == ' ') start++;
        while (s.charAt(end) == ' ') end--;
        StringBuilder sb = new StringBuilder();
        while (start <= end) {
            char c = s.charAt(start);
            if (c != ' ' || sb.charAt(sb.length() - 1) != ' ') {
                sb.append(c);
            }
            start++;
        }
        // System.out.println("ReverseWords.removeSpace returned: sb = [" + sb + "]");
        return sb;
    }

    /**
     * 反转字符串指定区间[start, end]的字符
     */
    public void reverseString(StringBuilder sb, int start, int end) {
        // System.out.println("ReverseWords.reverseString() called with: sb = [" + sb + "], start = [" + start + "], end = [" + end + "]");
        while (start < end) {
            char temp = sb.charAt(start);
            sb.setCharAt(start, sb.charAt(end));
            sb.setCharAt(end, temp);
            start++;
            end--;
        }
        // System.out.println("ReverseWords.reverseString returned: sb = [" + sb + "]");
    }

    private void reverseEachWord(StringBuilder sb) {
        int start = 0;
        int end = 1;
        int n = sb.length();
        while (start < n) {
            while (end < n && sb.charAt(end) != ' ') {
                end++;
            }
            reverseString(sb, start, end - 1);
            start = end + 1;
            end = start + 1;
        }
    }
}
```





### 剑指Offer58-II.左旋转字符串

![image-20230714152207499](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230714152207499.png)

![image-20230714152901861](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230714152901861.png)



解法2：

![image-20230715140955097](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230715140955097.png)



```java
class Solution {
    public String reverseLeftWords(String s, int n) {
        String result = "";
        result += s.substring(n);
        result += s.substring(0, n);
        return result;

    }
} 
```





### 28. 实现 strStr() KMP



![image-20230714162333307](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230714162333307.png)

![image-20230714162406234](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230714162406234.png)



![](https://code-thinking.cdn.bcebos.com/gifs/KMP%E7%B2%BE%E8%AE%B22.gif)



难点（主要难在求next数组）： KMP算法

![image-20230715003358585](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230715003358585.png)

```java
class Solution {
    public int strStr(String haystack, String needle) {
        //求next数组
        int[] next = getNext(needle);

        //开始遍历
        int hayIndex = 0;
        int needleIndex = 0;
        while(needleIndex < needle.length() && hayIndex < haystack.length()){
            if(haystack.charAt(hayIndex) == needle.charAt(needleIndex)){
                hayIndex ++;
                needleIndex ++;
            }else{
                if(needleIndex > 0){
                    needleIndex = (next[needleIndex - 1]);
                }else{
                    hayIndex ++;
                }
            }
        }
        if(needleIndex == needle.length()){
            return hayIndex - needleIndex;
        }
        return -1;
    }

     public int[] getNext(String needle){
        int[] next = new int[needle.length()];
        next[0] = 0;
        //i: 后缀末尾， j:前缀末尾
        int j = 0;
        for(int i = 1; i < needle.length(); i++){
            //不匹配,难点
            while(j > 0 && needle.charAt(i) != needle.charAt(j)){
                j = next[j - 1];
            }
            //匹配
            if(needle.charAt(i) == needle.charAt(j)){
                j++;
                next[i] = j;
            }

            //如果j等于0，则i++
        }

        return next;
    }

}
```





### 459.重复的子字符串

![image-20230715003835952](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230715003835952.png)

```java
class Solution {
    public boolean repeatedSubstringPattern(String s) {
        int length = s.length();
        for1: for(int i = 1; i < (length / 2) + 1; i++){
            if(length % i == 0){
                //子串有i个字母
                //子串之间的循环
                for(int j = 0; j < length; j += i){
                    //子串内的循环
                    for(int k = 0; k < i; k++){
                        if(s.charAt(k) != s.charAt(k + j)){
                            continue for1;
                        }
                    }
                }
                return true;
            }
        }
        return false;

    }
}
```

移动匹配

![image-20230715122319476](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230715122319476.png)



```java
class Solution {
    public boolean repeatedSubstringPattern(String s) {
       String str = s + s;
       String tmp = str.substring(1, str.length() - 1);
       return tmp.contains(s);
    }
}
```

前缀：不包含第一个字母

后缀：不包含最后一个字母

最小重复子串是：最长相等前后缀不包含的那一部分（用KMP算法的next数组的最后一位求得）





