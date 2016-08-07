import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ClassCoursePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/class-course/class-course.html',
})
export class ClassCoursePage {

  icons: string[];

  items: Array<{title: string, note: string, icon: string}>;


  constructor(private nav: NavController) {

 this.icons = ['flask', 'wifi', 'beer'];

    this.items = [];
    for(let i = 1; i < 4; i++) {
      this.items.push({
        title: '班级 ' + i,
        note: '课后作业查看 #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

}
