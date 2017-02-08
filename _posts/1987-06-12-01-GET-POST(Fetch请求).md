---
layout: post
title:  GET/POST(Fetch请求)
tags: AJAX
categories: Web
---


## GET
	fetch(url).then(function (response) {      
	  return response.json();    
	}).then(function (jsonData) {      
	  console.log(jsonData);    
	}).catch(function () {      
	  console.log('出错了');    
	});




## POST
	fetch(url,{   
	  method: 'POST',   
	  headers: {   
	    'Content-Type': 'application/x-www-form-urlencoded'   
	  },   
	  body: 'name=TG&love=1'
	}).then(function(response){})



