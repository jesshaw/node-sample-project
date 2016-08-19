import { Component } from '@angular/core';
import { NavController, Storage, LocalStorage } from 'ionic-angular';
import {Http, Headers} from '@angular/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {JwtHelper} from 'angular2-jwt';
import {AuthService} from '../../shared/auth.service';
import 'rxjs/add/operator/map';

// const map = require('rxjs/add/operator/map');
// 
import {Util} from '../../shared/util';



/*
  Generated class for the ProfilePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/profile/profile.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ProfilePage {

	user: string;
	roles: string;
	theClassName: string;
	theClassValue: string='';
	classes: Array<{ name: string, value: string }>;

	constructor(private http: Http, private auth: AuthService) {
		Util.getToken()
			.then(t => {
				this.roles = Util.getDecodeObject(t).roles;
				this.user = Util.getDecodeObject(t).username;
				this.theClassValue = this.roles.split(',').find(r => r.indexOf('class') > 0);
				console.log(this.theClassValue);
			})

		this.classes = [];
		this.classes.push({ name: '一班', value: 'class1' });
		this.classes.push({ name: '二班', value: 'class2' });
		this.classes.push({ name: '三班', value: 'class3' });
	}

	saveSettings() {
		console.log(this.theClassValue);
		this.theClassName = this.classes.find(c => c.value == this.theClassValue).name;
	}
}
