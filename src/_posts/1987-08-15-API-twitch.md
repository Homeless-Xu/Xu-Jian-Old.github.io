---
layout: post
title: "API-twitch"
tags: API
cateories: Web
---

[github Twitch-API][1]
[FreeCodeCamp 的 twitch API文档:][2]

	$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
	  console.log(data);
	});


别看官网的垃圾文档... 坑....

*[ClientID 注册][3]*  → 设置 → 连接  → 注册 → 获得id
 
i5pzq91e4ou7xqrnmr561comsdhex1j




[1]:	https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#get-streamschannel
[2]:	https://forum.freecodecamp.com/t/use-the-twitchtv-json-api/19541
[3]:	https://passport.twitch.tv/authentications/new?client_id=36926892495301a63b2e9350a38d3d6dbf72ad81e571a3ebba4687250ec8f352c70b3e91229602f73e1335528f3caa00a5cf513f484d7003784e722f2ce7a216&embed=0&error_code=&nonce=18a6121ebb8365dbd1ab14ae2c08a7b4fd447411&redirect_uri=https://www.twitch.tv/settings/connections&response_type=code&scope=openid&state=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZWRpcmVjdF9wYXRoIjoiaHR0cHM6Ly93d3cudHdpdGNoLnR2L3NldHRpbmdzL2Nvbm5lY3Rpb25zIn0.aB6vmOGREEyJpHJSaquF2eLASpfmqVr7WssibkumV7E&stay_embedded=0&sudo_reason=&username=