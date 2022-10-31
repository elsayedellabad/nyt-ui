import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsUserLoggedInService, LocalStorageService } from 'src/app/core';
import { AuthenticationService } from 'src/app/features/authentication/services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private isUserLoggedInService: IsUserLoggedInService
  ) {}
  /**
   * This is the onLogout function which handle logout by removing ['user', 'token'] from localStorage
   */
  onLogout() {
    this.localStorageService.remove('user');
    this.localStorageService.remove('token');
    this.isUserLoggedInService.isLoggedIn.next(false);
    this.router.navigate(['/']);
  }
}
