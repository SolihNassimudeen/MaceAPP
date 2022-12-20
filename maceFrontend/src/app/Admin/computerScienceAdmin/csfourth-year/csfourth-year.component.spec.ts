import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfourthYearComponent } from './csfourth-year.component';

describe('CsfourthYearComponent', () => {
  let component: CsfourthYearComponent;
  let fixture: ComponentFixture<CsfourthYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsfourthYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsfourthYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
