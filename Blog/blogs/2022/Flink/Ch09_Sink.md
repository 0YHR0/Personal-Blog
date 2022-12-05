---
title: Ch09_Sink
date: 2021-03-30
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink

---

# Sink

JDBC:

```java
twitterSource.addSink(new MysqlSink());
```

open和close方法只会执行一次，每次数据来之后都会执行invoke函数，所以一般数据库链接和sql语句框架预编译都在open和close中完成

```java
/**
 * use the connection pool to get the connection,because several thread will connect to the mysql
 */
public static class MysqlSink extends  RichSinkFunction<String> {
    private static ComboPooledDataSource ds = null;
    private static Connection conn = null;
    private static PreparedStatement ps = null;

    //get the connection pool
    static{
        try{
            ds = new ComboPooledDataSource("mysql");
        }catch (Exception e) {
            throw new ExceptionInInitializerError(e);
        }

    }

    @Override
    public void open(Configuration parameters) throws Exception {
        conn = ds.getConnection();
        String sql = "Insert INTO test (id,data) values (default,?)";
        ps = conn.prepareStatement(sql);
    }

    @Override
    public void close() throws Exception {
        ps.close();
        conn.close();
    }

    @Override
    public void invoke(String value, Context context) throws Exception {
        ps.setObject(1, value);
        int result = ps.executeUpdate();
        if(result == 0){
            throw new Exception("update mysql failed");
        }


    }
}
```



