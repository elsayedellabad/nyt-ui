import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import * as mockLoginResponseData from 'src/app/core/mocks/mocked-login.json';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;
  let AuthenticationServiceSpy: any;
  beforeEach(async () => {
    AuthenticationServiceSpy = jasmine.createSpyObj(['loginUser']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginComponent],
      providers: [
        LoginComponent,
        FormBuilder,
        {
          providers: AuthenticationService,
          useValue: AuthenticationServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    AuthenticationServiceSpy = TestBed.inject(AuthenticationService);
    fixture.detectChanges();
    const previewWindowMock = {
      document: {
        write() {},
        body: {
          setAttribute() {},
        },
      },
    } as unknown as Window;
    const windowSpy = spyOn(window, 'open').and.returnValue(previewWindowMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return error when email is missing', () => {
    component.loginForm.setValue({ email: '', password: 'password' });
    component.onLogin(component.loginForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should return error when password is missing', () => {
    component.loginForm.setValue({ email: 'username', password: '' });
    component.onLogin(component.loginForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should return error when email and password are missing', () => {
    component.loginForm.setValue({ email: '', password: '' });
    component.onLogin(component.loginForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should test when email and password are valid', () => {
    const serviceSpy = spyOn(AuthenticationServiceSpy, 'loginUser');
    serviceSpy.and.returnValue(of(mockLoginResponseData));
    component.loginForm.setValue({ email: 'test@email.com', password: 'test' });
    component.onLogin(component.loginForm);
    expect(serviceSpy).toHaveBeenCalled();
  });
});
