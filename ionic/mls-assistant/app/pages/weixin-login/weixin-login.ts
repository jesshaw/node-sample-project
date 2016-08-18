import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, Storage, LocalStorage } from 'ionic-angular';
import {AuthService} from '../../shared/auth.service';
import {JwtHelper} from 'angular2-jwt';
import 'rxjs/add/operator/map';



import { HomeworksPage } from '../homeworks/homeworks';

/*
  Generated class for the WeixinLoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/weixin-login/weixin-login.html',
})
export class WeixinLoginPage implements OnInit, OnDestroy {


	error: string;
	local: Storage = new Storage(LocalStorage);
	user: string;
	roles: string;
	jwtHelper: JwtHelper = new JwtHelper();

	constructor(private nav: NavController, private auth: AuthService) {

	}

	ngOnInit() {
		this.auth.login({ username: "test", password: "666666" }).subscribe(
			data => this.authSuccess(data.id_token),
			err => this.error = err
		);
	}

	ngOnDestroy() {
		// this.sub.unsubscribe();
	}

	authSuccess(token) {
		this.error = null;
		this.local.set('id_token', token);
		this.user = this.jwtHelper.decodeToken(token).username;
		this.roles = this.jwtHelper.decodeToken(token).roles;

		debugger;
		if (this.auth.authenticated()) {
			//this.nav.push(HomeworksPage);
			this.nav.setRoot(HomeworksPage);
		}
	}
}
