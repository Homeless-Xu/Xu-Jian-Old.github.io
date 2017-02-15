---
layout: post
title: MySQL php Apache php  
tags: LAMP
categories: Tooles
---


## MySQL php Apache php
  
|[MySQL][1] |  数据库软件  
|[phpMyAdmin][2] |  通过浏览器管理网络上的数据库。  
| MySQL Workbench | 数据库管理(mysql专用/可远程管理.) 
| [Apache][3] |  web 服务器
| [php][4] |  脚本语言  主要用于创建动态网页.

---- 

 

# Apache  
|命令|作用|
|:---:|:---:|
|查看版本|Apachectl -v|
|启动服务|sudo Apachectl start|
|重启服务|sudo Apachectl restart|

开启 php :
编辑php配置文件 →169行 → 取消注释.
sudo vim /etc/apache2/http.conf

选做!!!    Listen 80 改成 Listen 8888    #這樣就可以和powder分開，不會彼此衝突。  



# phpMyAdmin
- 官网下载压缩包 → 解压 → 文件夹重命名: phpmyadmin → 移到 /资源库/webserber/Documents/ 下
- 设置phpmyadmin:
	- config.sample.inc.php 重命名改成 config.inc.php,
	- 编辑这个文件  31行末尾   ‘localhost’ 改成 ’127.0.0.1′
	- 浏览器打开 http://localhost/phpmyadmin

使用方法: 登陆界面 → 选择语言 → MySQL的 用户名 / 密码  


远程设置:
修改PHPMyadmin目录下libraries/config.default.php，
830行:   AllowArbitraryServer，后面=号的false 改为true。




MySQL:

# 修改登录密码  
mysqladmin -u root password newpassword
　　　
# 显示数据库  
show databases;  

# 显示表  
use mysql; （先选择要使用的数据库）  
  show tables; (显示数据库中的表)
　　
# 显示表内容

select \* from user

# 新建数据库
create database xujian; 

# 新建表结构框架
- 比如 明珠医院 护士联系表
	- 只建立 工号 姓名 性别 学位  数据类型/长度 和默认值.
- create table 表名 (字段名 类型 数据宽度 是否为空 是否主键 自动增加 默认值)  
	    create table mzyy (  
	    \>id int(4) not null primary key auto\_increment,
		>name char(20) not null,
		>sex int(4) not null default '0',
		>degree double(16,2));
		
		以上例子不能直接复制运行. 
		原因是这个命令实在太长了,为了书写好看 把它分成好几行了.
		终端里你 可以用 \+回车键 来另起一行 而不打断输入命令.

# 修改表结构 ( 增加,删除,修改字段 )
- 添加字段:
		格式: alter table 表名 add 字段 类型 其他;  
		
		例: alter table mzyy add phone int(4) not null;
- 删除字段:
		格式: alter table 表名 drop index phone;
  
- 修改字段:  
	    格式: alter table 表名 chande 原名 新名 类型;
		例子

# 查看表结构
	mysql\> describe mzyy;
　
　
# 插入表格内容
- 新加内容: insert into 表格名 values('字段1','字段2','字段3','字段4');

- insert into mzyy values('219','xujian','男','1971-10-01');


# 删除表内容: delete from table 表格名 where id=1;

# 　修改表内容   update
　　例如：将张三的出生年月改为1971-01-10
　　mysql\> update name set csny='1971-01-10' where xm='张三';
　　
# 　　　删库和删表 
　　drop database 库名; 
　　drop table 表名；
　　
# 　　增加MySQL用户
　　格式：grant select on 数据库.\* to 用户名@登录主机 identified by "密码" 

  
# 查询前10条记录，  
但在mysql中 不支持这个写法，它用limit 10。   

十一. 常见问题：
1."Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' "错误
解决方法：
这是没启动mysql的守护进程，执行service mysqld start就行了
 




SQL server


能做什么？
SQL 数据查询   插入/删除/更新 数据

创建 新数据库/表
设置表、存储过程和视图的权限

SQL 可在数据库中创建存储过程
SQL 可在数据库中创建视图 


SQL有很多版本，但是 主要的关键词
比如 SELECT、UPDATE、DELETE、INSERT、WHERE 等等是通用的.
对大小写不敏感

## SELECT - 从数据库表中获取数据
## UPDATE - 更新数据库表中的数据
## DELETE - 从数据库表中删除数据
## INSERT INTO - 向数据库表中插入数据

