import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { IsUserLoggedInService, LocalStorageService } from 'src/app/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private isUserLoggedInService: IsUserLoggedInService
  ) {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    const token = this.localStorageService.get('token');
    if (token) {
      this.router.navigate(['']);
    }
  }

  onRegister(registerForm: FormGroup) {
    if (registerForm.invalid) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    let user: User = {
      email: registerForm.value.email,
      password: registerForm.value.password,
    };
    this.authenticationService.registerUser(user).subscribe({
      next: (result) => {
        let token = result['access_token'];
        this.localStorageService.set('user', user);
        this.localStorageService.set('token', token);
        this.isUserLoggedInService.isLoggedIn.next(true);
        this.router.navigate(['topnews/nytimes/news']);
      },
      error: (e) => {
        this.errorMessage = e.error['message'];
      },
    });
  }
}
