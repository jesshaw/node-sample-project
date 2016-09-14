import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import { NavController, Storage, LocalStorage } from 'ionic-angular';
import {JwtHelper, tokenNotExpired, AuthHttp} from 'angular2-jwt';


import {Util} from './util';
import {User, Classes} from './User';

import './rxjs-extensions';


// https://github.com/auth0-blog/angular2-authentication-sample
// https://github.com/auth0-blog/ionic2-auth

@Injectable()
export class AuthService {

	// loginUrl: string = Util.baseUrl + "/sessions/create";
	// registerNewUserUrl: string = Util.baseUrl + "/users";
	// settingRolesUrl: string = Util.baseUrl + "/api/protected/user/saveSetting";
	// userDetailUrl: string = Util.baseUrl + "/api/protected/user";
	loginUrl: string = Util.baseUrl + "/api/users/login";
	registerNewUserUrl: string = Util.baseUrl + "/api/users/create";
	settingRolesUrl: string = Util.baseUrl + "/api/users/roles";
	resetPasswordUrl: string = Util.baseUrl + "/api/users/password";
	modifyLoginNameUrl: string = Util.baseUrl + "/api/users/username";
	userDetailUrl: string = Util.baseUrl + "/api/users/detail";

	contentHeader: Headers = new Headers({ "Content-Type": "application/json" });

	constructor(private http: Http, private autHttp: AuthHttp) { }

	public login(credentials) {
		return this.http.post(this.loginUrl, JSON.stringify(credentials), { headers: this.contentHeader })
			.map(res => {
				console.log(res);
				return res.json()
			});
	}

	public authenticated() {
		return tokenNotExpired();
	}

	public settingRoles(settings) {
		return new Promise<any>(resolve => {
			this.autHttp.put(this.settingRolesUrl, JSON.stringify(settings), { headers: this.contentHeader })
				.subscribe(response => {
					console.log(response.json());
					resolve(response.json());
				});
		});
	}

	public resetPassword(settings) {
		return new Promise<any>(resolve => {
			this.autHttp.put(this.resetPasswordUrl, JSON.stringify(settings), { headers: this.contentHeader })
				.subscribe(response => {
					console.log(response.json());
					resolve(response.json());
				});
		});
	}

	public modifyLoginName(settings) {
		return new Promise<any>(resolve => {
			this.autHttp.put(this.modifyLoginNameUrl, JSON.stringify(settings), { headers: this.contentHeader })
				.subscribe(response => {
					console.log(response.json());
					resolve(response.json());
				});
		});
	}

	public getUser(username): Promise<User> {
		return new Promise<User>(resolve => {
			this.autHttp.get(this.userDetailUrl, { headers: this.contentHeader })
				.subscribe(response => {
					var json = response.json().user;
					var u = new User();
					u.id = json._id;
					u.username = json.username;
					u.password = json.password == '666666' ? ' 初始密码666666修改后显示*' : '******';
					u.roles = json.roles;
					u.rolesArray = json.roles.split(',');
					u.wxUsername = json.wxUsername;
					u.isBindWx = json.wxUsername ? true : false;
					var theClass = u.rolesArray.find(r => r.indexOf('class') >= 0);
					u.theClass = theClass
					u.theClassDesc = theClass ? Classes.getClasses().find(c => c.value == u.theClass).name : '选班后可查看作业';
					resolve(u);
				})
			// Util.getAuthContentHeaders()
			// 	.then(contentHeaders => {
			// 		this.http.get(this.userDetailUrl, { headers: contentHeaders, search: params })
			// 			.subscribe(response => {
			// 				var json = response.json().user;
			// 				var u = new User();
			// 				u.id=json._id;
			// 				u.username = json.username;
			// 				u.password = json.password == '666666' ? ' 初始密码666666修改后显示*' : '******';
			// 				u.roles = json.roles;
			// 				u.rolesArray = json.roles.split(',');
			// 				u.wxUsername = json.wxUsername;
			// 				u.isBindWx = json.wxUsername ? true : false;
			// 				var theClass = u.rolesArray.find(r => r.indexOf('class') >= 0);
			// 				u.theClass = theClass
			// 				u.theClassDesc = theClass ? Classes.getClasses().find(c => c.value == u.theClass).name : '选班后可查看作业';
			// 				resolve(u);
			// 			})
			// 	});
		});
	}





	// // When the page loads, we want the Login segment to be selected
	// authType: string = "login";
	// error: string;
	// jwtHelper: JwtHelper = new JwtHelper();
	// local: Storage = new Storage(LocalStorage);
	// user: string;

	// //curl --data "username=gonto&password=gonto" http://localhost:3001/sessions/create

	// login(credentials) {
	// 	this.http.post(this.loginUrl, JSON.stringify(credentials), { headers: this.contentHeader })
	// 		.map(res => res.json())
	// 		.subscribe(
	// 		data => this.authSuccess(data.id_token),
	// 		err => this.error = err
	// 		);

	// 	this.nav.push(HomeworksPage);
	// }

	// signup(credentials) {
	// 	this.http.post(this.registerNewUserUrl, JSON.stringify(credentials), { headers: this.contentHeader })
	// 		.map(res => res.json())
	// 		.subscribe(
	// 		data => this.authSuccess(data.id_token),
	// 		err => this.error = err
	// 		);
	// }

	// logout() {
	// 	this.local.remove('id_token');
	// 	this.user = null;
	// }

	// authSuccess(token) {
	// 	this.error = null;
	// 	this.local.set('id_token', token);
	// 	this.user = this.jwtHelper.decodeToken(token).username;
	// }
}