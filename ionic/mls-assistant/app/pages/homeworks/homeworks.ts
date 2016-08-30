import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, Page } from 'ionic-angular';

import { Homework, HomeworkSummary } from '../../shared/homework';
import { HomeworkService } from '../../shared/homework.service';
import { HomeworkPage } from '../homework/homework';

import {Util} from '../../shared/util';


import 'rxjs/add/operator/toPromise';

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

	constructor(public nav: NavController, private homeworkSvc: HomeworkService) {

	}

	ngOnInit() {
		this.homeworkSvc.getAllHomeworkSummaries()
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
