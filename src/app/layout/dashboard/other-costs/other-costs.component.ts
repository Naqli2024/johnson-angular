import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from '../../../services/master.service';
import { othercosts } from '../../../model/dashboardModels/dashboardData';
import { CommonModule } from '@angular/common';
Chart.register(...registerables);

@Component({
  selector: 'app-other-costs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './other-costs.component.html',
  styleUrl: './other-costs.component.css',
})
export class OtherCostsComponent implements OnInit {
  chartdata: othercosts[] = [];
  labeldata: string[] = [];
  realdata: number[] = [];
  colordata: string[] = [];

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    this.service.loadOtherCostDetails().subscribe((item) => {
      this.chartdata = item;
      if (this.chartdata != null) {
        this.chartdata.forEach((chartdata) => {
          this.labeldata.push(chartdata.year);
          this.realdata.push(chartdata.amount);
          this.colordata.push(chartdata.colorcode);
        });
        this.RenderbarChart(this.labeldata, this.realdata, this.colordata);
      }
    });
  }

  RenderbarChart(labeldata: string[], realdata: number[], colordata: string[]) {
    this.RenderChart(labeldata, realdata, colordata, 'othercosts', 'bar');
  }

  RenderChart(
    labeldata: string[],
    realdata: number[],
    colordata: string[],
    chartid: string,
    charttype: any
  ) {
    const myChart = new Chart(chartid, {
      type: charttype,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Cost per kilometer',
            data: realdata,
            backgroundColor: colordata,
            barThickness: 20,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false, // Hide x-axis grid lines
            },
          },
          y: {
            beginAtZero: true,
            axis: false, // Hide y-axis line
          },
        },
      },
    });
  }
}
