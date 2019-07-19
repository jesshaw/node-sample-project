import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DChartComponent} from './d-chart/d-chart.component';
import {DChartContentDirective} from './d-chart/d-chart-content.directive';
import {DChartBarVerticalComponent} from './d-chart/type/d-chart-bar-vertical.component';
import {DChartPieComponent} from './d-chart/type/d-chart-pie.component';
import {ChartService} from './chart.service';

@NgModule({
  declarations: [
    AppComponent,
    DChartComponent,
    DChartBarVerticalComponent,
    DChartPieComponent,
    DChartContentDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChartService],
  entryComponents: [DChartBarVerticalComponent, DChartPieComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
