import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private _auth: AuthService, private toastr: ToastrService, private _router: Router ) {}

  signIn() {
    let bodyData: any = {
      email: this.email,
      password: this.password,
    };

    this._auth.login(bodyData).subscribe(
      (response: any) => {
        if (response && response.success == true) {
          this.toastr.success(response.message, 'Success');
          localStorage.setItem('token', response.data);
          this._router.navigate(['home'])
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
    this.email = '';
    this.password = '';
  }
}
