import { Component }          from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

// import './rxjs-extensions';

import { HomeworkService }         from './homework.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HomeworkService
  ]
})
export class AppComponent {
  title = 'Tour of Homeworks';
}

// import {Component} from '@angular/core';
// import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
// import {NgModel} from '@angular/forms';

// @Component({
//   selector: 'my-app',
//   directives: [AlertComponent, DATEPICKER_DIRECTIVES, NgModel],
//   template: `
//     <alert type="info">ng2-bootstrap hello world!</alert>
//       <pre>Selected date is: <em *ngIf="dt">{{ getDate() | date:'fullDate'}}</em></pre>
//       <h4>Inline</h4>
//       <div style="display:inline-block; min-height:290px;">
//         <datepicker [(ngModel)]="dt" [minDate]="minDate" [showWeeks]="true"></datepicker>
//       </div>
//   `,
// })
// export class AppComponent {
//   public dt:Date = new Date();
//   private minDate:Date = null;
//   private events:Array<any>;
//   private tomorrow:Date;
//   private afterTomorrow:Date;
//   private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
//   private format = this.formats[0];
//   private dateOptions:any = {
//     formatYear: 'YY',
//     startingDay: 1
//   };
//   private opened:boolean = false;

//   public getDate():number {
//     return this.dt && this.dt.getTime() || new Date().getTime();
//   }
// }