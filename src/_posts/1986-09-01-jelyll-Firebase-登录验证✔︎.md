---
layout: post
title: jelyll-Firebase-登录验证✔︎
tags: Firebase
categories: Tooles
---

## Firebase 设置
控制面板 → auth → 邮箱密码登录 开启.


## HTML 部分
	 <input id="txtEmail" type="email" placeholder="Email">
	  <input id="txtPassword" type="password" placeholder="Password">
	  <button id="btnSignUp" > Sign Up </button>
	  <button id="btnLogin" > login </button>
	  <button id="btnLogOut" style="display: none" > Log Out </button>






## JS部分

	const textEmail = document.getElementById('txtEmail');
	const textPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogOut = document.getElementById('btnLogOut');
	
	btnLogin.addEventListener('click', e => {
	  const email = txtEmail.value;
	  const pass = txtPassword.value;
	  const auth = firebase.auth();
	  const promise = auth.signInWithEmailAndPassword (email,pass);
	  promise.catch ( e => console.log(e.messgae));
	});
	
	btnSignUp.addEventListener('click', e => {
	  const email = txtEmail.value;
	  const pass = txtPassword.value;
	  const auth = firebase.auth();
	  const promise = auth.createUserWithEmailAndPassword(email,pass);
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





注册成功 就可以去 Firebase → Auth → 用户那里查看. 会列出来的...
