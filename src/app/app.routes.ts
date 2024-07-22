import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { DriverComponent } from './layout/driver/driver.component';
import { MaintenanceComponent } from './layout/maintenance/maintenance.component';
import { TruckComponent } from './layout/truck/truck.component';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './auth/auth.guard';
import { PretripComponent } from './layout/pretrip/pretrip.component';
import { PosttripComponent } from './layout/posttrip/posttrip.component';
import { TripComponent } from './layout/trip/trip.component';
import { TriplogComponent } from './layout/triplog/triplog.component';
import { UsersComponent } from './layout/users/users.component';
import { DelieveryNotesComponent } from './layout/delievery-notes/delievery-notes.component';
import { CustormerComponent } from './layout/custormer/custormer.component';
import { FleetVehicleComponent } from './layout/truck/fleet-vehicle/fleet-vehicle.component';
import { SummaryComponent } from './layout/truck/summary/summary.component';
import { AddDriverComponent } from './layout/driver/add-driver/add-driver.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'trucks',
        component: TruckComponent,
        children: [
          { path: 'fleet-vehicle', component: FleetVehicleComponent },
          { path: 'summary', component: SummaryComponent },
        ],
      },
      { path: 'pre-trip', component: PretripComponent },
      { path: 'post-trip', component: PosttripComponent },
      { path: 'trip', component: TripComponent },
      { path: 'maintenance', component: MaintenanceComponent },
      { path: 'trip-log', component: TriplogComponent },
      { path: 'users', component: UsersComponent },
      {
        path: 'drivers',
        component: DriverComponent,
        children: [{ path: 'add-driver', component: AddDriverComponent }],
      },
      { path: 'delivery-notes', component: DelieveryNotesComponent },
      { path: 'customer', component: CustormerComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];
