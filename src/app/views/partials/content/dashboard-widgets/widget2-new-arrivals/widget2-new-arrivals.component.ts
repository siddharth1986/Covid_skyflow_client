// Angular
import { Component, Input, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};
@Component({
  selector: 'kt-widget2-new-arrivals',
  templateUrl: './widget2-new-arrivals.component.html',
})
export class Widget2NewArrivalsComponent {
  @Input() cssClasses = '';
  currentTab = 'Day';
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Pass",
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: "Fail",
          data: [53, 32, 33, 52, 13, 43, 32]
        }
      ],
      // colors: ['#234', '#FFF'],
      dataLabels: {
        style: {
          colors: ['#0b39f1', '#FFF'] // color for label shown on bar
        }
      },
    //   markers: {
    //     colors: ['#0288d1', '#fff'] //color for tooltip
    //  },
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        // foreColor: '#444'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff", "AAA"]
      },
      title: {
        text: "Execution Time"
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: function(val) {
            // return val + "K";
            return val;
          }
        }
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {
        y: {
          formatter: function(val) {
            // return val + "K";
            return val+"";
          }
        }
      },
      fill: {
        opacity: 1,
        // colors: ['#70db70', '#ff8566']
        colors: ['#7abbfd', '#0288d1']
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
        labels: {
          colors: undefined,
          useSeriesColors: false
        },
        markers: {
          fillColors: ['#7abbfd', '#0288d1']
        }
      }
    };
  }

  setCurrentTab(tab: string) {
    this.currentTab = tab;
  }
}
