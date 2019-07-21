import {Component, Input} from '@angular/core';

import {BaseDChartComponent} from './base-d-chart.component';

// chartType === 'line-chart'
@Component({
  template: `
    <ngx-charts-line-chart
      [view]="data.view"
      [scheme]="data.colorScheme"
      [results]="data.results"
      [animations]="data.animations"
      [legend]="data.showLegend"
      [legendTitle]="data.legendTitle"
      [legendPosition]="data.legendPosition"
      [gradient]="data.gradient"
      [xAxis]="data.showXAxis"
      [yAxis]="data.showYAxis"
      [showXAxisLabel]="data.showXAxisLabel"
      [showYAxisLabel]="data.showYAxisLabel"
      [xAxisLabel]="data.xAxisLabel"
      [yAxisLabel]="data.yAxisLabel"
      [autoScale]="data.autoScale"
      [xScaleMin]="data.xScaleMin"
      [xScaleMax]="data.xScaleMax"
      [yScaleMin]="data.yScaleMin"
      [yScaleMax]="data.yScaleMax"
      [timeline]="data.timeline"
      [showGridLines]="data.showGridLines"
      [rangeFillOpacity]="data.rangeFillOpacity"
      [roundDomains]="data.roundDomains"
      [tooltipDisabled]="data.tooltipDisabled"
      [trimXAxisTicks]="data.trimXAxisTicks"
      [trimYAxisTicks]="data.trimYAxisTicks"
      [rotateXAxisTicks]="data.rotateXAxisTicks"
      [maxXAxisTickLength]="data.maxXAxisTickLength"
      [maxYAxisTickLength]="data.maxYAxisTickLength"
    >
    </ngx-charts-line-chart>
  `,
})


// <!--[schemeType]="data.schemeType"-->

  // [curve]="data.curve"

export class DCharLineComponent implements BaseDChartComponent {
  @Input() data: any;
}
