import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { USERS_API } from 'src/app/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _http: HttpClient) {}
  loginUser(user: User): Observable<any> {
    return this._http.post(USERS_API + 'auth/login', user);
  }

  registerUser(user: User): Observable<any> {
    return this._http.post(USERS_API + 'auth/register', user);
  }
}
