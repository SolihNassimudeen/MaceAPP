import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechFirstyearComponent } from './mech-firstyear.component';

describe('MechFirstyearComponent', () => {
  let component: MechFirstyearComponent;
  let fixture: ComponentFixture<MechFirstyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechFirstyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechFirstyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
