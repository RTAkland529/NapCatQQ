function _0x5858(){const _0x5c9753=[';\x20uin=o','qKMHB','QQ音乐','tagIcon','music','POST','https://p.qpic.cn/qqconnect/0/app_100497308_1626060999/100?max-age=2592000&t=0','preview','3115616YISjFC','LSKmu','YXVAe','[分享]','uin','cover','14nToAFj','&ark=','mid','UIPGn','normal','unlink','https://ws.stream.qqmusic.qq.com/','ZCDNQ','30TgMZOz','jumpUrl','SOkfL','jVpsW','uin=o10086','XHwxI','https://u.y.qq.com/cgi-bin/musicu.fcg?format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data={\x22comm\x22:{\x22ct\x22:24,\x22cv\x22:0},\x22songinfo\x22:{\x22method\x22:\x22get_song_detail_yqq\x22,\x22param\x22:{\x22song_type\x22:0,\x22song_mid\x22:\x22\x22,\x22song_id\x22:','62070yCCsSE','LRZTq','skey','p_skey','EFWqs','HOyev','iCdSm','HcQhi','https://api.leafone.cn/api/qqmusic?id=','\x5c/\x5c/','YRUoH','vWTaZ','LFgna','GaLXT','XMqHE','replace',';\x20skey=','IfYxc','0.0.0.1','CgwUZ','prZlZ','tianxuan.imgJumpArk','qdcWK','GXxqO','LnNyd','9082940EhONGX','etDKt','hZnaP','GET','track_info','https://mqq.reader.qq.com/api/mqq/share/card?accessToken&_csrfToken&source=c0003','stringify','tag','1890423Ulpzjh','signed_ark','jWKxg','data','19252qiSokl','2051944KKKZfC','npDDN','singer','sourcelogo','title','genBkn','},\x22module\x22:\x22music.pf_song_detail_svr\x22}}','HttpGetJson','fJmVl','mQBPs','url','getQzoneCookies','卡片图片不正确','Tsidt','kDknW','1155498MQPtdH','prompt','name','&type=0','https://h5.qzone.qq.com/v2/vip/tx/trpc/ark-share/GenNewSignedArk?g_tk=','https://i.y.qq.com/v8/playsong.html?songmid=','80pvyTjx','application/json'];_0x5858=function(){return _0x5c9753;};return _0x5858();}(function(_0x501736,_0x34ae0e){const _0x120f2d=_0x1b08,_0x6d7713=_0x501736();while(!![]){try{const _0x43f1cf=parseInt(_0x120f2d(0x1ff))/0x1*(parseInt(_0x120f2d(0x1e9))/0x2)+-parseInt(_0x120f2d(0x1f9))/0x3+-parseInt(_0x120f2d(0x209))/0x4+-parseInt(_0x120f2d(0x1c4))/0x5*(parseInt(_0x120f2d(0x1bd))/0x6)+parseInt(_0x120f2d(0x20f))/0x7*(parseInt(_0x120f2d(0x1ea))/0x8)+-parseInt(_0x120f2d(0x1e5))/0x9+parseInt(_0x120f2d(0x1dd))/0xa;if(_0x43f1cf===_0x34ae0e)break;else _0x6d7713['push'](_0x6d7713['shift']());}catch(_0x28ee45){_0x6d7713['push'](_0x6d7713['shift']());}}}(_0x5858,0xb85e5));import{logDebug}from'@/common/utils/log';import{NTQQUserApi}from'./user';import{selfInfo}from'../data';import{RequestUtil}from'@/common/utils/request';function _0x1b08(_0x43c076,_0x5b21ab){const _0x58584f=_0x5858();return _0x1b08=function(_0x1b089e,_0x4ffe93){_0x1b089e=_0x1b089e-0x1ba;let _0xfd4338=_0x58584f[_0x1b089e];return _0xfd4338;},_0x1b08(_0x43c076,_0x5b21ab);}import{WebApi}from'./webapi';import{checkFileReceived2,uri2local}from'@/common/utils/file';import _0x2eeb6a from'node:fs';export async function SignMiniApp(_0x239a88){const _0x36622b=_0x1b08,_0x17bb45={'daWUB':'com.tencent.miniapp.lua','nIyGz':_0x36622b(0x1d9),'qdcWK':'miniapp','prZlZ':_0x36622b(0x1cd),'XHwxI':function(_0x5d6167,_0x4edf84){return _0x5d6167+_0x4edf84;},'GXxqO':function(_0x3e1034,_0x1d82a3){return _0x3e1034+_0x1d82a3;},'qKMHB':function(_0x4536dd,_0x2e61f3){return _0x4536dd+_0x2e61f3;},'UIPGn':function(_0x5a9db8,_0x49ac25){return _0x5a9db8+_0x49ac25;},'IfYxc':'p_skey=','jWKxg':_0x36622b(0x1d4),'YRUoH':function(_0x409535,_0x528f92){return _0x409535+_0x528f92;},'etDKt':function(_0x11b425,_0x13c87c){return _0x11b425+_0x13c87c;},'ZTuay':function(_0x53600a,_0x24aaa7){return _0x53600a+_0x24aaa7;},'XyMxK':_0x36622b(0x1fd),'HOyev':_0x36622b(0x210),'EFWqs':function(_0x5d14aa,_0x364110){return _0x5d14aa(_0x364110);},'CgwUZ':_0x36622b(0x1e0),'GaLXT':function(_0x397140,_0x5075ef,_0x4921e1){return _0x397140(_0x5075ef,_0x4921e1);}};let _0x14d40a={'app':_0x17bb45['daWUB'],'bizsrc':_0x17bb45['nIyGz'],'view':_0x17bb45[_0x36622b(0x1da)],'prompt':_0x239a88[_0x36622b(0x1fa)],'config':{'type':'normal','forward':0x1,'autosize':0x0},'meta':{'miniapp':{'title':_0x239a88[_0x36622b(0x1ee)],'preview':_0x239a88[_0x36622b(0x208)][_0x36622b(0x1d3)](/\\/g,_0x36622b(0x1cd)),'jumpUrl':_0x239a88[_0x36622b(0x1be)]['replace'](/\\/g,_0x17bb45[_0x36622b(0x1d8)]),'tag':_0x239a88[_0x36622b(0x1e4)],'tagIcon':_0x239a88[_0x36622b(0x204)]['replace'](/\\/g,_0x17bb45[_0x36622b(0x1d8)]),'source':_0x239a88['source'],'sourcelogo':_0x239a88[_0x36622b(0x1ed)][_0x36622b(0x1d3)](/\\/g,_0x17bb45['prZlZ'])}}},_0xe4e874=await NTQQUserApi[_0x36622b(0x1f5)]();const _0x353612=WebApi[_0x36622b(0x1ef)](_0xe4e874['p_skey']),_0x58bb36=_0x17bb45[_0x36622b(0x1c2)](_0x17bb45['XHwxI'](_0x17bb45[_0x36622b(0x1db)](_0x17bb45[_0x36622b(0x202)](_0x17bb45[_0x36622b(0x212)](_0x17bb45[_0x36622b(0x1c2)](_0x17bb45[_0x36622b(0x1d5)],_0xe4e874[_0x36622b(0x1c7)]),_0x17bb45[_0x36622b(0x1e7)]),_0xe4e874[_0x36622b(0x1c6)])+';\x20p_uin=o',selfInfo[_0x36622b(0x20d)]),_0x36622b(0x201)),selfInfo['uin']);let _0x4c542f=_0x17bb45[_0x36622b(0x1ce)](_0x17bb45[_0x36622b(0x1de)](_0x17bb45['ZTuay'](_0x17bb45['XyMxK'],_0x353612),_0x17bb45[_0x36622b(0x1c9)]),_0x17bb45[_0x36622b(0x1c8)](encodeURIComponent,JSON[_0x36622b(0x1e3)](_0x14d40a))),_0x468b29='';try{let _0x87406c=await RequestUtil[_0x36622b(0x1f1)](_0x4c542f,_0x17bb45[_0x36622b(0x1d7)],undefined,{'Cookie':_0x58bb36});_0x468b29=_0x87406c['data'][_0x36622b(0x1e6)];}catch(_0x2a52dd){_0x17bb45[_0x36622b(0x1d1)](logDebug,'MiniApp\x20JSON\x20消息生成失败',_0x2a52dd);}return _0x468b29;}export async function SignMusicInternal(_0x103430,_0x6245,_0x2666dd,_0x49fdb3,_0xbc00b3){const _0x5c3ed2=_0x1b08,_0x3e39f8={'npDDN':_0x5c3ed2(0x1e2),'LnNyd':'com.tencent.qqreader.share','LFgna':'9a63343c32d5a16bcde653eb97faa25d','fDwbN':_0x5c3ed2(0x213),'mQBPs':function(_0x168820,_0x504ed6){return _0x168820+_0x504ed6;},'LRZTq':_0x5c3ed2(0x207),'XDunl':_0x5c3ed2(0x203),'LSKmu':function(_0x168dfe,_0x53ac29){return _0x168dfe+_0x53ac29;},'fJmVl':_0x5c3ed2(0x20c),'Tsidt':_0x5c3ed2(0x1d6),'vWTaZ':_0x5c3ed2(0x205),'UXXPb':_0x5c3ed2(0x206),'hZnaP':_0x5c3ed2(0x1c1),'kDknW':_0x5c3ed2(0x200)};let _0x51574e=_0x3e39f8[_0x5c3ed2(0x1eb)],_0x44b45f={'app':_0x3e39f8[_0x5c3ed2(0x1dc)],'config':{'ctime':0x6670467e,'forward':0x1,'token':_0x3e39f8[_0x5c3ed2(0x1d0)],'type':_0x3e39f8['fDwbN']},'extra':{'app_type':0x1,'appid':0x5fd779c,'msg_seq':0xc7a7f60e2d080800,'uin':0x674d9a89},'meta':{'music':{'action':'','android_pkg_name':'','app_type':0x1,'appid':0x5fd779c,'ctime':0x6670467e,'desc':_0x6245,'jumpUrl':_0x3e39f8[_0x5c3ed2(0x1f3)](_0x3e39f8[_0x5c3ed2(0x1f3)](_0x5c3ed2(0x1fe),_0x49fdb3),_0x5c3ed2(0x1fc)),'musicUrl':_0xbc00b3,'preview':_0x2666dd,'cover':_0x2666dd,'sourceMsgId':'0','source_icon':_0x3e39f8[_0x5c3ed2(0x1c5)],'source_url':'','tag':_0x3e39f8['XDunl'],'title':_0x103430,'uin':0x2766}},'prompt':_0x3e39f8[_0x5c3ed2(0x20a)](_0x3e39f8[_0x5c3ed2(0x1f2)],_0x103430),'ver':_0x3e39f8[_0x5c3ed2(0x1f7)],'view':_0x3e39f8[_0x5c3ed2(0x1cf)]},_0x18b559=await RequestUtil['HttpGetJson'](_0x51574e,_0x3e39f8['UXXPb'],_0x44b45f,{'Cookie':_0x3e39f8[_0x5c3ed2(0x1df)],'Content-Type':_0x3e39f8[_0x5c3ed2(0x1f8)]});return _0x18b559;}export async function CreateMusicThridWay0(_0x308fa7='',_0x5dc7b7=''){const _0x378617=_0x1b08,_0x542ca7={'SOkfL':function(_0x5156b3,_0x10b3fd){return _0x5156b3==_0x10b3fd;},'YXVAe':function(_0x124263,_0x470d31){return _0x124263+_0x470d31;},'jVpsW':_0x378617(0x1c3),'iCdSm':'GET','ZCDNQ':function(_0xaf50a0,_0x1eff97){return _0xaf50a0+_0x1eff97;},'XMqHE':_0x378617(0x1cc),'VHNGD':'&type=8'};if(_0x542ca7[_0x378617(0x1bf)](_0x5dc7b7,'')){let _0x5846a8=await RequestUtil[_0x378617(0x1f1)](_0x542ca7[_0x378617(0x20b)](_0x542ca7['YXVAe'](_0x542ca7[_0x378617(0x1c0)],_0x308fa7),_0x378617(0x1f0)),_0x542ca7[_0x378617(0x1ca)],undefined);_0x5dc7b7=_0x5846a8['songinfo']?.[_0x378617(0x1e8)]?.[_0x378617(0x1e1)][_0x378617(0x211)];}let _0x33dbb7=await RequestUtil[_0x378617(0x1f1)](_0x542ca7[_0x378617(0x20b)](_0x542ca7[_0x378617(0x1bc)](_0x542ca7[_0x378617(0x1d2)],_0x5dc7b7),_0x542ca7['VHNGD']),_0x378617(0x1e0),undefined);return{..._0x33dbb7[_0x378617(0x1e8)],'mid':_0x5dc7b7};}export async function CreateMusicThridWay1(_0x5b3873='',_0x5ce79c=''){}export async function SignMusicWrapper(_0x290457=''){const _0x2c5e27=_0x1b08,_0x3e6489={'HcQhi':function(_0x416bd4,_0x254933){return _0x416bd4(_0x254933);},'vGZTK':function(_0x1b2bd5,_0x58cd29,_0x2364fa){return _0x1b2bd5(_0x58cd29,_0x2364fa);},'vvuSB':_0x2c5e27(0x1bb)};let _0x50e8ea=await _0x3e6489[_0x2c5e27(0x1cb)](CreateMusicThridWay0,_0x290457);const {path:_0x367e08,isLocal:_0x28b3c7,errMsg:_0x22ec63}=await uri2local(_0x50e8ea[_0x2c5e27(0x20e)]);if(_0x22ec63||!_0x367e08)throw _0x2c5e27(0x1f6);await _0x3e6489['vGZTK'](checkFileReceived2,_0x367e08,0x1388);let _0x58526b=await RequestUtil['uploadImageForOpenPlatform'](_0x367e08);!_0x28b3c7&&_0x2eeb6a[_0x2c5e27(0x1ba)](_0x367e08,()=>{});let _0x555ac7=await SignMusicInternal(_0x50e8ea[_0x2c5e27(0x1fb)],_0x50e8ea[_0x2c5e27(0x1ec)],_0x58526b,_0x50e8ea[_0x2c5e27(0x211)],_0x3e6489['vvuSB']+_0x50e8ea[_0x2c5e27(0x1f4)]);return _0x555ac7;}