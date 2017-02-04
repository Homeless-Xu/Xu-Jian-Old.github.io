---
layout: post
title: VMware tool 增强工具
tags: 
categories: 🛠OPS
---

## VMware tool 增强工具


VMwareTools是VMware虚拟机中很重要的一个工具包，有些时候在虚拟机中安装完操作系统会缺少网卡驱动，不能上网，这时只要安装VMwareTools就可以解决问题，下面以CentOS为例，来说明VMwareTools的安装方法
1、打开VMware Workstation虚拟机，开启CentOS系统
虚拟机-安装VMware Tools
登录CentOS终端命令行
2、mkdir /media/mnt    #新建挂载目录
mount /dev/cdrom    /media/mnt/      #挂载VMware Tools安装盘到/media/mnt/目录
cd /media/mnt/    #进入安装目录
ll   #查看
cp    VMwareTools-8.8.1-528969.tar.gz    /home    #复制文件到/home目录
系统运维  www.osyunwei.com  温馨提醒：qihang01原创内容©版权所有,转载请注明出处及原文链接
3、tar zxvf VMwareTools-9.6.2-1688356.tar.gz #解压(VMwareTools-9.6.2-1688356.tar.gz这个名称不同的版本是不同的，这里是以VMware 10.03的版本为例)
cd vmware-tools-distrib   #进入文件目录
./vmware-install.pl  #安装
一直按enter即可
最后，重启服务器，VMwareTools安装成功。


