---
title: Ch03 Function
date: 2022-05-15
tags:
 - react
categories:
 - React

---

# Function

函数名称大写就认为他是一个构造函数

在App.jsx中写

```jsx
export default function App(){
    return <h2>123</h2>
}
```

+ 函数式组件没有生命周期
+ 函数式组件没有this
+ 函数式组件没有state状态



### Hooks（钩子 生命周期钩子）

+ react官方提供的hook
+ hook函数必须写在组件最顶层
+ 开发人员自定义的hook

```jsx
/**
 * 函数式组件没有生命周期
 * 【vue生命周期】: mounted(数据请求) updated(检测数据更新) beforeDestory(垃圾回收)
 *  使用useEffect检测更新
 */
```



#### usestate

这样子是无法修改视图的，所以要使用hook

修改前：

```jsx
let test = "hello world"

export default function App(){
    const fn = () => {
        test = "BUBU!"
    }
    return (
        <div>
            <h2>{test}</h2>
            <button onClick={fn}>press</button>
        </div>
    )
}
```

修改后：

```jsx
import { useState } from "react"

export default function App(){
    //hook函数必须写在函数头部
    const [msg, setMsg] = useState("Hello world!")
    
    const fn = () => {
        setMsg("BUBU!")
    }
    return (
        <div>
            <h2>{msg}</h2>
            <button onClick={fn}>press</button>
        </div>
    )
}

```



#### useEffect

```jsx
import { useState,useEffect } from "react"

export default function App(){
    //hook函数必须写在函数头部
    const [msg1, setMsg1] = useState(1)
    const [msg2, setMsg2] = useState(1)

    /**
     * 检测数据更新,当数据更新时，执行函数中的内容
     * 一般用来发ajax请求
     * 第一个参数是函数，第二个参数表示监听的那个数据,用数组的形式，可以写多个
     * 当检测的是页面中所有的变量，可以把所有变量填写到数组中，也可以省略第二个参数
     * 当不想检测页面中任何数据的更新，可以直接给一个空数组
     */

    useEffect(() => {
        console.log("msg1更新了")
    },[msg1])
    
     //模拟beforeDestory，一般在这里做垃圾回收或者处理脏数据，比如在App根标签被修改之后
    useEffect(() => {
    useEffect(() => {
        return () => console.log("销毁阶段")
    })

    return (
        <div>
            <h2>{msg1}</h2>
            <button onClick={()=> setMsg1(msg1 + 1)}>add1</button>
            <hr/>
            <h2>{msg2}</h2>
            <button onClick={()=> setMsg2(msg2 + 1)}>add2</button>
        </div>
    )
}

```



#### 父子组件传递参数：

父传子

```jsx
import React from 'react'


//顶级组件
export default function App1() {
  return (
    <Parent/>
  )
}

//父组件
function Parent(){
    return (
        <Child num={123}/>
    )
}

//子组件
function Child(props){
    return(
        <h1>BUBU!{props.num}</h1>
    )
}
```



子传父: 

+ 在父组件中定义函数，把函数传到子组件中，再在子组件中使用
+ 无论是vue，小程序，还是react，都是这样，真正干活的是父组件

```jsx
import React, {useState} from 'react'


//顶级组件
export default function App1() {
  const [msg, setMsg] = useState(66666)
  const changeNum = (arg) => setMsg(arg)
  return (
    <Parent msg = {msg}  changeNum = {changeNum}/>
  )
}

//父组件
function Parent(props){
    return (
        <Child msg = {props.msg}   changeNum = {props.changeNum}/>
    )
}

//子组件
function Child(props){
    return(
      <div>
        <h1>BUBU!{props.msg}</h1>
        <button onClick={()=>props.changeNum(888)}>change</button>
      <div/>
    )
}
```



但是多级组件会非常麻烦，不合理：

### Context: 使用上下文+Provider和consumer表示

