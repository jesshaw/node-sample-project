import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, Page } from 'ionic-angular';

import { Homework } from '../../shared/homework';
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
	icons: string[] = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
		'american-football', 'boat', 'bluetooth', 'build'];
	items: Array<{ id: number, title: string, note: string, icon: string,showStar:string }>;

	constructor(public nav: NavController, private homeworkSvc: HomeworkService) {

	}

	ngOnInit() {
		this.homeworkSvc.getAllHomeworks()
            .then(homeworks => {
				this.items = [];
				for (var i = 0; i < homeworks.length; ++i) {
					var title = this.homeworkSvc.getTitle(homeworks[i].catgory);
					this.items.push({
						id: homeworks[i].id,
						title: title,
						note: Util.getString(new Date(homeworks[i].date)),
						icon: this.icons[Math.floor(Math.random() * this.icons.length)],
						showStar: Util.showStar(new Date(homeworks[i].date))
					});
				}
				console.log(this.items);
            })
			.catch(error => this.error = error);
	}

	ngOnDestroy() {
	}

	itemTapped(event, item) {
		// That's right, we're pushing to ourselves!
		this.nav.push(HomeworkPage, {
			item: item
		});
	}
}
