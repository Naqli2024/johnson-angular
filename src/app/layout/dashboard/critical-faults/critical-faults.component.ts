import { Component } from '@angular/core';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-critical-faults',
  standalone: true,
  imports: [],
  templateUrl: './critical-faults.component.html',
  styleUrl: './critical-faults.component.css'
})
export class CriticalFaultsComponent {
  faultData: any = '';

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadFaultDetails();
  }

  loadFaultDetails() {
    this.service.loadCriticalFaults().subscribe((item) => {
      this.faultData = item;
    });
  }
}
