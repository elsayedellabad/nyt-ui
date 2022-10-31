import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from './../../models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { IsUserLoggedInService, LocalStorageService, SessionStorageService } from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: String = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private isUserLoggedInService: IsUserLoggedInService
  ) {
    this.loginForm = this.formBuilder.group({
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

  onLogin(loginForm: FormGroup) {
    if (loginForm.invalid) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    const user: User = {
      email: loginForm.value.email,
      password: loginForm.value.password,
    };
    this.authenticationService.loginUser(user).subscribe({
      next: (result) => {
        const token = result['access_token'];
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
