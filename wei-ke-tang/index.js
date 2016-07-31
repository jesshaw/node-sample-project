'use strict';

var express = require('express');
var Weixin = require('weixin-apis');

var app = express();

var weixin = new Weixin({
    app: app,
    appid: 'wx55bc1ff001c62342',
    appsecret: 'caa236e91e34aa3eedb8dd190be42607',
    token: 'mymiaowangtoken'
});

var menuObj = {
    "button": [{
        "type": "click",
        "name": "今日歌曲",
        "key": "V1001_TODAY_MUSIC"
    }, {
        "name": "菜单",
        "sub_button": [{
            "type": "view",
            "name": "搜索",
            "url": "http://www.soso.com/"
        }, {
            "type": "view",
            "name": "视频",
            "url": "http://v.qq.com/"
        }, {
            "type": "view",
            "name": "班级",
            "url": "http://sanfor.com.cn"
        }, {
            "type": "click",
            "name": "赞一下我们",
            "key": "V1001_GOOD"
        }]
    }]
};

weixin.createMenu(menuObj, function(data) {
    console.log(data);
});

weixin.on('textMsg', function(data) {
    var msg = {
        toUserName: data.fromUserName,
        fromUserName: data.toUserName,
        msgType: 'text',
        content: data.content +' '+ 'sanfor.com.cn'
    };

    weixin.sendTextMsg(msg);
});

app.listen(3001);
