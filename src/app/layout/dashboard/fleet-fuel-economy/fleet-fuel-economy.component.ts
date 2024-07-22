import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from '../../../services/master.service';
import { fleetFuelEconomy } from '../../../model/dashboardModels/dashboardData';

Chart.register(...registerables);

@Component({
  selector: 'app-fleet-fuel-economy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fleet-fuel-economy.component.html',
  styleUrl: './fleet-fuel-economy.component.css'
})
export class FleetFuelEconomyComponent implements OnInit{

  chartdata: fleetFuelEconomy[] = [];
  labeldata: string[] = [];
  realdata: number[] = [];

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    this.service.loadFleetFuelDetails().subscribe((item) => {
      this.chartdata = item;
      if (this.chartdata != null) {
        this.chartdata.forEach((chartdata) => {
          this.labeldata.push(chartdata.year);
          this.realdata.push(chartdata.amount);
        });
        this.RenderLineChart(this.labeldata, this.realdata);
      }
    });
  }

  RenderLineChart(labeldata: string[], realdata: number[]) {
    this.RenderChart(labeldata, realdata, 'linechart','line')
  }

  RenderChart(labeldata: string[], realdata: number[], chartid: string, charttype: any) {
    const myChart = new Chart(chartid, {
      type: charttype,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Cost per meter',
            data: realdata
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
