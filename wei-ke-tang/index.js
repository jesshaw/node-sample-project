'use strict';

var express = require('express');
var Weixin = require('weixin-apis');
var request = require('request');

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

    // https://www.npmjs.com/package/request-promise
    
    request({
        url: 'http://localhost:3001/wx/createRandom', //URL to hit
        // qs: {from: 'blog example', time: +new Date()}, //Query string data
        method: 'POST',
        //Lets post the following key/values as form
        json: {
            wxname: 'test'
        }
    }, function(error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(response.statusCode, body);
            var r = body.random;

            var msg = {
                toUserName: data.fromUserName,
                fromUserName: data.toUserName,
                msgType: 'text',
                content: data.content + ' ' + 'sanfor.com.cn' + r
            };

            weixin.sendTextMsg(msg);
        }
    });


});

app.listen(3001);
