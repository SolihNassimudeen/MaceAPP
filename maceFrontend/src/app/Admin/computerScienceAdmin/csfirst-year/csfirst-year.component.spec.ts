import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsfirstYearComponent } from './csfirst-year.component';

describe('CsfirstYearComponent', () => {
  let component: CsfirstYearComponent;
  let fixture: ComponentFixture<CsfirstYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsfirstYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsfirstYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
