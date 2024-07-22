import { Component, ViewChild, OnInit } from '@angular/core';
import { MasterService } from '../../../services/master.service';
import { safety } from '../../../model/dashboardModels/dashboardData';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexDataLabels
} from 'ng-apexcharts';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[]; // Corrected to expect an array of strings
  plotOptions: any; // Change the type to 'any'
};

@Component({
  selector: 'app-safety-details',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './safety-details.component.html',
  styleUrls: ['./safety-details.component.css']
})
export class SafetyDetailsComponent implements OnInit {
  safetyData: safety[] = [];

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {
    series: [],
    chart: {
      type: 'radialBar',
      height: 250,
    },
    labels: [],
    plotOptions: {}, // Initialize as an empty object
  };

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadSafetyData();
  }

  loadSafetyData() {
    this.service.loadSafetyDetails().subscribe((items: safety[]) => {
      this.safetyData = items;
      this.updateChart();
    });
  }
  
  updateChart() {
    this.chartOptions.series = this.safetyData.map(item => item.percentage);
    this.chartOptions.labels = this.safetyData.map(item => String(item.drivers)); // Cast to string
  
    // Update plotOptions properties directly
    this.chartOptions.plotOptions = {
      radialBar: {
        hollow: {
          size: '60%',
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '12px', // Adjust font size for name label
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#000',
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: '14px', // Adjust font size for value label
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#000',
            offsetY: 5,
          },
        },
      },
    };
  }
}