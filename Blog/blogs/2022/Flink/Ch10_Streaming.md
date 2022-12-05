---
title: Ch09_Streaming
date: 2021-04-01
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink
---

# Streaming API(source)

1. 从集合中读取数据：

   ```java
   StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
   //从集合中读取数据，可以把类的对象封装成集合
   DataStream<String> collectionSource = env.fromCollection(Arrays.asList("aaa", "bbb", "ccc"));
   //直接读取元素
   DataStream<String> eleSource = env.fromElements("as", "sss", "sda");
   //输出,参数可以区别哪个输出
   collectionSource.print("collection");
   eleSource.print("element");
   
   //参数为jobname
   env.execute("jobone");
   ```

   要按照顺序输出可以在全局中设置并行度为1.

2. 从文件中读取数据：

   ```java
   DataStream<String> fileSource = env.readTextFile("path");
   ```

3. 自定义数据源：

   ```java
   DataStream<String> twitterSource = env.addSource(new V2source());
   ```

通过参数的collect方法来获取数据：

```java
public class V2source implements SourceFunction<String> {
    private boolean running = true;
    @Override
    public void run(SourceContext<String> sourceContext) throws Exception {
        InputStream stream = FilterTwitterStream.getStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(stream));
        String line = reader.readLine();
        while(running){
            while (line != null) {
                sourceContext.collect(line);
                line = reader.readLine();
            }
        }

    }

    @Override
    public void cancel() {
        running = false;

    }
}
```

