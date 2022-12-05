---
title: Ch04 Springboot & mongodb
date: 2022-11-17
tags:
 - MongoDB
 - DB
 - Springboot
categories:
 - MongoDB
---

## Springboot & mongodb

pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.7.5</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>demo</name>
    <description>demo</description>
    <properties>
        <java.version>11</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-mongodb</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```



记得在使用之前添加用户：

```js
use testdb
db.createUser(
     {
       user: "root",
       pwd: "123456",
       roles: ["readWrite"]
     }
)
```





application.yml

**密码记得加引号！！！**

```yml
spring:
  data:
    mongodb:
#      host: 124.220.33.202
#      database: testdb
#      port: 30003
#      username: root
#      password: "123456"
#密码记得加引号！！！
      uri: mongodb://root:123456@124.220.33.202:30003/testdb
      
```



实体类：

```java
package com.example.demo.po;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

/**
 * @author YHR
 * @date 17/11/2022 00:21:43
 * @description
 */

//把一个java类声明为mongodb的文档，可以通过collection参数指定这个类对应的文档。
//@Document(collection="mongodb 对应 collection 名")
// 若未加 @Document ，该 bean save 到 mongo 的 comment collection
// 若添加 @Document ，则 save 到 comment collection
@Document(collection="comment")//可以省略，如果省略，则默认使用类名小写映射集合
//复合索引
// @CompoundIndex( def = "{'userid': 1, 'nickname': -1}")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Comment {
    //主键标识,该属性的值会自动对应mongodb的主键字段"_id"，如果该属性名就叫“id”,则该注解可以省略，否则必须写
    @Id
    private String id;
    //添加了一个单字段的索引
    @Indexed
    //该属性对应mongodb的字段的名字，如果一致，则无需该注解
    @Field("userid")
    private String userid;
    @Field("parentid")
    private String parentid;//上级ID
    @Field("content")
    private String content;
    @Field("nickname")
    private String nickname;
    @Field("articleid")
    private String articleid;
    @Field("likenum")
    private int likenum;
    @Field("state")
    private String state;
    @Field("createdatetime")
    private LocalDateTime createdatetime;
    @Field("replynum")
    private Integer replynum;//回复数

}

```

说明：
索引可以大大提升查询效率，一般在查询字段上添加索引，索引的添加可以通过Mongo的命令来添加，也可以在Java的实体类中通过注解添
加。

+ 单字段索引注解@Indexed
  org.springframework.data.mongodb.core.index.Indexed.class
  声明该字段需要索引，建索引可以大大的提高查询效率。
  Mongo命令参考：

  ```js
  db.comment.createIndex({"userid":1})
  ```

+ 复合索引注解@CompoundIndex
  org.springframework.data.mongodb.core.index.CompoundIndex.class
  复合索引的声明，建复合索引可以有效地提高多字段的查询效率。
  Mongo命令参考：

  ```js
  db.comment.createIndex({"userid":1,"nickname":-1})
  ```

  



## CRUD



dao:

```java
package com.example.demo.dao;

import com.example.demo.po.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @author YHR
 * @date 17/11/2022 30:22:19
 * @description 第一个泛型是映射类，第二个是id的类型
 */
public interface CommentRepository extends MongoRepository<Comment, String> {
}

```





调用dao：

```java
package com.example.demo.service;

import com.example.demo.dao.CommentRepository;
import com.example.demo.po.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author YHR
 * @date 17/11/2022 51:22:20
 * @description
 */
//评论的业务层
@Service
public class CommentService {
    //注入dao
    @Autowired
    private CommentRepository commentRepository;
    /**
     * 保存一个评论
     * @param comment
     */
    public void saveComment(Comment comment){
//如果需要自定义主键，可以在这里指定主键；如果不指定主键，MongoDB会自动生成主键
//设置一些默认初始值。。。
//调用dao
        commentRepository.save(comment);
    }
    /**
     * 更新评论
     * @param comment
     */
    public void updateComment(Comment comment){
//调用dao
        commentRepository.save(comment);
    }
    /**
     * 根据id删除评论
     * @param id
     */
    public void deleteCommentById(String id){
//调用dao
        commentRepository.deleteById(id);
    }
    /**
     * 查询所有评论
     * @return
     */
    public List<Comment> findCommentList(){
//调用dao
        return commentRepository.findAll();
    }
    /**
     * 根据id查询评论
     * @param id
     * @return
     */
    public Comment findCommentById(String id){
//调用dao
        return commentRepository.findById(id).get();
    }
}
```



test类：

```java
package com.example.demo;

