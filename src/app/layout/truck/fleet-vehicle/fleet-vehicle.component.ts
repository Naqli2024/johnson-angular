import { Component, OnInit } from '@angular/core';
import { addtruck } from '../../../model/trucksData';
import { TrucksService } from '../../../services/trucks.service';
import { CommonModule } from '@angular/common';
import { TrucksearchService } from '../../../services/trucksearch.service';
import { selectedDriver } from '../../../model/addDriver'; // Import the selectedDriver model
import { AddDriverService } from '../../../services/add-driver.service'; // Import the AddDriverService

@Component({
  selector: 'app-fleet-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fleet-vehicle.component.html',
  styleUrls: ['./fleet-vehicle.component.css'],
})
export class FleetVehicleComponent implements OnInit {
  truckData: addtruck[] = [];
  filteredData: addtruck[] = [];
  selectedDriverData: selectedDriver[] = []; // Add selectedDriver array to store selected driver data

  constructor(
    private truckService: TrucksService,
    private truckSearchService: TrucksearchService,
    private selectedDriverService: AddDriverService // Inject the AddDriverService
  ) {}

  ngOnInit(): void {
    this.loadTruckData();
    this.loadSelectedDriverData();
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

  loadSelectedDriverData() {
    this.selectedDriverService.selectedDriver().subscribe((data) => {
      this.selectedDriverData = data;
    });
  }

  filterData(searchTerm: string) {
    if (!searchTerm) {
      this.filteredData = this.truckData;
    } else {
      this.filteredData = this.truckData.filter((truck) =>
        truck.insuranceNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  // Method to get selected driver's name based on the truck's assignUnit
  getDriverName(truck: addtruck): string {
    const selectedDriver = this.selectedDriverData.find(driver => driver.assignUnit === truck.unit);
    return selectedDriver ? `${selectedDriver.firstName} ${selectedDriver.lastName}` : '';
  }
}