```jsx
import React, {useState, createContext} from 'react'

//创建上下文空间
  const numContext = createContext()
//顶级组件
export default function App4() {
  const [msg, setMsg] = useState(66666)
  const changeNum = (arg) => setMsg(arg)

  return (
    //   num和setMsg的提供者，第一个大括号表示要写js代码，第二个花括号表示传递的是一个对象
      <numContext.Provider value={{msg, changeNum}}>
          <Parent/>
      </numContext.Provider>
  )
}

//父组件
function Parent(){
    return (
        <Child/>
    )
}

//子组件
function Child(){
    return(
      <numContext.Consumer>
          {
            //   接受参数
            ({msg, changeNum}) =>(
                <div>
                    <h1>BUBU!{msg}</h1>
                    <button onClick={()=>changeNum(555)}>change</button>
                <div/>
            )
        }
          
        
      </numContext.Consumer> 
    )
}
```



#### 也可以使用useContext直接解构属性, 修改如下:

```jsx
import React, {useState, createContext, useContext} from 'react'

//创建上下文空间
  const numContext = createContext()
//子组件
function Child(){
    //直接使用useContex解构上下文空间
    const {msg, changeNum} = useContext(numContext)
    return(
    <>
        <h1>BUBU!{msg}</h1>
        <button onClick={()=>changeNum(666)}>change</button>
    </>
    )
}
```





### 受控组件和不受控组件

+ 只存在于表单元素
+ 受控组件的意思就是表单元素的值要通过state来定义（e表示event）
+ 不受控组件的意思就是表单元素只能通过useRef来获取

```jsx
import React,{useState, useRef} from 'react'

export default function App6() {
    const [value, setValue] = useState("hint"); 
    const input = useRef(null);
    return (
    <div>
        <h3>受控组件</h3>
        <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}></input>
        <button onClick={()=>console.log(value)}>test1</button>
        <hr></hr>
        <h3>不受控组件</h3>
        <input type='text' ref={input}></input>
        <button onClick={()=>console.log(input.current.value)}>test2</button>
    </div>
  )
}
```



#### memo组件：这样会导致child组件每次被点击之后都被加载（父组件的render重新渲染），很吃性能

使用前：

```jsx
import React,{useState, memo} from 'react'

export default function App8() {
    const [num,setNum] = useState(1)

    return (
    <div>
        <h1>num:{num}</h1>
        <button onClick={()=>setNum(num + 1)}>add</button>
        <hr/>
        <Child/>
    </div>
  )
}

function Child(){
    console.log("child init...")
    return (
        <h1>child</h1>
    )
}
```

使用后：改写child，把子组件缓存下来

```jsx
const Child = memo(() => {
    console.log("child init...")
    return (
        <h1>child</h1>
    )
})
```



但是memo只能在纯静态的情况下使用，如果在子组件中调用父组件的方法，又会重新渲染：比如

```jsx
import React,{useState, memo} from 'react'

export default function App8() {
    const [num,setNum] = useState(1)
    const dosth = () => setNum(num + 1)

    return (
    <div>
        <h1>num:{num}</h1>
        <button onClick={()=>setNum(num + 1)}>add</button>
        <hr/>
        <Child fn={dosth}/>
    </div>
  )
}


const Child = memo((props) => {
    console.log("child init...")
    return (
        <div>
            <h1>child</h1>
            <button onClick={props.fn}>do</button>
        </div>
    )
})
```



#### useCallback：把dosth用useCallBack套起来，表示不检测数数字更新，但是会有问题，只能改变数字一次

```jsx
const dosth = useCallback(() => setNum(num + 1),[])
```



这是因为如下原因：所以应该这样写

```jsx
/**
 * setNum(newValue) 表示强行用新值覆盖旧值
 * setNum((num)=>num+1) 表示用新值覆盖旧值
 */
const dosth = useCallback(() => setNum((num)=>num+1),[])
```



#### usememo：和useCallback类似，只不过多加一个return，在函数中返回函数, 叫做高阶函数

```jsx
 const dosss = useMemo(() => {
        return () => setNum((num)=>num+1)
    },[])
```





