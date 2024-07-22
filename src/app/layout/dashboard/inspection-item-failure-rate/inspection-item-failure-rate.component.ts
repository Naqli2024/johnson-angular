import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/master.service';
import { inspectionfailurerate } from '../../../model/dashboardModels/dashboardData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inspection-item-failure-rate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inspection-item-failure-rate.component.html',
  styleUrl: './inspection-item-failure-rate.component.css',
})
export class InspectionItemFailureRateComponent implements OnInit {
  inspectiondata: inspectionfailurerate[] = [];
  inspectionName: string[] = [];
  percentage: number[] = [];

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadInspectionData();
  }

  loadInspectionData() {
    this.service.loadInspectionFailureRate().subscribe((item) => {
      this.inspectiondata = item;
      if (this.inspectiondata != null) {
        this.inspectiondata.map((inspectiondata) => {
          this.inspectionName.push(inspectiondata.name);
          this.percentage.push(inspectiondata.percentage);
        });
      }
    });
  }
}
