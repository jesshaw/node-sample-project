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
    DChartPieComponent,
    DChartContentDirective,
  ],
  entryComponents: [DChartBarVerticalComponent, DChartPieComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
