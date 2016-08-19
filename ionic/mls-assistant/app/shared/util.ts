import { Headers } from '@angular/http';
import { Storage, LocalStorage } from 'ionic-angular';
import {JwtHelper} from 'angular2-jwt';

import 'rxjs/add/operator/toPromise';

export class Util {

    static getAuthContentHeaders() {
        var local = new Storage(LocalStorage);
        var contentHeader = new Headers({ "Content-Type": "application/json" });

        return local.get('id_token')
            .then(profile => profile)
            .then(token => {
                contentHeader.append("authorization", 'Bearer ' + token);
                return contentHeader;
            });

    }

    static getContentHeaders() {
        return new Headers({ "Content-Type": "application/json" });
    }

    static getDecodeObject(token: string) {
        var jwtHelper = new JwtHelper()
        return jwtHelper.decodeToken(token);
    }

    static getToken(){        
        var local = new Storage(LocalStorage);
        return local.get('id_token');
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
