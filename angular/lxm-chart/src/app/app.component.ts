import {Component, OnInit} from '@angular/core';
import {ChartService} from './chart.service';
import {DChartItem} from './d-chart/d-chart-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  charts:DChartItem [];

  constructor(private chartService: ChartService) {}

  ngOnInit() {
    this.charts = this.chartService.getCharts();
  }
}
