export interface addDriver {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobileNo: number;
  address: string;
  drivingLicense: string;
  aadhar: string;
  assignUnit: string;
}

export interface selectedDriver {
  aadhar: string;
  address: string;
  assignUnit: string;
  confirmPassword: string;
  drivingLicense: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  mobileNo: number;
  password: string;
}
