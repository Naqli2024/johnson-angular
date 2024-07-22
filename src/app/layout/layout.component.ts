import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TruckComponent } from './truck/truck.component';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DriverComponent } from './driver/driver.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    NavbarComponent,
    ProfileComponent,
    DashboardComponent,
    DriverComponent,
    MaintenanceComponent,
    TruckComponent,
    CommonModule,
    PdfViewerModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  menuItems = [
    { name: 'Dashboard', route: '/home/dashboard' },
    { name: 'Trucks', route: '/home/trucks' },
    { name: 'Pre Trip', route: '/home/pre-trip' },
    { name: 'Post Trip', route: '/home/post-trip' },
    { name: 'Trip', route: '/home/trip' },
    { name: 'Maintenance', route: '/home/maintenance' },
    { name: 'Trip log', route: '/home/trip-log' },
    { name: 'Users', route: '/home/users' },
    { name: 'Drivers', route: '/home/drivers' },
    { name: 'Delivery notes', route: '/home/delivery-notes' },
    { name: 'Customer', route: '/home/customer' },
  ];
}
