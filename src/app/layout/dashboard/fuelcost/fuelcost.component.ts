import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from '../../../services/master.service';
import { fuelcost } from '../../../model/dashboardModels/dashboardData';
import { CommonModule } from '@angular/common';
Chart.register(...registerables);

@Component({
  selector: 'app-fuelcost',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fuelcost.component.html',
  styleUrl: './fuelcost.component.css'
})
export class FuelcostComponent {
  chartdata: fuelcost[] = [];
  labeldata: string[] = [];
  realdata: number[] = [];
  colordata: string[] = [];

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    this.service.loadFuelCostDetails().subscribe((item) => {
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

  RenderbarChart(
    labeldata: string[],
    realdata: number[],
    colordata: string[]
  ) {
    this.RenderChart(
      labeldata,
      realdata,
      colordata,
      'barchart',
      'bar'
    );
  }

  RenderChart(labeldata: string[], realdata: number[], colordata: string[],chartid: string, charttype: any) {
    const myChart = new Chart(chartid, {
      type: charttype,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Cost per kilometer',
            data: realdata,
            backgroundColor: colordata,
            barThickness: 20
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: false // Hide x-axis grid lines
            },
          },
          y: {
            beginAtZero: true,
            axis: false // Hide y-axis line
          }
        }
      }
    })
  }


}
