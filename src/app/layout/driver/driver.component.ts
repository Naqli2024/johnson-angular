import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AddDriverComponent } from './add-driver/add-driver.component';
import { AddDriverService } from '../../services/add-driver.service';
import { addDriver } from '../../model/addDriver';
import { HttpClient } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    AddDriverComponent,
    PdfViewerModule,
  ],
  templateUrl: './driver.component.html',
  styleUrls: [
    './driver.component.css',
    '../../../assets/css/style.component.css',
  ],
})
export class DriverComponent implements OnInit {
  showAddDriverForm: boolean = false;
  driverData: addDriver[] = [];
  selectedDriverIds: string[] = [];
  pdfSrc: string | ArrayBuffer | null = null;

  constructor(
    private router: Router,
    private addDriverService: AddDriverService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadDriverData();
    this.loadSelectedDrivers();
  }

  loadDriverData() {
    this.addDriverService.loadDriver().subscribe((data) => {
      console.log('Driver Data:', data);
      this.driverData = data;
    });
  }

  loadSelectedDrivers() {
    this.http
      .get<any[]>('http://localhost:3000/selectedDriver')
      .subscribe((data) => {
        console.log('Selected Drivers:', data);
        this.selectedDriverIds = data.map((driver) => driver.id);
      });
  }

  addDriver(event: Event) {
    event.preventDefault();
    this.showAddDriverForm = true;
    this.router.navigate(['/home/drivers/add-driver']);
  }

  onCheckboxChange(event: Event, driver: addDriver) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.http
        .post('http://localhost:3000/selectedDriver', driver)
        .subscribe(() => {
          this.selectedDriverIds.push(driver.id!);
        });
    } else {
      this.http
        .delete(`http://localhost:3000/selectedDriver/${driver.id}`)
        .subscribe(() => {
          this.selectedDriverIds = this.selectedDriverIds.filter(
            (id) => id !== driver.id
          );
        });
    }
  }

  isSelected(driverId: string): boolean {
    return this.selectedDriverIds.includes(driverId);
  }

  onDelete(driver: addDriver) {
    // Filter out the driver to be deleted from the driverData array
    this.driverData = this.driverData.filter((d) => d !== driver);

    // Filter out the driver from the selectedDriverIds array
    this.selectedDriverIds = this.selectedDriverIds.filter(
      (id) => id !== driver.id
    );

    // Perform the deletion operation on the server
    this.http
      .delete(`http://localhost:3000/selectedDriver/${driver.id}`)
      .subscribe(
        () => {
          console.log('Driver deleted successfully from the backend');
        },
        (error) => {
          console.error('Error deleting driver from the backend:', error);
        }
      );
    // Perform the deletion operation on the server for addDriver
    this.http.delete(`http://localhost:3000/addDriver/${driver.id}`).subscribe(
      () => {
        console.log(
          'Driver deleted successfully from addDriver in the backend'
        );
      },
      (error) => {
        console.error(
          'Error deleting driver from addDriver in the backend:',
          error
        );
      }
    );
  }

  onEdit(driver: addDriver) {
    this.showAddDriverForm = true;
    this.router.navigate(['/home/drivers/add-driver'], { state: { driverData: driver } });
  }
}
