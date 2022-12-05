---
title: Ch04_Example
date: 2021-03-05
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink

---

# Example for counting number

batch processing：

```java
import org.apache.flink.api.common.functions.FlatMapFunction;
import org.apache.flink.api.java.DataSet;
import org.apache.flink.api.java.ExecutionEnvironment;
import org.apache.flink.api.java.tuple.Tuple2;
import org.apache.flink.util.Collector;

//batch processing test
public class Wordcount_batch {
    public static void main(String[] args) throws Exception {
        //创建运行环境
        ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment();
        String inputpath = "D:\\hashtag-Flink\\src\\main\\resources\\test.txt";
        DataSet<String> inputsource = env.readTextFile(inputpath);
        //处理数据，使数据输出位一个二元组(word,1)进行统计
        DataSet<Tuple2<String,Integer>> resultSet = inputsource.flatMap(new MyFlatMapper())
                   .groupBy(0)//按照第一个位置的word分组
                   .sum(1);//把第二个位置的数字求和

        resultSet.print();


    }
    //自定义类，实现flatmapfunction接口，注意接口中的泛型
    public static class MyFlatMapper implements FlatMapFunction<String, Tuple2<String,Integer>>{

        public void flatMap(String s, Collector<Tuple2<String, Integer>> collector) throws Exception {
            String[] words = s.split(" ");
            //遍历所有word，包装成二元组进行输出
            for(String str:words){
                collector.collect(new Tuple2<String, Integer>(str,1));
            }

        }
    }


}
```



stream processing:

```java
import org.apache.flink.api.java.tuple.Tuple2;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;

public class Wordcount_stream {
    public static void main(String[] args) throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        //设置并行度
        env.setParallelism(4);
        String inputpath = "D:\\hashtag-Flink\\src\\main\\resources\\test.txt";
//        DataStream<String> inputSource= env.readTextFile(inputpath);
        //从服务器获取流数据
        DataStream<String> inputSource= env.socketTextStream("47.100.46.122",7777);

        //keyBy 根据string的hashcode进行重分区
        DataStream<Tuple2<String, Integer>> resultStream
                = inputSource.flatMap(new Wordcount_batch.MyFlatMapper()).keyBy(0).sum(1);
        //output
        resultStream.print();

        //执行任务
        env.execute();
        //默认并行度为cpu核心数，可以理解为多线程同时操作，即多个分区同时处理
        //result:
        //1> (ok!,1)
        //4> (are,1)
        //5> (you,1)
        //5> (world,1)
        //6> (how,1)
        //3> (hello,1)
        //3> (I,1)
        //2> (yang,1)
        //3> (hello,2)
        //2> (am,1)
    }


}
```



