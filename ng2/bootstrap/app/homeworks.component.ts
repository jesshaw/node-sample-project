import { Component, OnInit } from '@angular/core';
import { Router,ROUTER_DIRECTIVES }            from '@angular/router';

import { Homework }                from './homework';
import { HomeworkService }         from './homework.service';
// import { AuthService }         from './auth.service';
// import { Util }         from './util';

@Component({
   selector: 'my-heroes',
   templateUrl: 'app/homeworks.component.html',
   // styleUrls:  ['app/heroes.component.css']
   
  directives: [ROUTER_DIRECTIVES],
})
export class HomeworksComponent implements OnInit {
   homeworks: Homework[];
   selectedHomework: Homework;
   addingHero = false;
   error: any;

   constructor(private router: Router, private homeworkSvc: HomeworkService) { }

   getHomeworks(): void {
      this.homeworkSvc
         .getAllHomeworks()
         .then(homeworks => {
            this.homeworks = homeworks;
            console.log(this.homeworks);
         })
         .catch(error => this.error = error);
   }



   // addHero(): void {
   //   this.addingHero = true;
   //   this.selectedHero = null;
   // }

   // close(savedHero: Hero): void {
   //   this.addingHero = false;
   //   if (savedHero) { this.getHeroes(); }
   // }

   // deleteHero(hero: Hero, event: any): void {
   //   event.stopPropagation();
   //   this.heroService
   //       .delete(hero)
   //       .then(res => {
   //         this.heroes = this.heroes.filter(h => h !== hero);
   //         if (this.selectedHero === hero) { this.selectedHero = null; }
   //       })
   //       .catch(error => this.error = error);
   // }

   ngOnInit(): void {
      this.getHomeworks();
   }


   // onSelect(hero: Hero): void {
   //   this.selectedHero = hero;
   //    this.addingHero = false;
   // }

   // gotoDetail(): void {
   //   this.router.navigate(['/detail', this.selectedHero.id]);
   // }
}