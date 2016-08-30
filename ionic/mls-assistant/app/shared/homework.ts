export class Homework {
	id: string;
	catgory: string;
	catgoryDesc: string;
	theClass: string;
	date: Date;
	title: string;
	content: string;
	createTime: Date;
	updateTime: Date;
}

export class HomeworkSummary {
	id: string;
	title: string;
	icon: string;
	star: string = '';
	arrowForward:string='';
}