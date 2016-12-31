// 原理:  监听博客所有链接.  分类  有需要的用pjax 没需要的另外处理... 
// 用ajax取回数据 填充到响应地方.
// 需要 绑定选择器... 这个属性会自动寻找标签中的超链接..





$(function(){
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).pjax("a", '#contentDiv', { fragment: '#contentDiv', timeout:5000}	);	


$(document).on({
		'pjax:click': function(){  	NProgress.start();  },
		'pjax:end':   function(){   NProgress.done();   }
	});

	





	// open links(do not need pjax) in new tab.
	// 正文 也就是 所有的post 会有各种链接. 这里需要过滤.
//	var afterPjax = function() {
//		$('#contentDivDiv').find('a').filter(function() { return this.hostname != window.location.hostname; }).attr('target', '_blank');
//	};

//	afterPjax();




// 这才是最关键的 . 特别是 后面那个 fragment 参数...



	

	

});


/*





	// 定义变量???  来获取 html里面的数据.			
	var catt =  $(".catt").data('catefi');
	 // console.log("catt: "+catt);

	var catefilter = $(".cateLI").data('catefilter');
	  // console.log("catefilter: "+catefilter);

	var filenameDiv = $('#filenameDiv')


	// 最外层div开始. 过滤所有的 链接 a .. 主要的是 filenameDiv下的链接. 
	// 如果 这些链接不 包含 本博客 链接 前面的固定部分. 那么就把这些链接设置成 在blank 在新窗口打开.
	var afterPjax = function() {
			$('#bigDiv').find('a').filter( function(){
					return this.hostname != window.location.hostname;	
				}).attr('target','_blank');
		};

	afterPjax();

	// 这个是 进度条
	$(document).on({
		'pjax:click': function(){  	NProgress.start();  },
		'pjax:end':   function(){   NProgress.done();   }
	  });

	// 这个是 pjax 主要部分..  那个区域的 ....
	$(document).pjax("#filenameDiv", '#contentDiv', 
		{ fragment: '#contentDiv', timeout:3000}
	  );	

	
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
















