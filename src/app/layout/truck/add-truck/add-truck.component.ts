import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-truck',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.css'],
})
export class AddTruckComponent implements OnInit {
  userForm: FormGroup;

  formFields = [
    {
      key: 'unit',
      label: 'Unit',
      type: 'dropdown',
      options: [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ],
    },
    {
      key: 'unitClassification',
      label: 'Unit Classification',
      type: 'dropdown',
      options: [
        { label: 'Classification 1', value: 'classification1' },
        { label: 'Classification 2', value: 'classification2' },
        { label: 'Classification 3', value: 'classification3' },
      ],
    },
    {
      key: 'suClassification',
      label: 'Sub Classification',
      type: 'dropdown',
      options: [
        { label: 'Sub Classification 1', value: 'subClassification1' },
        { label: 'Sub Classification 2', value: 'subClassification2' },
        { label: 'Sub Classification 3', value: 'subClassification3' },
      ],
    },
    { key: 'registrationNumber', label: 'Registration Number', type: 'text' },
    { key: 'model', label: 'Model', type: 'text' },
    { key: 'year', label: 'Year', type: 'number' },
    { key: 'permitNumber', label: 'Permit Number', type: 'text' },
    { key: 'permitStartDate', label: 'Permit Start Date', type: 'date' },
    { key: 'permitEndDate', label: 'Permit End Date', type: 'date' },
    { key: 'insuranceNumber', label: 'Insurance Number', type: 'text' },
    { key: 'insuranceStartDate', label: 'Insurance Start Date', type: 'date' },
    { key: 'insuranceEndDate', label: 'Insurance End Date', type: 'date' },
    { key: 'fcNumber', label: 'FC Number', type: 'text' },
    { key: 'fcStartDate', label: 'FC Start Date', type: 'date' },
    { key: 'fcEndDate', label: 'FC End Date', type: 'date' },
    { key: 'rcNumber', label: 'RC Number', type: 'text' },
    { key: 'rcStartDate', label: 'RC Start Date', type: 'date' },
    { key: 'rcEndDate', label: 'RC End Date', type: 'date' },
  ];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router
  ) {
    this.userForm = this.fb.group({});
    this.formFields.forEach((field) => {
      this.userForm.addControl(
        field.key,
        this.fb.control('', Validators.required)
      );
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.http.post('http://localhost:3000/addtruck', formData).subscribe(
        () => {
          this.toastr.success('FormData Saved Successfully');
          this.userForm.reset();
          // this.router.navigate(['/home', 'trucks']);
        },
        (error) => {
          this.toastr.error('Error');
        }
      );
    }
  }
}
