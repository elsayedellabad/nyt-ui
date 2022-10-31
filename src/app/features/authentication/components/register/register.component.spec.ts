import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as mockRegisterResponseData from 'src/app/core/mocks/mocked-register.json';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let formBuilder: FormBuilder;
  let AuthenticationServiceSpy: any;
  beforeEach(async () => {
    AuthenticationServiceSpy = jasmine.createSpyObj(['registerUser']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [RegisterComponent],
      providers: [
        RegisterComponent,
        FormBuilder,
        {
          providers: AuthenticationService,
          useValue: AuthenticationServiceSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    AuthenticationServiceSpy = TestBed.inject(AuthenticationService);
    fixture.detectChanges();
    const previewWindowMock = {
      document: {
        write() { },
        body: {
          setAttribute() { }
        }
      }
    } as unknown as Window;
    const windowSpy = spyOn(window, 'open').and.returnValue(previewWindowMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return error when email is missing', () => {
    component.registerForm.setValue({ email: '', password: 'password' });
    component.onRegister(component.registerForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should return error when password is missing', () => {
    component.registerForm.setValue({ email: 'username@email.com', password: '' });
    component.onRegister(component.registerForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should return error when email and password are missing', () => {
    component.registerForm.setValue({ email: '', password: '' });
    component.onRegister(component.registerForm);
    expect(component.errorMessage).toBe('All fields are required.');
  });

  it('should test when email and password are valid', () => {
    const serviceSpy = spyOn(AuthenticationServiceSpy, 'registerUser');
    serviceSpy.and.returnValue(of(mockRegisterResponseData));
    component.registerForm.setValue({
      email: 'test@email.com',
      password: 'test',
    });
    component.onRegister(component.registerForm);
    expect(serviceSpy).toHaveBeenCalled();
  });
});
