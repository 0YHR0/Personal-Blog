---
title: Ch10 Design Pattern
date: 2023-11-07
tags:
 - Go
categories:
 - Go


---




# Design Pattern



## 建造者模式

在 JAVA 中，可以通过**方法重载**的方式，实现同一个构造器方法对应多个不同的入参组合，可以在一定程度上缓解这个问题；但是在 Golang 中，每个方法的入参类型以及组合是确定的，这样就可能导致类的构造器方法数量发生膨胀，产生大量的**冗余方法**和代码.

#### 经典模式

![image-20231107154646801](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107154646801.png)

```go
type Food struct {
    // 种类
    typ string
    // 名称
    name string
    // 重量
    weight float64
    // 品牌
    brand string
    // 价格
    cost float64
}

func NewFood(typ string, name string, weight float64, brand string, cost float64) *Food {
    return &Food{
        typ:    typ,
        name:   name,
        weight: weight,
        brand:  brand,
        cost:   cost,
    }
}

type FoodBuilder struct {
    Food
}


func NewFoodBuilder() *FoodBuilder {
    return &FoodBuilder{}
}

func (f *FoodBuilder) Build() (*Food, error) {
    if f.typ == "" {
        return nil, errors.New("miss type info")
    }
    if f.name == "" {
        return nil, errors.New("miss name info")
    }


    return &Food{
        typ:    f.typ,
        name:   f.name,
        brand:  f.brand,
        weight: f.weight,
        cost:   f.cost,
    }, nil
}

func (f *FoodBuilder) Type(typ string) *FoodBuilder {
    f.typ = typ
    return f
}


func (f *FoodBuilder) Name(name string) *FoodBuilder {
    f.name = name
    return f
}


func (f *FoodBuilder) Weight(weight float64) *FoodBuilder {
    f.weight = weight
    return f
}


func (f *FoodBuilder) Brand(brand string) *FoodBuilder {
    f.brand = brand
    return f
}


func (f *FoodBuilder) Cost(cost float64) *FoodBuilder {
    f.cost = cost
    return f
}
```



Test:

```go
func Test_Builder(t *testing.T) {
    // 创建 Food 建造者实例
    fb := NewFoodBuilder()
    // 通过链式调用完成属性设置与实例建造
    food1, err := fb.Type("苹果").Cost(12.12).Brand("山东红富士").Build()
    if err != nil {
        t.Error(err)
    } else {
        t.Logf("food: %+v", food1)
    }


    // 通过链式调用完成属性设置与实例建造
    food2, err := fb.Type("芒果").Name("我是大芒果1号").Cost(30.30).Build()
    if err != nil {
        t.Error(err)
    } else {
        t.Logf("food: %+v", food2)
    }
}

```





#### Option模式

```go
type BigClass struct {
    Options
}


type Options struct {
    name   string
    age    int
    sex    string
    weight float64
    height float64
    width  float64
    fieldA string
    fieldB string
    fieldC string
}

type Option func(opts *Options)

func WithName(name string) Option {
    return func(opts *Options) {
        opts.name = name
    }
}


func WithAge(age int) Option {
    return func(opts *Options) {
        opts.age = age
    }
}


func WithSex(sex string) Option {
    return func(opts *Options) {
        opts.sex = sex
    }
}

...

//兜底修复方法 repair，完成构造 BigClass 实例过程中一些缺省值的设置. 比如用户如果没有通过 Option 显式设置 BigClass 中的 name 和 age 字段，则会通过 repair 方法将其设置为兜底的默认值.

func repair(opts *Options) {
    if opts.name == "" {
        opts.name = "小明"
    }
    if opts.age == 0 {
        opts.age = 20
    }
}

func NewBigClass(opts ...Option) *BigClass {
    bigClass := BigClass{}
    for _, opt := range opts {
        opt(&bigClass.Options)
    }


    repair(&bigClass.Options)
    return &bigClass
}


```



Test:

```go
func Test_options_builder(t *testing.T) {
    bigClass1 := NewBigClass()
    bigClass2 := NewBigClass(WithAge(20), WithName("小乌龟"))
    bigClass3 := NewBigClass(WithHeight(180), WithWidth(200), WithFieldA("aaa"), WithFieldB("bbb"))
    t.Logf("bigClass1: %+v", bigClass1)
    t.Logf("bigClass2: %+v", bigClass2)
    t.Logf("bigClass3: %+v", bigClass3)
}

```



![image-20231107155254542](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107155254542.png)



