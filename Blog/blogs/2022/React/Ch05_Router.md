---
title: Ch05 Router
date: 2022-05-11
tags:
 - react
categories:
 - React

---

# Router

https://reactrouter.com/

注意路由版本有区别，这里使用目前最新的6版本

```sh
npm install react-router-dom@6
```



新建几个目录以及路由组件如下图所示：

![image-20220517212644909](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220517212644909.png)

在router的index.jsx里面写：

```jsx
/**
 * App -> Home, Detail, List
 * react-router-dom 中有两种模式：
 *              BrowserRouter(History模式)，
 *              HashRouter(Hash模式)部署的时候可以直接打包上线
 */

import App10 from "../App10";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail"
import List from "../Pages/List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//定义一个路由, 注意element里面是尖括号，根元素包含其他元素
const baseRoute = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App10/>}>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/list" element={<List/>}></Route>
                <Route path="/detail" element={<Detail/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRoute
```





在主index中，直接写Route

```js
import ReactDOM from "react-dom";
import App10 from './App10'
// import store from './store'
// import {Provider} from "react-redux"
import Route from './router'
ReactDOM.render(
    <Route/>,
    document.getElementById("root")
)
```



在app10.jsx中，设置显示子路由：

```jsx
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function App10() {
  return (
    <div>
        <h3>BUBU</h3>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
```





效果：![image-20220517215142646](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220517215142646.png)



### Link

无序列表快捷键：

ul>li*3>a   会自动生成如下

```html
<ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
```

可以使用link来跳转，取代a标签，搭配的不是href，是to

```jsx
import React from 'react'
import { Outlet,Link } from 'react-router-dom'

export default function App10() {
  return (
    <div>
        <h3>BUBU</h3>
        <ul>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/detail">DETAIL</Link></li>
            <li><Link to="/list">LIST</Link></li>
        </ul>
        <hr/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

```



效果：

![image-20220517215827664](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220517215827664.png)



### UseLocation

可以得到用户当前路径

### UseNevigate

可以使用这个函数进行跳转, 也可以携带复杂参数：

```jsx
import React from 'react'
import { Outlet,Link,useLocation, useNavigate } from 'react-router-dom'

export default function App10() {
    const nevigate = useNavigate()
    //可以通过这个钩子函数进行跳转
    const location = useLocation()
    //可以通过这个钩子函数获得当前的路径
    console.log(location.pathname)

      //携带参数
    const goDetail = ()=>{
        nevigate("/detail",{
            state:
                {username: 'bubu'}
        })
    }

    return (
        <div>
            <h3>BUBU</h3>
            <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/detail">DETAIL</Link></li>
                <li><Link to="/list">LIST</Link></li>
            </ul>
            <button onClick={goDetail}>GoDetail</button>
            <hr/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

```



获取参数：Detail.jsx

```jsx
import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {


  return (
    <div>This is Detail{useLocation().state.username}</div>
  )
}
```





在跳转的时候如果要携带参数，可以使用useParams

app10.jsx

```jsx
 const goList = ()=>{
        nevigate("/list/123")
    }
```

route-->index.jsx 表示后面要传进来一个id值

```jsx
<Route path="/list/:id" element={<List/>}></Route>
```



page-->List.jsx 可以在这里面获取参数

```jsx
import React from 'react'
import { useParams } from 'react-router-dom'

export default function List() {
  const param = useParams()
  return (
    <div>This is List{param.id}</div>
  )
}
```



用问号携带的参数应该用useSearchParam来获取

```jsx
<li><Link to="/detail?id=123">DETAIL</Link></li>
```



detail.jsx

```jsx
import React from 'react'
import {useSearchParams} from 'react-router-dom'

export default function Detail() {
  const [params] = useSearchParams()
  return (
    <div>This is Detail{params.getAll('id')[0]}</div>
  )
}

```



空指针排错可以使用：三元运算判断存不存在

![image-20220517225024329](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220517225024329.png)





404页面处理：在路由中加一行，并且新建一个error页面

```jsx
<Route path="*" element={<Error/>}></Route>
```

react不支持直接src等于路径，所以在引入图片的时候必须import

```jsx
import React from 'react'
import errorPage from '../assets/404.jpeg'
export default function Error() {
  return (
    <div>404
        <img src={errorPage} />
    </div>
  )
}
```

![image-20220517230226707](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20220517230226707.png)
