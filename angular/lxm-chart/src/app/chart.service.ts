import {Injectable} from '@angular/core';

import {DChartItem} from './d-chart/d-chart-item';
import {DChartBarVerticalComponent} from './d-chart/type/d-chart-bar-vertical.component';
import {DChartPieComponent} from './d-chart/type/d-chart-pie.component';
import {DChartBarHorizontalComponent} from "./d-chart/type/d-chart-bar-horizontal.component";
import {DCharLineComponent} from "./d-chart/type/d-chart-line.component";

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
    let animations=true;

    return [
      new DChartItem(DChartBarVerticalComponent, {
        results: single,
        colorScheme,
        showXAxis,
        showXAxisLabel,
        xAxisLabel,
        showYAxis,
        showYAxisLabel,
        yAxisLabel,
        animations
      }),
      new DChartItem(DChartBarHorizontalComponent, {
        results: single,
        colorScheme,
        showXAxis,
        showXAxisLabel,
        xAxisLabel,
        showYAxis,
        showYAxisLabel,
        yAxisLabel,
        animations

      }),
      new DChartItem(DChartPieComponent, {
        results: single,
        colorScheme,
        animations,
      }),
      new DChartItem(DCharLineComponent, {
        results: [
          {
            "name": "Monaco",
            "series": [
              {
                "value": 2697,
                "name": "2016-09-15T01:13:26.162Z"
              },
              {
                "value": 5073,
                "name": "2016-09-18T15:43:00.558Z"
              },
              {
                "value": 3683,
                "name": "2016-09-17T23:53:02.113Z"
              },
              {
                "value": 3714,
                "name": "2016-09-17T10:12:34.977Z"
              },
              {
                "value": 6836,
                "name": "2016-09-16T16:35:22.244Z"
              }
            ]
          },
          {
            "name": "Anguilla",
            "series": [
              {
                "value": 4446,
                "name": "2016-09-15T01:13:26.162Z"
              },
              {
                "value": 5996,
                "name": "2016-09-18T15:43:00.558Z"
              },
              {
                "value": 3678,
                "name": "2016-09-17T23:53:02.113Z"
              },
              {
                "value": 2132,
                "name": "2016-09-17T10:12:34.977Z"
              },
              {
                "value": 2318,
                "name": "2016-09-16T16:35:22.244Z"
              }
            ]
          },
          {
            "name": "Uruguay",
            "series": [
              {
                "value": 4248,
                "name": "2016-09-15T01:13:26.162Z"
              },
              {
                "value": 3376,
                "name": "2016-09-18T15:43:00.558Z"
              },
              {
                "value": 6597,
                "name": "2016-09-17T23:53:02.113Z"
              },
              {
                "value": 4898,
                "name": "2016-09-17T10:12:34.977Z"
              },
              {
                "value": 6568,
                "name": "2016-09-16T16:35:22.244Z"
              }
            ]
          },
          {
            "name": "Turkmenistan",
            "series": [
              {
                "value": 3917,
                "name": "2016-09-15T01:13:26.162Z"
              },
              {
                "value": 4831,
                "name": "2016-09-18T15:43:00.558Z"
              },
              {
                "value": 4181,
                "name": "2016-09-17T23:53:02.113Z"
              },
              {
                "value": 5631,
                "name": "2016-09-17T10:12:34.977Z"
              },
              {
                "value": 4498,
                "name": "2016-09-16T16:35:22.244Z"
              }
            ]
          },
          {
            "name": "Uganda",
            "series": [
              {
                "value": 2967,
                "name": "2016-09-15T01:13:26.162Z"
              },
              {
                "value": 3956,
                "name": "2016-09-18T15:43:00.558Z"
              },
              {
                "value": 2735,
                "name": "2016-09-17T23:53:02.113Z"
              },
              {
                "value": 2636,
                "name": "2016-09-17T10:12:34.977Z"
              },
              {
                "value": 4554,
                "name": "2016-09-16T16:35:22.244Z"
              }
            ]
          }
        ],
        colorScheme,
        animations,
        showGridLines:true,
        showLegend:true,
        legendPosition:'right',
        showXAxis:true,
        showYAxis:true,
        autoScale:true,
        trimXAxisTicks:true,
        maxXAxisTickLength:10,
      }),
    ]
      ;
  }
}
