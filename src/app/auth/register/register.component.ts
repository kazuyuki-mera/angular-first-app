import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  test: Date = new Date();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register(registerForm) {
    this.authService.register(registerForm.value).subscribe(
      (result) => {
        console.log('Success');
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
