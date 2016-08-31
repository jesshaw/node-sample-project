import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, Alert, Storage, LocalStorage, Page } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {JwtHelper} from 'angular2-jwt';

// const map = require('rxjs/add/operator/map');
// 
import {Util} from '../../shared/util';
import {User, Classes} from '../../shared/User';
import {AuthService} from '../../shared/auth.service';
import '../../shared/rxjs-extensions';

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
export class ProfilePage implements OnInit, OnDestroy {

	user: User = new User();
	userName: string;
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
				this.userName = Util.getDecodeObject(t).username;
				this.theClassValue = this.roles.find(r => r.indexOf('class') >= 0);
				console.log(this.theClassValue);
			})

		this.classes = [];
		this.classes.push({ name: '一班', value: 'class1' });
		this.classes.push({ name: '二班', value: 'class2' });
		this.classes.push({ name: '三班', value: 'class3' });
	}

	ngOnInit() {
		Util.getToken()
			.then(t => Util.getDecodeObject(t).username)
			.then(username => {
				this.auth.getUser(username)
					.then(user => {
						this.user = user;
						console.log(this.user);

					})
					.catch(error => this.error = error)
			});

	}

	ngOnDestroy() {
	}

	save() {
		this.auth.saveSettings(this.user)
			.then(data => this.authSuccess(data.id_token)
			)
			.catch(error => this.error = error);;
	}

	// testRadioOpen: boolean;
	// testRadioResult: any;
	selectClass() {
		let alert = Alert.create();
		alert.setTitle('选在您所在的班级!');
		var classes = Classes.getClasses();

		for (var i = 0; i < classes.length; ++i) {
			alert.addInput({
				type: 'radio',
				label: classes[i].name,
				value: classes[i].value,
				checked: this.user.theClass == classes[i].value
			});
		}

		alert.addButton('取消');
		alert.addButton({
			text: '确认',
			handler: (data: any) => {
				console.log('Radio data:', data);
				// this.testRadioOpen = false;
				// this.testRadioResult = data;
				this.user.theClass = data;
				this.user.theClassDesc = classes.find(c => c.value == data).name;
				var newRoles = this.user.roles.split(',').filter(r => r.indexOf('class') < 0);
				newRoles.push(data);				
				this.user.roles = newRoles.join(',');
				this.save();
			}
		});
		this.nav.present(alert);
	}

	openLoginPage() {
		this.nav.setRoot(LoginPage);
	}

	authSuccess(token) {
		this.error = null;
		this.local.set('id_token', token);
		this.theClassName = this.classes.find(c => c.value == this.theClassValue).name;
	}

	logout() {
		this.local.remove('id_token');
		this.user = null;
		this.nav.setRoot(LoginPage);
	}
}
