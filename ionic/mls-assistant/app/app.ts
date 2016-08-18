import { Component, ViewChild, provide } from '@angular/core';
import {Http, HTTP_PROVIDERS, URLSearchParams} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';

import { ionicBootstrap, Platform, Nav, Storage, LocalStorage } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import 'rxjs/add/operator/map';

import {AuthService} from './shared/auth.service';
import { HomeworkService } from './shared/homework.service';
import {Util} from './shared/util';
import {ProfilePage} from './pages/profile/profile';
import {WeixinLoginPage} from './pages/weixin-login/weixin-login';
import {LoginPage} from './pages/login/login';
import {HomeworksPage} from './pages/homeworks/homeworks';
import {ExercisesPage} from './pages/exercises/exercises';
import {ReviewingExercisesPage} from './pages/reviewing-exercises/reviewing-exercises';
import { Page1 } from './pages/page1/page1';
import { Page2 } from './pages/page2/page2';


@Component({
	templateUrl: 'build/app.html',
	providers: [
		provide(AuthHttp, {
			useFactory: (http) => {
				return new AuthHttp(new AuthConfig, http);
			},
			deps: [Http]
		}),
		AuthService
		, HomeworkService
	]
})
class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomeworksPage;

	pages: Array<{ title: string, component: any }>;
	error: string;
	local: Storage = new Storage(LocalStorage);

	constructor(public platform: Platform, private auth: AuthService) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: '设置', component: ProfilePage },
			{ title: '课后作业', component: HomeworksPage },
			{ title: '练习', component: ExercisesPage },
			{ title: '复习', component: ReviewingExercisesPage }
			//,{ title: 'Page uno', component: Page1 }
			//, { title: 'Page dos', component: Page2 }
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();


			console.log(location);

			// http://localhost:8100/#/wxlogin?wxname=test&r=123123
			console.log(Util.getParameterByName("wxname"));
			console.log(Util.getParameterByName("r"));

			if (!this.auth.authenticated()) {
				var i = location.hash.indexOf("?");
				if (location.hash.substring(2, i) === "wxlogin") {
					this.auth.login({
						wxname: Util.getParameterByName("wxname"),
						r: Util.getParameterByName("r")
					}).subscribe(
						data => this.authSuccess(data.id_token),
						err => { this.error = err; this.nav.setRoot(ProfilePage); }
						);
				}
				else {
					this.rootPage = ProfilePage;
				}
			}
		});
	}

	authSuccess(token) {
		this.error = null;
		this.local.set('id_token', token);
		this.nav.setRoot(HomeworksPage);
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}

ionicBootstrap(MyApp, [
    HTTP_PROVIDERS
    // ,	{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    // { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data]
]);
