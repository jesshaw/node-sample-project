import { Injectable }           from '@angular/core';

import {DChartItem} from './d-chart/d-chart-item';
import {DChartBarVerticalComponent} from './d-chart/type/d-chart-bar-vertical.component';
import {DChartPieComponent} from './d-chart/type/d-chart-pie.component';

@Injectable()
export class ChartService {
  getCharts() {
    let single = [
      {
        'name': 'France',
        'value': 36745,
        'extra': {
          'code': 'fr'
        }
      },
      {
        'name': 'Spain',
        'value': 33000,
        'extra': {
          'code': 'es'
        }
      },
      {
        'name': 'Italy',
        'value': 35800,
        'extra': {
          'code': 'it'
        }
      },
      {
        'name': 'Benin',
        'value': 15511
      },
    ];
    return [
      new DChartItem(DChartBarVerticalComponent, {results:single }),
      new DChartItem(DChartPieComponent, {results:single}),
    ];
  }
}
