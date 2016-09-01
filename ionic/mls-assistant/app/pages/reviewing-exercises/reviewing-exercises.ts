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

	constructor(public nav: NavController, public homeworkSvc: HomeworkService) {


	}

	ngOnInit() {
		this.homeworkSvc.getAllHomeworkSummariesByMap()
			.then(summaries => this.summaries = summaries)
			.catch(error => this.error = error);
	}

	toSumries(datas) {
		this.summaries = []
		for (let i = 0; i < datas.length; i++) {
			this.summaries.push({
				id: datas[i].id,
				title: datas[i].title,
				icon: datas[i].icon,
				star: datas[i].star,
				arrowForward: datas[i].arrowForward
			});
		}
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
