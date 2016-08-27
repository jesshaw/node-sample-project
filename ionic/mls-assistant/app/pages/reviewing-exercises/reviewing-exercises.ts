import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Util} from '../../shared/util';
import { Homework } from '../../shared/homework';
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
	homeworks: Homework[];
	icons: string[];
	items: Array<{ id:number,title: string, note: string, icon: string }>;

	constructor(public nav: NavController, private homeworkService: HomeworkService) {

		// Let's populate this page with some filler content for funzies
		this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
			'american-football', 'boat', 'bluetooth', 'build'];

		this.items = [];

		this.homeworkService.getReviewingExercises()
            .then(homeworks => {
				for (var i = 0; i < homeworks.length; ++i) {
					var currentHomework = homeworks[i];
					var title = this.homeworkService.getTitle(currentHomework.catgory);
					this.items.push({
						id:currentHomework.id,
						title: title,
						note:  Util.getString(new Date(homeworks[i].date)),
						icon: this.icons[Math.floor(Math.random() * this.icons.length)]
					});
				}
            })
			.catch(error => this.error = error);

	}

	itemTapped(event, item) {
		// That's right, we're pushing to ourselves!
		this.nav.push(HomeworkPage, {
			item: item
		});
	}

}
