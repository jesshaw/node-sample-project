import { Component, Input } from '@angular/core';

import {BaseDChartComponent} from './base-d-chart.component';

// chartType === 'pie-chart'"
@Component({
  template: `
    <ngx-charts-pie-chart
      [view]="data.view"
      [scheme]="data.colorScheme"
      [results]="data.results"
      [animations]="data.animations"
      [legend]="data.showLegend"
      [legendTitle]="data.legendTitle"
      [legendPosition]="data.legendPosition"
      [explodeSlices]="data.explodeSlices"
      [labels]="data.showLabels"
      [doughnut]="data.doughnut"
      [arcWidth]="data.arcWidth"
      [gradient]="data.gradient"
      [tooltipDisabled]="data.tooltipDisabled"
      [tooltipText]="data.pieTooltipText"
    ></ngx-charts-pie-chart>
  `
})
export class DChartPieComponent implements BaseDChartComponent {
  @Input() data: any;
}
