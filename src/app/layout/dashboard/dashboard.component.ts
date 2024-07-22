import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { TruckUtilizationComponent } from './truck-utilization/truck-utilization.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';
import { DriversComponent } from './drivers/drivers.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { FleetFuelEconomyComponent } from './fleet-fuel-economy/fleet-fuel-economy.component';
import { CriticalFaultsComponent } from './critical-faults/critical-faults.component';
import { FuelcostComponent } from './fuelcost/fuelcost.component';
import { ServiceRemaindersComponent } from './service-remainders/service-remainders.component';
import { OpenIssuesComponent } from './open-issues/open-issues.component';
import { SafetyDetailsComponent } from './safety-details/safety-details.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleProgressModule } from '../../model/circle-progress/circle-progress.module';
import { OtherCostsComponent } from './other-costs/other-costs.component';
import { ServiceCostsComponent } from './service-costs/service-costs.component';
import { InspectionItemFailureRateComponent } from './inspection-item-failure-rate/inspection-item-failure-rate.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InspectionSummaryComponent } from './inspection-summary/inspection-summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    NgApexchartsModule,
    TruckUtilizationComponent,
    TruckDetailsComponent,
    DriversComponent,
    TripDetailsComponent,
    FleetFuelEconomyComponent,
    CriticalFaultsComponent,
    FuelcostComponent,
    ServiceRemaindersComponent,
    OpenIssuesComponent,
    SafetyDetailsComponent,
    CircleProgressModule,
    OtherCostsComponent,
    ServiceCostsComponent,
    InspectionItemFailureRateComponent,
    InspectionSummaryComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
