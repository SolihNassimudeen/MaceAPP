import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechSecondyearComponent } from './mech-secondyear.component';

describe('MechSecondyearComponent', () => {
  let component: MechSecondyearComponent;
  let fixture: ComponentFixture<MechSecondyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechSecondyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechSecondyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
