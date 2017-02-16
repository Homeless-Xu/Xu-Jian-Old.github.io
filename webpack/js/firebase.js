$(function (){ 
  // Initialize Firebase 
    const config = {
      apiKey: "AIzaSyCRkzJi6Ir5LIFqQ1HLymzY9GM7MxiMEVM",
      authDomain: "cms-jekyll-71cdf.firebaseapp.com",
      databaseURL: "https://cms-jekyll-71cdf.firebaseio.com",
      storageBucket: "cms-jekyll-71cdf.appspot.com",
      messagingSenderId: "727659745071"
    };
    firebase.initializeApp(config);





	
	
	
	


  const preObject = document.getElementById('Object')
  const  dbRefObject = firebase.database().ref().child('Object');
 // dbRefObject.on('value', snap => console.log( snap.val())); 
 // 这个是把数据显示到 console 中.   下面是用json格式显示到 pre标签上.
dbRefObject.on('value', snap => {  preObject.innerText = JSON.stringify(snap.val(),null,3);   });





const ulList = document.getElementById('List');
const dbRefList = firebase.database().ref().child('MyAssetes');
dbRefList.on("child_added", snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);
  });
dbRefList.on("child_removed", snap => {
    const liRemoved = document.getElementById(snap.key);
    liRemoved.remove();
  });
dbRefList.on("child_changed", snap => {
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
});






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


















});















 

