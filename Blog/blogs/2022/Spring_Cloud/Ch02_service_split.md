---
title: Ch02 Service split
date: 2022-04-10
tags:
 - Java
 - Spring Cloud
categories:
 - Spring Cloud

---

# Ch02 Service split



服务拆分：![image-20220410115352698](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410115352698.png)



### 例：![image-20220410171524498](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410171524498.png)

​	Order和User两个服务，各自有独立的数据库

​	在Order中要调用user信息，则需要在order服务中对User服务发起http请求：![image-20220410171837009](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/markdown/image-20220410171837009.png)



在Spring中提供了一个工具：RestTemplate，在order service的配置类中创建这个类，并注入：

```java
@MapperScan("cn.itcast.order.mapper")
@SpringBootApplication
public class OrderApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderApplication.class, args);
    }
    /**
     * 创建Rest template并注入容器
     * @return
     */
    @Bean
    public RestTemplate restTemplate(){
        return new RestTemplate();
    }

}
```



使用RestTemplate向其他服务发请求，在service中发http请求：

```java
@Service
public class OrderService {

    @Autowired
    private OrderMapper orderMapper;
    @Autowired
    private RestTemplate restTemplate;

    public Order queryOrderById(Long orderId) {
        // 1.查询订单
        Order order = orderMapper.findById(orderId);
        // 2. 利用restTemplate发起http请求，查询用户
        // 2.1 获取查询用户的url
        String url = "http://localhost:8081/user/" + order.getUserId();
        // 2.2 发起http请求,get, 第一个参数是url，第二个参数是返回值类型
        User user = restTemplate.getForObject(url, User.class);
        // 3. 封装user到order中
        order.setUser(user);
        // 4.返回
        return order;
    }
}
```



