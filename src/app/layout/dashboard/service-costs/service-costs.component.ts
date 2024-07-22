import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from '../../../services/master.service';
import { servicecosts } from '../../../model/dashboardModels/dashboardData';
Chart.register(...registerables);


@Component({
  selector: 'app-service-costs',
  standalone: true,
  imports: [],
  templateUrl: './service-costs.component.html',
  styleUrl: './service-costs.component.css'
})
export class ServiceCostsComponent implements OnInit {
  chartdata: servicecosts[] = [];
  labeldata: string[] = [];
  realdata: number[] = [];
  colordata: string[] = [];

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    this.service.loadServiceCostsDetails().subscribe((item) => {
      this.chartdata = item;
      if (this.chartdata != null) {
        this.chartdata.map((chartdata) => {
          this.labeldata.push(chartdata.year);
          this.realdata.push(chartdata.amount);
          this.colordata.push(chartdata.colorcode);
        });
        this.RenderbarChart(this.labeldata, this.realdata, this.colordata);
      }
    });
  }

  RenderbarChart(labeldata: string[], realdata: number[], colordata: string[]) {
    this.RenderChart(labeldata, realdata, colordata, 'servicecosts', 'bar');
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
