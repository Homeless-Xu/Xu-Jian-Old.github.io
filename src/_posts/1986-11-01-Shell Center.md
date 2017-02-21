---
layout: post
title: “Shell Center”
tags: CLI
categories: Tooles
---




## 常用命令


重启机器    shutdown -r now 
切换用户  exit
更换密码 passwd 进账户 直接改密码 

ip 
查询   ip :    addr    查看ip 信息  
加/删 ip :    sudo ip addr add 192.168.0.193/24 dev wlan0
查看   ip :  ip addr  show wlan0  
查看路由器   ip route show
查看 一个ip的路由包 从哪里来的 ip route get 58.217.200.13 (百度的ip)

网络接口类型:
lo  本地回环接口
eth(0-9)  以太网接口
pppx 点对点 接口





## chmod

sudo chmod -R 777 /usr/local/mysql-5.7.11-osx10.9-x86\_64/data/

data 文件夹 下  所有文件 及 子文件夹 都有777 权限.



chmod o+x 

u → user    文件所有者 
g → group   文件所有者所在组
o → others  所有其他用户
a → all     所有用户.


 - - =   增加权限 去除权限  重新设置所有权限


例子:
chmod a+r file.











## 系统状态
top 
查看系统各方面状态.







## 查找文件
终端查找文件

	find ~ -name "xujian.zip"
	语法:  find + 路径 +参数







## 文件解压打包
Linux 最常用打包程序tar

	使用tar程序打出来的包我们常称为tar包，通常都是以.tar结尾的。
	生成tar包后，就可以用其它的程序来进行压缩了.
	
	tar命令基本用法： 
	　　tar命令的选项有很多(用man tar可以查看到)，但常用的就那么几个选项
	
	　　\# tar -cf all.tar \*.jpg 
	　　这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包 ，-f指定包的文件名。 
 　　
	tar -rf all.tar \*.gif
	　　这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。 
	
	tar -uf all.tar logo.gif
	　　这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。 
	
	　　\# tar -tf all.tar 
	　　这条命令是列出all.tar包中所有文件，-t是列出文件的意思 
	
	　　\# tar -xf all.tar 
	　　这条命令是解出all.tar包中所有文件，-x是解开的意思 
	
	　　为了方便用户在打包解包的同时可以压缩或解压文件，tar提供了一种特殊的功能。
	 这就是tar可以在打包或解包的同时调用其它的压缩程序，比如调用gzip、bzip2
	
	
	
	1) tar调用gzip 
	　　gzip是一个压缩程序， .gz结尾的文件就是gzip压缩的结果。
	  gzip 相对的解压程序是gunzip。 tar中使用-z这个参数来调用gzip。 
	　　\# tar -czf all.tar.gz \*.jpg 
	　　将所有.jpg的文件打成一个tar包，并用gzip压缩，包名为all.tar.gz 
	　　\# tar -xzf all.tar.gz 
	　　这条命令是将上面产生的包解开。 
 　　
	2) tar调用bzip2 
	　　bzip2是一个压缩能力更强的压缩程序，.bz2结尾。 
	  与bzip2相对的解压程序是bunzip2。tar中使用-j这个参数来调用gzip。
	
	　　\# tar -cjf all.tar.bz2 \*.jpg 
	　  将所有.jpg的文件打成一个tar包，并且将其用bzip2压缩，生成一个all.tar.bz2 文件
	　　\# tar -xjf all.tar.bz2 
	　　这条命令是将上面产生的包解开。 
	
	
	下面对于tar系列的压缩文 件作一个小结： 
	　　1)对于.tar结尾的文件 
	　　tar -xf all.tar 
 　
	　2)对于.gz结尾的文件 
	　　gzip -d all.gz 
	　　gunzip all.gz 
 　
	　3)对于.tgz或.tar.gz结尾的文件 
	　　tar -xzf all.tar.gz 
	　　tar -xzf all.tgz 
 　　
	4)对于.bz2结尾的文件 
	　　bzip2 -d all.bz2 
	　　bunzip2 all.bz2 
	　　5)对于tar.bz2结尾的文件 
	　　tar -xjf all.tar.bz2 
 　
	　　另外对于Window下的常见压缩文件.zip和.rar，Linux也有相应的方法来解压它 们： 
	1)对于.zip 
	　　linux下提供了zip和unzip程序，zip是压缩程序，unzip是解压程序。
	
	　　\# zip all.zip \*.jpg 
	　　这条命令是将所有.jpg的文件压缩成一个zip包 
	unzip all.zip
	　　这条命令是将all.zip中的所有文件解压出来 
	
	2)对于.rar 
	　　要在linux下处理.rar文件，需要安装RAR for Linux，可以从网上下载，RAR for Linux 不是免费的；
	可从http://www.rarsoft.com/download.htm下载RARfor Linux 3.2.0，  然后安装： 
	　　\# tar -xzpvf rarlinux-3.2.0.tar.gz 
	　　\# cd rar 
	　　\# make 
	　　这样就安装好了，安装后就有了rar和unrar这两个程序，
	rar是压缩程序，unrar 是解压程序。　
	
	tar 
	
	-c: 建立压缩档案 
	-x：解压 
	-t：查看内容 
	-r：向压缩归档文件末尾追加文件 
	-u：更新原压缩包中的文件 
	
	这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。下面的参数是根据需要在压缩或解压档案时可选的。 
	
	-z：有gzip属性的 
	-j：有bz2属性的 
	-Z：有compress属性的 
	-v：显示所有过程 
	-O：将文件解开到标准输出 
	
	下面的参数-f是必须的 
	-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。 
	tar -cf all.tar \*.jpg这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。
	tar -rf all.tar \*.gif
	这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。 
	tar -uf all.tar logo.gif
	这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。 
	tar -tf all.tar
	这条命令是列出all.tar包中所有文件，-t是列出文件的意思 
	tar -xf all.tar
	这条命令是解出all.tar包中所有文件，-x是解开的意思 
	压缩 
	tar –cvf jpg.tar \*.jpg //将目录里所有jpg文件打包成tar.jpg 
	tar –czf jpg.tar.gz \*.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz 
	tar –cjf jpg.tar.bz2 \*.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2 
	tar –cZf jpg.tar.Z \*.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z 
	rar a jpg.rar \*.jpg //rar格式的压缩，需要先下载rar for linux 
	zip jpg.zip \*.jpg //zip格式的压缩，需要先下载zip for linux 
	
	解压 
	tar –xvf file.tar //解压 tar包 
	tar -xzvf file.tar.gz //解压tar.gz 
	tar -xjvf file.tar.bz2 //解压 tar.bz2 
	tar –xZvf file.tar.Z //解压tar.Z 
	unrar e file.rar //解压rar 
	unzip file.zip //解压zip 
	
	总结 
	1、\*.tar 用 tar –xvf 解压 
	2、\*.gz 用 gzip -d或者gunzip 解压 
	3、*.tar.gz和*.tgz 用 tar –xzf 解压 
	4、\*.bz2 用 bzip2 -d或者用bunzip2 解压 
	5、\*.tar.bz2用tar –xjf 解压 
	6、\*.Z 用 uncompress 解压 
	7、\*.tar.Z 用tar –xZf 解压 
	8、\*.rar 用 unrar e解压 
	9、\*.zip 用 unzip 解压
 











## 文件操作
cat 由第一行开始显示档案内容  

tac 从最后一行开始显示,可以看出 tac 是 cat 癿倒着写!  

nl 显示癿时候,顺道输出行号!  

more 一页一页癿显示档案内容  

less 不 more 类似,但是比 more 更好癿是,他可以往前翻页!  

head 叧看头几行  

tail 叧看尾巳几行  

od 以二迚制癿方式读取档案内容!  


cat 是 Concatenate (连续)的简写,
 加上 - n / -b 则每一行前面还会加上行号呦! 

鸟哥个人是比较少用 cat 啦!毕竟弼你癿档案内容癿行数赸过 40 行以上,嘿嘿!根本杢丌及在屏幕上 看到结果!


修改档案时间戒建置新档: touch 
我们在 ls 这个挃令癿介绍时,有稍微提到每个档案在 linux 底下都会记弽讲多癿时间参数, 其实是有 三个主要癿变劢时间,那么三个时间癿意义是什么呢? 
 modification time (mtime): 弼该档案癿『内容数据』变更时,就会更新这个时间!内容数据挃癿是档案癿内容,而丌是档案 癿属性戒权限喔!  

status time (ctime):  
弼该档案癿『状忞 (status)』改变时,就会更新这个时间,丼例杢说,像是权限不属性被更改 了,都会更新这个时间啊。  

access time (atime):  
弼『该档案癿内容被取用』时,就会更新这个读取时间 (access)。丼例杢说,我们使用 cat 去读 取 /etc/man.config , 就会更新该档案癿 atime 了。  
这是个挺有趣癿现象,丼例杢说,我们杢看一看你自己癿 /etc/man.config 这个档案癿时间吧!  


ls 命令 默认 mtime


找文件
which type    需要 root 进行搜索.  寻找可执行文件. 命令

find 直接搜索硬盘 . 很慢.
whereis locate  利用数据库查找  快

























## 用户 组 密码 文件



# 用户:


- 增加用户
	useradd xujian
- 删除用户
	userdel xujian
- 用户加密
	passwd test
//新增用户后，必须给他设置密码，不然不能登录。

- 修改用户目录
	usermod -d /home/test 
	//将test用户的登录目录改成/home/test


- 加入用户组
	gpasswd -a test test2 
	//将用户test加入到test2组

- 离开用户组
	gpasswd -d test test2 
	//将用户test从test2组中移出


- 当前用户 
	who

