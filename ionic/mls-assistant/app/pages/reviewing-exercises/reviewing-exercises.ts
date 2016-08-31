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
	summaries: Array<{
		id: string,
		title: string,
		icon: string,
		star: string,
		arrowForward: string
	}>;

	constructor(public nav: NavController, public homeworkSvc: HomeworkService) {


	}

	ngOnInit() {
		this.homeworkSvc.getReviewingExercisesSummaries()
            .then(summaries => {
				this.summaries = []
				for (let i = 0; i < summaries.length; i++) {
					this.summaries.push({
						id: summaries[i].id,
						title: summaries[i].title,
						icon: summaries[i].icon,
						star: summaries[i].star,
						arrowForward: summaries[i].arrowForward
					});
				}

				console.log(this.summaries);
            })
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
