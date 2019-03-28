import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {Router} from '@angular/router';
import { Chart } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { MeasuresService } from '../../measures.service';
import { Measure } from '../../measure.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-chart-display',
  templateUrl: './chart-display.component.html',
  styleUrls: ['./chart-display.component.css']
})
export class ChartDisplayComponent implements OnInit {
  measure: Measure[];
  timestamp = [];
  flow = [];
  pressure = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes:
      [{ticks: {beginAtZero: true, fontColor: 'black', fontStyle: 'bold'}}],
      yAxes:
      [{ticks: {beginAtZero: true, fontColor: 'black', fontStyle: 'bold'}}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },
    legend: {
      labels: {
        fontStyle: 'bold',
        fontColor: 'black'
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartColors = [
    { backgroundColor: '#FF6600' },
    { backgroundColor: '#1a8cff' }];
  public barChartData: ChartDataSets[] = [];
  constructor(private measureSvc: MeasuresService, private router: Router) { }
  ngOnInit() {
    this.measureSvc.getMeasures()
      .subscribe((res: Measure[]) => {
        res.forEach(y => {
          this.flow.push(y.Flow);
          this.pressure.push(y.Pressure);
          this.timestamp.push(y.TimeStamp);
        });

      const chartData: ChartDataSets = {data: this.flow, label: 'Flow'};
      const chartData1: ChartDataSets = {data: this.pressure, label: 'Pressure'};
      const chartData2: Label = this.timestamp;
      this.barChartData.push(chartData);
      this.barChartData.push(chartData1);
      this.barChartLabels = chartData2;
      });
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}


