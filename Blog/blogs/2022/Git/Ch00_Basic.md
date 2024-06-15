---
title: Ch00 Basic
date: 2023-07-13
tags:
 - Git
categories:
 - Git
---



![image-20240514204802427](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514204802427.png)

![image-20240514212341366](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514212341366.png)

![image-20240514212434978](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514212434978.png)

![image-20240514212524064](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514212524064.png)

![image-20240514212558462](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514212558462.png)



![image-20240514212948111](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514212948111.png)

![image-20240514213021997](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514213021997.png)



![image-20240514213357604](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514213357604.png)

![image-20240514213607064](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514213607064.png)

![image-20240514213636960](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514213636960.png)

![image-20240514213829418](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514213829418.png)

![image-20240514213907410](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514213907410.png)

![image-20240514214201023](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514214201023.png)

![image-20240514214458850](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514214458850.png)

![image-20240514214651101](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514214651101.png)

![image-20240514214724165](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514214724165.png)

![image-20240514214845392](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514214845392.png)

![image-20240514215012327](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514215012327.png)

![image-20240514215131596](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514215131596.png)

![image-20240514215332985](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514215332985.png)

![image-20240514215456349](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514215456349.png)

![image-20240514215734073](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514215734073.png)

![image-20240514215827913](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514215827913.png)

![image-20240514223619000](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514223619000.png)

![image-20240514224127492](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514224127492.png)



## 拉取远程分支并在本地创建对应分支

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



## 修改当前git commit的信息

```sh
git commit --amend
```



## 克隆仓库，获取所有分支，立即切换到指定的分支。

```sh
git clone --branch <branchname> <remote-repo-url>
```



## 保留/丢弃当前分支修改并切换至其他分支

(1) 对当前分支并未进行任何修改，从而可以直接使用 git checkout 命令切换到其他分支。

```sh
git checkout test        //切换到 test 分支
```

(2) 若当前的分支已经做了一定的修改，则直接进行分支切换时，git 会产生如下错误信息。这是由于已经对当前分支进行了修改，但尚未保存而导致的。

```sh
error: Your local changes to the following files would be overwritten by checkout : xxxx　
Please commit your changes or stash them before you switch branches
```

### **丢弃本分支的修改**

当用户对当前分支的修改不是特别重要或觉得没有保留的必要时，可以使用 git checkout 命令强制切换到其他分支。再切换回该分支时，会直接退回到该分支上一次提交时的数据版本。

```sh
 git checkout -f test        //强制切换至 test 分支，丢弃当前分支的修改
```



#### **通过 git reset --hard 回退至某次提交时的数据**

```sh
git log        //当前分支的提交记录，信息包括提交对应的 哈希值 作者 邮箱 日期 描述 等
git reset --hard a13f52f3        //当前分支数据重置到哈希值开始部分为 a13f52f3 的提交的数据，git reset --hard 参数为某次提交时的哈希值的开始部分
```

当重置完成后，当前分支的数据即为被 git 记录的未经修改的数据，此时可以直接通过 git checkout 命令切换到其他分支，而不会再产生报错。



#### **通过 git checkout -- 命令忽略文件的修改**

当使用 git status 查看当前分支的文件状态时，对于不同的文件状态，git status 会提示该状态下的文件可以使用的对应 git 命令，如下图所示。![image-20231106130919249](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231106130919249.png)

可以看到，对于处于 Changes to be commited 状态的文件( 该状态的文件在使用 git commit 命令时即被提交 )，可以通过 git reset HEAD 命令将文件从 Changes to be commited 状态退出。

```sh
git reset HEAD test.txt        //将 test.txt 从 Changes to be committed 状态退出
```

对于 Changes not staged for commit 状态的文件，表示这些文件虽然被修改，但并没有被加入 Changes to be commited 状态，即使用 git commit 命令提交时，这些修改不会被记录。针对这类文件可以有两种选择。可以使用 git add 命令将这些修改放入 Changes to be committd 状态，或者通过 git checkout -- 命令忽略该文件的修改，使其回退到上一次提交时的状态。

```sh
git add test.txt                //将 test.txt 文件加入 Changes to be committed 状态,在使用 git commit 命令时上述修改即被提交
git checkout -- test.txt        //丢弃对 test.txt 的修改，其内容回退到上一次提交时的状态
```

无法直接切换其他分支的原因即是存在未被保存的修改。此时若想要丢弃当前分支的修改，直接使用 git checkout -- 命令将文件修改丢弃即可。该方法主要适用于产生的改动比较少且相对不重要的情况。



### **保留当前分支的修改**

另外一种进行切换的选择是先将当前分支的修改保存，再切换到其他分支，这样在其他分支的任务完成后，重新切换至当前分支时，可以继续当前分支的工作。



#### **直接提交当前分支**

最简单粗暴的方法即通过 git commit 命令将当前分支的修改进行提交。首先通过 git status 命令查看当前分支各个文件的状态，git status 命令还会显示不同文件状态下 git 可执行的命令，用户可以直接参考。

