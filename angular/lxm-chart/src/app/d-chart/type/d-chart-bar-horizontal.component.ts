import {Component, Input} from '@angular/core';

import {BaseDChartComponent} from './base-d-chart.component';


// "chartType === 'bar-horizontal'"
@Component({
  template: `
  <ngx-charts-bar-horizontal
    [view]="data.view"
    [scheme]="data.colorScheme"
    [results]="data.results"
    [animations]="data.animations"
    [gradient]="data.gradient"
    [xAxis]="data.showXAxis"
    [yAxis]="data.showYAxis"
    [legend]="data.showLegend"
    [legendTitle]="data.legendTitle"
    [legendPosition]="data.legendPosition"
    [showXAxisLabel]="data.showXAxisLabel"
    [showYAxisLabel]="data.showYAxisLabel"
    [tooltipDisabled]="data.tooltipDisabled"
    [xAxisLabel]="data.xAxisLabel"
    [yAxisLabel]="data.yAxisLabel"
    [showGridLines]="data.showGridLines"
    [roundDomains]="data.roundDomains"
    [roundEdges]="data.roundEdges"
    [xScaleMax]="data.xScaleMax"
    [noBarWhenZero]="data.noBarWhenZero"
    [showDataLabel]="data.showDataLabel"
    [trimXAxisTicks]="data.trimXAxisTicks"
    [trimYAxisTicks]="data.trimYAxisTicks"
    [rotateXAxisTicks]="data.rotateXAxisTicks"
    [maxXAxisTickLength]="data.maxXAxisTickLength"
    [maxYAxisTickLength]="data.maxYAxisTickLength"
  >
  </ngx-charts-bar-horizontal>
  `,
})


// <!--[schemeType]="data.schemeType"-->
// <!--[barPadding]="data.barPadding"-->

export class DChartBarHorizontalComponent implements BaseDChartComponent {
  @Input() data: any;
}
