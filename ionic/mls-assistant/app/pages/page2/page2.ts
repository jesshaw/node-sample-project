import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomeworkService } from '../../shared/homework.service';

@Component({
  templateUrl: 'build/pages/page2/page2.html'
})
export class Page2 {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  error: any;

  constructor(public navCtrl: NavController, navParams: NavParams, public homeworkSvc: HomeworkService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    this.homeworkSvc.getReviewingExercisesSummaries()
            .then(summaries => {
        this.items = []
        for (let i = 1; i < summaries.length; i++) {

          this.items.push({
            title: summaries[i].title,
            note: 'This is item #' + i,
            icon: summaries[i].icon
          });
        }

        console.log(this.items);
      })
      .catch(error => this.error = error);

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
  }
}
