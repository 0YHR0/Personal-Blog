---
title: Ch05_Q&A
date: 2021-03-06
tags:
 - Flink
 - Java
 - BigData
categories:
 - Flink


---

# Q&A

---

Property读取示例（访问resources目录下的文件）：

```java
public static void main(String[] args) throws IOException {
    Properties properties = new Properties();
    properties.load(ClassLoader.getSystemClassLoader().getResourceAsStream("db.properties"));
    System.out.println(properties.getProperty("username"));

}
```

---

把string用json的方式解析：

```java
ObjectMapper jsonParser = new ObjectMapper();
JsonNode node = jsonParser.readValue(str, JsonNode.class);
//node为文件的根节点
```

---

maven项目导入jdbc驱动：在pom文件中添加依赖

```xml
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.15</version>
</dependency>
```

---

DBUtils:

```java
package utils;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 * A Tool class which used to get the connection of DB
 * @author Yang Haoran
 */
public class DBUtil {
    private static Connection conn;
    private static ThreadLocal<Connection> threadLocal = new ThreadLocal<Connection>();
    private static String driver;
    private static String url;
    private static String username;
    private static String password;

    /**
     * Load the configuration file.
     */
    static {
        Properties props = new Properties();
        try {
            props.load(ClassLoader.getSystemClassLoader().getResourceAsStream("db.properties"));
            driver = props.getProperty("driver");
            url = props.getProperty("url");
            username = props.getProperty("username");
            password = props.getProperty("password");

            Class.forName(driver);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * Get the connection which is bind to the client.
     * @return A datasource connection.
     */
    public static Connection getConnection() {
        try {
            if (conn == null) {
                threadLocal.set(DriverManager.getConnection(url, username, password));
            }
            conn = threadLocal.get();
        } catch (SQLException e) {
            System.out.println("Fail to get the connection!");
            e.printStackTrace();
        }
        return conn;
    }

    /**
     * Close the bind connection.
     * @param resultSet The result of the sql query from the DB.
     * @param statement The sql statement.
     * @param conn The DB connection.
     */
    public static void close(ResultSet resultSet, Statement statement, Connection conn) {
        try {
            if (resultSet != null) resultSet.close();
            if (statement != null) statement.close();
            if (conn != null) {
                conn.setAutoCommit(true);
                threadLocal.remove();
                conn.close();
                conn = null;
            }
        } catch (SQLException e) {
            System.out.println("Fail to close the resources!");
            e.printStackTrace();
        }

    }

    /**
     * Start the transaction.
     * @throws SQLException
     */
    public static void startTx() throws SQLException {
        conn = getConnection();

        if (conn != null) {
            conn.setAutoCommit(false);
        }
    }

    /**
     * Commit the transaction.
     * @throws SQLException
     */
    public static void commitTx() throws SQLException {
        conn = getConnection();

        if (conn != null) {
            conn.commit();
        }
    }

    /**
     * Rollback the transaction
     * @throws SQLException
     */
    public static void rollbackTx() throws SQLException {
        conn = getConnection();

        if (conn != null) {
            conn.rollback();
        }
    }

    /**
     * Execute the general update sql statement.
     * @param sql The sql statement.
     * @param args The parameters of the statement.
     * @return The result of influenced rows.
     * @throws SQLException
     */
    public static int executeUpdate(String sql, Object... args) throws SQLException {
        conn = getConnection();
        PreparedStatement ps = null;
        try {
            ps = conn.prepareStatement(sql);
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i + 1, args[i]);
            }
            return ps.executeUpdate();
        } finally {
            close(null, ps, null);
        }
    }

    /**
     * Execute the general query statement.
     * @param sql The sql statement.
     * @param rowMapper A mapper which is used to encapsulate the data from the DB.
     * @param args The parameters of the statement.
     * @param <T> The type of queried object.
     * @return The result of influenced rows.
     * @throws SQLException
     */
    public static <T> List<T> executeQuery(String sql, RowMapper<T> rowMapper, Object... args) throws SQLException {
        conn = getConnection();
        PreparedStatement ps = null;
        ResultSet rs = null;
        List<T> res = new ArrayList<T>();
        try {
            ps = conn.prepareStatement(sql);
            for (int i = 0; i < args.length; i++) {
                ps.setObject(i + 1, args[i]);
            }
            rs = ps.executeQuery();
            while (rs.next()) {
                res.add(rowMapper.getRowMapper(rs));
            }
        } finally {
            close(rs, ps, null);
        }
        return res;
    }

}
```



test:

```java
String sql = "INSERT into hashtag_status (id, hashtag, location, count) values (default, ?,?,?)";
System.out.println(DBUtil.executeUpdate(sql, "yang","China Shanghai", 10));
```