## CREATE DATABASE - 创建新数据库
## ALTER DATABASE - 修改数据库
## CREATE TABLE - 创建新表
## ALTER TABLE - 变更（改变）数据库表
## DROP TABLE - 删除表
## CREATE INDEX - 创建索引（搜索键）
## DROP INDEX - 删除索引


从表中选择一列数据的内容
select name form company;
读取表里面所有内容
select \* from company



update delete insert 
select \* from table limit10/top10


mysqladmin root password xujian


显示前五行数据

select top 5 \* from icd10

更新数据 

某行某列 (直接修改 并应用)

格式 update 表格 set 要修改字段 = ‘新内容’ where 哪行 = ‘行号’
update icd10 set icd = ‘a09.90’ 
where icdname = ‘哮喘’

某行多列
update icd10 set icd = ‘a09.90’ , icdnumber = ’20’ 
where icdname = ‘哮喘’

删除某行号
delete from icd10 where 序号 = 100




插入数据

insert into ICD10 VALUES (100, 'A04.904', '实物', NULL, 'sw', 100)

数据 不用加’’   那个空值 NULL 也不用加’’

倒序查询.
select top 100 \* from ICD10 order by RecordID desc

注释行 # 










## MySQL phpAdmin Apache php
简介:  
[MySQL][5]:  数据库
[phpMyAdmin][6]: 通过浏览器管理网络上的数据库。 必须安装在 web 服务器中,也就是必须启用 Apache
MySQL Workbench : 数据库管理(mysql专用/也能远程管理.)  分社区版 和 商业版
[Apache][7]: web 服务器
[php][8]: 脚本语言  主要用于创建动态网页.

# Apache  
|命令|作用|
|:---:|:---:|
|查看版本|Apachectl -v|
|启动服务|sudo Apachectl start|
|重启服务|sudo Apachectl restart|

开启 php :
编辑php配置文件 →169行 → 取消注释.
sudo vim /etc/apache2/http.conf

选做!!!    Listen 80 改成 Listen 8888    #這樣就可以和powder分開，不會彼此衝突。  



# phpMyAdmin
- 官网下载压缩包 → 解压 → 文件夹重命名: phpmyadmin → 移到 /资源库/webserber/Documents/ 下
- 设置phpmyadmin:
	- config.sample.inc.php 重命名改成 config.inc.php,
	- 编辑这个文件  31行末尾   ‘localhost’ 改成 ’127.0.0.1′
	- 浏览器打开 http://localhost/phpmyadmin

使用方法: 登陆界面 → 选择语言 → MySQL的 用户名 / 密码  


远程设置:
修改PHPMyadmin目录下libraries/config.default.php，
830行:   AllowArbitraryServer，后面=号的false 改为true。


# MySQL

- Mac [.dmg安装包下载链接][9]

- 启动 MYSQL: 二选一
	- 系列偏好设置 → MySQL → 启动服务
	- sudo /usr/local/mysql/support-files/mysql.server start

- 终端登陆MySQL:
	- /usr/local/mysql/bin/mysql  
	- /usr/local/mysql/bin/mysql -u root -p 
	- 快捷登陆设置:只要输入;mysql就能登陆 mysql了.  
		键盘映射软件 → ;mysql 映射到 /usr/local/mysql/bin/mysql
- 终端退出MySQL: \q   



### Debian 安装 Mysql 数据库
- apt-get install mysql-server mysql-client  
- 设置 root 密码  空格.  
- mysql-server是服务器程序  
- mysql-client是客户端程序
- 登陆 mysql:  
	mysql -u root -p   ( -p 是要求输密码的意思. )
- 这个命令也能查 mysql 版本的.  
	mysql\>  出现这个就说明成功进去了.  

查看 mysql 版本




##### MySQL的几个重要目录
　　MySQL的数据库文件、配置文件和命令文件分别在不同的目录. 　　  
　　- 数据库目录    /var/lib/mysql/  
　　- 配置文件　/usr/share/mysql（mysql.server命令及配置文件）
　　\- 相关命令 /usr/bin(mysqladmin mysqldump等命令)  
　　- 启动脚本 /etc/rc.d/init.d/（启动脚本文件mysql的目录）
##### 修改登录密码  
- 命令 usr/bin/mysqladmin -u root password 'new-password'  
- 格式：mysqladmin -u用户名 -p旧密码 password 新密码  

	- 例:   给root加密码123456  
