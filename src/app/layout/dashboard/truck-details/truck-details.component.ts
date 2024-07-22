import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-truck-details',
  standalone: true,
  imports: [],
  templateUrl: './truck-details.component.html',
  styleUrl: './truck-details.component.css',
})
export class TruckDetailsComponent implements OnInit {
  truckData: any = '';

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadTruckDetails();
  }

  loadTruckDetails() {
    this.service.loadTruckDetails().subscribe((item) => {
      this.truckData = item;
      console.log(this.truckData);
    });
  }
}
