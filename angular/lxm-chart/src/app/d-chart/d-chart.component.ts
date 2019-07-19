import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';

import {DChartContentDirective} from './d-chart-content.directive';
import {DChartItem} from './d-chart-item';

// https://stackblitz.com/angular/oaeoqkjymjy?file=src%2Fapp%2Fad-banner.component.ts
// https://raw.githubusercontent.com/swimlane/ngx-charts/master/demo/app.component.html
// https://swimlane.gitbook.io/ngx-charts/examples/bar-charts/vertical-bar-chart
//   https://stackblitz.com/edit/vertical-bar-chart?embed=1&file=app/app.component.ts

@Component({
  selector: 'app-d-chart',
  templateUrl: './d-chart.component.html',
  styleUrls: ['./d-chart.component.css']
})
export class DChartComponent implements OnInit {
  @Input() charSet: DChartItem;
  currentAdIndex = -1;
  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
