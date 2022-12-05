---
title: Ch02 Component
date: 2022-05-13
tags:
 - react
categories:
 - React
---

# Component

+ jsx一般用作组件的后缀名，并且文件名要大写，如果不大写的话会在引入的时候浏览器识别不出来标签



把render内的内容抽离出来成为组件



## 类组件

App.jsx

```jsx
import React from "react";

//类组件
class App extends React.Component{
    render(){
        return (//表示接下来要写html内容
            <div>
                <h2> hello, yhr </h2>
                <input type="text"></input>
            </div>
        )
    }
}

export default App
```



index.js

```jsx
import ReactDOM from 'react-dom'
import App from './App'
// ReactDOM.render(组件名称，要注入的元素)
ReactDOM.render(
    <App />,
    document.getElementById("root")
)
```



+ 在html中写js代码就要用{}

+ 在js中写html代码就要用()
+ export 也可以写在class前面

```jsx
const msg = 'yyy'
//类组件
export default class App extends React.Component{
    render(){
        return (//表示接下来要写html内容
            <div>
                <h2>{msg}</h2>
                <input type="text"></input>
            </div>
        )
    }
}
```



+ 注意render中只能有一个父标签

+ 比如label的for要写成htmlFor，否则浏览器会报错
+ 比如div中class要写成className，否则浏览器会报错，因为在ES6中代表构造函数
+ 在写style的时候，要写双花括号



```jsx
<div>
    <h2>happy</h2>
    <label htmlFor='username'>username</label>
    <input type='text' id='username'></input>
    <div style={{background: 'pink'}} className="name">BUBU</div>
</div>
```



#### 三元运算符：

```jsx
let flag = true //true使用蓝色， false使用粉色
export default class App1 extends React.Component{
    render(){
        return (
            <div>
            <h2>happy</h2>
            <label htmlFor='username'>username</label>
            <input type='text' id='username'></input>
            <div style={{background: flag ? 'skyblue':'pink'}}className="name">BUBU</div>
            </div>
        )
    }
}
```

+ style外层花括号表示我要执行js代码
+ 内层花括号表示我传递进来的是一个js对象

#### for循环：

![image-20220511172432401](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220511172432401.png)

```jsx
<ul>
    {
        //react中的列表循环只能用map
        //因为forEach没有返回值，只有map有返回值
        arr.map((item, index)=>{
            return <li key={index}>{item}</li>
        })
    }
</ul>
```



安装完这个插件之后，就可以用rcc（react class component）+tab来快速生成class模板

![image-20220516095840020](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220516095840020.png)



#### 累加和setState

![image-20220511172639933](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220511172639933.png)

直接设置变量的值，视图是无法进行更新的，比如这样就不行![image-20220511163015635](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220511163015635.png)



要使用setState才能修改数据

```jsx
import React from "react";


export default class App1 extends React.Component{

    state = {
        num: 1
    }
    render(){
        return (
            <div>
            <h2>
                count:{this.state.num}
            </h2>
            <button onClick={()=>this.setState({num:this.state.num+1})}>add</button>
            {/* onlick传进去的参数不能加括号，否则在打开的时候会立即执行 */}
            {/* bind必须要写，否则获取不到this对象 */}
            <button onClick={this.numAdd.bind(this)}>add1</button>
            {/* 也可以使用箭头函数规避掉this的指向问题，可以传参数 */}
            <button onClick={()=>this.numAdd(11)}>add2</button>
            </div>
        )
    }

    numAdd(num) {
        // alert("sda");
        console.log(this.state.num);
        this.setState({num:this.state.num + num});
    }
}



```



#### state中数组的修改：

```jsx

import React, { Component } from 'react'

export default class App9 extends Component {
    state = {
        arr: ["张飞", "赵云", "刘备"]
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.arr.map((item, index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={this.addFn.bind(this)}>追加一项到arr的最后</button>
            </div>
        )
    }
    // 追加一项到arr的最后
    // 修改state的方式只能是setState
    // 数组的push方法会修改原数组
    // this.state.arr.push() 会造成直接修改了state中的arr
    // 修改数组，不能直接修改this.state.arr
    
    addFn(){
        // 如果我声明一个变量，等于this.state.arr，并且让这个变量和this.state.arr完全脱离关系[深拷贝]
        let newArr = JSON.parse(JSON.stringify(this.state.arr));
        // 往newArr中push一项
        newArr.push('关羽');
        // 把最新的newArr赋值给arr
        this.setState({
            arr: newArr
        })
    }
}
 
```



样式：css

import css文件，申明div的class

```jsx
import './App.css'
...
<div className="box">
```

```css
.box{
    background-color: blue;
}
```



#### Tab栏

App7.js

```jsx
import React, { Component } from 'react'
import './com.css';

export default class App7 extends Component {
  state = {
    arr: ["新闻", "体育", "知识"],
    activeNum: 0
  }
render() {
  return (
    <div className="banner">
      <ul>
        {
          this.state.arr.map((item, index) => {
            // this.handleClick.bind(this, 参数)
            return <li key={index} onClick={this.handleClick.bind(this, index)} className={this.state.activeNum==index ? 'active' : ''}>{item}</li>;
          })
        }
      </ul>
      <ol>
        {
          this.state.arr.map((item, index) => {
            return <li key={index} className={this.state.activeNum==index ? 'active' : ''}>{item}</li>;
          })
        }
      </ol>
    </div>
  )
}
handleClick(index){
  // console.log(index)  // 得到索引值
  this.setState({
    activeNum: index
  })
}
}
```



com.css

```css
*{margin: 0;padding: 0;border: 0;list-style: none;}

.banner{
    width: 500px;
    height: 300px;
    margin: 100px auto;
    border: 1px solid #000;
}

ul{
    height: 60px;
    line-height: 60px;
    display: flex;
    text-align: center;
    justify-content: space-between;
}

ul li{
    height: 60px;
    width: 30%;
    background: #efefef;
}

ul li.active{
    background: darkred;
    color: #fff;
}

ol li{
    height: 240px;
    background: darkred;
    text-align: center;
    line-height: 240px;
    color: #fff;
    display: none;
}

ol li.active{
    display: block;
}
 
```

