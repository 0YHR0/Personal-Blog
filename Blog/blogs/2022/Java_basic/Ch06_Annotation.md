---
title: Ch06_Annotation
date: 2019-04-20
tags:
 - Java
categories:
 - Java



---

# Annotation



Java 定义了一套注解，共有 7 个，3 个在 java.lang 中，剩下 4 个在 java.lang.annotation 中。
1、作用在代码的注解是

- `@Override` - 检查该方法是否是重写方法。如果发现其父类，或者是引用的接口中并没有该方法时，会报编译错误。
- `@Deprecated` - 标记过时方法。如果使用该方法，会报编译警告。
- `@SuppressWarnings` - 指示编译器去忽略注解中声明的警告。

2、作用在其他注解的注解(或者说**元注解**)是:

- `@Retention` - 标识这个注解怎么保存，是只在代码中，还是编入class文件中，或者是在运行时可以通过反射访问。
- `@Documented` - 标记这些注解是否包含在用户文档中。
- `@Target` - 标记这个注解应该是哪种 Java 成员。
- `@Inherited` - 标记这个注解是继承于哪个注解类(默认 注解并没有继承于任何子类)

3、从 Java 7 开始，额外添加了 3 个注解:

- `@SafeVarargs` - Java 7 开始支持，忽略任何使用参数为泛型变量的方法或构造函数调用产生的警告。
- `@FunctionalInterface` - Java 8 开始支持，标识一个匿名函数或函数式接口。
- `@Repeatable` - Java 8 开始支持，标识某注解可以在同一个声明上使用多次。

**1、Annotation 架构**

![image-20230426215109364](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426215109364.png)

从中，我们可以看出：

**(1) 1 个 Annotation 和 1 个 RetentionPolicy 关联。**

可以理解为：每1个Annotation对象，都会有唯一的RetentionPolicy属性。

**(2) 1 个 Annotation 和 1~n 个 ElementType 关联。**

可以理解为：对于每 1 个 Annotation 对象，可以有若干个 ElementType 属性。

**(3) Annotation 有许多实现类，包括：Deprecated, Documented, Inherited, Override 等等。**

Annotation 的每一个实现类，都 "和 1 个 RetentionPolicy 关联" 并且 " 和 1~n 个 ElementType 关联"。



**2、Annotation 组成部分**

java Annotation 的组成中，有 3 个非常重要的主干类。它们分别是：

```java
Annotation.java                    //是个接口
package java.lang.annotation；
public interface Annotation {
    boolean equals(Object obj)；
    int hashCode()；
    String toString()；
    Class<? extends Annotation> annotationType()；
}
ElementType.java
package java.lang.annotation;

public enum ElementType {
    TYPE,               /* 类、接口（包括注释类型）或枚举声明  */
    FIELD,              /* 字段声明（包括枚举常量）  */
    METHOD,             /* 方法声明  */
    PARAMETER,          /* 参数声明  */
    CONSTRUCTOR,        /* 构造方法声明  */
    LOCAL_VARIABLE,     /* 局部变量声明  */
    ANNOTATION_TYPE,    /* 注释类型声明  */
    PACKAGE             /* 包声明  */
}
RetentionPolicy.java
package java.lang.annotation;
public enum RetentionPolicy {
    SOURCE,           /* Annotation信息仅存在于编译器处理期间，编译器处理完之后就没有该Annotation信息了  */
    CLASS,             /* 编译器将Annotation存储于类对应的.class文件中。默认行为  */
    RUNTIME            /* 编译器将Annotation存储于class文件中，并且可由JVM读入 */
}
```



**3、java 自带的 Annotation**

1. **@Retention**

`@Retention` annotation指定标记注释的存储方式：

- RetentionPolicy.SOURCE - 标记的注释仅保留在源级别中，并由编译器忽略。
- RetentionPolicy.CLASS - 标记的注释在编译时由编译器保留，但Java虚拟机（JVM）会忽略。
- RetentionPolicy.RUNTIME - 标记的注释由JVM保留，因此运行时环境可以使用它。

2、**@Documented**

`@Documented` 注释表明，无论何时使用指定的注释，都应使用Javadoc工具记录这些元素。（默认情况下，注释不包含在Javadoc中。）有关更多信息，请参阅 Javadoc工具页面。

3、**@Target**

`@Target` 注释标记另一个注释，以限制可以应用注释的Java元素类型。目标注释指定以下元素类型之一作为其值

