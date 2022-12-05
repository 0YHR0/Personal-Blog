---
title: Ch04 Redux
date: 2022-05-17
tags:
 - react
categories:
 - React


---

# Redux

https://react-redux.js.org/

eact Redux是专门针对React所设计的**状态管理工具**

![image-20220517160053015](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220517160053015.png)



### 安装: React Redux基于Redux，因此安装时需要两者一起安装：

```jsx
npm i redux react-redux --save
```



### 仓库创建

在src下，创建store目录，包含reducer.js以及index.js



store->reducer.js  这个文件用于定义默认数据，并导出一个函数：

```js
// 定义默认数据
const defaultState = {
    num: 1
}

// 导出一个函数
export default (state=defaultState, action) => {
    return state;
}
```

![image-20220517162021495](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220517162021495.png)

store->index.js  这个文件主要是创建仓库、引用reducer，并导出store：

```js
import reducer from './reducer'
import {createStore} from 'redux'

export const store = createStore(reducer);

export default store
```



## 提供器和连接器

#### Provider

外层的index.js  使用provider包起来，并传递参数

```js
import ReactDOM from "react-dom";
import App9 from './App9'
import store from './store'
import {Provider} from "react-redux"

ReactDOM.render(
    <Provider store={store}>
        <App9 />
    </Provider>,
    document.getElementById("root")
)
```



### connect

App9.jsx

```jsx
import React from 'react'
import { connect } from 'react-redux'

function App9(props) {
  return (
    <div>test{props.num}</div>
  )
}

//状态映射
const mapStateToProps = (state) =>{
    return {
        num: state.num
    }
}

//连接器
//export default connect(state状态映射,dispatch映射)(组件名称)
export default connect(mapStateToProps)(App9)
```



在reducer里面也可以定义action来给组件调用，实现累加

reducer.js

```js
//定义默认数据
const defaultState = {
    num:2
}

//导出目标函数
export default (state=defaultState, action) => {
    //注意：由于不能直接修改state，要深拷贝一份
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'addNum':
            newState.num += action.value;
            break;
        default:
            break;
    }

    return newState
}

```



App9.jsx

```jsx
import React from 'react'
import { connect } from 'react-redux'

function App9(props) {
  return (
    <div>
        <div>test{props.num}</div>
        <button onClick={()=>props.add()}>add</button>
    </div>
  )
}

//状态映射：将reducer中的state映射成props，让开发者可以通过props来调用
const mapStateToProps = (state) =>{
    return {
        num: state.num
    }
}
//注意这边返回的是一个对象
const mapDispatcherToProps = (dispatch) =>{
    return {
        add(){
            const action = {
                type: 'addNum',
                value: 2
            }
            //把action传递出去
            dispatch(action)
        }

    }
}
//连接器
//export default connect(state状态映射,dispatch映射)(组件名称)
export default connect(mapStateToProps, mapDispatcherToProps)(App9)
```





> **注意：**action.type就是组件在调用方法时需要传入的函数名称，action.value则是调用方法时携带的参数。
