import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute, Params }            from '@angular/router';

import { Homework }                from './homework';
import { HomeworkService }         from './homework.service';
// import { AuthService }         from './auth.service';
// import { Util }         from './util';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/homework-detail.component.html',
	// styleUrls:  ['app/heroes.component.css']

	directives: [ROUTER_DIRECTIVES],
})

export class HomeworkDetailComponent implements OnInit {
	homework: Homework;
	error: any;

	constructor(private route: ActivatedRoute, private homeworkSvc: HomeworkService) { }

	
	ngOnInit(): void {

		this.route.params.forEach((params: Params) => {
			if (params['id'] !== undefined) {
				let id = params['id'];

				this.homeworkSvc.getHomework(id)
					.then(homework => {
						this.homework = homework;
						console.log(this.homework);
					});
			}
		});
	}


	// onSelect(hero: Hero): void {
	//   this.selectedHero = hero;
	//    this.addingHero = false;
	// }

	// gotoDetail(): void {
	//   this.router.navigate(['/detail', this.selectedHero.id]);
	// }
}