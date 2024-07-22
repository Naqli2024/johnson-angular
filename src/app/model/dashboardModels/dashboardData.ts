export interface truckdetails {
  total: number;
  available: number;
  outOfService: number;
}

export interface truckutilizationdetails {
  name: string;
  data: number;
  colorcode: string;
}

export interface driverDetails {
  total: number;
  available: number;
  banned: number;
}

export interface tripDetails {
  total: number;
  live: number;
  cancelled: number;
}

export interface fleetFuelEconomy {
  year: string;
  amount: number;
}

export interface criticalfaults {
  category: string;
  count: number;
}

export interface fuelcost {
  year: string;
  amount: number;
  colorcode: string;
}

export interface serviceremainders {
  overdue: number;
  duesoon: number;
}

export interface openissues {
  overdue: number;
  duesoon: number;
}

export interface safety {
  name: string;
  percentage: number;
  drivers: number;
}

export interface othercosts {
  year: string;
  amount: number;
  colorcode: string;
}

export interface servicecosts {
  year: string;
  amount: number;
  colorcode: string;
}

export interface inspectionfailurerate {
  name: string,
  percentage: number
}