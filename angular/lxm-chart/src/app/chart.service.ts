import {Injectable} from '@angular/core';

import {DChartItem} from './d-chart/d-chart-item';
import {DChartBarVerticalComponent} from './d-chart/type/d-chart-bar-vertical.component';
import {DChartPieComponent} from './d-chart/type/d-chart-pie.component';

@Injectable()
export class ChartService {
  getCharts() {
    let single = [
      {
        'name': '法国',
        'value': 36745,
        'extra': {
          'code': 'fr'
        }
      },
      {
        'name': '西班牙',
        'value': 33000,
        'extra': {
          'code': 'es'
        }
      },
      {
        'name': '意大利',
        'value': 35800,
        'extra': {
          'code': 'it'
        }
      },
      {
        'name': '冰岛',
        'value': 15511
      },
    ];


    let colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#FF0000']
    };


    let showXAxis = true;
    let xAxisLabel = '国家';
    let showXAxisLabel = true;
    let showYAxis = true;
    let showYAxisLabel = true;
    let yAxisLabel = '收入';

    return [
      new DChartItem(DChartBarVerticalComponent, {
        results: single,
        colorScheme,
        showXAxis,
        showXAxisLabel,
        xAxisLabel,
        showYAxis,
        showYAxisLabel,
        yAxisLabel
      }),
      new DChartItem(DChartPieComponent, {
        results: single,
        colorScheme,
      }),
    ]
      ;
  }
}
