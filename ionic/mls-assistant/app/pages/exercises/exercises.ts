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

	constructor(public nav: NavController, private homeworkSvc: HomeworkService) {

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

}
