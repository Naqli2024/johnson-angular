import { Component, OnInit } from '@angular/core';
import { addtruck } from '../../../model/trucksData';
import { TrucksService } from '../../../services/trucks.service';
import { CommonModule } from '@angular/common';
import { TrucksearchService } from '../../../services/trucksearch.service';
import { selectedDriver } from '../../../model/addDriver';
import { AddDriverService } from '../../../services/add-driver.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent implements OnInit {
  truckData: addtruck[] = [];
  filteredData: addtruck[] = [];
  selectedDrivers: selectedDriver[] = [];

  constructor(
    private truckService: TrucksService,
    private truckSearchService: TrucksearchService,
    private selectedDriverService: AddDriverService
  ) {}

  ngOnInit(): void {
    this.loadTruckData();
    this.loadSelectedDrivers();
    this.truckSearchService.currentSearchTerm.subscribe((term) => {
      this.filterData(term);
    });
  }

  loadTruckData() {
    this.truckService.loadAddTruckData().subscribe((data) => {
      this.truckData = data;
      this.filterData('');
    });
  }

  loadSelectedDrivers() {
    this.selectedDriverService.selectedDriver().subscribe((data) => {
      this.selectedDrivers = data;
    });
  }

  filterData(searchTerm: string) {
    if (!searchTerm) {
      this.filteredData = this.truckData;
    } else {
      this.filteredData = this.truckData.filter((truck) =>
        truck.registrationNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }
  }

  getDriverDetails(truck: addtruck): selectedDriver | undefined {
    return this.selectedDrivers.find(driver => driver.assignUnit === truck.unit);
  }
}