- 某用户信息
	id xujian

- 在线用户
	who -q

- 用户登录记录
	last

- 登录失败记录
	lastb

- 查看所有用户
	cut -d : -f 1 /etc/passwd



# 组


- 创建组
	groupadd  test
	//增加一个test组

- 删除组
	groupdel test2
	//删除 组test2

- 修改组名
	groupmod -n test2  test
	//将test组的名子改成test2

- 查看组
	groups xujian
	//当前登录用户xujian所在的组 groups，

- 查看所有组 
	cat /etc/group









ID(号码) 每个用户 至少有两个 ID   电脑根据这两个 id 判断用户.
使用者 ID (User ID 简称 UID)
群组 ID (Group ID 简称 GID) 
UID 
0 代表系统管理员
1-499 系统账号
500+ 分配给用户使用.





|作用|命令|实例|
|:---:|:---:|:---:|
| 创建用户 | useradd| useradd xujian  |
| 删除账号 | userdel| userdel xujian  |
| 删除密码 | passwd | passwd -d xujian |  
| 修改密码 | passwd | passwd xujian xujian     |  
| 修改账号 | usermod| usermod xujian -l xx0219 |

- 超级用户: 能给任何人 创建/修改 任何格式的密码.  
	(普通用户也能用简单密码,一定要 root 账户等进去改.自己是改不了简单密码的)
### 重要文件:  
- /etc/passwd  系统账户信息.  
- /etc/shadow  账户密码信息.加密的密码,不是明文.  
- /etc/group   群组信息 这里修改群组名  
- /etc/sudoers 给普通用户 开通临时使用 root 的权限

#### passwd:  
七个字段组成: 用户名 / 密码(x 表示) / 用户标识符 /组标识符 / 注释说明 / 用户家目录 / 用户登录后启动的一个进程.  

	root:x:0:0:root:/root:/bin/bash  
	bin:x:1:1:bin:/bin:/sbin/nologin  
	daemon:x:2:2:daemon:/sbin:/sbin/nologin  
	字段3/4 0 表示 root 用户/用户组
	字段7 nologin 就是不让用户登录的意思.

### sudoers:  
|作用|命令|注释|
|:---:|:---:|:---:|
| 查看文件权限 | ll /etc/sudoers |  默认只读.要先修改权限(用 root 登录修改) |  
| 修改文件权限 | chmod 777 sudoers | root 登录 等下最好改回去  chmod 440 sudoers  |
|||root 登录: 可用 vi  :wq! 强制修改,用别的账户登录无效.| 
| 编辑sudoers文件 |vi /etc/sudoers | 找到 root ALL=(ALL) AL (倒数17行左右); 此行下添加两行|
||xujian ALL=(ALL) ALL|这个 切换 sudo 时 需要输入密码的.|
||xx0219 ALL=(ALL) NOPASSWD:ALL | 这个 切换 sudo 时 不需要输入密码.|

## 权限分配

### 普通用户 → Root 权限  
1. root登录
2. adduser 新建用户名
3. passwd 增加新用户密码
4. 修改/etc/passwd即可，把用户名的ID和ID组修改成0。


		 
		 
# 禁用Root远程登陆
   新建账号 改到 root 权限的话 自己账号也会进不去的.
       先在ssh的配置文件里修改Root 远程登陆参数。 禁用root远程登陆。 然后创建一个远程登陆用户。 用这个用户登陆之后，在切换到root用户，拿到最高权限。
 

 
## 禁止ROOT远程SSH登录  
|命令|作用|
|:---:|:---:|
| vi /etc/ssh/sshd\_config |编辑配置文件|  
| PermitRootLogin yes | 去掉注释; yes 改成 no |  
| systemctl restart sshd.service | 重启sshd服务 (sudo 执行) |
   



### 文件权限:

|    权限     | 连接数 | 文件所有者 | 文件所在组 | 文件大小(byte) | 最后修改日期 |文件名|  
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|  
| -rw-r--r-- |   1   |     v     |  staff   |     3561     | 10 13 17:05 | .zshrc |
|    - 文件 |         |
| d 目录 |            |
| l 快捷方式 |         |



||||
|:---:|:---:|:---:|
|改变文件权限  | chmod | chmod -R 770 desktop
|改变文件所属组| chgrp | change group
|改变文件拥有者| chown | change owner chown -R desktop
|||改整个文件夹,复制文件给别人就需要改这个了!!!!

r 权限 用户只能读取文件夹名字 不能进入文件夹.  
x 权限 能不能运行 / 用户能不能进文件夹. 文件具体是什么种类的 还是通过扩展名来确定.
 
 
/dev  设备文件  
|||
|:---:|:---:|
任何硬件硬盘 键鼠 /接口讴备都是以档案的型态存在二这个目彔当中的。  
比要重要的档案有 
/dev/null, /dev/zero, /dev/tty, /dev/lp*, /dev/hd*, /dev/sd\*等等 


区块设备: 存储数据. 硬盘  
字符设备: 键盘鼠标 一次性读取的 

资料接口文件  socks   /var/run
启动一个程序 来监听客户端要求 客户端通过这个接口来数据沟通


.sh 脚本 / 批处理文件
.tar 压缩文件
.php 通过浏览器得到运算后的结果.


/usr (软件放置处) (unix software resource):软件安装/执行有关; 
/etc (配置文件) 
/opt (第三方协力软件) ￼ ￼ ￼ ￼ ￼ ￼
/boot (开机不核心档) 
￼/var/run (程序相关)  (variable):系统运作过程有关。
￼￼/var/lock (程序相关) 
/ (root, 根目彔):开机系统有关;  


/bin 
 系统有徆多放置执行文件的目彔,但/bin 比较特殊。因为/bin 放置的是在单人维护模 /bin 式下还能够被操作的挃令。 在/bin 底下的挃令可以被 root 不一般账号所使用,主要 
有:cat, chmod, chown, date, mv, mkdir, cp, bash 等等常用的挃令。 


/boot 

这个目彔主要在放置开机会使用到的档案,包括 Linux 核心档案以及开机选单不开机 /boot 所需配置文件等等。 Linux kernel 常用的档名为:vmlinuz,如果使用的是 grub 这 
个开机管理程序, 则还会存在/boot/grub/这个目彔喔! 



￼ ￼ 
/etc 
系统主要的配置文件几乎都放置在这个目彔内,例如人员的账号密码文件、 各种朋务 的吪始档等等。一般来说,这个目彔下的各文件属怅是可以让一般使用者查阅的, 但 是只有 root 有权力修改。FHS 建议丌要放置可执行文件(binary)在这个目彔中喔。比 较重要的档案有: /etc/inittab, /etc/init.d/, /etc/modprobe.conf, /etc/X11/, /etc/fstab, /etc/sysconfig/ 等等。另外,其下重要的目彔有: 
􏰀  /etc/init.d/:所有朋务的预讴吪劢 script 都是放在这里的,例如要吪劢戒者关 闭 iptables 的话:『 /etc/init.d/iptables start』、『/etc/init.d/iptables stop』  

􏰀  /etc/xinetd.d/:这就是所谓的 super daemon 管理的各顷朋务的配置文件目 彔。  

􏰀  /etc/X11/:不 X Window 有关的各种配置文件都在这里,尤其是 xorg.conf 这个 X Server 的配置文件。  

  



￼ 

￼ 
/home
这是系统默讣的用户家目彔(home directory)。在你新增一个一般使用者账号时, 默 讣的用户家目彔都会觃范到这里来。比较重要的是,家目彔有两种代号喔: :代表目前这个用户的家目彔,而
dmtsai :则代表 dmtsai 的家目彔! 






/lib

系统的函式库非常的多,而/lib 放置的则是在开机时会用到的函式库, 以及在/bin 戒 /sbin 底下的挃令会呼叫的函式库而已。 什举是函式库呢?妳可以将他想成是『外 挂』,某些挃令必项要有这些『外挂』才能够顸利完成程序的执行乀意。 尤其重要的 是/lib/modules/这个目彔, 因为该目彔会放置核心相关的模块(驱劢程序)喔! 

/opt
这个是给第三方协力软件放置的目彔。什举是第三方协力软件啊? 丼例来说,KDE 
这个桌面管理系统是一个独立的计划,丌过他可以安装到 Linux 系统中,因此 KDE /opt 的软件就建议放置到此目彔下了。 另外,如果妳想要自行安装额外的软件(非原本的 
distribution 提供的),那举也能够将你的软件安装到这里来。 丌过,以前的 Linux 系 统中,我们还是习惯放置在/usr/local 目彔下呢! 



/sbin
inux 有非常多挃令是用来讴定系统环境的,这些挃令只有 root 才能够利用来『讴 定』系统,其他用户最多只能用来『查询』而已。 放在/sbin 底下的为开机过程中所 需要的,里面包括了开机、修复、还原系统所需要的挃令。 至二某些朋务器软件程 序,一般则放置到/usr/sbin/当中。至二本机自行安装的软件所产生的系统执行文件 (system binary), 则放置到/usr/local/sbin/当中了。常见的挃令包括:fdisk, fsck, ifconfig, init, mkfs 等等。 

/srv
srv 可以规为『service』的缩写,是一些网络朋务吪劢乀后,这些朋务所需要取用的 /srv 数据目彔。 常见的朋务例如 WWW, FTP 等等。丼例来说,WWW 朋务器需要的网页 
资料就可以放置在/srv/www/里面。 


􏰀 /etc:配置文件  
􏰀 /bin:重要执行档  
􏰀 /dev:所需要的装置档案  
􏰀 /lib:执行档所需的函式库不核心所需的模块 􏰀 /sbin:重要的系统执行文件 