[root@test1 local]()\# /usr/bin/mysqladmin -u root password 123456  
注：因为开始时root没有密码，所以-p可以省略。  

	- 测试是否修改成功  
	[root@test1 local]()\# mysql -u root -p   
	Enter password: (输入修改后的密码123456)

##### 自动启动
- 察看mysql是否在自动启动列表中  
	[root@test1 local]()\#　/sbin/chkconfig –list  
	PS:系统默认是没有chkconfig这个命令的,需要自己安装,debian下安装很简单,有apt源.

- 把MySQL添加到你系统的启动服务组里面去  
	[root@test1 local]()\#　/sbin/chkconfig　– add　mysql
- 把MySQL从启动服务组里面删除。  
	[root@test1 local]()\#　/sbin/chkconfig　– del　mysql




## MySQL 常用操作
　　注意：MySQL中每个命令后都要以分号；结尾。  
　　　
# MySQL

	mysql> show databases;
	+----------+
	| Database |  
	+----------+
	| mysql　　| 
	| test　　 |
	+----------+　
- Mysql刚安装完有两个数据库：mysql和test。
- Mysql库非常重要，它里面有MySQL的系统信息  
	我们改密码和新增用户，实际上就是在这个库中进行操作。

###### 显示数据库中的表  

	mysql\> use mysql; （选择要使用的库）  
	mysql\> show tables;
	+-----------------+
	| Tables\_in\_mysql |
	+-----------------+
	| columns\_priv　　|
	| db　　　　　　　|
	| func　　　　　　|
	| host　　　　　　|
	| tables\_priv  |
	| user　　　　　　|
	+-----------------+
　　
##### 显示数据表的结构:
　　describe 表名;
　　显示表中的记录:  
　　select \* from 表名;  
　　例如：显示mysql库中user表中的纪录。(MySQL用户都在此表中)  
　　Select \* from user;  
- 建库： 
　　create database 库名; 
　　例如：创建一个名字位aaa的库
　　mysql\> create databases aaa;

6、建表： 
　　use 库名； 
　　create table 表名 (字段设定列表)；
　　例如：在刚创建的aaa库中建立表name,表中有id(序号，自动增长)，xm（姓名）,xb（性别）,csny（出身年月）四个字段
　　use aaa;
　　mysql\> create table name (id int(3) auto\_increment not null primary key, xm char(8),xb char(2),csny date);
　　可以用describe命令察看刚建立的表结构。
　　mysql\> describe name;
　　+-------+---------+------+-----+---------+----------------+
　　| Field | Type　　| Null | Key | Default | Extra　　　　　|
　　+-------+---------+------+-----+---------+----------------+
　　| id　　| int(3)　|　　　| PRI | NULL　　| auto\_increment |
　　| xm　　| char(8) | YES　|　　 | NULL　　|　　　　　　　　|
　　| xb　　| char(2) | YES　|　　 | NULL　　|　　　　　　　　|
　　| csny　| date　　| YES　|　　 | NULL　　|　　　　　　　　|
　　+-------+---------+------+-----+---------+----------------+
　
　　7、增加记录
　　例如：增加几条相关纪录。
　　mysql\> insert into name values('','张三','男','1971-10-01');
　　mysql\> insert into name values('','白云','女','1972-05-20');
　　可用select命令来验证结果。
　　mysql\> select \* from name;
　　+----+------+------+------------+
　　| id | xm　 | xb　 | csny　　　 |
　　+----+------+------+------------+
　　|　1 | 张三 | 男　 | 1971-10-01 |
　　|　2 | 白云 | 女　 | 1972-05-20 |
　　+----+------+------+------------+
　　8、修改纪录
　　例如：将张三的出生年月改为1971-01-10
　　mysql\> update name set csny='1971-01-10' where xm='张三';
　　9、删除纪录
　　例如：删除张三的纪录。
　　mysql\> delete from name where xm='张三';
　　10、删库和删表 
　　drop database 库名; 
　　drop table 表名；
　　九、增加MySQL用户
　　格式：grant select on 数据库.\* to 用户名@登录主机 identified by "密码" 
例1、增加一个用户user\_1密码为123，让他可以在任何主机上登录，并对所有数据库有查询、插入、修改、删除的权限。首先用以root用户连入MySQL，然后键入以下命令：
　　mysql\> grant select,insert,update,delete on *.* to user\_1@"%" Identified by "123"; 
例1增加的用户是十分危险的，如果知道了user\_1的密码，那么他就可以在网上的任何一台电脑上登录你的MySQL数据库并对你的数据为所欲为了，解决办法见例2。
　　例2、增加一个用户user\_2密码为123,让此用户只可以在localhost上登录，并可以对数据库aaa进行查询、插入、修改、删除的 操作（localhost指本地主机，即MySQL数据库所在的那台主机），这样用户即使用知道user\_2的密码，他也无法从网上直接访问数据库，只能 通过MYSQL主机来操作aaa库。
　　mysql\>grant select,insert,update,delete on aaa.\* to user\_2@localhost identified by "123";
　　用新增的用户如果登录不了MySQL，在登录时用如下命令：
　　mysql -u user\_1 -p　-h 192.168.113.50　（-h后跟的是要登录主机的ip地址）
我们知道，在ms sql server中或access中，  
若要查询前10条记录，使用top 10即可，  
但在mysql中 不支持这个写法，它用limit 10。   
  
