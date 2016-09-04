import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, Page } from 'ionic-angular';

import { Homework, HomeworkSummary } from '../../shared/homework';
import { HomeworkService } from '../../shared/homework.service';
import { HomeworkPage } from '../homework/homework';

import {Util} from '../../shared/util';


import '../../shared/rxjs-extensions';

/*
  Generated class for the HomeworksPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/homeworks/homeworks.html',
})
export class HomeworksPage implements OnInit, OnDestroy {
	error: any;
	summaries: HomeworkSummary[] = [];
	isTeacher: boolean;

	constructor(public nav: NavController, private homeworkSvc: HomeworkService) {
		Util.getToken().then(t => this.authSuccess(t));
	}

	ngOnInit() {
		this.homeworkSvc.getAllHomeworkSummaries()
            .then(summaries => this.summaries = summaries)
			.catch(error => this.error = error);
	}

	ngOnDestroy() {
	}

	authSuccess(token) {
		var roles: string = Util.getDecodeObject(token).roles
		this.isTeacher = roles.indexOf('teacher') >= 0;
	}

	itemTapped(event, item) {
		if (item.id) {
			this.nav.push(HomeworkPage, {
				item: item
			});
		}
	}

	openUrl(item) {
		window.open('homework/assigned.html?id=' + item.id, '_self', 'location=yes');
	}
}
