import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Util} from '../../shared/util';
import { HomeworkSummary } from '../../shared/homework';
import { HomeworkService } from '../../shared/homework.service';
import { HomeworkPage } from '../homework/homework';

/*
  Generated class for the ExercisesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/exercises/exercises.html',
})
export class ExercisesPage {

	error: any;
	summaries: HomeworkSummary[] = [];
	isTeacher: boolean;

	constructor(public nav: NavController, private homeworkSvc: HomeworkService) {
		Util.getToken().then(t => this.authSuccess(t));
	}

	ngOnInit() {
		this.homeworkSvc.getExercisesSummaries()
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
