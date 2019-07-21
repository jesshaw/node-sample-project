import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DChartComponent} from './d-chart/d-chart.component';
import {DChartContentDirective} from './d-chart/d-chart-content.directive';
import {DChartBarVerticalComponent} from './d-chart/type/d-chart-bar-vertical.component';
import {DChartPieComponent} from './d-chart/type/d-chart-pie.component';
import {ChartService} from './chart.service';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DChartBarHorizontalComponent} from "./d-chart/type/d-chart-bar-horizontal.component";
import {DCharLineComponent} from "./d-chart/type/d-chart-line.component";

@NgModule({
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [ChartService],
  declarations: [
    AppComponent,
    DChartComponent,
    DChartBarVerticalComponent,
    DChartBarHorizontalComponent,
    DChartPieComponent,
    DCharLineComponent,
    DChartContentDirective,
  ],
  entryComponents: [DChartBarVerticalComponent,DChartBarHorizontalComponent, DChartPieComponent,DCharLineComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
