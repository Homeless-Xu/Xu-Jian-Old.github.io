---
layout: post
title: FTP Server
tags: 
categories: 🛠
---

## FTP Server
文件服务器,不一定要FTP的.
SMB 能实现同样的功能 而且的更方便.
**445 是SMB端口,能直接上传下载文件. 集成AD域的**


Windows 2003 搭建 [阿里云详细教程][1]/[微软官网教程][2]
> FTP 依赖 IIS. 必须开启 IIS.
> IIS 的 FTP 是不支持用户自己修改改密码的.
> FTP 有很多软件可以实现.最简单的是用系统自带的.

有问题 记得重启服务器.再试试. 比如 端口被占用.


## FTP windows2003 搭建

1. manage your server 
2. add or remove a role 
3. add or remove programs !!!!
4. 选择 application server
5. 点击 details
6. 选择 IIS 27.4MB 的那个 不要打钩 选择 details
只要选择  
common filee
FTP server
IIS

ok → ok → next 

(需要插入光盘的话. 可以去下个 iis 的安装包. 缺少文件就定位到这个安装包 重复好多次 就能安装成功了)

然后就能看到本机21端口开了.




## 配置 FTP 服务
若要将 FTP 服务配置为仅允许匿名连接，请按照下列步骤操作：
1	启动“Internet 信息服务管理器”或打开 IIS 管理单元。
2	展开“服务器名称”，其中服务器名称是该服务器的名称。
3	展开“FTP 站点”
4	右击“默认 FTP 站点”，然后单击“属性”。
5	单击“安全帐户”选项卡。
6	单击以选中“允许匿名连接”复选框（如果它尚未被选中），然后单击以选中“仅允许匿名连接”复选框。 
7	
8	如果您单击选中“仅允许匿名连接”复选框，则您将 FTP 服务配置为仅允许匿名连接。用户无法使用用户名和密码登录。
9	单击“主目录”选项卡。
10	单击以选中“读取”和“日志访问”复选框（如果它们尚未被选中），然后单击以清除“写入”复选框（如果它尚未被清除）。
11	单击“确定”。
12	退出“Internet 信息服务管理器”或者关闭 IIS 管理单元。
FTP 服务器现已配置为接受传入的 FTP 请求。将要提供的文件复制或移动到 FTP 发布文件夹以供访问。默认的文件夹是驱动器:\Inetpub\Ftproot，其中驱动器是安装 IIS 的驱动器。




查看端口:

3 Posts
Re: IIS cannot be started. Another web site may be using the same port
Jul 20, 2007 11:30 AM|LINK
this is what netstat -a produced....
C:\Windows\system32\>netstat -a
Active Connections
  Proto  Local Address          Foreign Address        State
  TCP    0.0.0.0:135            MARS:0                 LISTENING
  TCP    0.0.0.0:427            MARS:0                 LISTENING




You can use the netstat -anbcommand to see which process is listening on port 21.
Be sure to run that from an elevated command-line.
Edit: For clarification, here is what the -anb option does:
•	a Displays listening ports as well as open connections
•	n Doesn't attempt to resolve host names and port numbers (makes it much faster)
•	b Tries to display the process associated with each specific socket.










[1]:	https://help.aliyun.com/knowledge_detail/5974571.html
[2]:	https://support.microsoft.com/zh-cn/kb/323384