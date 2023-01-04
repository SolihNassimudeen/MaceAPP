import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechFourthyearComponent } from './mech-fourthyear.component';

describe('MechFourthyearComponent', () => {
  let component: MechFourthyearComponent;
  let fixture: ComponentFixture<MechFourthyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechFourthyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechFourthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
