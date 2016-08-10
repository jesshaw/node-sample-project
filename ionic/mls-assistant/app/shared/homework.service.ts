import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Homework } from './homework';

@Injectable()
export class HomeworkService {

	homeworksUrl: string = "http://localhost:3001/api/homeworks";
	homeworks: Homework[];
	constructor(private http: Http) { }

	getAllHomeworks() {
		return this.http.get(this.homeworksUrl)
			.toPromise()
			.then(response => this.homeworks= response.json().data as Homework[])
			.catch(this.handleError);
	}

	getHomeworks() {
		return this.getHomeworksByCategory("1");
	}
	getExercises() {
		return this.getHomeworksByCategory("2");
	}
	getReviewingExercises() {
		return this.getHomeworksByCategory("3");
	}

	getHomework(id: number) {
		return this.getAllHomeworks()
			.then(homeworks =>
				homeworks.find(homework => homework.id === id) //返回一个实体值
			);
	}

	getTitle(catgory: string) {
		var title = '课后作业';
		if (catgory == '2') {
			title = '练习'
		}
		else if (catgory == '3') {
			title = '复习'
		}
		return title;
	}

	private getHomeworksByCategory(catgory: string) {
		return this.getAllHomeworks().then(homeworks =>
			homeworks.filter(homework => homework.catgory === catgory)
		);
	}

	private handleError(error: any) {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}