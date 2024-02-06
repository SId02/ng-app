import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeapYearCheckerComponent } from './leap-year-checker.component';

describe('LeapYearCheckerComponent', () => {
  let component: LeapYearCheckerComponent;
  let fixture: ComponentFixture<LeapYearCheckerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeapYearCheckerComponent]
    });
    fixture = TestBed.createComponent(LeapYearCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
