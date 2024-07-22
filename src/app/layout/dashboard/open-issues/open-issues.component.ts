import { Component } from '@angular/core';
import { MasterService } from '../../../services/master.service';


@Component({
  selector: 'app-open-issues',
  standalone: true,
  imports: [],
  templateUrl: './open-issues.component.html',
  styleUrl: './open-issues.component.css'
})
export class OpenIssuesComponent {
  openIssues: any = '';

  constructor(private service: MasterService) {}

  ngOnInit(): void {
    this.loadIssues();
  }

  loadIssues() {
    this.service.loadOpenIssues().subscribe((item) => {
      this.openIssues = item;
    });
  }
}
