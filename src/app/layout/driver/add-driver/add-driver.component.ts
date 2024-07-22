import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-driver',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-driver.component.html',
  styleUrl: './add-driver.component.css',
})
export class AddDriverComponent {
  driverForm: FormGroup;

  formFields = [
    { key: 'firstName', label: 'First Name', type: 'text' },
    { key: 'lastName', label: 'Last Name', type: 'text' },
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'password', label: 'Password', type: 'password' },
    { key: 'confirmPassword', label: 'Confirm Password', type: 'password' },
    { key: 'mobileNo', label: 'Mobile Number', type: 'tel' },
    { key: 'address', label: 'Address', type: 'text' },
    { key: 'drivingLicense', label: 'Driving License', type: 'file' },
    { key: 'aadhar', label: 'Aadhar', type: 'file' },
    {
      key: 'assignUnit',
      label: 'Assign Unit',
      type: 'dropdown',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
    },
  ];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) {
    this.driverForm = this.fb.group({});
    this.formFields.forEach((field) => {
      this.driverForm.addControl(
        field.key,
        this.fb.control('', Validators.required)
      );
    });
  }

  ngOnInit(): void {}


  onFileChange(event: Event, field: string): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.driverForm.get(field)?.setValue(file)
    }
  }

  onSubmit(): void {
    if (this.driverForm.valid) {
      const formData = this.driverForm.value;
      this.http.post('http://localhost:3000/addDriver', formData).subscribe(
        () => {
          this.toastr.success('Account created successfully');
          this.driverForm.reset();
          this.router.navigate(['/home/drivers']);
          window.location.reload();
        },
        (error) => {
          this.toastr.error('Error');
        }
      );
    }
  }
}
