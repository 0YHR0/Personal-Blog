---
title: Ch00 Basic
date: 2023-07-13
tags:
 - Git
categories:
 - Git
---



### 拉取远程分支并在本地创建对应分支

```sh
git clone xxx

# -b 就是创建分支
# 远程仓库名可用 origin，因为在clone的时候已经关联好了
git checkout -b <本地分支名> <远程仓库名>/<远程分支名>

# 拉取该分支最新代码
git pull <远程仓库名> <远程分支名>


# 把自己修改好的代码提交到远程对应分支
git push <远程仓库名> <远程分支名>
```

