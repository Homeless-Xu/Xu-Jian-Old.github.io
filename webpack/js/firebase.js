$(function (){ 
	// 集成 Firebase 就是把你的firebase账户信息 加到你的网页. 然后就能进行互动了. 
  const config = {
    apiKey: "AIzaSyCRkzJi6Ir5LIFqQ1HLymzY9GM7MxiMEVM",
    authDomain: "cms-jekyll-71cdf.firebaseapp.com",
    databaseURL: "https://cms-jekyll-71cdf.firebaseio.com",
    storageBucket: "cms-jekyll-71cdf.appspot.com",
    messagingSenderId: "727659745071"
  };
  firebase.initializeApp(config);




	// 连接 Object 数据库. 
	const preObject = document.getElementById('Object')
	const  dbRefObject = firebase.database().ref().child('Object');
	 // dbRefObject.on('value', snap => console.log( snap.val())); 
	 // 这个是把数据显示到 console 中.   下面是用json格式显示到 pre标签上.
	dbRefObject.on('value', snap => {  preObject.innerText = JSON.stringify(snap.val(),null,3);   });







	// 连接 MyAssetes 数据库
	const ulList = document.getElementById('List');
	const dbRefList = firebase.database().ref().child('MyAssetes');
	// 数据库添加数据 实时到本地
	dbRefList.on("child_added", snap => {
	    const li = document.createElement('li');
	    li.innerText = snap.val();
	    li.id = snap.key;
	    ulList.appendChild(li);
	  });
	// 数据库删除数据 实时到本地
	
	dbRefList.on("child_removed", snap => {
	    const liRemoved = document.getElementById(snap.key);
	    liRemoved.remove();
	  });
	// 数据库修改数据 实时到本地
	dbRefList.on("child_changed", snap => {
	    const liChanged = document.getElementById(snap.key);
	    liChanged.innerText = snap.val();
	});







	// js 变量 绑定html里的 id.
	const textEmail = document.getElementById('txtEmail');
	const textPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogOut = document.getElementById('btnLogOut');
	const githubLogin = document.getElementById('githubLogin');
	const githubLogOut = document.getElementById('githubLogOut');



	// 登录 登出按钮 &  验证信息反馈
  /*
	btnLogin.addEventListener('click', e => {
	  const email = txtEmail.value;
	  const pass = txtPassword.value;
	  const auth = firebase.auth();
	  const promise = auth.signInWithEmailAndPassword (email,pass);
	  promise.catch ( e => console.log(e.messgae));
	});
	
	
	btnLogOut.addEventListener('click', e=> {
	  firebase.auth().signOut();
	})
	
	
	firebase.auth().onAuthStateChanged(firebaseUser => {
	  if(firebaseUser) { 
	    console.log("成功登录"+firebaseUser);
	    btnLogOut.classList.remove('hide');
	  }else { 
	    console.log('not logged in');
	    btnLogOut.classList.add('hide');
	  }
	})
  */






	// 注册按钮(邮箱密码注册)
	/*
	btnSignUp.addEventListener('click', e => {
	  const email = txtEmail.value;
	  const pass = txtPassword.value;
	  const auth = firebase.auth();
	  const promise = auth.createUserWithEmailAndPassword(email,pass);
	  promise.catch ( e => console.log(e.messgae));
	});
	*/











	// github 登录
	// 创建一个 GitHub 提供程序对象的实例
	var provider = new firebase.auth.GithubAuthProvider();
	
	provider.addScope('repo');
	
	githubLogin.addEventListener('click', e => {

	   firebase.auth().signInWithPopup(provider)
		   
		   .then(function(result) {
		      var token = result.credential.accessToken;
		      var user = result.user;
				
		      console.log(token)
		      console.log(user)
		   }).catch(function(error) {
		      var errorCode = error.code;
		      var errorMessage = error.message;
				
		      console.log(error.code)
		      console.log(error.message)
		   });
	});
	
	// github 登出
	githubLogOut.addEventListener('click', e => {
	  firebase.auth().signOut()
		   .then(function() {
		      console.log('Signout successful!')
		   }, function(error) {
		      console.log('Signout failed')
		   });   
	});












});