---
layout: post
title: User Group Command
tags: Misc
categories: 👓-Linux
---

## User Group Command



|   作用   |   命令 |  实例                    |
| 创建用户 | useradd| useradd xujian           |
| 删除账号 | userdel| userdel xujian           |
| 删除密码 | passwd | passwd -d xujian         |  
| 修改密码 | passwd | passwd xujian xujian     |  
| 修改账号 | usermod| usermod xujian -l xx0219 |

- 超级用户: 能给任何人 创建/修改 任何格式的密码.  
	(*普通用户也能用简单密码*,一定要 root 账户等进去改.自己是改不了简单密码的)




**User Command**

`useradd xujian` → 增加用户
`userdel xujian` → 删除用户 
`passwd test`    → 给test这个用户加密
> 新增用户后，必须给他设置密码，不然不能登录。

`who`            → 当前用户 
`who -q`         → 在线用户
`last`           → 用户登录记录
`lastb`          → 登录失败记录
`id xujian`      → 某用户信息  


- 修改用户目录
	`usermod -d /home/test` 
	> 将test用户的登录目录改成/home/test

- 加入用户组
	`gpasswd -a test test2` 
	> 将用户test加入到test2组

- 离开用户组
	`gpasswd -d test test2` 
	> //将用户test从test2组中移出




- 查看所有用户
	`cut -d : -f 1 /etc/passwd`


**Group Command**


`groups xujian`           → xujian所在的组
`groupadd  test`          → 增加 test 组
`groupdel test2`          → 删除 test2组
`cat /etc/group`          → 查看所有组 
`groupmod -n test2  test` → 将test组名改成test2


