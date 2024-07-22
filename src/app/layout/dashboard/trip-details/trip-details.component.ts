import { Component } from '@angular/core';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css'
})
export class TripDetailsComponent {
  tripData: any = '';

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadTripDetails();
  }

  loadTripDetails() {
    this.service.loadTripDetails().subscribe((item) => {
      this.tripData = item;
    });
  }

}
