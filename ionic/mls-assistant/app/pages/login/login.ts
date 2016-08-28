import { Component,ViewChild } from '@angular/core';
import { NavController,Nav, Storage, LocalStorage } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {JwtHelper} from 'angular2-jwt';


import 'rxjs/add/operator/map';

import {Util} from '../../shared/util';
import {HomeworksPage} from '../homeworks/homeworks';
import {ProfilePage} from '../profile/profile';
import {AuthService} from '../../shared/auth.service';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/login/login.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class LoginPage {

	// constructor(private nav: NavController,private auth: AuthService) {

	// }

	LOGIN_URL: string = "http://localhost:3001/sessions/create";
	SIGNUP_URL: string = "http://localhost:3001/users";

	// When the page loads, we want the Login segment to be selected
	authType: string = "login";
	contentHeader: Headers = new Headers({ "Content-Type": "application/json" });
	error: string;
	jwtHelper: JwtHelper = new JwtHelper();
	local: Storage = new Storage(LocalStorage);
	user: string;
	roles: string;

	constructor(private http: Http, private auth: AuthService, private nav: NavController) {

		let token;
		this.local.get('id_token').then(profile => {
			// token = JSON.parse(profile);
			token = profile;
			if (token) {
				this.user = this.jwtHelper.decodeToken(token).username;
				this.roles = this.jwtHelper.decodeToken(token).roles;
			}
		}).catch(error => {
			console.log(error);
		});


	}

	//curl --data "username=gonto&password=gonto" http://localhost:3001/sessions/create

	login(credentials) {
		this.auth.login(credentials)
			.subscribe(
			data => this.authSuccess(data.id_token),
			err => this.error = err
			);
	}

	signup(credentials) {
		this.http.post(this.SIGNUP_URL, JSON.stringify(credentials), { headers: this.contentHeader })
			.map(res => res.json())
			.subscribe(
			data => this.authSuccess(data.id_token),
			err => this.error = err
			);
	}

	logout() {
		this.local.remove('id_token');
		this.user = null;
	}

	authSuccess(token) {
		this.error = null;
		this.local.set('id_token', token);
		this.user = this.jwtHelper.decodeToken(token).username;

		var roles: string = Util.getDecodeObject(token).roles		
		if (roles.indexOf('class') > 0) {
			this.nav.setRoot(HomeworksPage);
		}
		else {
			this.nav.setRoot(ProfilePage);
		}
	}

}
