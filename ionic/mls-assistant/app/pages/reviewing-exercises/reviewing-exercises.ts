import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Util} from '../../shared/util';
import { HomeworkSummary } from '../../shared/homework';
import { HomeworkService } from '../../shared/homework.service';
import { HomeworkPage } from '../homework/homework';

/*
  Generated class for the ReviewingExercisesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/reviewing-exercises/reviewing-exercises.html',
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
		
		this.summaries = []
		this.homeworkSvc.getReviewingExercisesSummaries()
            .then(summaries => {

				for (let i = 1; i < summaries.length; i++) {
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

	ngOnInit() {

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
