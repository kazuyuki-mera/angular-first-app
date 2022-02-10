import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  errors: any = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register(registerForm) {
    this.authService.register(registerForm.value).subscribe(
      (result) => {
        console.log('Success');
      },
      (err: HttpErrorResponse) => {
        console.error(err);
        this.errors = err.error.errors;
      }
    );
  }
}
