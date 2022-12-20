import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssecondYearComponent } from './cssecond-year.component';

describe('CssecondYearComponent', () => {
  let component: CssecondYearComponent;
  let fixture: ComponentFixture<CssecondYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssecondYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssecondYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
