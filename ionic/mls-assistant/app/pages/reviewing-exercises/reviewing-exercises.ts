import { Component } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import { NavController } from 'ionic-angular';

import {Util} from '../../shared/util';
import { HomeworkSummary } from '../../shared/homework';
import { HomeworkService } from '../../shared/homework.service';
import { HomeworkPage } from '../homework/homework';

import '../../shared/rxjs-extensions';

/*
  Generated class for the ReviewingExercisesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/reviewing-exercises/reviewing-exercises.html',
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ReviewingExercisesPage {


	error: any;
	summaries: Array<HomeworkSummary>;
	isTeacher:boolean;

	constructor(public nav: NavController, public homeworkSvc: HomeworkService) {
		Util.getToken().then(t => this.authSuccess(t));
	}

	ngOnInit() {
		this.homeworkSvc.getReviewingExercisesSummaries()
            .then(summaries => this.summaries = summaries)
			.catch(error => this.error = error);

	}

	ngOnDestroy() {
	}

	itemTapped(event, item) {
		if (item.id) {
			this.nav.push(HomeworkPage, {
				item: item
			});
		}
	}

	authSuccess(token) {
		var roles: string = Util.getDecodeObject(token).roles
		this.isTeacher = roles.indexOf('teacher') >= 0;
	}

	openUrl(item) {
		window.open('homework/assigned.html?id=' + item.id, '_self', 'location=yes');
	}

}
