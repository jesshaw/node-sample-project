import { Component, OnInit, OnDestroy } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Homework } from '../../shared/homework';
import { HomeworkService } from '../../shared/homework.service';

import {ExercisesPage} from '../exercises/exercises';



/*
  Generated class for the HomeworkPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	templateUrl: 'build/pages/homework/homework.html',
})
export class HomeworkPage implements OnInit, OnDestroy {

	exercisesPage: any;
	homework: Homework = new Homework();
	title: string;
	constructor(private nav: NavController, private navParams: NavParams, private homeworkService: HomeworkService) {
		this.exercisesPage=ExercisesPage;
	}

	ngOnInit() {
		let id = this.navParams.get('item').id;
		console.log(id);
		this.homeworkService.getHomework(id)
            .then(homework => {
				this.homework = homework;
				this.title = this.homeworkService.getTitle(homework.catgory);
            });
	}

	ngOnDestroy() {
		// this.sub.unsubscribe();
	}
}
