import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MasterService } from '../../../services/master.service';
import { truckutilizationdetails } from '../../../model/dashboardModels/dashboardData';
import { CommonModule } from '@angular/common';
Chart.register(...registerables);

@Component({
  selector: 'app-truck-utilization',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './truck-utilization.component.html',
  styleUrl: './truck-utilization.component.css'
})
export class TruckUtilizationComponent implements OnInit{
  chartdata: truckutilizationdetails[] = [];
  labeldata: string[] = [];
  realdata: number[] = [];
  colordata: string[] = [];

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    this.service.loadtruckutilizationdetails().subscribe((item) => {
      this.chartdata = item;
      if (this.chartdata != null) {
        this.chartdata.map((chartdata) => {
          this.labeldata.push(chartdata.name);
          this.realdata.push(chartdata.data);
          this.colordata.push(chartdata.colorcode);
        });
        this.RenderdoughnutChart(this.labeldata, this.realdata, this.colordata);
      }
    });
  }

  RenderdoughnutChart(
    labeldata: string[],
    realdata: number[],
    colordata: string[]
  ) {
    this.RenderChart(
      labeldata,
      realdata,
      colordata,
      'doughnutchart',
      'doughnut'
    );
  }

  RenderChart(
    labeldata: string[],
    realdata: number[],
    colordata: string[],
    chartid: string,
    charttype: any
  ) {
    const mychart = new Chart(chartid, {
      type: charttype,
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'Truck Utilization',
            data: realdata,
            backgroundColor: colordata,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          }
        }
      },
    });
    this.createCustomLegend(mychart);
  }
  
  createCustomLegend(chart: any) {
    const legendContainer = document.getElementById('chart-legend');
    if (!legendContainer) return; // Add null check

    legendContainer.innerHTML = ''; // Clear any existing legend items

    const ul = document.createElement('ul');
    ul.classList.add('chart-legend-list');

    chart.data.labels.forEach((label: string, index: number) => {
      const li = document.createElement('li');
      li.classList.add('chart-legend-item');

      const colorBox = document.createElement('span');
      colorBox.classList.add('chart-legend-item-color');
      colorBox.style.backgroundColor = chart.data.datasets[0].backgroundColor[index] as string;

      const text = document.createTextNode(`${label}: ${chart.data.datasets[0].data[index]}`);

      li.appendChild(colorBox);
      li.appendChild(text);
      ul.appendChild(li);
    });

    legendContainer.appendChild(ul);
  }
}