/usr 为 user 的缩写,其实 usr 是 Unix Software Resource 的缩写, 也就是『Unix 操作系统软件资源』所放置的目彔, 

/var 的意丿不内容: 
如果/usr 是安装时会占用较大硬盘容量的目彔,那举/var 就是在系统运作后才会渐渐占用硬盘容量的目 彔。 因为/var 目彔主要针对常态怅变劢的档案,包括快取(cache)、登彔档(log file)以及某些软件运作 所产生的档案, 包括程序档案(lock file, run file),戒者例如 MySQL 数据库的档案等等。常见的次目 彔有: 

/var/lib/  
程序本身执行的过程中,需要使用到的数据文件放置的目彔。在此目彔下各自的软 /var/lib/ 件应该要有各自的目彔。 丼例来说,MySQL 的数据库放置到/var/lib/mysql/而 
rpm 的数据库则放到/var/lib/rpm 去! 


/var/log/ 

重要到丌行!这是登彔文件放置的目彔!里面比较重要的档案如 /var/log/messages, /var/log/wtmp(记彔登入者的信息)等。 


绝对路径 / 相对路径 
也可将所谓的路径(path)定丿为绝对路径(absolute)不相对路径(relative)。 

 相对路径:相对目前路径的文件名写法。 例如 ./home/dmtsai 戒 ../../home/dmtsai/ 等等。  
反正开头丌是 / 就属二相对路径的写法  


􏰀  . :代表当前的目彔,也可以使用 ./ 来表示;  

􏰀  .. :代表上一层目彔,也可以 ../ 来代表。  



  









root 密码忘记
例如重新进入单人维护模式
Live CD 开机后挂载根目录去修改 /etc/shadow,
将里面的 root 密码字段清空, 再重新启动后
root 将不用密码就可登入!
登入后再赶忚以 passwd 命令去设定 root 密码卲可。  


  变换身份(平时用一般账户 必要时用 root)
su -  直接变 root 账户  要root密码    用 login-shell 来登陆

su  变换身份(让自己的身份变成 root 而已.) 默认直接以 root 登陆  需要输入 root 密码. 以 non-login shell登陆
很多变量 用的还是变为 root 之前的变量.






sudo 命令  要自己的密码 (前提是管理员  给你开通 sudo 的功能.)

visudo    直接修改 /etc/sudoers 文件.

账户登陆问题
有些账户是不需要登陆shell 的  但是可以使用系列资源.
比如说 邮件服务.  那么多邮箱账号 只要能收取邮件就可以了  不需要登陆 ssh.

w 查看谁 zaixian
last 查看登陆情况 

和 别的用户交流.  
先查看 谁在线.
write xujian pts/0
hello  按下 ctrl d 结束输入. 对方就能看到了.


wall i will shutdown the server   告诉所有人.

mailbox  每个用户都有一个 邮箱.
用户不在线的话 就用 mailbox 来发信息吧.
mail xujian -s “nice to meet you”
hello 
.   结束时 最后一行 写一个小数点. 再回车.

收件  直接运行 mail


 最好用命令增加用户. 因为加一个用户涉及很多文件 要是漏了一个 会出问题.

  程序 :linux 触发任何一个事件  系统都当成一个程序 给这个程序 一个 ID → 就是 PID
比如 用root登陆ssh  ssh 服务器会给你发一个 pid 然后你用 root 执行命令 服务器也会给这么命令发一个 pid 
登陆 ssh  就是父进程 .
执行命令  子进程


终端 输入 ps -l
→
UID   PID  PPID        F CPU PRI NI       SZ    RSS WCHAN     S             ADDR TTY           TIME CMD
  501 12345 12344     4006   0  31  0  2455576   2916 -      S                   0 ttys000    0:00.09 -zsh
  501 12387 12345     4006   0  31  0  2446696   1304 -      S                   0 ttys000    0:00.01 bash
  501 12391 12387     4006   0  31  0  2463768   2976 -      S                   0 ttys000    0:00.07 zsh

 Parent PID (PPID)  
杀掉子进程 父进程会再创建一个子进程     杀掉父进程才有用.

程序 在硬盘  触发后加载到内存  一个程序有好多中权限 root / user   系统通过 pid 判断这个程序 是否有权限进行工作.
就比如 登陆是 ssh  bash 这个程序.   root 进去是 root 的相应权限.


常驻内存的程序 就是服务. daemon 
网络服务 启动后 会开启一个可以负责网络监听的端口 以便外部的客户端 可以连接.

linux 默认提供 6个文字界面 就是能开6个 ssh.   和 一个图形界面.

linux 绝对不会死机的   如果一个窗口没反应  切换到别的窗口  ps -aux 找出刚才错误的程序  kill  再回去 有可以了.



bash 下 工作控制  前台 foreground   后台 background (能自动运行的 无法停止的 用 bg fg 来呼叫该工作)
一次进行多个任务. 比如后台下载.
cp file1 file2 &      &:就是后台执行的意思.

后台程序 最好将输出数据 利用 数据流导向 导到文件里. 
tar -zpcvf /tmp/etc.tar.gz /etc \> /tmp/log.txt 2\>&1 &

暂停程序到后台. 比如 vi 编辑文件时 需要找别的文件.  按下 ctrl z 

观察目前的 后台状况.  jobs
后台转前台 fg (foreground)

vi 编辑文件 正常退出 不会有交换文件残留      不正常退出 就会有交换文件 方便找回数据,

静态 ps  
ps aux  观察系统所有数据程序
ps -l   查自己用户 bash 的数据程序  

动态top
查看进程.


tty 终端机的位置.  远程登录则使用动态接口 pts/n

sz 代表 内存用量
wchan 代表 程序是否活的.


f 程序旗标   4 是 root 权限
c cpu 使用率
pri/ni Priority/Nice 的缩写，
代表此程序被 CPU 所执行癿优先级，数值越小代表该程序越忚
被 CPU 执行。

找父程序 pstree


程序执行顺序
cpu 一秒能运行 好几 G 的指令次数 每个进程在一秒内  或多或少都会被 cpu 执行.
优先级高的 优先运行
priority 优先执行顺序  
PRI 优先值


调整优先值  Nice  / NI 
nice 值 有正负  pri 越小约约快执行  
root 能调整范围 (-20,19)
一般用户 只能 (0,19) 

pri(new) = pri(old) + nice 
比如: nice =7  pri(old)=10
新的 pri 就是 17 

pri 是 系统动态调整的.  nice 虽然能影响 优先级 最后的优先级还是 系统决定的



内存使用情况 
free
free -b/k/m/g  内存显示单位  默认是 kb

linux 内存问题
不管不插多少内存 他都会把你用掉   尽可能利用才是高效的.不像 win 的垃圾 .
注意 swap 内存.  最好不要被使用.   最好不要超过20%以上 超了就加物理内存吧
swap 实在比内存速度差很多很多  系统是因为物理内存不足才用 swap 的.



uname 查看系统信息
uptime 系统启动时间 和工作负载.


netstat  追踪网络  网络监控.
输出分两部分  网络 与 系列.
选顷不参数：
-a ：将目前系统上所有的联机、监听、 Socket 数据都列出来
-t ：列出 tcp 网绚封包的数据
-u ：列出 udp 网绚封包的数据
-l ：列出目前正在网络监听 (listen) 的服务；
-p ：列出该网绚服务的程序 PID

 




## 系统服务. service
daemon = service
电脑启动 自动启动很多服务  打印机服务 邮件服务等等

端口号  比喻房子的楼层  
ip 门牌号

/etc/services   服务与端口号 绑定

/etc/init.d/\* ：服务脚本放置处
系统上几乎所有的服务脚本都放置在这里！事实上这是公认的目录，
我们的 CentOS 实际上放置在/etc/rc.d/init.d/ 啦！

x /etc/sysconfig/\* ：各服务的初始化环境配置文件
几乎所有的服务都会将初始化的一些选项讴定写入到这个目录下，
丼例来说，
登录档的 syslog 这支 daemon 的初始化讴定就写入在 /etc/sysconfig/syslog 这里呢！
网络的设定则写在 /etc/sysconfig/network 这个档案中。

x /etc/xinetd.conf, /etc/xinetd.d/\* ：super daemon 配置文件


x /etc/\* ：各服务各自的配置文件
第六章就讱过了，大家的配置文件都是放置在 /etc/ 底下的喔！

x /var/lib/\* ：各服务产生的数据库
一些会产生数据的服务都会将他的数据写入到 /var/lib/ 目录中。
丼例来说，数据库管理系统 MySQL 的数据库默就是写入 /var/lib/mysql/ 这个目录下啦！

设置开机启动服务:

电脑开机 读取 bios   通过 bios 获取第一个可启动的硬盘   读取 mbr  获取开机管理程序
加载核心  核心主动呼叫 init 程序.   init 程序开始执行初始化 /etc/rc.d/rc.sysinit
根据 init 设定 进行服务启动 
加载本机设定.

chkconfig 开机服务设定.

默认开机服务:
acpid 电源管理模块 
iptable 防火墙. 不能取消 只能设置.
network 网络设定.
httpd 让电脑变 www 服务器
ntp network time protocol 网络校时
smb  让 linux 变成 win 的晚上邻居.




登陆文件 
就是记录系统信息的几个档案， 
例如：何时、何地 (来源 IP)、何人 (什么服务器务名称)、做了什举劢作。
 换句话说就是：记录系统在什举时候由哪个程序做了什举样的行为时，发生了何种的事件等等。

系统问题 可以通过分析这个文件 来找出问题.

如果你无法启动邮件服务  那么查询一下 /var/log/maillog 通常可以得到不错的解答！

 /var/log/lastlog：
