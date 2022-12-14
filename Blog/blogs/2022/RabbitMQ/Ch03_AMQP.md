---
title: Ch03 AMQP
date: 2022-11-30
tags:
 - RabbitMQ
 - MQ
categories:
 - RabbitMQ
---

![image-20221130112900840](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130112900840.png)



# Spring AMQP

# Simple queue

application.yml

```yml
spring:
  rabbitmq:
    host: 124.220.33.202
    port: 30608
    virtual-host: vhost
    username: admin
    password: 123456

```





## Provider

TestClass

```java
package com.example.consumer;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class ConsumerApplicationTests {

    @Autowired
    private RabbitTemplate rabbitTemplate;

//    @Test
//    void contextLoads() {
//    }
    @Test
    public void textMq(){
        String queueName = "simple.queue";
        String message = "hello from yhr";
        rabbitTemplate.convertAndSend(queueName, message);
    }

}

```

添加test方法快捷键 alt+insert



## Consumer

```java
package com.example.provider.listener;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

/**
 * @author YHR
 * @date 30/11/2022 29:13:46
 * @description
 */

@Component
public class SpringRabbitListener {

    @RabbitListener(queues = "simple.queue")
    public void listenSimpleQueue(String msg){
        System.out.println("get the message: " + msg);

    }
}

```



![image-20221130135010507](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130135010507.png)



# Work queue

多个消费者同时处理消息

![image-20221130140653196](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130140653196.png)

如果不配置消息预取消息会平分，不管处理能力如何

![image-20221130140714349](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130140714349.png)

![image-20221130140906771](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130140906771.png)



# Publish/Subscribe

## Fanout

![image-20221130141450037](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130141450037.png)



![image-20221130141710471](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130141710471.png)

![image-20221130141813525](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130141813525.png)

```java
package com.example.consumer.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author YHR
 * @date 30/11/2022 08:14:19
 * @description
 */

@Configuration
public class FanoutConfig {
    //fanout
    @Bean
    public FanoutExchange fanoutExchange(){
        return new FanoutExchange("yhr.fanout");
    }

    //queue1
    @Bean
    public Queue queue1(){
        return new Queue("yhr.queue1");
    }

    //queue2
    @Bean
    public Queue queue2(){
        return new Queue("yhr.queue2");
    }

    //bind fanout with queue1 and queue2
    @Bean
    public Binding binding1(Queue queue1, FanoutExchange fanoutExchange){
        return BindingBuilder
                .bind(queue1)
                .to(fanoutExchange);
    }

    @Bean
    public Binding binding2(Queue queue2, FanoutExchange fanoutExchange){
        return BindingBuilder
                .bind(queue2)
                .to(fanoutExchange);
    }
}

```



Listener:

```java
@RabbitListener(queues = "yhr.queue1")
    public void listenFanoutQueue1(String msg){
        System.out.println("get the message from yhr.queue1 : " + msg);

    }
    @RabbitListener(queues = "yhr.queue2")
    public void listenFanoutQueue2(String msg){
        System.out.println("get the message from yhr.queue2 : " + msg);

    }
```



publisher:

```java
    @Test
    void testFanoutPublish() {
        String exchangeName = "yhr.fanout";
        String msg = "Hello, everyone! I'm bubu";
        rabbitTemplate.convertAndSend(exchangeName, "", msg);
    }

```

![image-20221130143017562](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130143017562.png)



## DirectExchange

![image-20221130143850194](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130143850194.png)



### 接受

```java
@RabbitListener(bindings = @QueueBinding(
        value = @Queue(name = "direct.queue1"),
        exchange = @Exchange(name = "yhr.direct", type = ExchangeTypes.DIRECT),
        key = {"red", "blue"}))
public void directQueue1(String msg){
    System.out.println("DirectQueue1: " + msg);

}

@RabbitListener(bindings = @QueueBinding(
        value = @Queue(name = "direct.queue2"),
        exchange = @Exchange(name = "yhr.direct", type = ExchangeTypes.DIRECT),
        key = {"red","yellow"}))
public void directQueue2(String msg){
    System.out.println("DirectQueue2: " + msg);

}
```



### 发送

```java

    @Test
    void testDirectPublish() {
        String exchangeName = "yhr.direct";
        String msg = "Hello, everyone! I'm red";
        rabbitTemplate.convertAndSend(exchangeName, "red", msg);
    }
```

![image-20221130145828173](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130145828173.png)



## TopicExchange（在listener中声明queue）

![image-20221130150202865](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130150202865.png)

![image-20221130150216332](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130150216332.png)

+ 代码提示ctrl+p



### 发送

```java
@Test
    void testTopicPublish() {
        String exchangeName = "yhr.topicExchange";
        String msg = "Hello, everyone! I'm man.yang";
        rabbitTemplate.convertAndSend(exchangeName, "man.hao", msg);
    }
```



### 接受

```java
@RabbitListener(bindings = @QueueBinding(
            value = @Queue(name = "topicExchange.queue1"),
            exchange = @Exchange(name = "yhr.topicExchange", type = ExchangeTypes.TOPIC),
            key = "man.#"))
    public void topicExchangeQueue1(String msg){
        System.out.println("TopicExchangeQueue1: " + msg);

    }
    @RabbitListener(bindings = @QueueBinding(
            value = @Queue(name = "topicExchange.queue2"),
            exchange = @Exchange(name = "yhr.topicExchange", type = ExchangeTypes.TOPIC),
            key = "man.hao"))
    public void topicExchangeQueue2(String msg){
        System.out.println("TopicExchangeQueue2: " + msg);

    }
```





# Send Object to queue

![ ](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130152401445.png)

![image-20221130152418103](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130152418103.png)

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.14.1</version>
</dependency>
```



### 发送

```java
@SpringBootApplication
public class PublisherApplication {

    public static void main(String[] args) {
        SpringApplication.run(PublisherApplication.class, args);
    }

    @Bean
    public MessageConverter messageConverter(){
        return new Jackson2JsonMessageConverter();
    }

}
```

```java
   @Test
    void testObjectPublish(){
        Map<String, Object> msg = new HashMap<>();
        msg.put("name", "yang");
        msg.put("age", 23);
        rabbitTemplate.convertAndSend("ObjectQueue", msg);

    }
```



### 接受

```java
 @RabbitListener(queues = "ObjectQueue")
    public void objectListener(Map<String, Object> msg){
        System.out.println("ObjectMessage: " + msg);
        
    }
```



![image-20221130153525902](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221130153525902.png)

https://github.com/0YHR0/SpringAMQP-rabbitmq-template
