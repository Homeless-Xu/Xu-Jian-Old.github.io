---
layout: post
title: shutdown / halt / reboot  
tags: Misc
categories: -CMD
---

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

