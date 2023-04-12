---
title: Ch02 TreeMap
date: 2019-06-11
tags:
 - Data structure
categories:
 - Data structure


---

# TreeMap structure

特点：1.元素的key不能重复

​           2.元素会按照大小顺序排列

​           3.底层是红黑树

二叉平衡树旋转：![image-20230412111900388](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230412111900388.png)

![image-20230412111910973](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230412111910973.png)

map的put（）方法会返回被替换的值



get方法源码：

```java
final Entry<K,V> getEntry(Object key) {
        // Offload comparator-based version for sake of performance
        if (comparator != null)//如果有比较器，则用比较器进行比较
            return getEntryUsingComparator(key);
        if (key == null)//如果key是空，则抛异常
            throw new NullPointerException();
        @SuppressWarnings("unchecked")
            Comparable<? super K> k = (Comparable<? super K>) key;
        Entry<K,V> p = root;
        //两个结束条件：1.p为空，即遍历到叶节点还没找到对应key
        //             2.找到key，返回叶节点
        while (p != null) {
            int cmp = k.compareTo(p.key);
            if (cmp < 0)
                p = p.left;
            else if (cmp > 0)
                p = p.right;
            else
                return p;
        }
        return null;
    }
```



put方法：

```java
public V put(K key, V value) {
        Entry<K,V> t = root;
        if (t == null) {
            compare(key, key); // 对其进行非空和类型的判断

            root = new Entry<>(key, value, null);//新建一个根节点
            size = 1;//把集合的大小赋值为1
            modCount++;//把集合的修改次数+1
            return null;//因为没有覆盖值，所以返回null
        }
        int cmp;
        Entry<K,V> parent;
        // split comparator and comparable paths
        Comparator<? super K> cpr = comparator;
        if (cpr != null) {//如果有比较器(使用Comparator的比较方式)
            do {
                parent = t;//把根节点赋值给parent（parent比t晚一步）
                cmp = cpr.compare(key, t.key);
                if (cmp < 0)
                    t = t.left;
                else if (cmp > 0)
                    t = t.right;
                else
                    return t.setValue(value);//返回被覆盖的值
            } while (t != null);
        }
        else {//(逻辑同上，使用comparable的比较方式)
            if (key == null)
                throw new NullPointerException();
            @SuppressWarnings("unchecked")
                Comparable<? super K> k = (Comparable<? super K>) key;
            do {
                parent = t;
                cmp = k.compareTo(t.key);
                if (cmp < 0)
                    t = t.left;
                else if (cmp > 0)
                    t = t.right;
                else
                    return t.setValue(value);//覆盖
            } while (t != null);
        }
        Entry<K,V> e = new Entry<>(key, value, parent);
        if (cmp < 0)//新建节点，和parent比较
            parent.left = e;
        else
            parent.right = e;
        fixAfterInsertion(e);//红黑树的旋转，保证平衡
        size++;
        modCount++;
        return null;//由于没有覆盖值，返回null
    }
```

