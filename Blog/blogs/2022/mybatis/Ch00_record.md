---
title: Ch00 record
date: 2022-10-10
tags:
 - Java
 - Mybatis
categories:
 - Mybatis
---



Mybatis 在使用returning（postgresql）返回值时，可以用select

```java
 @Select("insert into organization(orgid,name,address) values(default,#{metadata.organization.name},#{metadata.organization.address}) returning orgid")
    @Options(flushCache = Options.FlushCachePolicy.TRUE)
    int createDocToOrganization(@Param("metadata") Metadata metadata, @Param("path") String path, @Param("objectId") String objectId);
```

