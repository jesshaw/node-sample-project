import { Component }          from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import { CollapseDirective } from 'ng2-bootstrap/ng2-bootstrap';

// import './rxjs-extensions';

import { HomeworkService }         from './homework.service';

@Component({
  selector: 'my-app',
  template: ` 
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false" (click)="isCollapsed = !isCollapsed">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">{{title}}</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" [collapse]="isCollapsed">
      <ul class="nav navbar-nav">
        <!--<li  class="nav-item" class="active"><a routerLink="/homeworks1" routerLinkActive="active">Heroes</a>
        </li> -->
        <li  class="nav-item"><a routerLink="/detail/1" routerLinkActive="active">Dashboard</a></li>   
        <li [routerLinkActive]="['active']"> <a [routerLink]="['homeworks']">homeworks</a></li>
  <li [routerLinkActive]="['active']"> <a [routerLink]="['second']">Second</a></li>   
      </ul>    
     
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES, CollapseDirective],
  providers: [
    HomeworkService
  ]
})
export class AppComponent {
  title = 'mls assistant';

  public isCollapsed: boolean = true;
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