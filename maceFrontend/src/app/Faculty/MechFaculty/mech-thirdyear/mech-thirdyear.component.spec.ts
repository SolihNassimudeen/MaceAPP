import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechThirdyearComponent } from './mech-thirdyear.component';

describe('MechThirdyearComponent', () => {
  let component: MechThirdyearComponent;
  let fixture: ComponentFixture<MechThirdyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechThirdyearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechThirdyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