我们可以利用MySQL中 SELECT支持的一个子句——LIMIT——来完成这项功能。   
LIMIT可以实现top N查询，也可以实现M至N（某一段）的记录查询，具体语法如下：   
SELECT * FROM MYTABLE  
ORDER BY AFIELD   
LIMIT offset, recnum  
其中offset为从第几条（M+1）记录开始，recnum为返回的记录条数。例：   
select * from mytable  
order by afield   
limit 2, 5   
即意为从第3条记录开始的5条记录。
　　
　　
十一. 常见问题：
1."Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' "错误
解决方法：
这是没启动mysql的守护进程，执行service mysqld start就行了
 
 





## MySQL phpAdmin Apache php
简介:  
[MySQL][14]:  数据库
[phpMyAdmin][15]: 通过浏览器管理网络上的数据库。 必须安装在 web 服务器中,也就是必须启用 Apache
MySQL Workbench : 数据库管理(mysql专用/也能远程管理.)  分社区版 和 商业版
[Apache][16]: web 服务器
[php][17]: 脚本语言  主要用于创建动态网页.

# Apache  
|命令|作用|
|:---:|:---:|
|查看版本|Apachectl -v|
|启动服务|sudo Apachectl start|
|重启服务|sudo Apachectl restart|

开启 php :
编辑php配置文件 →169行 → 取消注释.
sudo vim /etc/apache2/http.conf

选做!!!    Listen 80 改成 Listen 8888    #這樣就可以和powder分開，不會彼此衝突。  



# phpMyAdmin
- 官网下载压缩包 → 解压 → 文件夹重命名: phpmyadmin → 移到 /资源库/webserber/Documents/ 下
- 设置phpmyadmin:
	- config.sample.inc.php 重命名改成 config.inc.php,
	- 编辑这个文件  31行末尾   ‘localhost’ 改成 ’127.0.0.1′
	- 浏览器打开 http://localhost/phpmyadmin

使用方法: 登陆界面 → 选择语言 → MySQL的 用户名 / 密码  


远程设置:
修改PHPMyadmin目录下libraries/config.default.php，
830行:   AllowArbitraryServer，后面=号的false 改为true。


# MySQL

- Mac [.dmg安装包下载链接][18]

- 启动 MYSQL: 二选一
	- 系列偏好设置 → MySQL → 启动服务
	- sudo /usr/local/mysql/support-files/mysql.server start

- 终端登陆MySQL:
	- /usr/local/mysql/bin/mysql  
	- /usr/local/mysql/bin/mysql -u root -p 
	- 快捷登陆设置:只要输入;mysql就能登陆 mysql了.  
		键盘映射软件 → ;mysql 映射到 /usr/local/mysql/bin/mysql
- 终端退出MySQL: \q   



### Debian 安装 Mysql 数据库
- apt-get install mysql-server mysql-client  
- 设置 root 密码  空格.  
- mysql-server是服务器程序  
- mysql-client是客户端程序
- 登陆 mysql:  
	mysql -u root -p   ( -p 是要求输密码的意思. )
- 这个命令也能查 mysql 版本的.  
	mysql\>  出现这个就说明成功进去了.  

