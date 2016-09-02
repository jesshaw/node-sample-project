import { Headers } from '@angular/http';
import { Storage, LocalStorage } from 'ionic-angular';
import {JwtHelper, AuthHttp } from 'angular2-jwt';

import './rxjs-extensions';

export class Util {

    // static baseUrl="http://localhost:4001";
    static baseUrl = "http://api.sanfor.com.cn";

    static getAuthContentHeaders(): Promise<Headers> {
        return this.getToken()
            .then(token => {
                var contentHeader = new Headers({ "Content-Type": "application/json" });
                contentHeader.append("authorization", 'Bearer ' + token);
                return contentHeader;
            });
        // var promise = new Promise<Headers>(resolve => {
        //     this.getToken()
        //         .then(token => {
        //             var contentHeader = new Headers({ "Content-Type": "application/json" });
        //             contentHeader.append("authorization", 'Bearer ' + token);
        //             resolve(contentHeader);
        //         });
        // })
        // return promise;
    }


    static getContentHeaders():Headers {
        return new Headers({ "Content-Type": "application/json" });
    }



    static getCurrentClass(): Promise<string> {
        return this.getToken()
                     .then(token => {
                            var o = this.getDecodeObject(token);
                            var c = o.roles.split(',').find(r => r.indexOf('class') >= 0);
                            return c;
                     });

    }

    static getToken(): Promise<any> {
        var local = new Storage(LocalStorage);
        return local.get('id_token');
    }

    static getDecodeObject(token: string) {
        var jwtHelper = new JwtHelper();
        return jwtHelper.decodeToken(token);
    }

    // // query string: ?foo=lorem&bar=&baz
    // var foo = getParameterByName('foo'); // "lorem"
    // var bar = getParameterByName('bar'); // "" (present with empty value)
    // var baz = getParameterByName('baz'); // "" (present with no value)
    // var qux = getParameterByName('qux'); // null (absent)
    static getParameterByName(name: string, url?: string) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    static getString(date: Date) {
        return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
    }

    static showStar(date: Date) {
        return date.toLocaleDateString() === (new Date()).toLocaleDateString() ? 'star' : '';
    }


    //     // var url = "http://www.x.com?luckyNums=[31,21,6]&name=John&favFoods=[pizza]&noVal"
    //     // console.log(url2json(url));
    //     static url2json(url:string) {
    //         var obj = {};

    //         // function arr_vals(arr) {
    //         //     if (arr.indexOf(',') > 1) {
    //         //         var vals = arr.slice(1, -1).split(',');
    //         //         var arr = [];
    //         //         for (var i = 0; i < vals.length; i++)
    //         //             arr[i] = vals[i];
    //         //         return arr;
    //         //     } else
    //         //         return arr.slice(1, -1);
    //         // }

    //         // function eval_var(avar:string[]) {
    //         //     if (!avar[1])
    //         //         obj[avar[0]] = '';
    //         //     else
    //         //     if (avar[1].indexOf('[') == 0)
    //         //         obj[avar[0]] = arr_vals(avar[1]);
    //         //     else
    //         //         obj[avar[0]] = avar[1];
    //         // }

    //         if (url.indexOf('?') > -1) {
    //             var params = url.split('?')[1];
    //             if (params.indexOf('&') > 2)
    //    {              var vars = params.split('&');
    //                 for (var i in vars)
    //                     eval_var(vars[i].split('='));
    //             } else
    //                 eval_var(params.split('='));
    //         }
    //         return obj;
    //     }

    //      private arr_vals(arr:string[]) {
    //             if (arr.indexOf(',') > 1) {
    //                 var vals = arr.slice(1, -1).split(',');
    //                 var arr = [];
    //                 for (var i = 0; i < vals.length; i++)
    //                     arr[i] = vals[i];
    //                 return arr;
    //             } else
    //                 return arr.slice(1, -1);
    //         }


    //     private eval_var(avar:string[]) {
    //             if (!avar[1])
    //                 obj[avar[0]] = '';
    //             else
    //             if (avar[1].indexOf('[') == 0)
    //                 obj[avar[0]] = arr_vals(avar[1]);
    //             else
    //                 obj[avar[0]] = avar[1];
    //         }
}
