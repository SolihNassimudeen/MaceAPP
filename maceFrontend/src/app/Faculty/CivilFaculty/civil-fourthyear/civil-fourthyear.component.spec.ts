import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilFourthyearComponent } from './civil-fourthyear.component';

describe('CivilFourthyearComponent', () => {
  let component: CivilFourthyearComponent;
  let fixture: ComponentFixture<CivilFourthyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilFourthyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilFourthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