查看 mysql 版本




##### MySQL的几个重要目录
　　MySQL的数据库文件、配置文件和命令文件分别在不同的目录. 　　  
　　- 数据库目录    /var/lib/mysql/  
　　- 配置文件　/usr/share/mysql（mysql.server命令及配置文件）
　　\- 相关命令 /usr/bin(mysqladmin mysqldump等命令)  
　　- 启动脚本 /etc/rc.d/init.d/（启动脚本文件mysql的目录）
##### 修改登录密码  
- 命令 usr/bin/mysqladmin -u root password 'new-password'  
- 格式：mysqladmin -u用户名 -p旧密码 password 新密码  

	- 例:   给root加密码123456  
[root@test1 local]()\# /usr/bin/mysqladmin -u root password 123456  
注：因为开始时root没有密码，所以-p可以省略。  

	- 测试是否修改成功  
	[root@test1 local]()\# mysql -u root -p   
	Enter password: (输入修改后的密码123456)

##### 自动启动
- 察看mysql是否在自动启动列表中  
	[root@test1 local]()\#　/sbin/chkconfig –list  
	PS:系统默认是没有chkconfig这个命令的,需要自己安装,debian下安装很简单,有apt源.

- 把MySQL添加到你系统的启动服务组里面去  
	[root@test1 local]()\#　/sbin/chkconfig　– add　mysql
- 把MySQL从启动服务组里面删除。  
	[root@test1 local]()\#　/sbin/chkconfig　– del　mysql




## MySQL 常用操作
　　注意：MySQL中每个命令后都要以分号；结尾。  
　　　
# MySQL

	mysql> show databases;
	+----------+
	| Database |  
	+----------+
	| mysql　　| 
	| test　　 |
	+----------+　
- Mysql刚安装完有两个数据库：mysql和test。
- Mysql库非常重要，它里面有MySQL的系统信息  
	我们改密码和新增用户，实际上就是在这个库中进行操作。

###### 显示数据库中的表  

	mysql\> use mysql; （选择要使用的库）  
	mysql\> show tables;
	+-----------------+
	| Tables\_in\_mysql |
	+-----------------+
	| columns\_priv　　|
	| db　　　　　　　|
	| func　　　　　　|
	| host　　　　　　|
	| tables\_priv  |
	| user　　　　　　|
	+-----------------+
　　
##### 显示数据表的结构:
　　describe 表名;
　　显示表中的记录:  
　　select \* from 表名;  
　　例如：显示mysql库中user表中的纪录。(MySQL用户都在此表中)  
　　Select \* from user;  
- 建库： 
　　create database 库名; 
　　例如：创建一个名字位aaa的库
　　mysql\> create databases aaa;

