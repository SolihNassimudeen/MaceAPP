import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsthirdYearComponent } from './csthird-year.component';

describe('CsthirdYearComponent', () => {
  let component: CsthirdYearComponent;
  let fixture: ComponentFixture<CsthirdYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsthirdYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsthirdYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