可以记录系统上面所有的账号最近一次登入系统时的相关信息。 第十四章讱到的 lastlog 挃令就是利用这个档
案的记录信息来显示的

/var/log/messages：
这个档案相当的重要，几乎系统发生的错诨讯息 (戒者是重要的信息) 都会记录在这个档案中； 如果系统发生
莫名的错诨时，这个档案是一定要查阅的登录档乀一。

/var/log/messages：
这个档案相当的重要，几乎系统发生的错诨讯息 (戒者是重要的信息) 都会记录在这个档案中； 如果系统发生
莫名的错诨时，这个档案是一定要查阅的登录档乀一。
/var/log/secure：
基本上，叧要牵涉到『需要输入账号密码』的软件，那举当登入时 (丌管登入正确戒错诨) 都会被记录在此档
案中。 包括系统的 login 程序、图形接口登入所使用的 gdm 程序、 su, sudo 等程序、还有网绚联机的 ssh,
telnet 等程序， 登入信息都会被记载在这里；

电脑被黑 人家会删除你的 登陆文件里面的信息. 就查不到它额 
可以 设置登陆文件权限 只能增加 不能删除. 


分析登陆文件.
  有分析软件 可以自己结果发送到你邮箱的.


ip 设置
子网掩码 netmask
网关  gateway

防火墙:
 /etc/sysconfig/iptables   文件不存在是因为 没有启动防火墙!!! 

打印机:  有 linux 驱动 才能正常打印




软件安装

开源: 提供源代码 你可以自己修改代码. 来符合自己需求.
二进制文件   binary prigram 
 程序库  模块. 比如身份验证 pam 功能  只要加入代码 系统就会直接使用这个功能 .

make 

configure 

静态函数库 扩展名 .a
动态函数库 扩展名 .so









