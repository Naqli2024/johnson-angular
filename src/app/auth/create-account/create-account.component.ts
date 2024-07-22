import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MaterialModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {
  Name: string = '';
  email: string = '';
  password: string = '';
  
  constructor(private http: HttpClient, private toastr: ToastrService) {}

  register(): void {
    console.log('Register method called.');
    let bodyData: any = {
      Name: this.Name,
      email: this.email,
      password: this.password,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    this.http
      .post('http://localhost:3000/api/register', bodyData, httpOptions)
      .subscribe(
        (response: any) => {
          if (response && response.success == true) {
            this.toastr.success(response.message, 'Success');
            this.clearForm();
          } else {
            this.toastr.error(response.message, 'Error');
          }
        },
        (error: any) => {
          console.error('Error:', error);
          this.toastr.error('An error occured', 'Error');
        }
      );
  }

  clearForm() {
    this.Name = '';
    this.email = '';
    this.password = '';
  }
}
