import { Component } from '@angular/core';
import { MasterService } from '../../../services/master.service';

@Component({
  selector: 'app-service-remainders',
  standalone: true,
  imports: [],
  templateUrl: './service-remainders.component.html',
  styleUrl: './service-remainders.component.css'
})
export class ServiceRemaindersComponent {
  serviceRemainders: any = '';

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadServiceReminders();
  }

  loadServiceReminders() {
    this.service.loadServiceRemainders().subscribe((item) => {
      this.serviceRemainders = item;
    });
  }
}
