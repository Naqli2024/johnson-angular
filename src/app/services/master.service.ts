//Dashboard Data Service

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { truckutilizationdetails, truckdetails, driverDetails, tripDetails, fleetFuelEconomy, criticalfaults, fuelcost, serviceremainders, openissues, safety, othercosts, servicecosts, inspectionfailurerate } from '../model/dashboardModels/dashboardData';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  loadtruckutilizationdetails() {
    return this.http.get<truckutilizationdetails[]>(
      'http://localhost:3000/truckutilizationdetails'
    );
  }

  loadFleetFuelDetails() {
    return this.http.get<fleetFuelEconomy[]>("http://localhost:3000/fleetfuel")
  }

  loadTruckDetails() {
    return this.http.get<truckdetails>("http://localhost:3000/truckDetails")
  }

  loadDriverDetails() {
    return this.http.get<driverDetails>("http://localhost:3000/driverDetails")
  }

  loadTripDetails() {
    return this.http.get<tripDetails>("http://localhost:3000/tripsDetails")
  }

  loadCriticalFaults() {
    return this.http.get<criticalfaults>("http://localhost:3000/criticalfaults")
  }

  loadFuelCostDetails() {
    return this.http.get<fuelcost[]>("http://localhost:3000/fuelcost")
  }

  loadServiceRemainders() {
    return this.http.get<serviceremainders>("http://localhost:3000/serviceremainders")
  }

  loadOpenIssues() {
    return this.http.get<openissues>("http://localhost:3000/openissues")
  }

  loadSafetyDetails() {
    return this.http.get<safety[]>("http://localhost:3000/safety")
  }

  loadOtherCostDetails() {
    return this.http.get<othercosts[]>("http://localhost:3000/othercosts")
  }

  loadServiceCostsDetails() {
    return this.http.get<servicecosts[]>("http://localhost:3000/servicecosts")
  }

  loadInspectionFailureRate() {
    return this.http.get<inspectionfailurerate[]>("http://localhost:3000/inspectionfailurerate  ")
  }
}