- ElementType.TYPE 可以应用于类的任何元素。
- ElementType.FIELD 可以应用于字段或属性。
- ElementType.METHOD 可以应用于方法级注释。
- ElementType.PARAMETER 可以应用于方法的参数。
- ElementType.CONSTRUCTOR 可以应用于构造函数。
- ElementType.LOCAL_VARIABLE 可以应用于局部变量。
- ElementType.ANNOTATION_TYPE 可以应用于注释类型。
- ElementType.PACKAGE 可以应用于包声明。
- ElementType.TYPE_PARAMETER
- ElementType.TYPE_USE

4、**@Inherited**

`@Inherited` 注释表明注释类型可以从超类继承。当用户查询注释类型并且该类没有此类型的注释时，将查询类的超类以获取注释类型（默认情况下不是这样）。此注释仅适用于类声明。

5、**@Repeatable**

Repeatable Java SE 8中引入的，`@Repeatable`注释表明标记的注释可以多次应用于相同的声明或类型使用(即可以重复在同一个类、方法、属性等上使用)。



```java
java 常用的 Annotation：
@Deprecated  -- @Deprecated 所标注内容，不再被建议使用。
@Override    -- @Override 只能标注方法，表示该方法覆盖父类中的方法。
@Documented  -- @Documented 所标注内容，可以出现在javadoc中。
@Inherited   -- @Inherited只能被用来标注“Annotation类型”，它所标注的Annotation具有继承性。
@Retention   -- @Retention只能被用来标注“Annotation类型”，而且它被用来指定Annotation的RetentionPolicy属性。
@Target      -- @Target只能被用来标注“Annotation类型”，而且它被用来指定Annotation的ElementType属性。
@SuppressWarnings -- @SuppressWarnings 所标注内容产生的警告，编译器会对这些警告保持静默。
```



# 自定义注解

Java中自定义注解和创建一个接口相似，自定义注解的格式是以@interface为标志的。

```java
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE})
public @interface SPI {
    /**
     * default extension name
     */
    String value() default "";
}

```

我们知道java.lang.annotation包中有一个Annotation的接口，它是所有注解类型扩展的公共接口。那我们是否可以直接通过实现该接口来实现自定义注解呢？

```java
import java.lang.annotation.Annotation;
public class MyAnnotation implements Annotation {
    @Override
    public Class<? extends Annotation> annotationType() {
        return null;
    }
}
```

发现Annotation接口中只有一个annotationType的方法，而且通过源码的注释我们可以发现答案是不能。

![image-20230426221639189](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20230426221639189.png)



# 使用场景

自定义注解的使用场景很多，我们在造轮子写框架的过程经常会使用到，例如我最近就遇到了一个业务场景：像一些编辑业务信息的接口，产品要求信息编辑后的新旧值对比，对比的业务功能，我们的实现方式是拿到前端填写的Form表单(新值)和数据库中查询出来的Dto(旧值)通过反射技术获取到相同属性字段名，再比较属性值就可以得出新旧值。得到值之后我们也知道该字段的Dto中的字段名，但是如何将比较得到的新旧值字段的中文名返回给前端呢？例如：

```java
public class Stedent {
        private String name;
        private int age;
        private String sex;
       //省略setter,getter
    }

```

比较后我们的结果是 name : "xiaoming "-> "daming"，age : 24 -> 26。但是我们不能直接将name和age返回给前端，他们需要的格式是：姓名: "xiaoming "-> "daming"，年龄 : 24 -> 26。这时候就可以考虑自定义一个注解`@FieldName`,

```java
@Deprecated
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface FieldName {
    String value() default "";
}

```

然后将该注解加在属性字段上面

```java
public class Student {

    @FieldName(value = "姓名")
    private String name;

    @FieldName(value = "年龄")
    private int age;

    @FieldName(value = "性别")
    private String sex;

    //省略setter,getter
}

```

之后就可以通过反射获取该字段中文名

```java
// 如果 oldField 属性值与 newField 属性值的内容不相同
if (!isEmpty(newValue)) {
    Map<String, Object> map = new HashMap<>();
    String newFieldName = newField.getName();
    
    //在这里获取注解的信息
    if (newField.isAnnotationPresent(FieldName.class)) {
        FieldName fieldNameAnno = newField.getAnnotation(FieldName.class);
        newFieldName = fieldNameAnno.name();
    }
        map.put(FIELD_NAME, newFieldName);
        map.put(OLD_VALUE, oldValue);
        map.put(NEW_VALUE, newValue);
        list.add(map);
}

```

