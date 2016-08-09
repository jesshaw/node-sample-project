import { Component, ViewChild, provide } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {Http} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {AuthService} from './shared/auth.service';

import { HTTP_PROVIDERS } from '@angular/http';

import { XHRBackend } from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import { InMemoryDataService }  from './shared/in-memory-data.service';
import { HomeworkService } from './shared/homework.service';

import './shared/rxjs-extensions';

// import {HomeworkPage} from './pages/homework/homework';

import {ProfilePage} from './pages/profile/profile';
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
		AuthService,
		HomeworkService
	]
})
class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomeworksPage;

	pages: Array<{ title: string, component: any }>;

	constructor(public platform: Platform, private auth: AuthService) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [

			{ title: '设置', component: ProfilePage },
			{ title: '课后作业', component: HomeworksPage },
			{ title: '练习', component: ExercisesPage },
			{ title: '复习', component: ReviewingExercisesPage }
			// ,
			// { title: 'Page uno', component: Page1 },
			// { title: 'Page dos', component: Page2 }
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();

			if (!this.auth.authenticated()) {
				this.rootPage = ProfilePage;
			}
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}

ionicBootstrap(MyApp, [
    HTTP_PROVIDERS,
	{ provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data]
]);
