import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Homework } from './homework';
import {Util} from './util';

@Injectable()
export class HomeworkService {

	homeworksUrl: string = Util.baseUrl + "/api/homeworks";
	constructor(private http: Http) { }

	getAllHomeworks() {

		let params: URLSearchParams = new URLSearchParams();
		params.set('theClass', 'class1');

		var icons: string[] = ['glyphicon-music', 'glyphicon-heart', 'glyphicon-star', 'glyphicon-road', 'glyphicon-headphones', 'glyphicon-flag',
			'glyphicon-camera', ' glyphicon-cloud'];

		return this.http.get(this.homeworksUrl, {
			headers: Util.getContentHeaders(),
			search: params
		}).toPromise()
			.then(response => {
				var hs = response.json();
				var homeworks: Homework[] = [];
				for (var i = 0; i < hs.length; ++i) {
					var catgoryDesc = this.getTitle(hs[i].catgory);
					homeworks.push({
						id: hs[i]._id,
						catgoryDesc: catgoryDesc,
						catgory: hs[i].catgory,
						date: hs[i].date,
						content: hs[i].content,
						icon: icons[Math.floor(Math.random() * icons.length)]
					});
				}
				console.log(homeworks);

				// console.log(response.json());
				return homeworks;
			});


		// return this.local.get('id_token')
		// 	.then(profile => profile).then(token => {
		// 		this.contentHeader.append("authorization", 'Bearer ' + token);
		// 		return this.http.get(this.homeworksUrl, { headers: this.contentHeader }).toPromise()
		// 	}).then(response => {
		// 		console.log(response.json());
		// 		return response.json() as Homework[];
		// 	});


		// this.local.get('id_token').then(profile => {
		// 	this.token = profile;
		// }).catch(error => {
		// 	console.log(error);
		// });

		// return this.http.get(this.homeworksUrl, { headers: this.contentHeader })
		// 	.toPromise()
		// 	.then(response => {
		// 		console.log(response.json());
		// 		return response.json() as Homework[];
		// 	})
		// 	.catch(this.handleError);
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

	getHomework(id: string) {

		// return this.homeworks.find(homework => homework.id === id);
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