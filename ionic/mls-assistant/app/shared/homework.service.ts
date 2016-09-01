import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import {AuthHttp} from 'angular2-jwt';

import './rxjs-extensions';

import { Homework, HomeworkSummary } from './homework';
import {Util} from './util';

@Injectable()
export class HomeworkService {

	homeworksUrl: string = Util.baseUrl + "/api/protected/homeworks";
	homeworksUrlTest: string = Util.baseUrl + "/api/homeworks";


	constructor(private http: Http, private autHttp: AuthHttp) { }

	public getAllHomeworkSummaries() {
		return this.getHomeworkSummariesByCategory();
	}

	public getHomeworkSummaries() {
		return this.getHomeworkSummariesByCategory('1');
	}

	public getExercisesSummaries() {
		return this.getHomeworkSummariesByCategory('2');
	}

	public getReviewingExercisesSummaries() {
		return this.getHomeworkSummariesByCategory('3');
	}

	public getHomework(id: string) {
		return this.getAllHomeworks()
			.then(homeworks => homeworks.find(homework => homework.id === id));//返回一个实体值
	}

	private getHomeworkSummariesByCategory(catgory?: string): Promise<Array<HomeworkSummary>> {

		var icons: string[] = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
			'american-football', 'boat', 'bluetooth', 'build'];

		return this.getAllHomeworks()
			.then(homeworks => {
				var homeworkSumaries = []
				for (var i = 0; i < homeworks.length; ++i) {
					var item = new HomeworkSummary();
					item.id = homeworks[i].id;
					item.title = homeworks[i].title;
					item.icon = icons[Math.floor(Math.random() * icons.length)];
					item.star = Util.showStar(homeworks[i].date);
					item.arrowForward = 'arrow-forward'

					if (catgory) {
						if (catgory == homeworks[i].catgory) {
							homeworkSumaries.push(item);
						}
						else {
							continue;
						}
					}
					else {
						homeworkSumaries.push(item);
					}
				}
				if (homeworkSumaries.length <= 0) {
					var emptyItem = new HomeworkSummary();
					emptyItem.id = '';
					emptyItem.title = '没有内容，待老师添加。';
					emptyItem.icon = '';
					emptyItem.star = '';
					emptyItem.arrowForward = ''
					homeworkSumaries.push(emptyItem);
				}

				console.log(homeworkSumaries);
				return homeworkSumaries;
			})
	}

	getAllHomeworkSummariesByMap() {

		var icons: string[] = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
			'american-football', 'boat', 'bluetooth', 'build'];

		return new Promise<Array<HomeworkSummary>>(resolve => {

			this.http.get(this.homeworksUrlTest + '?theClass=class1')
				.map(res => {
					console.log(res.json());
					var homeworks: Array<Homework> = [];
					res.json().forEach(o => {
						var item = new Homework();
						item.id = o._id;
						item.catgory = o.catgory;
						item.catgoryDesc = this.getTitle(o.catgory);
						item.theClass = o.theClass;
						item.content = o.content;
						item.date = new Date(o.date);
						item.createTime = o.createTime;
						item.updateTime = o.updateTime;
						// item.title = Util.getString(new Date(o.date)) + item.catgoryDesc;
						item.title = Util.getString(new Date(o.date)) + item.catgoryDesc;
						homeworks.push(item);
					});
					return homeworks;
				}).subscribe(homeworks => {

					var homeworkSummaries: Array<HomeworkSummary> = [];
					homeworks.forEach(o => {
						var item = new HomeworkSummary();
						item.id = o.id;
						item.title = o.title;
						item.icon = icons[Math.floor(Math.random() * icons.length)];
						// item.star = Util.showStar(o.date);
						item.star = '';
						item.arrowForward = 'arrow-forward';
						homeworkSummaries.push(item);
					});

					resolve(homeworkSummaries);
				})
		});
	}


	private getAllHomeworks(): Promise<Array<Homework>> {

		return new Promise<Array<Homework>>(resolve => Util.getCurrentClass()
			.then(c => {
				let params: URLSearchParams = new URLSearchParams();
				params.set('theClass', c);
				return new Promise(resolve => resolve(params));
			})
			.then(params => {
				return new Promise(resolve => {
					Util.getAuthContentHeaders().then(contentHeaders => {
						resolve({ headers: contentHeaders, search: params })
					});
				});
			})
			.then(authHeaders => {
				this.http.get(this.homeworksUrl, authHeaders)
					.subscribe(response => {
						// return response.json() as Homework[];
						var homeworks = [];
						var jsonArray = response.json();
						for (var i = 0; i < jsonArray.length; ++i) {
							var item = new Homework();
							item.id = jsonArray[i]._id;
							item.catgory = jsonArray[i].catgory;
							item.catgoryDesc = this.getTitle(jsonArray[i].catgory);
							item.theClass = jsonArray[i].theClass;
							item.content = jsonArray[i].content;
							item.date = new Date(jsonArray[i].date);
							item.createTime = jsonArray[i].createTime;
							item.updateTime = jsonArray[i].updateTime;
							item.title = Util.getString(new Date(jsonArray[i].date)) + item.catgoryDesc
							homeworks.push(item);
						}
						// console.log(homeworks);

						resolve(homeworks);
					});
			}));
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