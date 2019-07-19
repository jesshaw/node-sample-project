import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';

import {DChartContentDirective} from './d-chart-content.directive';
import {DChartItem} from './d-chart-item';
import {BaseDChartComponent} from "./type/base-d-chart.component";

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
  @Input() dcharts: DChartItem;

  @ViewChild(DChartContentDirective, {static: true}) dChartContent: DChartContentDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponent();
    // this.getAds();
  }

  ngOnDestroy() {
    // clearInterval(this.interval);
  }

  loadComponent() {

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.dcharts.component);

    let viewContainerRef = this.dChartContent.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<BaseDChartComponent>componentRef.instance).data = this.dcharts.data;
  }

}
