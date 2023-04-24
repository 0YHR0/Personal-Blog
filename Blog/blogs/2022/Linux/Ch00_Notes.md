---
title: Notes
date: 2018-10-02
tags:
 - Linux
categories:
 - Linux

---

# Notes



## 用户

ubuntu

```sh
useradd -m haoran #创建用户并创建home
passwd haoran #改密码

#加root权限
chmod u+w /etc/sudoers

vim /etc/sudoers # 在root ALL=(ALL) ALL这一行下面添加
haoran ALL=(ALL) ALL

chmod u-w /etc/sudoers

#可以用密码登录
sudo vi /etc/ssh/sshd_config

# 改 PasswordAuthentication yes
systemctl restart sshd

#再次修改密码
sudo haoran passwd

#修改登录脚本
usermod -s /bin/bash haoran
```



ubuntu22安装docker

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-22-04



docker 安装winery

https://winery.readthedocs.io/en/latest/user/getting-started.html

```sh
docker run -it -p 8080:8080 \
  -e PUBLIC_HOSTNAME=localhost \
  -e WINERY_FEATURE_RADON=true \
  -e WINERY_REPOSITORY_PROVIDER=yaml \
  -v <path_on_your_host>:/var/repository \
  -u `id -u` \
  opentosca/radon-gmt
```

