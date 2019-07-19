import {Component, Input} from '@angular/core';

import {BaseDChartComponent} from './base-d-chart.component';

// chartType === 'bar-vertical'
@Component({
  templateUrl: './d-chart-bar-vertical.component.html',
})
export class DChartBarVerticalComponent implements BaseDChartComponent {
  @Input() data: any;
}
