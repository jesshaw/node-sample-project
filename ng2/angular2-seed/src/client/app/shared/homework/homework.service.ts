import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Homework } from './homework';


@Injectable()
export class HomeworkService {

	homeworksUrl: string = 'http://api.sanfor.com.cn/api/homeworks';
	constructor(private http: Http) { }

	getAllHomeworks() {

		let params: URLSearchParams = new URLSearchParams();
		params.set('theClass', 'class1');

		var icons: string[] = ['glyphicon-music', 'glyphicon-heart', 'glyphicon-star', 'glyphicon-road', 'glyphicon-headphones', 'glyphicon-flag',
			'glyphicon-camera', ' glyphicon-cloud'];

		return this.http.get(this.homeworksUrl, {
			headers: new Headers({ 'Content-Type': 'application/json' }),
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
						date: (new Date(hs[i].date)).toLocaleDateString(),
						content: hs[i].content,
						icon: icons[Math.floor(Math.random() * icons.length)]
					});
				}
				console.log(homeworks);

				// console.log(response.json());
				return homeworks;
			})
			.catch(this.handleError);


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
		return this.getHomeworksByCategory('1');
	}
	getExercises() {
		return this.getHomeworksByCategory('2');
	}
	getReviewingExercises() {
		return this.getHomeworksByCategory('3');
	}

	getHomework(id: string) {

		// return this.homeworks.find(homework => homework.id === id);
		return this.getAllHomeworks()
			.then(homeworks =>
				homeworks.find(homework => homework.id === id) //返回一个实体值
			);
	}

	getTitle(catgory: string) {

		if (catgory === '2') {
			return '练习';
		} else if (catgory === '3') {
			return '复习';
		} else {
			return '课后作业';
		}
	}

	private getHomeworksByCategory(catgory: string) {
		return this.getAllHomeworks().then(homeworks =>
			homeworks.filter(homework => homework.catgory === catgory)
		);
	}

	private handleError(error: any) {
		console.error('An error occurred', error.toString());
		return Promise.reject(error.message || error);
	}
}

