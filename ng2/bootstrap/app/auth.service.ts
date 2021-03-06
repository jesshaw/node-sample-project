import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
// import { NavController, Storage, LocalStorage } from 'ionic-angular';
// import {JwtHelper, tokenNotExpired} from 'angular2-jwt';


import {Util} from './util';


// https://github.com/auth0-blog/angular2-authentication-sample
// https://github.com/auth0-blog/ionic2-auth

@Injectable()
export class AuthService {

	// LOGIN_URL: string = Util.baseUrl + "/sessions/create";
	// SIGNUP_URL: string = Util.baseUrl + "/users";
	// USERSETTING_URL: string = Util.baseUrl + "/api/protected/user/saveSetting";

	// contentHeader: Headers = new Headers({ "Content-Type": "application/json" });

	// constructor(private http: Http) { }

	// public login(credentials) {
	// 	return this.http.post(this.LOGIN_URL, JSON.stringify(credentials), { headers: this.contentHeader })
	// 		.map(res => {
	// 			console.log(res);
	// 			return res.json()
	// 		});
	// }

	// public authenticated() {
	// 	return tokenNotExpired();
	// }

	// public saveSettings(settings) {
	// 	return Util.getAuthContentHeaders()
	// 		.then(contentHeaders => this.http.post(this.USERSETTING_URL, JSON.stringify(settings), { headers: contentHeaders }).toPromise())
	// 		.then(response => {
	// 			console.log(response.json());
	// 			return response.json();
	// 		});
	// }





	// // When the page loads, we want the Login segment to be selected
	// authType: string = "login";
	// error: string;
	// jwtHelper: JwtHelper = new JwtHelper();
	// local: Storage = new Storage(LocalStorage);
	// user: string;

	// //curl --data "username=gonto&password=gonto" http://localhost:3001/sessions/create

	// login(credentials) {
	// 	this.http.post(this.LOGIN_URL, JSON.stringify(credentials), { headers: this.contentHeader })
	// 		.map(res => res.json())
	// 		.subscribe(
	// 		data => this.authSuccess(data.id_token),
	// 		err => this.error = err
	// 		);

	// 	this.nav.push(HomeworksPage);
	// }

	// signup(credentials) {
	// 	this.http.post(this.SIGNUP_URL, JSON.stringify(credentials), { headers: this.contentHeader })
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