import com.example.demo.po.Comment;
import com.example.demo.service.CommentService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.util.List;

//SpringBoot的Junit集成测试
@RunWith(SpringRunner.class)
@SpringBootTest(classes = DemoApplication.class)
class DemoApplicationTests {

    //注入Service
    @Autowired
    private CommentService commentService;
    /**
     * 保存一个评论
     */
    @Test
    public void testSaveComment(){
        Comment comment=new Comment();
        comment.setArticleid("100000");
        comment.setContent("测试添加的数据");
        comment.setCreatedatetime(LocalDateTime.now());
        comment.setUserid("1003");
        comment.setNickname("凯撒大帝");
        comment.setState("1");
        comment.setLikenum(0);
        comment.setReplynum(0);
        commentService.saveComment(comment);
    }
    /**
     * 查询所有数据
     */
    @Test
    public void testFindAll(){
        List<Comment> list = commentService.findCommentList();
        System.out.println(list);
    }
    /**
     * 测试根据id查询
     */
    @Test
    public void testFindCommentById(){
        Comment comment = commentService.findCommentById("5d6a27b81b8d374798cf0b41");
        System.out.println(comment);
    }

}

```



## 根据上级ID查询文章评论的分页列表

CommentRepository新增方法定义

```java
//根据父id，查询子评论的分页列表, 注意parentid必须是在Comment里有的
Page<Comment> findByParentid(String parentid, Pageable pageable);
```



Service中调用

```java
/**
* 根据父id查询分页列表
* @param parentid
* @param page page -1 是因为page是从0开始，但是我们一般说第一页
* @param size
* @return
*/
public Page<Comment> findCommentListPageByParentid(String parentid,int page ,int size){
return commentRepository.findByParentid(parentid, PageRequest.of(page-1,size));
}
```



test:

```java
/**
* 测试根据父id查询子评论的分页列表
*/
@Test
public void testFindCommentListPageByParentid(){
Page<Comment> pageResponse = commentService.findCommentListPageByParentid("3", 1, 2);
System.out.println("----总记录数："+pageResponse.getTotalElements());
System.out.println("----当前页数据："+pageResponse.getContent());
}
```



## MongoTemplate实现评论点赞

我们看一下以下点赞的临时示例代码： CommentService 新增updateThumbup方法

```java
/**
* 点赞-效率低
* @param id
*/
public void updateCommentThumbupToIncrementingOld(String id){
	Comment comment = CommentRepository.findById(id).get();
	comment.setLikenum(comment.getLikenum()+1);
	CommentRepository.save(comment);
}
```

以上方法虽然实现起来比较简单，但是执行效率并不高，因为我只需要将点赞数加1就可以了，没必要查询出所有字段修改后再更新所有字段。(蝴蝶效应)
我们可以使用MongoTemplate类来实现对某列的操作。 

+ 修改CommentService

  ```java
  //注入MongoTemplate
  @Autowired
  private MongoTemplate mongoTemplate;
  ```

+ 调用：

  ```java
  cn.itcast.article.service.CommentServiceTest
  执行测试用例后，发现点赞数+1了：
  /**
  * 点赞数+1
  * @param id
  */
  public void updateCommentLikenum(String id){
  //查询对象,后面可以一直.addCriteria增加查询条件
  Query query=Query.query(Criteria.where("_id").is(id));
  //更新对象
  Update update=new Update();
  //局部更新，相当于$set
  // update.set(key,value)
  //递增$inc
  // update.inc("likenum",1);
  update.inc("likenum");
  //参数1：查询对象
  //参数2：更新对象
  //参数3：集合的名字或实体类的类型Comment.class
  mongoTemplate.updateFirst(query,update,"comment");
  }
  ```

+ 测试：

  ```java
  /**
  * 点赞数+1
  */
  @Test
  public void testUpdateCommentLikenum(){
  //对3号文档的点赞数+1
  commentService.updateCommentLikenum("3");
  }
  ```

  