```sh
git status              //当前分支各文件的状态
```

通过 git add 命令将修改后的文件转化为 staged 状态，即文件的修改将处于 Changes to be committed 状态，再通过 git commit 命令将本分支的修改提交。

```sh
git add test.txt        //将此时的 test.txt 文件添加至 Changes to be committed 状态
```

在所需的修改均加入 Changes to be committed 状态后，可以通过 git commit 命令将本分支的修改提交。不需要的修改通过上文提到的 git checkout -- 命令重置即可。

```sh
git commit -m "description for this commit"    //提交本次修改
```





#### **将当前分支修改暂存**

在任务推进过程中，可能遇到需要切换到其他分支进行处理的情况。但是对应的，对于当前分支的修改可能并不足以达到需要进行一次提交的程度，此时更合适的方案是将本分支修改暂存，然后切换到其他分支进行工作，待其他分支的任务完成后，再切换回本分支，并将暂存的方案恢复，进而继续本分支的修改。



git 中提供 git stash 命令来完成上述功能，也就是上文提到的错误提示中 **"Please commit your changes or stash them before you switch branches"** 中所提到的 stash 修改的方案。



#### **暂存修改**

通过 git stash 命令将当前分支的修改暂存。经过 git stash 命令暂存修改的数据后，再使用 git status 命令可以看到文件的状态均处于未修改的状态( 而不再是修改未提交状态 )。

```sh
git stash              //暂存本分支的修改
```

如笔者通过 git stash 命令，会显示对应的 "Saved working directory and index state WIP on master :xxxxxxx" 信息。用户可以多次使用 git stash 命令，暂存的状态会以栈的形式存放。

！！ 比较有用！！

详见：https://www.jianshu.com/p/1c7ecc8d3dfb





#### **查看暂存信息**

可以通过命令 git stash list 查看已经暂存的数据。 可以看到暂存的数据通过 stash@{n} 的形式索引已经存储的修改数据。

```sh
git stash list        //显示所有 stash 的数据
```



#### **恢复修改**

当在其他分支的任务完成切换回当前分支后，可以使用 git stash apply 命令恢复之前被暂存的数据。

```sh
git stash apply                //恢复最近一次暂存的修改
git stash apply stash@{2}      //恢复索引 stash@{2} 对应的暂存的修改，索引可以通过 git stash list 进行查看
```

这里需要注意的是，通过 git stash apply 命令只会将暂存的数据恢复至 "Changes not staged for committed" 状态，即使之前修改状态中已经有文件处于 staged 状态( Changes to be committed ).为了 git 能够将文件尽可能恢复至暂存之前的状态，可以加入 --index 参数。

```sh
git stash apply --index        //在恢复暂存数据时尽量恢复至原状态( 已经 staged 状态的文件仍恢复为 staged 状态 )
```



#### **删除修改**

可以通过 git stash pop 或者 drop 命令删除对应的缓存数据。

```sh
git stash drop stash@{1}        //删除 stash@{1} 分支对应的缓存数据
git stash pop                   //将最近一次暂存数据恢复并从栈中删除
```



git stash 将用户做过的修改存放在本次 git stash 产生的暂存数据中，并将已经修改的文件恢复至未修改状态。当用户恢复暂存数据时，则将上述修改应用到当前分支上。



在本文的情景中，即将当前分支的修改通过 git stash 保存，此时当前分支恢复至未被修改之前的状态，而修改被 git stash 以栈的方式保存，可通过索引的方式访问。用户此时可以没有错误的切换至其他分支( 文件均处于未修改状态 )，待其他分支的任务完成后，再切换回本分支。此时通过 git stash apply 将被暂存的修改应用到当前分支，则当前分支的数据即被恢复至离开当前分支前的状态。





![image-20231107110011541](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20231107110011541.png)





### git rebase 和 git merge

+ merge![image-20240514225826177](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514225826177.png)
  + 产生冲突时解决冲突并add：![image-20240517204555787](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240517204555787.png)
  + ![image-20240517213658454](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240517213658454.png)

+ rebase（一般不用，会造成日志混乱）![image-20240514225840579](https://markdown-1301334775.cos.eu-frankfurt.myqcloud.com/image-20240514225840579.png)

ref：https://www.51cto.com/article/678181.html



### git cherry-pick 

你在不合并整个分支的情况下，将单个提交的更改引入到另一个分支。

```sh
git cherry-pick <commit-hash>
```

### 常见使用场景

1. **选择性合并更改**：你可能不希望将整个分支合并到当前分支中，而只想引入其中的一些特定提交。
2. **错误修复**：如果在一个分支上修复了一个错误，并且希望将这个修复应用到其他分支。
3. **补丁应用**：将某个特定功能或修复的提交应用到其他相关的分支上，而不需要合并整个分支的历史记录。









# 常用

+ 可以在把别人提交的内容先拉取到本地分支（新增）：git checkout origin test:test
+ 再用git merge合并自己开发分支和别人的内容