6、建表： 
　　use 库名； 
　　create table 表名 (字段设定列表)；
　　例如：在刚创建的aaa库中建立表name,表中有id(序号，自动增长)，xm（姓名）,xb（性别）,csny（出身年月）四个字段
　　use aaa;
　　mysql\> create table name (id int(3) auto\_increment not null primary key, xm char(8),xb char(2),csny date);
　　可以用describe命令察看刚建立的表结构。
　　mysql\> describe name;
　　+-------+---------+------+-----+---------+----------------+
　　| Field | Type　　| Null | Key | Default | Extra　　　　　|
　　+-------+---------+------+-----+---------+----------------+
　　| id　　| int(3)　|　　　| PRI | NULL　　| auto\_increment |
　　| xm　　| char(8) | YES　|　　 | NULL　　|　　　　　　　　|
　　| xb　　| char(2) | YES　|　　 | NULL　　|　　　　　　　　|
　　| csny　| date　　| YES　|　　 | NULL　　|　　　　　　　　|
　　+-------+---------+------+-----+---------+----------------+
　
　　7、增加记录
　　例如：增加几条相关纪录。
　　mysql\> insert into name values('','张三','男','1971-10-01');
　　mysql\> insert into name values('','白云','女','1972-05-20');
　　可用select命令来验证结果。
　　mysql\> select \* from name;
　　+----+------+------+------------+
　　| id | xm　 | xb　 | csny　　　 |
　　+----+------+------+------------+
　　|　1 | 张三 | 男　 | 1971-10-01 |
　　|　2 | 白云 | 女　 | 1972-05-20 |
　　+----+------+------+------------+
　　8、修改纪录
　　例如：将张三的出生年月改为1971-01-10
　　mysql\> update name set csny='1971-01-10' where xm='张三';
　　9、删除纪录
　　例如：删除张三的纪录。
　　mysql\> delete from name where xm='张三';
　　10、删库和删表 
　　drop database 库名; 
　　drop table 表名；
　　九、增加MySQL用户
　　格式：grant select on 数据库.\* to 用户名@登录主机 identified by "密码" 
例1、增加一个用户user\_1密码为123，让他可以在任何主机上登录，并对所有数据库有查询、插入、修改、删除的权限。首先用以root用户连入MySQL，然后键入以下命令：
　　mysql\> grant select,insert,update,delete on *.* to user\_1@"%" Identified by "123"; 
例1增加的用户是十分危险的，如果知道了user\_1的密码，那么他就可以在网上的任何一台电脑上登录你的MySQL数据库并对你的数据为所欲为了，解决办法见例2。
　　例2、增加一个用户user\_2密码为123,让此用户只可以在localhost上登录，并可以对数据库aaa进行查询、插入、修改、删除的 操作（localhost指本地主机，即MySQL数据库所在的那台主机），这样用户即使用知道user\_2的密码，他也无法从网上直接访问数据库，只能 通过MYSQL主机来操作aaa库。
　　mysql\>grant select,insert,update,delete on aaa.\* to user\_2@localhost identified by "123";
　　用新增的用户如果登录不了MySQL，在登录时用如下命令：
　　mysql -u user\_1 -p　-h 192.168.113.50　（-h后跟的是要登录主机的ip地址）
我们知道，在ms sql server中或access中，  
若要查询前10条记录，使用top 10即可，  
但在mysql中 不支持这个写法，它用limit 10。   
  
我们可以利用MySQL中 SELECT支持的一个子句——LIMIT——来完成这项功能。   
LIMIT可以实现top N查询，也可以实现M至N（某一段）的记录查询，具体语法如下：   
SELECT * FROM MYTABLE  
ORDER BY AFIELD   
LIMIT offset, recnum  
其中offset为从第几条（M+1）记录开始，recnum为返回的记录条数。例：   
select * from mytable  
order by afield   
limit 2, 5   
即意为从第3条记录开始的5条记录。
　　
　　
十一. 常见问题：
1."Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' "错误
解决方法：
这是没启动mysql的守护进程，执行service mysqld start就行了
 
 







## MySQL PHP Apache
  
|[MySQL][23] |  数据库软件  
|[phpMyAdmin][24] |  通过浏览器管理网络上的数据库。  
| MySQL Workbench | 数据库管理(mysql专用/可远程管理.) 
| [Apache][25] |  web 服务器
| [php][26] |  脚本语言  主要用于创建动态网页.

---- 

# Apache  
|命令|作用|
|:---:|:---:|
|查看版本|Apachectl -v|
|启动服务|sudo Apachectl start|
|重启服务|sudo Apachectl restart|

开启 php :
编辑php配置文件 →169行 → 取消注释.
sudo vim /etc/apache2/http.conf

选做!!!    Listen 80 改成 Listen 8888    #這樣就可以和powder分開，不會彼此衝突。  



# phpMyAdmin
- 官网下载压缩包 → 解压 → 文件夹重命名: phpmyadmin → 移到 /资源库/webserber/Documents/ 下
- 设置phpmyadmin:
	- config.sample.inc.php 重命名改成 config.inc.php,
	- 编辑这个文件  31行末尾   ‘localhost’ 改成 ’127.0.0.1′
	- 浏览器打开 http://localhost/phpmyadmin

使用方法: 登陆界面 → 选择语言 → MySQL的 用户名 / 密码  


远程设置:
修改PHPMyadmin目录下libraries/config.default.php，
830行:   AllowArbitraryServer，后面=号的false 改为true。




MySQL:

# 修改登录密码  
mysqladmin -u root password newpassword
　　　
# 显示数据库  
show databases;  

# 显示表  
use mysql; （先选择要使用的数据库）  
  show tables; (显示数据库中的表)
　　
# 显示表内容

select \* from user

# 新建数据库
create database xujian; 

# 新建表结构框架
- 比如 明珠医院 护士联系表
	- 只建立 工号 姓名 性别 学位  数据类型/长度 和默认值.
