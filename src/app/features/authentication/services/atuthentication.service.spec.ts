import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('AuthenticationService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let authenticationService: AuthenticationService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    authenticationService = new AuthenticationService(httpClientSpy);
  });

  it('test login method must return token when valid credentials', (done: DoneFn) => {
    let user: User = { email: 'bruno@email.com', password: 'bruno'};
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlY2hpZUBlbWFpbC5jb20iLCJwYXNzd29yZCI6InRlY2hpZSIsImlhdCI6MTY2Njg4NTU3NywiZXhwIjoxNjY2ODg5MTc3fQ.ze9iVXmgi82lP8wISm5lbjyhknDZrK4O6wgcIUkrZsA';
    httpClientSpy.post.and.returnValue(of(token));

    authenticationService.loginUser(user).subscribe({
      next: result => {
        expect(result)
          .withContext('expected token')
          .toEqual(token);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });

  it('test registerUser method must return token when valid credentials', (done: DoneFn) => {
    let user: User = { email: 'bruno@email.com', password: 'bruno'};
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlY2hpZUBlbWFpbC5jb20iLCJwYXNzd29yZCI6InRlY2hpZSIsImlhdCI6MTY2Njg4NTU3NywiZXhwIjoxNjY2ODg5MTc3fQ.ze9iVXmgi82lP8wISm5lbjyhknDZrK4O6wgcIUkrZsA';
    httpClientSpy.post.and.returnValue(of(token));

    authenticationService.registerUser(user).subscribe({
      next: result => {
        expect(result)
          .withContext('expected token')
          .toEqual(token);
        done();
      },
      error: done.fail
    });

    expect(httpClientSpy.post.calls.count())
      .withContext('one call')
      .toBe(1);
  });
});
