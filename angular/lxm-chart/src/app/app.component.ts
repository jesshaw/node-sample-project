import {Component, OnInit} from '@angular/core';
import {ChartService} from './chart.service';
import {DChartItem} from './d-chart/d-chart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  charts: DChartItem [];

  data: any;

  constructor(private chartService: ChartService) {
  }

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit() {
    this.charts = this.chartService.getCharts();

    this.data = this.charts[0].data;
    this.data.colorScheme = this.data.colorScheme || this.colorScheme;
    console.log(this.data);
  }
}
