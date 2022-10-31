import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TopNewsContainerComponent } from './top-news-container.component';

describe('TopNewsContainerComponent', () => {
  let component: TopNewsContainerComponent;
  let fixture: ComponentFixture<TopNewsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopNewsContainerComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNewsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
