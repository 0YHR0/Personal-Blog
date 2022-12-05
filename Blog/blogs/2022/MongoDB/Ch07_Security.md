---
title: Ch07 Security
date: 2022-11-18
tags:
 - MongoDB
 - DB
categories:
 - MongoDB

---

# 安全认证

### MongoDB的用户和角色权限简介

默认情况下，MongoDB实例启动运行时是没有启用用户访问权限控制的，也就是说，在实例本机服务
器上都可以随意连接到实例进行各种操作，MongoDB不会对连接客户端进行用户验证，这是非常危险
的。

mongodb官网上说，为了能保障mongodb的安全可以做以下几个步骤：

1）使用新的端口，默认的27017端口如果一旦知道了ip就能连接上，不太安全。

2）设置mongodb的网络环境，最好将mongodb部署到公司服务器内网，这样外网是访问不到的。公
司内部访问使用vpn等。

3）开启安全认证。认证要同时设置服务器之间的内部认证方式，同时要设置客户端连接到集群的账号
密码认证方式。



为了强制开启用户访问控制(用户验证)，则需要在MongoDB实例启动时使用选项--auth 或在指定启动
配置文件中添加选项auth=true 。



在开始之前需要了解一下概念



1）启用访问控制：
MongoDB使用的是基于角色的访问控制(Role-Based Access Control,RBAC)来管理用户对实例的访问。
通过对用户授予一个或多个角色来控制用户访问数据库资源的权限和数据库操作的权限，在对用户分配
角色之前，用户无法访问实例。



在实例启动时添加选项--auth 或指定启动配置文件中添加选项auth=true 。



2）角色：
在MongoDB中通过角色对用户授予相应数据库资源的操作权限，每个角色当中的权限可以显式指定，
也可以通过继承其他角色的权限，或者两都都存在的权限。



3）权限：
权限由指定的数据库资源(resource)以及允许在指定资源上进行的操作(action)组成。

1. 资源(resource)包括：数据库、集合、部分集合和集群；

2. 操作(action)包括：对资源进行的增、删、改、查(CRUD)操作。
  在角色定义时可以包含一个或多个已存在的角色，新创建的角色会继承包含的角色所有的权限。在同一
  个数据库中，新创建角色可以继承其他角色的权限，在admin 数据库中创建的角色可以继承在其它任意
  数据库中角色的权限。
  关于角色权限的查看，可以通过如下命令查询（了解）：

  ```js
  // 查询所有角色权限(仅用户自定义角色)
  > db.runCommand({ rolesInfo: 1 })
  // 查询所有角色权限(包含内置角色)
  > db.runCommand({ rolesInfo: 1, showBuiltinRoles: true })
  
  // 查询当前数据库中的某角色的权限
  > db.runCommand({ rolesInfo: "<rolename>" })
  // 查询其它数据库中指定的角色权限
  > db.runCommand({ rolesInfo: { role: "<rolename>", db: "<database>" } }
  // 查询多个角色权限
  > db.runCommand(
  {
  rolesInfo: [
  "<rolename>",
  { role: "<rolename>", db: "<database>" },
  ...
  ]
  }
  )
  ```

  示例：
  查看所有内置角色：

  ```yaml
  > db.runCommand({ rolesInfo: 1, showBuiltinRoles: true })
  {
  "roles" : [
  {
  "role" : "__queryableBackup",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "__system",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "backup",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "clusterAdmin",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "clusterManager",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "clusterMonitor",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "dbAdmin",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "dbAdminAnyDatabase",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "dbOwner",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "enableSharding",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "hostManager",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "read",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "readAnyDatabase",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "readWrite",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "readWriteAnyDatabase",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "restore",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "root",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "userAdmin",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  },
  {
  "role" : "userAdminAnyDatabase",
  "db" : "admin",
  "isBuiltin" : true,
  "roles" : [ ],
  "inheritedRoles" : [ ]
  }
  ],
  "ok" : 1
  }
  ```

3. ![image-20221118122929856](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20221118122929856.png)