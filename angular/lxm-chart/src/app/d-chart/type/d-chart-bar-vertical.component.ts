import {Component, Input} from '@angular/core';

import {BaseDChartComponent} from './base-d-chart.component';

// chartType === 'bar-vertical'
@Component({
  template: `
    <ngx-charts-bar-vertical      
      [view]="data.view"
      [scheme]="data.colorScheme"
      [schemeType]="data.schemeType"
      [customColors]="data.customColors"
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
      [barPadding]="data.barPadding"
      [roundDomains]="data.roundDomains"
      [roundEdges]="data.roundEdges"
      [yScaleMax]="data.yScaleMax"
      [noBarWhenZero]="data.noBarWhenZero"
      [showDataLabel]="data.showDataLabel"
      [trimXAxisTicks]="data.trimXAxisTicks"
      [trimYAxisTicks]="data.trimYAxisTicks"
      [rotateXAxisTicks]="data.rotateXAxisTicks"
      [maxXAxisTickLength]="data.maxXAxisTickLength"
      [maxYAxisTickLength]="data.maxYAxisTickLength"
    ></ngx-charts-bar-vertical>
  `
})
export class DChartBarVerticalComponent implements BaseDChartComponent {
  @Input() data: any;
}