软件管理安装  
distribution 代表    软件管理机制      使用挃令  软件管理机制       在线升级机制(挃令)
Red Hat/Fedora   RPM    rpm, rpmbuild    YUM (yum)
Debian/Ubuntu   DPKG    dpkg           APT (apt-get



RPM RedHat Package Manager 
   Red Hat 这家公司开发出来的  cenos  Fedora,  为主
RPM 则依开发商的丌同，有 Red Hat 系统的 yum ， SuSE 系统的 Yast Online Update (YOU)， Mandriva 的 urpmi 软件
等。



dpkg   由 Debian Linux 社群所开发出来的，  Ubuntu 等等。
在 dpkg 管理机制上就开发出 APT 的在线升级机
制，

RedHat Package Manager 



平台
i386   i 是兼容 intel 的意思    386 是cpu 等级
x86\_64\_ 对64位cpu 进行特定的优化.

rpm -ivh     默认直接用这个就好了.
 -i:install
-v: 安装信息
-h: 安装进度.
+网址 直接安装.












## 进程
mac 杀死pid

比如要杀 398 这个进程。
kill －9 398





## 增删文件夹
mkdir:建立一个新癿目弽 
 -p 这个选项喔!你可以直接下达:『 mkdir -p /home/bird/testing/test1 』 则系统会自劢癿帮你将 /home, /home/bird, /home/bird/testing 依序 癿建立起目弽!幵丏, 如果该目弽本杢就已经存在时,系统也丌会显示错诨讯息喔!挺忚乐癿吧!

  

􏰀  rmdir:删除一个空癿目弽  

cd change directory 

复制、删除不移劢: cp, rm, mv 
要复制档案,请使用 cp (copy) 这个  还可以建立连结档 (就是忚捷方式啰),
比对两档案癿新旧而予以更新, 以及复制整个目弽等等癿功 能呢!
至亍移劢目录 与档案,则使用 mv (move), 这个挃令也可以直接拿杢作更名 (rename) 癿劢作 喔!至亍移除吗?那就是 rm (remove) 这个挃令啰底下我们就杢瞧一瞧先 









ping 192.168.0.6 -t \>\>C:\Users\xx261\desktop\11.txt



Edit


抓包 packet  
帧 frame



echo off


netsh -c “i i” delete neighbors 


netsh -c “i i” add neighbors 12 192.168.0.5 98-90-96-a2-2b-f4 


netsh -c “i i” add neighbors 12 192.168.0.6 9c-b6-54-6c-72-22 


netsh -c “i i” add neighbors 12 192.168.0.247 ec-b1-d7-f3-a8-94  


单网卡。 


删除 用 
arp -d   这个删不干净   别用，


netsh i i show in    看idx


netsh -c “i i” delete neighbors 


arp -a   所有缓存表。


arp -d  删除指定 ip


arp -d \*  删除所有 缓存


echo off    // 关闭命令回显









## 无标题 - 3
date 显示日期时间.
cal 显示当月日历
cal 2009 显示09全年日历
cal 10 2009 显示09年 10月信息.
bc  简单的计算器.




诊断乱码:
echo $LANG   显示目前支持的 语言.   zh\_CN.UTF-8  

LANG=en\_US  修改成英文的. (临时的 重新登录就变回去了)

基础指令


tab 键:
命令补全 文件名补全. 防止打错名字.
不同的地方 不一样的结果. 字段一 打的肯定是命令 所以这里是命令补全 
字段2 一般是文件名 这里是文件名补全

ctrl + c 停止当前程序.
ctrl + d 相当于 exit 退出?


connand not found : 一般原因是 打错命令(大小写 拼错)
要么就是没安装软件.

 命令不会用  man date.
name 简短指令,数据名称说明.
synopsis 语法简介
description 语法完整说明
example 例子.

/date  向下搜索
?date 向上搜索





有命令解释
参数解释 用法 
- 是短选项名称  - -  是完整选项名称
- f  - - file
- r  - -reference
空格键 翻页 
q 退出 man page


关机:
查看系统状态 有谁在线  who 
网络联机状态: netstat -a 
后台程序 ps -aux

:sync  将数据写入硬盘 系统运行时候一般数据都是在内存里的,  现在关机前都自动会 sync 所以不是很必要了.
shutdown   关机    ssh 远程关机 只有 root 可以进行.
reboot  halt poweroff 重启.

shutdown: 
可选择关机模式  重启/关机  
可定时关机  立即/定时关机 shutdown -h 1:30
可自定义关机信息 告诉 别人.要关机了
可发出警告信息. 你要进行测试 别人不要来干扰

忘记 root 密码:
不需要重装  进 单人维护模式登陆 就能改 root 密码. 
重启系统 读秒的时候  按下 e  进入 grub 模式

 ssh 下 $ 代表普通用户   # 代表root用户


ssh 远程 默认能登陆6个账号. 用 tty1-6 表示

调整显示参数(显示顺序 格式)
.   date +%Y/%m/%d-%H:%M  


 













## cat
1. cat 显示出文本内容，
	命令格式：cat filename(s)
	> 当内容超出一屏时，只保留最后一屏幕，其他内容一闪而过。

cat最常见的用法是配合重定向符来清空文件以及将几个文件合并成为一个文件。
	cat /dev/null > doc.txt  
	//清空文件doc.txt，/dev/null代表空设备文件（记住使用即可）
	cat << doc1.txt >> doc2.txt  
	//将doc1.txt中的内容保存在doc2.txt的尾部


-













*查看文件和目录*     

1. pwd
	显示当前用户所在的工作目录。      
	`pwd`      

	2. ls
		查看目录及文件的属性信息。
		不带任何选项或参数时，默认显示当前目录的内容。     
		`ls [选项] [目录或文件]`      
		    -a：所有文件和子目录，包括以点"."开头的隐藏文件或目录。      
		    -A：所有文件和子目录 不包括"."开头的隐藏文件。      
		-d：只显示目录本身的属性信息，而不显示其中的文件或子目录。      
		-l：以长格式显示文件或目录的详细信息。      
		-i：显示文件的i节点编号。      
		-h：显示信息时使用更人性化的容量大小单位。      
		-R：递归显示指定目录下各级子目录及文件的内容。
	3. cat
		显示指定文件的内容，可以同时指定多个文件。     
		`cat [选项] [文件或目录]`      
		       *-n：*显示文件内容时在每一行行首添加行号。      
		       -b：显示文件内容时为非空白行添加行号。
	4. **tail**
		查看文件末尾指定行数（默认为10行）的内容。     
		`tail [选项] [文件名]`      
		        -N：这里的N为用户指定的行数（若不指定，默认10行）      
		        **-f：**跟踪文件中新增加的内容，多用于*观察日志文件变化.*
	5. head
		查看文件开头指定行数（默认为10行）的内容。     
		`head [选项] [文件名]`      
		        -N：这里的N为用户指定的行数（若不指定，默认10行）
	6. more 
		分页显示文件内容.
		按回车可以逐行下翻，按空格键下翻一页，按b键向上翻一页。     
		`more [选项] [文件名]`      
		        -N：指定每屏显示的行数。
	7. less
		分页显示文件内容。与more命令类似，但使用更加灵活。
		按上下方向键前后逐行滚动查看，
		空格键或PageDown键向下翻页，
		按b键或pageUp键向上翻页，按q键退出。     
		`less [文件名]`

	8. wc
		统计文件的行数，单词数和字节数等信息。默认选项为“-l”。     
		`wc [选项] [文件名]`      
		      -c：文件*字节数*      
		      -l：文件*行数*      
		      -w：文件*单词个数*

	9. file 
		显示文件类型:  *ASCII / Unicode 类型*   
		`file <文件名>`

	10. du
		统计每个文件或目录的磁盘使用情况     
		`du [选项] [文件或目录]`      
		      -a：统计指定目录下每个文件及子目录占用的磁盘空间大小。      
		      -s：只统计指定目录或文件总共占用的磁盘空间大小。      
		      -h：显示信息时使用更人性化的容量大小单位。如：KB，MB，GB      
		--apprentice-size：统计文件或目录的真实大小，而不是占用磁盘空间大小。      


*检索文件和目录*
  

1. grep
	文件中查找并显示包含指定字符串的行，可用正则表达式匹配。      
	`grep [选项] <查找字符串> [文件名]`      
	        -i：查找内容时忽略大小写。      
	        -v：反转查找，即输出与查找条件不相符的行。
2. which
	查找**命令或程序文件的绝对路径.**     
	`which [选项] [命令或程序命令]`      
	        -a：列出所有查找到的结果，而不是仅仅是第一个。
3. whereis
	**查找指定名称的二进制文件** 帮助文件或源文件所在的位置。     
	`whereis [选项] [文件名]`      
	           -b：只查找指定名称的二进制文件的所在位置。      
	           -m：只查找指定名称的帮助文件所在的位置。      
	           -s：只查找指定名称的源文件所在的位置。
4. find
	根据一定的条件在指定目录范围中递归查找需要的文件或目录。     
	`find <搜索范围> <查找条件>`      
	      -name：按名称查找，可以使用通配符。      
	      -size：按大小查找，可以使用KB，MB，GB等容量单位。      
	      -type：按类型查找:
	f → 普通文件 
	d → 目录
	l → 链接
	b → 块设备 
	c → 字符设备.


*管理文件和目录*     

1. cd
	更改工作目录.不带任何参数时，默认切换到用户宿主目录。      
	`cd [选项] [目录名]`      
	    `cd ..` ：切换到上级目录。   
	`cd -` 之前目录(目录跳转时非常有用)   
	    -p ：如果指定目录为符号链接，则切换到对应的物理路劲上。
2. mkdir
	创建新目录     
	`mkdir [选项] <目录名>`      
	        -p：递归创建多层目录，即使指定目录存在也不报错。
3. touch
	- 文件存在:   更新文件的时间标记，
		- 文件不存在: 创建对应的空文件。     
			`touch <文件名>`

4. cp
	复制文件或目录，复制源是目录或多个文件时，目标必须是目录。     
	`cp [选项] <源目录或文件> <目标目录或文件>`      
	    -f：覆盖目标同名文件或目录时不进行提醒，而直接强制复制。      
	    -i：覆盖目标同名文件或目录时提醒用户确认。      
	    -l：为源文件建立硬链接，而不是直接复制磁盘数据块。      
	    -p：复制时保持源文件的权限，属主及时间戳等属性不变。      
	    -r：复制目录时使用，递归复制所有文件及子目录。
5. mv
	移动文件或目录，可以在移动时改名。
	移动多个文件或目录时，目标必须是目录。     
	`mv [选项] <源文件或目录> <目标文件或目录>`      
	      -f：覆盖目标同名文件时不进行提醒，二直接强制移动。      
	      -i：覆盖目标同名文件或目录时提醒用户确认。
6. rm
	删除指定的文件或目录。     
	`rm [选项] <文件或目录>`      
	      -f：在删除文件或目录时不进行提醒，而直接强制删除。      
	      -i：在删除文件或目录时提醒用户确认。      
	      -r：删除目录时使用，递归删除所有文件及子目录。
7. ln
	为文件或目录建立连接，硬链接不能用于目录，也不能跨硬盘分区。     
	`ln [选项] <源文件或源目录> <链接文件位置>`      
	      -s：建立软链接即符号链接文件，默认为硬链接。      
	      -f：若链接文件已存在，则直接强制覆盖。      
	      -i：在覆盖目标链接文件时提醒用户确认。
8. chmod
	修改文件或目录的访问权限。     
	`chmod [选项] <权限格式> <文件或目录>`      
	         -R：递归修改指定目录下的所有文件，子目录的权限。


sudo chmod -R 777 /usr/local/mysql-5.7.11-osx10.9-x86\_64/data/

data 文件夹 下  所有文件 及 子文件夹 都有777 权限.






9. chown
	修改文件或目录的所有权，可以同时修改文件的属主属组。     
	`chown [选项] <[属主][:属组]> <文件或目录>`      
	         -R：递归修改指定目录下的所以文件，子目录的所有权。
10. chattr
	修改文件的i节点属性，使用lsattr命令可以查看对应的属性，格式     
	`chattr [+|-ia] <文件>`      
	          +i：将文件的i节点属性设置为不可变，即i节点锁定。      
	          -i：去除设置的+i锁定标记。      
	          +a：将文件设置为只可追加内容，原有数据不能修改。      
	          -a：去除设置的+a锁定标记。      


*压缩和备份管理*     

1. tar
	将文件或目录备份打包，
	并通过选项gzip和bzip程序将包文件进行压缩，解压。      
	`tar [选项] <包文件名> <指定备份的文件或目录>`    
	-c：创建.tar格式的包文件。      
	-C：解包时指定释放的目标文件夹。      
	-f：表示使用归档文件。      
	-j：调用bzip2程序进行压缩或解压。      
	-p：打包时保留文件及目录的权限。      
	-P：打包时保留文件及目录的绝对路径。      
	-t：列表查看保内的文件。      
	-v：输出详细信息。      
	-x：解开.tar格式的包文件。      
	-z：调用gzip程序进行压缩或解压。
2. gzip
	创建.gz格式的压缩文件。   
	`gzip [选项] <文件或目录>`    
	-1：以最快速度优先的模式创建压缩文件。      
	-9：以最大压缩比优先的模式创建压缩文件。      
	-d：解压缩.gz格式的压缩文件。
3. bzip2
	创建.bz2格式的压缩文件。     
	格式：bzip2 [选项]() \<文件或目录\>      
	-1：以最快速度优先的模式创建压缩文件。      
	-9：以最大压缩比优先的模式创建压缩文件。      
	-d：解压缩.bz2格式的压缩文件。
4. zip
	创建.zip格式的压缩文件。     
	`bzip2 [选项] <压缩文件名> <文件或目录>`      
	-1：以最快速度优先的模式创建压缩文件。      
	-9：以最大压缩比优先的模式创建压缩文件。      
	-r：递归压缩指定目录及其下所有文件，子目录。
5. unzip
	解压缩.zip格式的压缩文件。     
	`unzip [选项] <压缩文件名>`      
	-d：解压到指定的文件夹。      
	详细命令介绍请参考：RHEL 5基础篇—打包、压缩文件或目录

*管理RPM软件包*
     
rpm 安装、卸载及查询系统中的RPM软件包。      
`rpm [选项] <软件名>`      
-i：安装新的RPM软件，参数要求是.rpm格式的软件包文件。      
-U：检查更新现有的软件。      
-e：卸载指定的RPM软件包，参数要求是已安装的RPM软件包的名称。      
-q：查询系统内已安装的软件包相关信息，后面可以跟-l、-f、-p等子查询选项。      
-v：输出详细信息。      
-h：以“#”好标记显示安装进度百分比。      
详细命令介绍请参考：RHEL 5基础篇—使用rpm包安装应用程序

*管理用户和组*  

1. useradd
	添加指定的系统用户。      
	`useradd [选项] <用户名>`      
	-d：指定用户的宿主目录位置。      
	-e：指定用户的账户失效时间，可使用YYYY-MM-DD的日期格式。      
	-g：指定用户的基本组名，也可以使用GID号。      
	-G：指定用户的附加组名，也可以使用GID号。      
	-M：不为用户建立并初始化宿主目录。      
	-s：指定用户的登录shell。      
	-u：指定用户的UID号，如果该UID已经被使用，则增加-o选项忽略掉并继续执行。
2. passwd
	设置系统用户的密码，及锁定，解锁用户账户。
	未指定用户名时及修改当前用户自己的密码。     
	`passwd [选项] [用户名]`      
	-d：清空指定用户的密码，仅使用用户名即可登录系统。      
	-l：锁定用户账户。      
	-S：查看用户账户的状态。（是否被锁定）      
	-u：解锁用户账户。
3. usermod
	修改指定系统用户的信息，大部分选项与useradd命令中的作用相同。     
	`usermod [选项] <用户名>`      
	-u：修改用户的UID号。      
	-d：指定用户的宿主目录位置。      
	-e：指定用户的账户失效时间，可使用YYYY-MM-DD的日期格式。      
	-g：指定用户的基本组名，也可以使用GID号。      
	-G：指定用户的附加组名，也可以使用GID号。      
	-M：不为用户建立并初始化宿主目录。      
	-s：指定用户的登录shell。      
	-l：更改用户的登录名称。      
	-L：锁定用户账户。      
	-U：解锁用户账户。
4. userdel 
	删除指定的用户账户。     
	`userdel [选项] <用户名>`      
	-r：删除用户后，也将该用户的宿主目录一并删除。
5. groupadd
	添加一个系统用户组     
	groupadd [选项]() \<组名\>      
	-g：为新建的组指定GID组标记号。
6. groupdel
	删除指定的系统用户组。     
	`groupdel <组名>`
7. id  
	输出指定用的神风标志信息，省略用户名参数时则输出当前用户的信息。     
	`id [选项] [用户名]`      
	-u：只显示有效的用户信息。      
	-g：只显示有效的组信息。      
	-n：只输出用户名称而不是数字标记。
8. users
	查看登录到当前主机中的用户。     
	`user`
9. su
	切换为另一个用户登陆shell环境，不指定用户名参数时默认切换为root。     
	`su [-l] [目标用户名]`      
	-l：使用目标用户的登录shell环境，该选项可简写为“-”      
	详细命令介绍请参考：RHEL 5基础篇—管理用户和组


*管理文件系统*     

1. df
	查看挂载的文件系统中磁盘空间的使用情况。      
	`df [选项] [分区或挂载点]`      
	-a：输出所有可见文件系统的信息，包括伪文件系统。      
	-h：显示时使用更人性化的容量大小单位，如KB、MB、GB等。      
	-i：查看分区中的i节点占用情况。      
	-t：只查看指定类型的文件系统信息。      
	-T：输出信息同时显示该分区的文件系统类型。
2. jstat命令——显示文件或文件系统的i节点状态。     
	格式：stat [选项]() [文件]()      
	-f：显示文件所属文件系统的i节点状态，而不是文件本身的状态。
3. fdisk命令——查看磁盘分区，以及通过交互式界面为指定的磁盘进行分区设置。     
	格式：fdisk [选项]() [磁盘设备文件]()      
	-l：显示指定磁盘的分区信息。未指定磁盘设备时，则显示已识别的所有磁盘信息。
4. mkfs命令——用户创建文件系统，即多磁盘分区进行格式化。     
	格式：mkfs [-t 文件系统类型]() \<分区\>      
	-t：指定需要创建的文件系统类型。
5. fsck命令——检查和修复linux文件系统中的错误。     
	格式：fsck [-yt 分区类型]() \<分区\>      
	-y：在所有提示确认的步骤自动回答“yes”。      
	-t：指定需要检查的分区的文件系统类型。
6. mount命令——挂载磁盘存储设备或网络共享目录。     
	格式：mount [-t文件系统类型]() [-o挂载选项]() \<设备或网络共享目录\> \<挂载点目录\>      
	-t：指定设备所使用的文件系统。      
	-o：指定挂载控制选项，如ro、rw、noexec、loop等。
7. umount命令——卸载已挂载的文件系统。     
	格式：umount  \<设备位置或挂载点位置\>
8. eject命令——卸载并弹出光盘以及收回光盘托架。     
	格式：eject [选项]()      
	-t：收回已弹出的光盘托架。      
	详细命令介绍请参考：RHEL 5基础篇—管理系统磁盘及分区


*管理进程与服务*     

1. ps命令——以静态快照的方式输出当前运行的进程状况统计数据。      
	格式：ps [选项]()      
	a：显示当前终端下的所有进程信息，包括其他用户的进程。      
	u：使用以用户为主的格式输出进程信息。      
	x：显示当前用户在所有终端下的进程信息。      
	-e：显示系统内的所有进程信息。      
	-l：使用长格式显示进程信息。      
	-f：使用完整的格式显示进程信息。
2. top命令：动态显示当前运行的进程信息，默认每3秒刷新一次。     
	格式：top [选项]()      
	-d：指定动态信息的刷新时间隔，单位为秒，也可以使用ss.tt的格式。
3. pstree命令——以树形结构查看系统中的进程及相互关系。     
	格式：pstree [选项]()      
	-a：显示进程对应的命令行。      
	-u：显示进程对应的用户名信息。      
	-p：显示进程对应的进程号信息。
4. kill命令——终止指定进程号的进程，PID可以通过ps等命令获得。     
	格式：kill [选项]() \<PID号\>      
	-9：强制终止进程。
5. killall命令——终止指定进程名的所有进程，可用于结束同名的多个进程。     
	格式：killall [选项]() \<进程名\>      
	-9：强制终止进程。
6. free命令——查看系统的内存、交互空间的使用情况。     
	格式：free [选项]()      
	-b：以B为单位显示信息。      
	-k：以KB为单位显示信息。      
	-M：以MB为单位显示信息。
7. chkconfig命令——设置系统服务在不同的运行级别的自启动状态，以及添加、删除系统服务。     
	格式：chkconfig [选项]() \<服务名\> [on或off]()      
	--level：指定控制服务的运行级别范围。      
	--list：查看当前系统中的服务自启动状态。      
	--add：添加新的系统服务。      
	--del：删除指定的系统服务。
8. ntsysv命令——提供一个交互的伪图形程序，用于设置各种系统服务在不同运行级别的自启动状态。     
	格式：ntsysv [选项]()      
	--level：指定对应运行级别，数字选项对应init的不同模式，可以组合使用。      
	详细命令介绍请参考：RHEL 5基础篇—管理系统服务和进程

**网络配置管理**     

1. ifconfig命令——查看及临时设置网络接口参数，停用或激活网卡。      
	格式：ifconfig [网卡设备名]() [ip地址]() [down或up]()
2. ping命令——测试到目标主机的网络链接状态。     
	格式：ping [选项]() \<目标主机名或ip地址\>      
	-c：设置发送测试数据包的个数。      
	-s：设置发送测试数据包的大小，以字节为单位。      
	-i：设置发送每个测试数据包的间隔时间，单位为秒。
3. traceroute命令——跟踪到目标主机的路由途径。     
	格式：traceroute \<目标主机名或ip地址\>
4. mtr命令——融合了ping和traceroute命令优点的网络诊断工具，可动态刷新路径信息，按q退出。     
	格式：mtr \<目标主机名或ip地址\>
5. netstat命令——查看系统的网络链接状态的统计信息。     
	格式：netstat [选项]()      
	-a：显示当前所有的网络连接信息。      
	-n：使用数字形式表示地址，端口信息。      
	-p：同时显示和每个网络连接关联的进程信息。（PID）      
	-t：显示TCP协议相关的网络连接信息。      
	-u：显示UDP协议相关的网络连接信息。      
	-r：查看系统的路由表信息。

*其他常用命令*     

1. man命令——查看命令、内核函数或配置文件等相关的帮助手册。      
	man \<命令或函数或配置文件\>
2. help命令——查看shell内部命令的帮助信息。     
	格式：help [选项]() [内部命令名]()      
	-s：只显示概要帮助信息，通常只输出命令的格式。
3. clear命令——用于清屏，只保留一行命令提示符内容，也可以使用Ctrl+L快捷键。     
	格式：clear
4. alias命令——查看及设置命令别名，可以简化频繁使用的命令操作。     
	格式：alias [别名]()=[命令字符串]()
5. unalias命令——取消已设置的命令别名。     
	格式：unalias [选项]() [别名]()      
	-a：取消所有的命令别名设置。
6. uname命令——显示当前系统主机名，系统平台。硬件平台。内核版本，系统时间等信息。     
	格式：uname [选项]()      
	-a：显示所有的相关信息。      
	-i显示硬件的体系结构类型。      
	-r：显示Linux系统的内核版本号。



- 防火墙设置 ———————— iptables -L 
- 所有安装软件 ——————— rpm -qa
- CPU 信息  ————————   cat /proc/cpuinfo 
- 主机名(改名) ——————— hostname ( sudo hostname xx )
- 系统运行信息 ——————  uptime 
- 活动用户 ————————    w 
 - 硬盘硬件信息 ——————  cat /proc/partitions 
- 硬盘分区信息 ——————  fdisk -l 
- 内存硬件信息 ——————  cat /proc/meminfo 
- 内存信息 ————————    free -m 
- 路由表信息 ———————   route -n  
- 所有监听端口——————   netstat -lntp  
- 查看已建立连接—————  netstat -antp 
- 网络统计信息 ——————  netstat -s 
- 显示进程(静态) ——————  ps -ef  
- 用户的信息(群组/权限) ——— id xujian 
- 用户登录日志 ———————  last 
- 当前用户计划任务 ———— crontab -l  
- 所有系统服务———————   chkconfig -list  





—






gui cli  

pwd
ls
clear   cls
cd  cd ..  cd / 
cp
rm
mkdir  
rmdir  
rm -r testFolder
man






window Linux 常用命令.  诊断局域网网络故障非常有用


rout


tracert

ipconfig

netstat  


arp

ftp

ipconfig

nbtstat

net

netstat

ping
 route
telnet
tracert 

pathping
winipcfg









## shutdown / halt / reboot

`halt    `  停止系统 & 不关电源.
`poweroff`  停止系统 & 关闭电源
`reboot  `  重启系统.
  

1. shutdown
	至指定时间正常结束所有进程并关闭或重启系统。      
	`shutdown [选项] <now或关机时间> `   
		    - h：关机      
		    - r：重启      
		    - c：取消预定义的关机操作。

	2. halt

		终止及关闭系统.
		> 执行“poweroff”命令时默认与执行“halt -p”的作用相同。   

	`halt [选项]`      
	        -f：不调用shutdown结束进程，直接终止当前系统。      
	        -p：如果硬件支持，则在终止系统后关闭主机电源。
	3. reboot
		重启.   
		`reboot [选项]`      
		          -f：不调用shutdown结束进程，直接重启当前系统。









> `< >` 表示必须包含的选项或参数; `[ ]` 表示可选项或参数。

*ls*
 list 目录清单- 目录 文件 权限

`-S`  size       按照文件大小排列  
`-r`  reverse    反序排列








## iterm2  自动登录. telnet
1. Mac 电脑
2. 终端用 iTerm2 
3. 先写exp 格式的登陆脚本.   telnet.exp
4. 把脚本放到 /usr/local/bin下
5. 给脚本运行权限!!! 只能读写是不行的.\`chmod +x 文件名路径
	\`6. 去 iTerm 设置 → Profiles → 新建 
7. 输入 Name. 
8. send text as start:  输入脚本所在的完整路径.退出 

9. iTerm 菜单栏 → Profiles → 选择名字
或者 ⌘+o 快捷键 → 上下键选择 → 回车. 就登进去额.


比如 cisco 交换机.   要输入两次密码的.


	#!/usr/bin/expect
	set timeout 20
	
	spawn telnet 172.19.16.46
	// 交换机的 IP
	send "\r"
	// mac 下会多个提示 按回车就好了
	expect "Password:"
	//输入 vty 密码
	send "IT@\r"
	
	expect "Password:"
	// 输入特权模式密码
	//(Cisco telnet 的话 必须要输入两个不同的密码才能登陆的.)
	send "IT@R\r"
	interact






## Command Center
  
sudo 


ls
ls -l
ls -a



cd

mkdir
mkdir dir



 cp
cp file file2
cp dir

rm
rm -f file

rmdir
rm -rf dir



apt get

grep

cat tac
cat file 
tac file




rm -fr

pwd



mv directory direct


find / -name file

find /home/user -name \*.bin

df -h


zip
tar -xvfz
tar -xvf

 yum inatall update remove


ifconfig eth0













## ls |more


或者 手动安装 tree 命令    就能以树形结构看文件目录了.




用s///和正则表达式就可以完成



perl 正则式表达:看




sed:




这三种形式一般都和 = 或 ! 搭配使用（其中 "=" 表示相匹配，在整条语句中读作 does，"!" 表示不匹配，在整条语句中读作 doesn't），并在左侧有待处理的标量变量。如果没有该变量和 = ! 操作符，则默认为处理 $\_ 变量中的内容。举例如下：


$str = "I love Perl";

$str = m/Perl/; # 表示如果在 $str 中发现 "Perl" 字符串，则返回 "1" 否则返回 "0"。

$str = s/Perl/BASH/; # 表示将变量 $str 中的 "Perl" 字符串替换为 "BASH"，如果发生此替换则返回 "1"，否则返回 "0"。

$str ! tr/A-Z/a-z/; # 表示将变量 $str 中的所有大写字母转化为小写字母，如果转化发生了则返回 "0"，否则返回 "1"。


另外还有：


foreach (@array) { s/a/b/; } # 此处每次循环将从 @array 数组中取出一个元素存放在 $\_ 变量中，并对 $\_ 进行替换处理。

while (\<FILE\>;) { print if (m/error/); } # 这一句稍微复杂一些，他将打印 FILE 文件中所有包含 error 字符串的行。


Perl 的正则表达式中如果出现 () ，则发生匹配或替换后 () 内的模式被 Perl 解释器自动依次赋给系统 $1, $2 ...... 请看下面的例子：


$string = "I love perl";

$string = s/(love)/\<$1\>;/; # 此时 $1 = "love"，并且该替换的结果是将 $string 变为 "I <love>; perl"

$string = "i love perl";

$string = s/(i)(.)(perl)/\<$3\>;$2\<$1\>;/; # 这里 $1 = "i"，$2 = " love "，$3 = "perl"，并且替换后 $string 变为 "<perl>; love <i>;"


替换操作 s/\<pattern\>;/\<replacement\>;/ 还可以在末尾加上 e 或 g 参数，他们的含义分别为：


s/\<pattern\>;/\<replacement\>;/g 表示把待处理字符串中所有符合 \<pattern\>; 的模式全部替换为 \<replacement\>; 字符串，而不是只替换第一个出现的模式。

s/\<pattern\>;/\<replacement\>;/e 表示将把 \<replacemnet\>; 部分当作一个运算符，这个参数用的不多。


比如下面的例子：


$string = "i:love:perl";

$string = s/://; #此时 $string="ilove:perl";

$string = "i:love:perl";

$string = s/://g; #此时 $string="iloveperl"; 

$string = tr// /; #此时 $string="i love perl"; 

$string = "www22cgi44";

$string = s/(\d+)/$12/e; # (/d+)代表 $string 中的一个或多个数字字符，将这些数字字符执行 2 的操作，因此最后 $string 变成了 "www44cgi88"。


下面给出一个完整的例子：


# !/usr/bin/perl


print"请输入一个字符串!\n";

$string = \<STDIN\>;; # \<STIDN\>;代表标准输入，会让使用者输入一字符串

chop($string); # 将$string最后一个换行的字符\n删除掉

if($string = /perl/){

　　print("输入的字符串中有 perl 这个字符串!\n";

}


如果输入的字符串含有 perl 这个字符串的话，就会显示后面的提示信息。


 


9.2 正则表达式中的常用模式

下面是正则表达式中的一些常用模式。


/pattern/  结果  

. 匹配除换行符以外的所有字符 

x? 匹配 0 次或一次 x 字符串 

x\* 匹配 0 次或多次 x 字符串，但匹配可能的最少次数 

x+ 匹配 1 次或多次 x 字符串，但匹配可能的最少次数 

.\* 匹配 0 次或一次的任何字符 

.+ 匹配 1 次或多次的任何字符 

{m} 匹配刚好是 m 个 的指定字符串 

{m,n} 匹配在 m个 以上 n个 以下 的指定字符串 

{m,} 匹配 m个 以上 的指定字符串 

[]() 匹配符合 []() 内的字符 

[^]() 匹配不符合 []() 内的字符 

[0-9]() 匹配所有数字字符 

[a-z]() 匹配所有小写字母字符 

[^0-9]() 匹配所有非数字字符 

[^a-z]() 匹配所有非小写字母字符 

^ 匹配字符开头的字符 

$ 匹配字符结尾的字符 

\d 匹配一个数字的字符，和 [0-9]() 语法一样 

\d+ 匹配多个数字字符串，和 [0-9]()+ 语法一样 

\D 非数字，其他同 \d 

\D+ 非数字，其他同 \d+ 

\w 英文字母或数字的字符串，和 [a-zA-Z0-9]() 语法一样 

\w+ 和 [a-zA-Z0-9]()+ 语法一样 

\W 非英文字母或数字的字符串，和 [^a-zA-Z0-9]() 语法一样 

\W+ 和 [^a-zA-Z0-9]()+ 语法一样 

\s 空格，和 [\n\t\r\f]() 语法一样 

\s+ 和 [\n\t\r\f]()+ 一样 

\S 非空格，和 [^\n\t\r\f]() 语法一样 

\S+ 和 [^\n\t\r\f]()+ 语法一样 

\b 匹配以英文字母,数字为边界的字符串 

\B 匹配不以英文字母,数值为边界的字符串 

a|b|c 匹配符合a字符 或是b字符 或是c字符 的字符串 

abc 匹配含有 abc 的字符串 

(pattern) () 这个符号会记住所找寻到的字符串，是一个很实用的语法。第一个 () 内所找到的字符串变成 $1 这个变量或是 \1 变量，第二个 () 内所找到的字符串变成 $2 这个变量或是 \2 变量，以此类推下去。  

/pattern/i i 这个参数表示忽略英文大小写，也就是在匹配字符串的时候，不考虑英文的大小写问题。 

\ 如果要在 pattern 模式中找寻一个特殊字符，如 "\*"，则要在这个字符前加上 \ 符号，这样才会让特殊字符失效 

 


下面给出一些例子：    


范例 说明 

/perl/ 找到含有 perl 的字符串 

/^perl/ 找到开头是 perl 的字符串 

/perl$/ 找到结尾是 perl 的字符串 

/c|g|i/ 找到含有 c 或 g 或 i 的字符串 

/cg{2,4}i/ 找到 c 后面跟着 2个到 4个 g ，再跟着 i 的字符串 

/cg{2,}i/ 找到 c 后面跟着 2个以上 g ，再跟着 i 的字符串 

/cg{2}i/ 找到 c 后面跟着 2个 g，再跟着 i 的字符串 

/cg\*i/ 找到 c 后面跟着 0个或多个 g ，再跟着 i 的字符串，如同/cg{0,1}i/ 

/cg+i/ 找到 c 后面跟着一个以上 g，再跟着 i 的字符串，如同/cg{1,}i/ 

/cg?i/ 找到 c 后面跟着 0个或是 1个 g ，再跟着 i 的字符串，如同/cg{0,1}i/ 

/c.i/ 找到 c 后面跟着一个任意字符，再跟着 i 的字符串 

/c..i/ 找到 c 后面跟着二个任意字符，再跟着 i 的字符串 

/[cgi]()/ 找到符合有这三个字符任意一个的字符串 

/[^cgi]()/ 找到没有这三个字符中任意一个的字符串 

/\d/ 找寻符合数字的字符，可以使用/\d+/来表示一个或是多个数字组成的字符串 

/\D/ 找寻符合不是数字的字符，可以使用/\D+/来表示一个或是更多个非数字组成的字符串 

/\*/ 找寻符合 * 这个字符，因为 * 在常规表达式中有它的特殊意思，所以要在这个特殊符号前加上 \ 符号，这样才会让这个特殊字符失效 

/abc/i 找寻符合 abc 的字符串而且不考虑这些字符串的大小写 


 


9.3 正则表达式的八大原则

　　如果在 Unix 中曾经使用过 sed、awk、grep 这些命令的话，相信对于 Perl 语言中的正则表达式(Regular Expression)不会感到陌生。Perl 语言由于有这个功能，所以对字符串的处理能力非常强。在Perl语言的程序中，经常可以看到正则表达式的运用，在 CGI 程序设计中也不例外。


　　正则表达式是初学 Perl 的难点所在，不过只要一旦掌握其语法，你就可以拥有几乎无限的模式匹配能力，而且 Perl 编程的大部分工作都是掌握常规表达式。下面给大家介绍几条正则表达式使用过程中的 8 大原则。 


　　正则表达式在对付数据的战斗中可形成庞大的联盟——这常常是一场战争。我们要记住下面八条原则：


· 原则1：正则表达式有三种不同形式(匹配(m/ /)，替换(s/ / /eg)和转换(tr/ / /))。


· 原则2：正则表达式仅对标量进行匹配( $scalar = m/a/; 可以工作; @array = m/a/ 将把@array作为标量对待，因此可能不会成功)。


· 原则3：正则表达式匹配一个给定模式的最早的可能匹配。缺省时，仅匹配或替换正则表达式一次( $a = 'string string2'; $a = s/string/ /; 导致 $a = 'string 2')。


· 原则4：正则表达式能够处理双引号所能处理的任意和全部字符( $a = m/$varb/ 在匹配前把varb扩展为变量；如果 $varb = 'a' $a = 'as'，$a = s/$varb/ /; 等价于 $a = s/a/ /; ，执行结果使 $a = " s" )。


· 原则5：正则表达式在求值过程中产生两种情况：结果状态和反向引用： $a= m/pattern/ 表示 $a 中是否有子串 pattern 出现，$a = s/(word1)(word2)/$2$1/ 则“调换”这两个单词。


· 原则6：正则表达式的核心能力在于通配符和多重匹配运算符以及它们如何操作。$a = m/\w+/ 匹配一个或多个单词字符；$a = m/\d/" 匹配零个或多个数字。


· 原则7：如果欲匹配不止一个字符集合，Perl使用 "|" 来增加灵活性。如果输入 m/(cat|dog)/ 则相当于“匹配字符串 cat 或者 dog。


· 原则8：Perl用 (?..) 语法给正则表达式提供扩展功能。（这一点请同学们课后看相关资料）


想要学习所有这些原则？我建议大家先从简单的开始，并且不断的尝试和实验。实际上如果学会了 $a = m/ERROR/ 是在 $a 中查找子串ERROR，那么你就已经比在 C 这样的低层语言中得到了更大的处理能力。




apt-get update是更新仓库数据
◦ upgrade不是更新系统？









Git 教程:
基本命令和操作

新建仓库: 先网站上新建  再 clone到本地



git clone + 仓库网址 : 已经有个 远程仓库.  克隆一个到本地电脑

git clone https://github.com/Xu-Jian/DSM.git
 
 
 
 二、 Git 常用命令

1) 远程仓库相关命令
检出仓库：        $ git clone git://github.com/jquery/jquery.git
查看远程仓库：$ git remote -v
添加远程仓库：$ git remote add [name]() [url]()
删除远程仓库：$ git remote rm [name]()
修改远程仓库：$ git remote set-url --push [name]() [newUrl]()
拉取远程仓库：$ git pull [remoteName]() [localBranchName]()
推送远程仓库：$ git push [remoteName]() [localBranchName]()

\*如果想把本地的某个分支test提交到远程仓库，并作为远程仓库的master分支，或者作为另外一个名叫test的分支，如下：
$git push origin test:master         // 提交本地test分支作为远程的master分支
$git push origin test:test              // 提交本地test分支作为远程的test分支
 
 
 
 
 
 
 
 
 
 
 
 
 
 



 

PS :GIT的使用和SVN这类中心式的架构有很大不同。要把本地项目创建到GIT SERVER上，需要费点周折。

简单的说可以按照如下步骤：

1.先在本地创建项目，有个项目目录

2.然后在本地的这个项目目录中执行git --bare init进行初始化。

3.然后将需要提交的文件提交到本地

4.然后将项目目录COPY到服务器上，只COPY  .git 目录就行，其他工作目录不用COPY的。

5.在本地就可以推送到远程服务器上了。

还有一种方法：

如果本地初始化的时候使用的是git init，那么推送就会出现问题。

解决方法是将本地的目录全部COPY到服务器上。

然后再服务器对应目录下面执行：

git config --bool core.bare true
接着删除掉除.git目录之外的所有文件和目录即可。
这样本地就能顺利推送了。

当然直接使用

git clone --bare hello hello.git
这样直接导出裸库，然后将hello.git 这个目录直接上传到服务器上也可以。不过地址需要加上hello.git这个的目录。




# 设备:
- 群辉NAS:   IP : 192.168.1.7
- 路由器:    IP : 192.168.1.1 网件 6300  刷 dd-wrt.



## 群辉:
- 下载+启用+打开  radius server 这个套件

### 设置:
-   验证端口: 1812
-   选择验证用户所针对的来源  → 本地用户

### 客户端:
 新增  
- 名称: 随便填
- 秘钥: 大于8位  这里: 12345678
- 来源 IP:就是哪个路由器的 wifi 要开启 验证才能登录.
单一主机: 192.168.1.1 



## 路由器设置

- 不需要开启 radius 功能: 无线 → radius → 启用 →

- 只需要:无线 → 无线安全 → 安全模式: → wp2 enterprise
服务器地址 192.168.1.7
端口 1812
共享秘钥 12345678



## 手机
- 选择wifi  连接. 
- 输入 nas 中已经创建好的账号密码.
- 安装证书.


通过 nas 账号 来管理 wifi权限.

[1]():  https://www.synology.cn/zh-cn/knowledgebase/tutorials/592
[2]():  smb://xujian.myDS.me
[3]():  https://www.synology.cn/zh-cn/knowledgebase/faq/299

















## Man
> Example:    man ls 

- 所有命令的帮助文件位置
	`ls /usr/share/man`
	man1   man5   man7   man9   whatis
	man4   man6   man8   mann

	如: 
	man1 → awk.1
	man8 → ifconfig.8

*Man用法:*
> man 命令基于 less命令.less 能用的操作都能在 man 下使用
`⥎` → 下页;  `⌃+d` → 下半页; `↵` → 下行; `g`  → 首行;  ` q ` → 退出
`b ` → 上页;  `⌃+u` → 上半页; `k ` → 上行; `G`  → 尾行;  `g22` → 指定行

`/` 顺序搜索                不区分大小写
`?` 倒序搜索                `n/N` 上/下一个搜索结果

*Man命令 组成 (分不同的章节)*

1. General Command Manual 普通命令 
2. 系统调用
3. 函数库
4. 特殊文件 /dev
5. 文件格式
6. 游戏用
7. 附件
8. 系统管理员命令  ifconfig

如:
	man ls       → LS(1)
	man ifocnfig → IFCONFIG(8)

## NAME           命令全称
`ls - list directory contents`

## **SYNOPSIS**   语法格式

`ls [-ABCFGHLOPRSTUW@abcdefghiklmnopqrstuwx1] [file ...]`

**`[]` 可选项.**
> -AB… → 前面要有- 


`<>` 必须提供项
`…`  同类的内容可出现多个
`a|b|c` 多选一. 必须选一个.


Description   命令的描述
option    选项
Examples   使用示例
Author   作者
Bugs 
SEE Also 参考






list open file


看谁在使用某个文件 (也就是某个文件的 相关进程)
lsof /bin/bash
这里列出两个  就说明有两个用户/端口? 打开了 bash 这个进程


PID 程序 杀进程

活动监视器 看 PID + Port
> 端口 默认是不显示的 
> → program name 右键 选择 port 才有.

 






## SCP : Secure Copy    Linux 远程拷贝文件
> 类似 CP 命令,  cp 只能本地用而已.

命令参数:

-P 自动传输用到的端口号.




本地 上传文件 服务器:

	scp local_file user@host: remote_folder
本地文件路径  ssh账号 + IP & 服务器接受文件夹 


上传目录
scp


服务器 下载到 本地:



sftp: 安全的文件传输









## 查文件:

`find / -name httpd.conf`






## Echo

\*\*查看&修改文件.

- 覆盖文件写入:
	`echo aaa > a.txt`
- 增加写入 (文件尾部 新建一行增加)
	`echo aaa >> a.txt`
- 增加分行写入 
	`echo -e "xujian\nxujian0219@126.com" >> a.txt`
	> echo 下面 ! 是特殊符号  要`\!` 才能输出 !号.

- 多行文字输入: 
	`cat >> 文件 <<EOF`
	直接输入内容.就可以了. 可以输入很多行!!!!!!
	 Example:
		cat >> /root/a.txt <<EOF
		123456789
		bbbbbbbb
		FFFFFFFFFFFFFFFFFFFFFFF
		EOF
		//作用: 在a.txt文件后面加上三行代码。

 *Cat 和 EOF*
- cat 文本输出命令，观看某个文件的内容；
	- EOF: ”end of file"，表示文本结束符。

结合这两个标识，即可避免使用多行echo命令的方式，并实现多行输出的结果。

注意EOF只是标识，并不是固定不变的也可以用别的符号代替比如EEE等等。
	Cat << EOF  ...EOF 最后一个EOF一定顶格写，还有相关命令一定要顶格写.







## TOP / Htop - Mac OS
显示进程(动态)
> htop 源于top. 功能更加强大. `brew install htop`

效果图: ![]()
上部分:
CPU 内存 交换内存

*Middle:*  
PID  进程的标识号
USER 运行此进行的用户.
PRI  进程的优先级.??
NI   进程的优先级??
VIRT 虚拟内存占用.??
RES  物理内存占用.??



S: 进程运行状态:
R → 正在运行
S → 休眠
Z → 僵死状态

M%:  物理内存占用的百分比.

*Buttom: *
快捷键 F1-F10 对应的功能


**搜索进程: F3 **
**排序方式: F6 **
**退出:     F10**





## 分页显示文件内容

`more xx.txt`


- 回车键 下一行，
- 空格键 下一屏，
-  b    上一屏，

使用“/”加上字符串可以查找指定字符串的内容信息，找到后可以按“n”字母键继续搜索下一个符合要求的内容信息，
按“q”字母键则可退出并返回Shell命令提示符状态。






## head与tail命令的格式如下：
 
- head xx.txt 
	> 不指定参数n，则系统会默认显示10行内容。

- head -2 xx.txt
	> 显示文件前两行
- tail -5 xx.txt
	> 显示尾5行 

head 显示一个或多个文件开头n行的内容  
tail 显示一个或多个文件最后n行的内容  
























