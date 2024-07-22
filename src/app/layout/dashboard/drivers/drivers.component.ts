import { Component } from '@angular/core';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent {
  driverData: any = '';

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadDriverDetails();
  }

  loadDriverDetails() {
    this.service.loadDriverDetails().subscribe((item) => {
      this.driverData = item;
    });
  }

}
