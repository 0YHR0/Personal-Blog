---
title: Ch04 @ControllerAdvice
date: 2020-01-25
tags:
 - Java
 - Spring
categories:
 - SpringMVC

---

# @ControllerAdvice

Controller增强器，作用是给Controller控制器添加统一的操作或处理

## **用法一：异常处理，见ch02**

## **用法二：使用@initbinder绑定自定义参数**

对于@InitBinder，该注解的主要作用是绑定一些自定义的参数。一般情况下我们使用的参数通过@RequestParam，@RequestBody或者@ModelAttribute等注解就可以进行绑定了，但对于一些特殊类型参数，比如Date，它们的绑定Spring是没有提供直接的支持的，我们只能为其声明一个转换器，将request中字符串类型的参数通过转换器转换为Date类型的参数，从而供给@RequestMapping标注的方法使用。



**自定义一个时间转换器来识别前端传进来的时间：**

```java
@ControllerAdvice
public class ThreeControllerAdvice {

    @InitBinder
    public void initbinder(ServletRequestDataBinder binder){
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        binder.registerCustomEditor(Date.class, new CustomDateEditor(format, true));
    }
}
```

测试：

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153618138.png" alt="image-20230426153618138" style="zoom:33%;" />

url：

![image-20230426153633730](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153633730.png)



解决前端传回的null值导致报错问题：自己写一给数据绑定器来判空：

```java
public class TestController {
 @InitBinder
    public void initBinder(ServletRequestDataBinder binder) {
        /*** 自动转换日期类型的字段格式
         */
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        binder.registerCustomEditor(Date.class,new DateEditor());
    }
 
    private class DateEditor extends PropertyEditorSupport {
        @Override
        public void setAsText(String text) throws IllegalArgumentException {
            //转换yyyy-MM-dd HH:mm:ss格式数据
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = null;
			//如果不为空就格式化
			 if(!StringUtils.isEmpty(text)){
				try {
						date = format.parse(text);
				} catch (ParseException e) {
					//转换为yyyy-MM-dd格式数据
					format = new SimpleDateFormat("yyyy-MM-dd");
					try {
						date = format.parse(text);
					} catch (ParseException e1) {
					}
				}
			}
            setValue(date);
        }
    }
}
```



## **用法三：使用@ModelAttribute进行全局变量绑定**

![image-20230426153728943](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153728943.png)



## 用法四：全局数据预处理

如果有两个实体类都有name属性，前端传过来的时候没法处理;

```java
public class Book {
    private String name;
    private Long price;
    //getter/setter
}
public class Author {
    private String name;
    private Integer age;
    //getter/setter
}
```

可以用@Initbinder来数据预处理

先用ModelAttribute给变量取别名

![image-20230426153810788](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426153810788.png)