- create table 表名 (字段名 类型 数据宽度 是否为空 是否主键 自动增加 默认值)  
	    create table mzyy (  
	    \>id int(4) not null primary key auto\_increment,
		>name char(20) not null,
		>sex int(4) not null default '0',
		>degree double(16,2));
		
		以上例子不能直接复制运行. 
		原因是这个命令实在太长了,为了书写好看 把它分成好几行了.
		终端里你 可以用 \+回车键 来另起一行 而不打断输入命令.

# 修改表结构 ( 增加,删除,修改字段 )
- 添加字段:
		格式: alter table 表名 add 字段 类型 其他;  
		
		例: alter table mzyy add phone int(4) not null;
- 删除字段:
		格式: alter table 表名 drop index phone;
  
- 修改字段:  
	    格式: alter table 表名 chande 原名 新名 类型;
		例子

# 查看表结构
	mysql\> describe mzyy;
　
　
# 插入表格内容
- 新加内容: insert into 表格名 values('字段1','字段2','字段3','字段4');

- insert into mzyy values('219','xujian','男','1971-10-01');


# 删除表内容: delete from table 表格名 where id=1;

# 　修改表内容   update
　　例如：将张三的出生年月改为1971-01-10
　　mysql\> update name set csny='1971-01-10' where xm='张三';
　　
# 　　　删库和删表 
　　drop database 库名; 
　　drop table 表名；
　　
# 　　增加MySQL用户
　　格式：grant select on 数据库.\* to 用户名@登录主机 identified by "密码" 

  
# 查询前10条记录，  
但在mysql中 不支持这个写法，它用limit 10。   

十一. 常见问题：
1."Can't connect to local MySQL server through socket '/var/lib/mysql/mysql.sock' "错误
解决方法：
这是没启动mysql的守护进程，执行service mysqld start就行了
 




SQL server


能做什么？
SQL 数据查询   插入/删除/更新 数据

创建 新数据库/表
设置表、存储过程和视图的权限

SQL 可在数据库中创建存储过程
SQL 可在数据库中创建视图 


SQL有很多版本，但是 主要的关键词
比如 SELECT、UPDATE、DELETE、INSERT、WHERE 等等是通用的.
对大小写不敏感

## SELECT - 从数据库表中获取数据
## UPDATE - 更新数据库表中的数据
## DELETE - 从数据库表中删除数据
## INSERT INTO - 向数据库表中插入数据

## CREATE DATABASE - 创建新数据库
## ALTER DATABASE - 修改数据库
## CREATE TABLE - 创建新表
## ALTER TABLE - 变更（改变）数据库表
## DROP TABLE - 删除表
## CREATE INDEX - 创建索引（搜索键）
## DROP INDEX - 删除索引


从表中选择一列数据的内容
select name form company;
读取表里面所有内容
select \* from company



update delete insert 
select \* from table limit10/top10


mysqladmin root password xujian


显示前五行数据

select top 5 \* from icd10

更新数据 

某行某列 (直接修改 并应用)

格式 update 表格 set 要修改字段 = ‘新内容’ where 哪行 = ‘行号’
update icd10 set icd = ‘a09.90’ 
where icdname = ‘哮喘’

某行多列
update icd10 set icd = ‘a09.90’ , icdnumber = ’20’ 
where icdname = ‘哮喘’

删除某行号
delete from icd10 where 序号 = 100




插入数据

insert into ICD10 VALUES (100, 'A04.904', '实物', NULL, 'sw', 100)

数据 不用加’’   那个空值 NULL 也不用加’’

倒序查询.
select top 100 \* from ICD10 order by RecordID desc

注释行 # 









[1]:	http://www.mysql.com
[2]:	https://www.phpmyadmin.net
[3]:	http://www.apache.org
[4]:	https://secure.php.net
[5]:	http://www.mysql.com
[6]:	https://www.phpmyadmin.net
[7]:	http://www.apache.org
[8]:	https://secure.php.net
[9]:	http://dev.mysql.com/downloads/file.php?id=459287
[14]:	http://www.mysql.com
[15]:	https://www.phpmyadmin.net
[16]:	http://www.apache.org
[17]:	https://secure.php.net
[18]:	http://dev.mysql.com/downloads/file.php?id=459287
[23]:	http://www.mysql.com
[24]:	https://www.phpmyadmin.net
[25]:	http://www.apache.org
[26]:	https://secure.php.net