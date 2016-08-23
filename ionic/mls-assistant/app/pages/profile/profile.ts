import { Component } from '@angular/core';
import { NavController, Storage, LocalStorage,Page } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {JwtHelper} from 'angular2-jwt';
import {AuthService} from '../../shared/auth.service';
import 'rxjs/add/operator/map';

// const map = require('rxjs/add/operator/map');
// 
import {Util} from '../../shared/util';

import {LoginPage} from '../login/login';



/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
	templateUrl: 'build/pages/profile/profile.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ProfilePage {

	user: string;
	roles: string[];
	theClassName: string;
	theClassValue: string = '';
	classes: Array<{ name: string, value: string }>;
	error: any;
	local: Storage = new Storage(LocalStorage);

	constructor(private http: Http, private auth: AuthService, private nav: NavController) {
		Util.getToken()
			.then(t => {
				this.roles = Util.getDecodeObject(t).roles.split(',');
				this.user = Util.getDecodeObject(t).username;
				this.theClassValue = this.roles.find(r => r.indexOf('class') >= 0);
				console.log(this.theClassValue);
			})

		this.classes = [];
		this.classes.push({ name: '一班', value: 'class1' });
		this.classes.push({ name: '二班', value: 'class2' });
		this.classes.push({ name: '三班', value: 'class3' });
	}

	saveSettings() {

		console.log(this.theClassValue);

		var newRoles = this.roles.filter(r => r.indexOf('class') < 0);
		newRoles.push(this.theClassValue);

		var saveRoles = newRoles.join(',');

		console.log(saveRoles);

		this.auth.saveSettings({ username: this.user, roles: saveRoles })
			.then(data => this.authSuccess(data.id_token)
			)
			.catch(error => this.error = error);;
	}

	openLoginPage() {
		this.nav.setRoot(LoginPage);
	}

	authSuccess(token) {
		this.error = null;
		this.local.set('id_token', token);

		this.theClassName = this.classes.find(c => c.value == this.theClassValue).name;
	}
}
