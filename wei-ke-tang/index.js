'use strict';

var express = require('express');
var Weixin = require('weixin-apis');
var request = require('request');

var app = express();

// var weixin = new Weixin({
//     app: app,
//     appid: 'wx55bc1ff001c62342',
//     appsecret: '72da6c0d4302d80d176faa544f0bcf3b',
//     token: 'mymiaowangtoken'
// });

var weixin = new Weixin({
    app: app,
    appid: 'wxea8513d7b2ea6c33',
    appsecret: '25ade240a4b2629571bd2d872b150949',
    token: 'mymiaowangtoken'
});

// var menuObj = {
//     "button": [{
//         "type": "click",
//         "name": "今日歌曲",
//         "key": "V1001_TODAY_MUSIC"
//     }, {
//         "name": "菜单",
//         "sub_button": [{
//             "type": "view",
//             "name": "搜索",
//             "url": "http://www.soso.com/"
//         }, {
//             "type": "view",
//             "name": "视频",
//             "url": "http://v.qq.com/"
//         }, {
//             "type": "view",
//             "name": "班级",
//             "url": "http://sanfor.com.cn"
//         }, {
//             "type": "click",
//             "name": "赞一下我们",
//             "key": "V1001_GOOD"
//         }]
//     }]
// };

// weixin.createMenu(menuObj, function(data) {
//     console.log(data);
// });

weixin.on('textMsg', function(data) {

    // https://www.npmjs.com/package/request-promise

    var msg = {
        toUserName: data.fromUserName,
        fromUserName: data.toUserName,
        msgType: 'text',
        content: data.content
    };

    if (data.content.indexOf('作业') >= 0) {
        var wxUserName=data.fromUserName;

        request({
            url: 'http://localhost:4001/wx/createRandom', //URL to hit
            // qs: {from: 'blog example', time: +new Date()}, //Query string data
            method: 'POST',
            //Lets post the following key/values as form
            json: {
                wxname: wxUserName
            }
        }, function(error, response, body) {
            if (error) {
                console.log(error);
            } else {
                console.log(response.statusCode, body);
                var r = body.random;
                var resContent = 'http://www.sanfor.com.cn/#/wxlogin?wxname=' + wxUserName + '&r=' + r;

                var msg = {
                    toUserName: data.fromUserName,
                    fromUserName: data.toUserName,
                    msgType: 'text',
                    content: resContent
                };                
                weixin.sendTextMsg(msg);
            }
        });
    } else {
        weixin.sendTextMsg(msg);
    }


});

app.listen(3001);