#### 使用场景

这种 Options 建造者模式除了可以应用在构造器场景之外，我个人还总结了另一类适用场景——DB 条件查询.



我们在查询 user 的时候，可能会使用到多种组合的查询条件.

比如，我们可以通过主键 id 作为查询条件，可以通过名称 name 作为查询条件，可以通过名称 name +年龄 age 作为[联合查询](https://www.zhihu.com/search?q=联合查询&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A3118865556})条件，也可以通过年龄 age + 城市 cityID + 创建时间create_time 作为联合查询条件，凡此种种，组合数不胜枚举.



例子：gorm.DB

```go
type Option func(db *gorm.DB) *gorm.DB


作者：小徐先生
链接：https://www.zhihu.com/question/21857130/answer/3118865556
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

func WithID(id int64) Option {
    return func(db *gorm.DB) *gorm.DB {
        return db.Where("id = ?", id)
    }
}


func WithName(name string) Option {
    return func(db *gorm.DB) *gorm.DB {
        return db.Where("name = ?", name)
    }
}


func WithAge(age int64) Option {
    return func(db *gorm.DB) *gorm.DB {
        return db.Where("age = ?", age)
    }
}


func WithCityID(cityID int) Option {
    return func(db *gorm.DB) *gorm.DB {
        return db.Where("city_id = ?", cityID)
    }
}


func WithPhone(phone string) Option {
    return func(db *gorm.DB) *gorm.DB {
        return db.Where("phone = ?", phone)
    }
}


func WithCreateTime(begin, end time.Time) Option {
    return func(db *gorm.DB) *gorm.DB {
        return db.Where("create_time >= ? and create_time <= end", begin, end)
    }
}
```



使用：

```go
func (u *UserDAO) GetUser(ctx context.Context, opts ...Option) (*User, error) {
    db := u.db.WithContext(ctx).Model(&User{})
    for _, opt := range opts {
        db = opt(db)
    }
    var user User
    return &user, db.First(&user).Error
}

```




## 单例模式

#### 饿汉

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107155855945.png" alt="image-20231107155855945" style="zoom:25%;" />

```go
package singleton

var s *singleton

func init() {
    s = newSingleton()
}

type singleton struct {
}

func newSingleton() *singleton {
    return &singleton{}
}

func (s *singleton) Work() {
}

func GetInstance() *singleton {
    return s
}
```



+ 存在一个比较容易引起争议的规范性问题，就是在对外可导出的 GetInstance 方法中，返回了不可导出的类型 singleton

+ 规范的处理方式是，在不可导出单例类 singleton 的基础上包括一层接口 interface，将其作为对对导出方法 GetInstance 的返回参数类型:

  ```go
  type Instance interface {
      Work()
  }
  
  func GetInstance() Instance {
      return s
  }
  ```

  

#### 懒汉

- 单例类声明为不可导出类型，避免被外界直接获取到
- 声明一个全局单例变量, 但不进行初始化（注意只声明，不初始化）
- 暴露一个对外公开的方法,用于获取这个单例
- 在这个获取方法被调用时，会判断单例是否初始化过，倘若没有，则在此时才完成初始化工作

##### 1.0

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107160201013.png" alt="image-20231107160201013" style="zoom:25%;" />

##### 2.0

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107160247942.png" alt="image-20231107160247942" style="zoom: 33%;" />

##### 3.0

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107160342021.png" alt="image-20231107160342021" style="zoom:33%;" />

- moment1：单例 singleton 至今为止没有被初始化过
- moment2：goroutine A 和 goroutine B 同时调用 GetInstance 获取单例，由于当前 singleton 没初始化过，于是两个 goroutine 都未走进 if s != nil 的分支，而是开始抢锁
- moment3：goroutine A 抢锁成功继续往下；goroutine B 抢锁失败，进行等锁
- moment4：goroutine A 完成 singleton 初始化，并释放锁
- moment5：由于锁被释放，goroutine B 取锁成功，并继续往下执行，完成 singleton 的初始化



##### **4.0**

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107160449166.png" alt="image-20231107160449166" style="zoom:33%;" />

+ 加锁之后多了一次 double check 动作



##### 5.0: Go提供的源码

sync.Once 是 Golang 提供的用于支持实现单例模式的标准库工具，其对应的数据结构如下：

<img src="https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107160617449.png" alt="image-20231107160617449" style="zoom:25%;" />









ref:https://www.zhihu.com/question/21857130/answer/3118865556



