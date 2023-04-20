---
title: Ch10 Greed算法
date: 2019-07-28
tags:
 - Algorithm
categories:
 - Algorithm



---

# Greed算法

![image-20230421004407651](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230421004407651.png)

![image-20230421004442175](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230421004442175.png)

```java
package greedy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class GreedyBroadcast {

	public static void main(String[] args) {
		//用来存放最后的结果
		ArrayList<String> result = new ArrayList<String>();
		//用来存放所有的电台,第一个为电台号，第二个为覆盖地区集合
		HashMap<String, HashSet<String>> broadcast = new HashMap<String, HashSet<String>>();
		//用来存放还需要覆盖的地区
		HashSet<String> allareas = new HashSet<String>();
		allareas.add("A");
		allareas.add("B");
		allareas.add("C");
		allareas.add("D");
		allareas.add("E");
		allareas.add("F");
		//第一个电台，覆盖ACD
		HashSet<String> first = new HashSet<String>();
		first.add("A");
		first.add("C");
		first.add("D");
		broadcast.put("first", first);
		//第二个电台，覆盖EF
		HashSet<String> second = new HashSet<String>();
		second.add("E");
		second.add("F");
		broadcast.put("second", second);
		//第三个电台，覆盖A
		HashSet<String> third = new HashSet<String>();
		third.add("A");
		broadcast.put("third", third);
		//第四个电台，覆盖BCD
		HashSet<String> fourth = new HashSet<String>();
		fourth.add("B");
		fourth.add("C");
		fourth.add("D");
		broadcast.put("fourth", fourth);
		
		//贪心算法
		//存放maxkey的值
		HashSet<String> select = new HashSet<String>();
		String maxkey = null;
		HashSet<String> temp = new HashSet<String>();
		while(allareas.isEmpty() != true) {
			System.out.println("1111");
			maxkey = null;
			for(String key: broadcast.keySet()) {
				System.out.println("for:   " + key);
				temp.clear();
				//存放当前电台多覆盖的地区
				temp.addAll(broadcast.get(key));
				temp.retainAll(allareas);
				if(maxkey == null || select.size() < temp.size()) {
					maxkey = key;
				}
				select.clear();
				select.addAll(broadcast.get(maxkey));
				select.retainAll(allareas);
			}
			result.add(maxkey);
			select.addAll(broadcast.get(maxkey));
			allareas.removeAll(broadcast.get(maxkey));
		}
		
		for(String re:result) {
			System.out.println(re);
		}

	}

}

```

