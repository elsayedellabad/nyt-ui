import { CardDataModel } from 'src/app/shared';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardsDetailsComponent } from './cards-details.component';
describe('CardsDetailsComponent', () => {
  let component: CardsDetailsComponent;
  let fixture: ComponentFixture<CardsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, MatDialogModule],
      providers:[{ provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDetailsComponent);
    component = fixture.componentInstance;
   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
