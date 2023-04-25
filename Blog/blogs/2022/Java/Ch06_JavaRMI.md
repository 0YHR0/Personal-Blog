---
title: Ch06_JavaRMI
date: 2019-06-11
tags:
 - Java
categories:
 - Java
---

# JavaRMI

RMI骨架分为：RMIService，RMIserver，RMIClient

RMI调用步骤：

1. 启动服务端
2. 客户端辅助对象把参数（变量，方法名）打包发给服务端的辅助对象
3. 服务端的辅助对象把信息解包，让真正的服务对象执行方法，并返回值
4. 服务端辅助对象把返回值发回给客户端辅助对象
5. 客户端服务对象把返回值解包，获得返回值



Hello：服务

```java
import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Hello extends Remote{//定义服务端要提供的功能，只有继承了Remote才能被远程调用
	public void hello(String str) throws RemoteException;//抛出此异常说明这个方法可以被远程调用

}

```



RMIService：服务提供对象

```java
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

public class RMIService extends UnicastRemoteObject implements Hello{//继承UnicastObject，并实现接口，表明此对象为一个调用方法的代理对象

	protected RMIService() throws RemoteException {//必须要构造方法
		super();
		
	}

    @Override
    public void hello(String str) throws RemoteException {//实现接口里的方法
	System.out.println("hello: " + str);
	
}
	
	

}
```



RMIserver：服务端

```java
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

public class RMIServer {//服务端，为客户端提供服务对象
	public static void main(String[] args) {
		try {
			RMIService service = new RMIService();//创建服务端辅助对象
			String serviceIP = "localhost";//服务端基本配置
			int listenport = 12345;
			String serverURL = serviceIP + ":" + listenport;
			//创建service注册表
			Registry registry = LocateRegistry.createRegistry(listenport);
			registry.bind("hello", service);//绑定服务端辅助对象
			System.out.println("服务端启动成功");
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

}

```



RMIclient：客户端

```java
import java.rmi.NotBoundException;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

import Server.Hello;
import Server.RMIService;

public class RMIClient {//客户端配合
	public static void main(String[] args) throws RemoteException, NotBoundException {
		//基本配置
		String serverIP = "localhost";
		int port = 12345;
		String serverURL = serverIP + ":" + port;
		//获取注册表
		System.out.println("获取注册表");
		Registry registry = LocateRegistry.getRegistry(serverIP,port);
		System.out.println("注册表获取成功");
		Hello rmiService = (Hello)registry.lookup("hello");//创建客户端辅助对象
		rmiService.hello("test");//客户端辅助对象把参数（方法名，参数）发给服务端辅助对象
		System.out.println("服务调用成功");
	}
	

}
```

