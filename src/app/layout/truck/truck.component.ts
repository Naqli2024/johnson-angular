import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddTruckComponent } from './add-truck/add-truck.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrucksearchService } from '../../services/trucksearch.service';

@Component({
  selector: 'app-truck',
  standalone: true,
  imports: [CommonModule, RouterModule, AddTruckComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './truck.component.html',
  styleUrls: [
    './truck.component.css',
    '../../../assets/css/style.component.css',
  ],
})
export class TruckComponent {
  searchTerm: string = '';

  constructor(private truckSearchService: TrucksearchService) {}

  onSearchTermChange() {
    this.truckSearchService.updateSearchTerm(this.searchTerm);
  }

}
